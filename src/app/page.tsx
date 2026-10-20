'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone, Wrench, CheckCircle2, Home, ArrowRight, Building2,
  Building, ShoppingBag, Users2, Landmark, Calendar, Thermometer,
  Mail, MapPin, Star, Quote, BadgeCheck, TrendingUp, Search,
  ChevronRight, Wind, ShieldCheck, Clock, Sparkles, Zap, Check,
} from 'lucide-react';
import HeroSlider from '@/components/HeroSlider';
import Navbar from '@/components/Navbar';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';
import OpenBookingButton from '@/components/OpenBookingButton';

/* ─── Global Styles & Keyframes ──────────────────────────────────────────── */
const GLOBAL_STYLES = `
  @keyframes dfs-marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes dfs-marquee-rev {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }
  @keyframes dfs-float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-14px) rotate(1.5deg); }
  }
  @keyframes dfs-drift {
    0%, 100% { transform: translate3d(0,0,0) scale(1); }
    33% { transform: translate3d(40px,-30px,0) scale(1.08); }
    66% { transform: translate3d(-30px,20px,0) scale(0.95); }
  }
  @keyframes dfs-flow {
    0% { background-position: 0% 50%; }
    100% { background-position: 200% 50%; }
  }
  @keyframes dfs-flow-bg {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  @keyframes dfs-sheen {
    0%, 60% { transform: translateX(-120%); }
    100% { transform: translateX(120%); }
  }
  @keyframes dfs-travel {
    0% { left: 0%; opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { left: 100%; opacity: 0; }
  }
  @keyframes dfs-spin-slow {
    to { transform: rotate(360deg); }
  }
  @keyframes dfs-ping-soft {
    0% { transform: scale(1); opacity: .6; }
    100% { transform: scale(2.4); opacity: 0; }
  }

  .dfs-marquee-track {
    display: flex;
    width: max-content;
    animation: dfs-marquee 40s linear infinite;
  }
  .dfs-marquee-track-rev {
    display: flex;
    width: max-content;
    animation: dfs-marquee-rev 46s linear infinite;
  }
  .dfs-marquee-wrap:hover .dfs-marquee-track,
  .dfs-marquee-wrap:hover .dfs-marquee-track-rev {
    animation-play-state: paused;
  }
  .dfs-float { animation: dfs-float 7s ease-in-out infinite; }
  .dfs-drift { animation: dfs-drift 18s ease-in-out infinite; }
  .dfs-spin-slow { animation: dfs-spin-slow 24s linear infinite; }

  .dfs-text-grad {
    background-image: linear-gradient(90deg, #003B8E, #00C8D7, #65D01E, #00C8D7, #003B8E);
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: dfs-flow 6s linear infinite;
  }

  .dfs-border-flow {
    background: linear-gradient(120deg, #003B8E, #00C8D7, #65D01E, #00C8D7, #003B8E);
    background-size: 300% 300%;
    animation: dfs-flow-bg 9s ease infinite;
  }

  .dfs-sheen { position: relative; overflow: hidden; isolation: isolate; }
  .dfs-sheen::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.45) 50%, transparent 70%);
    transform: translateX(-120%);
    animation: dfs-sheen 3.8s ease-in-out infinite;
    pointer-events: none;
    z-index: -1;
  }

  .dfs-dot-grid {
    background-image: radial-gradient(#003B8E 1.5px, transparent 1.5px);
    background-size: 32px 32px;
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

/* ─── 1. Scroll Progress Hook ────────────────────────────────────────────── */
function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return progress;
}

/* ─── 2. Intersection Reveal Hook ────────────────────────────────────────── */
function useReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.05) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px 50px 0px' }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* ─── 3. Reveal (fade + slide) ───────────────────────────────────────────── */
function Reveal({
  children,
  className = '',
  delay = 0,
  dir = 'up',
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  dir?: 'up' | 'down' | 'left' | 'right' | 'scale';
}) {
  const { ref, visible } = useReveal();

  const hidden: Record<string, string> = {
    up: 'opacity-0 translate-y-8',
    down: 'opacity-0 -translate-y-8',
    left: 'opacity-0 -translate-x-8',
    right: 'opacity-0 translate-x-8',
    scale: 'opacity-0 scale-95',
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: visible ? `${delay}ms` : '0ms',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`${className} transition-all duration-700 will-change-[transform,opacity] ${
        visible ? 'opacity-100 translate-x-0 translate-y-0 scale-100' : hidden[dir]
      }`}
    >
      {children}
    </div>
  );
}

/* ─── 4. Split Word Heading (Always 100% visible and high-contrast) ───────── */
function SplitWords({
  text,
  gradient = false,
  className = '',
}: {
  text: string;
  gradient?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`${
        gradient
          ? 'inline-block dfs-text-grad pb-1 font-black'
          : 'inline-block font-black text-inherit'
      } ${className}`}
    >
      {text}
    </span>
  );
}


/* ─── 5. Interactive Card (spotlight + optional 3D tilt) ─────────────────── */
function InteractiveCard({
  children,
  className = '',
  color = '0,200,215',
  tilt = true,
  intensity = 5,
}: {
  children: React.ReactNode;
  className?: string;
  color?: string;
  tilt?: boolean;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    el.style.setProperty('--mx', `${x}px`);
    el.style.setProperty('--my', `${y}px`);
    if (tilt) {
      const rx = ((y - r.height / 2) / (r.height / 2)) * -intensity;
      const ry = ((x - r.width / 2) / (r.width / 2)) * intensity;
      el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.015,1.015,1.015)`;
    }
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`group relative rounded-3xl will-change-transform ${className}`}
      style={{ transition: 'transform 0.45s cubic-bezier(0.16,1,0.3,1)' }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(${color},0.18), transparent 60%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

/* ─── 6. Magnetic Wrapper (buttons pull toward the cursor) ───────────────── */
function Magnetic({
  children,
  strength = 0.25,
  className = '',
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate3d(0,0,0)';
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`inline-block transition-transform duration-300 ease-out ${className}`}
    >
      {children}
    </div>
  );
}

