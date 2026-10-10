import React from 'react';
import { Star } from 'lucide-react';
import { CATEGORY_STYLES } from '../constants';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  categoryCounts: Record<string, number>;
  totalCount: number;
  favoritesCount: number;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  categoryCounts,
  totalCount,
  favoritesCount,
}) => {
  return (
    <div className="py-4 border-b border-gray-200/60 bg-gray-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-1.5 pt-0.5 no-scrollbar scroll-smooth">
          {/* "Tous" pill */}
          <button
            type="button"
            onClick={() => onSelectCategory('Tous')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all shrink-0 cursor-pointer ${
              selectedCategory === 'Tous'
                ? 'bg-gray-900 text-white shadow-sm ring-1 ring-gray-900'
                : 'bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-100 border border-gray-200/80 shadow-2xs'
            }`}
          >
            <span>Tous</span>
            <span
              className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                selectedCategory === 'Tous'
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {totalCount}
            </span>
          </button>

          {/* Individual Category Pills */}
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            const style = CATEGORY_STYLES[cat];
            const count = categoryCounts[cat] || 0;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => onSelectCategory(cat)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-gray-900 text-white shadow-sm ring-1 ring-gray-900'
                    : 'bg-white text-gray-700 hover:text-gray-900 hover:bg-gray-100 border border-gray-200/80 shadow-2xs'
                }`}
              >
                {style && (
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isSelected ? 'bg-amber-300' : style.dot
                    }`}
                  />
                )}
                <span>{cat}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}

          {/* Favoris pill (if any favorites exist) */}
          {favoritesCount > 0 && (
            <button
              type="button"
              onClick={() => onSelectCategory('Favoris')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all shrink-0 cursor-pointer ${
                selectedCategory === 'Favoris'
                  ? 'bg-amber-500 text-white shadow-sm ring-1 ring-amber-500'
                  : 'bg-amber-50/80 text-amber-800 hover:bg-amber-100 border border-amber-200/80 shadow-2xs'
              }`}
            >
              <Star className="w-3.5 h-3.5 fill-current text-amber-400" />
              <span>Favoris</span>
              <span
                className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                  selectedCategory === 'Favoris'
                    ? 'bg-black/20 text-white'
                    : 'bg-amber-100 text-amber-800'
                }`}
              >
                {favoritesCount}
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
