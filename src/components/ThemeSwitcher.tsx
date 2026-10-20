"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon, Palette, Check } from "lucide-react";

interface ThemeSwitcherProps {
  variant?: "topbar" | "mobile" | "floating";
  className?: string;
}

export default function ThemeSwitcher({ variant = "topbar", className = "" }: ThemeSwitcherProps) {
  const { theme, setTheme, toggleTheme, mounted } = useTheme();
  // Safe theme state: fallback to 'dark' during SSR before mounting
  const activeTheme = mounted ? (theme === "light" ? "light" : "dark") : "dark";

  // 1. TopBar variant: Clean pill switcher between Light Mode (White) and Dark Mode (Black)
  if (variant === "topbar") {
    return (
      <div 
        className={`inline-flex items-center p-0.5 rounded-full text-xs shadow-inner transition-colors duration-300 ${
          activeTheme === "light"
            ? "bg-slate-100/90 border border-slate-200"
            : "bg-black/60 backdrop-blur-sm border border-white/20"
        } ${className}`}
      >
        <button
          type="button"
          onClick={() => setTheme("light")}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-bold transition-all duration-200 cursor-pointer ${
            activeTheme === "light"
              ? "bg-white text-slate-900 shadow-md font-extrabold border border-slate-200/60"
              : "text-white/80 hover:text-white hover:bg-white/10"
          }`}
          title="Switch to Light Mode (White Background)"
          aria-label="Light Mode"
        >
          <Sun className={`w-3.5 h-3.5 ${activeTheme === "light" ? "text-kk-teal fill-kk-teal/30" : "text-white/70"}`} />
          <span className="text-[11px]">{activeTheme === "light" ? "Light Mode" : "Light"}</span>
        </button>

        <button
          type="button"
          onClick={() => setTheme("dark")}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-bold transition-all duration-200 cursor-pointer ${
            activeTheme === "dark"
              ? "bg-[#000000] text-white shadow-md font-extrabold border border-cyan-400/30"
              : activeTheme === "light"
                ? "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                : "text-white/80 hover:text-white hover:bg-white/10"
          }`}
          title="Switch to Dark Mode (Black Background)"
          aria-label="Dark Mode"
        >
          <Moon className={`w-3.5 h-3.5 ${activeTheme === "dark" ? "text-cyan-400 fill-cyan-400" : "text-slate-400"}`} />
          <span className="text-[11px]">{activeTheme === "dark" ? "Dark Mode" : "Dark"}</span>
        </button>
      </div>
    );
  }

  // 2. Mobile Drawer variant
  if (variant === "mobile") {
    return (
      <div className={`rounded-2xl p-3.5 border transition-colors ${
        activeTheme === "light"
          ? "bg-slate-50 border-slate-200"
          : "bg-[#0b0c10] border-white/10"
      } ${className}`}>
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 text-kk-teal">
            <Palette className="w-3.5 h-3.5" /> Website Mode
          </span>
          <span className="text-[11px] font-semibold text-kk-teal">
            {activeTheme === "light" ? "Light (White)" : "Dark (Black)"}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {/* Light Mode Option */}
          <button
            type="button"
            onClick={() => setTheme("light")}
            className={`p-2.5 rounded-xl border text-left flex flex-col gap-1 transition-all cursor-pointer ${
              activeTheme === "light"
                ? "bg-white border-[#00a8b5] shadow-sm ring-2 ring-[#00a8b5]/25"
                : "bg-white/90 border-slate-200 hover:bg-white"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded-full bg-white border border-slate-300 shadow-2xs" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#00a8b5]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#16a34a]" />
              </div>
              {activeTheme === "light" && <Check className="w-3.5 h-3.5 text-[#00a8b5]" />}
            </div>
            <span className="text-xs font-bold text-slate-900 mt-1">Light Mode</span>
            <span className="text-[10px] text-slate-500 leading-tight">White Background</span>
          </button>

          {/* Dark Mode Option */}
          <button
            type="button"
            onClick={() => setTheme("dark")}
            className={`p-2.5 rounded-xl border text-left flex flex-col gap-1 transition-all cursor-pointer ${
              activeTheme === "dark"
                ? "bg-black border-cyan-400 shadow-sm ring-2 ring-cyan-400/25 text-white"
                : "bg-slate-900 border-slate-800 hover:bg-black text-white"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded-full bg-black border border-white/30" />
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
              </div>
              {activeTheme === "dark" && <Check className="w-3.5 h-3.5 text-cyan-400" />}
            </div>
            <span className="text-xs font-bold text-white mt-1">Dark Mode</span>
            <span className="text-[10px] text-slate-400 leading-tight">Black Background</span>
          </button>
        </div>
      </div>
    );
  }

  // 3. Fallback toggle button
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`fixed bottom-6 right-6 z-40 backdrop-blur-md border shadow-xl px-4 py-2.5 rounded-full flex items-center gap-2.5 text-xs font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer ${
        activeTheme === "light"
          ? "bg-white/95 text-slate-900 border-slate-200"
          : "bg-black/95 text-white border-white/20"
      } ${className}`}
      title="Click to toggle light/dark mode"
    >
      {activeTheme === "light" ? (
        <>
          <Sun className="w-4 h-4 text-kk-teal" />
          <span>Light Mode</span>
        </>
      ) : (
        <>
          <Moon className="w-4 h-4 text-cyan-400 fill-cyan-400" />
          <span>Dark Mode</span>
        </>
      )}
    </button>
  );
}
