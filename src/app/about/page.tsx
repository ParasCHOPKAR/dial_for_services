"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Clock,
  Wrench,
  CheckCircle2,
  Award,
  Phone,
  ArrowRight,
  Sparkles,
  ThumbsUp,
  Tag,
  Headphones,
  Settings,
  CalendarCheck,
  BadgeDollarSign,
  CheckCircle,
  Smile,
  ChevronRight,
  Building,
  Home,
  Star,
  Play,
  Users,
  FileText,
  PhoneCall,
  Calendar,
  Zap,
  Check,
  MapPin,
  ArrowUpRight
} from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const brandLogos = [
    { name: "LG", src: "/images/logos/lg_01.png" },
    { name: "Samsung", src: "/images/logos/samsung.png" },
    { name: "Whirlpool", src: "/images/logos/Whirlpool_0111.jpg" },
    { name: "Daikin", src: "/images/logos/daikin.png" },
    { name: "Voltas", src: "/images/logos/voltas.png" },
    { name: "Godrej", src: "/images/logos/godrej_01.jfif" },
    { name: "Bosch", src: "/images/logos/bosch.png" },
    { name: "Haier", src: "/images/logos/Haier-Logo.png" },
    { name: "Hitachi", src: "/images/logos/Hitachi-Logo_011.png" },
    { name: "Blue Star", src: "/images/logos/Blue_Star_Infotech_logo.svg.webp" },
    { name: "Panasonic", src: "/images/logos/Panasonic_logo.webp" },
    { name: "Mitsubishi Electric", src: "/images/logos/mitsubishi-electric.png" },
    { name: "Onida", src: "/images/logos/Onida_Electronics.webp" }
  ];

  const coreBenefits = [
    {
      title: "Satisfied Service",
      desc: "We Provide Satisfied Solution For Your products",
      icon: <ThumbsUp className="w-6 h-6" />,
      accent: "from-kk-teal/20 to-teal-500/5 text-kk-teal border-kk-teal/30"
    },
    {
      title: "Affordable Price",
      desc: "We Provide Cost Effective Solution For You",
      icon: <Tag className="w-6 h-6" />,
      accent: "from-kk-blue/20 to-blue-500/5 text-kk-blue border-kk-blue/30"
    },
    {
      title: "Expert Technician",
      desc: "Provide you the high quality work that meets your expectation",
      icon: <Wrench className="w-6 h-6" />,
      accent: "from-kk-red/20 to-red-500/5 text-kk-red border-kk-red/30"
    },
    {
      title: "Support Centre",
      desc: "90 Days Dial For Services Spare Parts warranty on replacement",
      icon: <Headphones className="w-6 h-6" />,
      accent: "from-emerald-500/20 to-emerald-500/5 text-emerald-600 border-emerald-500/30"
    }
  ];

  const coreServices = [
    {
      tag: "01 / SETUP",
      title: "Precision Installation",
      desc: "Our technicians are experts in every installation of various home appliances. Every brand needs an expert with specific knowledge.",
      icon: <Settings className="w-7 h-7 text-kk-teal" />,
      bg: "bg-slate-900 text-white"
    },
    {
      tag: "02 / DIAGNOSTICS",
      title: "Component-Level Repairs",
      desc: "Our warranty plans will secure your devices from defects and failures year after year. We offer all kind of electric services.",
      icon: <Wrench className="w-7 h-7 text-kk-red" />,
      bg: "bg-white text-slate-900 border border-slate-200"
    },
    {
      tag: "03 / UPKEEP",
      title: "Preventive Maintenance",
      desc: "We are experts in Electronics repairing. Don't panic when your device is not working, we are waiting for your call with our best technicians to help you for your daily needs.",
      icon: <ShieldCheck className="w-7 h-7 text-kk-teal" />,
      bg: "bg-gradient-to-br from-kk-blue to-slate-900 text-white"
    }
  ];

  const workflowSteps = [
    {
      num: "01",
      title: "Booking Online",
      desc: "Select your appliance & problem online or call us directly. Schedule a visit time that fits your day.",
      icon: <CalendarCheck className="w-5 h-5" />
    },
    {
      num: "02",
      title: "Discuss Budget",
      desc: "We offer an upfront, transparent price quote before any work begins with zero hidden charges.",
      icon: <BadgeDollarSign className="w-5 h-5" />
    },
    {
      num: "03",
      title: "Get Confirmation",
      desc: "Uniformed technician is dispatched with genuine spares and arrives punctually at your doorstep.",
      icon: <CheckCircle className="w-5 h-5" />
    },
    {
      num: "04",
      title: "Happy Services",
      desc: "Flawless repair testing run, 90-day parts warranty card, and post-service maintenance tips.",
      icon: <Smile className="w-5 h-5" />
    }
  ];

  const metrics = [
    { label: "Repair Quality", value: 90, sub: "Factory-grade diagnostic accuracy", color: "bg-kk-teal" },
    { label: "Happy Customer", value: 80, sub: "Repeat household bookings across Pune", color: "bg-kk-blue" },
    { label: "Support Centre", value: 90, sub: "First-visit resolution rate", color: "bg-emerald-500" }
  ];

  const guaranteeItems = [
    {
      num: "01",
      title: "Skilled Technicians",
      desc: "Trained and experienced background-verified professionals at your service.",
      icon: <Users className="w-5 h-5 text-kk-teal" />
    },
    {
      num: "02",
      title: "Affordable Prices",
      desc: "Get doorstep services at genuine, standardized, and pocket-friendly rates.",
      icon: <Tag className="w-5 h-5 text-kk-blue" />
    },
    {
      num: "03",
      title: "Upfront Pricing",
      desc: "Upfront prices before any work begins so there are zero surprises on your final bill.",
      icon: <FileText className="w-5 h-5 text-kk-red" />
    },
    {
      num: "04",
      title: "100% Cashback Guarantee",
      desc: "Complete peace of mind—your satisfaction is backed by our service promise.",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />
    },
    {
      num: "05",
      title: "90-Day Parts Warranty",
      desc: "Full warranty coverage on every repaired or replaced OEM spare part.",
      icon: <Wrench className="w-5 h-5 text-kk-blue" />
    },
    {
      num: "06",
      title: "Instant On-Call Resolution",
      desc: "No need for a technician visit for minute issues; we help you solve minor fixes over a call.",
      icon: <PhoneCall className="w-5 h-5 text-kk-teal" />
    },
    {
      num: "07",
      title: "Lifecycle & Maintenance Tips",
      desc: "Proper post-repair assistance and regular servicing tips to extend the life of your appliance.",
      icon: <Sparkles className="w-5 h-5 text-amber-500" />
    }
  ];

  return (
    <main
      id="top"
      className="min-h-screen font-sans bg-[#F8FAFC] text-slate-900 flex flex-col selection:bg-kk-teal selection:text-white"
    >
      <TopBar />
      <Navbar />

      {/* =====================================================================
          1. ARCHITECTURAL EDITORIAL HERO (Light + High-Contrast Split)
      ====================================================================== */}
      <section className="relative pt-6 pb-16 lg:py-20 overflow-hidden bg-white border-b border-slate-200/80">
        {/* Subtle Architectural Grid Background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)`,
            backgroundSize: "48px 48px"
          }}
        />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-kk-teal/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-kk-blue/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Top Utility Navigation Pill Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-slate-100">
            <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
              <Link href="/" className="hover:text-kk-blue transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-kk-teal" />
              <span className="text-kk-blue">About Our Company</span>
            </nav>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mr-1 hidden sm:inline">
                Service Scope:
              </span>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-kk-blue hover:text-white text-xs font-bold text-slate-700 transition-all"
              >
                <Home className="w-3.5 h-3.5 text-kk-teal" />
                <span>Residential</span>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-kk-blue hover:text-white text-xs font-bold text-slate-700 transition-all"
              >
                <Building className="w-3.5 h-3.5 text-kk-blue group-hover:text-white" />
                <span>Commercial</span>
              </Link>
            </div>
          </div>

          {/* Main Hero Asymmetric Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Editorial Typography (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-kk-teal/10 border border-kk-teal/20">
                <span className="w-2 h-2 rounded-full bg-kk-teal animate-ping" />
                <span className="text-xs font-extrabold uppercase tracking-wider text-kk-blue">
                  K K Multi Services • Pune &amp; PCMC
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black text-slate-900 tracking-tight leading-[1.08]">
                Engineering Comfort Into Every Home With{" "}
                <span className="relative inline-block text-kk-teal">
                  Dial For Services
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-2.5 text-kk-teal/30"
                    viewBox="0 0 200 9"
                    fill="none"
                  >
                    <path
                      d="M2.00025 6.99997C45.5002 1.99999 132.5 -2.50002 198 4.49997"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Contact us if your valuable appliances at home or at work aren&apos;t working properly. We supply high-quality, low-cost diagnostics and repairs that fit seamlessly into your schedule—arriving in uniform with upfront price quotes before any work begins.
              </p>

              {/* CTA & Trust Cluster */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="px-7 py-4 rounded-2xl bg-kk-blue hover:bg-slate-800 text-white font-bold text-sm shadow-xl shadow-kk-blue/20 flex items-center gap-3 transition-all hover:-translate-y-0.5"
                >
                  <span>Schedule Doorstep Visit</span>
                  <ArrowRight className="w-4 h-4 text-kk-teal" />
                </Link>

                <a
                  href="tel:+917823038645"
                  className="px-6 py-4 rounded-2xl bg-white hover:bg-slate-50 border-2 border-slate-200 text-slate-900 font-bold text-sm transition-all flex items-center gap-3"
                >
                  <div className="w-7 h-7 rounded-lg bg-kk-red/10 text-kk-red flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>+91 78230 38645</span>
                </a>
              </div>

              {/* Micro-Metrics Bar */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/80 max-w-xl">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-kk-blue">10+ Yrs</div>
                  <div className="text-xs font-semibold text-slate-500">Field Experience</div>
                </div>
                <div className="border-x border-slate-200 px-4">
                  <div className="text-2xl sm:text-3xl font-black text-kk-teal">20,000+</div>
                  <div className="text-xs font-semibold text-slate-500">Appliances Restored</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900">90 Days</div>
                  <div className="text-xs font-semibold text-slate-500">Spare Parts Warranty</div>
                </div>
              </div>
            </div>

            {/* Right Framed Media Showcase (5 Cols) */}
            <div className="lg:col-span-5 relative">
              {/* Decorative Offset Frame */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-kk-blue via-kk-teal to-cyan-300 rounded-[2rem] opacity-20 blur-lg" />

              <div className="relative bg-slate-900 rounded-[1.75rem] p-3 shadow-2xl border border-slate-800">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-950">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    poster="/images/about_ac_repair_1789636581927.jpg"
                    className="w-full h-full object-cover"
                  >
                    <source src="/about_hero.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                  {/* Top Status Pill */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <div className="bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[11px] font-bold text-white uppercase tracking-wider">
                        Live On-Site Diagnostics
                      </span>
                    </div>
                    <div className="bg-kk-teal text-white px-2.5 py-1 rounded-full text-[11px] font-black">
                      4.8 ★
                    </div>
                  </div>

                  {/* Bottom Video Caption */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-bold uppercase tracking-wider text-kk-teal mb-1">
                      Verified Doorstep Fleet
                    </p>
                    <p className="text-sm font-semibold text-slate-100 leading-snug">
                      Equipped with factory-grade diagnostic meters &amp; genuine OEM spares across Pune.
                    </p>
                  </div>
                </div>

                {/* Bottom Card Footer Bar */}
                <div className="mt-3 px-3 py-2.5 rounded-xl bg-slate-800/70 flex items-center justify-between text-xs text-slate-300">
                  <span className="flex items-center gap-2 font-medium">
                    <MapPin className="w-4 h-4 text-kk-teal" />
                    Serving All Pune &amp; PCMC Localities
                  </span>
                  <span className="text-emerald-400 font-bold">90-Min Arrival</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. BENTO GRID: CORE BENEFITS & 3 PILLARS OF SERVICE
      ====================================================================== */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-kk-teal block mb-2">
              OUR SERVICE ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-kk-blue tracking-tight">
              Home Appliances Repair Services — All Brands
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md">
            For more than ten years, <strong>K K Multi Services</strong> and{" "}
            <strong>Refrigeration Home Services</strong> have kept domestic and commercial appliances running at peak efficiency.
          </p>
        </div>

        {/* 12-Column Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left 8 Columns: The 3 Core Services (Installation, Repairs, Maintenance) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Service 1: Installation */}
            <div className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-sm ${coreServices[0].bg}`}>
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-black tracking-widest text-kk-teal">
                    {coreServices[0].tag}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    {coreServices[0].icon}
                  </div>
                </div>
                <h3 className="text-2xl font-black mb-3">{coreServices[0].title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {coreServices[0].desc}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-kk-teal">
                <span>Split &amp; Window AC • Geysers • RO • Chimneys</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            {/* Service 2: Repairs */}
            <div className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-sm ${coreServices[1].bg}`}>
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-black tracking-widest text-kk-red">
                    {coreServices[1].tag}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center">
                    {coreServices[1].icon}
                  </div>
                </div>
                <h3 className="text-2xl font-black text-kk-blue mb-3">
                  {coreServices[1].title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {coreServices[1].desc}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-kk-blue">
                <span>PCB • Compressors • Motors • Sensors</span>
                <ArrowUpRight className="w-4 h-4 text-kk-red" />
              </div>
            </div>

            {/* Service 3: Maintenance (Spans full width of the 8-col block) */}
            <div className={`md:col-span-2 rounded-3xl p-7 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md ${coreServices[2].bg}`}>
              <div className="space-y-3 max-w-xl">
                <div className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-kk-teal">
                  <span>{coreServices[2].tag}</span>
                  <span>•</span>
                  <span>DOMESTIC &amp; COMMERCIAL</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black">
                  {coreServices[2].title}
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {coreServices[2].desc}
                </p>
              </div>
              <div className="shrink-0 flex flex-col items-start md:items-end gap-3 w-full md:w-auto">
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center">
                  {coreServices[2].icon}
                </div>
                <Link
                  href="/services"
                  className="w-full md:w-auto text-center px-5 py-2.5 rounded-xl bg-kk-teal hover:bg-kk-teal-light text-white text-xs font-bold transition-colors"
                >
                  Explore All Services →
                </Link>
              </div>
            </div>
          </div>

          {/* Right 4 Columns: 4 Core Value Pillars Stacked Grid */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {coreBenefits.map((item, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-5 bg-gradient-to-r ${item.accent} border bg-white flex items-start gap-4 hover:shadow-md transition-all`}
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-xs flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-base font-black text-slate-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. MULTI-BRAND COMPATIBILITY DOUBLE MARQUEE RIBBON
      ====================================================================== */}
      <section className="py-14 bg-white border-y border-slate-200/90 overflow-hidden relative w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-kk-teal block mb-1">
              100% GENUINE OEM SPARES
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-kk-blue tracking-tight">
              Factory-Compliant Diagnosis Across All Major Brands
            </h2>
          </div>
          <div className="px-4 py-2 rounded-full bg-slate-100 text-xs font-bold text-slate-700">
            Authorized-Grade Multi-Brand Tooling
          </div>
        </div>

        <div className="relative w-full overflow-hidden space-y-4">
          <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Top Marquee Slider: Left to Right */}
          <div className="flex overflow-hidden select-none">
            <div className="animate-marquee-right flex items-center">
              {[...brandLogos, ...brandLogos].map((brand, idx) => (
                <div
                  key={`top-${brand.name}-${idx}`}
                  className="h-16 sm:h-20 w-36 sm:w-44 px-4 py-2.5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:border-kk-teal hover:shadow-md transition-all duration-300 flex items-center justify-center shrink-0 mx-2.5 cursor-pointer group"
                  title={brand.name}
                >
                  <Image
                    src={brand.src}
                    alt={`${brand.name} Logo`}
                    width={130}
                    height={50}
                    className="max-h-9 sm:max-h-11 w-auto max-w-[85%] object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Marquee Slider: Right to Left */}
          <div className="flex overflow-hidden select-none">
            <div className="animate-marquee-left flex items-center">
              {[...brandLogos, ...brandLogos].map((brand, idx) => (
                <div
                  key={`bottom-${brand.name}-${idx}`}
                  className="h-16 sm:h-20 w-36 sm:w-44 px-4 py-2.5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:border-kk-teal hover:shadow-md transition-all duration-300 flex items-center justify-center shrink-0 mx-2.5 cursor-pointer group"
                  title={brand.name}
                >
                  <Image
                    src={brand.src}
                    alt={`${brand.name} Logo`}
                    width={130}
                    height={50}
                    className="max-h-9 sm:max-h-11 w-auto max-w-[85%] object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. HIGH-CONTRAST AMC vs CMC COMPARISON SHOWCASE
      ====================================================================== */}
      <section className="relative py-16 sm:py-24 bg-slate-950 text-white overflow-hidden">
        {/* Background Image with dark radial mask */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <Image
            src="/images/about_us/AMC_CMC_Section.png"
            alt="AMC and CMC Maintenance Services Background"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-16">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-kk-teal/15 border border-kk-teal/30 text-kk-teal text-xs font-extrabold uppercase tracking-wider">
                <Settings className="w-3.5 h-3.5" />
                <span>Long-Term Appliance Protection Plans</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.12]">
                AMC &amp; CMC Maintenance Contracts
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                We undertake <strong>AMC (Annual Maintenance Contract)</strong> and{" "}
                <strong>CMC (Comprehensive Maintenance Contract)</strong> services for Air Conditioners (AC), Refrigerators (Fridge), Washing Machines, Microwave Ovens, Electric Geysers, Water Heaters, and Water Purifiers (Aquaguard) across Pune, Maharashtra.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-wrap lg:justify-end gap-3">
              <Link
                href="/amc"
                className="px-6 py-3.5 rounded-xl bg-kk-teal hover:bg-kk-teal-light text-white font-bold text-xs sm:text-sm transition-all flex items-center gap-2 shadow-lg shadow-kk-teal/25"
              >
                <span>Explore Contract Pricing</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/enquire"
                className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold text-xs sm:text-sm transition-all"
              >
                Request Corporate Quote
              </Link>
            </div>
          </div>

          {/* Side-by-Side Comparison Deck */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Plan 1: Standard AMC (6 Cols) */}
            <div className="lg:col-span-6 rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 lg:p-10 flex flex-col justify-between backdrop-blur-md">
              <div>
                <div className="flex items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-kk-blue border border-white/10 flex items-center justify-center text-cyan-400">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-widest text-cyan-400">
                        PREVENTIVE CARE
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-white">
                        AMC — Annual Maintenance
                      </h3>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-bold">
                    1–5 Year Terms
                  </span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Under an <strong>AMC</strong>, clients avail scheduled routine health check-ups (3 to 4 visits/year) including deep pressure wet-jet pump cleaning, condenser and coil inspection, thermostat check, and piping safety.
                </p>

                <div className="space-y-3.5 text-sm">
                  <div className="flex items-center gap-3 text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Scheduled preventive service visits (3–4 per year)</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>High-pressure wet-jet deep cleaning &amp; coil check</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Covers 100% of technician labor &amp; visiting charges</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Zero diagnostic or inspection fees on breakdown calls</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Best for newer appliances under 4 years old</span>
                <Link href="/amc" className="text-cyan-400 font-bold hover:underline">
                  Choose AMC →
                </Link>
              </div>
            </div>

            {/* Plan 2: Total Protection CMC (6 Cols - Highlighted) */}
            <div className="lg:col-span-6 rounded-3xl bg-gradient-to-b from-kk-teal/20 via-slate-900 to-slate-900 border-2 border-kk-teal p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative shadow-2xl shadow-kk-teal/10">
              <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-kk-teal text-white text-[11px] font-black uppercase tracking-wider shadow-md">
                360° Total Shield • Most Popular
              </div>

              <div>
                <div className="flex items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-kk-teal text-white flex items-center justify-center shadow-lg shadow-kk-teal/30">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-widest text-kk-teal">
                        ZERO REPAIR BILLS
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-white">
                        CMC — Comprehensive Contract
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-200 leading-relaxed mb-6">
                  A <strong>CMC</strong> provides 360° total protection covering all scheduled services, unlimited complaint resolutions, plus complete free replacement coverage for spare parts, electrical parts, and compressors.
                </p>

                <div className="space-y-3.5 text-sm">
                  <div className="flex items-center gap-3 text-white font-medium">
                    <div className="w-5 h-5 rounded-full bg-kk-teal text-white flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Complete coverage (Labor + Mechanical + Electrical Spares)</span>
                  </div>
                  <div className="flex items-center gap-3 text-white font-medium">
                    <div className="w-5 h-5 rounded-full bg-kk-teal text-white flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Unlimited breakdown visits &amp; priority resolution</span>
                  </div>
                  <div className="flex items-center gap-3 text-white font-medium">
                    <div className="w-5 h-5 rounded-full bg-kk-teal text-white flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Free Compressor replacement &amp; 100% Free Gas Charging</span>
                  </div>
                  <div className="flex items-center gap-3 text-white font-medium">
                    <div className="w-5 h-5 rounded-full bg-kk-teal text-white flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Zero surprise repair bills for the entire contract year</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                <span>Ideal for heavy-use homes, offices &amp; commercial units</span>
                <Link href="/amc" className="text-kk-teal font-bold hover:underline">
                  Choose CMC →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. CONNECTED HORIZONTAL PIPELINE (4-Step Workflow)
      ====================================================================== */}
      <section id="how-it-works" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-kk-teal block mb-2">
              HOW WE OPERATE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-kk-blue tracking-tight">
              Making Technology Work For You Again
            </h2>
            <p className="text-sm text-slate-600 mt-3">
              From the moment you place a request to post-repair testing, our 4-stage service pipeline keeps everything transparent.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Desktop connecting line behind nodes */}
            <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-kk-teal via-kk-blue to-kk-teal opacity-25 pointer-events-none" />

            {workflowSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative bg-slate-50 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 hover:border-kk-teal hover:shadow-xl transition-all duration-300 group"
              >
                {/* Step Number Pill + Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-kk-blue group-hover:bg-kk-teal text-white font-black text-base flex items-center justify-center shadow-md transition-colors">
                    {step.num}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-700 group-hover:text-kk-teal flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-lg font-black text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. STICKY SPLIT-SCREEN: WHY DIAL FOR SERVICES + 7 GUARANTEES LEDGER
      ====================================================================== */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
          {/* Left Sticky Column: Story + Performance Benchmarks (5 Cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-kk-blue/10 text-kk-blue text-xs font-extrabold uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 fill-kk-teal text-kk-teal" />
              <span>The Trusted Choice in Pune</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-kk-blue tracking-tight leading-[1.15]">
              Why Choose <span className="text-kk-teal">Dial For Services?</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Dial For Services makes expert appliance care easily accessible—saving both your money and time by connecting you directly with certified field engineers.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              When you call us to report a faulty appliance, you speak directly with our knowledgeable office team trained to handle appliance emergencies. Our technicians carry genuine spare parts in their kit, enabling fast, secure doorstep turnarounds plus free in-home consultations overseen by a dedicated project coordinator.
            </p>

            {/* Performance Benchmarks Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-md space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest">
                  Verified Service Benchmarks
                </h3>
                <span className="text-xs font-bold text-kk-teal">Pune &amp; PCMC</span>
              </div>

              {metrics.map((metric, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="text-sm font-bold text-slate-900 block">
                        {metric.label}
                      </span>
                      <span className="text-[11px] text-slate-500">{metric.sub}</span>
                    </div>
                    <span className="text-lg font-black text-kk-blue">
                      {metric.value}%
                    </span>
                  </div>
                  <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${metric.color}`}
                      style={{ width: `${metric.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: "What You Will Get" 7-Point Interactive Ledger (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-kk-blue text-white rounded-3xl p-6 sm:p-8 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-kk-teal block mb-1">
                  7-POINT CUSTOMER CHARTER
                </span>
                <h3 className="text-2xl font-black">What You Will Get With Every Visit</h3>
              </div>
              <Link
                href="/enquire"
                className="px-5 py-2.5 rounded-xl bg-kk-teal hover:bg-kk-teal-light text-white text-xs font-bold shrink-0 transition-all"
              >
                Book Now →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {guaranteeItems.map((item, idx) => (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-kk-teal shadow-xs hover:shadow-lg transition-all flex flex-col justify-between ${idx === guaranteeItems.length - 1 ? "sm:col-span-2" : ""
                    }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-xs font-black text-slate-300 tracking-widest">
                      #{item.num}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-base font-black text-slate-900 mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          7. SPLIT EMERGENCY DISPATCH BANNER
      ====================================================================== */}
      <section className="pb-16 sm:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-[2rem] bg-slate-900 text-white overflow-hidden shadow-2xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12">
          {/* Left Content (8 Cols) */}
          <div className="lg:col-span-8 p-8 sm:p-10 lg:p-12 flex flex-col justify-center space-y-4 relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kk-teal/20 text-kk-teal border border-kk-teal/30 text-xs font-bold uppercase tracking-wider w-fit">
              <Zap className="w-3.5 h-3.5" />
              <span>Rapid 90-Minute Doorstep Dispatch</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
              Ready for Hassle-Free Appliance Repair?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl">
              Get a background-verified technician at your doorstep across Pune &amp; PCMC within 90 minutes. Zero advance payment required.
            </p>
          </div>

          {/* Right Action Panel (4 Cols) */}
          <div className="lg:col-span-4 bg-gradient-to-br from-kk-blue to-slate-950 p-8 sm:p-10 flex flex-col justify-center gap-3.5 border-t lg:border-t-0 lg:border-l border-white/10">
            <Link
              href="/enquire"
              className="w-full py-4 px-6 rounded-2xl bg-kk-teal hover:bg-kk-teal-light text-white font-bold text-sm shadow-lg shadow-kk-teal/25 flex items-center justify-center gap-2.5 transition-all hover:-translate-y-0.5"
            >
              <span>Book Service Online</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+917823038645"
              className="w-full py-4 px-6 rounded-2xl bg-white hover:bg-slate-100 text-kk-blue font-bold text-sm shadow-lg flex items-center justify-center gap-2.5 transition-all"
            >
              <Phone className="w-4 h-4 text-kk-red" />
              <span>Call +91 78230 38645</span>
            </a>
            <p className="text-[11px] text-center text-slate-400 pt-1">
              Open 7 Days a Week • Upfront Inspection Quotes
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}