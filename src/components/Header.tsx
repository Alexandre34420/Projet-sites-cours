import React from 'react';
import { Search, X, Code2, Sparkles, SlidersHorizontal, BookOpen, Layers, Award } from 'lucide-react';

interface HeaderProps {
  activeTab: 'cheatsheet' | 'quiz';
  onTabChange: (tab: 'cheatsheet' | 'quiz') => void;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  totalCards: number;
  filteredCount: number;
  selectedTheme: 'vscDarkPlus' | 'dracula';
  onThemeToggle: () => void;
  showLineNumbers: boolean;
  onLineNumbersToggle: () => void;
  searchRef: React.RefObject<HTMLInputElement | null>;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onTabChange,
  searchQuery,
  onSearchChange,
  totalCards,
  filteredCount,
  selectedTheme,
  onThemeToggle,
  showLineNumbers,
  onLineNumbersToggle,
  searchRef,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5">
        {/* Top bar with branding, navigation tabs, and controls */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 sm:gap-4">
          {/* Logo & titles */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#306998] to-[#FFD43B] p-[2px] shadow-sm flex items-center justify-center shrink-0">
                <div className="w-full h-full bg-gray-900 rounded-[10px] flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-amber-300" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
                    Python Cheat Sheet
                  </h1>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                    v3.12+
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 font-normal">
                  Fiches de révision interactives & entraînement QCM
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Tabs (Fiches vs Quiz) */}
          <div className="flex items-center gap-1.5 p-1 bg-gray-100 rounded-xl border border-gray-200/80 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => onTabChange('cheatsheet')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'cheatsheet'
                  ? 'bg-white text-gray-900 shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Layers className="w-4 h-4 text-blue-600" />
              <span>Fiches Mémo</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-gray-100 text-gray-500">
                {totalCards}
              </span>
            </button>

            <button
              type="button"
              onClick={() => onTabChange('quiz')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'quiz'
                  ? 'bg-white text-gray-900 shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Award className="w-4 h-4 text-amber-600" />
              <span>Quiz QCM</span>
              <span className="text-[10px] font-semibold px-1.5 py-0.2 rounded-full bg-amber-100 text-amber-800">
                3 Niveaux
              </span>
            </button>
          </div>

          {/* Quick tool controls */}
          <div className="flex items-center gap-2 self-start lg:self-auto text-xs">
            {/* Theme switcher */}
            <button
              type="button"
              onClick={onThemeToggle}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium transition cursor-pointer"
              title="Changer le thème de coloration syntaxique"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Thème : <strong className="font-semibold">{selectedTheme === 'vscDarkPlus' ? 'VS Code' : 'Dracula'}</strong></span>
            </button>

            {/* Line numbers toggle */}
            <button
              type="button"
              onClick={onLineNumbersToggle}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-medium transition cursor-pointer ${
                showLineNumbers
                  ? 'border-blue-300 bg-blue-50 text-blue-700'
                  : 'border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-600'
              }`}
              title="Afficher/Masquer les numéros de ligne"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Lignes {showLineNumbers ? 'On' : 'Off'}</span>
            </button>

            {/* Print button (only in cheatsheet mode) */}
            {activeTab === 'cheatsheet' && (
              <button
                type="button"
                onClick={() => window.print()}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium transition cursor-pointer"
                title="Imprimer ou exporter en PDF"
              >
                <BookOpen className="w-3.5 h-3.5 text-gray-500" />
                <span>Imprimer</span>
              </button>
            )}
          </div>
        </div>

        {/* Search bar section (visible when in Cheatsheet tab) */}
        {activeTab === 'cheatsheet' && (
          <div className="mt-3.5 relative">
            <div className="relative flex items-center">
              <Search className="absolute left-3.5 w-4 h-4 text-gray-400 pointer-events-none" />
              <input
                ref={searchRef}
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Rechercher par titre (ex: Dictionnaires), mot-clé (ex: lambda, len, open)..."
                className="w-full pl-10 pr-24 py-2.5 bg-gray-50 hover:bg-gray-100/70 focus:bg-white text-sm text-gray-900 placeholder-gray-400 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-3 focus:ring-blue-100 transition-all outline-none"
              />
              {searchQuery ? (
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 p-1 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-200/60 transition cursor-pointer"
                  title="Effacer la recherche"
                  aria-label="Effacer la recherche"
                >
                  <X className="w-4 h-4" />
                </button>
              ) : (
                <div className="absolute right-3 hidden sm:flex items-center gap-1 text-[11px] font-mono text-gray-400 border border-gray-200 bg-white px-2 py-0.5 rounded shadow-2xs pointer-events-none">
                  <span>Presser</span>
                  <kbd className="font-semibold text-gray-600">/</kbd>
                </div>
              )}
            </div>

            {/* Search status indicator */}
            {searchQuery && (
              <div className="flex items-center justify-between mt-2 px-1 text-xs text-gray-500">
                <span>
                  Résultats pour &laquo; <strong className="text-gray-800">{searchQuery}</strong> &raquo;
                </span>
                <span className="font-medium text-gray-700">
                  {filteredCount} {filteredCount > 1 ? 'fiches trouvées' : 'fiche trouvée'} sur {totalCards}
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};
