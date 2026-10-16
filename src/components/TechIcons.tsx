import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
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

// 2. JAVA OFFICIAL LOGO (Oracle / Sun Java steaming coffee cup)
export function JavaIcon({ className = 'w-6 h-6', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="javaSteamRed" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#EA2D2E" />
          <stop offset="100%" stopColor="#E76F00" />
        </linearGradient>
        <linearGradient id="javaCupBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5382A1" />
          <stop offset="100%" stopColor="#007396" />
        </linearGradient>
      </defs>

      {/* Steam Wisps */}
      <path
        d="M69.8 12.2c-2.4 6.8 2.6 11.4 7.6 15 4.8 3.5 8.7 7.2 6.8 13.6 0 0 3.8-5-1.2-12.5-4-6.1-9.9-8.8-7.2-18.4l-6 2.3z"
        fill="url(#javaSteamRed)"
      />
      <path
        d="M51.5 16.5c-2.8 10.2 4.2 15.6 10.6 20.2 5.5 3.9 10 7.8 8.1 14.8 0 0 4.2-5.4-1.3-13.6-4.5-6.7-11.2-9.8-8.2-20.5l-9.2-.9z"
        fill="url(#javaSteamRed)"
      />
      <path
        d="M34.8 43.5c2.8 8 10.5 10.8 17.6 13.1 8.9 3 18.5 5.3 26.2 11.4 0 0 2.6-3.8-4.7-8.1-8.9-5.2-21.8-6.2-31.2-12.3-3.6-2.4-6-4.1-7.9-4.1z"
        fill="url(#javaSteamRed)"
      />

      {/* Coffee Cup Body */}
      <path
        d="M32 60c-2.2 0-3.6 1.5-3.6 3.5 0 2.8 2.5 5.5 6.6 7.6 6.5 3.3 16 5.2 26.5 5.2 10.5 0 20-1.9 26.5-5.2 4.1-2.1 6.6-4.8 6.6-7.6 0-2-1.4-3.5-3.6-3.5h-59z"
        fill="#264153"
      />
      <path
        d="M35 66c4.5 18 13 32 26.5 32s22-14 26.5-32c-6.2 3.1-15.5 4.8-26.5 4.8s-20.3-1.7-26.5-4.8z"
        fill="url(#javaCupBlue)"
      />

      {/* Cup Handle */}
      <path
        d="M85 64.5c8.2.8 16 3.8 16 9.5 0 5.2-6.5 8.2-14.5 9.2l1.6 3.8c11-1.2 19.5-5.5 19.5-13 0-8.2-10.5-12.2-21-13.2l-1.6 3.7z"
        fill="#5382A1"
      />

      {/* Base Saucer Plate */}
      <path
        d="M21 95c11.5 5.8 28.5 8.5 40.5 8.5s29-2.7 40.5-8.5c4.5-2.3 4.5-4.5 0-6.8-9.8 4.8-25.5 7.2-40.5 7.2s-30.7-2.4-40.5-7.2c-4.5 2.3-4.5 4.5 0 6.8z"
        fill="url(#javaCupBlue)"
      />
      <path
        d="M30 108c10 3.2 22 4.5 31.5 4.5s21.5-1.3 31.5-4.5c4.5-1.5 3.5-3.2-1.5-4-9 2.5-19.5 3.5-30 3.5s-21-1-30-3.5c-5 .8-6 2.5-1.5 4z"
        fill="#007396"
      />
    </svg>
  );
}

