import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Code, Coffee, GraduationCap, BrainCircuit } from 'lucide-react';

export function Navbar() {
  const location = useLocation();

  const links = [
    { to: '/python', label: 'Python', icon: <Code className="w-4 h-4" /> },
    { to: '/architecture', label: 'Architecture', icon: <GraduationCap className="w-4 h-4" /> },
    { to: '/java', label: 'Java', icon: <Coffee className="w-4 h-4" /> },
    { to: '/qcm', label: 'QCM', icon: <BrainCircuit className="w-4 h-4" /> },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-blue-600 text-white p-2 rounded-xl">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl text-gray-900 tracking-tight">DevSheets</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
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
        </div>
      </div>
    </nav>
  );
}
