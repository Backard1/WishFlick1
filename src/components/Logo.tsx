import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="boxGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B48DFE" />
            <stop offset="100%" stopColor="#98E2D5" />
          </linearGradient>
          <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#98E2D5" />
            <stop offset="100%" stopColor="#B48DFE" />
          </linearGradient>
        </defs>
        
        {/* Gift box base - outline only */}
        <rect
          x="20"
          y="40"
          width="60"
          height="40"
          rx="6"
          fill="none"
          stroke="url(#boxGradient)"
          strokeWidth="3"
        />
        
        {/* Gift box lid - outline only */}
        <rect
          x="18"
          y="35"
          width="64"
          height="12"
          rx="6"
          fill="none"
          stroke="url(#boxGradient)"
          strokeWidth="3"
        />
        
        {/* Ribbon vertical - outline only */}
        <rect
          x="47"
          y="30"
          width="6"
          height="55"
          fill="none"
          stroke="url(#boxGradient)"
          strokeWidth="2"
        />
        
        {/* Bow left loop - outline only */}
        <path
          d="M35 30 Q28 22 22 30 Q28 38 35 30"
          fill="none"
          stroke="url(#boxGradient)"
          strokeWidth="2.5"
        />
        
        {/* Bow right loop - outline only */}
        <path
          d="M65 30 Q72 22 78 30 Q72 38 65 30"
          fill="none"
          stroke="url(#boxGradient)"
          strokeWidth="2.5"
        />
        
        {/* Bow center knot - outline only */}
        <circle
          cx="50"
          cy="30"
          r="4"
          fill="none"
          stroke="url(#boxGradient)"
          strokeWidth="2.5"
        />
        
        {/* Heart inside - filled with gradient */}
        <path
          d="M50 68 C45 63 35 58 35 50 C35 46 38 43 42 43 C45 43 48 45 50 48 C52 45 55 43 58 43 C62 43 65 46 65 50 C65 58 55 63 50 68Z"
          fill="url(#heartGradient)"
        />
      </svg>
    </div>
  );
};

export default Logo;