// 3. C LANGUAGE OFFICIAL LOGO (Dennis Ritchie / ISO C Navy Hexagon & Stylized C)
export function CIcon({ className = 'w-6 h-6', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="cHexBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00599C" />
          <stop offset="100%" stopColor="#004482" />
        </linearGradient>
        <linearGradient id="cShadow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#659AD2" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>
      </defs>

      {/* Hexagonal Shield */}
      <polygon
        points="64,8 116,37 116,91 64,120 12,91 12,37"
        fill="url(#cHexBg)"
        stroke="#659AD2"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <polygon
        points="64,15 110,41 110,87 64,113 18,87 18,41"
        fill="none"
        stroke="#003566"
        strokeWidth="2"
      />

      {/* Bold Stylized C Letter (Official Geometry) */}
      <path
        d="M86 42.5c-4.8-5-12.8-8.5-22-8.5-18.8 0-33 13.8-33 30s14.2 30 33 30c9.2 0 17.2-3.5 22-8.5l-8.5-10.5c-3.4 3.5-8.2 5.5-13.5 5.5-10.5 0-18.5-7.5-18.5-16.5s8-16.5 18.5-16.5c5.3 0 10.1 2 13.5 5.5L86 42.5z"
        fill="#FFFFFF"
      />
      {/* 45-degree Angled Cut Accents on C Terminals */}
      <polygon points="77.5,32 86,42.5 73,42.5" fill="#A8B9CC" opacity="0.6" />
      <polygon points="77.5,96 86,85.5 73,85.5" fill="#A8B9CC" opacity="0.6" />
    </svg>
  );
}

// 4. DATABASE & SQL MODERN LOGO (3D Relational Disks with SQL typography & data links)
export function SqlIcon({ className = 'w-6 h-6', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="sqlDiscTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
        <linearGradient id="sqlDiscBody" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0369A1" />
          <stop offset="40%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#075985" />
        </linearGradient>
        <linearGradient id="sqlBadgeBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0F172A" />
          <stop offset="100%" stopColor="#1E293B" />
        </linearGradient>
      </defs>

      {/* Bottom Cylinder Disc 3 */}
      <path
        d="M22 84v16c0 12 18.8 19 42 19s42-7 42-19V84c-7.5 7.5-23.5 12-42 12s-34.5-4.5-42-12z"
        fill="url(#sqlDiscBody)"
      />
      <ellipse cx="64" cy="84" rx="42" ry="12" fill="#0284C7" opacity="0.4" />

      {/* Middle Cylinder Disc 2 */}
      <path
        d="M22 56v16c0 12 18.8 19 42 19s42-7 42-19V56c-7.5 7.5-23.5 12-42 12s-34.5-4.5-42-12z"
        fill="url(#sqlDiscBody)"
      />
      <ellipse cx="64" cy="56" rx="42" ry="12" fill="#0284C7" opacity="0.4" />

      {/* Top Cylinder Disc 1 */}
      <path
        d="M22 28v16c0 12 18.8 19 42 19s42-7 42-19V28c-7.5 7.5-23.5 12-42 12s-34.5-4.5-42-12z"
        fill="url(#sqlDiscBody)"
      />
      <ellipse cx="64" cy="28" rx="42" ry="14" fill="url(#sqlDiscTop)" stroke="#BAE6FD" strokeWidth="1.5" />
      {/* Inner Track Ring */}
      <ellipse cx="64" cy="28" rx="26" ry="8" fill="none" stroke="#E0F2FE" strokeWidth="1.5" strokeDasharray="3 3" />

      {/* Status LED Lights on Disks */}
      <circle cx="32" cy="40" r="2.5" fill="#38BDF8" />
      <circle cx="40" cy="42" r="2" fill="#4ADE80" />
      <circle cx="32" cy="68" r="2.5" fill="#38BDF8" />
      <circle cx="40" cy="70" r="2" fill="#4ADE80" />
      <circle cx="32" cy="96" r="2.5" fill="#38BDF8" />
      <circle cx="40" cy="98" r="2" fill="#4ADE80" />

      {/* Front Modern SQL Pill Badge */}
      <rect
        x="30"
        y="50"
        width="68"
        height="28"
        rx="8"
        fill="url(#sqlBadgeBg)"
        stroke="#38BDF8"
        strokeWidth="2"
      />
      <text
        x="64"
        y="70"
        textAnchor="middle"
        fill="#FFFFFF"
        fontWeight="900"
        fontSize="17"
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="1.5"
      >
        SQL
      </text>
    </svg>
  );
}

