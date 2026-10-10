import React from 'react';
import { ASSETS } from '../assets/images';

interface AdvanceIronLogoProps {
  className?: string;
  size?: number | string;
  alt?: string;
}

export const AdvanceIronLogo: React.FC<AdvanceIronLogoProps> = ({
  className = 'w-12 h-12',
  size,
  alt = 'Advance Iron Engineering Works Official Logo',
}) => {
  return (
    <div
      className={`inline-flex items-center justify-center bg-white rounded-xl overflow-hidden p-1 shadow-sm border border-slate-200 shrink-0 ${className}`}
      style={size ? { width: size, height: size } : undefined}
      title="Advance Iron Engineering Works"
    >
      <img
        src={ASSETS.advanceIronLogo}
        alt={alt}
        className="w-full h-full object-contain"
        loading="eager"
      />
    </div>
  );
};
