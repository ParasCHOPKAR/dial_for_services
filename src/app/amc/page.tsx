import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Phone,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Check,
  AlertCircle,
  Shield,
  Zap,
  Settings,
  Headphones,
  Calendar,
  MapPin,
  CircleDollarSign,
  ClipboardCheck,
  Ban,
  Wrench,
  Clock,
  Layers,
  ArrowUpRight
} from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AMC & CMC Maintenance Contracts in Pune | AC & Home Appliances | Dial For Services",
  description:
    "Annual Maintenance Contract (AMC) & Comprehensive Maintenance Contract (CMC) Services for AC, Refrigerator, Washing Machine, Microwave, Geysers and Water Purifiers in Pune.",
  keywords:
    "AMC AC Pune, CMC AC Pune, Annual Maintenance Contract Pune, Comprehensive Maintenance Contract appliances Pune, AC AMC PCMC, Pune home appliance contract"
};

export default function AmcPage() {
  const amcBenefits = [
    {
      code: "01",
      title: "Peak Energy Efficiency",
      desc: "Maintains optimal cooling performance and airflow while reducing power draw.",
      icon: <Zap className="w-5 h-5 text-sky-600" />
    },
    {
      code: "02",
      title: "Scheduled Routine Servicing",
      desc: "Periodic tune-ups prevent unexpected breakdown emergencies during peak season.",
      icon: <Calendar className="w-5 h-5 text-sky-600" />
    },
    {
      code: "03",
      title: "Lower Electricity Bills",
      desc: "Clean coils, tuned motors, and balanced pressure reduce monthly power bills.",
      icon: <CircleDollarSign className="w-5 h-5 text-kk-teal" />
    },
    {
      code: "04",
      title: "Spare Part Discounts",
      desc: "Exclusive member-only discounts on all genuine replacement spare parts.",
      icon: <Settings className="w-5 h-5 text-kk-blue" />
    },
    {
      code: "05",
      title: "Customizable 1–5+ Yr Plans",
      desc: "Flexible contracts tailored to your exact appliance count, brand, and usage.",
      icon: <Layers className="w-5 h-5 text-emerald-600" />
    }
  ];

  const amcIncludes = [
    "4 Scheduled Routine Services per Year (Wet & Jet Wash)",
    "Unlimited Breakdown Attendance with ₹0 Technician Visit Fees",
    "Refrigerant Operating Pressure & Ampere Diagnostic Checks",
    "Thermostat, Electrical Wiring & Operating Health Inspection",
    "Clean Filters, Drain Line, Blower & Condenser Coils",
    "Detailed Digital Service Report after Each Visit"
  ];

  const amcExcludes = [
    "Refrigerant Gas Charging",
    "Compressor Replacement",
    "Fan Motor & Capacitor Replacement",
    "Cooling & Condenser Coil Replacement",
    "Electronic PCB Board Repair",
    "Plastic Body & Air Vanes"
  ];

  const cmcIncludes = [
    "4 Comprehensive Routine Servicing Visits per Year",
    "Priority Breakdown Attendance with ₹0 Visiting Charge",
    "100% Free Refrigerant Gas Charging & Leak Fixing",
    "Compressor Replacement Covered at Zero Extra Cost",
    "Fan Motor, Capacitor & Electrical Relay Covered",
    "Electronic PCB Board Repair or Replacement Covered",
    "Deep Jet Wash & Chemical Coil Servicing Included"
  ];

  const cmcExcludes = [
    "External Voltage Stabilizer",
    "Physical Plastic Body Damage",
    "External Sheet Metal & Ducting",
    "Tampered or Relocated Units"
  ];

  const amcVsCmc = [
    {
      feature: "Routine Preventive Services",
      amc: "3 to 4 Wet/Dry Cleans / Year",
      cmc: "4 Comprehensive Services / Year",
      badge: "Core Upkeep"
    },
    {
      feature: "Labor & Breakdown Visit Charges",
      amc: "100% Free & Unlimited",
      cmc: "100% Free & Unlimited",
      badge: "Zero Visit Fee"
    },
    {
      feature: "Minor Electrical Parts (Capacitor/Relay)",
      amc: "Charged at discounted rates",
      cmc: "100% Included & Free",
      badge: "Spares"
    },
    {
      feature: "Refrigerant Gas Charging (AC/Fridge)",
      amc: "Discounted spare rates",
      cmc: "100% Covered at No Cost",
      badge: "High Value"
    },
    {
      feature: "Compressor Replacement Coverage",
      amc: "Labor free (part charged)",
      cmc: "Full Part & Labor Covered",
      badge: "Major Component"
    },
    {
      feature: "Emergency Response Priority",
      amc: "Guaranteed within 4–6 Hours",
      cmc: "VIP Priority: within 2–4 Hours",
      badge: "SLA Speed"
    },
    {
      feature: "Ideal Appliance Age & Usage",
      amc: "Appliances under 4 years old",
      cmc: "Appliances 3+ years old & heavy usage",
      badge: "Recommendation"
    }
  ];

  const coveredAppliances = [
    "Split & Window AC",
    "Single & Double Door Fridge",
    "Front & Top Load Washing Machine",
    "Microwave Ovens",
    "Electric & Gas Geysers",
    "RO Water Purifiers (Aquaguard)"
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col font-sans selection:bg-kk-teal selection:text-white">
      <TopBar />
      <Navbar />

      {/* =====================================================================
          1. ARCHITECTURAL SPLIT HERO + DUAL CONTRACT LAUNCHPAD
      ====================================================================== */}
      <section className="relative bg-white pt-6 pb-14 lg:py-20 border-b border-slate-200/80 overflow-hidden">
        {/* Blueprint Subtle Grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)`,
            backgroundSize: "40px 40px"
          }}
        />
        <div className="absolute -top-32 right-0 w-96 h-96 bg-kk-teal/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Top Breadcrumb + Pune Exclusivity Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-slate-100">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
              <Link href="/" className="hover:text-kk-blue transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-kk-teal" />
              <span className="text-kk-blue">AMC &amp; CMC Contracts</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-[11px] sm:text-xs font-extrabold text-amber-900">
              <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>Pune &amp; PCMC Service Zone — Customers from Pune ONLY</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Editorial Pitch + Covered Appliances (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-kk-blue/5 border border-kk-blue/15 text-kk-blue text-xs font-black uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-kk-teal" />
                <span>1 to 5+ Year Multi-Appliance Protection</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[50px] font-black text-slate-900 tracking-tight leading-[1.1]">
                Annual (<span className="text-sky-600">AMC</span>) &amp; Comprehensive (
                <span className="text-kk-teal">CMC</span>) Maintenance Contracts
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                Eliminate surprise breakdown bills and extend the operational lifespan of your home and commercial appliances. Choose between scheduled preventive tune-ups or 360° all-inclusive spare part and compressor protection.
              </p>

              {/* Covered Appliances Tag Matrix */}
              <div className="pt-1">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 block mb-2.5">
                  ELIGIBLE APPLIANCES UNDER CONTRACT:
                </span>
                <div className="flex flex-wrap gap-2">
                  {coveredAppliances.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold flex items-center gap-1.5 border border-slate-200/70"
                    >
                      <Check className="w-3.5 h-3.5 text-kk-teal" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Primary CTA Cluster */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <Link
                  href="/enquire"
                  className="px-7 py-4 rounded-2xl bg-kk-teal hover:bg-kk-teal-light text-white font-black text-xs sm:text-sm shadow-xl shadow-kk-teal/25 flex items-center justify-center gap-2.5 transition-all hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Click Here for Online Service Booking</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+917823038645"
                  className="px-6 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 transition-all"
                >
                  <Phone className="w-4 h-4 text-kk-teal" />
                  <span>Call Hotline: +91 78230 38645</span>
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Dual Plan Selector Stack (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              {/* Hero Visual Banner Card */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-lg aspect-[16/9] bg-slate-900">
                <Image
                  src="/images/amc_cmc/hero_02.png"
                  alt="AMC & CMC Services in Pune - Dial For Services"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between text-white">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-kk-teal block">
                      VERIFIED FLEET • PUNE
                    </span>
                    <p className="text-xs sm:text-sm font-bold">
                      4 Scheduled Services / Year + ₹0 Visit Fee
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-white/15 backdrop-blur-md text-[11px] font-black">
                    1–5+ Yrs
                  </span>
                </div>
              </div>

              {/* Two Quick-Jump Plan Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <a
                  href="#amc-services"
                  className="group p-4 rounded-2xl bg-sky-50/70 hover:bg-sky-50 border border-sky-200 transition-all flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-md bg-sky-600 text-white text-[10px] font-black uppercase">
                      TIER 01
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-sky-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <div>
                    <h2 className="text-base font-black text-slate-900">AMC Plan</h2>
                    <p className="text-[11px] text-slate-600 mt-0.5">
                      Preventive servicing + 100% free breakdown labor.
                    </p>
                  </div>
                </a>

                <a
                  href="#cmc-services"
                  className="group p-4 rounded-2xl bg-teal-50/80 hover:bg-teal-50 border-2 border-kk-teal transition-all flex flex-col justify-between relative"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-md bg-kk-teal text-white text-[10px] font-black uppercase">
                      TIER 02 • ALL-IN
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-kk-teal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <div>
                    <h2 className="text-base font-black text-slate-900">CMC Plan</h2>
                    <p className="text-[11px] text-slate-600 mt-0.5">
                      Free Gas + Compressor + PCB + Spares + Labor.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. STICKY QUICK-JUMP NAVIGATION BAR
      ====================================================================== */}
      <div className="sticky top-16 z-30 bg-slate-900/95 backdrop-blur-md text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href="#amc-services"
              className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-sky-500 text-xs font-bold transition-colors"
            >
              01. AMC Specification
            </a>
            <a
              href="#cmc-services"
              className="px-3.5 py-1.5 rounded-lg bg-kk-teal/20 border border-kk-teal/40 hover:bg-kk-teal text-xs font-bold text-teal-200 hover:text-white transition-colors"
            >
              02. CMC Total Shield
            </a>
            <a
              href="#compare-matrix"
              className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-bold transition-colors"
            >
              03. AMC vs CMC Matrix
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4 text-xs font-bold text-slate-300 shrink-0">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-kk-teal" /> 2–4 Hr Priority SLA
            </span>
            <Link
              href="/enquire"
              className="px-3.5 py-1.5 rounded-lg bg-kk-teal text-white hover:bg-kk-teal-light transition-colors"
            >
              Get Instant Quote →
            </Link>
          </div>
        </div>
      </div>

      {/* =====================================================================
          3. DOSSIER 01: AMC (ANNUAL MAINTENANCE CONTRACT) SPECIFICATION
      ====================================================================== */}
      <section id="amc-services" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Title Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs mb-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-sky-600">
              <span>PLAN DOSSIER 01</span>
              <span>•</span>
              <span>PREVENTIVE CARE (1 TO 5+ YEARS)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-kk-blue tracking-tight">
              AMC — Annual Maintenance Contract
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              An Annual Maintenance Contract (AMC) is a preventive service plan for your air conditioners and home appliances. It provides regular scheduled maintenance, deep wet-jet cleaning, and priority breakdown attendance with <strong>₹0 technician visit charges</strong> across Pune.
            </p>
          </div>

          {/* 3 Key Pillars Box */}
          <div className="grid grid-cols-3 gap-3 shrink-0">
            <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-100 text-center">
              <span className="block text-lg sm:text-xl font-black text-sky-700">4 Visits</span>
              <span className="text-[10px] sm:text-[11px] font-bold text-slate-600">Routine / Year</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-100 text-center">
              <span className="block text-lg sm:text-xl font-black text-emerald-700">₹0 Fee</span>
              <span className="text-[10px] sm:text-[11px] font-bold text-slate-600">Breakdown Labor</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-100 border border-slate-200 text-center">
              <span className="block text-lg sm:text-xl font-black text-slate-900">1–5+ Yrs</span>
              <span className="text-[10px] sm:text-[11px] font-bold text-slate-600">Custom Tenure</span>
            </div>
          </div>
        </div>

        {/* Main Asymmetric Spec Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Sticky Visual Column (4 Cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-4">
            <div className="bg-slate-900 rounded-3xl p-3 text-white shadow-xl">
              <div className="relative aspect-[4/3.5] rounded-2xl overflow-hidden">
                <Image
                  src="/images/amc_cmc/amc_section_img.png"
                  alt="Professional technician inspecting and servicing air conditioner"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-sky-500 text-white text-[10px] font-black uppercase tracking-wider">
                  Standard Preventive Tier
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-sm font-black">Trained &amp; Verified AC Technicians</p>
                  <p className="text-[11px] text-slate-300">
                    High-pressure jet pump cleaning &amp; electrical health checkups
                  </p>
                </div>
              </div>

              <div className="p-3 pt-4 space-y-2.5">
                <Link
                  href="/enquire"
                  className="w-full py-3 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-black text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book AMC Service Online</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="tel:+917823038645"
                  className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-sky-400" />
                  <span>Helpline: +91 78230 38645</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Specification Ledger (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            {/* 5 Benefits Horizontal Cards */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-600" />
                <span>5 CORE ADVANTAGES OF CHOOSING AMC</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {amcBenefits.map((b, i) => (
                  <div
                    key={b.code}
                    className={`p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70 flex items-start gap-3.5 ${i === amcBenefits.length - 1 ? "sm:col-span-2" : ""
                      }`}
                  >
                    <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0">
                      {b.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black text-slate-400">#{b.code}</span>
                        <h4 className="text-xs sm:text-sm font-black text-slate-900">{b.title}</h4>
                      </div>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Side-by-Side Inclusions & Exclusions Ledger */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Inclusions */}
              <div className="bg-emerald-50/50 rounded-3xl p-6 border border-emerald-200/90">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-emerald-200/70">
                  <span className="text-xs font-black uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
                    <ClipboardCheck className="w-4 h-4 text-emerald-600" />
                    Included in AMC
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold">
                    100% Covered
                  </span>
                </div>
                <ul className="space-y-3">
                  {amcIncludes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs font-bold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                  <span className="text-xs font-black uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <Ban className="w-4 h-4 text-slate-400" />
                    Extra Charges Exclude
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold">
                    Discounted Rates
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {amcExcludes.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2.5 text-xs font-semibold text-slate-600 bg-slate-50 px-3 py-2 rounded-xl border border-slate-200/60"
                    >
                      <span className="w-4 h-4 rounded bg-slate-200 text-slate-600 text-[10px] font-black flex items-center justify-center shrink-0">
                        ✕
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. DOSSIER 02: CMC (COMPREHENSIVE MAINTENANCE CONTRACT) DARK SHOWCASE
      ====================================================================== */}
      <section id="cmc-services" className="py-16 sm:py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-kk-teal/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Top CMC Header Box */}
          <div className="rounded-3xl bg-gradient-to-r from-kk-teal/20 via-slate-900 to-slate-900 border-2 border-kk-teal/60 p-6 sm:p-8 lg:p-10 mb-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2.5 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kk-teal text-white text-[11px] font-black uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>PLAN DOSSIER 02 • MOST POPULAR 360° SHIELD</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
                CMC — Comprehensive Maintenance Contract
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                A <strong>Comprehensive Maintenance Contract (CMC)</strong> provides total peace-of-mind coverage. It includes <strong>both service labor and 100% free spare parts replacement</strong> — covering the compressor, PCB board, fan motor, electrical parts, and refrigerant gas charging alongside 4 routine scheduled services.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 shrink-0">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-center">
                <span className="block text-base sm:text-xl font-black text-kk-teal">100% Free</span>
                <span className="text-[10px] sm:text-[11px] text-slate-300 font-semibold">Gas Charging</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-center">
                <span className="block text-base sm:text-xl font-black text-white">Covered</span>
                <span className="text-[10px] sm:text-[11px] text-slate-300 font-semibold">Compressor &amp; PCB</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-center">
                <span className="block text-base sm:text-xl font-black text-cyan-300">2–4 Hrs</span>
                <span className="text-[10px] sm:text-[11px] text-slate-300 font-semibold">VIP Priority SLA</span>
              </div>
            </div>
          </div>

          {/* CMC Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 8 Columns: Full Inclusions + Exclusions */}
            <div className="lg:col-span-8 space-y-6 order-2 lg:order-1">
              {/* 7 All-Inclusive Features Grid */}
              <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6 border-b border-slate-800">
                  <div className="flex items-center gap-2 text-kk-teal font-black text-xs sm:text-sm uppercase tracking-wider">
                    <ShieldCheck className="w-5 h-5" />
                    <span>Zero-Bill Spare Parts &amp; Labor Inclusions</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-kk-teal/20 text-kk-teal border border-kk-teal/30 text-xs font-bold">
                    ₹0 Repair or Gas Cost
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {cmcIncludes.map((inc, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-2xl bg-slate-950/80 border border-slate-800/90 flex items-start gap-3 ${idx === cmcIncludes.length - 1 ? "sm:col-span-2 border-kk-teal/40 bg-kk-teal/5" : ""
                        }`}
                    >
                      <div className="w-6 h-6 rounded-full bg-kk-teal text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                        ✓
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-slate-100 leading-snug">
                        {inc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CMC Exclusions Bar */}
              <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-6">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-400 mb-3">
                  <AlertCircle className="w-4 h-4 text-amber-400" />
                  <span>External Non-Standard Items Excluded From CMC:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                  {cmcExcludes.map((exc, idx) => (
                    <div
                      key={idx}
                      className="px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold text-slate-300 flex items-center gap-2"
                    >
                      <span className="text-rose-400 font-black">✕</span>
                      <span>{exc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 4 Columns: Visual Card + Direct Action */}
            <div className="lg:col-span-4 space-y-4 order-1 lg:order-2">
              <div className="rounded-3xl bg-slate-900 border-2 border-kk-teal/40 p-3 shadow-2xl">
                <div className="relative aspect-[4/3.4] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/amc_cmc/cmc_section_img.png"
                    alt="Skilled HVAC technician repairing AC compressor, electrical motor, and testing refrigerant gas under Comprehensive Maintenance Contract (CMC)"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/90 backdrop-blur-md border border-kk-teal/30">
                    <span className="text-[10px] font-black uppercase tracking-widest text-kk-teal block">
                      ALL-INCLUSIVE GUARANTEE
                    </span>
                    <p className="text-xs font-bold text-white mt-0.5">
                      Free Compressor, Fan Motor, PCB &amp; Gas Refills
                    </p>
                  </div>
                </div>

                <div className="p-3 pt-4 space-y-2.5">
                  <Link
                    href="/enquire"
                    className="w-full py-3.5 px-4 rounded-xl bg-kk-teal hover:bg-kk-teal-light text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-kk-teal/25 transition-all"
                  >
                    <span>Book CMC Protection Online</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="tel:+917823038645"
                    className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 text-kk-teal" />
                    <span>CMC Hotline: +91 78230 38645</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. MOBILE-NATIVE INTERACTIVE CARD MATRIX (Replaces Old HTML Table)
      ====================================================================== */}
      <section id="compare-matrix" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-kk-teal block mb-2">
            HEAD-TO-HEAD CLAUSE COMPARISON
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-kk-blue tracking-tight">
            Understanding AMC vs. CMC at a Glance
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Compare every clause side-by-side—zero fine print or surprise exclusions.
          </p>
        </div>

        {/* Sticky Column Headers on Desktop */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-4 px-6 py-4 rounded-2xl bg-slate-900 text-white font-black text-xs uppercase tracking-wider mb-4">
          <div className="lg:col-span-4">Contract Clause / Feature</div>
          <div className="lg:col-span-4 text-sky-300">Tier 01: AMC (Annual Contract)</div>
          <div className="lg:col-span-4 text-kk-teal">Tier 02: CMC (Comprehensive Contract)</div>
        </div>

        {/* Row Cards */}
        <div className="space-y-3.5">
          {amcVsCmc.map((row, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs hover:border-kk-teal/50 transition-all grid grid-cols-1 lg:grid-cols-12 gap-4 items-center"
            >
              {/* Feature Title */}
              <div className="lg:col-span-4 flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-500 font-black text-xs flex items-center justify-center shrink-0">
                  0{idx + 1}
                </span>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                    {row.badge}
                  </span>
                  <h3 className="text-sm sm:text-base font-black text-slate-900">
                    {row.feature}
                  </h3>
                </div>
              </div>

              {/* AMC Value */}
              <div className="lg:col-span-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                <span className="lg:hidden text-[10px] font-black uppercase tracking-wider text-sky-600 block mb-1">
                  AMC (Annual Contract):
                </span>
                <p className="text-xs sm:text-sm font-semibold text-slate-700">
                  {row.amc}
                </p>
              </div>

              {/* CMC Value */}
              <div className="lg:col-span-4 p-3.5 rounded-xl bg-teal-50/70 border border-teal-200">
                <span className="lg:hidden text-[10px] font-black uppercase tracking-wider text-kk-teal block mb-1">
                  CMC (Comprehensive):
                </span>
                <p className="text-xs sm:text-sm font-black text-teal-950 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-kk-teal shrink-0" />
                  <span>{row.cmc}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          6. PUNE DOORSTEP DISPATCH FOOTER CTA
      ====================================================================== */}
      <section className="pb-16 sm:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-3xl bg-gradient-to-r from-[#071d49] via-kk-blue to-slate-900 text-white p-7 sm:p-10 lg:p-12 shadow-2xl border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Instant Doorstep Inspection Across Pune &amp; PCMC</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
              Ready to Lock In Your AMC or CMC Contract?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Whether you need a single home AC covered or a multi-unit commercial contract across Pune, our team provides same-day inspection and transparent quotes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3.5 w-full lg:w-auto shrink-0">
            <Link
              href="/enquire"
              className="px-7 py-4 rounded-2xl bg-kk-teal hover:bg-kk-teal-light text-white font-black text-xs sm:text-sm shadow-lg shadow-kk-teal/30 flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
            >
              <span>Book Online Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+917823038645"
              className="px-6 py-4 rounded-2xl bg-white text-slate-900 hover:bg-slate-100 font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4 text-kk-teal" />
              <span>+91 78230 38645</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}