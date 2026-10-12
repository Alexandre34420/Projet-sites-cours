import { useState, useMemo } from 'react';
import { Search, Copy, CheckCircle2 } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CourseItem } from '../data';

interface CourseViewProps {
  title: string;
  description: string;
  data: CourseItem[];
  language?: string;
}

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

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            {title}
          </h1>
          <p className="mt-2 text-lg text-gray-600">{description}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-shadow shadow-sm"
              placeholder="Rechercher une notion, un bout de code..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredData.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full">
                <div className="p-5 flex-1">
                  <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
                    {item.category}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
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
                      language={language}
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
            ))}
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
