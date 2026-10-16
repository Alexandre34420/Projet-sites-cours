import { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth, UserConnectionLog, PublicUserView } from '../context/AuthContext';
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  EyeOff, 
  Users, 
  LogIn, 
  Clock, 
  Search, 
  RotateCcw, 
  Trash2, 
  LogOut, 
  AlertCircle, 
  Key, 
  Sparkles,
  Copy,
  CheckCircle2,
  Calendar,
  Check
} from 'lucide-react';

export function AdminPage() {
  const navigate = useNavigate();
  const { 
    isAdmin, 
    adminLogin, 
    adminLogout, 
    getConnectionLogs, 
    getRegisteredUsersPublic, 
    clearConnectionLogs,
    deleteConnectionLog 
  } = useAuth();

  // Admin Login state
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Dashboard state
  const [activeTab, setActiveTab] = useState<'connections' | 'users'>('connections');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [connectionLogs, setConnectionLogs] = useState<UserConnectionLog[]>([]);
  const [registeredUsers, setRegisteredUsers] = useState<PublicUserView[]>([]);
  const [refreshKey, setRefreshKey] = useState(0);

  // Load logs and accounts when admin is authenticated
  useEffect(() => {
    if (isAdmin) {
      setConnectionLogs(getConnectionLogs());
      setRegisteredUsers(getRegisteredUsersPublic());
    }
  }, [isAdmin, refreshKey]);

  const handleAdminLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    setIsSubmitting(true);

    try {
      const res = await adminLogin(password);
      if (!res.success) {
        setLoginError(res.error || 'Mot de passe incorrect.');
      } else {
        setPassword('');
      }
    } catch {
      setLoginError('Une erreur inattendue est survenue.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleQuickDemoAdmin = async () => {
    setLoginError(null);
    setIsSubmitting(true);
    await adminLogin('admin2026');
    setIsSubmitting(false);
  };

  const handleLogout = () => {
    adminLogout();
    navigate('/');
  };

  const handleClearHistory = () => {
    if (window.confirm("Êtes-vous sûr de vouloir réinitialiser l'historique des connexions ?")) {
      clearConnectionLogs();
      setRefreshKey((k) => k + 1);
    }
  };

  const handleDeleteSingleLog = (logId: string) => {
    deleteConnectionLog(logId);
    setRefreshKey((k) => k + 1);
  };

  const handleCopyId = async (id: string) => {
    try {
      await navigator.clipboard.writeText(id);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // ignore
    }
  };

  // Filtered connection logs
  const filteredLogs = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return connectionLogs;
    return connectionLogs.filter(
      (log) => log.name.toLowerCase().includes(q) || log.userId.toLowerCase().includes(q)
    );
  }, [connectionLogs, searchQuery]);

  // Filtered registered users
  const filteredUsers = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return registeredUsers;
    return registeredUsers.filter(
      (u) => u.name.toLowerCase().includes(q) || u.id.toLowerCase().includes(q)
    );
  }, [registeredUsers, searchQuery]);

  const formatDate = (isoString?: string) => {
    if (!isoString) return 'Inconnue';
    try {
      const date = new Date(isoString);
      return date.toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    } catch {
      return isoString;
    }
  };

  const formatRelativeTime = (isoString: string) => {
    try {
      const diffMs = Date.now() - new Date(isoString).getTime();
      const diffSec = Math.floor(diffMs / 1000);
      const diffMin = Math.floor(diffSec / 60);
      const diffHour = Math.floor(diffMin / 60);
      const diffDay = Math.floor(diffHour / 24);

      if (diffSec < 60) return "À l'instant";
      if (diffMin < 60) return `Il y a ${diffMin} min`;
      if (diffHour < 24) return `Il y a ${diffHour} h`;
      return `Il y a ${diffDay} j`;
    } catch {
      return '';
    }
  };

  // -------------------------------------------------------------
  // 1. UNPROTECTED VIEW: ADMIN LOGIN SCREEN
  // -------------------------------------------------------------
  if (!isAdmin) {
    return (
      <div className="min-h-[85vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-950">
        <div className="max-w-md w-full">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-4 shadow-lg shadow-indigo-500/10">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              Espace Administration
            </h1>
            <p className="text-sm text-gray-400 mt-2">
              Authentification sécurisée requise pour consulter les utilisateurs connectés.
            </p>
          </div>

          {/* Login Card */}
          <div className="bg-gray-850 bg-gray-900/90 backdrop-blur-md rounded-3xl border border-gray-800 p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500" />

            {loginError && (
              <div className="mb-6 p-4 rounded-2xl bg-red-950/50 border border-red-800/80 flex items-start gap-3 text-red-200 text-sm animate-in fade-in">
                <AlertCircle className="w-5 h-5 shrink-0 text-red-400 mt-0.5" />
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleAdminLoginSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                  Mot de passe Administrateur
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                    <Lock className="w-5 h-5" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Saisissez le mot de passe admin..."
                    className="w-full pl-11 pr-11 py-3.5 rounded-xl bg-gray-800/80 border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none text-white text-sm font-medium transition-all placeholder-gray-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
              >
                <Key className="w-4 h-4" />
                <span>{isSubmitting ? 'Vérification...' : "Déverrouiller l'accès"}</span>
              </button>
            </form>

            {/* Quick Demo Access Box */}
            <div className="mt-8 pt-6 border-t border-gray-800">
              <button
                type="button"
                onClick={handleQuickDemoAdmin}
                className="w-full py-3 px-4 rounded-xl bg-gray-800/80 hover:bg-gray-800 border border-gray-700 text-gray-300 hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
                <span>Connexion Rapide Admin (Mot de passe : admin2026)</span>
              </button>
            </div>
          </div>

          <div className="text-center mt-6">
            <Link
              to="/"
              className="text-xs text-gray-400 hover:text-gray-200 transition-colors font-medium"
            >
              ← Retour au site public
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // 2. PROTECTED VIEW: ADMIN DASHBOARD
  // -------------------------------------------------------------
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Top Admin Header */}
      <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 mb-8 shadow-xs relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 shadow-xs">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2.5">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                  Portail Administrateur
                </h1>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700 border border-green-200">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Connecté
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Supervision des utilisateurs connectés (identifiant unique et nom d'affichage).
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => setRefreshKey((k) => k + 1)}
              className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-bold transition-all shadow-xs cursor-pointer"
              title="Actualiser les données"
            >
              <RotateCcw className="w-4 h-4 text-gray-500" />
              <span>Actualiser</span>
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-red-50 hover:bg-red-100/80 border border-red-200 text-red-700 text-xs font-bold transition-all shadow-xs cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              <span>Quitter l'Admin</span>
            </button>
          </div>
        </div>
      </div>

      {/* KPI Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
        <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-gray-900">{registeredUsers.length}</div>
            <div className="text-xs font-medium text-gray-500">Utilisateurs inscrits</div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <LogIn className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-gray-900">{connectionLogs.length}</div>
            <div className="text-xs font-medium text-gray-500">Connexions tracées</div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <Clock className="w-6 h-6" />
          </div>
          <div className="overflow-hidden">
            <div className="text-sm font-extrabold text-gray-900 truncate">
              {connectionLogs.length > 0 ? formatRelativeTime(connectionLogs[0].timestamp) : 'Aucune'}
            </div>
            <div className="text-xs font-medium text-gray-500 truncate">Dernière activité</div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="text-sm font-extrabold text-gray-900">ID & Nom uniquement</div>
            <div className="text-xs font-medium text-emerald-600 font-semibold">Confidentialité 100%</div>
          </div>
        </div>
      </div>

      {/* Privacy Notice Alert */}
      <div className="mb-6 p-4 rounded-2xl bg-blue-50/80 border border-blue-200/80 flex items-start gap-3 text-blue-950 text-xs sm:text-sm">
        <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold">Politique de protection des données administratives : </span>
          Conformément à la directive, cette interface expose exclusivement l'<strong>identifiant technique</strong> de l'utilisateur et le <strong>nom d'affichage</strong> qu'il a choisi lors de son inscription. Aucune adresse e-mail ni aucun mot de passe n'est affiché.
        </div>
      </div>

      {/* Main Content Card */}
      <div className="bg-white rounded-3xl border border-gray-200 shadow-xs overflow-hidden">
        {/* Navigation Tabs & Search Toolbar */}
        <div className="p-6 border-b border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Tabs */}
          <div className="flex bg-gray-100 p-1.5 rounded-2xl">
            <button
              onClick={() => setActiveTab('connections')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'connections'
                  ? 'bg-white text-gray-900 shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <LogIn className="w-4 h-4 text-indigo-600" />
              <span>Historique des Connexions ({connectionLogs.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('users')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'users'
                  ? 'bg-white text-gray-900 shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Users className="w-4 h-4 text-blue-600" />
              <span>Utilisateurs Enregistrés ({registeredUsers.length})</span>
            </button>
          </div>

          {/* Search & Actions */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Filtrer par nom ou identifiant..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2 rounded-xl border border-gray-200 text-xs sm:text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
              />
            </div>

            {activeTab === 'connections' && connectionLogs.length > 0 && (
              <button
                onClick={handleClearHistory}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-gray-200 text-xs font-bold text-gray-600 hover:text-red-600 hover:border-red-200 hover:bg-red-50 transition-all cursor-pointer shrink-0"
                title="Vider l'historique"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Vider</span>
              </button>
            )}
          </div>
        </div>

        {/* Tab 1: Live Connection Logs Table */}
        {activeTab === 'connections' && (
          <div className="overflow-x-auto">
            {filteredLogs.length > 0 ? (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/75 border-b border-gray-200 text-[11px] font-bold uppercase tracking-wider text-gray-500">
                    <th className="py-3.5 px-6">Utilisateur (Nom du compte)</th>
                    <th className="py-3.5 px-6">Identifiant Unique (ID)</th>
                    <th className="py-3.5 px-6">Date & Heure de Connexion</th>
                    <th className="py-3.5 px-6">Délai</th>
                    <th className="py-3.5 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  {filteredLogs.map((log) => {
                    const initial = log.name ? log.name.charAt(0).toUpperCase() : 'U';
                    const isCopied = copiedId === log.userId;
                    return (
                      <tr key={log.id} className="hover:bg-gray-50/60 transition-colors">
                        {/* Name & Avatar */}
                        <td className="py-4 px-6 font-semibold text-gray-900">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-blue-600 text-white font-bold text-xs flex items-center justify-center shadow-2xs shrink-0">
                              {initial}
                            </div>
                            <span className="font-bold text-gray-900">{log.name}</span>
                          </div>
                        </td>

                        {/* User ID with Copy button */}
                        <td className="py-4 px-6">
                          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-gray-100 border border-gray-200 font-mono text-xs text-gray-800">
                            <span>{log.userId}</span>
                            <button
                              onClick={() => handleCopyId(log.userId)}
                              className="text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
                              title="Copier l'identifiant"
                            >
                              {isCopied ? (
                                <Check className="w-3.5 h-3.5 text-green-600" />
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                            </button>
                          </div>
                        </td>

                        {/* Date and Time */}
                        <td className="py-4 px-6 text-gray-600 text-xs sm:text-sm font-medium">
                          {formatDate(log.timestamp)}
                        </td>

                        {/* Relative time badge */}
                        <td className="py-4 px-6">
                          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">
                            {formatRelativeTime(log.timestamp)}
                          </span>
                        </td>

                        {/* Delete action */}
                        <td className="py-4 px-4 text-right">
                          <button
                            onClick={() => handleDeleteSingleLog(log.id)}
                            className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                            title="Supprimer cette ligne"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <div className="text-center py-16 px-4">
                <LogIn className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <h3 className="text-base font-bold text-gray-900 mb-1">
                  Aucune connexion trouvée
                </h3>
                <p className="text-xs text-gray-500 max-w-sm mx-auto">
                  {searchQuery
                    ? "Aucun résultat ne correspond à votre filtre de recherche."
                    : "Les nouvelles connexions d'utilisateurs apparaîtront automatiquement ici dès qu'ils se connecteront à leur compte."}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Registered Accounts Summary */}
        {activeTab === 'users' && (
          <div className="overflow-x-auto">
            {filteredUsers.length > 0 ? (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/75 border-b border-gray-200 text-[11px] font-bold uppercase tracking-wider text-gray-500">
                    <th className="py-3.5 px-6">Nom d'affichage du compte</th>
                    <th className="py-3.5 px-6">Identifiant Unique (ID)</th>
                    <th className="py-3.5 px-6">Créé le</th>
                    <th className="py-3.5 px-6">Dernière connexion</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  {filteredUsers.map((u) => {
                    const initial = u.name ? u.name.charAt(0).toUpperCase() : 'U';
                    const isCopied = copiedId === u.id;
                    return (
                      <tr key={u.id} className="hover:bg-gray-50/60 transition-colors">
                        {/* Name */}
                        <td className="py-4 px-6 font-semibold text-gray-900">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold text-xs flex items-center justify-center shadow-2xs shrink-0">
                              {initial}
                            </div>
                            <span className="font-bold text-gray-900">{u.name}</span>
                          </div>
                        </td>

                        {/* ID with Copy button */}
                        <td className="py-4 px-6">
                          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-gray-100 border border-gray-200 font-mono text-xs text-gray-800">
                            <span>{u.id}</span>
                            <button
                              onClick={() => handleCopyId(u.id)}
                              className="text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
                              title="Copier l'identifiant"
                            >
                              {isCopied ? (
                                <Check className="w-3.5 h-3.5 text-green-600" />
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                            </button>
                          </div>
                        </td>

                        {/* Creation Date */}
                        <td className="py-4 px-6 text-gray-600 text-xs sm:text-sm">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-gray-400" />
                            <span>{formatDate(u.createdAt)}</span>
                          </div>
                        </td>

                        {/* Last Login Date */}
                        <td className="py-4 px-6 text-gray-600 text-xs sm:text-sm">
                          {u.lastLoginAt ? (
                            <span className="text-gray-900 font-medium">
                              {formatDate(u.lastLoginAt)}
                            </span>
                          ) : (
                            <span className="text-gray-400 italic">Non renseignée</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <div className="text-center py-16 px-4">
                <Users className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <h3 className="text-base font-bold text-gray-900 mb-1">
                  Aucun compte trouvé
                </h3>
                <p className="text-xs text-gray-500">
                  Aucun utilisateur ne correspond à votre filtre.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