/* ─── 7. Parallax Layer (self-contained, no page re-renders) ─────────────── */
function ParallaxLayer({
  speed = 0.15,
  className = '',
  children,
}: {
  speed?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - window.innerHeight / 2;
      el.style.transform = `translate3d(0, ${-center * speed}px, 0)`;
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}

/* ─── 8. Animated Counter ────────────────────────────────────────────────── */
function useCounter(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let raf = 0;
    const step = (ts: number) => {
      if (startTime === null) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 4);
      setCount(Math.floor(ease * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return count;
}

function StatCard({
  value,
  suffix,
  label,
  sub,
  start,
  icon: Icon,
}: {
  value: number;
  suffix: string;
  label: string;
  sub: string;
  start: boolean;
  icon: React.ElementType;
}) {
  const count = useCounter(value, 2000, start);
  return (
    <div className="group relative flex flex-col items-center sm:items-start text-center sm:text-left p-6 sm:p-7 transition-colors duration-500 hover:bg-white/[0.04] overflow-hidden">
      <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-[#00C8D7]/0 group-hover:bg-[#00C8D7]/20 blur-2xl transition-all duration-700 pointer-events-none" />
      <Icon className="w-5 h-5 text-[#65D01E] mb-3 transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-12" />
      <div className="flex items-baseline gap-1">
        <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight tabular-nums dfs-text-grad">
          {count.toLocaleString()}
        </span>
        <span className="text-2xl sm:text-3xl font-black text-[#65D01E]">{suffix}</span>
      </div>
      <span className="text-white font-bold text-sm sm:text-base mt-2">{label}</span>
      <span className="text-slate-400 text-xs mt-0.5">{sub}</span>
      <span className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#00C8D7] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
    </div>
  );
}

/* ─── Static Data ────────────────────────────────────────────────────────── */
const MARQUEE_ROW_A = [
  { badge: 'SAME-DAY', text: 'Doorstep Visit in 60 Mins' },
  { badge: '15,000+', text: 'Happy Homes Across Pune' },
  { badge: '90-DAY', text: 'Service & Spare Parts Warranty' },
  { badge: 'ISO 9001', text: 'Certified & Background-Verified Techs' },
  { badge: '4.9 ★', text: 'Top Rated Appliance Care Partner' },
  { badge: '100%', text: 'Transparent Upfront Pricing' },
];

const MARQUEE_ROW_B = [
  { badge: 'AC', text: 'Foam Jet Deep Service' },
  { badge: 'OEM', text: 'Genuine Spare Parts Only' },
  { badge: '24/7', text: 'Priority Helpline' },
  { badge: 'AMC', text: 'Zero-Downtime Commercial Contracts' },
  { badge: 'PUNE', text: '25+ Pin-Codes Covered' },
  { badge: 'ZERO', text: 'Hidden Visiting Charges' },
];

const SERVICE_STEPS = [
  {
    step: 'STEP 01',
    num: '01',
    Icon: Calendar,
    title: 'Book Your Slot',
    desc: 'Select your appliance and preferred time window online or via a 30-second phone call.',
    accent: 'from-[#003B8E] to-[#00C8D7]',
    badgeColor: 'text-[#00C8D7] border-[#00C8D7]/30 bg-[#00C8D7]/10',
  },
  {
    step: 'STEP 02',
    num: '02',
    Icon: Search,
    title: 'Diagnose & Upfront Quote',
    desc: 'Our certified engineer arrives on time, runs a full diagnostic, and shares a fixed rate-card quote.',
    accent: 'from-[#00C8D7] to-[#38D070]',
    badgeColor: 'text-[#00C8D7] border-[#00C8D7]/30 bg-[#00C8D7]/10',
  },
  {
    step: 'STEP 03',
    num: '03',
    Icon: Wrench,
    title: 'Same-Day Resolution',
    desc: 'We fix the issue using genuine OEM components, test performance, and issue your 90-day warranty.',
    accent: 'from-[#38D070] to-[#65D01E]',
    badgeColor: 'text-[#65D01E] border-[#65D01E]/30 bg-[#65D01E]/10',
  },
];

const SECTORS = [
  { Icon: Home, label: 'Residential', desc: 'Flats, villas & bungalows' },
  { Icon: Building2, label: 'Commercial', desc: 'Restaurants & cafes' },
  { Icon: Building, label: 'IT & Offices', desc: 'Corporate workspaces' },
  { Icon: ShoppingBag, label: 'Retail Outlets', desc: 'Showrooms & malls' },
  { Icon: Users2, label: 'Housing Societies', desc: 'Bulk society camps' },
  { Icon: Landmark, label: 'Institutions', desc: 'Hospitals & colleges' },
];

const WHY_ITEMS = [
  { title: 'Background-Verified Pros', desc: 'Rigorous technical & security screening' },
  { title: '100% Genuine OEM Spares', desc: 'Original parts with sealed warranty' },
  { title: '60-Minute Rapid Dispatch', desc: 'Technicians stationed across all Pune zones' },
  { title: 'Upfront Digital Rate Card', desc: 'Zero hidden inspection surprises' },
  { title: '90-Day Service Warranty', desc: 'Free re-visit if the same issue recurs' },
  { title: '24/7 Priority Helpline', desc: 'Live human support whenever you call' },
];

const REVIEWS = [
  {
    text: 'Pricing is super transparent — zero hidden visiting charges. The technician explained the washing machine PCB issue clearly before fixing it.',
    name: 'Priya Desai',
    loc: 'Hinjewadi, Pune',
    service: 'Washing Machine',
  },
  {
    text: 'Our commercial deep freezer stopped working on a Saturday evening. Their team understood the urgency and replaced the relay the same night.',
    name: 'Vikram Singh',
    loc: 'Balewadi High Street',
    service: 'Commercial Fridge',
  },
  {
    text: 'Booked online in 2 minutes and got a confirmation call immediately. Microwave heating issue resolved with a genuine magnetron replacement.',
    name: 'Anita Kulkarni',
    loc: 'Wakad, Pune',
    service: 'Microwave Repair',
  },
  {
    text: 'They serviced all 4 split ACs in our office using jet-foam bags without leaving a single drop of water on the walls. Highly professional!',
    name: 'Suresh Patil',
    loc: 'Baner, Pune',
    service: 'AC Foam Jet Service',
  },
];

const MarqueeItems = ({ items }: { items: { badge: string; text: string }[] }) => (
  <>
    {items.map((item, idx) => (
      <div key={idx} className="flex items-center gap-3 px-8">
        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black tracking-wider bg-gradient-to-r from-[#00C8D7]/20 to-[#65D01E]/20 border border-[#65D01E]/40 text-[#65D01E]">
          {item.badge}
        </span>
        <span className="text-white/85 text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap">
          {item.text}
        </span>
        <span className="text-[#00C8D7]/40 ml-4">✦</span>
      </div>
    ))}
  </>
);

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#00C8D7] focus:ring-4 focus:ring-[#00C8D7]/15 transition-all duration-300 bg-slate-50 dark:bg-[#040D1F] dark:text-white text-sm';

/* ─── Main Page Component ────────────────────────────────────────────────── */
export default function HomePage() {
  const scrollProgress = useScrollProgress();
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const node = statsRef.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStatsVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <main
      id="top"
      className="min-h-screen font-sans bg-[#F8FAFC] dark:bg-[#020813] text-slate-900 dark:text-white flex flex-col overflow-x-clip selection:bg-[#65D01E] selection:text-[#001B44]"
    >
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_STYLES }} />

      {/* ── SCROLL PROGRESS ──────────────────────────────────────────────── */}
      <div className="fixed top-0 left-0 right-0 h-1 z-[100] bg-transparent pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#003B8E] via-[#00C8D7] to-[#65D01E] shadow-[0_0_14px_#65D01E] transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <TopBar />
      <Navbar />
      <HeroSlider />

      {/* ── DUAL MARQUEE TICKER ──────────────────────────────────────────── */}
      <div className="dfs-marquee-wrap relative bg-[#001433] border-y border-[#00C8D7]/20 py-3 overflow-hidden z-20 shadow-lg space-y-2">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#001433] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#001433] to-transparent z-10 pointer-events-none" />

        <div className="dfs-marquee-track py-1">
          <MarqueeItems items={MARQUEE_ROW_A} />
          <MarqueeItems items={MARQUEE_ROW_A} />
        </div>
        <div className="dfs-marquee-track-rev py-1 opacity-70">
          <MarqueeItems items={MARQUEE_ROW_B} />
          <MarqueeItems items={MARQUEE_ROW_B} />
        </div>
      </div>

      {/* ── FLOATING STATS CONSOLE ───────────────────────────────────────── */}
      <section ref={statsRef} className="relative z-20 -mt-6 sm:-mt-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <Reveal dir="up">
          <div className="relative rounded-3xl bg-gradient-to-br from-[#001B44] via-[#002861] to-[#00122E] border border-[#00C8D7]/30 shadow-[0_25px_70px_-15px_rgba(0,59,142,0.5)] overflow-hidden">
            <div className="h-1.5 w-full dfs-border-flow" />
            <div className="dfs-drift absolute -right-24 -top-24 w-72 h-72 bg-[#00C8D7]/15 rounded-full blur-3xl pointer-events-none" />
            <div
              className="dfs-drift absolute -left-24 -bottom-24 w-72 h-72 bg-[#65D01E]/10 rounded-full blur-3xl pointer-events-none"
              style={{ animationDelay: '-6s' }}
            />

            <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10 relative z-10">
              <StatCard icon={Home} value={15000} suffix="+" label="Happy Families" sub="Trusted across Maharashtra" start={statsVisible} />
              <StatCard icon={Wrench} value={50} suffix="+" label="Master Technicians" sub="Background verified pros" start={statsVisible} />
              <StatCard icon={Clock} value={10} suffix="+" label="Years of Excellence" sub="Industry-leading repair SLA" start={statsVisible} />
              <StatCard icon={ShieldCheck} value={99} suffix="%" label="First-Visit Fix Rate" sub="Genuine OEM spare parts" start={statsVisible} />
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── SERVICES BENTO ───────────────────────────────────────────────── */}
      <section id="services" className="py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04] dark:opacity-[0.06] dfs-dot-grid" />
        <ParallaxLayer speed={-0.08} className="absolute top-1/4 -left-10 w-96 h-96 pointer-events-none">
          <div className="dfs-drift w-full h-full bg-[#00C8D7]/10 rounded-full blur-[120px]" />
        </ParallaxLayer>
        <ParallaxLayer speed={0.1} className="absolute bottom-10 -right-10 w-96 h-96 pointer-events-none">
          <div className="dfs-drift w-full h-full bg-[#65D01E]/10 rounded-full blur-[120px]" style={{ animationDelay: '-9s' }} />
        </ParallaxLayer>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 lg:mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#003B8E]/10 dark:bg-[#00C8D7]/10 border border-[#00C8D7]/30 mb-5 backdrop-blur-sm">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inset-0 rounded-full bg-[#65D01E]" style={{ animation: 'dfs-ping-soft 1.8s ease-out infinite' }} />
                  <span className="relative w-2 h-2 rounded-full bg-[#65D01E]" />
                </span>
                <span className="text-xs font-extrabold tracking-[0.18em] uppercase text-[#003B8E] dark:text-[#00C8D7]">
                  Our Core Expertise
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-[1.06] tracking-tight">
                <SplitWords text="Precision Repair for" />
                <SplitWords text="Every Home Appliance" gradient />
              </h2>
            </div>

            <Magnetic>
              <Link
                href="/services"
                className="group self-start md:self-auto inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 text-sm font-extrabold text-slate-800 dark:text-white hover:border-[#00C8D7] shadow-sm hover:shadow-[0_10px_40px_-10px_rgba(0,200,215,0.4)] transition-all duration-500"
              >
                Explore All Services
                <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#003B8E] to-[#00C8D7] text-white flex items-center justify-center group-hover:translate-x-1 group-hover:rotate-[-45deg] transition-transform duration-500">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </Magnetic>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 lg:gap-6">
            {/* 1. Flagship AC Card */}
            <Reveal dir="left" className="lg:col-span-7 lg:row-span-2">
              <div className="dfs-border-flow rounded-3xl p-px h-full">
                <InteractiveCard className="h-full rounded-[23px]" color="0,200,215">
                  <Link
                    href="/services#ac"
                    className="group relative block h-full min-h-[420px] sm:min-h-[460px] rounded-[23px] overflow-hidden bg-gradient-to-br from-[#001433] via-[#002255] to-[#000f26] p-7 sm:p-10 flex flex-col justify-between shadow-2xl hover:shadow-[0_30px_80px_-15px_rgba(0,200,215,0.4)] transition-all duration-700"
                  >
                    {/* Top Badges */}
                    <div className="relative z-20 flex flex-wrap items-center justify-between gap-3">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#65D01E] text-[#001433] text-xs font-black tracking-wide shadow-md shadow-[#65D01E]/30">
                        <Zap className="w-3.5 h-3.5 fill-current" /> MOST BOOKED
                      </span>
                      <span className="text-xs font-bold !text-white bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-xs">
                        ⚡ 60-Min Express Arrival
                      </span>
                    </div>

                    {/* AC Showcase Image with Floating Tile & Glow */}
                    <div className="absolute right-4 sm:right-7 top-14 sm:top-1/2 sm:-translate-y-1/2 w-[180px] sm:w-[260px] md:w-[320px] h-[130px] sm:h-[180px] md:h-[210px] pointer-events-none z-10">
                      <div className="absolute -inset-2 bg-gradient-to-r from-[#00C8D7]/30 to-[#65D01E]/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />
                      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white shadow-2xl border-2 border-white/80 p-2 sm:p-3 flex items-center justify-center group-hover:scale-105 group-hover:-rotate-1 transition-transform duration-700">
                        <Image
                          src="/images/appliance_ac_1789636637732.jpg"
                          alt="Air Conditioner Service"
                          fill
                          className="object-contain p-2"
                          priority
                        />
                        <span className="absolute bottom-1.5 right-2 bg-slate-900/90 text-white text-[9px] sm:text-[10px] font-extrabold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#65D01E] animate-pulse" /> Split &amp; Window
                        </span>
                      </div>
                    </div>

                    {/* Left Text Content */}
                    <div className="relative z-20 max-w-[280px] xs:max-w-xs sm:max-w-sm mt-auto pt-24 sm:pt-16">
                      <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#00C8D7] to-[#003B8E] p-0.5 mb-4 shadow-lg shadow-[#00C8D7]/25 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                        <div className="w-full h-full bg-[#00183D] rounded-[14px] flex items-center justify-center">
                          <Wind className="w-6 h-6 text-[#00C8D7]" />
                        </div>
                      </div>

                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black !text-white mb-3 group-hover:!text-[#00C8D7] transition-colors duration-500 drop-shadow-md">
                        Air Conditioner Care
                      </h3>
                      <p className="!text-slate-100 text-sm sm:text-base leading-relaxed mb-6 font-medium drop-shadow-xs">
                        Deep foam jet servicing, gas charging, PCB repair &amp; installation for Split, Window, and Cassette ACs.
                      </p>

                      <div className="flex flex-wrap items-center gap-2 mb-7">
                        {['Foam Jet Wash', 'Gas Refill', 'Zero Leak Guarantee'].map((chip, i) => (
                          <span
                            key={i}
                            className="text-xs font-bold !text-white bg-white/20 border border-white/30 backdrop-blur-md px-3 py-1 rounded-xl shadow-xs hover:bg-white/30 transition-all"
                          >
                            {chip}
                          </span>
                        ))}
                      </div>

                      <div className="dfs-sheen inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#65D01E] to-[#4DB812] text-[#001433] font-black text-sm sm:text-base shadow-lg shadow-[#65D01E]/30 group-hover:gap-5 hover:scale-105 active:scale-95 transition-all duration-300">
                        Book AC Technician <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </InteractiveCard>
              </div>
            </Reveal>

            {/* 2. Refrigerator */}
            <Reveal dir="right" delay={100} className="lg:col-span-5">
              <InteractiveCard className="h-full" color="0,200,215">
                <Link
                  href="/services#refrigerator"
                  className="group relative block h-full min-h-[220px] rounded-3xl overflow-hidden bg-white dark:bg-[#071124] border border-slate-200/90 dark:border-white/10 hover:border-[#00C8D7] p-6 sm:p-7 flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative z-10 flex items-start justify-between gap-2">
                    <div className="w-12 h-12 rounded-2xl bg-[#00C8D7]/15 border border-[#00C8D7]/30 flex items-center justify-center text-[#003B8E] dark:text-[#00C8D7] group-hover:bg-[#00C8D7] group-hover:text-[#00183D] group-hover:rotate-12 transition-all duration-500 shrink-0">
                      <Home className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-white/10">
                      Single • Double • Side-by-Side
                    </span>
                  </div>

                  <div className="relative z-10 mt-4 flex items-center justify-between gap-4">
                    <div className="flex-1 max-w-[62%]">
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white group-hover:text-[#003B8E] dark:group-hover:text-[#00C8D7] transition-colors duration-500">
                        Refrigerator Repair
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mt-1.5 font-medium leading-relaxed">
                        Cooling failure, compressor replacement &amp; thermostat fixes.
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-[#003B8E] dark:text-[#65D01E] text-xs sm:text-sm font-black mt-3.5 group-hover:gap-2.5 transition-all duration-300">
                        Schedule Visit <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>

                    <div className="relative w-28 h-36 sm:w-32 sm:h-40 shrink-0 flex items-center justify-center">
                      <div className="absolute inset-0 bg-[#00C8D7]/10 rounded-2xl blur-lg pointer-events-none" />
                      <Image
                        src="/images/appliance_fridge_1789636595538.jpg"
                        alt="Refrigerator"
                        fill
                        className="object-contain drop-shadow-xl group-hover:scale-110 group-hover:-rotate-2 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </Link>
              </InteractiveCard>
            </Reveal>

            {/* 3. Washing Machine */}
            <Reveal dir="right" delay={200} className="lg:col-span-5">
              <InteractiveCard className="h-full" color="101,208,30">
                <Link
                  href="/services#washing-machine"
                  className="group relative block h-full min-h-[220px] rounded-3xl overflow-hidden bg-white dark:bg-[#071124] border border-slate-200/90 dark:border-white/10 hover:border-[#65D01E] p-6 sm:p-7 flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative z-10 flex items-start justify-between gap-2">
                    <div className="w-12 h-12 rounded-2xl bg-[#65D01E]/15 border border-[#65D01E]/30 flex items-center justify-center text-[#16a34a] dark:text-[#65D01E] group-hover:bg-[#65D01E] group-hover:text-[#00183D] group-hover:rotate-12 transition-all duration-500 shrink-0">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-white/10">
                      Front &amp; Top Load
                    </span>
                  </div>

                  <div className="relative z-10 mt-4 flex items-center justify-between gap-4">
                    <div className="flex-1 max-w-[62%]">
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white group-hover:text-[#16a34a] dark:group-hover:text-[#65D01E] transition-colors duration-500">
                        Washing Machine
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mt-1.5 font-medium leading-relaxed">
                        Drum spin issues, drainage blockages, motor &amp; motherboard repair.
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-[#16a34a] dark:text-[#65D01E] text-xs sm:text-sm font-black mt-3.5 group-hover:gap-2.5 transition-all duration-300">
                        Schedule Visit <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>

                    <div className="relative w-28 h-36 sm:w-32 sm:h-40 shrink-0 flex items-center justify-center">
                      <div className="absolute inset-0 bg-[#65D01E]/10 rounded-2xl blur-lg pointer-events-none" />
                      <Image
                        src="/images/appliance_washing_machine_1789636610541.jpg"
                        alt="Washing Machine"
                        fill
                        className="object-contain drop-shadow-xl group-hover:scale-110 group-hover:rotate-2 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </Link>
              </InteractiveCard>
            </Reveal>

            {/* 4. Microwave */}
            <Reveal dir="up" delay={250} className="lg:col-span-6">
              <InteractiveCard color="0,200,215" tilt={false}>
                <Link
                  href="/services#microwave"
                  className="group relative block rounded-3xl overflow-hidden bg-white dark:bg-[#071124] p-6 sm:p-7 border border-slate-200/90 dark:border-white/10 hover:border-[#00C8D7] flex items-center justify-between gap-5 shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative z-10 flex-grow">
                    <span className="inline-flex items-center gap-1.5 text-xs font-black text-[#0066cc] dark:text-[#00C8D7] bg-[#0066cc]/10 dark:bg-[#00C8D7]/15 px-3 py-1 rounded-full mb-2.5 border border-[#0066cc]/20 dark:border-[#00C8D7]/30">
                      <Thermometer className="w-3.5 h-3.5" /> Solo • Grill • Convection
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white group-hover:text-[#0066cc] dark:group-hover:text-[#00C8D7] transition-colors duration-500">
                      Microwave Oven Repair
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mt-1.5 font-medium leading-relaxed max-w-sm">
                      Magnetron replacement, touch panel fixes &amp; heating diagnostics.
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-[#0066cc] dark:text-[#00C8D7] text-xs sm:text-sm font-black mt-3.5 group-hover:gap-2.5 transition-all duration-300">
                      Schedule Visit <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                  <div className="relative w-28 h-28 sm:w-36 sm:h-32 shrink-0 rounded-2xl bg-slate-50 dark:bg-white/10 p-2 border border-slate-200/70 dark:border-white/10 shadow-sm flex items-center justify-center">
                    <Image
                      src="/images/appliance_microwave_1789636624228.jpg"
                      alt="Microwave"
                      fill
                      className="object-contain p-1.5 drop-shadow-md group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </Link>
              </InteractiveCard>
            </Reveal>

            {/* 5. Geyser */}
            <Reveal dir="up" delay={350} className="lg:col-span-6">
              <InteractiveCard color="101,208,30" tilt={false}>
                <Link
                  href="/services#geyser"
                  className="group relative block rounded-3xl overflow-hidden bg-white dark:bg-[#071124] p-6 sm:p-7 border border-slate-200/90 dark:border-white/10 hover:border-[#65D01E] flex items-center justify-between gap-5 shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative z-10 flex-grow">
                    <span className="inline-flex items-center gap-1.5 text-xs font-black text-[#16a34a] dark:text-[#65D01E] bg-[#16a34a]/10 dark:bg-[#65D01E]/15 px-3 py-1 rounded-full mb-2.5 border border-[#16a34a]/20 dark:border-[#65D01E]/30">
                      <Zap className="w-3.5 h-3.5" /> Instant • Storage • Gas
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white group-hover:text-[#16a34a] dark:group-hover:text-[#65D01E] transition-colors duration-500">
                      Geyser &amp; Water Heater
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mt-1.5 font-medium leading-relaxed max-w-sm">
                      Heating coil replacement, thermostat safety checks &amp; descaling.
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-[#16a34a] dark:text-[#65D01E] text-xs sm:text-sm font-black mt-3.5 group-hover:gap-2.5 transition-all duration-300">
                      Schedule Visit <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                  <div className="relative w-28 h-28 sm:w-36 sm:h-32 shrink-0 rounded-2xl bg-slate-50 dark:bg-white/10 p-2 border border-slate-200/70 dark:border-white/10 shadow-sm flex items-center justify-center">
                    <Image
                      src="/images/appliance_geyser.jpg"
                      alt="Geyser"
                      fill
                      className="object-contain p-1.5 drop-shadow-md group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </Link>
              </InteractiveCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ───────────────────────────────────────────────── */}
      <section id="about" className="relative bg-[#001433] py-24 sm:py-32 overflow-hidden text-white">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00C8D7]/60 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#65D01E]/60 to-transparent" />

        <ParallaxLayer speed={-0.12} className="absolute -top-32 -left-32 w-[500px] h-[500px] pointer-events-none">
          <div className="dfs-drift w-full h-full bg-[#003B8E]/40 rounded-full blur-[140px]" />
        </ParallaxLayer>
        <ParallaxLayer speed={0.12} className="absolute -bottom-32 -right-32 w-[500px] h-[500px] pointer-events-none">
          <div className="dfs-drift w-full h-full bg-[#00C8D7]/20 rounded-full blur-[140px]" style={{ animationDelay: '-8s' }} />
        </ParallaxLayer>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">
            {/* Media */}
            <Reveal dir="left" className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-3 rounded-[28px] dfs-border-flow opacity-40 blur-lg" />
                <div className="relative rounded-3xl overflow-hidden border-2 border-[#00C8D7]/40 aspect-[4/4.5] shadow-2xl bg-[#000B1D] group">
                  <video autoPlay loop muted playsInline className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[1500ms] ease-out">
                    <source src="/new_imgs/MOBILE_VIEW_HERO_HOME.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001433] via-transparent to-transparent" />

                  <div className="absolute bottom-5 inset-x-5 p-4 rounded-2xl bg-[#001433]/85 backdrop-blur-xl border border-white/15 flex items-center justify-between transition-transform duration-500 group-hover:-translate-y-1">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#00C8D7] to-[#65D01E] flex items-center justify-center text-[#001433] shrink-0">
                        <BadgeCheck className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-white font-extrabold text-sm">ISO 9001:2015 Certified</p>
                        <p className="text-[#00C8D7] text-xs font-medium">100% Police-Verified Staff</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="dfs-float absolute -right-4 sm:-right-6 -top-6 z-20 bg-white text-slate-900 rounded-2xl shadow-2xl p-4 flex items-center gap-3 border-2 border-[#65D01E]">
                  <div className="w-11 h-11 rounded-xl bg-[#65D01E]/15 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-[#459910]" />
                  </div>
                  <div>
                    <p className="font-black text-xl leading-none text-[#001B44]">99.2%</p>
                    <p className="text-slate-500 text-[11px] font-bold mt-0.5">Customer Satisfaction</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Copy */}
            <Reveal dir="right" className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#00C8D7]/30 mb-5 backdrop-blur-sm">
                <ShieldCheck className="w-4 h-4 text-[#65D01E]" />
                <span className="text-xs font-extrabold tracking-[0.2em] uppercase text-[#00C8D7]">
                  The Dial For Services Advantage
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.08] mb-5">
                <SplitWords text="Engineered for Trust." />{' '}
                <SplitWords text="Built for Speed." gradient />
              </h2>

              <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-9 max-w-2xl">
                When an essential appliance breaks down, you shouldn&apos;t have to gamble on unverified local freelancers or wait days for OEM support. We bring standardized, warranty-backed engineering right to your living room.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {WHY_ITEMS.map((item, i) => (
                  <InteractiveCard key={i} tilt={false} color="101,208,30" className="rounded-2xl">
                    <div className="group flex items-start gap-3.5 bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 hover:border-[#00C8D7]/50 rounded-2xl p-4 transition-all duration-500 h-full">
                      <div className="w-7 h-7 rounded-lg bg-[#65D01E]/20 border border-[#65D01E]/40 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#65D01E] group-hover:text-[#001433] group-hover:scale-110 group-hover:rotate-6 text-[#65D01E] transition-all duration-500">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                      <div>
                        <h4 className="text-white font-extrabold text-sm group-hover:text-[#00C8D7] transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-white/55 text-xs mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  </InteractiveCard>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Magnetic>
                  <OpenBookingButton className="dfs-sheen inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#65D01E] to-[#4DB812] hover:brightness-110 text-[#001433] font-black px-7 py-4 rounded-xl transition-all shadow-lg shadow-[#65D01E]/25 hover:shadow-[0_15px_40px_-10px_rgba(101,208,30,0.6)] text-sm cursor-pointer hover:scale-[1.03] active:scale-95">
                    <Calendar className="w-4 h-4" /> Schedule Instant Repair
                  </OpenBookingButton>
                </Magnetic>
                <a
                  href="tel:+917823038645"
                  className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/15 border border-[#00C8D7]/40 hover:border-[#00C8D7] text-white font-bold px-7 py-4 rounded-xl transition-all duration-300 text-sm hover:scale-[1.03] active:scale-95"
                >
                  <Phone className="w-4 h-4 text-[#00C8D7]" /> +91 78230 38645
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-white dark:bg-[#020813] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#003B8E]/10 dark:bg-[#00C8D7]/10 border border-[#00C8D7]/30 text-xs font-extrabold tracking-[0.2em] uppercase text-[#003B8E] dark:text-[#00C8D7] mb-5">
              Effortless Workflow
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white leading-tight">
              <SplitWords text="3 Simple Steps to" />{' '}
              <SplitWords text="Get Back to Comfort" gradient />
            </h2>
          </Reveal>

          <div className="relative">
            <StepsConnector />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 relative z-10">
              {SERVICE_STEPS.map(({ step, num, Icon, title, desc, accent, badgeColor }, i) => (
                <Reveal key={i} dir="up" delay={i * 150}>
                  <InteractiveCard className="h-full" color="0,200,215" intensity={3}>
                    <div className="group relative bg-[#F8FAFC] dark:bg-[#071124] border border-slate-200/80 dark:border-white/10 rounded-3xl p-8 text-center hover:-translate-y-2 hover:border-[#00C8D7] hover:shadow-2xl transition-all duration-500 h-full flex flex-col items-center overflow-hidden">
                      <span className="absolute -top-4 -right-2 text-[120px] leading-none font-black text-slate-900/[0.03] dark:text-white/[0.03] select-none pointer-events-none group-hover:text-[#00C8D7]/[0.07] transition-colors duration-700">
                        {num}
                      </span>

                      <div className="relative">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${accent} p-0.5 mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                          <div className="w-full h-full bg-white dark:bg-[#071124] rounded-[14px] flex items-center justify-center">
                            <Icon className="w-9 h-9 text-[#003B8E] dark:text-[#00C8D7]" />
                          </div>
                        </div>
                      </div>

                      <span className={`text-[11px] font-black tracking-widest uppercase px-3 py-1 rounded-full border mb-3 ${badgeColor}`}>
                        {step}
                      </span>

                      <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2.5">{title}</h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </InteractiveCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTORS ─────────────────────────────────────────────────────── */}
      <section id="areas" className="py-24 sm:py-28 bg-slate-100/70 dark:bg-[#040D1F] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <Reveal dir="left" className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.2em] uppercase text-[#003B8E] dark:text-[#00C8D7] mb-4">
                <span className="w-8 h-0.5 bg-[#65D01E]" /> Sectors We Cover
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-[1.08] mb-5">
                <SplitWords text="Powering Homes &" />{' '}
                <SplitWords text="Commercial Spaces" gradient />
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
                From high-rise residential societies in Baner and Wakad to commercial kitchens, retail showrooms, and corporate offices across Pune — we offer tailored AMC and on-demand support.
              </p>

              <InteractiveCard tilt={false} color="101,208,30" className="rounded-2xl">
                <div className="p-5 rounded-2xl bg-gradient-to-r from-[#001B44] to-[#002D6B] text-white border border-[#00C8D7]/30 flex items-center gap-4 overflow-hidden">
                  <div className="w-12 h-12 rounded-xl bg-[#65D01E]/20 border border-[#65D01E]/40 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-[#65D01E] dfs-spin-slow" style={{ animationDuration: '6s' }} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm">Priority Commercial AMC</h4>
                    <p className="text-white/65 text-xs mt-0.5">Zero-downtime contracts for offices, clinics &amp; restaurants.</p>
                  </div>
                </div>
              </InteractiveCard>
            </Reveal>

            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {SECTORS.map(({ Icon, label, desc }, i) => (
                <Reveal key={i} dir="scale" delay={i * 80}>
                  <InteractiveCard tilt={false} color="0,200,215" className="h-full">
                    <div className="group bg-white dark:bg-[#071124] border border-slate-200/80 dark:border-white/10 hover:border-[#00C8D7] rounded-2xl p-5 flex flex-col items-start gap-3.5 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-500 h-full">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#003B8E]/10 to-[#00C8D7]/15 dark:from-[#00C8D7]/15 dark:to-[#65D01E]/10 flex items-center justify-center text-[#003B8E] dark:text-[#00C8D7] group-hover:bg-[#003B8E] group-hover:text-white group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-extrabold text-slate-900 dark:text-white text-base group-hover:text-[#003B8E] dark:group-hover:text-[#00C8D7] transition-colors duration-300">
                          {label}
                        </h3>
                        <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">{desc}</p>
                      </div>
                    </div>
                  </InteractiveCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-white dark:bg-[#020813] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.2em] uppercase text-[#003B8E] dark:text-[#00C8D7] mb-4">
                <span className="w-8 h-0.5 bg-[#65D01E]" /> Verified Reviews
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                <SplitWords text="Loved by Families" />{' '}
                <SplitWords text="Across Pune" gradient />
              </h2>
            </div>

            <div className="inline-flex items-center gap-3 self-start sm:self-auto bg-[#001433] text-white px-5 py-3 rounded-2xl border border-[#00C8D7]/30 shadow-lg">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 text-[#65D01E] fill-[#65D01E]" />
                ))}
              </div>
              <span className="font-black text-lg">4.9</span>
              <span className="text-white/60 text-xs">Based on 2,400+ Reviews</span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Spotlight Review */}
            <Reveal dir="left" className="lg:col-span-1">
              <InteractiveCard className="h-full" color="0,200,215" intensity={3}>
                <div className="relative h-full rounded-3xl bg-gradient-to-b from-[#001B44] to-[#001029] p-8 text-white border border-[#00C8D7]/30 shadow-2xl flex flex-col justify-between overflow-hidden">
                  <div className="dfs-drift absolute top-0 right-0 w-48 h-48 bg-[#00C8D7]/15 rounded-full blur-3xl pointer-events-none" />
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} className="w-4 h-4 text-[#65D01E] fill-[#65D01E]" />
                        ))}
                      </div>
                      <Quote className="w-9 h-9 text-[#00C8D7]/40" />
                    </div>
                    <p className="text-white/90 text-base leading-relaxed mb-8">
                      &ldquo;My AC broke down in peak April heat. Dial For Services assigned a technician within 45 minutes. He diagnosed a faulty capacitor, showed me the official rate card, and had it cooling like new in under an hour!&rdquo;
                    </p>
                  </div>

                  <div className="flex items-center gap-3.5 pt-5 border-t border-white/10">
                    <div className="w-12 h-12 rounded-2xl dfs-border-flow flex items-center justify-center font-black text-[#001433] text-lg shadow-lg">
                      R
                    </div>
                    <div>
                      <h4 className="font-extrabold text-white text-sm">Rahul Sharma</h4>
                      <p className="text-[#00C8D7] text-xs">Kothrud, Pune • AC Repair</p>
                    </div>
                  </div>
                </div>
              </InteractiveCard>
            </Reveal>

            {/* Review Grid */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {REVIEWS.map(({ text, name, loc, service }, i) => (
                <Reveal key={i} dir="up" delay={i * 90}>
                  <InteractiveCard className="h-full" color="101,208,30" intensity={3}>
                    <div className="bg-[#F8FAFC] dark:bg-[#071124] border border-slate-200/80 dark:border-white/10 hover:border-[#00C8D7] rounded-3xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-500 h-full flex flex-col justify-between">
                      <div>
                        <div className="flex gap-1 mb-3">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} className="w-3.5 h-3.5 text-[#65D01E] fill-[#65D01E]" />
                          ))}
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-6">
                          &ldquo;{text}&rdquo;
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-slate-200/60 dark:border-white/10">
                        <div>
                          <h4 className="font-extrabold text-slate-900 dark:text-white text-sm">{name}</h4>
                          <p className="text-slate-500 dark:text-slate-400 text-xs">{loc}</p>
                        </div>
                        <span className="text-[11px] font-black text-[#003B8E] dark:text-[#00C8D7] bg-[#003B8E]/10 dark:bg-[#00C8D7]/10 px-2.5 py-1 rounded-full">
                          {service}
                        </span>
                      </div>
                    </div>
                  </InteractiveCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────────────────── */}
      <section id="contact" className="py-20 sm:py-28 bg-slate-50 dark:bg-[#030B18] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <div className="lg:w-1/2">
              <Reveal dir="left">
                <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.2em] uppercase text-[#003B8E] dark:text-[#00C8D7] mb-4">
                  <span className="w-8 h-0.5 bg-[#65D01E]" /> Get In Touch
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-[1.1] mb-5">
                  <SplitWords text="Need Immediate Repair?" />{' '}
                  <SplitWords text="We're 1 Call Away" gradient />
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
                  Our emergency response team is deployed across Baner, Wakad, Hinjewadi, Kothrud, Hadapsar, and all major Pune hubs. Reach out now for express assistance.
                </p>

                <div className="space-y-4">
                  <InteractiveCard tilt={false} color="0,200,215" className="rounded-2xl">
                    <a
                      href="tel:+917823038645"
                      className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-[#071124] border border-slate-200/80 dark:border-white/10 hover:border-[#00C8D7] transition-all duration-500 group shadow-sm hover:shadow-lg"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#003B8E] to-[#00C8D7] flex items-center justify-center shrink-0 text-white shadow-md group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base">Call Us Directly (24/7 Helpline)</h4>
                        <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-0.5">Instant booking &amp; emergency dispatch</p>
                        <p className="text-[#003B8E] dark:text-[#00C8D7] font-black text-base sm:text-lg mt-1 group-hover:underline underline-offset-4">
                          +91 78230 38645
                        </p>
                      </div>
                    </a>
                  </InteractiveCard>

                  <InteractiveCard tilt={false} color="101,208,30" className="rounded-2xl">
                    <a
                      href="mailto:support@kkmulti.com"
                      className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-[#071124] border border-slate-200/80 dark:border-white/10 hover:border-[#00C8D7] transition-all duration-500 group shadow-sm hover:shadow-lg"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00C8D7] to-[#65D01E] flex items-center justify-center shrink-0 text-[#001433] shadow-md group-hover:-rotate-12 group-hover:scale-110 transition-transform duration-500">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base">Email Our Helpdesk</h4>
                        <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-0.5">For corporate AMC &amp; vendor proposals</p>
                        <p className="text-[#003B8E] dark:text-[#00C8D7] font-black text-base sm:text-lg mt-1 group-hover:underline underline-offset-4 break-all">
                          support@kkmulti.com
                        </p>
                      </div>
                    </a>
                  </InteractiveCard>

                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-[#071124] border border-slate-200/80 dark:border-white/10 shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/10 flex items-center justify-center shrink-0 text-[#003B8E] dark:text-[#00C8D7]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base">Central Pune Operations</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-0.5">
                        Serving 25+ pin-codes across Pune &amp; PCMC metropolitan areas.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:w-1/2 w-full">
              <Reveal dir="right">
                <div className="relative bg-white dark:bg-[#071124] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-200/80 dark:border-white/10 overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-56 h-56 bg-[#00C8D7]/15 rounded-full blur-3xl pointer-events-none dfs-drift" />

                  <div className="relative">
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-2">
                      Send Us A Quick Message
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mb-6">
                      Fill out the form below and an engineer will call you back within 15 minutes.
                    </p>

                    {formSubmitted ? (
                      <div className="p-6 rounded-2xl bg-[#65D01E]/15 border border-[#65D01E] text-center animate-[fadeIn_0.6s_ease-out]">
                        <CheckCircle2 className="w-12 h-12 text-[#65D01E] mx-auto mb-3" />
                        <h4 className="text-slate-900 dark:text-white font-extrabold text-lg">Thank You!</h4>
                        <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">
                          Your request has been received. Our team will contact you shortly.
                        </p>
                      </div>
                    ) : (
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          setFormSubmitted(true);
                        }}
                        className="space-y-4"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label htmlFor="hp-name" className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                              Full Name
                            </label>
                            <input type="text" id="hp-name" required className={inputClass} placeholder="John Doe" />
                          </div>
                          <div className="space-y-1.5">
                            <label htmlFor="hp-phone" className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                              Phone Number
                            </label>
                            <input type="tel" id="hp-phone" required className={inputClass} placeholder="+91 78230 38645" />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor="hp-service" className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                            Service Required
                          </label>
                          <select id="hp-service" defaultValue="split-ac" className={inputClass + ' text-slate-700 dark:text-slate-200'}>
                            <optgroup label="Air Conditioning (AC) Services">
                              <option value="split-ac">Split AC Repair, Installation &amp; Jet Wash</option>
                              <option value="ac-service">General AC Servicing &amp; Foam Jet Wash</option>
                              <option value="ac-gas">AC Refrigerant Gas Charging (R32 / R410A / R22)</option>
                              <option value="ac-install">AC Installation / Uninstallation / Relocation</option>
                              <option value="cassette-ac">Cassette AC Repair &amp; 4-Way Servicing</option>
                              <option value="vrv-vrf">VRV &amp; VRF Commercial AC Solutions</option>
                              <option value="hvac-central">Central HVAC Plant &amp; Ductable AC Systems</option>
                            </optgroup>
                            <optgroup label="Refrigeration &amp; Cooling">
                              <option value="fridge-single">Single &amp; Double Door Refrigerator Repair</option>
                              <option value="fridge-side-by-side">Side-by-Side &amp; French Door Fridge Repair</option>
                              <option value="fridge-commercial">Commercial Deep Freezer &amp; Visi Cooler</option>
                            </optgroup>
                            <optgroup label="Laundry &amp; Washing Machines">
                              <option value="wm-front-load">Front Load Washing Machine Repair</option>
                              <option value="wm-top-load">Top Load Automatic Washing Machine Repair</option>
                              <option value="wm-semi-auto">Semi-Automatic Washing Machine Repair</option>
                            </optgroup>
                            <optgroup label="Kitchen &amp; Heating Appliances">
                              <option value="microwave-solo">Microwave &amp; Oven Repair (Solo / Grill / Convection)</option>
                              <option value="geyser-electric">Electric Geyser &amp; Instant Water Heater Repair</option>
                              <option value="geyser-storage">Storage Geyser Descaling &amp; Coil Replacement</option>
                            </optgroup>
                            <optgroup label="Annual Contracts &amp; Commercial">
                              <option value="amc-residential">Residential Appliance AMC (Comprehensive)</option>
                              <option value="amc-commercial">Commercial AMC / CMC (Corporate &amp; Offices)</option>
                              <option value="other-appliance">Other Appliance / Multi-Device Package</option>
                            </optgroup>
                          </select>
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor="hp-message" className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                            Issue Description
                          </label>
                          <textarea
                            id="hp-message"
                            rows={3}
                            className={inputClass + ' resize-none'}
                            placeholder="Tell us what problem you're experiencing..."
                          />
                        </div>

                        <Magnetic className="w-full">
                          <button
                            type="submit"
                            className="dfs-sheen w-full bg-gradient-to-r from-[#003B8E] via-[#0055CC] to-[#00C8D7] hover:brightness-110 text-white font-extrabold py-4 rounded-xl transition-all shadow-lg shadow-[#003B8E]/25 hover:shadow-[0_15px_40px_-10px_rgba(0,200,215,0.5)] flex items-center justify-center gap-2 active:scale-[0.98] text-sm cursor-pointer"
                          >
                            Submit Request <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </button>
                        </Magnetic>
                      </form>
                    )}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="relative text-white py-16 sm:py-24 overflow-hidden border-t border-[#00C8D7]/20 bg-[#001433]">
        <div className="absolute inset-0 opacity-60 pointer-events-none">
          <div className="dfs-drift absolute -left-20 top-0 w-[420px] h-[420px] rounded-full bg-[#003B8E]/60 blur-[120px]" />
          <div className="dfs-drift absolute -right-20 bottom-0 w-[420px] h-[420px] rounded-full bg-[#65D01E]/25 blur-[120px]" style={{ animationDelay: '-7s' }} />
        </div>
        <ParallaxLayer speed={-0.1} className="absolute -right-16 top-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none">
          <Wrench className="w-[380px] h-[380px] dfs-spin-slow" style={{ animationDuration: '40s' }} />
        </ParallaxLayer>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px dfs-border-flow" />
              <div>
                <span className="text-[#00C8D7] font-extrabold text-xs tracking-widest uppercase mb-3 inline-block">
                  Immediate Appliance Rescue
                </span>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black mb-3 leading-tight">
                  <SplitWords text="Get Fast & Reliable" />{' '}
                  <SplitWords text="Service Today!" gradient />
                </h2>
                <p className="text-slate-300 text-xs sm:text-base max-w-xl">
                  Experience hassle-free repair with 90-day warranty, upfront pricing, and verified local engineers.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3.5 shrink-0 w-full md:w-auto">
                <Magnetic>
                  <OpenBookingButton className="dfs-sheen bg-gradient-to-r from-[#65D01E] to-[#4DB812] hover:brightness-110 text-[#001433] px-6 sm:px-8 py-3.5 rounded-xl font-black transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#65D01E]/30 hover:shadow-[0_15px_40px_-10px_rgba(101,208,30,0.6)] active:scale-95 text-sm cursor-pointer w-full">
                    <Calendar className="w-4 h-4" /> Book a Service
                  </OpenBookingButton>
                </Magnetic>
                <Magnetic>
                  <a
                    href="tel:+917823038645"
                    className="bg-white/10 border border-white/25 hover:bg-white/20 hover:border-[#00C8D7]/60 text-white px-6 sm:px-8 py-3.5 rounded-xl font-bold transition-all flex items-center justify-center gap-2 backdrop-blur-sm active:scale-95 text-sm w-full"
                  >
                    <Phone className="w-4 h-4 text-[#00C8D7]" /> Call Now
                  </a>
                </Magnetic>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <Footer />
    </main>
  );
}

/* ─── Connector line for the steps (draws itself, with a traveling pulse) ── */
function StepsConnector() {
  const { ref, visible } = useReveal<HTMLDivElement>(0.3);
  return (
    <div
      ref={ref}
      className="hidden md:block absolute top-16 left-[16%] right-[16%] h-1 rounded-full bg-slate-200/60 dark:bg-white/5 overflow-hidden"
    >
      <div
        className="absolute inset-0 origin-left dfs-border-flow"
        style={{
          transform: visible ? 'scaleX(1)' : 'scaleX(0)',
          transition: 'transform 1.8s cubic-bezier(0.16,1,0.3,1)',
          opacity: 0.5,
        }}
      />
      <span
        className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#65D01E] shadow-[0_0_14px_4px_rgba(101,208,30,0.6)]"
        style={{ animation: 'dfs-travel 3.2s linear infinite', left: 0 }}
      />
    </div>
  );
}