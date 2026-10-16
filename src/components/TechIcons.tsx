import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
}

// 1. PYTHON OFFICIAL LOGO (Interlocking Blue & Yellow snakes)
export function PythonIcon({ className = 'w-6 h-6', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="pyBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#387EB8" />
          <stop offset="100%" stopColor="#2D6393" />
        </linearGradient>
        <linearGradient id="pyYellow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD43B" />
          <stop offset="100%" stopColor="#F5B800" />
        </linearGradient>
      </defs>
      {/* Top Blue Snake */}
      <path
        d="M63.5 8C38.2 8 39.8 19 39.8 19l.1 11.4h24v3.4H30.4S15 32 15 57.3c0 25.4 13.5 24.5 13.5 24.5h8.1V70.2s-.4-13.6 13.4-13.6h23.2s12.7.2 12.7-12.3V20.7s1.8-12.7-22.4-12.7zm-13 8.3c2.7 0 4.8 2.2 4.8 4.8s-2.1 4.8-4.8 4.8-4.8-2.2-4.8-4.8 2.1-4.8 4.8-4.8z"
        fill="url(#pyBlue)"
      />
      {/* Bottom Yellow Snake */}
      <path
        d="M64.5 120c25.3 0 23.7-11 23.7-11l-.1-11.4h-24v-3.4h33.5s15.4 1.8 15.4-23.5c0-25.4-13.5-24.5-13.5-24.5h-8.1v11.6s.4 13.6-13.4 13.6H44.8s-12.7-.2-12.7 12.3v23.6s-1.8 12.7 22.4 12.7zm13-8.3c-2.7 0-4.8-2.2-4.8-4.8s2.1-4.8 4.8-4.8 4.8 2.2 4.8 4.8-2.1 4.8-4.8 4.8z"
        fill="url(#pyYellow)"
      />
    </svg>
  );
}

// 2. JAVA OFFICIAL LOGO (The authentic steam & coffee cup logo)
export function JavaIcon({ className = 'w-6 h-6', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="javaSteam" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E76F00" />
          <stop offset="100%" stopColor="#EA2D2E" />
        </linearGradient>
        <linearGradient id="javaCup" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5382A1" />
          <stop offset="100%" stopColor="#007396" />
        </linearGradient>
      </defs>
      {/* Steam curves */}
      <path
        d="M50.2 11c-1.8 12.8 5.6 19.3 12.5 24.3 6.3 4.6 11.2 9.4 9 18.2 0 0 5-6.6-1.5-16.7-5.5-8.5-13.7-12.4-10-25.8h-10zm16.5 1.5c-1.4 10.3 4.4 15.5 9.8 19.5 5 3.7 9 7.5 7.2 14.6 0 0 4-5.3-1.2-13.4-4.4-6.8-11-9.9-8-20.7h-7.8zm-33.5 35c3.2 9.5 12.2 12.8 20.5 15.6 10.4 3.5 21.6 6.3 30.6 13.5 0 0 3-4.5-5.5-9.6-10.4-6.2-25.5-7.4-36.4-14.7-4.2-2.8-7-4.8-9.2-4.8z"
        fill="url(#javaSteam)"
      />
      <path
        d="M48 29.5c-1.2 8.5 3.7 12.8 8.3 16.1 4.2 3.1 7.5 6.2 6 12 0 0 3.3-4.4-1-11-3.7-5.6-9.1-8.2-6.7-17.1H48z"
        fill="url(#javaSteam)"
      />
      {/* Cup and saucer */}
      <path
        d="M41 71.5c-12 1.4-19 3.5-19 6 0 3.8 17.5 6.8 39.5 6.8 22 0 39.5-3 39.5-6.8 0-2.4-7-4.4-18.7-5.8 8.5 7 24 6.8 24 10.8 0 7.2-28.5 11-64.3 11C23 94.5 1 90.7 1 83.5c0-4.6 18.2-8.5 40-12zm48.5-5c-7 2.2-17 3.5-28.5 3.5-11.5 0-21.5-1.3-28.5-3.5-7-2.2-9.5-5-9.5-8.5 0-2.2 1.2-4.2 3.5-5.8 4-2.8 11.2-4.7 20-5.5 3.5 2.2 8.5 4.5 14.5 4.5 6 0 11-2.3 14.5-4.5 8.8.8 16 2.7 20 5.5 2.3 1.6 3.5 3.6 3.5 5.8 0 3.5-2.5 6.3-9.5 8.5z"
        fill="url(#javaCup)"
      />
      <path
        d="M87 63c9 1.5 15.5 4.5 15.5 8 0 2.8-4.2 5.2-11 6.5 13-3.2 21-8.5 21-14.5 0-4.8-5-9-13.5-11.5L87 63z"
        fill="url(#javaCup)"
      />
      <path
        d="M33 103c20 4.2 50 4.2 70 0 4-1 6.5-2.2 6.5-3.5 0-1-1.8-2-5-2.8-17 3.2-49 3.2-68 0-3.5.8-5.5 1.8-5.5 2.8 0 1.3 2.5 2.5 6.5 3.5z"
        fill="url(#javaCup)"
      />
    </svg>
  );
}

