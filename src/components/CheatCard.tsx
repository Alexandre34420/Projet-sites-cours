import React, { useState } from 'react';
import { CheatSheetItem } from '../data';
import { CodeBlock } from './CodeBlock';
import { CATEGORY_STYLES, DEFAULT_CATEGORY_STYLE, CARD_EXPLANATIONS } from '../constants';
import { Star, ChevronDown, ChevronUp, Lightbulb, Maximize2 } from 'lucide-react';

interface CheatCardProps {
  item: CheatSheetItem;
  theme: 'vscDarkPlus' | 'dracula';
  showLineNumbers: boolean;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
  onOpenModal: (item: CheatSheetItem) => void;
  searchQuery?: string;
}

export const CheatCard: React.FC<CheatCardProps> = ({
  item,
  theme,
  showLineNumbers,
  isFavorite,
  onToggleFavorite,
  onOpenModal,
}) => {
  const [showExplanation, setShowExplanation] = useState(false);
  const style = CATEGORY_STYLES[item.category] || DEFAULT_CATEGORY_STYLE;
  const extraInfo = CARD_EXPLANATIONS[item.id];

  return (
    <div className="group relative flex flex-col justify-between bg-white rounded-xl border border-gray-200/90 shadow-xs hover:shadow-md hover:border-gray-300 transition-all duration-200 overflow-hidden">
      {/* Card Header */}
      <div className="p-4 sm:p-4.5 border-b border-gray-100 flex items-start justify-between gap-3">
        {/* Left: Star & Title */}
        <div className="flex items-start gap-2.5 min-w-0">
          <button
            type="button"
            onClick={() => onToggleFavorite(item.id)}
            className={`mt-0.5 p-1 rounded-md transition cursor-pointer shrink-0 ${
              isFavorite
                ? 'text-amber-500 hover:text-amber-600 bg-amber-50'
                : 'text-gray-300 hover:text-amber-500 hover:bg-gray-100'
            }`}
            title={isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
            aria-label={isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
          >
            <Star
              className={`w-4 h-4 ${isFavorite ? 'fill-amber-400 stroke-amber-500' : 'stroke-[1.8]'}`}
            />
          </button>
          <div>
            <h2 className="text-base font-semibold text-gray-900 tracking-tight leading-snug">
              {item.title}
            </h2>
            <span className="text-[11px] font-mono text-gray-400">
              #{item.id.toString().padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Right: Category badge & zoom button */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span
            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium border ${style.badgeBg} ${style.badgeText}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
            {item.category}
          </span>
          <button
            type="button"
            onClick={() => onOpenModal(item)}
            className="p-1 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition cursor-pointer"
            title="Agrandir la fiche"
            aria-label="Agrandir la fiche"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Code snippet area */}
      <div className="p-3.5 sm:p-4 bg-gray-50/50 flex-1">
        <CodeBlock
          code={item.code}
          language="python"
          theme={theme}
          showLineNumbers={showLineNumbers}
        />
      </div>

      {/* Card Footer: Collapsible Tips & Explanations */}
      {extraInfo && (
        <div className="border-t border-gray-100 bg-white">
          <button
            type="button"
            onClick={() => setShowExplanation(!showExplanation)}
            className="w-full px-4 py-2 flex items-center justify-between text-xs text-gray-500 hover:text-gray-800 hover:bg-gray-50 transition cursor-pointer"
          >
            <span className="flex items-center gap-1.5 font-medium">
              <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
              <span>{showExplanation ? 'Masquer l’astuce' : 'Voir l’astuce & mémo'}</span>
            </span>
            {showExplanation ? (
              <ChevronUp className="w-3.5 h-3.5 text-gray-400" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
            )}
          </button>

          {showExplanation && (
            <div className="px-4 pb-3.5 pt-1 space-y-2 text-xs text-gray-600 border-t border-gray-50 bg-amber-50/30">
              <p className="leading-relaxed">{extraInfo.explanation}</p>
              <div className="p-2 rounded-lg bg-amber-100/60 text-amber-900 text-[11px] font-medium leading-relaxed">
                {extraInfo.tip}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
