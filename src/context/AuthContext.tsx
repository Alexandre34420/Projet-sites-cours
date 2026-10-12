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

interface StoredUserAccount extends User {
  passwordHash: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  register: (name: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  demoLogin: () => void;
  recordQuizResult: (score: number, total: number) => void;
}

const STORAGE_USERS_KEY = 'devsheets_users_db';
const STORAGE_ACTIVE_USER_KEY = 'devsheets_active_user';

const DEMO_ACCOUNT: StoredUserAccount = {
  id: 'usr_demo',
  name: 'Alexandre Dev',
  email: 'demo@devsheets.fr',
  passwordHash: 'demo1234',
  avatarColor: 'from-blue-500 to-indigo-600',
  createdAt: '2026-01-15T10:00:00.000Z',
  stats: {
    quizzesTaken: 5,
    totalScore: 68,
    totalQuestions: 80
  }
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Initialize accounts DB and restore active session
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

    const newUser: StoredUserAccount = {
      id: 'usr_' + Date.now(),
      name: cleanName,
      email: cleanEmail,
      passwordHash: cleanPass,
      avatarColor: randomGradient,
      createdAt: new Date().toISOString(),
      stats: {
        quizzesTaken: 0,
        totalScore: 0,
        totalQuestions: 0
      }
    };

    accounts.push(newUser);
    saveStoredAccounts(accounts);

    const { passwordHash: _, ...safeUser } = newUser;
    setUser(safeUser);
    localStorage.setItem(STORAGE_ACTIVE_USER_KEY, JSON.stringify(safeUser));

    return { success: true };
  };

  const demoLogin = () => {
    const { passwordHash: _, ...safeUser } = DEMO_ACCOUNT;
    setUser(safeUser);
    localStorage.setItem(STORAGE_ACTIVE_USER_KEY, JSON.stringify(safeUser));
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

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        demoLogin,
        recordQuizResult
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