// 5. OFFICIAL W3C HTML5 LOGO (Official Orange Shield with 5)
export function HtmlIcon({ className = 'w-6 h-6', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Outer HTML5 Shield */}
      <polygon fill="#E44D26" points="19 10 109 10 101 106 64 118 27 106" />
      {/* Right Shaded Side */}
      <polygon fill="#F16529" points="64 19 101 19 94 99 64 109" />
      {/* Numeral 5 Right (Light Gray) */}
      <polygon fill="#EBEBEB" points="64 53 79 53 78 72 64 76 64 89 87 82 91 36 64 36" />
      <polygon fill="#EBEBEB" points="64 23 95 23 94 36 64 36" />
      {/* Numeral 5 Left (White) */}
      <polygon fill="#FFFFFF" points="64 23 64 36 47 36 48 53 64 53 64 66 36 66 34 36 33 23" />
      <polygon fill="#FFFFFF" points="64 76 52 72 51 63 38 63 41 82 64 89" />
    </svg>
  );
}

// 6. OFFICIAL CSS3 LOGO (Official Blue Shield with 3)
export function CssIcon({ className = 'w-6 h-6', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Outer CSS3 Shield */}
      <polygon fill="#1572B6" points="19 10 109 10 101 106 64 118 27 106" />
      {/* Right Shaded Side */}
      <polygon fill="#33A9DC" points="64 19 101 19 94 99 64 109" />
      {/* Numeral 3 Right (Light Gray) */}
      <polygon fill="#EBEBEB" points="64 23 95 23 94 36 64 36" />
      <polygon fill="#EBEBEB" points="64 53 93 53 91 76 87 85 64 92 64 79 77 75 78 66 64 66" />
      {/* Numeral 3 Left (White) */}
      <polygon fill="#FFFFFF" points="64 23 64 36 35 36 37 53 64 53 64 66 49 66 50 75 64 79 64 92 41 85 39 63 37 53 34 23" />
    </svg>
  );
}

// 7. OFFICIAL JAVASCRIPT LOGO (Official Yellow Badge with JS)
export function JsIcon({ className = 'w-6 h-6', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="112" height="112" x="8" y="8" rx="18" fill="#F7DF1E" />
      {/* Stylized JS lettering */}
      <path
        d="M42 90c0 8.3-4.5 13-11.8 13-6.5 0-10.4-3.5-12.2-7.2l8.2-5c1 2 2.2 4 4.3 4 2.3 0 3.8-1.2 3.8-5.8V42h9.7v48zm22-3.8c4.3 2.5 9.8 4.2 15 4.2 8.4 0 13.5-4.2 13.5-10.5 0-6.2-4.8-9.4-12.8-13-10.2-4.5-16.7-9.5-16.7-19.2 0-9.8 7.5-17.2 19.4-17.2 6.4 0 11.2 1.6 15 3.8l-3.8 8c-3-1.8-6.8-3.2-11.2-3.2-6.5 0-10.5 3.8-10.5 8.7 0 5.8 4.7 8.5 13.3 12.3 11 4.8 16.4 10.2 16.4 20.2 0 10.8-8.5 18.2-22.6 18.2-7.4 0-13.4-2-17.2-4.8l3.8-8.7z"
        fill="#000000"
      />
    </svg>
  );
}

// 8. OFFICIAL PHP LOGO (Official Purple Oval with white php)
export function PhpIcon({ className = 'w-6 h-6', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="phpBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8892BF" />
          <stop offset="100%" stopColor="#4F5D95" />
        </linearGradient>
      </defs>
      {/* Outer Pill Oval */}
      <rect x="8" y="28" width="112" height="72" rx="36" fill="url(#phpBg)" stroke="#232531" strokeWidth="4" />

      {/* Styled php letters */}
      <g fill="#FFFFFF" stroke="#232531" strokeWidth="1.5">
        {/* first p */}
        <path d="M26 78h7l2-10h7c7 0 11-4 11-10s-4-10-11-10h-12l-4 30zm9-17l2-8h4c3.5 0 5.5 1.5 5.5 4s-2 4-5.5 4h-6z" />
        {/* h */}
        <path d="M56 78h7l3-14c1.5-2.5 3.5-3.5 6-3.5s4 1 3 5l-2.5 12.5h7l3-15c1-6-2-8.5-7.5-8.5-3.5 0-6.5 1.5-8.5 4.5l2-10h-7l-5.5 29.5z" />
        {/* second p */}
        <path d="M84 78h7l2-10h7c7 0 11-4 11-10s-4-10-11-10h-12l-4 30zm9-17l2-8h4c3.5 0 5.5 1.5 5.5 4s-2 4-5.5 4h-6z" />
      </g>
    </svg>
  );
}