// 3. C LANGUAGE OFFICIAL LOGO (Hexagon with bold C inside)
export function CIcon({ className = 'w-6 h-6', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="cHex" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00599C" />
          <stop offset="100%" stopColor="#004481" />
        </linearGradient>
        <linearGradient id="cLetter" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#659AD2" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
      </defs>
      {/* Hexagon shield */}
      <polygon
        points="64,6 116,36 116,92 64,122 12,92 12,36"
        fill="url(#cHex)"
        stroke="#A8B9CC"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      {/* Inner C Letter cutout */}
      <path
        d="M84 41.5c-4.8-4.5-11.5-7.5-19.5-7.5-16.5 0-28 13.5-28 30s11.5 30 28 30c8 0 14.7-3 19.5-7.5l9 11C86 113.5 76 118 64.5 118c-29.5 0-48.5-23.5-48.5-54s19-54 48.5-54c11.5 0 21.5 4.5 28.5 10.5l-9 17z"
        fill="url(#cLetter)"
      />
    </svg>
  );
}

// 4. WEB DEVELOPMENT ICON (HTML5 / CSS3 / JS Full Stack Shield)
export function WebIcon({ className = 'w-6 h-6', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="htmlShield" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E44D26" />
          <stop offset="100%" stopColor="#F16529" />
        </linearGradient>
        <linearGradient id="jsBadge" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F7DF1E" />
          <stop offset="100%" stopColor="#E5A00D" />
        </linearGradient>
      </defs>
      {/* HTML5 Central Shield */}
      <polygon points="20,10 108,10 100,104 64,120 28,104" fill="url(#htmlShield)" />
      <polygon points="64,19 100,19 93,96 64,109" fill="#E44D26" opacity="0.6" />
      {/* Code Brackets </> inside Shield */}
      <path
        d="M50 44L34 64L50 84L43 89L22 64L43 39L50 44Z"
        fill="#FFFFFF"
      />
      <path
        d="M78 44L94 64L78 84L85 89L106 64L85 39L78 44Z"
        fill="#FFFFFF"
      />
      <path
        d="M71 36L53 92H61L79 36H71Z"
        fill="#FFFFFF"
      />
      {/* Small JS corner badge */}
      <circle cx="106" cy="106" r="18" fill="url(#jsBadge)" stroke="#FFFFFF" strokeWidth="2.5" />
      <text x="106" y="112" textAnchor="middle" fill="#000000" fontWeight="900" fontSize="13" fontFamily="sans-serif">JS</text>
    </svg>
  );
}

