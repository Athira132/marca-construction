import React from 'react';
import { Link } from 'react-router-dom';

interface MarcaLogoProps {
  variant?: 'light' | 'dark' | 'auto';
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
}

export const MarcaLogo: React.FC<MarcaLogoProps> = ({
  variant = 'auto',
  className = '',
  showText = true,
  size = 'md',
  asLink = true,
}) => {
  // Proportional dimensions for crisp, prominent branding
  const sizes = {
    sm: {
      icon: 'w-9 h-9 sm:w-10 sm:h-10',
      textTitle: 'text-lg sm:text-xl',
      textSub: 'text-[9px] sm:text-[10px]',
    },
    md: {
      icon: 'w-11 h-11 sm:w-12 sm:h-12',
      textTitle: 'text-xl sm:text-2xl',
      textSub: 'text-[10px] sm:text-[11px]',
    },
    lg: {
      icon: 'w-14 h-14 sm:w-16 sm:h-16',
      textTitle: 'text-2xl sm:text-3xl',
      textSub: 'text-xs',
    },
  };

  const currentSize = sizes[size];

  const logoContent = (
    <div className={`flex items-center gap-2.5 sm:gap-3 group select-none ${className}`}>
      {/* Precision Brand Icon Vector: Architectural House + Chimney + 3 Green Eco-Leaves */}
      <div
        className={`relative flex-shrink-0 ${currentSize.icon} transition-transform duration-300 group-hover:scale-105`}
      >
        <svg
          viewBox="0 0 100 110"
          className="w-full h-full drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="marcaFrameGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3A434F" />
              <stop offset="50%" stopColor="#1E252D" />
              <stop offset="100%" stopColor="#11161C" />
            </linearGradient>
            <linearGradient id="marcaGoldTrim" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DFCA8E" />
              <stop offset="50%" stopColor="#C4A661" />
              <stop offset="100%" stopColor="#967A37" />
            </linearGradient>
            <linearGradient id="leafGradCenter" x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#9DE244" />
              <stop offset="40%" stopColor="#76B82A" />
              <stop offset="100%" stopColor="#4A7E15" />
            </linearGradient>
            <linearGradient id="leafGradSides" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#92D73A" />
              <stop offset="50%" stopColor="#6FA82A" />
              <stop offset="100%" stopColor="#477713" />
            </linearGradient>
          </defs>

          {/* Chimney / Vent on top right */}
          <path
            d="M 68 18 L 84 18 L 84 37 L 76 37 L 68 29 Z"
            fill="url(#marcaFrameGrad)"
            stroke="url(#marcaGoldTrim)"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Outer House Pitch Frame */}
          <path
            d="M 50 14 L 88 44 L 88 90 L 72 90 L 72 52 L 50 34 L 28 52 L 28 90 L 12 90 L 12 44 Z"
            fill="url(#marcaFrameGrad)"
            stroke="url(#marcaGoldTrim)"
            strokeWidth="3.2"
            strokeLinejoin="round"
          />

          {/* Eco Leaves Symbol (3 leaves inside house outline) */}
          {/* Top Center Leaf */}
          <path
            d="M 50 36 C 44 45 42 54 50 63 C 58 54 56 45 50 36 Z"
            fill="url(#leafGradCenter)"
            stroke="#3F6912"
            strokeWidth="1.2"
          />
          {/* Center leaf spine */}
          <path d="M 50 39 L 50 60" stroke="#C4F488" strokeWidth="1" strokeLinecap="round" opacity="0.8" />

          {/* Left Leaf */}
          <path
            d="M 46 64 C 36 60 27 60 28 47 C 38 48 44 56 46 64 Z"
            fill="url(#leafGradSides)"
            stroke="#3F6912"
            strokeWidth="1.2"
          />
          <path d="M 31 51 C 36 54 41 58 44 62" stroke="#B8EE7A" strokeWidth="0.9" opacity="0.8" />

          {/* Right Leaf */}
          <path
            d="M 54 64 C 64 60 73 60 72 47 C 62 48 56 56 54 64 Z"
            fill="url(#leafGradSides)"
            stroke="#3F6912"
            strokeWidth="1.2"
          />
          <path d="M 69 51 C 64 54 59 58 56 62" stroke="#B8EE7A" strokeWidth="0.9" opacity="0.8" />
        </svg>
      </div>

      {/* Typography: MARCA CONSTRUCTION */}
      {showText && (
        <div className="flex flex-col tracking-tight">
          <span
            className={`font-extrabold uppercase tracking-[0.14em] leading-none transition-colors duration-200 ${
              currentSize.textTitle
            } ${
              variant === 'light'
                ? 'text-white'
                : variant === 'dark'
                ? 'text-marca-dark'
                : 'text-marca-dark group-hover:text-marca-green'
            }`}
          >
            MARCA
          </span>
          <span
            className={`font-semibold tracking-[0.28em] uppercase leading-tight mt-0.5 ${
              currentSize.textSub
            } ${
              variant === 'light'
                ? 'text-marca-gold-light opacity-95'
                : 'text-marca-gold-dark'
            }`}
          >
            CONSTRUCTION
          </span>
        </div>
      )}
    </div>
  );

  if (asLink) {
    return (
      <Link to="/" aria-label="Marca Construction Home" className="inline-block py-1">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
};
