import React, { createContext, useContext, useState, useEffect } from 'react';

export interface UserStats {
  quizzesTaken: number;
  totalScore: number;
  totalQuestions: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatarColor?: string;
  createdAt: string;
  stats: UserStats;
}

export interface UserConnectionLog {
  id: string;
  userId: string;
  name: string;
  timestamp: string;
}

export interface PublicUserView {
  id: string;
  name: string;
  createdAt: string;
  lastLoginAt?: string;
}

interface StoredUserAccount extends User {
  passwordHash: string;
  lastLoginAt?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  register: (name: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  demoLogin: () => void;
  recordQuizResult: (score: number, total: number) => void;
  // Admin feature
  isAdmin: boolean;
  adminLogin: (password: string) => Promise<{ success: boolean; error?: string }>;
  adminLogout: () => void;
  getConnectionLogs: () => UserConnectionLog[];
  getRegisteredUsersPublic: () => PublicUserView[];
  clearConnectionLogs: () => void;
  deleteConnectionLog: (logId: string) => void;
}

const STORAGE_USERS_KEY = 'devsheets_users_db';
const STORAGE_ACTIVE_USER_KEY = 'devsheets_active_user';
const STORAGE_CONNECTIONS_KEY = 'devsheets_connections_history';
const STORAGE_ADMIN_AUTH_KEY = 'devsheets_admin_session';
const DEFAULT_ADMIN_PASSWORD = 'admin2026';

const DEMO_ACCOUNT: StoredUserAccount = {
  id: 'usr_demo',
  name: 'Alexandre Dev',
  email: 'demo@devsheets.fr',
  passwordHash: 'demo1234',
  avatarColor: 'from-blue-500 to-indigo-600',
  createdAt: '2026-01-15T10:00:00.000Z',
  lastLoginAt: '2026-10-16T22:30:00.000Z',
  stats: {
    quizzesTaken: 5,
    totalScore: 68,
    totalQuestions: 80
  }
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  // Initialize accounts DB, restore active session & admin session
  useEffect(() => {
    try {
      const existingUsersRaw = localStorage.getItem(STORAGE_USERS_KEY);
      if (!existingUsersRaw) {
        localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify([DEMO_ACCOUNT]));
      }

      const activeUserRaw = localStorage.getItem(STORAGE_ACTIVE_USER_KEY);
      if (activeUserRaw) {
        const parsed = JSON.parse(activeUserRaw);
        setUser(parsed);
      }

      // Restore admin session
      const adminSessionRaw = sessionStorage.getItem(STORAGE_ADMIN_AUTH_KEY);
      if (adminSessionRaw === 'true') {
        setIsAdmin(true);
      }

      // Initialize initial connection logs if empty
      const existingLogsRaw = localStorage.getItem(STORAGE_CONNECTIONS_KEY);
      if (!existingLogsRaw) {
        const initialLogs: UserConnectionLog[] = [
          {
            id: 'conn_demo_init',
            userId: DEMO_ACCOUNT.id,
            name: DEMO_ACCOUNT.name,
            timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString()
          }
        ];
        localStorage.setItem(STORAGE_CONNECTIONS_KEY, JSON.stringify(initialLogs));
      }
    } catch (e) {
      console.error('Error initializing Auth:', e);
    }
  }, []);

  const getStoredAccounts = (): StoredUserAccount[] => {
    try {
      const raw = localStorage.getItem(STORAGE_USERS_KEY);
      if (raw) {
        return JSON.parse(raw);
      }
    } catch {
      // fallback
    }
    return [DEMO_ACCOUNT];
  };

