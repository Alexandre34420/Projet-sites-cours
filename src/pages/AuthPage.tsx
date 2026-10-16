import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  Mail, 
  Lock, 
  User as UserIcon, 
  Eye, 
  EyeOff, 
  Sparkles, 
  ArrowRight, 
  AlertCircle, 
  CheckCircle2, 
  BookOpen, 
  ShieldCheck,
  Zap
} from 'lucide-react';

export function AuthPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { user, login, register, demoLogin, isAuthenticated } = useAuth();

  const initialMode = searchParams.get('mode') === 'register' ? 'register' : 'login';
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true);

  // Status & feedback
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      const redirectTimer = setTimeout(() => {
        navigate('/profile');
      }, 1200);
      return () => clearTimeout(redirectTimer);
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMsg(null);
    setIsLoading(true);

    try {
      if (mode === 'login') {
        const result = await login(email, password);
        if (!result.success) {
          setError(result.error || 'Erreur lors de la connexion.');
          setIsLoading(false);
          return;
        }
        setSuccessMsg('Connexion réussie ! Redirection en cours...');
        setTimeout(() => navigate('/profile'), 900);
      } else {
        if (password !== confirmPassword) {
          setError('Les deux mots de passe ne correspondent pas.');
          setIsLoading(false);
          return;
        }

        if (!agreeTerms) {
          setError('Veuillez accepter les conditions pour continuer.');
          setIsLoading(false);
          return;
        }

        const result = await register(name, email, password);
        if (!result.success) {
          setError(result.error || "Erreur lors de l'inscription.");
          setIsLoading(false);
          return;
        }
        setSuccessMsg('Compte créé avec succès ! Bienvenue parmi nous.');
        setTimeout(() => navigate('/profile'), 900);
      }
    } catch {
      setError('Une erreur inattendue est survenue.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoLogin = () => {
    setError(null);
    demoLogin();
    setSuccessMsg('Connecté avec le compte Démo ! Redirection...');
    setTimeout(() => navigate('/profile'), 700);
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/40 via-white to-gray-50">
      <div className="max-w-md w-full">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-4 group">
            <div className="bg-blue-600 text-white p-2.5 rounded-2xl shadow-md group-hover:scale-105 transition-transform">
              <BookOpen className="w-6 h-6" />
            </div>
            <span className="font-extrabold text-2xl text-gray-900 tracking-tight">
              Dev<span className="text-blue-600">Sheets</span>
            </span>
          </Link>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            {mode === 'login' ? 'Bon retour parmi nous !' : 'Rejoignez DevSheets Pro'}
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            {mode === 'login'
              ? 'Accédez à votre espace révision et à l’historique de vos scores.'
              : 'Créez un compte pour sauvegarder vos progrès et vos fiches favorites.'}
          </p>
        </div>

        {/* Auth Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-blue-500/5 border border-gray-100 p-8 sm:p-10 relative overflow-hidden">
          {/* Glowing accent border */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500" />

          {/* Mode Switch Tabs */}
          <div className="flex bg-gray-100 p-1.5 rounded-2xl mb-8">
            <button
              type="button"
              onClick={() => {
                setMode('login');
                setError(null);
                setSuccessMsg(null);
              }}
              className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${
                mode === 'login'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Se connecter
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('register');
                setError(null);
                setSuccessMsg(null);
              }}
              className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${
                mode === 'register'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Créer un compte
            </button>
          </div>

          {/* Alert Messages */}
          {error && (
            <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200/80 flex items-start gap-3 text-red-700 text-sm animate-in fade-in">
              <AlertCircle className="w-5 h-5 shrink-0 text-red-500 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {successMsg && (
            <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-start gap-3 text-emerald-800 text-sm animate-in fade-in">
              <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-600 mt-0.5" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {mode === 'register' && (
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Nom ou Pseudo
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <UserIcon className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Sarah Connor"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-sm font-medium transition-all"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                Adresse e-mail
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nom@exemple.com"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-sm font-medium transition-all"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                  Mot de passe
                </label>
                {mode === 'login' && (
                  <button
                    type="button"
                    onClick={() => alert("Pour la démo, utilisez 'demo1234' avec l'email demo@devsheets.fr ou cliquez sur 'Compte Démo' ci-dessous.")}
                    className="text-xs text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Mot de passe oublié ?
                  </button>
                )}
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={mode === 'register' ? 'Minimum 6 caractères' : '••••••••'}
                  className="w-full pl-11 pr-11 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-sm font-medium transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {mode === 'register' && (
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Confirmer le mot de passe
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <Lock className="w-5 h-5" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Répétez le mot de passe"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-sm font-medium transition-all"
                  />
                </div>
              </div>
            )}

            {mode === 'register' && (
              <div className="flex items-start gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-gray-300 cursor-pointer"
                />
                <label htmlFor="agreeTerms" className="text-xs text-gray-600 cursor-pointer">
                  J'accepte les conditions d'utilisation et la politique de confidentialité de la plateforme de révision.
                </label>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
            >
              {isLoading ? (
                <span>Chargement...</span>
              ) : (
                <>
                  <span>{mode === 'login' ? 'Se connecter' : 'Créer mon compte'}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Demo Account 1-Click Button */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <button
              type="button"
              onClick={handleDemoLogin}
              className="w-full py-3 px-4 rounded-xl bg-amber-50 hover:bg-amber-100/80 border border-amber-200/80 text-amber-900 text-xs font-bold transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <Zap className="w-4 h-4 text-amber-600 group-hover:scale-110 transition-transform" />
              <span>Tester rapidement : Connexion Démo en 1 clic</span>
            </button>
            <p className="text-[11px] text-gray-500 text-center mt-2">
              (Identifiants démo : demo@devsheets.fr / demo1234)
            </p>
          </div>
        </div>

        {/* Feature Badges */}
        <div className="mt-8 grid grid-cols-2 gap-4 text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-medium text-gray-600 bg-white/70 backdrop-blur-xs py-2.5 px-3 rounded-xl border border-gray-200/60 shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Données privées & sécurisées</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs font-medium text-gray-600 bg-white/70 backdrop-blur-xs py-2.5 px-3 rounded-xl border border-gray-200/60 shadow-2xs">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>Suivi des scores aux QCM</span>
          </div>
        </div>

        {/* Admin Access Link */}
        <div className="text-center mt-6">
          <Link
            to="/admin"
            className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-indigo-600 font-medium transition-colors"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-500" />
            <span>Accès Portail Administrateur</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
