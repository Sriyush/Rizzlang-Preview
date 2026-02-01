import React from 'react';

export const RizzLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="rizz_grad" x1="0" y1="100" x2="100" y2="0" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF3366" />
        <stop offset="1" stopColor="#7000FF" />
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="5" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    
    {/* Main R Shape - Stylized */}
    <path 
      d="M20 15 H50 C75 15 75 55 50 55 H35 V85 H20 V15 Z" 
      fill="url(#rizz_grad)" 
    />
    <path 
      d="M50 55 L75 85 H55 L35 55" 
      fill="url(#rizz_grad)" 
    />
    
    {/* Plus Signs (++) */}
    <g fill="#00FF99" filter="url(#glow)">
      <rect x="75" y="20" width="8" height="25" rx="2" />
      <rect x="66.5" y="28.5" width="25" height="8" rx="2" />
      
      <rect x="85" y="50" width="8" height="25" rx="2" />
      <rect x="76.5" y="58.5" width="25" height="8" rx="2" />
    </g>
  </svg>
);
