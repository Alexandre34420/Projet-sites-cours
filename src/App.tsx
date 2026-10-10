/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect, useRef } from 'react';
import { CHEAT_SHEET_DATA, CheatSheetItem } from './data';
import { Header } from './components/Header';
import { CategoryFilter } from './components/CategoryFilter';
import { CheatCard } from './components/CheatCard';
import { CardModal } from './components/CardModal';
import { EmptyState } from './components/EmptyState';
import { Toast } from './components/Toast';
import { QuizSection } from './components/QuizSection';
import { 
  FileCode, 
  Copy, 
  Terminal, 
  BookMarked,
  Sparkles,
  ArrowUp,
  BrainCircuit
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'cheatsheet' | 'quiz'>('cheatsheet');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedTheme, setSelectedTheme] = useState<'vscDarkPlus' | 'dracula'>('vscDarkPlus');
  const [showLineNumbers, setShowLineNumbers] = useState(false);
  const [activeModalItem, setActiveModalItem] = useState<CheatSheetItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Favorites state persisted in localStorage
  const [favorites, setFavorites] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('python_cheatsheet_favs');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const searchInputRef = useRef<HTMLInputElement>(null);

  // Sync favorites with localStorage
  useEffect(() => {
    try {
      localStorage.setItem('python_cheatsheet_favs', JSON.stringify(favorites));
    } catch {
      // ignore
    }
  }, [favorites]);

  // Scroll to top visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut listener (/ to search, Esc to close modal)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && activeTab === 'cheatsheet' && document.activeElement !== searchInputRef.current) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
      if (e.key === 'Escape') {
        if (activeModalItem) {
          setActiveModalItem(null);
        } else if (searchQuery) {
          setSearchQuery('');
        }
      }
      if (activeModalItem) {
        if (e.key === 'ArrowLeft') {
          handlePrevModal();
        } else if (e.key === 'ArrowRight') {
          handleNextModal();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalItem, searchQuery, activeTab]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const handleToggleFavorite = (id: number) => {
    setFavorites((prev) => {
      const isFav = prev.includes(id);
      const next = isFav ? prev.filter((item) => item !== id) : [...prev, id];
      showToast(isFav ? 'Retiré des favoris' : 'Ajouté aux favoris ⭐');
      return next;
    });
  };

  // Distinct categories in exact order
  const categories = useMemo(() => {
    const set = new Set<string>();
    CHEAT_SHEET_DATA.forEach((item) => set.add(item.category));
    return Array.from(set);
  }, []);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    CHEAT_SHEET_DATA.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter cards based on category, search query, and favorites
  const filteredCards = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return CHEAT_SHEET_DATA.filter((item) => {
      // Category filter
      if (selectedCategory === 'Favoris') {
        if (!favorites.includes(item.id)) return false;
      } else if (selectedCategory !== 'Tous' && item.category !== selectedCategory) {
        return false;
      }

      // Search query filter (matches title or code content)
      if (query) {
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesCode = item.code.toLowerCase().includes(query);
        const matchesCat = item.category.toLowerCase().includes(query);
        return matchesTitle || matchesCode || matchesCat;
      }

      return true;
    });
  }, [searchQuery, selectedCategory, favorites]);

  // Modal navigation
  const currentModalIndex = useMemo(() => {
    if (!activeModalItem) return -1;
    return filteredCards.findIndex((item) => item.id === activeModalItem.id);
  }, [activeModalItem, filteredCards]);

  const handlePrevModal = () => {
    if (filteredCards.length === 0 || currentModalIndex === -1) return;
    const prevIndex = (currentModalIndex - 1 + filteredCards.length) % filteredCards.length;
    setActiveModalItem(filteredCards[prevIndex]);
  };

  const handleNextModal = () => {
    if (filteredCards.length === 0 || currentModalIndex === -1) return;
    const nextIndex = (currentModalIndex + 1) % filteredCards.length;
    setActiveModalItem(filteredCards[nextIndex]);
  };

  // Open modal directly by card ID (used from Quiz links)
  const handleOpenCardModalById = (cardId: number) => {
    const found = CHEAT_SHEET_DATA.find((item) => item.id === cardId);
    if (found) {
      setActiveModalItem(found);
    }
  };

  // Copy entire cheat sheet as a standalone .py script
  const handleCopyAllCode = async () => {
    const fullScript = CHEAT_SHEET_DATA.map((item) => {
      return `# ==========================================\n# ${item.id}. [${item.category}] ${item.title}\n# ==========================================\n${item.code}\n`;
    }).join('\n\n');

    try {
      await navigator.clipboard.writeText(fullScript);
      showToast('L\'intégralité des 16 fiches a été copiée dans le presse-papier !');
    } catch {
      showToast('Erreur lors de la copie');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Top Header with Tab Switcher */}
      <Header
        activeTab={activeTab}
        onTabChange={setActiveTab}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        totalCards={CHEAT_SHEET_DATA.length}
        filteredCount={filteredCards.length}
        selectedTheme={selectedTheme}
        onThemeToggle={() =>
          setSelectedTheme((prev) => (prev === 'vscDarkPlus' ? 'dracula' : 'vscDarkPlus'))
        }
        showLineNumbers={showLineNumbers}
        onLineNumbersToggle={() => setShowLineNumbers((prev) => !prev)}
        searchRef={searchInputRef}
      />

      {/* Main View Router */}
      {activeTab === 'cheatsheet' ? (
        <>
          {/* Category Filter Bar */}
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            categoryCounts={categoryCounts}
            totalCount={CHEAT_SHEET_DATA.length}
            favoritesCount={favorites.length}
          />

          {/* Cheatsheet Main Content Area */}
          <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            {/* Info bar / quick actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-2 border-b border-gray-200/60">
              <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                <span className="flex items-center gap-1.5 text-gray-700 font-semibold">
                  <FileCode className="w-4 h-4 text-blue-600" />
                  <span>{filteredCards.length} fiches affichées</span>
                </span>
                <span>•</span>
                <span>Python 3 Standard Library & Data Stack</span>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setActiveTab('quiz')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 font-medium transition cursor-pointer"
                  title="S'entraîner avec les QCM par niveau"
                >
                  <BrainCircuit className="w-3.5 h-3.5 text-amber-600" />
                  <span>S&apos;entraîner au Quiz QCM</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyAllCode}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-gray-100 border border-gray-200 text-gray-700 font-medium transition cursor-pointer shadow-2xs"
                  title="Copier l'ensemble des snippets sous forme d'un script Python"
                >
                  <Copy className="w-3.5 h-3.5 text-gray-500" />
                  <span>Copier tout le mémo (.py)</span>
                </button>
              </div>
            </div>

            {/* Cards Grid */}
            {filteredCards.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {filteredCards.map((item) => (
                  <CheatCard
                    key={item.id}
                    item={item}
                    theme={selectedTheme}
                    showLineNumbers={showLineNumbers}
                    isFavorite={favorites.includes(item.id)}
                    onToggleFavorite={handleToggleFavorite}
                    onOpenModal={setActiveModalItem}
                    searchQuery={searchQuery}
                  />
                ))}
              </div>
            ) : (
              <EmptyState
                searchQuery={searchQuery}
                selectedCategory={selectedCategory}
                onReset={() => {
                  setSearchQuery('');
                  setSelectedCategory('Tous');
                }}
              />
            )}

            {/* Quick Reference Footer Banner */}
            <div className="mt-12 p-5 sm:p-6 rounded-2xl bg-white border border-gray-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start sm:items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center shrink-0">
                  <Terminal className="w-5 h-5 text-amber-700" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                    <span>Raccourcis & Pratique continue</span>
                    <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-gray-100 text-gray-600">Pro Tip</span>
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Tapez <kbd className="font-mono bg-gray-100 px-1 py-0.5 rounded border border-gray-200 text-gray-700">/</kbd> n&apos;importe où pour lancer une recherche instantanée dans les codes et titres.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('Favoris');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 text-xs font-medium text-gray-700 transition cursor-pointer"
                >
                  <BookMarked className="w-3.5 h-3.5 text-amber-500" />
                  <span>Voir mes favoris ({favorites.length})</span>
                </button>
              </div>
            </div>
          </main>
        </>
      ) : (
        /* Quiz Main Content Area */
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <QuizSection
            onOpenCardModal={handleOpenCardModalById}
            theme={selectedTheme}
            allCards={CHEAT_SHEET_DATA}
          />
        </main>
      )}

      {/* Footer */}
      <footer className="mt-auto border-t border-gray-200/80 bg-white py-6 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="font-medium text-gray-700">Python CheatSheet & Quiz Pro</span>
            <span>—</span>
            <span>Fiches de révision Notion/Carbon & Entraînement interactif</span>
          </div>
          <div className="text-gray-400">
            Conçu pour étudiants, développeurs & data scientists
          </div>
        </div>
      </footer>

      {/* Card detail modal (active in both Cheatsheet and Quiz mode) */}
      {activeModalItem && (
        <CardModal
          item={activeModalItem}
          onClose={() => setActiveModalItem(null)}
          onPrev={handlePrevModal}
          onNext={handleNextModal}
          theme={selectedTheme}
          showLineNumbers={showLineNumbers}
          isFavorite={favorites.includes(activeModalItem.id)}
          onToggleFavorite={handleToggleFavorite}
        />
      )}

      {/* Notification Toast */}
      <Toast message={toastMessage} />

      {/* Scroll to Top floating button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 left-6 z-40 p-2.5 rounded-full bg-white text-gray-700 border border-gray-300 shadow-md hover:bg-gray-100 transition cursor-pointer"
          title="Retour en haut"
          aria-label="Retour en haut"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
