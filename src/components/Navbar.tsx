import { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  BookOpen, 
  Code, 
  Coffee, 
  GraduationCap, 
  BrainCircuit, 
  Terminal, 
  Globe, 
  Database,
  LogIn, 
  User, 
  LogOut, 
  ChevronDown, 
  Menu, 
  X,
  Sparkles
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const links = [
    { to: '/python', label: 'Python', icon: <Code className="w-4 h-4" /> },
    { to: '/architecture', label: 'Architecture', icon: <GraduationCap className="w-4 h-4" /> },
    { to: '/java', label: 'Java', icon: <Coffee className="w-4 h-4" /> },
    { to: '/c', label: 'Langage C', icon: <Terminal className="w-4 h-4" /> },
    { to: '/web', label: 'Développement Web', icon: <Globe className="w-4 h-4" /> },
    { to: '/bdd', label: 'Bases de Données & SQL', icon: <Database className="w-4 h-4" /> },
    { to: '/qcm', label: 'QCM', icon: <BrainCircuit className="w-4 h-4" /> },
  ];

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false);
    navigate('/');
  };

  const initial = user?.name ? user.name.charAt(0).toUpperCase() : 'U';

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-blue-600 text-white p-2 rounded-xl group-hover:scale-105 transition-transform shadow-xs">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl text-gray-900 tracking-tight">
                Dev<span className="text-blue-600">Sheets</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-0.5 xl:space-x-1">
            {links.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`flex items-center gap-1.5 xl:gap-2 px-2.5 py-1.5 xl:px-3.5 xl:py-2 rounded-xl text-xs xl:text-sm font-semibold whitespace-nowrap transition-all ${
                    isActive 
                      ? 'bg-blue-50 text-blue-700' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {link.icon}
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right Section: Auth Button / User Profile */}
          <div className="hidden sm:flex items-center gap-3">
            {isAuthenticated && user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2.5 p-1.5 pr-3 rounded-2xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all cursor-pointer"
                >
                  <div className={`w-8 h-8 rounded-xl bg-gradient-to-tr ${user.avatarColor || 'from-blue-600 to-indigo-600'} text-white font-bold text-sm flex items-center justify-center shadow-xs`}>
                    {initial}
                  </div>
                  <div className="text-left hidden md:block">
                    <div className="text-xs font-bold text-gray-900 leading-tight">
                      {user.name.split(' ')[0]}
                    </div>
                    <div className="text-[10px] text-gray-500 font-medium">Mon Espace</div>
                  </div>
                  <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-bold text-gray-900 truncate">{user.name}</p>
                      <p className="text-xs text-gray-500 truncate">{user.email}</p>
                    </div>

                    <div className="py-1">
                      <Link
                        to="/profile"
                        className="flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                      >
                        <User className="w-4 h-4 text-gray-400" />
                        <span>Mon Profil & Statistiques</span>
                      </Link>
                      <Link
                        to="/qcm"
                        className="flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                      >
                        <Sparkles className="w-4 h-4 text-gray-400" />
                        <span>Lancer un QCM</span>
                      </Link>
                    </div>

                    <div className="border-t border-gray-100 pt-1 mt-1">
                      <button
                        type="button"
                        onClick={handleLogout}
                        className="flex items-center gap-2.5 w-full px-4 py-2 text-xs font-semibold text-red-600 hover:bg-red-50 transition-colors text-left cursor-pointer"
                      >
                        <LogOut className="w-4 h-4 text-red-500" />
                        <span>Se déconnecter</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  to="/auth"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shadow-xs hover:shadow-md transition-all group"
                >
                  <LogIn className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  <span>Se connecter</span>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-in fade-in duration-150 shadow-lg">
          {/* User status in mobile */}
          <div className="p-3 bg-gray-50 rounded-2xl mb-2 flex items-center justify-between">
            {isAuthenticated && user ? (
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-tr ${user.avatarColor || 'from-blue-600 to-indigo-600'} text-white font-bold text-sm flex items-center justify-center`}>
                  {initial}
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">{user.name}</div>
                  <div className="text-[11px] text-gray-500">{user.email}</div>
                </div>
              </div>
            ) : (
              <div className="text-xs text-gray-600">
                Vous n'êtes pas connecté
              </div>
            )}

            {isAuthenticated ? (
              <button
                type="button"
                onClick={handleLogout}
                className="text-xs text-red-600 font-bold hover:underline"
              >
                Déconnexion
              </button>
            ) : (
              <Link
                to="/auth"
                className="text-xs font-bold text-blue-600 hover:underline"
              >
                Connexion / Inscription
              </Link>
            )}
          </div>

          {/* Links list */}
          <div className="grid grid-cols-1 gap-1">
            {links.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    isActive 
                      ? 'bg-blue-50 text-blue-700' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              );
            })}

            {isAuthenticated && (
              <Link
                to="/profile"
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  location.pathname === '/profile'
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <User className="w-4 h-4 text-blue-600" />
                <span>Mon Profil & Statistiques</span>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
