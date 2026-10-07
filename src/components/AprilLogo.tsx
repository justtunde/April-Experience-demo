import React from 'react';

interface AprilLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  variant?: 'full' | 'emblem';
}

export const AprilLogo: React.FC<AprilLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  variant = 'full',
}) => {
  const sizeMap = {
    sm: { dimension: 40, textSize: 'text-xs', subSize: 'text-[9px]' },
    md: { dimension: 52, textSize: 'text-sm', subSize: 'text-[10px]' },
    lg: { dimension: 68, textSize: 'text-base', subSize: 'text-xs' },
    xl: { dimension: 96, textSize: 'text-xl', subSize: 'text-sm' },
  };

  const { dimension, textSize, subSize } = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official Emblem replicating 2026_10_07_10_56_45_IMG_3910.PNG */}
      <svg
        width={dimension}
        height={dimension}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-[1.03]"
        aria-label="April Realty Trust official logo"
      >
        <defs>
          {/* Metallic Gold Gradients matching the official badge */}
          <linearGradient id="goldMetallic" x1="20" y1="20" x2="180" y2="180" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFF2B2" />
            <stop offset="35%" stopColor="#E5C158" />
            <stop offset="65%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#9C7721" />
          </linearGradient>

          <linearGradient id="goldRim" x1="10" y1="50" x2="190" y2="150" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#B4821E" />
          </linearGradient>

          <radialGradient id="badgeDark" cx="50%" cy="50%" r="50%" fx="40%" fy="40%">
            <stop offset="0%" stopColor="#1E1E22" />
            <stop offset="70%" stopColor="#0B0B0D" />
            <stop offset="100%" stopColor="#050506" />
          </radialGradient>

          <filter id="goldGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#D4AF37" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Outer Dark Circular Base */}
        <circle cx="100" cy="100" r="95" fill="url(#badgeDark)" stroke="#222226" strokeWidth="2" />

        {/* Outer Concentric Gold Border Arc (Broken modern loop on left and bottom-right) */}
        <circle
          cx="100"
          cy="100"
          r="86"
          stroke="url(#goldMetallic)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray="470 70"
          transform="rotate(-40 100 100)"
        />

        {/* Dynamic Inner Crescent Arc */}
        <path
          d="M 60 38 A 74 74 0 0 1 155 52"
          stroke="url(#goldRim)"
          strokeWidth="6.5"
          strokeLinecap="round"
        />

        <path
          d="M 148 152 A 74 74 0 0 1 45 142"
          stroke="url(#goldRim)"
          strokeWidth="6.5"
          strokeLinecap="round"
        />

        {/* Intertwined Calligraphic Ribbon Monogram (The Cathedral "A" Monogram) */}
        {/* Left calligraphic loop */}
        <path
          d="M 44 116 C 41 85 64 64 88 64 C 98 64 102 78 94 92 C 86 106 72 108 67 110 C 60 112 52 114 44 116 Z"
          stroke="url(#goldMetallic)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          filter="url(#goldGlow)"
        />
        {/* Right calligraphic loop */}
        <path
          d="M 156 116 C 159 85 136 64 112 64 C 102 64 98 78 106 92 C 114 106 128 108 133 110 C 140 112 148 114 156 116 Z"
          stroke="url(#goldMetallic)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          filter="url(#goldGlow)"
        />
        {/* Graceful ribbon tails curving inward and outward */}
        <path
          d="M 88 64 C 82 78 76 96 74 104 C 72 110 80 114 86 110"
          stroke="url(#goldMetallic)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path
          d="M 112 64 C 118 78 124 96 126 104 C 128 110 120 114 114 110"
          stroke="url(#goldMetallic)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />

        {/* 4 Gold Window Panes (2x2 grid representing luxury homes/realty) */}
        <g id="window-panes" fill="url(#goldMetallic)">
          <rect x="91" y="96" width="7" height="7" rx="0.8" />
          <rect x="102" y="96" width="7" height="7" rx="0.8" />
          <rect x="91" y="105" width="7" height="7" rx="0.8" />
          <rect x="102" y="105" width="7" height="7" rx="0.8" />
        </g>

        {/* "APRIL" Bold Typography with inline depth */}
        <text
          x="100"
          y="131"
          textAnchor="middle"
          fontSize="22"
          fontWeight="900"
          fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
          fill="url(#goldMetallic)"
          stroke="#0B0B0C"
          strokeWidth="1.2"
          letterSpacing="2.5"
          style={{ textTransform: 'uppercase' }}
        >
          APRIL
        </text>

        {/* "REALTY TRUST" Subtitle */}
        <text
          x="100"
          y="142"
          textAnchor="middle"
          fontSize="7.2"
          fontWeight="700"
          fontFamily="'Cinzel', Georgia, serif"
          fill="url(#goldMetallic)"
          letterSpacing="3.8"
          style={{ textTransform: 'uppercase' }}
        >
          REALTY TRUST
        </text>
      </svg>

      {/* Brand Text Lockup for Header / Hero */}
      {showText && variant === 'full' && (
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1.5">
            <span className="font-serif tracking-tight font-bold text-white text-base md:text-lg">
              APRIL
            </span>
            <span className="gold-gradient-text font-serif italic text-base md:text-lg font-semibold">
              Xperience
            </span>
          </div>
          <span className="text-[10px] tracking-[0.22em] text-[#C5A059] uppercase font-medium">
            By April Realty Trust
          </span>
        </div>
      )}
    </div>
  );
};
