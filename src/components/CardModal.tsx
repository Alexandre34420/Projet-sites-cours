import React from 'react';
import { CheatSheetItem } from '../data';
import { CodeBlock } from './CodeBlock';
import { CATEGORY_STYLES, DEFAULT_CATEGORY_STYLE, CARD_EXPLANATIONS } from '../constants';
import { X, Star, ChevronLeft, ChevronRight, Lightbulb } from 'lucide-react';

interface CardModalProps {
  item: CheatSheetItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  theme: 'vscDarkPlus' | 'dracula';
  showLineNumbers: boolean;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}

export const CardModal: React.FC<CardModalProps> = ({
  item,
  onClose,
  onPrev,
  onNext,
  theme,
  showLineNumbers,
  isFavorite,
  onToggleFavorite,
}) => {
  if (!item) return null;

  const style = CATEGORY_STYLES[item.category] || DEFAULT_CATEGORY_STYLE;
  const extraInfo = CARD_EXPLANATIONS[item.id];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-3xl w-full border border-gray-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center justify-between gap-4 bg-white">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => onToggleFavorite(item.id)}
              className={`p-1.5 rounded-lg transition cursor-pointer ${
                isFavorite
                  ? 'text-amber-500 bg-amber-50'
                  : 'text-gray-300 hover:text-amber-500 hover:bg-gray-100'
              }`}
              title={isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
            >
              <Star className={`w-5 h-5 ${isFavorite ? 'fill-amber-400 stroke-amber-500' : ''}`} />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-gray-400">
                  Fiche #{item.id.toString().padStart(2, '0')}
                </span>
                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium border ${style.badgeBg} ${style.badgeText}`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                  {item.category}
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-0.5">
                {item.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center border border-gray-200 rounded-lg p-0.5 bg-gray-50">
              <button
                type="button"
                onClick={onPrev}
                className="p-1.5 rounded text-gray-500 hover:text-gray-800 hover:bg-white transition cursor-pointer"
                title="Fiche précédente"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={onNext}
                className="p-1.5 rounded text-gray-500 hover:text-gray-800 hover:bg-white transition cursor-pointer"
                title="Fiche suivante"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition cursor-pointer"
              title="Fermer (Échap)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 bg-gray-50/40">
          <div>
            <CodeBlock
              code={item.code}
              language="python"
              theme={theme}
              showLineNumbers={showLineNumbers}
            />
          </div>

          {extraInfo && (
            <div className="p-4 rounded-xl border border-amber-200/80 bg-amber-50/50 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-900">
                <Lightbulb className="w-4 h-4 text-amber-600" />
                <span>Explication & Précisions</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                {extraInfo.explanation}
              </p>
              <div className="p-2.5 rounded-lg bg-white/90 border border-amber-200/60 text-xs font-medium text-amber-950">
                💡 {extraInfo.tip}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 sm:p-4 bg-white border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
          <span>
            Utilisez les touches <kbd className="font-mono bg-gray-100 px-1 py-0.5 rounded border">←</kbd> et{' '}
            <kbd className="font-mono bg-gray-100 px-1 py-0.5 rounded border">→</kbd> pour naviguer
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-3.5 py-1.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition font-medium cursor-pointer"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