// 5. DATABASE & SQL OFFICIAL ICON (3D Relational Disks with SQL typography)
export function SqlIcon({ className = 'w-6 h-6', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="sqlCylBody" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#336791" />
          <stop offset="50%" stopColor="#4A84B3" />
          <stop offset="100%" stopColor="#255075" />
        </linearGradient>
      </defs>
      {/* Bottom Cylinder Tier 3 */}
      <path
        d="M20 78v22c0 14 19.7 22 44 22s44-8 44-22V78c-8.2 8.4-24.5 14-44 14s-35.8-5.6-44-14z"
        fill="url(#sqlCylBody)"
      />
      {/* Middle Cylinder Tier 2 */}
      <path
        d="M20 50v22c0 14 19.7 22 44 22s44-8 44-22V50c-8.2 8.4-24.5 14-44 14s-35.8-5.6-44-14z"
        fill="url(#sqlCylBody)"
      />
      {/* Top Cylinder Tier 1 */}
      <path
        d="M20 22v22c0 14 19.7 22 44 22s44-8 44-22V22c-8.2 8.4-24.5 14-44 14s-35.8-5.6-44-14z"
        fill="url(#sqlCylBody)"
      />
      {/* Top Cap */}
      <ellipse cx="64" cy="22" rx="44" ry="14" fill="#69A2CF" stroke="#255075" strokeWidth="2" />
      {/* SQL Gold/White badge */}
      <rect x="28" y="52" width="72" height="28" rx="8" fill="#1E293B" stroke="#F59E0B" strokeWidth="2.5" />
      <text
        x="64"
        y="72"
        textAnchor="middle"
        fill="#F8FAFC"
        fontWeight="900"
        fontSize="17"
        fontFamily="monospace"
        letterSpacing="1"
      >
        SQL
      </text>
    </svg>
  );
}

// 6. ARCHITECTURE & UML ICON (UML Model & Components)
export function ArchitectureIcon({ className = 'w-6 h-6', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="archGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#6D28D9" />
        </linearGradient>
      </defs>
      {/* Top UML Class Box */}
      <rect x="36" y="10" width="56" height="34" rx="6" fill="url(#archGrad)" stroke="#5B21B6" strokeWidth="2.5" />
      <line x1="36" y1="22" x2="92" y2="22" stroke="#EDE9FE" strokeWidth="1.5" />
      <line x1="42" y1="16" x2="68" y2="16" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
      <line x1="42" y1="28" x2="80" y2="28" stroke="#DDD6FE" strokeWidth="2" strokeLinecap="round" />
      <line x1="42" y1="36" x2="65" y2="36" stroke="#DDD6FE" strokeWidth="2" strokeLinecap="round" />

      {/* Connection Tree Lines */}
      <line x1="64" y1="44" x2="64" y2="68" stroke="#8B5CF6" strokeWidth="3" />
      <line x1="30" y1="68" x2="98" y2="68" stroke="#8B5CF6" strokeWidth="3" />
      <line x1="30" y1="68" x2="30" y2="82" stroke="#8B5CF6" strokeWidth="3" />
      <line x1="98" y1="68" x2="98" y2="82" stroke="#8B5CF6" strokeWidth="3" />

      {/* Bottom Left Class Box */}
      <rect x="8" y="82" width="44" height="34" rx="6" fill="#F3E8FF" stroke="#8B5CF6" strokeWidth="2.5" />
      <line x1="8" y1="94" x2="52" y2="94" stroke="#8B5CF6" strokeWidth="1.5" />
      <line x1="14" y1="88" x2="38" y2="88" stroke="#6D28D9" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="14" y1="100" x2="42" y2="100" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="14" y1="107" x2="32" y2="107" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" />

      {/* Bottom Right Class Box */}
      <rect x="76" y="82" width="44" height="34" rx="6" fill="#F3E8FF" stroke="#8B5CF6" strokeWidth="2.5" />
      <line x1="76" y1="94" x2="120" y2="94" stroke="#8B5CF6" strokeWidth="1.5" />
      <line x1="82" y1="88" x2="106" y2="88" stroke="#6D28D9" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="82" y1="100" x2="110" y2="100" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="82" y1="107" x2="100" y2="107" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// 7. QCM / QUIZ BRAIN ICON (Interactive Quiz)
export function QuizIcon({ className = 'w-6 h-6', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="quizGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>
      <rect x="16" y="16" width="96" height="96" rx="28" fill="url(#quizGrad)" />
      {/* Question mark / checklist */}
      <circle cx="64" cy="52" r="22" fill="#FFFFFF" opacity="0.2" />
      <path
        d="M54 44C54 38 58 34 64 34C70 34 74 38 74 44C74 50 68 53 65 56C63 58 63 61 63 64H59C59 59 62 56 65 53C68 50 70 47 70 44C70 40 67 38 64 38C61 38 58 40 58 44H54Z"
        fill="#FFFFFF"
      />
      <circle cx="61" cy="72" r="2.8" fill="#FFFFFF" />
      <path
        d="M44 88L54 98L84 68"
        stroke="#FFFFFF"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
