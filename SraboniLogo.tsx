import React from 'react';
import { ASSETS } from '../assets/images';

interface SraboniLogoProps {
  className?: string;
  size?: number | string;
  alt?: string;
}

export const SraboniLogo: React.FC<SraboniLogoProps> = ({
  className = 'w-12 h-12',
  size,
  alt = 'M/S Sraboni Enterprise Official Logo',
}) => {
  return (
    <div
      className={`inline-flex items-center justify-center bg-white rounded-xl overflow-hidden p-1 shadow-sm border border-slate-200 shrink-0 ${className}`}
      style={size ? { width: size, height: size } : undefined}
      title="M/S Sraboni Enterprise"
    >
      <img
        src={ASSETS.sraboniLogo}
        alt={alt}
        className="w-full h-full object-contain"
        loading="eager"
      />
    </div>
  );
};
