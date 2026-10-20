"use client";

import React from 'react';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';

export default function Logo({ className }: { className?: string }) {
  const { theme, mounted } = useTheme();
  const isLight = mounted && theme === 'light';

  return (
    <div className={`flex items-center select-none theme-logo-wrapper transition-all duration-300 ${className || ''}`}>
      <div className="relative w-44 sm:w-52 md:w-56 h-12 sm:h-14">
        <Image
          src="/new_imgs/logo.png"
          alt="Dial For Services"
          fill
          className={`object-contain object-left transition-all duration-300 ${!isLight ? 'drop-shadow-[0_2px_12px_rgba(255,255,255,0.45)]' : ''}`}
          priority
        />
      </div>
    </div>
  );
}
