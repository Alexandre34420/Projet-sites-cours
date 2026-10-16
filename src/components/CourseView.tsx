import { useState, useMemo } from 'react';
import { Search, Copy, CheckCircle2 } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CourseItem } from '../data';
import { 
  getCategoryIcon, 
  getSubjectIcon, 
  HtmlIcon, 
  CssIcon, 
  JsIcon, 
  PhpIcon 
} from './TechIcons';

interface CourseViewProps {
  title: string;
  description: string;
  data: CourseItem[];
  language?: string;
}

const getCodeLanguage = (category: string, defaultLanguage = 'python'): string => {
  const cat = (category || '').toLowerCase();
  if (cat.includes('html')) return 'html';
  if (cat.includes('css')) return 'css';
  if (cat.includes('javascript') || cat.includes('js')) return 'javascript';
  if (cat.includes('php')) return 'php';
  if (cat.includes('sql') || cat.includes('mcd') || cat.includes('mld') || cat.includes('merise') || cat.includes('normalisation')) return 'sql';
  return defaultLanguage;
};

export function CourseView({ title, description, data, language = 'python' }: CourseViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = useMemo(() => {
    const set = new Set<string>();
    data.forEach((item) => set.add(item.category));
    return ['Tous', ...Array.from(set)];
  }, [data]);

  const filteredData = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return data.filter((item) => {
      const matchCategory = selectedCategory === 'Tous' || item.category === selectedCategory;
      const matchQuery = 
        item.title.toLowerCase().includes(query) || 
        item.content.toLowerCase().includes(query) ||
        item.code.toLowerCase().includes(query);
      return matchCategory && matchQuery;
    });
  }, [data, searchQuery, selectedCategory]);

  const handleCopy = async (id: string, code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (e) {
      console.error('Failed to copy', e);
    }
  };

  const isWebCourse = title.toLowerCase().includes('web');

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header section with course emblem */}
        <div className="mb-8">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-14 h-14 bg-white rounded-2xl border border-gray-200 shadow-xs flex items-center justify-center shrink-0">
              {getSubjectIcon(title, 'w-8 h-8')}
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                {title}
              </h1>
              <p className="mt-1 text-base sm:text-lg text-gray-600">{description}</p>
            </div>
          </div>

          {/* Web Technologies Showcase Bar */}
          {isWebCourse && (
            <div className="flex flex-wrap items-center gap-2.5 mt-5 pt-4 border-t border-gray-200">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mr-1">
                Langages & Technologies Web :
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-50 border border-orange-200 text-orange-800 text-xs font-bold shadow-2xs">
                <HtmlIcon className="w-4 h-4 shrink-0" /> HTML5
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold shadow-2xs">
                <CssIcon className="w-4 h-4 shrink-0" /> CSS3
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold shadow-2xs">
                <JsIcon className="w-4 h-4 shrink-0" /> JavaScript (ES6)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs font-bold shadow-2xs">
                <PhpIcon className="w-4 h-4 shrink-0" /> PHP (PDO & MySQL)
              </span>
            </div>
          )}
        </div>

        {/* Search & Category Pills */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-400 focus:outline-none focus:placeholder-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-shadow shadow-xs"
              placeholder="Rechercher une notion, un bout de code..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Category Filter Pills with Individual Tech Icons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const icon = getCategoryIcon(cat, 'w-4 h-4 shrink-0');
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all shadow-xs border ${
                    isSelected
                      ? 'bg-gray-900 text-white border-gray-900 ring-2 ring-gray-900/10 shadow-md'
                      : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                  }`}
                >
                  {icon}
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards Grid */}
        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredData.map((item) => {
              const categoryIcon = getCategoryIcon(item.category, 'w-4 h-4 shrink-0');
              return (
                <div key={item.id} className="bg-white rounded-2xl shadow-xs border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full">
                  <div className="p-5 flex-1">
                    {/* Category badge with individual logo next to category name */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gray-50 border border-gray-200/80 text-gray-800 text-xs font-bold uppercase tracking-wider mb-2.5 shadow-2xs">
                      {categoryIcon}
                      <span>{item.category}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                  {item.code && (
                    <div className="relative border-t border-gray-100 bg-[#1E1E1E]">
                      <button
                        onClick={() => handleCopy(item.id, item.code)}
                        className="absolute top-3 right-3 p-1.5 rounded-md bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors z-10"
                        title="Copier le code"
                      >
                        {copiedId === item.id ? (
                          <CheckCircle2 className="w-4 h-4 text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                      <SyntaxHighlighter
                        language={getCodeLanguage(item.category, language)}
                        style={vscDarkPlus}
                        customStyle={{
                          margin: 0,
                          padding: '1.25rem',
                          fontSize: '0.85rem',
                          background: 'transparent',
                        }}
                        wrapLongLines
                      >
                        {item.code}
                      </SyntaxHighlighter>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-200 border-dashed">
            <h3 className="text-lg font-medium text-gray-900">Aucun résultat trouvé</h3>
            <p className="mt-1 text-sm text-gray-500">Essayez de modifier votre recherche ou la catégorie sélectionnée.</p>
          </div>
        )}
      </div>
    </div>
  );
}