// 9. WEB DEVELOPMENT COMPOSITE EMBLEM (HTML5 + CSS3 + JS Full Stack)
export function WebIcon({ className = 'w-6 h-6', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="webGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E44D26" />
          <stop offset="100%" stopColor="#1572B6" />
        </linearGradient>
      </defs>

      {/* Combined Dual Shield (HTML5 Left / CSS3 Right) */}
      <polygon points="18,10 64,10 64,116 26,104" fill="#E44D26" />
      <polygon points="64,10 110,10 102,104 64,116" fill="#1572B6" />

      {/* Code Chevrons in Center </> */}
      <path
        d="M48 44L34 64L48 84L42 89L23 64L42 39L48 44Z"
        fill="#FFFFFF"
      />
      <path
        d="M80 44L94 64L80 84L86 89L105 64L86 39L80 44Z"
        fill="#FFFFFF"
      />
      <path
        d="M70 34L54 94H62L78 34H70Z"
        fill="#FFFFFF"
      />

      {/* JS Gold Emblem in corner */}
      <circle cx="104" cy="104" r="18" fill="#F7DF1E" stroke="#FFFFFF" strokeWidth="2.5" />
      <text x="104" y="110" textAnchor="middle" fill="#000000" fontWeight="900" fontSize="13" fontFamily="sans-serif">JS</text>
    </svg>
  );
}

// 10. ARCHITECTURE & UML ICON (UML Model & Components)
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

// 11. QCM / QUIZ BRAIN ICON (Interactive Quiz)
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

/**
 * Helper to get the correct technology icon by category name
 * Handles web languages (HTML, CSS, JavaScript, PHP) as well as SQL, Java, C, Python, etc.
 */
export function getCategoryIcon(category: string, className = 'w-4 h-4'): React.ReactNode {
  const c = (category || '').toLowerCase().trim();
  if (c.includes('html')) return <HtmlIcon className={className} />;
  if (c.includes('css')) return <CssIcon className={className} />;
  if (c.includes('javascript') || c === 'js') return <JsIcon className={className} />;
  if (c.includes('php')) return <PhpIcon className={className} />;
  if (c.includes('python')) return <PythonIcon className={className} />;
  if (c.includes('java') && !c.includes('script')) return <JavaIcon className={className} />;
  if (c === 'c' || c.includes('langage c') || c.includes('système') || c.includes('pointeur')) return <CIcon className={className} />;
  if (c.includes('sql') || c.includes('merise') || c.includes('mcd') || c.includes('mld') || c.includes('bdd') || c.includes('données') || c.includes('normalisation')) {
    return <SqlIcon className={className} />;
  }
  if (c.includes('uml') || c.includes('architecture')) return <ArchitectureIcon className={className} />;
  return null;
}

/**
 * Helper to get the correct subject icon for courses and quizzes
 */
export function getSubjectIcon(subject: string, className = 'w-4 h-4'): React.ReactNode {
  const s = (subject || '').toLowerCase().trim();
  if (s.includes('python')) return <PythonIcon className={className} />;
  if (s.includes('java') && !s.includes('script')) return <JavaIcon className={className} />;
  if (s === 'langage c' || s === 'c') return <CIcon className={className} />;
  if (s.includes('web')) return <WebIcon className={className} />;
  if (s.includes('bdd') || s.includes('base') || s.includes('sql') || s.includes('données')) return <SqlIcon className={className} />;
  if (s.includes('arch') || s.includes('uml')) return <ArchitectureIcon className={className} />;
  return <QuizIcon className={className} />;
}
