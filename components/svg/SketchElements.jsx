import React from 'react';

export function UmbrellaSVG({ className = "" }) {
  return (
    <svg viewBox="0 0 120 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 65 Q15 15 60 10 Q105 15 110 65" stroke="black" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 65 Q20 55 30 65 Q40 55 50 65 Q60 55 70 65 Q80 55 90 65 Q100 55 110 65" stroke="black" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M60 10 L60 65" stroke="black" strokeWidth="1" strokeLinecap="round" />
      <path d="M60 15 Q35 20 20 60" stroke="black" strokeWidth="0.8" strokeLinecap="round" strokeDasharray="3 4" />
      <path d="M60 15 Q85 20 100 60" stroke="black" strokeWidth="0.8" strokeLinecap="round" strokeDasharray="3 4" />
      <line x1="60" y1="65" x2="60" y2="125" stroke="black" strokeWidth="2" strokeLinecap="round" />
      <path d="M60 125 Q60 138 50 138 Q40 138 40 128" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="60" cy="8" r="2" stroke="black" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

export function MartiniGlassSVG({ className = "" }) {
  return (
    <svg viewBox="0 0 100 130" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 15 L50 70 L85 15" stroke="black" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 15 L88 15" stroke="black" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M28 35 L72 35" stroke="black" strokeWidth="1" strokeLinecap="round" strokeDasharray="4 3" />
      <line x1="50" y1="70" x2="50" y2="110" stroke="black" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M30 110 Q50 115 70 110" stroke="black" strokeWidth="2" strokeLinecap="round" />
      <line x1="28" y1="112" x2="72" y2="112" stroke="black" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="62" cy="28" r="4" stroke="black" strokeWidth="1.5" />
      <circle cx="62" cy="28" r="1.5" stroke="black" strokeWidth="0.8" />
      <line x1="58" y1="20" x2="66" y2="36" stroke="black" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

export function CannabisLeafSVG({ className = "" }) {
  return (
    <svg viewBox="0 0 120 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 140 L60 70" stroke="black" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M60 70 Q55 30 60 10 Q65 30 60 70" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M60 65 L60 18" stroke="black" strokeWidth="0.7" strokeDasharray="2 3" strokeLinecap="round" />
      <path d="M58 65 Q25 40 15 25 Q35 35 58 58" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M56 62 Q30 42 20 30" stroke="black" strokeWidth="0.6" strokeDasharray="2 3" strokeLinecap="round" />
      <path d="M62 65 Q95 40 105 25 Q85 35 62 58" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M64 62 Q90 42 100 30" stroke="black" strokeWidth="0.6" strokeDasharray="2 3" strokeLinecap="round" />
      <path d="M58 80 Q30 72 12 60 Q32 68 56 76" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M62 80 Q90 72 108 60 Q88 68 64 76" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M58 95 Q42 90 30 82 Q44 88 56 92" stroke="black" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M62 95 Q78 90 90 82 Q76 88 64 92" stroke="black" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M48 50 L45 47 M42 55 L38 53 M52 38 L49 35" stroke="black" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M72 50 L75 47 M78 55 L82 53 M68 38 L71 35" stroke="black" strokeWidth="0.8" strokeLinecap="round" />
    </svg>
  );
}

export function PillsSVG({ className = "" }) {
  return (
    <svg viewBox="0 0 120 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="rotate(-20, 35, 40)">
        <rect x="15" y="30" width="40" height="18" rx="9" stroke="black" strokeWidth="1.8" />
        <line x1="35" y1="31" x2="35" y2="47" stroke="black" strokeWidth="1" strokeDasharray="2 2" />
      </g>
      <circle cx="80" cy="35" r="12" stroke="black" strokeWidth="1.8" />
      <line x1="74" y1="35" x2="86" y2="35" stroke="black" strokeWidth="1" />
      <line x1="80" y1="29" x2="80" y2="41" stroke="black" strokeWidth="0.8" />
      <g transform="rotate(15, 55, 75)">
        <rect x="38" y="68" width="34" height="14" rx="7" stroke="black" strokeWidth="1.5" />
        <line x1="55" y1="69" x2="55" y2="81" stroke="black" strokeWidth="0.8" strokeDasharray="2 2" />
      </g>
      <circle cx="100" cy="72" r="8" stroke="black" strokeWidth="1.5" />
      <path d="M96 72 L104 72" stroke="black" strokeWidth="0.8" />
      <circle cx="18" cy="75" r="2" stroke="black" strokeWidth="1" />
      <circle cx="108" cy="20" r="2.5" stroke="black" strokeWidth="1" />
    </svg>
  );
}
