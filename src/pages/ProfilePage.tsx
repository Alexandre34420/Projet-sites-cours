import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  User as UserIcon, 
  Mail, 
  Calendar, 
  Trophy, 
  BrainCircuit, 
  CheckCircle2, 
  LogOut, 
  ArrowRight, 
  Code, 
  Globe, 
  Terminal, 
  Sparkles,
  GraduationCap
} from 'lucide-react';

export function ProfilePage() {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center py-16 px-4">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-gray-200 text-center shadow-sm">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <UserIcon className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Vous n'êtes pas connecté</h2>
          <p className="text-sm text-gray-600 mb-6">
            Connectez-vous ou créez un compte pour accéder à votre espace personnel et suivre vos résultats.
          </p>
          <Link
            to="/auth"
            className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all"
          >
            Se connecter / Créer un compte
          </Link>
        </div>
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const initial = user.name ? user.name.charAt(0).toUpperCase() : 'U';
  const createdDate = new Date(user.createdAt).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const accuracyRate = user.stats?.totalQuestions > 0
    ? Math.round((user.stats.totalScore / user.stats.totalQuestions) * 100)
    : 0;

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Top Banner & Header */}
      <div className="bg-white rounded-3xl border border-gray-200 p-8 sm:p-10 mb-8 shadow-xs relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/40 via-indigo-100/30 to-transparent rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

        <div className="relative flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            {/* Avatar */}
            <div className={`w-24 h-24 rounded-3xl bg-gradient-to-tr ${user.avatarColor || 'from-blue-600 to-indigo-600'} text-white flex items-center justify-center text-4xl font-extrabold shadow-lg shadow-blue-500/20`}>
              {initial}
            </div>

            <div>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                  {user.name}
                </h1>
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200">
                  Membre Vérifié
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-medium text-gray-500">
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Inscrit le {createdDate}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-red-200 bg-red-50 hover:bg-red-100/80 text-red-700 text-xs font-bold transition-all shadow-xs shrink-0 cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Se déconnecter</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-xs flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <BrainCircuit className="w-7 h-7" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-gray-900">
              {user.stats?.quizzesTaken || 0}
            </div>
            <div className="text-xs font-medium text-gray-500">Quiz réalisés</div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-xs flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-gray-900">
              {user.stats?.totalScore || 0}
              <span className="text-xs text-gray-400 font-medium ml-1">
                / {user.stats?.totalQuestions || 0}
              </span>
            </div>
            <div className="text-xs font-medium text-gray-500">Bonnes réponses</div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-xs flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <Trophy className="w-7 h-7" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-gray-900">
              {accuracyRate}%
            </div>
            <div className="text-xs font-medium text-gray-500">Taux de réussite</div>
          </div>
        </div>
      </div>

      {/* Quick Launch & Courses Section */}
      <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-xs mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-extrabold text-gray-900">Continuer mes révisions</h2>
            <p className="text-xs text-gray-500 mt-1">Accédez à vos fiches favorites et lancez un test.</p>
          </div>
          <Link
            to="/qcm"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-xs"
          >
            <Sparkles className="w-4 h-4" />
            <span>Tester mes connaissances (QCM)</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            to="/web"
            className="p-5 rounded-2xl border border-gray-200 hover:border-orange-300 hover:bg-orange-50/50 transition-all group flex flex-col"
          >
            <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-3">
              <Globe className="w-5 h-5" />
            </div>
            <div className="font-bold text-gray-900 text-sm mb-1 group-hover:text-orange-600 transition-colors">
              Développement Web
            </div>
            <div className="text-xs text-gray-500 flex-1">HTML, CSS, JS moderne et PHP PDO.</div>
            <div className="mt-4 flex items-center text-xs font-semibold text-orange-600">
              Voir la fiche <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </Link>

          <Link
            to="/c"
            className="p-5 rounded-2xl border border-gray-200 hover:border-cyan-300 hover:bg-cyan-50/50 transition-all group flex flex-col"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-600 flex items-center justify-center mb-3">
              <Terminal className="w-5 h-5" />
            </div>
            <div className="font-bold text-gray-900 text-sm mb-1 group-hover:text-cyan-600 transition-colors">
              Langage C
            </div>
            <div className="text-xs text-gray-500 flex-1">Pointeurs, mémoire dynamique et structures.</div>
            <div className="mt-4 flex items-center text-xs font-semibold text-cyan-600">
              Voir la fiche <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </Link>

          <Link
            to="/python"
            className="p-5 rounded-2xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all group flex flex-col"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
              <Code className="w-5 h-5" />
            </div>
            <div className="font-bold text-gray-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">
              Python
            </div>
            <div className="text-xs text-gray-500 flex-1">Bases, POO et librairies Data Science.</div>
            <div className="mt-4 flex items-center text-xs font-semibold text-blue-600">
              Voir la fiche <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </Link>

          <Link
            to="/architecture"
            className="p-5 rounded-2xl border border-gray-200 hover:border-purple-300 hover:bg-purple-50/50 transition-all group flex flex-col"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-3">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="font-bold text-gray-900 text-sm mb-1 group-hover:text-purple-600 transition-colors">
              Architecture & UML
            </div>
            <div className="text-xs text-gray-500 flex-1">Diagrammes, styles et modélisation.</div>
            <div className="mt-4 flex items-center text-xs font-semibold text-purple-600">
              Voir la fiche <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
