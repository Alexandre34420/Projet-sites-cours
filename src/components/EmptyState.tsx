import React from 'react';
import { SearchX, RotateCcw } from 'lucide-react';

interface EmptyStateProps {
  searchQuery: string;
  selectedCategory: string;
  onReset: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  searchQuery,
  selectedCategory,
  onReset,
}) => {
  return (
    <div className="py-16 px-4 text-center max-w-md mx-auto">
      <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-400">
        <SearchX className="w-7 h-7" />
      </div>
      <h3 className="text-base font-semibold text-gray-900 mb-1">
        Aucune fiche correspondante
      </h3>
      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
        {searchQuery ? (
          <>
            Aucun résultat pour &laquo; <strong className="text-gray-700">{searchQuery}</strong> &raquo;
            {selectedCategory !== 'Tous' && ` dans la catégorie « ${selectedCategory} »`}.
          </>
        ) : (
          `Aucune fiche trouvée pour la catégorie « ${selectedCategory} ».`
        )}
      </p>
      <button
        type="button"
        onClick={onReset}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 text-white text-xs font-semibold hover:bg-gray-800 transition cursor-pointer shadow-xs"
      >
        <RotateCcw className="w-3.5 h-3.5" />
        <span>Réinitialiser les filtres</span>
      </button>
    </div>
  );
};
