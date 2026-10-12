import { Link } from 'react-router-dom';
import { Code, GraduationCap, Coffee, BrainCircuit, ArrowRight, Terminal, Globe } from 'lucide-react';

export function Home() {
  const categories = [
    {
      title: 'Python',
      description: 'Apprenez les bases, les structures de données, la POO et les librairies de Data Science.',
      icon: <Code className="w-8 h-8 text-blue-600" />,
      to: '/python',
      color: 'bg-blue-50 border-blue-100 hover:border-blue-300'
    },
    {
      title: 'Architecture & Conception',
      description: 'Maîtrisez UML, les diagrammes de séquence, et les styles architecturaux modernes.',
      icon: <GraduationCap className="w-8 h-8 text-purple-600" />,
      to: '/architecture',
      color: 'bg-purple-50 border-purple-100 hover:border-purple-300'
    },
    {
      title: 'Java',
      description: 'Découvrez la POO, l\'encapsulation et les concepts avancés du langage Java.',
      icon: <Coffee className="w-8 h-8 text-amber-600" />,
      to: '/java',
      color: 'bg-amber-50 border-amber-100 hover:border-amber-300'
    },
    {
      title: 'Programmation C',
      description: 'Compilation, pointeurs, gestion dynamique de la mémoire, tableaux et structures en C.',
      icon: <Terminal className="w-8 h-8 text-cyan-600" />,
      to: '/c',
      color: 'bg-cyan-50 border-cyan-100 hover:border-cyan-300'
    },
    {
      title: 'Développement Web',
      description: 'Maîtrisez HTML5, CSS3, JavaScript moderne et le backend PHP avec PDO et sessions.',
      icon: <Globe className="w-8 h-8 text-orange-600" />,
      to: '/web',
      color: 'bg-orange-50 border-orange-100 hover:border-orange-300'
    },
    {
      title: 'QCM Interactif',
      description: 'Testez vos connaissances sur l\'ensemble des notions étudiées avec notre quiz interactif.',
      icon: <BrainCircuit className="w-8 h-8 text-emerald-600" />,
      to: '/qcm',
      color: 'bg-emerald-50 border-emerald-100 hover:border-emerald-300'
    }
  ];

  return (
    <div className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl lg:text-6xl mb-6">
          Votre plateforme de <span className="text-blue-600">révision</span> informatique.
        </h1>
        <p className="text-xl text-gray-600">
          Des cheat sheets claires, des exemples de code et des QCM interactifs pour maîtriser rapidement l'architecture logicielle et la programmation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {categories.map((cat, idx) => (
          <Link
            key={idx}
            to={cat.to}
            className={`flex flex-col p-8 rounded-3xl border-2 transition-all hover:shadow-lg ${cat.color} bg-opacity-50`}
          >
            <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm mb-6">
              {cat.icon}
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{cat.title}</h2>
            <p className="text-gray-600 mb-8 flex-1">{cat.description}</p>
            <div className="flex items-center text-gray-900 font-medium group">
              Commencer à réviser 
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
