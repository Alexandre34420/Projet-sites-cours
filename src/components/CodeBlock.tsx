import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  theme?: 'vscDarkPlus' | 'dracula';
  showLineNumbers?: boolean;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'python',
  theme = 'vscDarkPlus',
  showLineNumbers = false,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = code;
      textArea.style.position = 'fixed';
      textArea.style.left = '-9999px';
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        // failed
      }
      document.body.removeChild(textArea);
    }
  };

  const selectedStyle = theme === 'dracula' ? dracula : vscDarkPlus;

  return (
    <div className="relative group rounded-lg overflow-hidden bg-[#1e1e1e] border border-gray-800 shadow-inner">
      {/* Carbon / Code window header */}
      <div className="flex items-center justify-between px-3.5 py-2 bg-[#252526] border-b border-gray-800/80 select-none">
        <div className="flex items-center space-x-2">
          {/* macOS window dots */}
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] inline-block opacity-80 group-hover:opacity-100 transition-opacity" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] inline-block opacity-80 group-hover:opacity-100 transition-opacity" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] inline-block opacity-80 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="text-[11px] font-mono text-gray-400 font-medium ml-2">
            python
          </span>
        </div>

        {/* Copy button */}
        <button
          type="button"
          onClick={handleCopy}
          className={`flex items-center gap-1.5 px-2.5 py-1 text-xs rounded transition-all duration-200 cursor-pointer ${
            copied
              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
              : 'text-gray-400 hover:text-gray-200 bg-white/5 hover:bg-white/10 border border-transparent'
          }`}
          title="Copier le code"
          aria-label="Copier le code"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[2.5]" />
              <span className="text-[11px] font-medium font-mono text-emerald-300">Copié !</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span className="text-[11px] font-mono">Copier</span>
            </>
          )}
        </button>
      </div>

      {/* Syntax Highlighting Container */}
      <div className="overflow-x-auto text-[13px] leading-relaxed">
        <SyntaxHighlighter
          language={language}
          style={selectedStyle}
          showLineNumbers={showLineNumbers}
          customStyle={{
            margin: 0,
            padding: '1rem',
            background: 'transparent',
            fontSize: '0.84rem',
            lineHeight: '1.5',
            fontFamily: '"JetBrains Mono", "Fira Code", monospace',
          }}
          wrapLongLines={false}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