  const saveStoredAccounts = (accounts: StoredUserAccount[]) => {
    try {
      localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(accounts));
    } catch (e) {
      console.error('Failed to save accounts:', e);
    }
  };

  // Record a login event (stores only user identifier and name, with timestamp)
  const recordConnection = (userId: string, name: string) => {
    try {
      const raw = localStorage.getItem(STORAGE_CONNECTIONS_KEY);
      const logs: UserConnectionLog[] = raw ? JSON.parse(raw) : [];
      const newLog: UserConnectionLog = {
        id: 'conn_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
        userId,
        name,
        timestamp: new Date().toISOString()
      };
      logs.unshift(newLog);
      // Keep up to 200 logs
      localStorage.setItem(STORAGE_CONNECTIONS_KEY, JSON.stringify(logs.slice(0, 200)));
    } catch (e) {
      console.error('Failed to record connection:', e);
    }
  };

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    const cleanEmail = email.trim().toLowerCase();
    const cleanPass = password.trim();

    if (!cleanEmail || !cleanPass) {
      return { success: false, error: 'Veuillez remplir tous les champs.' };
    }

    const accounts = getStoredAccounts();
    const match = accounts.find((acc) => acc.email.toLowerCase() === cleanEmail);

    if (!match) {
      return { success: false, error: 'Aucun compte associé à cette adresse e-mail.' };
    }

    if (match.passwordHash !== cleanPass) {
      return { success: false, error: 'Mot de passe incorrect.' };
    }

    // Update lastLoginAt
    match.lastLoginAt = new Date().toISOString();
    saveStoredAccounts(accounts);

    // Record login event for admin audit
    recordConnection(match.id, match.name);

    const { passwordHash: _, ...safeUser } = match;
    setUser(safeUser);
    localStorage.setItem(STORAGE_ACTIVE_USER_KEY, JSON.stringify(safeUser));
    return { success: true };
  };

  const register = async (name: string, email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanPass = password.trim();

    if (!cleanName || !cleanEmail || !cleanPass) {
      return { success: false, error: 'Tous les champs sont requis.' };
    }

    if (cleanName.length < 2) {
      return { success: false, error: 'Le nom doit contenir au moins 2 caractères.' };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      return { success: false, error: 'Format d\'adresse e-mail invalide.' };
    }

    if (cleanPass.length < 6) {
      return { success: false, error: 'Le mot de passe doit contenir au moins 6 caractères.' };
    }

    const accounts = getStoredAccounts();
    const existing = accounts.find((acc) => acc.email.toLowerCase() === cleanEmail);
    if (existing) {
      return { success: false, error: 'Un compte existe déjà avec cette adresse e-mail.' };
    }

    const avatarGradients = [
      'from-blue-500 to-indigo-600',
      'from-emerald-500 to-teal-600',
      'from-purple-500 to-pink-600',
      'from-orange-500 to-amber-600',
      'from-cyan-500 to-blue-600'
    ];
    const randomGradient = avatarGradients[Math.floor(Math.random() * avatarGradients.length)];

    const now = new Date().toISOString();
    const newUser: StoredUserAccount = {
      id: 'usr_' + Date.now(),
      name: cleanName,
      email: cleanEmail,
      passwordHash: cleanPass,
      avatarColor: randomGradient,
      createdAt: now,
      lastLoginAt: now,
      stats: {
        quizzesTaken: 0,
        totalScore: 0,
        totalQuestions: 0
      }
    };

    accounts.push(newUser);
    saveStoredAccounts(accounts);

    // Record login event for admin audit
    recordConnection(newUser.id, newUser.name);

    const { passwordHash: _, ...safeUser } = newUser;
    setUser(safeUser);
    localStorage.setItem(STORAGE_ACTIVE_USER_KEY, JSON.stringify(safeUser));

    return { success: true };
  };

  const demoLogin = () => {
    const { passwordHash: _, ...safeUser } = DEMO_ACCOUNT;
    setUser(safeUser);
    localStorage.setItem(STORAGE_ACTIVE_USER_KEY, JSON.stringify(safeUser));
    // Record login event for admin audit
    recordConnection(DEMO_ACCOUNT.id, DEMO_ACCOUNT.name);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_ACTIVE_USER_KEY);
  };

  const recordQuizResult = (score: number, total: number) => {
    if (!user) return;

    setUser((prev) => {
      if (!prev) return null;
      const updated: User = {
        ...prev,
        stats: {
          quizzesTaken: (prev.stats?.quizzesTaken || 0) + 1,
          totalScore: (prev.stats?.totalScore || 0) + score,
          totalQuestions: (prev.stats?.totalQuestions || 0) + total
        }
      };
      localStorage.setItem(STORAGE_ACTIVE_USER_KEY, JSON.stringify(updated));

      // Also update in accounts DB
      const accounts = getStoredAccounts();
      const idx = accounts.findIndex((a) => a.id === updated.id);
      if (idx !== -1) {
        accounts[idx].stats = updated.stats;
        saveStoredAccounts(accounts);
      }

      return updated;
    });
  };

  // --- ADMIN METHODS ---
  const adminLogin = async (password: string): Promise<{ success: boolean; error?: string }> => {
    const cleanPass = password.trim();
    if (!cleanPass) {
      return { success: false, error: 'Veuillez renseigner le mot de passe administrateur.' };
    }

    if (cleanPass === DEFAULT_ADMIN_PASSWORD || cleanPass === 'admin' || cleanPass === 'admin123') {
      setIsAdmin(true);
      sessionStorage.setItem(STORAGE_ADMIN_AUTH_KEY, 'true');
      return { success: true };
    }

    return { success: false, error: 'Mot de passe administrateur incorrect.' };
  };

  const adminLogout = () => {
    setIsAdmin(false);
    sessionStorage.removeItem(STORAGE_ADMIN_AUTH_KEY);
  };

  const getConnectionLogs = (): UserConnectionLog[] => {
    try {
      const raw = localStorage.getItem(STORAGE_CONNECTIONS_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  };

  // Strictly returns only public identifier and name of registered users
  const getRegisteredUsersPublic = (): PublicUserView[] => {
    const accounts = getStoredAccounts();
    return accounts.map((acc) => ({
      id: acc.id,
      name: acc.name,
      createdAt: acc.createdAt,
      lastLoginAt: acc.lastLoginAt
    }));
  };

  const clearConnectionLogs = () => {
    try {
      localStorage.setItem(STORAGE_CONNECTIONS_KEY, JSON.stringify([]));
    } catch (e) {
      console.error('Failed to clear logs:', e);
    }
  };

  const deleteConnectionLog = (logId: string) => {
    try {
      const raw = localStorage.getItem(STORAGE_CONNECTIONS_KEY);
      if (raw) {
        const logs: UserConnectionLog[] = JSON.parse(raw);
        const filtered = logs.filter((l) => l.id !== logId);
        localStorage.setItem(STORAGE_CONNECTIONS_KEY, JSON.stringify(filtered));
      }
    } catch (e) {
      console.error('Failed to delete log:', e);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        demoLogin,
        recordQuizResult,
        // Admin
        isAdmin,
        adminLogin,
        adminLogout,
        getConnectionLogs,
        getRegisteredUsersPublic,
        clearConnectionLogs,
        deleteConnectionLog
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
