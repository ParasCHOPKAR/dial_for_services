"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight, Phone, CheckCircle2, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useBookingModal } from "@/context/BookingModalContext";

interface HeroSlide {
  id: string;
  tagline: string;
  title: React.ReactNode;
  desc: string;
  desktopVideo: string;
  mobileVideo: string;
  label: string;
  badge: string;
  primaryLink: string;
}

const slides: HeroSlide[] = [
  {
    id: "home-care",
    tagline: "Trusted Home Appliance Repair Experts",
    title: (
      <>
        Your Comfort <br />
        <span className="text-kk-teal">Is Our Priority</span>
      </>
    ),
    desc: "Fast, reliable and professional home appliance repair services in Pune. We fix your appliances, so you can get back to what matters most.",
    desktopVideo: "/new_imgs/Hero_vdeo_01.mp4",
    mobileVideo: "/new_imgs/MOBILE_VIEW_HERO_HOME.mp4",
    label: "All Appliances",
    badge: "Full Home Care",
    primaryLink: "/enquire",
  },
];

export default function HeroSlider() {
  const { theme, mounted } = useTheme();
  const { openBookingModal } = useBookingModal();
  const isLight = mounted ? theme !== "dark" : true;
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const mobileVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
    if (mobileVideoRef.current) {
      mobileVideoRef.current.play().catch(() => {});
    }
  }, []);

  const slide = slides[0];

  return (
    <section 
      id="hero" 
      className="relative overflow-hidden bg-white transition-all duration-700 ease-in-out select-none"
      style={{ backgroundColor: "#ffffff" }}
    >
      {/* Completely pure white backside background layer */}
      <div 
        className="absolute inset-0 bg-white z-0 pointer-events-none" 
        style={{ backgroundColor: "#ffffff" }} 
      />

      {/* Desktop Background Video (Hidden on mobile, visible on md+): Hero_vdeo_01.mp4 */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="hidden md:block absolute inset-0 w-full h-[106%] -top-0 object-cover object-[center_35%] z-[1] brightness-[1.05] contrast-[1.05] translate-y-3 sm:translate-y-5"
      >
        <source src={slide.desktopVideo} type="video/mp4" />
      </video>

      {/* Mobile Background Video (Visible on mobile only, hidden on md+): MOBILE_VIEW_HERO_HOME.mp4 */}
      <video
        ref={mobileVideoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="block md:hidden absolute inset-0 w-full h-full object-cover object-top z-[1] brightness-[1.02]"
      >
        <source src={slide.mobileVideo} type="video/mp4" />
      </video>

      {/* Subtle Readability Gradient Overlay: keeps text crisp while leaving video clear & vivid */}
      <div 
        className={`absolute inset-0 transition-all duration-700 z-[2] pointer-events-none ${
          isLight
            ? "bg-gradient-to-t from-white via-white/80 to-transparent/30 md:bg-gradient-to-r md:from-white md:via-white/80 md:to-transparent lg:w-3/5"
            : "bg-gradient-to-t from-black/90 via-black/60 to-transparent/30 md:bg-gradient-to-r md:from-black/90 md:via-black/60 md:to-transparent lg:w-3/5"
        }`}
      />

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Content & Interactive Controls */}
          <div className="lg:col-span-8 pt-8 pb-10 sm:pt-12 sm:pb-14 lg:pt-14 lg:pb-16 min-h-[460px] sm:min-h-[500px] flex flex-col justify-center">
            
            {/* Headline Card */}
            <div className="mb-4 sm:mb-6">
              {/* Tagline & Category Badge */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 mb-2.5 sm:mb-4">
                <span className="inline-block w-5 sm:w-8 h-0.5 bg-kk-teal"></span>
                <span 
                  className={`text-[11px] sm:text-xs md:text-sm font-bold tracking-wider uppercase ${
                    isLight ? "text-kk-teal font-extrabold" : "text-cyan-300 font-extrabold"
                  }`}
                >
                  {slide.tagline}
                </span>
                <span className={`text-[10px] sm:text-xs font-semibold px-2 sm:px-2.5 py-0.5 rounded-full border ${
                  isLight ? "bg-kk-teal/15 text-kk-teal border-kk-teal/30" : "bg-cyan-500/15 text-cyan-300 border-cyan-400/30"
                }`}>
                  {slide.badge}
                </span>
              </div>

              {/* Main Headline */}
              <h1 
                className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.15] mb-3 sm:mb-4 ${
                  isLight ? "text-[#002244]" : "text-white"
                }`}
              >
                {slide.title}
              </h1>

              {/* Description */}
              <p 
                className={`text-xs sm:text-base lg:text-lg max-w-xl leading-relaxed ${
                  isLight ? "text-slate-600" : "text-slate-200/90"
                }`}
              >
                {slide.desc}
              </p>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 w-full sm:w-auto">
              <button 
                type="button"
                onClick={() => openBookingModal(slide.label)} 
                className="bg-gradient-to-r from-kk-teal to-[#16a34a] hover:opacity-95 text-white px-5 sm:px-7 lg:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-md font-bold transition-all shadow-md text-center flex items-center justify-center gap-2 active:scale-95 text-sm sm:text-base cursor-pointer"
              >
                <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white rounded-sm flex items-center justify-center opacity-90">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-sm" />
                </div>
                Book a Service <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <a 
                href="tel:+917823038645" 
                className={`px-5 sm:px-7 lg:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-md font-bold transition-all text-center flex items-center justify-center gap-2 active:scale-95 text-sm sm:text-base cursor-pointer ${
                  isLight
                    ? "bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 shadow-xs hover:border-kk-teal"
                    : "bg-black/60 hover:bg-black/90 border border-white/20 hover:border-cyan-400 text-white backdrop-blur-sm"
                }`}
              >
                <Phone className={`w-4 h-4 sm:w-5 sm:h-5 ${isLight ? "text-kk-teal" : "text-cyan-300"}`} /> Call Now
              </a>
            </div>

            {/* Feature Highlights */}
            <div 
              className={`grid grid-cols-2 gap-2 sm:gap-3 lg:flex lg:flex-wrap lg:gap-4 xl:gap-5 text-[11px] sm:text-xs md:text-sm ${
                isLight ? "text-slate-800" : "text-white"
              }`}
            >
              <div 
                className={`flex items-center gap-1.5 sm:gap-2 p-2 sm:px-3 rounded-lg backdrop-blur-xs ${
                  isLight 
                    ? "bg-white/80 border border-teal-100/80 shadow-xs font-semibold" 
                    : "bg-white/5 sm:bg-transparent border border-white/10 sm:border-none font-medium"
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-kk-teal shrink-0" />
                <span className={isLight ? "text-slate-800" : "opacity-90"}>Skilled Technicians</span>
              </div>

              <div 
                className={`flex items-center gap-1.5 sm:gap-2 p-2 sm:px-3 rounded-lg backdrop-blur-xs ${
                  isLight 
                    ? "bg-white/80 border border-teal-100/80 shadow-xs font-semibold" 
                    : "bg-white/5 sm:bg-transparent border border-white/10 sm:border-none font-medium"
                }`}
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-kk-teal shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className={isLight ? "text-slate-800" : "opacity-90"}>Genuine Parts</span>
              </div>

              <div 
                className={`flex items-center gap-1.5 sm:gap-2 p-2 sm:px-3 rounded-lg backdrop-blur-xs ${
                  isLight 
                    ? "bg-white/80 border border-teal-100/80 shadow-xs font-semibold" 
                    : "bg-white/5 sm:bg-transparent border border-white/10 sm:border-none font-medium"
                }`}
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-kk-teal shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                <span className={isLight ? "text-slate-800" : "opacity-90"}>Affordable Rates</span>
              </div>

              <div 
                className={`flex items-center gap-1.5 sm:gap-2 p-2 sm:px-3 rounded-lg backdrop-blur-xs ${
                  isLight 
                    ? "bg-white/80 border border-teal-100/80 shadow-xs font-semibold" 
                    : "bg-white/5 sm:bg-transparent border border-white/10 sm:border-none font-medium"
                }`}
              >
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-kk-teal shrink-0" />
                <span className={isLight ? "text-slate-800" : "opacity-90"}>Same-Day Service</span>
              </div>
            </div>

          </div>

          {/* Right Column (empty spacer to let background video shine through clearly) */}
          <div className="lg:col-span-4 hidden lg:block pointer-events-none min-h-[400px]" />

        </div>
      </div>
    </section>
  );
}
