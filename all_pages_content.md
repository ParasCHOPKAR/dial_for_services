# Complete Page-Wise Content

## Home Page
**File:** "c:\Users\MY\Downloads\kk-multi-services_02\src\app\page.tsx"

`	sx
import Image from "next/image";
import {
  Phone,
  Wrench,
  Clock,
  CreditCard,
  CheckCircle2,
  Home,
  Users,
  Wallet,
  Headset,
  ArrowRight,
  Settings,
  ThumbsUp,
  Building2,
  Building,
  ShoppingBag,
  Users2,
  Landmark,
  Calendar,
  Tv,
  Thermometer,
  Mail,
  MapPin,
  Award,
  Star,
  ShieldCheck,
  Search,
  FileText,
  Quote,
  MessageSquare,
  ArrowUp
} from "lucide-react";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import OpenBookingButton from "@/components/OpenBookingButton";

export default function HomePage() {
  return (
    <main id="top" className="min-h-screen font-sans bg-white text-slate-900 flex flex-col">
      {/* Top Bar */}
      <TopBar />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSlider />

      {/* Services Section */}
      <section id="services" className="py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-kk-teal/5 rounded-full blur-[80px] sm:blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-kk-blue/5 rounded-full blur-[80px] sm:blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

        <div className="max-w-7xl xl:max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Layout */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-14 lg:mb-16 gap-6 sm:gap-8 lg:gap-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-2.5 sm:mb-4">
                <div className="h-0.5 w-7 sm:w-10 bg-kk-teal"></div>
                <h4 className="text-xs sm:text-sm font-bold tracking-widest text-slate-500 uppercase">Our Services</h4>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-kk-blue leading-[1.2] sm:leading-[1.15] mb-3 sm:mb-5">
                We Repair All Major <br className="hidden sm:inline" />Home <span className="text-kk-teal">Appliances</span>
              </h2>
              <p className="text-slate-600 text-xs sm:text-base lg:text-lg leading-relaxed max-w-xl">
                From your kitchen to your laundry room, our expert technicians are equipped to keep your home running smoothly with fast, reliable, and affordable repair solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5 pb-1 shrink-0 w-full sm:w-auto">
              <div className="flex items-center gap-3 bg-white/80 sm:bg-white/60 backdrop-blur-sm p-2 sm:p-2.5 pr-4 rounded-full border border-slate-200/60 shadow-xs">
                <div className="flex -space-x-2.5 ml-1">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-7 h-7 sm:w-9 sm:h-9 rounded-full border-2 border-white bg-slate-200 overflow-hidden relative">
                      <div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-400"></div>
                    </div>
                  ))}
                </div>
                <div className="text-[11px] sm:text-xs font-bold text-slate-700 leading-tight pr-1">
                  Trusted by<br /><span className="text-kk-teal">15000+ Families</span>
                </div>
              </div>
              <Link href="/services" className="group inline-flex items-center justify-center gap-2.5 sm:gap-3 bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-kk-teal text-slate-800 px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-full font-bold transition-all text-xs sm:text-base active:scale-95">
                View All Services
                <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-kk-teal/10 flex items-center justify-center group-hover:bg-kk-teal transition-colors">
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-kk-teal group-hover:text-white transition-colors" />
                </span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-3.5 xl:gap-5 2xl:gap-7">

            {/* Service 1: Air Conditioner */}
            <Link href="/services#ac" className="group relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-3.5 xl:p-5 2xl:p-6 shadow-sm hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.12)] transition-all duration-300 cursor-pointer overflow-hidden border border-slate-100 flex flex-col h-full hover:-translate-y-2 active:scale-[0.99]">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-kk-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-44 xl:h-64 2xl:h-72 mb-4 sm:mb-5 lg:mb-3 xl:mb-5 bg-slate-50/80 rounded-xl sm:rounded-2xl overflow-hidden group-hover:bg-white transition-colors duration-500 flex items-center justify-center border border-slate-100/60">
                <Image
                  src="/images/appliance_ac_1789636637732.jpg"
                  alt="Air Conditioner"
                  fill
                  className="object-contain p-2 sm:p-3 mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="relative z-10 flex-grow flex flex-col">
                <h3 className="text-lg sm:text-xl lg:text-base xl:text-lg 2xl:text-2xl font-extrabold text-slate-800 mb-1.5 group-hover:text-kk-teal transition-colors">Air Conditioner</h3>
                <p className="text-xs sm:text-sm lg:text-xs xl:text-sm text-slate-500 mb-4 sm:mb-6 lg:mb-3 xl:mb-5 line-clamp-2 leading-relaxed">Premium AC service & repair for ultimate comfort.</p>
                <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-3 sm:pt-4 lg:pt-2.5 xl:pt-4">
                  <span className="text-xs sm:text-sm xl:text-base font-bold text-kk-blue group-hover:text-kk-teal transition-colors flex items-center gap-1">
                    Book Now <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </span>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-7 lg:h-7 xl:w-9 xl:h-9 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-kk-teal group-hover:text-white text-slate-400 transition-all duration-300 shadow-xs shrink-0">
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Service 2: Refrigerator */}
            <Link href="/services#refrigerator" className="group relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-3.5 xl:p-5 2xl:p-6 shadow-sm hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.12)] transition-all duration-300 cursor-pointer overflow-hidden border border-slate-100 flex flex-col h-full hover:-translate-y-2 active:scale-[0.99]">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-kk-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-44 xl:h-64 2xl:h-72 mb-4 sm:mb-5 lg:mb-3 xl:mb-5 bg-slate-50/80 rounded-xl sm:rounded-2xl overflow-hidden group-hover:bg-white transition-colors duration-500 flex items-center justify-center border border-slate-100/60">
                <Image
                  src="/images/appliance_fridge_1789636595538.jpg"
                  alt="Refrigerator"
                  fill
                  className="object-contain p-2 sm:p-3 mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="relative z-10 flex-grow flex flex-col">
                <h3 className="text-lg sm:text-xl lg:text-base xl:text-lg 2xl:text-2xl font-extrabold text-slate-800 mb-1.5 group-hover:text-kk-teal transition-colors">Refrigerator</h3>
                <p className="text-xs sm:text-sm lg:text-xs xl:text-sm text-slate-500 mb-4 sm:mb-6 lg:mb-3 xl:mb-5 line-clamp-2 leading-relaxed">Fast cooling solutions for all major brands and models.</p>
                <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-3 sm:pt-4 lg:pt-2.5 xl:pt-4">
                  <span className="text-xs sm:text-sm xl:text-base font-bold text-kk-blue group-hover:text-kk-teal transition-colors flex items-center gap-1">
                    Book Now <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </span>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-7 lg:h-7 xl:w-9 xl:h-9 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-kk-teal group-hover:text-white text-slate-400 transition-all duration-300 shadow-xs shrink-0">
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Service 3: Washing Machine */}
            <Link href="/services#washing-machine" className="group relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-3.5 xl:p-5 2xl:p-6 shadow-sm hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.12)] transition-all duration-300 cursor-pointer overflow-hidden border border-slate-100 flex flex-col h-full hover:-translate-y-2 active:scale-[0.99]">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-kk-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-44 xl:h-64 2xl:h-72 mb-4 sm:mb-5 lg:mb-3 xl:mb-5 bg-slate-50/80 rounded-xl sm:rounded-2xl overflow-hidden group-hover:bg-white transition-colors duration-500 flex items-center justify-center border border-slate-100/60">
                <Image
                  src="/images/appliance_washing_machine_1789636610541.jpg"
                  alt="Washing Machine"
                  fill
                  className="object-contain p-2 sm:p-3 mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="relative z-10 flex-grow flex flex-col">
                <h3 className="text-lg sm:text-xl lg:text-base xl:text-lg 2xl:text-2xl font-extrabold text-slate-800 mb-1.5 group-hover:text-kk-teal transition-colors">Washing Machine</h3>
                <p className="text-xs sm:text-sm lg:text-xs xl:text-sm text-slate-500 mb-4 sm:mb-6 lg:mb-3 xl:mb-5 line-clamp-2 leading-relaxed">Reliable repairs for front and top load machines.</p>
                <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-3 sm:pt-4 lg:pt-2.5 xl:pt-4">
                  <span className="text-xs sm:text-sm xl:text-base font-bold text-kk-blue group-hover:text-kk-teal transition-colors flex items-center gap-1">
                    Book Now <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </span>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-7 lg:h-7 xl:w-9 xl:h-9 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-kk-teal group-hover:text-white text-slate-400 transition-all duration-300 shadow-xs shrink-0">
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Service 4: Microwave */}
            <Link href="/services#microwave" className="group relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-3.5 xl:p-5 2xl:p-6 shadow-sm hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.12)] transition-all duration-300 cursor-pointer overflow-hidden border border-slate-100 flex flex-col h-full hover:-translate-y-2 active:scale-[0.99]">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-kk-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-44 xl:h-64 2xl:h-72 mb-4 sm:mb-5 lg:mb-3 xl:mb-5 bg-slate-50/80 rounded-xl sm:rounded-2xl overflow-hidden group-hover:bg-white transition-colors duration-500 flex items-center justify-center border border-slate-100/60">
                <Image
                  src="/images/appliance_microwave_1789636624228.jpg"
                  alt="Microwave"
                  fill
                  className="object-contain p-2 sm:p-3 mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="relative z-10 flex-grow flex flex-col">
                <h3 className="text-lg sm:text-xl lg:text-base xl:text-lg 2xl:text-2xl font-extrabold text-slate-800 mb-1.5 group-hover:text-kk-teal transition-colors">Microwave</h3>
                <p className="text-xs sm:text-sm lg:text-xs xl:text-sm text-slate-500 mb-4 sm:mb-6 lg:mb-3 xl:mb-5 line-clamp-2 leading-relaxed">Quick and secure fixes for all heating issues.</p>
                <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-3 sm:pt-4 lg:pt-2.5 xl:pt-4">
                  <span className="text-xs sm:text-sm xl:text-base font-bold text-kk-blue group-hover:text-kk-teal transition-colors flex items-center gap-1">
                    Book Now <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </span>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-7 lg:h-7 xl:w-9 xl:h-9 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-kk-teal group-hover:text-white text-slate-400 transition-all duration-300 shadow-xs shrink-0">
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Service 5: Geyser */}
            <Link href="/services#geyser" className="group relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-3.5 xl:p-5 2xl:p-6 shadow-sm hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.12)] transition-all duration-300 cursor-pointer overflow-hidden border border-slate-100 flex flex-col h-full hover:-translate-y-2 active:scale-[0.99]">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-kk-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-44 xl:h-64 2xl:h-72 mb-4 sm:mb-5 lg:mb-3 xl:mb-5 bg-slate-50/80 rounded-xl sm:rounded-2xl overflow-hidden group-hover:bg-white transition-colors duration-500 flex items-center justify-center border border-slate-100/60">
                <Image
                  src="/images/appliance_geyser.jpg"
                  alt="Geyser"
                  fill
                  className="object-contain p-2 sm:p-3 mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="relative z-10 flex-grow flex flex-col">
                <h3 className="text-lg sm:text-xl lg:text-base xl:text-lg 2xl:text-2xl font-extrabold text-slate-800 mb-1.5 group-hover:text-kk-teal transition-colors">Geyser</h3>
                <p className="text-xs sm:text-sm lg:text-xs xl:text-sm text-slate-500 mb-4 sm:mb-6 lg:mb-3 xl:mb-5 line-clamp-2 leading-relaxed">Safe, efficient water heater services.</p>
                <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-3 sm:pt-4 lg:pt-2.5 xl:pt-4">
                  <span className="text-xs sm:text-sm xl:text-base font-bold text-kk-blue group-hover:text-kk-teal transition-colors flex items-center gap-1">
                    Book Now <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </span>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-7 lg:h-7 xl:w-9 xl:h-9 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-kk-teal group-hover:text-white text-slate-400 transition-all duration-300 shadow-xs shrink-0">
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Why Choose Us & How It Works Combined Section */}
      <section id="about" className="py-14 sm:py-20 lg:py-24 bg-kk-blue text-white relative z-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-6 xl:gap-8 items-center">

            {/* Left Column: Text & Features */}
            <div className="lg:col-span-1">
              <h4 className="text-xs font-bold tracking-wider text-kk-teal uppercase mb-2.5 sm:mb-4">Why Choose Us</h4>
              <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-extrabold text-white leading-[1.2] mb-3 sm:mb-5">
                More Than Just a Repair Service
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm lg:text-base mb-5 sm:mb-7 leading-relaxed">
                We're not just technicians â€” we're your trusted appliance care partners. Our focus is on quality service, honest pricing and your complete satisfaction.
              </p>

              <div className="space-y-3 sm:space-y-3.5">
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-kk-teal rounded-full flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                    <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-200">Skilled & background-verified technicians</span>
                </div>
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-kk-teal rounded-full flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                    <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-200">Genuine spare parts</span>
                </div>
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-kk-teal rounded-full flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                    <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-200">Quick response & on-time service</span>
                </div>
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-kk-teal rounded-full flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                    <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-200">Clean, safe and professional service</span>
                </div>
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-kk-teal rounded-full flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                    <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-200">Service for homes, offices, shops & institutions</span>
                </div>
              </div>
            </div>

            {/* Middle Column: Video (Responsive on all screen sizes) */}
            <div className="lg:col-span-1 flex justify-center w-full my-3 lg:my-0">
              <div className="relative w-full max-w-md mx-auto lg:max-w-none lg:w-full lg:h-[420px] xl:h-[480px] z-10 rounded-2xl sm:rounded-3xl overflow-hidden aspect-video sm:aspect-[4/3] lg:aspect-auto shadow-2xl border border-white/10">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/images/home/kk_hone_page_0222.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-kk-blue/60 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Right Column: How It Works */}
            <div className="lg:col-span-1 lg:pl-3 xl:pl-8">
              <h4 className="text-xs font-bold tracking-wider text-kk-teal uppercase mb-2.5 sm:mb-4">How It Works</h4>
              <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-extrabold text-white leading-[1.2] mb-5 sm:mb-8">
                Simple Steps to Get Your Appliance Fixed
              </h2>

              <div className="space-y-4 sm:space-y-6 lg:space-y-5 xl:space-y-8">
                {/* Step 1 */}
                <div className="flex gap-3.5 sm:gap-5 items-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-10 lg:h-10 xl:w-12 xl:h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center shrink-0">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 sm:gap-2.5 mb-1">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-kk-teal rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold text-white">1</div>
                      <h4 className="font-bold text-white text-base sm:text-lg">Book</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">Choose your service and schedule a convenient time.</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-3.5 sm:gap-5 items-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-10 lg:h-10 xl:w-12 xl:h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center shrink-0">
                    <Search className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 sm:gap-2.5 mb-1">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-kk-teal rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold text-white">2</div>
                      <h4 className="font-bold text-white text-base sm:text-lg">Inspect</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">Our technician checks the issue and suggests the best solution.</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-3.5 sm:gap-5 items-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-10 lg:h-10 xl:w-12 xl:h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center shrink-0">
                    <Wrench className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 sm:gap-2.5 mb-1">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-kk-teal rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold text-white">3</div>
                      <h4 className="font-bold text-white text-base sm:text-lg">Repair</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">We fix it with genuine parts and ensure it works perfectly.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section id="areas" className="py-14 sm:py-20 lg:pt-20 lg:pb-32 xl:pt-24 xl:pb-36 bg-white relative overflow-hidden flex flex-col">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0 hidden lg:block">
          <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="Buildings Background" fill className="object-cover object-center" />

          {/* Elegant sweeping white background using SVG for precise curvature and drop-shadow */}
          <svg className="absolute inset-y-0 left-[-5%] w-[72%] xl:w-[65%] h-[105%] text-white drop-shadow-[20px_0_40px_rgba(150,200,220,0.5)] z-10" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path d="M0,0 L65,0 C95,45 80,85 50,100 L0,100 Z" fill="currentColor" />
          </svg>

          {/* Subtle dot pattern on the left */}
          <div className="absolute top-12 left-12 w-24 h-48 opacity-[0.15] z-20" style={{ backgroundImage: 'radial-gradient(var(--kk-blue) 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>

          {/* Teal wave at the bottom right */}
          <div className="absolute bottom-[-15%] right-0 w-[40%] h-[30%] bg-gradient-to-tr from-kk-teal to-kk-blue/80 blur-[80px] opacity-40 z-0"></div>
        </div>

        {/* Right side floating elements */}
        <div className="absolute top-16 right-8 xl:top-20 xl:right-16 2xl:right-20 z-20 hidden xl:flex gap-4 items-start text-white">
          <div className="w-[1.5px] h-32 bg-white/40 mt-1"></div>
          <div className="flex flex-col gap-4 text-[11px] font-bold tracking-[0.25em] uppercase opacity-90">
            <span>Comfort</span>
            <span>Safety</span>
            <span>Efficiency</span>
            <span>Always</span>
          </div>
        </div>

        <div className="absolute top-20 left-[58%] xl:top-24 xl:left-[55%] z-20 hidden xl:block -rotate-[10deg]">
          <div className="text-[2.2rem] xl:text-[2.5rem] text-kk-blue font-serif italic leading-none" style={{ fontFamily: 'cursive' }}>Spaces<br />We Keep<br />Running</div>
          <div className="w-24 h-[2px] bg-kk-teal mt-3"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 w-full flex flex-col justify-between">

          <div className="mb-10 sm:mb-14 lg:mb-16 xl:mb-20 max-w-xl lg:pr-4 xl:pr-8">
            <h4 className="text-[11px] font-bold tracking-[0.2em] text-kk-blue uppercase mb-3 sm:mb-5 relative inline-block pb-2">
              Who We Serve
              <span className="absolute bottom-0 left-0 w-10 h-[2.5px] bg-kk-teal"></span>
            </h4>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-[3.25rem] font-extrabold text-kk-blue leading-[1.15] lg:leading-[1.1] tracking-tight mb-3 sm:mb-5">
              Serving Homes, <br className="hidden sm:inline" />Businesses & <br className="hidden sm:inline" /><span className="text-kk-teal">Communities</span>
            </h2>
            <p className="text-[#334155] text-xs sm:text-base lg:text-lg mb-5 sm:mb-8 leading-relaxed max-w-lg">
              Reliable appliance repair and maintenance services for every space, keeping your world running smoothly.
            </p>

            <div className="grid grid-cols-3 sm:flex sm:flex-wrap items-center gap-2.5 sm:gap-8 text-xs sm:text-[13px] font-extrabold text-kk-blue">
              <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-1.5 sm:gap-3 p-2 sm:p-0 rounded-xl bg-slate-50 sm:bg-transparent">
                <ShieldCheck className="w-6 h-6 sm:w-9 sm:h-9 text-kk-teal sm:text-kk-blue stroke-[1.5]" />
                <span className="leading-tight text-[11px] sm:text-xs md:text-sm">Trusted<br className="hidden sm:inline" /> Service</span>
              </div>
              <div className="hidden sm:block w-px h-10 bg-slate-200"></div>
              <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-1.5 sm:gap-3 p-2 sm:p-0 rounded-xl bg-slate-50 sm:bg-transparent">
                <Users className="w-6 h-6 sm:w-9 sm:h-9 text-kk-teal sm:text-kk-blue stroke-[1.5]" />
                <span className="leading-tight text-[11px] sm:text-xs md:text-sm">15000+<br className="hidden sm:inline" /> Families</span>
              </div>
              <div className="hidden sm:block w-px h-10 bg-slate-200"></div>
              <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-1.5 sm:gap-3 p-2 sm:p-0 rounded-xl bg-slate-50 sm:bg-transparent">
                <Settings className="w-6 h-6 sm:w-9 sm:h-9 text-kk-teal sm:text-kk-blue stroke-[1.5]" />
                <span className="leading-tight text-[11px] sm:text-xs md:text-sm">Expert<br className="hidden sm:inline" /> Team</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl sm:rounded-[1.5rem] p-3 sm:p-5 lg:py-6 lg:px-3 xl:py-8 xl:px-8 shadow-lg sm:shadow-[0_15px_40px_rgba(0,0,0,0.08)] w-full border border-slate-100 relative lg:translate-y-14 xl:translate-y-16">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 justify-between items-stretch gap-2.5 sm:gap-4 lg:gap-0 lg:divide-x divide-slate-100 text-center">

              <div className="flex flex-col items-center gap-1.5 w-full p-2.5 sm:px-2 lg:px-1 xl:px-2 rounded-xl bg-slate-50/70 sm:bg-transparent border border-slate-100 sm:border-0 hover:bg-slate-50 transition-colors group cursor-pointer">
                <Home className="w-6 h-6 sm:w-8 sm:h-8 lg:w-6 lg:h-6 xl:w-8 xl:h-8 text-kk-blue group-hover:text-kk-teal transition-colors stroke-[1.5] mb-1 sm:mb-2" />
                <span className="font-extrabold text-kk-blue text-xs sm:text-sm lg:text-xs xl:text-sm">Residential</span>
                <p className="text-[10px] sm:text-xs lg:text-[10px] xl:text-xs text-[#64748b] leading-tight">Comfort for<br />every home</p>
                <div className="w-6 sm:w-8 h-[2px] bg-kk-teal mt-2 sm:mt-3"></div>
              </div>

              <div className="flex flex-col items-center gap-1.5 w-full p-2.5 sm:px-2 lg:px-1 xl:px-2 rounded-xl bg-slate-50/70 sm:bg-transparent border border-slate-100 sm:border-0 hover:bg-slate-50 transition-colors group cursor-pointer">
                <Building2 className="w-6 h-6 sm:w-8 sm:h-8 lg:w-6 lg:h-6 xl:w-8 xl:h-8 text-kk-blue group-hover:text-kk-teal transition-colors stroke-[1.5] mb-1 sm:mb-2" />
                <span className="font-extrabold text-kk-blue text-xs sm:text-sm lg:text-xs xl:text-sm">Commercial</span>
                <p className="text-[10px] sm:text-xs lg:text-[10px] xl:text-xs text-[#64748b] leading-tight">Reliable support<br />for business</p>
                <div className="w-6 sm:w-8 h-[2px] bg-slate-200 group-hover:bg-kk-teal transition-colors mt-2 sm:mt-3"></div>
              </div>

              <div className="flex flex-col items-center gap-1.5 w-full p-2.5 sm:px-2 lg:px-1 xl:px-2 rounded-xl bg-slate-50/70 sm:bg-transparent border border-slate-100 sm:border-0 hover:bg-slate-50 transition-colors group cursor-pointer">
                <Building className="w-6 h-6 sm:w-8 sm:h-8 lg:w-6 lg:h-6 xl:w-8 xl:h-8 text-kk-blue group-hover:text-kk-teal transition-colors stroke-[1.5] mb-1 sm:mb-2" />
                <span className="font-extrabold text-kk-blue text-xs sm:text-sm lg:text-xs xl:text-sm">Offices</span>
                <p className="text-[10px] sm:text-xs lg:text-[10px] xl:text-xs text-[#64748b] leading-tight">Minimal downtime,<br />high output</p>
                <div className="w-6 sm:w-8 h-[2px] bg-slate-200 group-hover:bg-kk-teal transition-colors mt-2 sm:mt-3"></div>
              </div>

              <div className="flex flex-col items-center gap-1.5 w-full p-2.5 sm:px-2 lg:px-1 xl:px-2 rounded-xl bg-slate-50/70 sm:bg-transparent border border-slate-100 sm:border-0 hover:bg-slate-50 transition-colors group cursor-pointer">
                <ShoppingBag className="w-6 h-6 sm:w-8 sm:h-8 lg:w-6 lg:h-6 xl:w-8 xl:h-8 text-kk-blue group-hover:text-kk-teal transition-colors stroke-[1.5] mb-1 sm:mb-2" />
                <span className="font-extrabold text-kk-blue text-xs sm:text-sm lg:text-xs xl:text-sm">Retail</span>
                <p className="text-[10px] sm:text-xs lg:text-[10px] xl:text-xs text-[#64748b] leading-tight">Uninterrupted<br />service always</p>
                <div className="w-6 sm:w-8 h-[2px] bg-slate-200 group-hover:bg-kk-teal transition-colors mt-2 sm:mt-3"></div>
              </div>

              <div className="flex flex-col items-center gap-1.5 w-full p-2.5 sm:px-2 lg:px-1 xl:px-2 rounded-xl bg-slate-50/70 sm:bg-transparent border border-slate-100 sm:border-0 hover:bg-slate-50 transition-colors group cursor-pointer">
                <Users2 className="w-6 h-6 sm:w-8 sm:h-8 lg:w-6 lg:h-6 xl:w-8 xl:h-8 text-kk-blue group-hover:text-kk-teal transition-colors stroke-[1.5] mb-1 sm:mb-2" />
                <span className="font-extrabold text-kk-blue text-xs sm:text-sm lg:text-xs xl:text-sm">Societies</span>
                <p className="text-[10px] sm:text-xs lg:text-[10px] xl:text-xs text-[#64748b] leading-tight">Trusted by housing<br />societies</p>
                <div className="w-6 sm:w-8 h-[2px] bg-slate-200 group-hover:bg-kk-teal transition-colors mt-2 sm:mt-3"></div>
              </div>

              <div className="flex flex-col items-center gap-1.5 w-full p-2.5 sm:px-2 lg:px-1 xl:px-2 rounded-xl bg-slate-50/70 sm:bg-transparent border border-slate-100 sm:border-0 hover:bg-slate-50 transition-colors group cursor-pointer">
                <Landmark className="w-6 h-6 sm:w-8 sm:h-8 lg:w-6 lg:h-6 xl:w-8 xl:h-8 text-kk-blue group-hover:text-kk-teal transition-colors stroke-[1.5] mb-1 sm:mb-2" />
                <span className="font-extrabold text-kk-blue text-xs sm:text-sm lg:text-xs xl:text-sm">Institutions</span>
                <p className="text-[10px] sm:text-xs lg:text-[10px] xl:text-xs text-[#64748b] leading-tight">Safe & efficient<br />environments</p>
                <div className="w-6 sm:w-8 h-[2px] bg-slate-200 group-hover:bg-kk-teal transition-colors mt-2 sm:mt-3"></div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* What Our Clients Say (Testimonials) */}
      <section className="py-14 sm:py-20 lg:py-24 bg-slate-50 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-kk-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-kk-blue/5 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-14 lg:mb-16">
            <h4 className="text-xs sm:text-sm font-bold tracking-wider text-slate-700 uppercase mb-2 sm:mb-3 relative inline-block">
              What Our Clients Say
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-kk-teal"></span>
            </h4>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-kk-blue leading-[1.2] mt-2.5 sm:mt-3">
              Trusted by Thousands.<br /><span className="text-kk-teal">Loved for Our Service.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-5 xl:gap-8 relative pt-4 sm:pt-6">

            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-5 xl:p-8 shadow-sm sm:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-slate-100 relative group hover:-translate-y-1.5 transition-transform duration-300">
              <div className="absolute -top-4 sm:-top-5 left-5 sm:left-7 w-9 h-9 sm:w-11 sm:h-11 bg-kk-teal rounded-full flex items-center justify-center shadow-md text-white group-hover:scale-110 transition-transform">
                <Quote className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
              </div>
              <div className="flex items-center gap-1 mb-3 sm:mb-5 mt-1 sm:mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 mb-5 sm:mb-7 text-xs sm:text-sm lg:text-xs xl:text-sm leading-relaxed">
                "Excellent service! My AC broke down in the middle of summer. KK Multi Services sent a technician the same day, and it was fixed in an hour. Very professional."
              </p>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center font-bold text-slate-500 text-sm sm:text-base">
                  R
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm lg:text-sm">Rahul Sharma</h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-medium">Pune, Maharashtra</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-5 xl:p-8 shadow-sm sm:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-slate-100 relative group hover:-translate-y-1.5 transition-transform duration-300 lg:-translate-y-4">
              <div className="absolute -top-4 sm:-top-5 left-5 sm:left-7 w-9 h-9 sm:w-11 sm:h-11 bg-kk-teal rounded-full flex items-center justify-center shadow-md text-white group-hover:scale-110 transition-transform">
                <Quote className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
              </div>
              <div className="flex items-center gap-1 mb-3 sm:mb-5 mt-1 sm:mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 mb-5 sm:mb-7 text-xs sm:text-sm lg:text-xs xl:text-sm leading-relaxed">
                "Their pricing is very transparent. No hidden charges for spare parts. The technician explained the issue with my washing machine clearly before fixing it."
              </p>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center font-bold text-slate-500 text-sm sm:text-base">
                  P
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm lg:text-sm">Priya Desai</h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-medium">Hinjewadi, Pune</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-5 xl:p-8 shadow-sm sm:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-slate-100 relative group hover:-translate-y-1.5 transition-transform duration-300 md:col-span-2 lg:col-span-1">
              <div className="absolute -top-4 sm:-top-5 left-5 sm:left-7 w-9 h-9 sm:w-11 sm:h-11 bg-kk-teal rounded-full flex items-center justify-center shadow-md text-white group-hover:scale-110 transition-transform">
                <Quote className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
              </div>
              <div className="flex items-center gap-1 mb-3 sm:mb-5 mt-1 sm:mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 mb-5 sm:mb-7 text-xs sm:text-sm lg:text-xs xl:text-sm leading-relaxed">
                "I run a small restaurant and my commercial fridge stopped working. These guys understood the urgency and repaired it immediately. Highly recommend them for businesses!"
              </p>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center font-bold text-slate-500 text-sm sm:text-base">
                  V
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm lg:text-sm">Vikram Singh</h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-medium">Balewadi, Pune</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-14 sm:py-20 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-10 xl:gap-16">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-3 mb-2.5 sm:mb-4">
                <div className="h-0.5 w-7 sm:w-10 bg-kk-teal"></div>
                <h4 className="text-xs sm:text-sm font-bold tracking-wider text-slate-700 uppercase">Contact Us</h4>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-extrabold text-kk-blue leading-[1.2] sm:leading-[1.15] mb-3 sm:mb-5">
                Get In Touch With <br /><span className="text-kk-teal">Our Experts.</span>
              </h2>
              <p className="text-slate-600 text-xs sm:text-base lg:text-lg mb-6 sm:mb-10 leading-relaxed max-w-xl">
                Have a question or need to schedule a repair? Fill out the form, and our team will get back to you promptly.
              </p>

              <div className="space-y-4 sm:space-y-7">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-kk-teal/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-kk-teal" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-base mb-0.5">Call Us Directly</h4>
                    <p className="text-slate-500 text-[11px] sm:text-sm mb-0.5 sm:mb-1">Available 24/7 for emergencies</p>
                    <a href="tel:+917823038645" className="text-kk-blue hover:text-kk-teal text-xs sm:text-base font-bold transition-colors">+91 78230 38645</a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-kk-teal/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-kk-teal" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-base mb-0.5">Email Us</h4>
                    <p className="text-slate-500 text-[11px] sm:text-sm mb-0.5 sm:mb-1">For general queries</p>
                    <a href="mailto:support@kkmulti.com" className="text-kk-blue hover:text-kk-teal text-xs sm:text-base font-bold transition-colors break-all">support@kkmulti.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-kk-teal/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-kk-teal" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-base mb-0.5">Visit Our Office</h4>
                    <p className="text-slate-500 text-[11px] sm:text-sm">123 Repair Street, Sector 45<br />Pune, Maharashtra 411045</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 lg:p-6 xl:p-10 shadow-lg sm:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100">
                <h3 className="text-lg sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Send Us A Message</h3>
                <form className="space-y-3.5 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
                    <div className="space-y-1 sm:space-y-1.5">
                      <label htmlFor="name" className="text-xs sm:text-sm font-bold text-slate-700">Full Name</label>
                      <input type="text" id="name" className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-kk-teal focus:ring-2 focus:ring-kk-teal/20 transition-all bg-slate-50 focus:bg-white text-sm sm:text-base" placeholder="John Doe" />
                    </div>
                    <div className="space-y-1 sm:space-y-1.5">
                      <label htmlFor="phone" className="text-xs sm:text-sm font-bold text-slate-700">Phone Number</label>
                      <input type="tel" id="phone" className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-kk-teal focus:ring-2 focus:ring-kk-teal/20 transition-all bg-slate-50 focus:bg-white text-sm sm:text-base" placeholder="+91 78230 38645" />
                    </div>
                  </div>

                  <div className="space-y-1 sm:space-y-1.5">
                    <label htmlFor="service" className="text-xs sm:text-sm font-bold text-slate-700">Service Required</label>
                    <select id="service" className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-kk-teal focus:ring-2 focus:ring-kk-teal/20 transition-all bg-slate-50 focus:bg-white text-sm sm:text-base text-slate-700">
                      <option value="">Select a service</option>
                      <option value="ac">AC Repair & Service</option>
                      <option value="refrigerator">Refrigerator Repair</option>
                      <option value="washing-machine">Washing Machine Repair</option>
                      <option value="microwave">Microwave Repair</option>
                      <option value="geyser">Geyser Repair</option>
                      <option value="other">Other Appliance</option>
                    </select>
                  </div>

                  <div className="space-y-1 sm:space-y-1.5">
                    <label htmlFor="message" className="text-xs sm:text-sm font-bold text-slate-700">Your Message</label>
                    <textarea id="message" rows={4} className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-kk-teal focus:ring-2 focus:ring-kk-teal/20 transition-all bg-slate-50 focus:bg-white resize-none text-sm sm:text-base" placeholder="Describe the issue you are facing..."></textarea>
                  </div>

                  <button type="button" className="w-full bg-kk-blue hover:bg-kk-blue-light text-white font-bold py-3 sm:py-3.5 lg:py-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 active:scale-[0.99] text-xs sm:text-base">
                    Send Request <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-kk-blue text-white py-10 sm:py-16 relative overflow-hidden">
        {/* Abstract Wrench watermark */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
          <Wrench className="w-[260px] sm:w-[500px] h-[260px] sm:h-[500px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-10 text-center md:text-left">
            <div>
              <h4 className="text-kk-teal-light font-bold text-[11px] sm:text-sm tracking-widest uppercase mb-1.5 sm:mb-2">Need Appliance Repair?</h4>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2.5 sm:mb-4 leading-tight">Get Fast & Reliable Service Today!</h2>
              <p className="text-slate-300 text-xs sm:text-base lg:text-lg">Book a service request now and let our experts take care of the rest.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-4 shrink-0 w-full md:w-auto">
              <OpenBookingButton className="bg-kk-teal hover:bg-kk-teal-light text-white px-5 sm:px-8 py-3 sm:py-3.5 lg:py-4 rounded-xl sm:rounded-md font-bold transition-all flex items-center justify-center gap-2 shadow-md active:scale-95 text-xs sm:text-base cursor-pointer">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" /> Book a Service
              </OpenBookingButton>
              <a href="tel:+917823038645" className="bg-white/10 border border-white/30 hover:bg-white/20 text-white px-5 sm:px-8 py-3 sm:py-3.5 lg:py-4 rounded-xl sm:rounded-md font-bold transition-all flex items-center justify-center gap-2 backdrop-blur-xs active:scale-95 text-xs sm:text-base">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-kk-teal-light" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

``n
## About Page
**File:** "c:\Users\MY\Downloads\kk-multi-services_02\src\app\about\page.tsx"

`	sx
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
  Zap,
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
  Calendar
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
      icon: <ThumbsUp className="w-7 h-7 text-kk-teal" />,
      badgeColor: "bg-kk-teal/10 text-kk-teal"
    },
    {
      title: "Affordable Price",
      desc: "We Provide Cost Effective Solution For You",
      icon: <Tag className="w-7 h-7 text-kk-blue" />,
      badgeColor: "bg-kk-blue/10 text-kk-blue"
    },
    {
      title: "Expert Technician",
      desc: "Provide you the high quality work that meets your expectation",
      icon: <Wrench className="w-7 h-7 text-kk-red" />,
      badgeColor: "bg-kk-red/10 text-kk-red"
    },
    {
      title: "Support Centre",
      desc: "90 Days KK Multi Services Spare Parts warranty on replacement",
      icon: <Headphones className="w-7 h-7 text-amber-500" />,
      badgeColor: "bg-amber-500/10 text-amber-600"
    }
  ];

  const whatYouGet = [
    "Skilled technicians",
    "Get services at affordable prices",
    "Up fronting prices before any work begins so there are no surprise on your final bill",
    "100% cashback guarantee",
    "Warranty on repaired / installed part",
    "No need of technician for minute repair; can be solved by on call only",
    "The team offers proper assistance and suggests regular servicing tips to increase the life of your appliance"
  ];

  const coreServices = [
    {
      title: "Installation",
      desc: "Our technicians are experts in every installation of various home appliances. Every brand needs an expert with specific knowledge.",
      icon: <Settings className="w-8 h-8 text-kk-teal" />
    },
    {
      title: "Repairs",
      desc: "Our warranty plans will secure your devices from defects and failures year after year. We offer all kind of electric services.",
      icon: <Wrench className="w-8 h-8 text-kk-red" />
    },
    {
      title: "Maintenance",
      desc: "We are an experts in Electronics repairing. Don't panic when your device is not working, we are waiting for your call with our best technicians to help you for your daily needs.",
      icon: <ShieldCheck className="w-8 h-8 text-kk-blue" />
    }
  ];

  const workflowSteps = [
    {
      num: "01",
      title: "Booking Online",
      desc: "Select your appliance & problem online or call us directly. Schedule a visit time that fits your day.",
      icon: <CalendarCheck className="w-6 h-6 text-kk-teal" />
    },
    {
      num: "02",
      title: "Discuss Budget",
      desc: "We offer an upfront, transparent price quote before any work begins with zero hidden charges.",
      icon: <BadgeDollarSign className="w-6 h-6 text-kk-blue" />
    },
    {
      num: "03",
      title: "Get Confirmation",
      desc: "Uniformed technician is dispatched with genuine spares and arrives punctually at your doorstep.",
      icon: <CheckCircle className="w-6 h-6 text-kk-red" />
    },
    {
      num: "04",
      title: "Happy Services",
      desc: "Flawless repair testing run, 90-day parts warranty card, and post-service maintenance tips.",
      icon: <Smile className="w-6 h-6 text-amber-500" />
    }
  ];

  const metrics = [
    { label: "Repair Quality", value: 90, color: "from-kk-teal to-teal-400" },
    { label: "Happy Customer", value: 80, color: "from-kk-blue to-blue-500" },
    { label: "Support Centre", value: 90, color: "from-kk-red to-orange-500" }
  ];

  return (
    <main id="top" className="min-h-screen font-sans bg-slate-50 text-slate-900 flex flex-col selection:bg-kk-teal selection:text-white">
      {/* Top Header Bar */}
      <TopBar />

      {/* Sticky Navbar */}
      <Navbar />

      {/* Hero Header */}
      <section
        className="relative bg-kk-blue text-white w-full min-h-[460px] md:min-h-[400px] lg:min-h-[380px] xl:min-h-[420px] py-6 sm:py-8 lg:py-10 flex items-center overflow-hidden border-b border-white/10"
      >
        {/* Ambient background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-kk-teal/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 left-10 w-80 h-80 bg-kk-red/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* Breadcrumb & Service Scope Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3 sm:mb-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-kk-teal" />
              <span className="text-kk-teal">About Us</span>
            </div>

            {/* Quick Service Links */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-[11px] sm:text-xs font-bold text-white transition-colors backdrop-blur-sm"
              >
                <Home className="w-3 h-3 text-kk-teal" />
                <span>Residential Services</span>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-[11px] sm:text-xs font-bold text-white transition-colors backdrop-blur-sm"
              >
                <Building className="w-3 h-3 text-cyan-300" />
                <span>Commercial Services</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white/10 border border-white/15 text-[11px] sm:text-xs font-bold text-kk-teal mb-2 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-kk-teal" />
                <span>KK Multi Services â€¢ Pune</span>
              </div>

              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] xl:text-[38px] font-black text-white tracking-tight leading-[1.15] mb-2 sm:mb-2.5">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-kk-teal to-teal-300">KK Multi Services</span>
              </h1>

              <p className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed mb-2">
                Contact us if your valuable appliances at home or at work aren&apos;t working properly. We&apos;re here to supply you with high-quality, low-cost services that fit into your schedule. We&apos;ll be there for you whenever you need us!
              </p>

              <p className="text-xs sm:text-xs text-slate-300 leading-relaxed mb-4">
                Our techs are all friendly and will arrive in uniform with upfront price quotes before any work begins.
              </p>

              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <Link
                  href="/contact"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-kk-teal hover:bg-kk-teal-light text-white font-bold text-xs sm:text-sm shadow-lg hover:shadow-kk-teal/30 hover:-translate-y-0.5 transition-all flex items-center gap-2 active:scale-95"
                >
                  <span>Contact Now</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>
                <a
                  href="tel:+917823038645"
                  className="px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm transition-all flex items-center gap-2 backdrop-blur-sm"
                >
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-kk-teal" />
                  <span>Call: +91 78230 38645</span>
                </a>
              </div>
            </div>

            {/* Right Video Showcase Card (5 Cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 aspect-[16/9] max-h-[220px] lg:max-h-[240px] xl:max-h-[260px] bg-slate-900 group">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  poster="/images/about_ac_repair_1789636581927.jpg"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                >
                  <source src="/about_hero.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Floating Live Working Badge */}
                <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/15 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">Live On-Site Action</span>
                </div>

                <div className="absolute bottom-2.5 left-3 right-3 text-white">
                  <div className="flex items-center gap-1.5 text-kk-teal text-xs font-bold uppercase tracking-wider mb-0.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-kk-teal" />
                    <span>Over 10 Years&apos; Experience</span>
                  </div>
                  <p className="text-[11px] text-slate-200 font-medium line-clamp-1">
                    Delivering verified doorstep appliance diagnostics across Pune &amp; PCMC.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Brand Compatibility Double Marquee Slider */}
      <section className="py-12 sm:py-16 bg-slate-100/70 border-b border-slate-200/90 overflow-hidden relative w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8 sm:mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-kk-teal block mb-2">
            100% GENUINE OEM SPARES
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-kk-blue tracking-tight">
            Factory-Compliant Diagnosis Across All Brands
          </h2>
        </div>

        {/* Gradient edge overlays for smooth fade effect */}
        <div className="relative w-full overflow-hidden space-y-4 sm:space-y-5">
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-slate-100/95 via-slate-100/70 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-slate-100/95 via-slate-100/70 to-transparent z-10 pointer-events-none" />

          {/* Top Marquee Slider: Left to Right */}
          <div className="flex overflow-hidden select-none">
            <div className="animate-marquee-right flex items-center">
              {[...brandLogos, ...brandLogos].map((brand, idx) => (
                <div
                  key={`top-${brand.name}-${idx}`}
                  className="h-16 sm:h-20 w-36 sm:w-44 px-4 py-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-kk-teal/50 hover:scale-105 transition-all duration-300 flex items-center justify-center shrink-0 mx-2 sm:mx-3 cursor-pointer group"
                  title={brand.name}
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={brand.src}
                      alt={`${brand.name} Logo`}
                      width={130}
                      height={50}
                      className="max-h-9 sm:max-h-11 w-auto max-w-[85%] object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
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
                  className="h-16 sm:h-20 w-36 sm:w-44 px-4 py-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-kk-teal/50 hover:scale-105 transition-all duration-300 flex items-center justify-center shrink-0 mx-2 sm:mx-3 cursor-pointer group"
                  title={brand.name}
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={brand.src}
                      alt={`${brand.name} Logo`}
                      width={130}
                      height={50}
                      className="max-h-9 sm:max-h-11 w-auto max-w-[85%] object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AMC / CMC Maintenance Contracts Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-50 overflow-hidden border-b border-slate-200/90">
        {/* Background Image: AMC_CMC_Section.png */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/images/about_us/AMC_CMC_Section.png"
            alt="AMC and CMC Maintenance Services Background"
            fill
            className="object-cover object-right lg:object-center"
            priority
          />
          {/* Subtle mobile/tablet readability overlay on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent lg:hidden" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 sm:space-y-10 lg:space-y-12">
          {/* Top Row: Left Content & Right Appliances Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-teal-50/90 border border-teal-200/80 text-kk-teal text-[11px] sm:text-xs font-black uppercase tracking-wider backdrop-blur-xs">
                <Settings className="w-3.5 h-3.5 text-kk-teal" />
                <span>ANNUAL & COMPREHENSIVE MAINTENANCE SERVICES</span>
              </div>

              {/* Headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-[40px] font-black text-kk-blue tracking-tight leading-[1.18]">
                AMC (Annual <span className="text-kk-teal">Maintenance</span><br />
                Contract) / CMC (Comprehensive<br />
                <span className="text-kk-teal">Maintenance Contract</span>) Services
              </h2>

              {/* Description */}
              <p className="text-xs sm:text-sm lg:text-[15px] text-slate-700 leading-relaxed font-normal max-w-2xl">
                We undertake <strong>AMC (Annual Maintenance Contract)</strong> and <strong>CMC (Comprehensive Maintenance Contract)</strong> services for Air Conditioners (AC), Refrigerators (Fridge), Washing Machines, Microwave Ovens, Electric Geysers, Water Heaters, and Water Purifiers (Aquaguard) for all major brands across Pune, Maharashtra. Safeguarding your appliances and keeping them in top operating condition is our highest priority.
              </p>

              {/* 4 Feature Pills Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-1 sm:pt-2 max-w-xl">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div className="text-xs font-bold text-slate-900 leading-tight">
                    All Major<br /><span className="text-slate-500 font-normal">Brands</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <Wrench className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div className="text-xs font-bold text-slate-900 leading-tight">
                    Expert<br /><span className="text-slate-500 font-normal">Technicians</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center shrink-0">
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div className="text-xs font-bold text-slate-900 leading-tight">
                    Quick<br /><span className="text-slate-500 font-normal">Response</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                    <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div className="text-xs font-bold text-slate-900 leading-tight">
                    Genuine<br /><span className="text-slate-500 font-normal">Spare Parts</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Spacer so the background appliances graphic displays cleanly */}
            <div className="hidden lg:block lg:col-span-5 min-h-[220px]" />
          </div>

          {/* Bottom Row: 3 Columns (AMC Card, CMC Card, 3 Stacked Stat Cards) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 xl:gap-6 items-stretch">
            {/* Column 1: AMC Card (5 Cols) */}
            <div className="lg:col-span-5 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-5 xl:p-7 border border-slate-200 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 sm:gap-3.5 mb-3.5 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-kk-blue text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-kk-blue">
                    AMC â€” Annual<br />Maintenance Contract
                  </h3>
                </div>

                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-4 sm:mb-5">
                  <strong>AMC</strong> refers to <strong>Annual Maintenance Contract</strong>. Under an AMC, clients avail scheduled routine health check-ups (3 to 4 visits/year) including deep pressure wet-jet pump cleaning, condenser and coil inspection, thermostat check, and piping safety.
                </p>

                {/* 2-Column Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 pt-2 border-t border-slate-100 text-xs text-slate-700 font-medium">
                  <div className="space-y-2 sm:space-y-2.5">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-500 shrink-0" />
                      <span>Scheduled service visits (3â€“4 per year)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-500 shrink-0" />
                      <span>Deep cleaning & performance check</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-500 shrink-0" />
                      <span>Covers all labor charges</span>
                    </div>
                  </div>

                  <div className="space-y-2 sm:space-y-2.5">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-500 shrink-0" />
                      <span>Zero inspection fees</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-500 shrink-0" />
                      <span>Contract period: 1 to 5 years</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: CMC Card (4 Cols) */}
            <div className="lg:col-span-4 bg-[#edfbf9] rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-5 xl:p-7 border border-teal-200 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 sm:gap-3.5 mb-3.5 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-kk-teal text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-kk-blue">
                    CMC â€” Comprehensive<br />Maintenance Contract
                  </h3>
                </div>

                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed mb-4 sm:mb-5">
                  <strong>CMC</strong> refers to <strong>Comprehensive Maintenance Contract</strong>. A CMC provides 360Â° total protection covering all scheduled services, unlimited complaint resolutions, plus complete coverage for spare parts, electric parts, and compressor replacement.
                </p>

                {/* 1-Column Checklist */}
                <div className="space-y-2 pt-2 border-t border-teal-100 text-xs text-slate-800 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                    <span>Complete coverage (labor + spare parts + electric parts)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                    <span>Unlimited service visits & complaint resolutions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                    <span>Compressor replacement included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                    <span><strong>100% free</strong> refrigerant gas charging</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                    <span>Zero surprise repair bills for the entire contract year</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: 3 Stacked Stat Cards (3 Cols) */}
            <div className="lg:col-span-3 flex flex-col justify-between gap-3 sm:gap-3.5">
              {/* Stat 1 */}
              <div className="bg-emerald-50/80 border border-emerald-100 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 lg:p-3 xl:p-5 flex items-center gap-3 sm:gap-3.5 shadow-xs flex-1">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-emerald-100/90 text-emerald-700 flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-lg sm:text-2xl font-black text-slate-900 leading-tight">20K+</div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium leading-tight">Happy Customers</div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="bg-blue-50/80 border border-blue-100 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 lg:p-3 xl:p-5 flex items-center gap-3 sm:gap-3.5 shadow-xs flex-1">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-blue-100/90 text-blue-700 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-lg sm:text-2xl font-black text-slate-900 leading-tight">9+</div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium leading-tight">Years of Experience</div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="bg-orange-50/80 border border-orange-100 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 lg:p-3 xl:p-5 flex items-center gap-3 sm:gap-3.5 shadow-xs flex-1">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-orange-100/90 text-orange-700 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-lg sm:text-2xl font-black text-slate-900 leading-tight">100%</div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium leading-tight">Service Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2 w-full sm:w-auto">
            <Link
              href="/amc"
              className="px-5 sm:px-7 py-3 sm:py-3.5 rounded-full bg-kk-teal hover:bg-kk-teal-light text-white font-bold text-xs sm:text-sm shadow-lg shadow-kk-teal/25 flex items-center justify-center gap-2.5 transition-all hover:-translate-y-0.5 active:scale-95 text-center"
            >
              <span>View Full AMC / CMC Plans</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/enquire"
              className="px-5 sm:px-7 py-3 sm:py-3.5 rounded-full bg-kk-blue hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2.5 transition-all hover:-translate-y-0.5 active:scale-95 text-center"
            >
              <Calendar className="w-4 h-4 text-slate-300" />
              <span>Book Maintenance Contract</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4 Core Value Pillars */}
      <section className="py-6 pb-14 sm:pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {coreBenefits.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-5 sm:p-6 lg:p-5 xl:p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-kk-teal/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${item.badgeColor} flex items-center justify-center mb-4 sm:mb-5`}>
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Home Appliances Repair Services All Brands (3 Pillars) */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-slate-200/80">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-kk-teal block mb-2">
            Installation â€¢ Repairs â€¢ Maintenance
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-kk-blue tracking-tight">
            Home Appliances Repair Services All Brands
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-6 xl:gap-8">
          {coreServices.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 lg:p-6 xl:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-kk-teal/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-kk-blue mb-2.5 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Making technology again working for you (4-step workflow) */}
      <section className="py-12 sm:py-16 md:py-20 bg-kk-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-kk-teal block mb-2">
              Simple 4-Step Process
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
              Making Technology Again Working For You
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {workflowSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-3xl p-5 sm:p-6 lg:p-5 xl:p-6 backdrop-blur-sm hover:bg-white/10 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <span className="text-2xl font-black text-kk-teal">{step.num}</span>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/10 flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fastest Modern Repair Service in Town + Progress Metrics */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 lg:p-10 xl:p-12 border border-slate-200/90 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
            {/* Left side text */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-kk-teal block">
                Top Rated in Pune
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-kk-blue tracking-tight">
                Fastest Modern Repair Service in Town
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
                We provide reliable repair services for Washing Machines, Refrigerators, Air Conditioners, Microwave Ovens. For more than ten years, K K Multi Services has made houses more comfortable and appealing.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
                Refrigeration Home Services also handles specialist commercial and domestic home appliances, such as refrigerators, washing machines, air conditioners, and microwave geysers, so we can freshen your home with a simple adjustment. We also offer free in-home consultations, a project coordinator that oversees all phases of the process, and a satisfaction guarantee.
              </p>
            </div>

            {/* Right side stats */}
            <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-5 sm:p-6 lg:p-6 xl:p-7 border border-slate-200 space-y-5 sm:space-y-6">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Performance Benchmarks
              </h3>

              {metrics.map((metric, idx) => (
                <div key={idx} className="space-y-1.5 sm:space-y-2">
                  <div className="flex justify-between items-center text-xs sm:text-sm font-bold text-slate-800">
                    <span>{metric.label}</span>
                    <span className="text-kk-teal font-extrabold">{metric.value}%</span>
                  </div>
                  <div className="h-2.5 sm:h-3 w-full bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${metric.color} transition-all duration-1000`}
                      style={{ width: `${metric.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why KK Multiservices & What You Will Get */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-50 overflow-hidden border-y border-slate-200/80">
        {/* Background Image: why_bg_img.png */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/images/about_us/why_bg_img.png"
            alt="Why Choose KK Multi Services Background"
            fill
            className="object-cover object-right lg:object-center"
            priority
          />
          {/* Subtle mobile/tablet readability overlay on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent lg:hidden" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-center">
            {/* Left Column: Heading, description, buttons, bottom stats (7 Cols) */}
            <div className="lg:col-span-7 xl:col-span-7 space-y-5 sm:space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-kk-teal/30 text-kk-teal text-xs font-bold uppercase tracking-wider shadow-xs backdrop-blur-sm">
                <Star className="w-3.5 h-3.5 fill-kk-teal text-kk-teal" />
                <span>The Trusted Choice</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-black text-kk-blue tracking-tight leading-[1.15]">
                Why KK <span className="text-kk-teal">Multiservices ?</span>
              </h2>

              {/* Paragraphs */}
              <p className="text-xs sm:text-sm md:text-[15px] text-slate-700 leading-relaxed font-normal max-w-xl">
                KK Multiservices makes the services easily available by saving your money and time, by connecting it with the experts. You get all sorts of repairing done by the engineers.
              </p>
              <p className="text-xs sm:text-sm md:text-[15px] text-slate-700 leading-relaxed font-normal max-w-xl">
                When you call us to report a faulty appliance, you will be speaking to our friendly office team who have knowledge about handling appliance emergencies. Our technicians carry spare parts which allows them to get your appliance fixed fast and securely. The technicians chosen are well qualified to deliver the most satisfactory service at your doorstep.
              </p>

              {/* Action Buttons Row */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-5 pt-2">
                <Link
                  href="/enquire"
                  className="w-full sm:w-auto justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-kk-teal hover:bg-kk-teal-light text-white font-bold text-xs sm:text-sm shadow-lg shadow-kk-teal/30 flex items-center gap-3 transition-all hover:-translate-y-0.5 active:scale-95 group text-center"
                >
                  <span>Book Doorstep Visit</span>
                  <span className="w-6 h-6 rounded-full bg-white text-kk-teal flex items-center justify-center font-bold text-xs group-hover:translate-x-0.5 transition-transform shrink-0">
                    <ArrowRight className="w-3.5 h-3.5 text-kk-teal" />
                  </span>
                </Link>

                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center sm:justify-start gap-3 group cursor-pointer"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white shadow-md border border-slate-200/80 flex items-center justify-center text-kk-teal group-hover:scale-105 group-hover:border-kk-teal/50 transition-all shrink-0">
                    <Play className="w-4 h-4 fill-kk-teal text-kk-teal ml-0.5" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-kk-teal transition-colors">How It Works</span>
                    <span className="text-[11px] sm:text-xs text-slate-500 font-medium">Watch Our Process</span>
                  </div>
                </a>
              </div>

              {/* Bottom 4 Benchmarks Row */}
              <div className="pt-5 sm:pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-cyan-50 border border-cyan-100 text-cyan-600 flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base lg:text-lg font-black text-slate-900 leading-tight">20K+</div>
                    <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight">Happy Customers</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-teal-50 border border-teal-100 text-teal-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base lg:text-lg font-black text-slate-900 leading-tight">98%</div>
                    <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight">Service Success</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base lg:text-lg font-black text-slate-900 leading-tight">9+</div>
                    <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight">Years of Experience</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-emerald-600" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base lg:text-lg font-black text-slate-900 leading-tight">4.8/5</div>
                    <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight">Customer Rating</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: "What You Will Get" floating card (5 Cols) */}
            <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end w-full">
              <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-2xl border border-slate-200/90 relative z-20 max-w-md w-full">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-kk-blue mb-3 sm:mb-4 pb-2.5 sm:pb-3 border-b border-slate-100 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-kk-teal" />
                  <span>What You <span className="text-kk-teal">Will Get</span></span>
                </h3>

                <div className="divide-y divide-slate-100">
                  {/* 1. Skilled Technicians */}
                  <div className="py-2 sm:py-2.5 first:pt-0 last:pb-0 flex items-start gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-cyan-50 border border-cyan-100/70 text-cyan-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">Skilled Technicians</h4>
                      <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-snug">Trained and experienced professionals</p>
                    </div>
                  </div>

                  {/* 2. Affordable Prices */}
                  <div className="py-2 sm:py-2.5 first:pt-0 last:pb-0 flex items-start gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-50 border border-blue-100/70 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Tag className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">Affordable Prices</h4>
                      <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-snug">Get services at genuine and transparent prices</p>
                    </div>
                  </div>

                  {/* 3. Upfront Pricing */}
                  <div className="py-2 sm:py-2.5 first:pt-0 last:pb-0 flex items-start gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-amber-50 border border-amber-100/70 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                      <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">Upfront Pricing</h4>
                      <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-snug">No surprise charges, know the cost before work begins</p>
                    </div>
                  </div>

                  {/* 4. 100% Cashback Guarantee */}
                  <div className="py-2 sm:py-2.5 first:pt-0 last:pb-0 flex items-start gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-50 border border-emerald-100/70 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">100% Cashback Guarantee</h4>
                      <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-snug">Your satisfaction is our priority</p>
                    </div>
                  </div>

                  {/* 5. Warranty on Repaired / Installed Part */}
                  <div className="py-2 sm:py-2.5 first:pt-0 last:pb-0 flex items-start gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-purple-50 border border-purple-100/70 text-purple-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Wrench className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">Warranty on Repaired / Installed Part</h4>
                      <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-snug">Genuine parts with warranty</p>
                    </div>
                  </div>

                  {/* 6. On-Call Support */}
                  <div className="py-2 sm:py-2.5 first:pt-0 last:pb-0 flex items-start gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-rose-50 border border-rose-100/70 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                      <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">On-Call Support</h4>
                      <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-snug">No need to wait for a technician, many issues can be solved over a call</p>
                    </div>
                  </div>

                  {/* 7. Expert Guidance */}
                  <div className="py-2 sm:py-2.5 first:pt-0 last:pb-0 flex items-start gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-amber-50 border border-amber-100/70 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Settings className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">Expert Guidance</h4>
                      <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-snug">We also suggest regular servicing tips to increase your appliance&apos;s life</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Call-To-Action */}
      <section className="py-10 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-gradient-to-r from-kk-blue via-kk-blue-light to-kk-dark text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 border border-white/10">
          <div className="absolute top-0 right-0 w-80 h-80 bg-kk-teal/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-xl text-center md:text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kk-teal/20 text-kk-teal border border-kk-teal/30 text-xs font-bold mb-3 sm:mb-4 uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5" /> Book Your Doorstep Visit
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-2 sm:mb-3">
              Experience Hassle-Free Appliance Repair
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-slate-300">
              Get an expert technician at your door in 90 minutes. No advance payment required.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-3 sm:gap-3.5 shrink-0 w-full md:w-auto">
            <Link
              href="/enquire"
              className="w-full sm:w-auto px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl bg-kk-teal hover:bg-kk-teal-light text-white font-bold text-xs sm:text-sm transition-all shadow-lg flex items-center justify-center gap-2 text-center"
            >
              <span>Book Service Online</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+917823038645"
              className="w-full sm:w-auto px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl bg-white hover:bg-slate-100 text-kk-blue font-bold text-xs sm:text-sm transition-all shadow-lg flex items-center justify-center gap-2 text-center"
            >
              <Phone className="w-4 h-4 text-kk-red" />
              <span>Call +91 78230 38645</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

``n
## AMC Page
**File:** "c:\Users\MY\Downloads\kk-multi-services_02\src\app\amc\page.tsx"

`	sx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Phone,
  ArrowRight,
  Sparkles,
  FileCheck2,
  ChevronRight,
  Check,
  AlertCircle,
  Shield,
  Layers,
  Zap,
  Settings,
  Headphones,
  Calendar,
  MapPin,
  CircleDollarSign,
  ClipboardCheck,
  Ban
} from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AMC & CMC Maintenance Contracts in Pune | AC & Home Appliances | KK Multi Services",
  description: "Annual Maintenance Contract (AMC) & Comprehensive Maintenance Contract (CMC) Services for AC, Refrigerator, Washing Machine, Microwave, Geysers and Water Purifiers in Pune.",
  keywords: "AMC AC Pune, CMC AC Pune, Annual Maintenance Contract Pune, Comprehensive Maintenance Contract appliances Pune, AC AMC PCMC, Pune home appliance contract"
};

export default function AmcPage() {
  const amcBenefits = [
    { code: "A", title: "Peak Energy Efficiency", desc: "Maintains optimal cooling performance and airflow while reducing power draw." },
    { code: "B", title: "Scheduled Routine Servicing", desc: "Periodic tune-ups prevent unexpected breakdown emergencies during peak season." },
    { code: "C", title: "Lower Electricity Bills", desc: "Clean coils, tuned motors, and balanced pressure reduce monthly power bills." },
    { code: "D", title: "Spare Part Discounts", desc: "Exclusive member-only discounts on all genuine replacement spare parts." },
    { code: "E", title: "Customizable 1â€“5+ Yr Plans", desc: "Flexible contracts tailored to your exact appliance count, brand, and usage." },
  ];

  const amcIncludes = [
    { code: "1", text: "4 Scheduled Routine Services per Year (Wet & Jet Wash)" },
    { code: "2", text: "Unlimited Breakdown Attendance with â‚¹0 Technician Visit Fees" },
    { code: "3", text: "Refrigerant Operating Pressure & Ampere Diagnostic Checks" },
    { code: "4", text: "Thermostat, Electrical Wiring & Operating Health Inspection" }
  ];

  const amcExcludes = [
    { code: "â€¢", text: "Refrigerant Gas Charging" },
    { code: "â€¢", text: "Compressor Replacement" },
    { code: "â€¢", text: "Fan Motor & Capacitor" },
    { code: "â€¢", text: "Cooling & Condenser Coils" },
    { code: "â€¢", text: "Electronic PCB Board" },
    { code: "â€¢", text: "Plastic Body & Air Filter" }
  ];

  const cmcIncludes = [
    { code: "1", text: "4 Comprehensive Routine Servicing Visits per Year" },
    { code: "2", text: "Priority Breakdown Attendance with â‚¹0 Visiting Charge" },
    { code: "3", text: "100% Free Refrigerant Gas Charging & Leak Fixing" },
    { code: "4", text: "Compressor Replacement Covered at Zero Extra Cost" },
    { code: "5", text: "Fan Motor, Capacitor & Electrical Relay Covered" },
    { code: "6", text: "Electronic PCB Board Repair or Replacement Covered" },
    { code: "7", text: "Deep Jet Wash & Chemical Coil Servicing Included" }
  ];

  const cmcExcludes = [
    { code: "â€¢", text: "External Voltage Stabilizer" },
    { code: "â€¢", text: "Physical Plastic Body Damage" },
    { code: "â€¢", text: "External Sheet Metal & Ducting" },
    { code: "â€¢", text: "Tampered or Relocated Units" }
  ];

  const amcVsCmc = [
    {
      feature: "Routine Preventive Services",
      amc: "3 to 4 Wet/Dry Cleans / Year",
      cmc: "4 Comprehensive Services / Year"
    },
    {
      feature: "Labor & Breakdown Visit Charges",
      amc: "100% Free & Unlimited",
      cmc: "100% Free & Unlimited"
    },
    {
      feature: "Minor Electrical Parts (Capacitor/Relay)",
      amc: "Charged at discounted rates",
      cmc: "100% Included & Free"
    },
    {
      feature: "Refrigerant Gas Charging (AC/Fridge)",
      amc: "Discounted spare rates",
      cmc: "100% Covered at No Cost"
    },
    {
      feature: "Compressor Replacement Coverage",
      amc: "Labor free (part charged)",
      cmc: "Full Part & Labor Covered"
    },
    {
      feature: "Emergency Response Priority",
      amc: "Guaranteed within 4â€“6 Hours",
      cmc: "VIP Priority: within 2â€“4 Hours"
    },
    {
      feature: "Ideal For",
      amc: "Appliances under 4 years old",
      cmc: "Appliances 3+ years old & heavy usage"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-kk-teal selection:text-white">
      <TopBar />
      <Navbar />

      {/* Main Header / Hero Section - Fully Responsive for Mobile & Laptops */}
      <section className="relative bg-[#07132b] text-white w-full min-h-[460px] md:min-h-[400px] lg:min-h-[380px] xl:min-h-[420px] py-8 sm:py-10 md:py-8 lg:py-10 flex items-center overflow-hidden border-b border-white/10">
        {/* Background Image (Clean visual without baked-in text) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/amc_cmc/hero_02.png"
            alt="AMC & CMC Services in Pune - KK Multi Services"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right md:object-center"
          />
          {/* Subtle text contrast gradient on the left half */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#030a18]/95 via-[#030a18]/85 md:via-[#030a18]/70 lg:via-[#030a18]/60 to-transparent pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10 flex items-center justify-between">
          <div className="max-w-2xl lg:max-w-3xl">
            {/* Breadcrumb inside Hero Section */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-kk-teal shrink-0" />
              <span className="text-kk-teal">AMC / CMC Services</span>
            </div>

            {/* Top Location Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[10px] sm:text-xs font-bold text-white mb-2.5 backdrop-blur-md shadow-sm max-w-full">
              <MapPin className="w-3.5 h-3.5 text-kk-teal shrink-0" />
              <span className="truncate sm:overflow-visible sm:whitespace-normal">Pune, Maharashtra, India â€” Customers from Pune ONLY</span>
            </div>

            {/* Headline matching image */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] xl:text-[36px] font-black text-white tracking-tight leading-[1.2] mb-3.5 sm:mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              <span className="text-kk-teal">AMC</span> (Annual Maintenance Contract) / <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-kk-teal via-cyan-300 to-white">
                CMC (Comprehensive Maintenance Contract)
              </span> Services
            </h1>

            {/* 4 Feature Pills matching image */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4 sm:mb-5 max-w-xl">
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md shadow-sm">
                <div className="w-5 h-5 rounded-full bg-kk-teal/30 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-3 h-3 text-cyan-300" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold text-white leading-tight">Expert Technicians</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md shadow-sm">
                <div className="w-5 h-5 rounded-full bg-kk-teal/30 flex items-center justify-center shrink-0">
                  <Settings className="w-3 h-3 text-cyan-300" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold text-white leading-tight">Genuine Spare Parts</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md shadow-sm">
                <div className="w-5 h-5 rounded-full bg-kk-teal/30 flex items-center justify-center shrink-0">
                  <Zap className="w-3 h-3 text-cyan-300" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold text-white leading-tight">Quick Response</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md shadow-sm">
                <div className="w-5 h-5 rounded-full bg-kk-teal/30 flex items-center justify-center shrink-0">
                  <Headphones className="w-3 h-3 text-cyan-300" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold text-white leading-tight">Pune Based Support</span>
              </div>
            </div>

            {/* 2 CTA Buttons matching image */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
              <Link
                href="/enquire"
                className="bg-gradient-to-r from-kk-teal to-cyan-400 hover:from-kk-teal-light hover:to-cyan-300 text-slate-950 px-5 sm:px-6 py-2.5 sm:py-3 rounded-2xl font-black text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(0,169,157,0.5)] hover:shadow-[0_0_28px_rgba(0,169,157,0.8)] hover:-translate-y-0.5 flex items-center justify-center gap-2 active:scale-95 text-center"
              >
                <Calendar className="w-4 h-4 text-slate-950 shrink-0" />
                <span>Click Here for Online Service Booking</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
              <a
                href="tel:+917823038645"
                className="bg-black/40 hover:bg-black/60 text-white border border-white/20 hover:border-kk-teal/50 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 backdrop-blur-md active:scale-95 text-center"
              >
                <Phone className="w-4 h-4 text-cyan-300 shrink-0" />
                <span>Call Hotline</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Quick Action Buttons (visible on small mobile screens for easy touch) */}
      <div className="sm:hidden bg-[#07132b] px-4 py-3 border-b border-white/10 flex items-center gap-2">
        <Link
          href="/enquire"
          className="flex-1 py-2.5 px-3 rounded-xl bg-kk-teal text-white text-xs font-bold text-center shadow-md active:scale-95 flex items-center justify-center gap-1.5"
        >
          <span>Book AMC / CMC Online</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <a
          href="tel:+917823038645"
          className="py-2.5 px-3 rounded-xl bg-white/10 text-white text-xs font-bold border border-white/20 active:scale-95 flex items-center justify-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5 text-kk-teal" />
          <span>Call Hotline</span>
        </a>
      </div>

      {/* SECTION 1: AMC (Annual Maintenance Contract) Services */}
      <section id="amc-services" className="relative py-12 sm:py-16 md:py-20 w-full overflow-hidden border-b border-slate-200">
        {/* Background Image: AMC_BG_01.png with soft blue waves and AC unit */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/amc_cmc/AMC_BG_02.png"
            alt="AMC Background Air Conditioner"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top md:object-center"
          />
        </div>

        {/* Content Container - Utilizing Complete Page Space */}
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10 flex flex-col gap-6 sm:gap-7">
          {/* Top Section Header */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-slate-800 text-[11px] sm:text-xs font-black uppercase tracking-wider mb-2.5 border border-sky-200 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
              <span>STANDARD PREVENTIVE CARE &nbsp;â€¢&nbsp; 1 TO 5+ YEARS TENURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0a1e42] tracking-tight">
              AMC (Annual Maintenance Contract) <span className="text-[#0284c7]">Services</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-2 max-w-2xl mx-auto">
              Regular maintenance, comprehensive checkups, deep cleaning, and priority breakdown attendance to ensure optimal appliance performance across Pune.
            </p>
          </div>

          {/* Top Row: Visual Card (Left) & Service Overview + Key Benefits (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7 items-stretch">
            {/* Left Column: Visual Image with Floating Badges and Bottom Bar */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="bg-white/90 p-2 sm:p-2.5 rounded-3xl border border-white/80 shadow-md relative overflow-hidden h-full flex flex-col justify-between group">
                <div className="relative aspect-[4/3] sm:aspect-[4/3.2] lg:aspect-auto lg:h-full min-h-[300px] sm:min-h-[360px] rounded-2xl overflow-hidden shadow-inner bg-slate-100">
                  <Image
                    src="/images/amc_cmc/amc_section_img.png"
                    alt="Professional technician inspecting and servicing air conditioner"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  {/* Bottom shadow for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Top-Left Floating Badge */}
                  <div className="absolute top-3.5 left-3.5 bg-[#0f4350]/90 backdrop-blur-md text-white rounded-xl p-2 sm:p-2.5 border border-teal-400/30 flex items-center gap-2 shadow-lg">
                    <div className="w-7 h-7 rounded-lg bg-teal-500/20 border border-teal-400/40 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4 text-cyan-300" />
                    </div>
                    <div>
                      <p className="text-[11px] sm:text-xs font-black leading-tight">Professional</p>
                      <p className="text-[10px] sm:text-[11px] font-bold text-teal-100 leading-tight">AC Technicians</p>
                      <p className="text-[9px] text-teal-200/80 leading-tight">Trained &amp; Verified</p>
                    </div>
                  </div>

                  {/* Bottom-Right Floating Badge (Above Bottom Bar) */}
                  <div className="absolute bottom-16 right-3.5 bg-[#00897b]/90 backdrop-blur-md text-white rounded-xl p-2 sm:p-2.5 border border-teal-300/30 flex items-center gap-2 shadow-lg">
                    <div className="w-6 h-6 rounded-md bg-white/20 flex items-center justify-center shrink-0">
                      <Shield className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div>
                      <p className="text-[11px] font-black leading-tight">Preventive Care</p>
                      <p className="text-[9px] text-teal-100 leading-tight">Better Cooling, Longer Life</p>
                    </div>
                  </div>

                  {/* Bottom Bar Across Image */}
                  <div className="absolute bottom-0 inset-x-0 bg-[#071d49]/95 backdrop-blur-md text-white px-3 sm:px-4 py-2.5 border-t border-white/10 flex items-center justify-between text-center">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <Settings className="w-4 h-4 text-cyan-300 shrink-0" />
                      <div className="text-left">
                        <span className="block text-[11px] sm:text-xs font-black text-white leading-tight">4 Routine</span>
                        <span className="block text-[9px] sm:text-[10px] text-slate-300 leading-tight">Services / Year</span>
                      </div>
                    </div>
                    <div className="h-6 w-px bg-white/15" />
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <Headphones className="w-4 h-4 text-cyan-300 shrink-0" />
                      <div className="text-left">
                        <span className="block text-[11px] sm:text-xs font-black text-white leading-tight">â‚¹0</span>
                        <span className="block text-[9px] sm:text-[10px] text-slate-300 leading-tight">Breakdown Visit Fee</span>
                      </div>
                    </div>
                    <div className="h-6 w-px bg-white/15" />
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <Calendar className="w-4 h-4 text-cyan-300 shrink-0" />
                      <div className="text-left">
                        <span className="block text-[11px] sm:text-xs font-black text-white leading-tight">1-5+ Years</span>
                        <span className="block text-[9px] sm:text-[10px] text-slate-300 leading-tight">Flexible Tenure</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Service Overview + Key Benefits Card */}
            <div className="lg:col-span-7 bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-6 lg:p-7 border border-slate-200/80 shadow-md flex flex-col justify-between">
              <div>
                {/* Service Overview Header */}
                <div className="flex items-center gap-1.5 text-[#0284c7] font-extrabold text-xs uppercase tracking-wider mb-1.5">
                  <Settings className="w-3.5 h-3.5" />
                  <span>SERVICE OVERVIEW</span>
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-black text-[#0a1e42] mb-2 leading-snug">
                  What is an Annual Maintenance Contract (AMC)?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3.5">
                  An Annual Maintenance Contract (AMC) is a preventive service plan for your air conditioners and home appliances. It provides regular scheduled maintenance, deep wet-jet cleaning, and priority breakdown attendance with <strong>â‚¹0 technician visit charges</strong> across Pune. Contract tenures are customizable from <strong>1 to 5+ years</strong>.
                </p>

                {/* 4 Green Highlight Pills */}
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-full text-[11px] font-bold flex items-center gap-1.5 shadow-2xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>4 Routine Services / Year</span>
                  </span>
                  <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-full text-[11px] font-bold flex items-center gap-1.5 shadow-2xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>â‚¹0 Breakdown Visit Fee</span>
                  </span>
                  <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-full text-[11px] font-bold flex items-center gap-1.5 shadow-2xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Deep Jet Wash Servicing</span>
                  </span>
                  <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-full text-[11px] font-bold flex items-center gap-1.5 shadow-2xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>1-5+ Year Flexible Tenure</span>
                  </span>
                </div>

                {/* Key Benefits Header */}
                <div className="flex items-center gap-1.5 text-[#0a1e42] font-extrabold text-xs uppercase tracking-wider mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                  <span>KEY BENEFITS OF OUR AMC PLAN</span>
                </div>

                {/* 4 Benefits Cards (2x2 Grid) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {/* Card 1 */}
                  <div className="p-3 rounded-2xl bg-white border border-slate-200/70 shadow-2xs flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Zap className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 leading-tight">Peak Energy Efficiency</p>
                      <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                        Maintains optimal cooling performance and airflow while reducing power draw.
                      </p>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="p-3 rounded-2xl bg-white border border-slate-200/70 shadow-2xs flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Calendar className="w-4 h-4 text-sky-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 leading-tight">Scheduled Routine Servicing</p>
                      <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                        Periodic tune-ups prevent unexpected breakdown and extends appliance life.
                      </p>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="p-3 rounded-2xl bg-white border border-slate-200/70 shadow-2xs flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                      <CircleDollarSign className="w-4 h-4 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 leading-tight">Lower Electricity Bills</p>
                      <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                        Clean coils, tuned motors, and balanced pressure reduce monthly power bills.
                      </p>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="p-3 rounded-2xl bg-white border border-slate-200/70 shadow-2xs flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Settings className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 leading-tight">Spare Part Discounts</p>
                      <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                        Exclusive member-only discounts on all genuine replacement spare parts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Grid: Scope of Inclusions & Extra Charges Exclude */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-stretch">
            {/* Scope of Inclusions Card */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-emerald-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b border-emerald-100">
                  <div className="flex items-center gap-2 text-emerald-800 font-black text-xs sm:text-sm tracking-wide uppercase">
                    <ClipboardCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>SCOPE OF INCLUSIONS</span>
                  </div>
                  <span className="bg-emerald-100 text-emerald-900 text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    AMC 1-Year Coverage Scope
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-800">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>4 Scheduled Routine Services per Year (Wet &amp; Jet Wash)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Thermostat, Electrical Wiring &amp; Operating Health Inspection</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Unlimited Breakdown Attendance with â‚¹0 Technician Visit Fees</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Clean Filters, Drain Line, Blower &amp; Coils</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Refrigerant Operating Pressure &amp; Ampere Diagnostic Checks</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Detailed Service Report after Each Visit</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Extra Charges Exclude Card */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-rose-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b border-rose-100">
                  <div className="flex items-center gap-2 text-rose-800 font-black text-xs sm:text-sm tracking-wide uppercase">
                    <Ban className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>EXTRA CHARGES EXCLUDE</span>
                  </div>
                  <span className="bg-rose-100 text-rose-900 text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    Billed at discounted member rates
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-800">
                  <div className="bg-white px-3 py-2 rounded-xl border border-rose-100 flex items-center gap-2 shadow-2xs">
                    <span className="w-3.5 h-3.5 rounded bg-rose-100 text-rose-600 font-black flex items-center justify-center shrink-0 text-[10px]">âœ•</span>
                    <span className="truncate">Refrigerant Gas Charging</span>
                  </div>
                  <div className="bg-white px-3 py-2 rounded-xl border border-rose-100 flex items-center gap-2 shadow-2xs">
                    <span className="w-3.5 h-3.5 rounded bg-rose-100 text-rose-600 font-black flex items-center justify-center shrink-0 text-[10px]">âœ•</span>
                    <span className="truncate">Compressor Replacement</span>
                  </div>
                  <div className="bg-white px-3 py-2 rounded-xl border border-rose-100 flex items-center gap-2 shadow-2xs">
                    <span className="w-3.5 h-3.5 rounded bg-rose-100 text-rose-600 font-black flex items-center justify-center shrink-0 text-[10px]">âœ•</span>
                    <span className="truncate">Fan Motor &amp; Capacitor Replacement</span>
                  </div>
                  <div className="bg-white px-3 py-2 rounded-xl border border-rose-100 flex items-center gap-2 shadow-2xs">
                    <span className="w-3.5 h-3.5 rounded bg-rose-100 text-rose-600 font-black flex items-center justify-center shrink-0 text-[10px]">âœ•</span>
                    <span className="truncate">Cooling &amp; Condenser Coil Replacement</span>
                  </div>
                  <div className="bg-white px-3 py-2 rounded-xl border border-rose-100 flex items-center gap-2 shadow-2xs">
                    <span className="w-3.5 h-3.5 rounded bg-rose-100 text-rose-600 font-black flex items-center justify-center shrink-0 text-[10px]">âœ•</span>
                    <span className="truncate">Electronic PCB Board Repair</span>
                  </div>
                  <div className="bg-white px-3 py-2 rounded-xl border border-rose-100 flex items-center gap-2 shadow-2xs">
                    <span className="w-3.5 h-3.5 rounded bg-rose-100 text-rose-600 font-black flex items-center justify-center shrink-0 text-[10px]">âœ•</span>
                    <span className="truncate">Plastic Body &amp; Air Vanes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Navy Bar */}
          <div className="bg-[#071d49] text-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-4.5 px-4 sm:px-6 flex flex-col xl:flex-row items-center justify-between gap-4 shadow-xl border border-white/10">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 hidden sm:flex items-center justify-center shrink-0 text-cyan-300">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs sm:text-sm md:text-base font-black tracking-tight">
                  Keep Your AC Running Like New â€” All Year Round!
                </p>
                <p className="text-[11px] sm:text-xs text-slate-300">
                  Reliable service, expert technicians, and priority support across Pune.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 shrink-0">
              <Link
                href="/enquire"
                className="bg-white hover:bg-slate-100 text-[#071d49] font-black px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 active:scale-95 text-center"
              >
                <Calendar className="w-4 h-4 text-[#071d49] shrink-0" />
                <span>Book AMC Service Online</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#071d49] shrink-0" />
              </Link>
              <a
                href="tel:+917823038645"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-3.5 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm transition-all flex items-center gap-2 active:scale-95 text-center"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
                <span>Call Helpline: +91 78230 38645</span>
              </a>
              <div className="hidden 2xl:flex items-center gap-3 text-[11px] font-semibold text-slate-300 pl-2 border-l border-white/20">
                <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-cyan-300" /> Trusted Technicians</span>
                <span className="flex items-center gap-1"><Sparkles className="w-3.5 h-3.5 text-cyan-300" /> Quick Response</span>
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-cyan-300" /> Service Across Pune</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CMC (Comprehensive Maintenance Contract) Services */}
      <section id="cmc-services" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-slate-50 via-teal-50/20 to-white border-b border-slate-200/90 relative overflow-hidden">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          {/* CMC Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-kk-teal/15 text-kk-teal-dark text-xs font-black uppercase tracking-wider mb-2 border border-kk-teal/20 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-kk-teal" />
              <span>â˜… Best Complete Care â€¢ All-Inclusive Protection</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-kk-blue tracking-tight">
              CMC (Comprehensive Maintenance Contract) Services
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-2 max-w-2xl mx-auto">
              Total peace-of-mind coverage including free parts replacement, compressor coverage, refrigerant gas charging, and routine servicing.
            </p>
          </div>

          {/* CMC Two-Column Detailed Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* CMC Left (on desktop): In-depth Explanations, Inclusions, Exclusions & CTA */}
            <div className="lg:col-span-7 flex flex-col gap-4 order-2 lg:order-1">
              {/* Overview Explanation */}
              <div className="p-4 sm:p-5 rounded-2xl bg-teal-50/60 border border-teal-200/80 shadow-2xs">
                <div className="flex items-center gap-2 text-kk-teal mb-1.5">
                  <Shield className="w-4 h-4" />
                  <span className="text-[11px] font-black uppercase tracking-wider">All-Inclusive Coverage</span>
                </div>
                <h3 className="text-sm sm:text-base font-black text-kk-blue mb-2">
                  What is a Comprehensive Maintenance Contract (CMC)?
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium mb-3">
                  A <strong>Comprehensive Maintenance Contract (CMC)</strong> provides 360-degree protection. It covers <strong>both service labor and 100% free spare parts replacement</strong> â€” including compressor, electric parts, PCB board, fan motor, and refrigerant gas charging, along with 4 routine scheduled services.
                </p>

                {/* Scope Highlight Tags */}
                <div className="flex flex-wrap gap-2 text-[11px] font-bold text-slate-800">
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-teal-200 flex items-center gap-1.5 shadow-2xs">
                    <Check className="w-3.5 h-3.5 text-kk-teal" /> 100% Free Parts Replacement
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-teal-200 flex items-center gap-1.5 shadow-2xs">
                    <Check className="w-3.5 h-3.5 text-kk-teal" /> Compressor &amp; Motor Covered
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-teal-200 flex items-center gap-1.5 shadow-2xs">
                    <Check className="w-3.5 h-3.5 text-kk-teal" /> Free Refrigerant Gas Refills
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-teal-200 flex items-center gap-1.5 shadow-2xs">
                    <Check className="w-3.5 h-3.5 text-kk-teal" /> 2â€“4 Hr Priority Response SLA
                  </span>
                </div>
              </div>

              {/* CMC Contract Includes Full Coverage */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-teal-50/90 to-emerald-50/70 border border-teal-200 shadow-2xs">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5 text-teal-900 text-[11px] sm:text-xs font-black uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4 text-kk-teal" />
                    <span>Comprehensive Parts &amp; Labor Coverage</span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-kk-teal text-white">
                    100% Free Replacements
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-black text-teal-950 mb-2 leading-snug">
                  Comprehensive CMC Inclusions (Zero Cost for Repairs or Gas):
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {cmcIncludes.map((inc) => (
                    <div
                      key={inc.code}
                      className="flex items-center gap-2 p-2 rounded-xl bg-white/90 border border-teal-100 text-xs text-teal-950 font-bold shadow-2xs"
                    >
                      <span className="w-4 h-4 rounded-full bg-kk-teal text-white text-[10px] font-black flex items-center justify-center shrink-0">
                        âœ“
                      </span>
                      <span>{inc.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CMC Extra Charges Excludes */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-rose-50/60 border border-rose-200 shadow-2xs">
                <h5 className="text-xs sm:text-sm font-extrabold text-rose-950 mb-1 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>Extra Charges Exclude :</span>
                </h5>
                <p className="text-[11px] text-rose-700 mb-2 font-medium">External non-standard accessories and physical body damage:</p>
                <div className="grid grid-cols-2 gap-1.5 text-[11px] font-semibold text-rose-900">
                  {cmcExcludes.map((exc, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 bg-white/70 px-2 py-1 rounded-lg border border-rose-100">
                      <span className="w-3.5 h-3.5 rounded bg-rose-100 text-rose-700 font-bold flex items-center justify-center shrink-0 text-[9px]">
                        âœ•
                      </span>
                      <span className="truncate">{exc.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CMC Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
                <Link
                  href="/enquire"
                  className="w-full sm:w-auto flex-1 py-2.5 sm:py-3 px-5 rounded-xl font-bold text-xs sm:text-sm bg-kk-teal hover:bg-kk-teal-light text-white transition-all flex items-center justify-center gap-2 shadow-md shadow-kk-teal/20 hover:shadow-kk-teal/40 active:scale-98 text-center"
                >
                  <span>Book CMC Service Online</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+917823038645"
                  className="w-full sm:w-auto py-2.5 sm:py-3 px-5 rounded-xl font-bold text-xs sm:text-sm bg-white hover:bg-slate-100 text-slate-800 border border-teal-200 transition-all flex items-center justify-center gap-2 active:scale-98 text-center shadow-xs"
                >
                  <Phone className="w-4 h-4 text-kk-teal" />
                  <span>Call CMC Hotline: +91 78230 38645</span>
                </a>
              </div>
            </div>

            {/* CMC Right (on desktop): Visual & Key Metric Cards */}
            <div className="lg:col-span-5 flex flex-col gap-4 order-1 lg:order-2">
              <div className="bg-white p-2.5 sm:p-3 rounded-3xl border-2 border-kk-teal/30 shadow-2xl shadow-kk-teal/10 relative overflow-hidden group">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-inner bg-slate-900">
                  <Image
                    src="/images/amc_cmc/cmc_section_img.png"
                    alt="Skilled HVAC technician repairing AC compressor, electrical motor, and testing refrigerant gas under Comprehensive Maintenance Contract (CMC)"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-bold bg-slate-900/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-kk-teal/30">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-kk-teal" />
                      <span>Compressor &amp; Parts Covered</span>
                    </span>
                    <span className="text-cyan-300 font-black">All-Inclusive</span>
                  </div>
                </div>
              </div>

              {/* Quick Benefits Pill Grid */}
              <div className="grid grid-cols-3 gap-2.5 text-center">
                <div className="p-3 rounded-2xl bg-white border border-teal-200/80 shadow-xs">
                  <span className="block text-kk-teal font-black text-sm sm:text-base">100% Free</span>
                  <span className="text-[11px] text-slate-500 font-semibold leading-tight block">Gas Charging</span>
                </div>
                <div className="p-3 rounded-2xl bg-white border border-teal-200/80 shadow-xs">
                  <span className="block text-slate-900 font-black text-sm sm:text-base">Covered</span>
                  <span className="text-[11px] text-slate-500 font-semibold leading-tight block">Compressor &amp; PCB</span>
                </div>
                <div className="p-3 rounded-2xl bg-white border border-teal-200/80 shadow-xs">
                  <span className="block text-kk-teal-dark font-black text-sm sm:text-base">2â€“4 Hrs</span>
                  <span className="text-[11px] text-slate-500 font-semibold leading-tight block">Priority Response</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding AMC vs. CMC Comparison Table Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-22 bg-slate-100/70 border-t border-slate-200">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-kk-teal block mb-1">
              Clear &amp; Honest Feature Matrix
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-kk-blue tracking-tight mb-2 sm:mb-3">
              Understanding AMC vs. CMC
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-600">
              Choose the maintenance tier that fits your appliance age and budget. We believe in complete clarity without hidden fine print.
            </p>
          </div>

          {/* Swipe indicator for mobile screens */}
          <div className="sm:hidden text-center text-[11px] text-slate-500 font-semibold mb-2.5 flex items-center justify-center gap-1.5">
            <span>ðŸ‘‰ Swipe horizontally to view full comparison</span>
          </div>

          {/* Comparison Table Container */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[580px] sm:min-w-[640px]">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3.5 sm:p-5 lg:p-6 text-xs sm:text-sm font-black uppercase tracking-wider w-1/3">
                      Scope &amp; Features
                    </th>
                    <th className="p-3.5 sm:p-5 lg:p-6 text-xs sm:text-sm font-black uppercase tracking-wider w-1/3 bg-slate-800 border-x border-slate-700">
                      <span className="block text-slate-400 text-[10px] sm:text-xs font-semibold lowercase mb-0.5">Basic Preventive</span>
                      AMC (Annual Contract)
                    </th>
                    <th className="p-3.5 sm:p-5 lg:p-6 text-xs sm:text-sm font-black uppercase tracking-wider w-1/3 bg-kk-teal relative">
                      <span className="block text-teal-100 text-[10px] sm:text-xs font-semibold lowercase mb-0.5">All-Inclusive</span>
                      CMC (Comprehensive Contract)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                  {amcVsCmc.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"}>
                      <td className="p-3.5 sm:p-5 lg:p-6 font-bold text-slate-900">
                        {row.feature}
                      </td>
                      <td className="p-3.5 sm:p-5 lg:p-6 text-slate-600 border-x border-slate-100 font-medium">
                        {row.amc}
                      </td>
                      <td className="p-3.5 sm:p-5 lg:p-6 font-bold text-kk-teal-dark bg-kk-teal/5">
                        {row.cmc}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Online Booking CTA Banner */}
      <section className="bg-gradient-to-r from-kk-dark via-kk-blue to-kk-dark text-white py-10 sm:py-14 md:py-16 border-t border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-kk-teal text-xs font-bold uppercase tracking-wider mb-2 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-kk-teal" />
              <span>Doorstep Booking in Pune</span>
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight">
              Ready to Book AMC / CMC Maintenance Service in Pune?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Contact our team today for doorstep service across all targeted Pune &amp; PCMC locations.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 shrink-0 w-full md:w-auto">
            <Link
              href="/enquire"
              className="bg-kk-teal hover:bg-kk-teal-light text-white px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-lg shadow-kk-teal/30 transition-all hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 text-center"
            >
              <span>Click Here Now for Online Booking</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
            <a
              href="tel:+917823038645"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 backdrop-blur-sm active:scale-95 text-center"
            >
              <Phone className="w-4 h-4 text-kk-teal shrink-0" />
              <span>+91 78230 38645</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

``n
## Areas Page
**File:** "c:\Users\MY\Downloads\kk-multi-services_02\src\app\areas\page.tsx"

`	sx
"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Search,
  Phone,
  Clock,
  ShieldCheck,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Navigation
} from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useBookingModal } from "@/context/BookingModalContext";

interface HeroMapPin {
  name: string;
  x: number;
  y: number;
  delay: number;
  pulsePeriod: number;
}

const heroMapPins: HeroMapPin[] = [
  { name: "Ravet", x: 57.5, y: 16.5, delay: 0.15, pulsePeriod: 3.2 },
  { name: "Nigdi", x: 65.5, y: 16.0, delay: 0.75, pulsePeriod: 2.8 },
  { name: "Akurdi", x: 62.0, y: 24.0, delay: 0.35, pulsePeriod: 3.6 },
  { name: "Punawale", x: 54.5, y: 29.0, delay: 1.15, pulsePeriod: 3.0 },
  { name: "Chinchwad", x: 66.0, y: 32.5, delay: 0.45, pulsePeriod: 2.9 },
  { name: "Pimpri", x: 73.0, y: 31.0, delay: 0.95, pulsePeriod: 3.5 },
  { name: "Mahalunge", x: 52.5, y: 40.0, delay: 0.6, pulsePeriod: 3.1 },
  { name: "Wakad", x: 61.0, y: 40.0, delay: 0.2, pulsePeriod: 2.7 },
  { name: "Aundh", x: 68.5, y: 43.5, delay: 1.35, pulsePeriod: 3.4 },
  { name: "Baner", x: 58.0, y: 47.0, delay: 0.5, pulsePeriod: 3.7 },
  { name: "Balewadi", x: 58.5, y: 55.0, delay: 0.25, pulsePeriod: 2.8 },
  { name: "Pashan & Sus", x: 57.5, y: 64.0, delay: 0.85, pulsePeriod: 3.3 },
  { name: "Bavdhan", x: 66.0, y: 67.5, delay: 1.25, pulsePeriod: 3.0 },
];

export interface PuneArea {
  name: string;
  pincode: string;
  zone: "balewadi" | "pcmc" | "pmc" | "pmrda";
  zoneLabel: string;
  subZone: string;
  responseTime: string;
  landmarks: string;
  popularFor: string[];
}

export const puneLocalities: PuneArea[] = [
  // ==========================================
  // 1. BALEWADI & SURROUNDING POCKETS (West Pune Commercial/Residential Core)
  // ==========================================
  {
    name: "Balewadi High Street (BHS)",
    pincode: "411045",
    zone: "balewadi",
    zoneLabel: "Balewadi Core",
    subZone: "Commercial & Lifestyle Hub",
    responseTime: "30â€“45 Mins",
    landmarks: "Main commercial & lifestyle strip, cafes, retail, luxury high-rises and corporate hubs",
    popularFor: ["Inverter AC", "Side-by-Side Fridge", "Front Load Washer"]
  },
  {
    name: "Balewadi Stadium Area",
    pincode: "411045",
    zone: "balewadi",
    zoneLabel: "Balewadi Core",
    subZone: "Sports City & Mahalunge Link",
    responseTime: "30â€“45 Mins",
    landmarks: "Shree Shiv Chhatrapati Sports Complex & Mahalunge road connections",
    popularFor: ["AC Repair", "Washing Machine", "Geyser Repair"]
  },
  {
    name: "Balewadi Gaon",
    pincode: "411045",
    zone: "balewadi",
    zoneLabel: "Balewadi Core",
    subZone: "Central Settlement",
    responseTime: "30â€“45 Mins",
    landmarks: "Central village, old settlement, and main local market area",
    popularFor: ["Refrigerator Repair", "Washing Machine", "Microwave"]
  },
  {
    name: "Patil Nagar & Laxman Nagar",
    pincode: "411045",
    zone: "balewadi",
    zoneLabel: "Balewadi Core",
    subZone: "High-Density Residential",
    responseTime: "30â€“45 Mins",
    landmarks: "High-density residential societies, family apartments & gated societies",
    popularFor: ["AC Deep Clean", "Front Load Washer", "Geyser"]
  },
  {
    name: "MITCON / Balewadi Phata",
    pincode: "411045",
    zone: "balewadi",
    zoneLabel: "Balewadi Core",
    subZone: "Expressway Entry",
    responseTime: "30â€“45 Mins",
    landmarks: "Entry junction from Baner Road / Mumbai-Bengaluru Highway corridor",
    popularFor: ["AC Installation", "Refrigerator", "RO Purifier"]
  },
  {
    name: "Cummins India & IRIS High Street Corridor",
    pincode: "411045",
    zone: "balewadi",
    zoneLabel: "Balewadi Core",
    subZone: "HQ & Corporate Zone",
    responseTime: "30â€“45 Mins",
    landmarks: "Heavenly Homes, Balewadi road, Cummins India campus, IRIS High Street",
    popularFor: ["Commercial AC", "Inverter AC", "All Home Appliances"]
  },
  {
    name: "Moze College & Datta Mandir Road",
    pincode: "411045",
    zone: "balewadi",
    zoneLabel: "Balewadi Core",
    subZone: "Educational & Residential",
    responseTime: "30â€“45 Mins",
    landmarks: "Educational & residential pocket, Datta Mandir, student & family societies",
    popularFor: ["AC Service", "Washing Machine", "Microwave"]
  },
  {
    name: "Samarth Colony & Ganraj Chowk",
    pincode: "411045",
    zone: "balewadi",
    zoneLabel: "Balewadi Core",
    subZone: "Premium Neighborhood",
    responseTime: "30â€“45 Mins",
    landmarks: "Premium residential neighborhood & internal avenues towards Baner",
    popularFor: ["Split AC", "Washing Machine", "Water Heater"]
  },
  {
    name: "Balewadiâ€“Wakad Bridge Belt",
    pincode: "411045",
    zone: "balewadi",
    zoneLabel: "Balewadi Core",
    subZone: "PCMC Connecting Corridor",
    responseTime: "30â€“45 Mins",
    landmarks: "Connects Balewadi directly to PCMC (Wakad) across the Mula River",
    popularFor: ["AC Repair", "Refrigerator Gas Refill", "Washer"]
  },
  {
    name: "Amar Tech Park & Orchid Hotel Zone",
    pincode: "411045",
    zone: "balewadi",
    zoneLabel: "Balewadi Core",
    subZone: "Corporate Bypass Belt",
    responseTime: "30â€“45 Mins",
    landmarks: "Corporate tech parks, Orchid Hotel corridor along the Pune-Bangalore bypass",
    popularFor: ["Commercial AC", "Appliance AMC", "Chiller Repair"]
  },
  {
    name: "Ram Nagar & Dasra Chowk",
    pincode: "411045",
    zone: "balewadi",
    zoneLabel: "Balewadi Core",
    subZone: "Baner Border Residential",
    responseTime: "30â€“45 Mins",
    landmarks: "Internal residential networks connecting Balewadi to Baner",
    popularFor: ["AC Servicing", "Washing Machine", "Fridge"]
  },
  {
    name: "Kapil Malhar Area",
    pincode: "411045",
    zone: "balewadi",
    zoneLabel: "Balewadi Core",
    subZone: "Established Residential",
    responseTime: "30â€“45 Mins",
    landmarks: "Established residential societies border and green residential belts",
    popularFor: ["AC Repair", "Geyser", "Front Load Washer"]
  },
  {
    name: "Sutarwadi",
    pincode: "411021",
    zone: "balewadi",
    zoneLabel: "Balewadi Core",
    subZone: "Pashan & Highway Pocket",
    responseTime: "35â€“50 Mins",
    landmarks: "Connecting pocket between Balewadi, Pashan, and the Highway",
    popularFor: ["Washing Machine", "Fridge", "AC Gas Refill"]
  },

  // ==========================================
  // 2. PCMC (Pimpri-Chinchwad Municipal Corporation)
  // ==========================================
  // A. Western & Expressway Corridors (Adjacent to IT Parks & Highway)
  {
    name: "Wakad",
    pincode: "411057",
    zone: "pcmc",
    zoneLabel: "PCMC Limits",
    subZone: "Western & Expressway",
    responseTime: "45â€“60 Mins",
    landmarks: "Datta Mandir, Kaspate Vasti, Bhumkar Chowk, Shankar Kalat Nagar, Mankar Chowk, Wakad Gaon",
    popularFor: ["AC Repair", "Washing Machine", "Fridge"]
  },
  {
    name: "Pimple Saudagar",
    pincode: "411027",
    zone: "pcmc",
    zoneLabel: "PCMC Limits",
    subZone: "Western & Expressway",
    responseTime: "45â€“60 Mins",
    landmarks: "Kunai Icon Road, Roseland Residency, Govind Garden, PK Chowk, Rahatani Link Road",
    popularFor: ["Inverter AC", "Front Load Washer", "Side-by-Side Fridge"]
  },
  {
    name: "Pimple Nilakh",
    pincode: "411027",
    zone: "pcmc",
    zoneLabel: "PCMC Limits",
    subZone: "Western & Expressway",
    responseTime: "45â€“60 Mins",
    landmarks: "Vishal Nagar, Kranti Nagar, Jagtap Dairy Chowk, Rakshak Society",
    popularFor: ["AC Servicing", "Washing Machine", "Refrigerator"]
  },
  {
    name: "Pimple Gurav",
    pincode: "411061",
    zone: "pcmc",
    zoneLabel: "PCMC Limits",
    subZone: "Western & Expressway",
    responseTime: "45â€“60 Mins",
    landmarks: "Kate Puram, Sudarshan Nagar, Jawalkar Nagar, Srushti Chowk",
    popularFor: ["Refrigerator", "Geyser Repair", "Microwave"]
  },
  {
    name: "Thergaon",
    pincode: "411033",
    zone: "pcmc",
    zoneLabel: "PCMC Limits",
    subZone: "Western & Expressway",
    responseTime: "45â€“60 Mins",
    landmarks: "Dange Chowk, 16 Number, Pawar Nagar, Belthika Nagar",
    popularFor: ["AC Repair", "Washing Machine", "Geyser"]
  },
  {
    name: "Tathawade",
    pincode: "411033",
    zone: "pcmc",
    zoneLabel: "PCMC Limits",
    subZone: "Western & Expressway",
    responseTime: "45â€“60 Mins",
    landmarks: "JSPM College road, Mumbai Highway, Jeevan Nagar, Ashok Nagar",
    popularFor: ["AC Maintenance", "Washing Machine", "Fridge"]
  },
  {
    name: "Punawale",
    pincode: "411033",
    zone: "pcmc",
    zoneLabel: "PCMC Limits",
    subZone: "Western & Expressway",
    responseTime: "45â€“60 Mins",
    landmarks: "Koyte Vasti, Malwadi, Kate Wasti, 18 Latitude area",
    popularFor: ["AC Installation", "Washer", "Refrigerator"]
  },
  {
    name: "Ravet",
    pincode: "411044",
    zone: "pcmc",
    zoneLabel: "PCMC Limits",
    subZone: "Western & Expressway",
    responseTime: "45â€“60 Mins",
    landmarks: "Shinde Vasti, Kiwale-Ravet BRTS corridor, Basket Bridge, Bhadavale Vasti, Mukai Chowk",
    popularFor: ["AC Repair", "Washing Machine", "Water Heater"]
  },
  {
    name: "Kiwale & Mamurdi",
    pincode: "412101",
    zone: "pcmc",
    zoneLabel: "PCMC Limits",
    subZone: "Western & Expressway",
    responseTime: "45â€“60 Mins",
    landmarks: "Expressway entry points, Symbiosis Skills University area",
    popularFor: ["AC Servicing", "Fridge Gas Refill", "Geyser"]
  },

  // B. Central & Pradhikaran Zones
  {
    name: "Pimpri",
    pincode: "411018",
    zone: "pcmc",
    zoneLabel: "PCMC Limits",
    subZone: "Central & Pradhikaran",
    responseTime: "45â€“60 Mins",
    landmarks: "Pimpri Camp, Deluxe Chowk, Morwadi, Finolex Chowk, Sai Chowk, Shagun Chowk, Pimpri Waghere, Kharalwadi",
    popularFor: ["Refrigerator", "AC Deep Clean", "Washer"]
  },
  {
    name: "Chinchwad",
    pincode: "411033",
    zone: "pcmc",
    zoneLabel: "PCMC Limits",
    subZone: "Central & Pradhikaran",
    responseTime: "45â€“60 Mins",
    landmarks: "Chinchwad Gaon, Chinchwad Station, Chaphekar Chowk, Elpro Mall area, Darshan Hall area, Thermax Chowk",
    popularFor: ["Industrial AC", "Appliance AMC", "Washing Machine"]
  },
  {
    name: "Akurdi",
    pincode: "411044",
    zone: "pcmc",
    zoneLabel: "PCMC Limits",
    subZone: "Central & Pradhikaran",
    responseTime: "45â€“60 Mins",
    landmarks: "Akurdi Railway Station, Khandoba Mal, D.Y. Patil College area, Ganganagar, Pradhikaran Sector 29",
    popularFor: ["AC Repair", "Washing Machine", "Microwave"]
  },
  {
    name: "Nigdi & Pradhikaran",
    pincode: "411044",
    zone: "pcmc",
    zoneLabel: "PCMC Limits",
    subZone: "Central & Pradhikaran",
    responseTime: "45â€“60 Mins",
    landmarks: "Sectors 24 to 28, Bhakti-Shakti Chowk, Appu Ghar, Yamuna Nagar, Rupee Nagar, Ota Scheme",
    popularFor: ["Fridge Cooling", "AC Servicing", "Geyser"]
  },
  {
    name: "Kalewadi",
    pincode: "411017",
    zone: "pcmc",
    zoneLabel: "PCMC Limits",
    subZone: "Central & Pradhikaran",
    responseTime: "45â€“60 Mins",
    landmarks: "Kalewadi Phata, Vijayanagar, Jyotiba Garden, Nadhe Nagar",
    popularFor: ["Washing Machine", "AC Repair", "Fridge"]
  },
  {
    name: "Rahatani",
    pincode: "411017",
    zone: "pcmc",
    zoneLabel: "PCMC Limits",
    subZone: "Central & Pradhikaran",
    responseTime: "45â€“60 Mins",
    landmarks: "Shivar Garden, Nakhate Vasti, Kalewadi Link Road",
    popularFor: ["Front Load Washer", "AC Gas Refill", "Refrigerator"]
  },
  {
    name: "Sangvi (Old & New)",
    pincode: "411027",
    zone: "pcmc",
    zoneLabel: "PCMC Limits",
    subZone: "Central & Pradhikaran",
    responseTime: "45â€“60 Mins",
    landmarks: "Old Sangvi, New Sangvi, Dapodi-Sangvi Bridge area, Shitole Nagar",
    popularFor: ["AC Service", "Washing Machine", "Geyser"]
  },

  // C. Industrial & North PCMC Corridors
  {
    name: "Bhosari",
    pincode: "411026",
    zone: "pcmc",
    zoneLabel: "PCMC Limits",
    subZone: "Industrial & North PCMC",
    responseTime: "60â€“90 Mins",
    landmarks: "Bhosari Gaon, MIDC, Landewadi, Dighi Road, Shantinagar, Indrayani Nagar, Gavali Matha, Nehrunagar",
    popularFor: ["Commercial AC", "Home Fridge", "Washing Machine"]
  },
  {
    name: "Moshi",
    pincode: "412105",
    zone: "pcmc",
    zoneLabel: "PCMC Limits",
    subZone: "Industrial & North PCMC",
    responseTime: "60â€“90 Mins",
    landmarks: "Spine Road, Moshi Toll Plaza, International Exhibition Centre (PIECC), Borhadewadi, Dudulgaon, Gandharva Nagari",
    popularFor: ["AC Deep Clean", "Washing Machine", "Geyser"]
  },
  {
    name: "Chikhali",
    pincode: "411062",
    zone: "pcmc",
    zoneLabel: "PCMC Limits",
    subZone: "Industrial & North PCMC",
    responseTime: "60â€“90 Mins",
    landmarks: "Kudalwadi, Jadhavwadi, Patilnagar, Moi, Nighoje auto cluster borders",
    popularFor: ["Refrigerator", "Washing Machine", "AC Repair"]
  },
  {
    name: "Talawade",
    pincode: "411062",
    zone: "pcmc",
    zoneLabel: "PCMC Limits",
    subZone: "Industrial & North PCMC",
    responseTime: "60â€“90 Mins",
    landmarks: "Talawade IT Park (Capgemini, Fujitsu), Triveninagar",
    popularFor: ["AC Maintenance", "Water Cooler", "Appliance AMC"]
  },
  {
    name: "Charholi Budruk, Dighi & Bopkhel",
    pincode: "412105",
    zone: "pcmc",
    zoneLabel: "PCMC Limits",
    subZone: "Industrial & North PCMC",
    responseTime: "60â€“90 Mins",
    landmarks: "Alandi Road corridor, Wadmukhwadi, Chovisawadi, Magazine Chowk",
    popularFor: ["AC Servicing", "Washing Machine", "Fridge"]
  },
  {
    name: "Dapodi, Kasarwadi & Phugewadi",
    pincode: "411012",
    zone: "pcmc",
    zoneLabel: "PCMC Limits",
    subZone: "Industrial & North PCMC",
    responseTime: "45â€“60 Mins",
    landmarks: "Old Pune-Mumbai Highway belt, Kundan Nagar, Nashik Phata",
    popularFor: ["AC Repair", "Refrigerator", "Washer"]
  },

  // ==========================================
  // 3. PMC (Pune Municipal Corporation)
  // ==========================================
  // A. West Pune (Highway, Foothills & Bordering Balewadi)
  {
    name: "Baner",
    pincode: "411045",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "West Pune",
    responseTime: "30â€“45 Mins",
    landmarks: "Baner Road, Pan Card Club Road, Veerbhadra Nagar, Pallod Farms, Baner Pashan Link Road (BPLR), Prabhat Nagar",
    popularFor: ["All Appliances", "Inverter AC", "Front Load Washer"]
  },
  {
    name: "Aundh",
    pincode: "411007",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "West Pune",
    responseTime: "30â€“45 Mins",
    landmarks: "Parihar Chowk, ITI Road, DP Road, Sindh Society, National Society, Bremen Chowk, Sanewadi",
    popularFor: ["Refrigerator", "AC Deep Clean", "Microwave"]
  },
  {
    name: "Pashan",
    pincode: "411021",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "West Pune",
    responseTime: "30â€“45 Mins",
    landmarks: "Pashan Lake, Sus Road, Abhimanshree Society, Pashan Gaon, NDA Road (North end)",
    popularFor: ["Geyser Repair", "Washing Machine", "AC"]
  },
  {
    name: "Sus & Mahalunge",
    pincode: "411021",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "West Pune",
    responseTime: "30â€“45 Mins",
    landmarks: "Sus Gaon, Sus-Hinjawadi Link Road, Nande, Chande, Godrej Hillside area",
    popularFor: ["AC Repair", "Washing Machine", "Fridge"]
  },
  {
    name: "Bavdhan",
    pincode: "411021",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "West Pune",
    responseTime: "30â€“45 Mins",
    landmarks: "Bavdhan Khurd, Bavdhan Budruk, Chandani Chowk, Bhunde Vasti, Ram Nadi area",
    popularFor: ["Refrigerator", "AC Repair", "Water Heater"]
  },
  {
    name: "Kothrud",
    pincode: "411038",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "West Pune",
    responseTime: "45â€“60 Mins",
    landmarks: "Paud Road, Karve Road, MIT College, Mayur Colony, Vanaz, Ideal Colony, Dahanukar Colony, Bhusari Colony, Mahatma Society, Rambaug Colony, Gandhi Bhavan",
    popularFor: ["AC Deep Clean", "Washing Machine", "Fridge"]
  },
  {
    name: "Karve Nagar & Warje",
    pincode: "411052",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "West Pune",
    responseTime: "45â€“60 Mins",
    landmarks: "Warje Malwadi, Kakade City, Cummins College, Dahanukar Circle, Rajaram Bridge area",
    popularFor: ["Geyser", "Refrigerator", "AC Service"]
  },
  {
    name: "Shivane, Uttamnagar & Kopare",
    pincode: "411023",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "West Pune",
    responseTime: "45â€“60 Mins",
    landmarks: "NDA approach road extensions, Canal Road residential clusters",
    popularFor: ["Washing Machine", "AC Repair", "Refrigerator"]
  },
  {
    name: "Erandwane & Law College Road",
    pincode: "411004",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "West Pune",
    responseTime: "45â€“60 Mins",
    landmarks: "Film Institute (FTII), Nal Stop, Bhandarkar Road, Mehendale Garage",
    popularFor: ["AC Servicing", "Front Load Washer", "Fridge"]
  },

  // B. Central Pune, Core City & Cantonments
  {
    name: "Shivajinagar",
    pincode: "411005",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "Central & Cantonments",
    responseTime: "45â€“60 Mins",
    landmarks: "FC Road, JM Road, SPPU (Pune University), Model Colony, BMCC Road, Senapati Bapat Road (SB Road), Wakdewadi, Patil Estate",
    popularFor: ["AC Repair", "Washing Machine", "Fridge"]
  },
  {
    name: "Deccan Gymkhana & Prabhat Road",
    pincode: "411004",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "Central & Cantonments",
    responseTime: "45â€“60 Mins",
    landmarks: "Kamala Nehru Park, PYC Hindu Gymkhana, Bhandarkar Road",
    popularFor: ["All Appliances", "Microwave", "AC"]
  },
  {
    name: "Historic Peths (Old Pune Core)",
    pincode: "411030",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "Central & Cantonments",
    responseTime: "45â€“60 Mins",
    landmarks: "Sadashiv Peth, Narayan Peth, Shaniwar Peth, Kasba Peth, Budhwar Peth, Shukrawar Peth, Raviwar Peth, Somwar Peth, Mangalwar Peth, Rasta Peth, Bhavani Peth, Nana Peth, Ganj Peth, Ghorpade Peth",
    popularFor: ["Refrigerator", "Washer", "Geyser Repair"]
  },
  {
    name: "Swargate & Parvati",
    pincode: "411009",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "Central & Cantonments",
    responseTime: "45â€“60 Mins",
    landmarks: "Parvati Darshan, Parvati Paytha, Saras Baug, Mukund Nagar, Maharshi Nagar",
    popularFor: ["Washing Machine", "Fridge Gas Refill", "Geyser"]
  },
  {
    name: "Pune Cantonment (Camp)",
    pincode: "411001",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "Central & Cantonments",
    responseTime: "45â€“60 Mins",
    landmarks: "MG Road, East Street, SGS Mall, Pune Railway Station area, Sassoon, Race Course",
    popularFor: ["AC Repair", "Refrigerator", "Washer"]
  },
  {
    name: "Khadki (Kirkee) Cantonment",
    pincode: "411003",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "Central & Cantonments",
    responseTime: "45â€“60 Mins",
    landmarks: "Khadki Bazar, Range Hills, Ammunition Factory area, Mula Road",
    popularFor: ["AC Servicing", "Washing Machine", "Fridge"]
  },
  {
    name: "Bund Garden & Boat Club Road",
    pincode: "411001",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "Central & Cantonments",
    responseTime: "45â€“60 Mins",
    landmarks: "Premium central corporate & residential riverfront, Bund Garden Road",
    popularFor: ["Premium Appliances", "Inverter AC", "Side-by-Side Fridge"]
  },

  // C. East Pune & Kharadi Belt
  {
    name: "Viman Nagar",
    pincode: "411014",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "East Pune & Kharadi",
    responseTime: "45â€“60 Mins",
    landmarks: "Phoenix Marketcity area, Dutta Mandir Chowk, Symbiosis Campus road, Rohan Mithila",
    popularFor: ["AC Servicing", "Microwave", "Washing Machine"]
  },
  {
    name: "Kalyani Nagar",
    pincode: "411006",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "East Pune & Kharadi",
    responseTime: "45â€“60 Mins",
    landmarks: "East Avenue, Central Avenue, Joggerâ€™s Park, Gold Adlabs area, Ramwadi",
    popularFor: ["Premium Appliances", "AC Maintenance", "Fridge"]
  },
  {
    name: "Koregaon Park (KP)",
    pincode: "411001",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "East Pune & Kharadi",
    responseTime: "45â€“60 Mins",
    landmarks: "North Main Road, South Main Road, Osho Ashram, Lane 1 to Lane 8, Pingale Vasti",
    popularFor: ["All Premium Brands", "AC Jet Cleaning", "Washer"]
  },
  {
    name: "Kharadi",
    pincode: "411014",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "East Pune & Kharadi",
    responseTime: "45â€“60 Mins",
    landmarks: "EON Free Zone, World Trade Center, Radisson Blu, Thite Vasti, Rakshak Nagar, Grant Road, Zensar IT Tower",
    popularFor: ["Inverter AC", "Side-by-Side Fridge", "Washer"]
  },
  {
    name: "Wadgaon Sheri & Chandan Nagar",
    pincode: "411014",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "East Pune & Kharadi",
    responseTime: "45â€“60 Mins",
    landmarks: "Brahma Suncity, Anand Park, Somnath Nagar",
    popularFor: ["AC Repair", "Fridge Gas Refill", "Geyser"]
  },
  {
    name: "Yerawada & Shastrinagar",
    pincode: "411006",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "East Pune & Kharadi",
    responseTime: "45â€“60 Mins",
    landmarks: "Business Bay, Commerzone IT Park, Gunjan Chowk, Tarnaka",
    popularFor: ["Fridge", "Washing Machine", "AC Repair"]
  },
  {
    name: "Dhanori & Lohgaon",
    pincode: "411015",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "East Pune & Kharadi",
    responseTime: "45â€“60 Mins",
    landmarks: "Pune International Airport vicinity, Porwal Road, Lohegaon Gaon, Kalwad Wasti, Viman Nagar extension",
    popularFor: ["AC Service", "Washing Machine", "Geyser"]
  },
  {
    name: "Mundhwa & Keshav Nagar",
    pincode: "411036",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "East Pune & Kharadi",
    responseTime: "45â€“60 Mins",
    landmarks: "Pingale Vasti, Magarpatta North gate, Manjari Road starts here",
    popularFor: ["AC Service", "Washing Machine", "Geyser"]
  },
  {
    name: "Wagholi",
    pincode: "412207",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "East Pune & Kharadi",
    responseTime: "60â€“90 Mins",
    landmarks: "Nagar Road, Baif Road, Ivy Estate, Ubale Nagar, Bakori Road",
    popularFor: ["AC Repair", "Refrigerator", "Washing Machine"]
  },
  {
    name: "Vishrantwadi & Tingre Nagar",
    pincode: "411015",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "East Pune & Kharadi",
    responseTime: "45â€“60 Mins",
    landmarks: "Alandi Road, Kalas, Dighi border, Tingre Nagar Airport Road",
    popularFor: ["AC Repair", "Washing Machine", "Fridge"]
  },

  // D. South & South-East Pune
  {
    name: "Hadapsar",
    pincode: "411028",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "South & South-East",
    responseTime: "45â€“60 Mins",
    landmarks: "Magarpatta City, Amanora Park Town, Gadital, Vaiduwadi, Sadesatara Nali, Sasane Nagar, Kale Padal, Ramtekdi",
    popularFor: ["Washing Machine", "Refrigerator", "AC Service"]
  },
  {
    name: "Wanowrie & Fatima Nagar",
    pincode: "411040",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "South & South-East",
    responseTime: "45â€“60 Mins",
    landmarks: "Command Hospital area, Kedari Nagar, Sacred Heart Town, SRPF Camp",
    popularFor: ["AC Servicing", "Front Load Washer", "Microwave"]
  },
  {
    name: "Kondhwa",
    pincode: "411048",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "South & South-East",
    responseTime: "45â€“60 Mins",
    landmarks: "Kondhwa Khurd, Kondhwa Budruk, Lullanagar, Salunke Vihar, NIBM Road, Kamela, Jyoti Restaurant Chowk",
    popularFor: ["All Appliances", "Inverter AC", "Washer"]
  },
  {
    name: "Undri, Mohammedwadi & Pisoli",
    pincode: "411060",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "South & South-East",
    responseTime: "60â€“90 Mins",
    landmarks: "Delhi Public School area, Corinthians Club, Nyati County",
    popularFor: ["AC Service", "Washing Machine", "Geyser"]
  },
  {
    name: "Bibwewadi & Market Yard",
    pincode: "411037",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "South & South-East",
    responseTime: "45â€“60 Mins",
    landmarks: "Gangadham, Salisbury Park, Vidyapeeth Marg, Chintamani Nagar",
    popularFor: ["AC Installation", "Refrigerator", "Washer"]
  },
  {
    name: "Dhankawadi, Sahakar Nagar & Padmavati",
    pincode: "411043",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "South & South-East",
    responseTime: "45â€“60 Mins",
    landmarks: "Taljai Hills, Vasant Baug, Balaji Nagar",
    popularFor: ["Geyser", "Refrigerator", "AC Service"]
  },
  {
    name: "Katraj & Ambegaon",
    pincode: "411046",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "South & South-East",
    responseTime: "45â€“60 Mins",
    landmarks: "Katraj Snake Park, Bharati Vidyapeeth, Ambegaon Budruk, Ambegaon Khurd, Sukhsagar Nagar, Gokul Nagar, Mangdewadi",
    popularFor: ["Geyser Repair", "Washing Machine", "Fridge"]
  },
  {
    name: "Sinhagad Road Belt",
    pincode: "411041",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "South & South-East",
    responseTime: "45â€“60 Mins",
    landmarks: "Vadgaon Budruk, Anand Nagar, Manik Baug, Dhayari, Narhe, Nanded City, Khadakwasla, Kirkatwadi, DSK Vishwa, Abhiruchi Mall",
    popularFor: ["AC Repair", "Washing Machine", "Fridge"]
  },
  {
    name: "Fursungi & Uruli Devachi",
    pincode: "412308",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "South & South-East",
    responseTime: "60â€“90 Mins",
    landmarks: "SP Infocity (IT Park), Bhekrai Nagar, Saswad Road junction",
    popularFor: ["AC Maintenance", "Washing Machine", "Geyser"]
  },
  {
    name: "Handewadi & Yewalewadi",
    pincode: "411028",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "South & South-East",
    responseTime: "60â€“90 Mins",
    landmarks: "Emerging south-eastern residential hubs, Kondhwa-Saswad link",
    popularFor: ["AC Service", "Fridge", "Washing Machine"]
  },

  // ==========================================
  // 4. THE REMAINING IT HUBS & EXTENDED PMRDA LIMITS (Beyond PMC/PCMC)
  // ==========================================
  // A. The Hinjawadi & Western IT Belt
  {
    name: "Hinjawadi Phase 1",
    pincode: "411057",
    zone: "pmrda",
    zoneLabel: "IT Hubs & PMRDA",
    subZone: "Hinjawadi & Western IT",
    responseTime: "30â€“45 Mins",
    landmarks: "Shivaji Chowk, Wipro Circle, Quadron IT Park, Rajiv Gandhi Infotech Park",
    popularFor: ["Inverter AC", "Front Load Washer", "Side-by-Side Fridge"]
  },
  {
    name: "Hinjawadi Phase 2",
    pincode: "411057",
    zone: "pmrda",
    zoneLabel: "IT Hubs & PMRDA",
    subZone: "Hinjawadi & Western IT",
    responseTime: "35â€“50 Mins",
    landmarks: "Infosys Circle, Wipro Phase 2, Embassy TechZone campus",
    popularFor: ["AC Deep Clean", "Washing Machine", "Microwave"]
  },
  {
    name: "Hinjawadi Phase 3",
    pincode: "411057",
    zone: "pmrda",
    zoneLabel: "IT Hubs & PMRDA",
    subZone: "Hinjawadi & Western IT",
    responseTime: "40â€“55 Mins",
    landmarks: "Megapolis Circle, TCS, Tech Mahindra, Blue Ridge, Megapolis township",
    popularFor: ["Split AC", "Washing Machine", "Geyser"]
  },
  {
    name: "Marunji",
    pincode: "411057",
    zone: "pmrda",
    zoneLabel: "IT Hubs & PMRDA",
    subZone: "Hinjawadi & Western IT",
    responseTime: "40â€“55 Mins",
    landmarks: "Direct connection to Hinjawadi Phase 2/3, Life Republic area",
    popularFor: ["AC Installation", "Fridge", "Washer"]
  },
  {
    name: "Maan & Mulshi Highway",
    pincode: "411057",
    zone: "pmrda",
    zoneLabel: "IT Hubs & PMRDA",
    subZone: "Hinjawadi & Western IT",
    responseTime: "40â€“55 Mins",
    landmarks: "Maan village, Blue Ridge township, Megapolis approach",
    popularFor: ["AC Servicing", "Front Load Washer", "Fridge"]
  },
  {
    name: "Pirangut & Bhugaon",
    pincode: "412115",
    zone: "pmrda",
    zoneLabel: "IT Hubs & PMRDA",
    subZone: "Hinjawadi & Western IT",
    responseTime: "50â€“65 Mins",
    landmarks: "Lavasa Link Road, Manas Lake, Paud Road extensions",
    popularFor: ["Geyser", "Refrigerator", "AC Service"]
  },
  {
    name: "Lavale",
    pincode: "412115",
    zone: "pmrda",
    zoneLabel: "IT Hubs & PMRDA",
    subZone: "Hinjawadi & Western IT",
    responseTime: "45â€“60 Mins",
    landmarks: "Symbiosis International University Main Campus corridor",
    popularFor: ["AC Repair", "Washing Machine", "Fridge"]
  },
  {
    name: "Gahunje & Shirgaon",
    pincode: "412101",
    zone: "pmrda",
    zoneLabel: "IT Hubs & PMRDA",
    subZone: "Hinjawadi & Western IT",
    responseTime: "45â€“60 Mins",
    landmarks: "MCA International Cricket Stadium, Somatne Phata bypass",
    popularFor: ["AC Servicing", "Washing Machine", "Geyser"]
  },

  // B. Industrial & Peripheral Towns
  {
    name: "Chakan & Khed (North Auto Hub)",
    pincode: "410501",
    zone: "pmrda",
    zoneLabel: "IT Hubs & PMRDA",
    subZone: "Industrial & Peripheral",
    responseTime: "60â€“90 Mins",
    landmarks: "Chakan MIDC Phase 1 & 2, Mahalunge Ingle, Khed, Talegaon Chowk",
    popularFor: ["Industrial AC", "Appliance AMC", "Water Coolers"]
  },
  {
    name: "Talegaon Dabhade & Urse",
    pincode: "410506",
    zone: "pmrda",
    zoneLabel: "IT Hubs & PMRDA",
    subZone: "Industrial & Peripheral",
    responseTime: "60â€“90 Mins",
    landmarks: "General Motors / Urse industrial corridor, Old Pune-Mumbai Highway",
    popularFor: ["AC Servicing", "Refrigerator", "Geyser"]
  },
  {
    name: "Alandi & Dehu",
    pincode: "412105",
    zone: "pmrda",
    zoneLabel: "IT Hubs & PMRDA",
    subZone: "Industrial & Peripheral",
    responseTime: "60â€“90 Mins",
    landmarks: "Sant Tukaram Nagar, Indrayani River pilgrimage & residential zones",
    popularFor: ["Washing Machine", "Fridge", "Geyser"]
  },
  {
    name: "Shikrapur & Ranjangaon (East Industrial)",
    pincode: "412208",
    zone: "pmrda",
    zoneLabel: "IT Hubs & PMRDA",
    subZone: "Industrial & Peripheral",
    responseTime: "60â€“90 Mins",
    landmarks: "Ranjangaon MIDC (LG, Whirlpool, Fiat), Sanaswadi, Uruli Kanchan",
    popularFor: ["Commercial AC", "Appliance AMC", "Fridge"]
  },
  {
    name: "Saswad & Shirwal (South Emerging)",
    pincode: "412801",
    zone: "pmrda",
    zoneLabel: "IT Hubs & PMRDA",
    subZone: "Industrial & Peripheral",
    responseTime: "60â€“90 Mins",
    landmarks: "Khandala MIDC, Khed Shivapur, Pune-Satara Highway corridor",
    popularFor: ["AC Servicing", "Fridge Repair", "Washing Machine"]
  }
];

export default function AreasPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedZone, setSelectedZone] = useState<string>("all");
  const { openBookingModal } = useBookingModal();

  const filteredLocalities = useMemo(() => {
    return puneLocalities.filter((item) => {
      const matchesZone = selectedZone === "all" || item.zone === selectedZone;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.pincode.includes(query) ||
        item.landmarks.toLowerCase().includes(query) ||
        item.zoneLabel.toLowerCase().includes(query) ||
        item.subZone.toLowerCase().includes(query);
      return matchesZone && matchesSearch;
    });
  }, [searchQuery, selectedZone]);

  const zoneTabs = [
    { id: "all", label: "All Areas", count: puneLocalities.length },
    { id: "balewadi", label: "1. Balewadi Core", count: puneLocalities.filter((p) => p.zone === "balewadi").length },
    { id: "pcmc", label: "2. PCMC Limits", count: puneLocalities.filter((p) => p.zone === "pcmc").length },
    { id: "pmc", label: "3. PMC Limits", count: puneLocalities.filter((p) => p.zone === "pmc").length },
    { id: "pmrda", label: "4. IT Hubs & PMRDA", count: puneLocalities.filter((p) => p.zone === "pmrda").length }
  ];

  return (
    <main id="top" className="min-h-screen font-sans bg-slate-50 text-slate-900 flex flex-col">
      {/* Top Header Bar */}
      <TopBar />

      {/* Sticky Navbar */}
      <Navbar />

      {/* Hero Header */}
      <section
        className="relative text-white w-full min-h-[480px] sm:min-h-[400px] lg:min-h-0 lg:aspect-[16/5] xl:aspect-[16/4] flex items-center overflow-hidden bg-[#020712]"
      >
        {/* Background Image: hero_img_04.png */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/area/hero_img_04.png"
            alt="KK Multi Services Pune Coverage Map"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Left side background shadow till the text - rich deep contrast for crystal-clear readability */}
          <div className="absolute inset-y-0 left-0 w-full sm:w-[70%] lg:w-[55%] bg-gradient-to-r from-[#020712] via-[#020712]/95 via-[#020712]/80 to-transparent pointer-events-none z-[1]" />
          <div className="absolute inset-y-0 left-0 w-full sm:w-[50%] bg-[#020712]/70 blur-3xl pointer-events-none z-[1]" />
        </div>

        {/* Location Pins Overlay directly on the map */}
        <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block">
          <div className="relative w-full h-full max-w-[2172px] mx-auto">
            {heroMapPins.map((pin) => (
              <button
                key={pin.name}
                type="button"
                onClick={() => {
                  setSearchQuery(pin.name);
                  const el = document.getElementById("areas-list");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="absolute z-20 pointer-events-auto flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-[#041126]/90 hover:bg-[#08224d] border border-cyan-400/80 hover:border-cyan-300 text-white shadow-[0_0_12px_rgba(6,182,212,0.55)] hover:shadow-[0_0_22px_rgba(6,182,212,0.95)] transition-all duration-300 cursor-pointer group active:scale-95"
                style={{
                  left: `${pin.x}%`,
                  top: `${pin.y}%`,
                  animation: `pin-popup 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${pin.delay}s both, pin-pulse-random ${pin.pulsePeriod}s ease-in-out ${pin.delay + 0.6}s infinite`,
                }}
                title={`Click to view ${pin.name} doorstep service coverage`}
              >
                {/* Pin Icon with Radar Ripple */}
                <div className="relative w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-gradient-to-tr from-cyan-400 to-teal-300 text-slate-950 flex items-center justify-center shrink-0 shadow-xs">
                  <span
                    className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-75 pointer-events-none"
                    style={{ animationDuration: `${pin.pulsePeriod}s`, animationDelay: `${pin.delay}s` }}
                  />
                  <MapPin className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-slate-950 fill-current relative z-10" />
                </div>
                {/* Location Name */}
                <span className="text-[9px] sm:text-[11px] lg:text-xs font-bold text-white tracking-tight whitespace-nowrap drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  {pin.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Container (Left Column) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full py-5 sm:py-6 lg:py-6 pointer-events-none">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content (5 Cols) */}
            <div className="lg:col-span-5 max-w-lg pointer-events-auto">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-200 mb-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight className="w-3.5 h-3.5 text-kk-teal" />
                <span className="text-kk-teal">Areas We Serve</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/15 border border-white/20 text-xs font-bold text-white mb-2 backdrop-blur-md shadow-sm">
                <Navigation className="w-3.5 h-3.5 text-kk-teal" />
                <span>80+ Localities: Balewadi, PCMC, PMC &amp; PMRDA</span>
              </div>

              <h1 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-[30px] xl:text-[34px] font-black text-white tracking-tight leading-[1.15] mb-2 sm:mb-2.5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                Doorstep Repair In <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-kk-teal via-cyan-300 to-white">
                  Every Corner of Pune
                </span>
              </h1>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium mb-3 sm:mb-3.5 max-w-md drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                Specialized mobile technician units stationed across Balewadi, PCMC twin cities, PMC central zones, and the Hinjawadi IT corridor. 30â€“60 min express arrival with transparent pricing.
              </p>

              {/* Quick search input in hero */}
              <div className="relative max-w-md shadow-2xl">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search locality, landmark or PIN..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-16 py-3 rounded-xl bg-white text-slate-900 placeholder-slate-400 text-sm font-medium focus:outline-none shadow-lg shadow-black/25"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-700 bg-slate-100 px-2 py-1 rounded cursor-pointer"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Right Column: 7 Cols Spacer so the background map & KK service van shine through unobstructed */}
            <div className="lg:col-span-7 hidden lg:block pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Zone Filters Bar */}
      <section className="py-4 sm:py-5 bg-white border-b border-slate-200 sticky top-[68px] md:top-[76px] z-40 shadow-sm backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">

            {/* Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {zoneTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedZone(tab.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    selectedZone === tab.id
                      ? "bg-kk-blue text-white shadow-md shadow-kk-blue/20"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                      selectedZone === tab.id ? "bg-white/20 text-white" : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>

            <div className="text-xs font-bold text-slate-500 shrink-0">
              Showing <span className="text-kk-blue font-extrabold">{filteredLocalities.length}</span> of {puneLocalities.length} serviced locations
            </div>

          </div>
        </div>
      </section>

      {/* Localities Grid */}
      <section id="areas-list" className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
        {filteredLocalities.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 max-w-lg mx-auto shadow-sm">
            <MapPin className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800 mb-1">No exact locality match for "{searchQuery}"</h3>
            <p className="text-xs text-slate-500 mb-5 leading-relaxed">
              Don't worry! KK Multi Services covers all gated societies and townships across Pune, PCMC &amp; PMRDA limits. Call our direct dispatch desk for express assignment.
            </p>
            <a
              href="tel:+917823038645"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-kk-teal text-white font-bold text-sm shadow-md hover:bg-kk-teal-light transition-all active:scale-95"
            >
              <Phone className="w-4 h-4" /> Call +91 78230 38645
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredLocalities.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-md shadow-slate-900/5 hover:shadow-xl hover:border-kk-teal/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Badges: Zone & Response Time */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-kk-blue/5 text-kk-blue border border-kk-blue/10">
                        {item.zoneLabel}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                        {item.subZone}
                      </span>
                    </div>

                    <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full shrink-0">
                      <Clock className="w-3 h-3" /> {item.responseTime}
                    </span>
                  </div>

                  {/* Title & Pin */}
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-kk-blue transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-xs font-bold text-slate-400 shrink-0">
                      PIN {item.pincode}
                    </span>
                  </div>

                  {/* Landmarks */}
                  <p className="text-xs text-slate-600 mb-4 flex items-start gap-1.5 leading-relaxed">
                    <MapPin className="w-3.5 h-3.5 text-kk-teal shrink-0 mt-0.5" />
                    <span>{item.landmarks}</span>
                  </p>

                  {/* Popular Services Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {item.popularFor.map((srv, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 px-2 py-0.5 rounded transition-colors"
                      >
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between gap-2">
                  <a
                    href="tel:+917823038645"
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-kk-blue transition-colors"
                    aria-label={`Call technician for ${item.name}`}
                    title="Direct Call Dispatch"
                  >
                    <Phone className="w-4 h-4" />
                  </a>

                  <button
                    type="button"
                    onClick={() => openBookingModal(undefined, item)}
                    className="flex-1 text-center py-2.5 px-3 sm:px-4 rounded-xl bg-kk-teal hover:bg-kk-teal-light text-white text-xs font-bold transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 min-w-0"
                    title={`Book technician in ${item.name}`}
                  >
                    <span className="truncate">Book in {item.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Coverage Promise Banner */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-kk-teal/10 flex items-center justify-center text-kk-teal shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-base mb-1">Local Dedicated Service Vans</h4>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Technicians are stationed directly within Balewadi, PCMC, and PMC zones, cutting commute delays and guaranteeing 30â€“60 min doorstep arrival.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-kk-blue/10 flex items-center justify-center text-kk-blue shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-base mb-1">Zero Distance Surcharges</h4>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Whether you reside in Balewadi High Street, Kothrud, Moshi, or Hinjawadi Phase 3, our standard nominal inspection fee applies equally.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-base mb-1">Gated Community Security Compliant</h4>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  All repair specialists carry verified identity cards and comply with society entry protocols on MyGate and NoBrokerHood.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

``n
## Blog Page
**File:** "c:\Users\MY\Downloads\kk-multi-services_02\src\app\blog\page.tsx"

`	sx
"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Clock, 
  ChevronRight, 
  ArrowRight, 
  Phone, 
  Send, 
  CheckCircle2, 
  BookOpen, 
  Wrench, 
  ShieldCheck, 
  Lightbulb 
} from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const upcomingTopics = [
    { title: "AC Cooling & Seasonal Servicing Guides", icon: "â„ï¸" },
    { title: "Washing Machine Error Codes & Drum Care", icon: "ðŸ§º" },
    { title: "Refrigerator Compressor Health & Food Safety", icon: "ðŸ§Š" },
    { title: "Inverter PCB Diagnostics & Power Safety", icon: "âš¡" },
    { title: "Microwave & RO Water Purifier Maintenance", icon: "â™¨ï¸" },
    { title: "Annual Maintenance Contracts (AMC vs CMC) Explained", icon: "ðŸ“‹" },
  ];

  return (
    <main id="top" className="min-h-screen font-sans bg-slate-50 text-slate-900 flex flex-col selection:bg-kk-teal selection:text-white">
      {/* Top Header Bar */}
      <TopBar />

      {/* Sticky Navbar */}
      <Navbar />

      {/* Hero Header - 16:4 Aspect Ratio */}
      <section 
        className="relative bg-kk-blue text-white w-full aspect-[16/4] min-h-[500px] sm:min-h-[460px] md:min-h-[420px] lg:min-h-0 flex items-center overflow-hidden border-b border-white/10"
        style={{ aspectRatio: "16 / 4" }}
      >
        {/* Ambient decorative lighting */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-kk-teal/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 left-10 w-80 h-80 bg-kk-red/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900/60 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 w-full py-4 sm:py-6 md:py-6 lg:py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Column (7 Cols on laptop/desktop) */}
            <div className="lg:col-span-7 xl:col-span-8 text-center lg:text-left">
              {/* Breadcrumb */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 sm:mb-2.5">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight className="w-3.5 h-3.5 text-kk-teal shrink-0" />
                <span className="text-kk-teal">Blog & Insights</span>
              </div>

              {/* Coming Soon Badge */}
              <div className="flex justify-center lg:justify-start mb-2.5 sm:mb-3">
                <div className="inline-flex items-center gap-2 px-3 py-0.5 sm:py-1 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-kk-teal backdrop-blur-md shadow-inner">
                  <span className="w-2 h-2 rounded-full bg-kk-teal animate-pulse" />
                  <span className="tracking-wider uppercase">Under Development</span>
                  <span className="text-white/40">â€¢</span>
                  <span className="text-white">Coming Soon</span>
                </div>
              </div>

              {/* Heading */}
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[30px] xl:text-[36px] font-black text-white tracking-tight leading-[1.18] mb-2 sm:mb-2.5">
                Appliance Care & Repair Insights <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-kk-teal via-cyan-300 to-teal-200">
                  Coming Very Soon!
                </span>
              </h1>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0 mb-3.5 sm:mb-4">
                We are curating expert diagnostic guides, DIY maintenance checklists, and troubleshooting tutorials written by our certified appliance technicians across Pune.
              </p>

              {/* Quick Action CTAs */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
                <Link
                  href="/enquire"
                  className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-kk-teal hover:bg-kk-teal-light text-white font-bold text-xs sm:text-sm shadow-lg shadow-kk-teal/30 hover:-translate-y-0.5 transition-all flex items-center gap-2 active:scale-95 text-center"
                >
                  <Wrench className="w-3.5 h-3.5" />
                  <span>Book A Service Visit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="/services"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm transition-all flex items-center gap-2 backdrop-blur-sm hover:-translate-y-0.5 text-center"
                >
                  <BookOpen className="w-3.5 h-3.5 text-cyan-300" />
                  <span>Explore Services</span>
                </Link>

                <a
                  href="tel:+917823038645"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white text-kk-blue hover:bg-slate-100 font-bold text-xs sm:text-sm transition-all flex items-center gap-2 shadow-md hover:-translate-y-0.5 text-center"
                >
                  <Phone className="w-3.5 h-3.5 text-kk-red" />
                  <span>Call: +91 78230 38645</span>
                </a>
              </div>
            </div>

            {/* Right Column: Glassmorphism Subscribe Card (5 Cols on laptop/desktop) */}
            <div className="lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-end">
              <div className="bg-white/10 border border-white/15 rounded-3xl p-5 sm:p-6 backdrop-blur-md shadow-2xl max-w-md w-full">
                <div className="flex items-center gap-2 text-kk-teal text-xs font-bold uppercase tracking-wider mb-1.5">
                  <Sparkles className="w-4 h-4 text-kk-teal" />
                  <span>Be The First To Know</span>
                </div>
                <h2 className="text-base sm:text-lg font-black text-white mb-1.5">
                  Get Launch Updates &amp; Guides
                </h2>
                <p className="text-xs text-slate-300 leading-relaxed mb-3.5">
                  Subscribe to get notified when new troubleshooting checklists &amp; repair tips drop.
                </p>

                {subscribed ? (
                  <div className="p-3.5 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 flex items-center gap-2.5 animate-fadeIn text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold">Thank you! We will notify you once our blog launches.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-2">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 text-white placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-kk-teal border border-white/15"
                    />
                    <button
                      type="submit"
                      className="w-full py-2.5 px-4 rounded-xl bg-kk-teal hover:bg-kk-teal-light text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-kk-teal/25 flex items-center justify-center gap-2 active:scale-95"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Get Notified on Launch</span>
                    </button>
                  </form>
                )}

                <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-kk-teal" /> 100% Free Guides
                  </span>
                  <span>Zero Spam</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Topics Preview Section */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200/90">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-kk-teal text-xs font-black uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-kk-teal" /> What to expect
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-kk-blue tracking-tight">
              Topics We Are Preparing For You
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Insightful DIY advice, maintenance schedules, and warning signals direct from Pune&apos;s leading technicians.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {upcomingTopics.map((topic, idx) => (
              <div
                key={idx}
                className="bg-slate-50 hover:bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-kk-teal/40 hover:shadow-md transition-all duration-300 flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-teal-50 border border-slate-200 group-hover:border-teal-200 text-xl flex items-center justify-center shrink-0 shadow-xs transition-colors">
                  {topic.icon}
                </div>
                <div>
                  <span className="text-[11px] font-bold text-kk-teal uppercase tracking-wider">Upcoming Article</span>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug mt-0.5 group-hover:text-kk-blue transition-colors">
                    {topic.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Need Urgent Appliance Repair Banner */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2 text-kk-teal text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-kk-teal" />
              <span>Doorstep Appliance Repair Across Pune & PCMC</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black">Need Urgent Appliance Diagnostics Today?</h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Our technicians arrive within 90 minutes. 90-day parts warranty included.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Link
              href="/enquire"
              className="px-6 py-3 rounded-xl bg-kk-teal hover:bg-kk-teal-light text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
            >
              Book Service Online
            </Link>
            <a
              href="tel:+917823038645"
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs sm:text-sm transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-kk-teal" />
              <span>+91 78230 38645</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

``n
## Contact Page
**File:** "c:\Users\MY\Downloads\kk-multi-services_02\src\app\contact\page.tsx"

`	sx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  MessageCircle,
  HelpCircle,
  ChevronDown,
  Calendar,
  ArrowRight,
  Sparkles
} from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "How fast can a technician reach my doorstep?",
      a: "Our technicians are stationed across major zones in Pune and PCMC. Under our express service, a certified technician will typically arrive at your home within 60 to 90 minutes of your booking confirmation."
    },
    {
      q: "What are your inspection and visiting charges?",
      a: "We have a transparent nominal visiting fee of â‚¹199, which is completely waived off if you proceed with the repair service with us!"
    },
    {
      q: "Do you use genuine spare parts and offer warranty?",
      a: "Yes, 100%! All replacement components are genuine, factory-certified parts. We provide up to a 90-day warranty on both parts and service labor."
    },
    {
      q: "Are emergency weekend and late-night repairs available?",
      a: "Yes. Our 24/7 hotline and emergency team operate 7 days a week, including all public holidays and weekends, with no hidden surge pricing."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 font-sans flex flex-col justify-between">
      <div>
        <TopBar />
        <Navbar />

        {/* Hero Section - Responsive 16:4 on Desktop with Mobile Proportions */}
        <section
          className="relative bg-kk-blue text-white w-full min-h-[270px] xs:min-h-[290px] sm:min-h-[340px] md:min-h-[380px] lg:min-h-[340px] xl:min-h-[390px] 2xl:min-h-[440px] aspect-[16/7] xs:aspect-[16/6] sm:aspect-[16/5] lg:aspect-[16/4] flex items-center justify-center overflow-hidden border-b border-white/10"
        >
          {/* Layer 1: Office Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/contact_page_background_img.png"
              alt="KK Multi Services Office & Customer Support"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Subtle center vignette to enhance contrast behind text */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#030c1d]/50 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(3,12,29,0.55)_0%,_transparent_75%)] pointer-events-none" />
          </div>

          {/* Layer 2: Animated Cutout Figures (Woman on phone left, Support Technician right with speech bubbles) */}
          <div className="absolute inset-0 z-10 pointer-events-none animate-contact-entrance">
            <div className="relative w-full h-full animate-contact-float">
              <Image
                src="/images/contact.png"
                alt="Customer calling KK Multi Services support technician"
                fill
                priority
                sizes="100vw"
                className="object-contain object-bottom"
              />
            </div>
          </div>

          {/* Layer 3: Center Hero Content */}
          <div className="relative z-20 max-w-xl sm:max-w-2xl lg:max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center py-4 sm:py-6 lg:py-8">
            {/* Top Breadcrumb */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5 sm:mb-3 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400 shrink-0" />
              <span className="text-cyan-400 font-bold">Contact Us</span>
            </div>

            {/* Center Main Headline */}
            <h1 className="font-black tracking-tight leading-[1.15]">
              <span className="block text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[48px] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                Call Us For Your
              </span>
              <span className="hidden md:block text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[52px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-kk-teal to-cyan-100 drop-shadow-[0_0_30px_rgba(0,242,254,0.6)] mt-0.5 sm:mt-1">
                Repairing Requirements
              </span>
            </h1>
          </div>
        </section>

        {/* Quick Contact Cards */}
        <section className="relative -mt-4 sm:-mt-6 lg:-mt-8 z-20 max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            
            {/* Card 1: Emergency Call */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-lg shadow-slate-900/5 border border-slate-100 hover:border-kk-teal/40 hover:-translate-y-0.5 transition-all duration-300 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-kk-blue/5 group-hover:bg-kk-blue text-kk-blue group-hover:text-white flex items-center justify-center transition-colors mb-2.5">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-kk-red">Call Us 24/7</span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-0.5 mb-1">Emergency Hotline</h3>
              <p className="text-xs text-slate-500 mb-2.5">Instant connection with our duty support coordinator.</p>
              <a
                href="tel:+917823038645"
                className="inline-flex items-center gap-1.5 text-xs font-extrabold text-kk-blue group-hover:text-kk-teal transition-colors"
              >
                +91 78230 38645 <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Card 2: WhatsApp Chat */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-lg shadow-slate-900/5 border border-slate-100 hover:border-emerald-500/40 hover:-translate-y-0.5 transition-all duration-300 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-50 group-hover:bg-[#25D366] text-emerald-600 group-hover:text-white flex items-center justify-center transition-colors mb-2.5">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-emerald-600">Quick Chat</span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-0.5 mb-1">WhatsApp Helpdesk</h3>
              <p className="text-xs text-slate-500 mb-2.5">Send a photo of the faulty appliance for an instant quote.</p>
              <a
                href="https://wa.me/917823038645"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-600 group-hover:text-emerald-700 transition-colors"
              >
                Chat on WhatsApp <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Card 3: Email Support */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-lg shadow-slate-900/5 border border-slate-100 hover:border-kk-teal/40 hover:-translate-y-0.5 transition-all duration-300 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-kk-teal/10 group-hover:bg-kk-teal text-kk-teal group-hover:text-white flex items-center justify-center transition-colors mb-2.5">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-kk-teal">Email Support</span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-0.5 mb-1">Service Inquiries</h3>
              <p className="text-xs text-slate-500 mb-2.5">For commercial AMC contracts and corporate servicing.</p>
              <a
                href="mailto:support@kkmulti.com"
                className="inline-flex items-center gap-1.5 text-xs font-extrabold text-slate-800 group-hover:text-kk-teal transition-colors"
              >
                support@kkmulti.com <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Card 4: Our Address */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-lg shadow-slate-900/5 border border-slate-100 hover:border-kk-blue/40 hover:-translate-y-0.5 transition-all duration-300 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-100 group-hover:bg-kk-blue text-slate-700 group-hover:text-white flex items-center justify-center transition-colors mb-2.5">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500">Our Address</span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-0.5 mb-1">Heavenly Homes, Balewadi</h3>
              <p className="text-xs text-slate-500 mb-2.5 leading-relaxed">
                Unit 04, Next To Cummins India &amp; IRIS High Street, Balewadi, Pune- 411045
              </p>
              <a
                href="#map-section"
                className="inline-flex items-center gap-1.5 text-xs font-extrabold text-kk-blue group-hover:text-kk-teal transition-colors"
              >
                View Location Map <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </section>

        {/* Operating Hours & Assistance Section */}
        <section className="py-10 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            
            {/* Working Hours Card */}
            <div className="bg-gradient-to-br from-kk-blue to-kk-dark text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-4 translate-y-4">
                <Clock className="w-36 h-36" />
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-kk-teal" /> Service Hours &amp; Availability
                </h3>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-slate-300">Monday â€“ Saturday</span>
                    <span className="font-bold text-white">8:00 AM â€“ 10:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-slate-300">Sunday &amp; Holidays</span>
                    <span className="font-bold text-white">8:00 AM â€“ 9:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-300">Emergency Breakdown</span>
                    <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span> 24/7 Available
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <a
                  href="tel:+917823038645"
                  className="w-full py-3 bg-white hover:bg-slate-100 text-kk-blue rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-sm active:scale-95"
                >
                  <Phone className="w-4 h-4 text-kk-red" /> Call Direct: +91 78230 38645
                </a>
              </div>
            </div>

            {/* Direct Connect Helpdesk Card */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg shadow-slate-900/5 border border-slate-200/80 flex flex-col justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-kk-blue mb-2 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-kk-teal" /> Need Instant Assistance?
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed">
                  Skip the queue and connect with our duty technician immediately for instant troubleshooting advice or quotes.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/917823038645"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 px-4 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-between transition-colors border border-emerald-200"
                  >
                    <span className="flex items-center gap-2.5">
                      <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" /> WhatsApp Quick Chat
                    </span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:support@kkmulti.com"
                    className="w-full py-3 px-4 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-between transition-colors border border-slate-200"
                  >
                    <span className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-kk-teal shrink-0" /> Email: support@kkmulti.com
                    </span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
                Average phone response time: <strong className="text-slate-800">Under 60 seconds</strong>
              </div>
            </div>

            {/* Online Service Enquiry Card */}
            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg shadow-teal-900/5 border border-teal-200/80 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-kk-teal/15 text-kk-teal text-xs font-bold uppercase tracking-wider mb-3">
                  <Calendar className="w-3.5 h-3.5" /> Online Booking
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  Want to Book a Service?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  Submit your appliance repair request online via our dedicated Enquiry Form. Guaranteed technician arrival in under 90 minutes.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-teal-200/60">
                <Link
                  href="/enquire"
                  className="w-full py-3.5 px-5 rounded-xl bg-kk-teal hover:bg-kk-teal-light text-white font-bold text-xs sm:text-sm shadow-md shadow-kk-teal/20 transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <span>Go to Enquiry Form</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* Map Section */}
        <section id="map-section" className="py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl shadow-slate-900/5 border border-slate-200/80">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-kk-teal uppercase tracking-wider mb-1">
                  <MapPin className="w-3.5 h-3.5" /> Workshop &amp; Service Center
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-kk-blue">Our Address</h3>
                <div className="mt-1.5 space-y-0.5 max-w-2xl">
                  <p className="text-xs font-mono text-slate-400">
                    N 186 25Â°S8.229534Â°E 73Â°47&apos;40.80768&quot;
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    Unit 04, Heavenly Homes, Next To Cummins India and IRIS High Street, Balewadi, Pune- 411045, Maharashtra, India.
                  </p>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=Heavenly+Homes+Balewadi+Pune"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-kk-blue hover:bg-kk-blue-light text-white text-xs sm:text-sm font-bold transition-all shadow-md shrink-0 active:scale-95"
              >
                Open in Google Maps <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="w-full h-64 sm:h-80 md:h-96 rounded-xl sm:rounded-2xl overflow-hidden shadow-inner border border-slate-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.0921705646447!2d73.7721601!3d18.5698829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf1ba5c42d25%3A0xae3383c823833690!2sKK%20Multi%20Services!5e0!3m2!1sen!2sin!4v1789969080377!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-10 sm:py-14 bg-white border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-kk-teal/10 text-kk-teal text-xs font-bold mb-2 uppercase tracking-wider">
                <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-kk-blue">
                Common Questions Before Booking
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full p-4 sm:p-5 text-left flex justify-between items-center gap-4 bg-slate-50/60 hover:bg-slate-50 transition-colors"
                    >
                      <span className="font-bold text-slate-800 text-xs sm:text-base">{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-kk-teal" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="p-4 sm:p-5 pt-0 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-white">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}

``n
## Enquire Page
**File:** "c:\Users\MY\Downloads\kk-multi-services_02\src\app\enquire\page.tsx"

`	sx
"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  CheckCircle2, 
  Send, 
  ShieldCheck, 
  Phone, 
  ArrowRight,
  Sparkles,
  MessageCircle
} from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const serviceOptions = [
  "AC Repair & Servicing",
  "AC Installation / Relocation",
  "Cassette AC Service & Repair",
  "Central HVAC & Chiller Service",
  "VRV / VRF System Repair",
  "Refrigerator & Freezer Repair",
  "Washing Machine Repair",
  "Microwave & Oven Repair",
  "Water Geyser Repair",
  "Annual Maintenance Contract (AMC)",
  "Other Appliance Inquiry"
];

const puneAreas = [
  "Balewadi",
  "PCMC (Pimpri-Chinchwad)",
  "PMC (Pune City)",
  "Wakad / Hinjewadi",
  "Baner / Aundh",
  "Kothrud / Bavdhan",
  "Viman Nagar / Kalyani Nagar",
  "Hadapsar / Magarpatta",
  "Kharadi / Wagholi",
  "Pimple Saudagar / Pimple Gurav",
  "Ravet / Punawale / Tathawade",
  "Other Area in Pune / PCMC"
];

export default function EnquirePage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "AC Repair & Servicing",
    area: "Balewadi",
    timeSlot: "Urgent (Within 90 Mins)",
    date: "",
    notes: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState("");
  const [lastWaUrl, setLastWaUrl] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;

    const trimmedName = formData.name.trim();
    if (!trimmedName) {
      setNameError("Please enter your name.");
      hasError = true;
    } else if (/\d/.test(trimmedName)) {
      setNameError("Numbers are not allowed in the name field.");
      hasError = true;
    } else if (trimmedName.length < 2) {
      setNameError("Name must be at least 2 characters.");
      hasError = true;
    }

    if (!formData.phone) {
      setPhoneError("Please enter your phone number.");
      hasError = true;
    } else if (formData.phone.length !== 10) {
      setPhoneError("Phone number must be exactly 10 digits (no more, no less).");
      hasError = true;
    }

    if (hasError) return;

    setIsSubmitting(true);

    const generatedId = `KK-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingId(generatedId);

    const lines = [
      `*New Service Enquiry - KK Multi Services*`,
      ``,
      `ðŸ‘¤ *Name:* ${formData.name.trim()}`,
      `ðŸ“ž *Contact Number:* ${formData.phone.trim()}`,
      formData.email.trim() ? `âœ‰ï¸ *Email:* ${formData.email.trim()}` : "",
      `ðŸ”§ *Service Required:* ${formData.service}`,
      `ðŸ“ *Area:* ${formData.area}`,
      formData.date ? `ðŸ“… *Preferred Date:* ${formData.date}` : "",
      `â° *Time Slot:* ${formData.timeSlot}`,
      formData.notes.trim() ? `ðŸ“ *Problem Details:* ${formData.notes.trim()}` : "",
      ``,
      `ðŸ†” *Ref ID:* #${generatedId}`,
      `_Submitted via website enquiry page_`
    ].filter(Boolean);

    const waText = lines.join("\n");
    const waUrl = `https://wa.me/917823038645?text=${encodeURIComponent(waText)}`;
    setLastWaUrl(waUrl);

    fetch("/api/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        bookingId: generatedId,
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        service: formData.service,
        area: formData.area,
        notes: formData.notes.trim(),
      }),
    }).catch(console.error);

    try {
      window.open(waUrl, "_blank", "noopener,noreferrer");
    } catch (err) {
      console.error(err);
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans flex flex-col justify-between">
      {/* Top Bar & Navigation */}
      <div>
        <TopBar />
        <Navbar />

        {/* Dedicated Enquiry Section */}
        <section className="py-10 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
          
          {/* Card Container */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 xs:p-7 sm:p-10 shadow-xl shadow-slate-900/5 border border-slate-200/80">
            
            {/* Header */}
            <div className="mb-6 sm:mb-8 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kk-teal/10 text-kk-teal text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" /> Fast Doorstep Service
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-kk-blue tracking-tight mb-2">
                Service Enquiry Form
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 max-w-xl">
                Fill in your details below and our expert service team will confirm your technician booking within 10 minutes.
              </p>
            </div>

            {/* Form or Confirmation */}
            {isSubmitted ? (
              <div className="p-6 sm:p-10 bg-emerald-50 rounded-2xl border border-emerald-200 text-center animate-hero-fade-up">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8 sm:w-9 sm:h-9" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-emerald-950 mb-1.5">
                  Enquiry Ready on WhatsApp!
                </h2>
                <p className="text-emerald-800 text-xs sm:text-sm max-w-md mx-auto mb-4 leading-relaxed">
                  Thank you, <span className="font-bold">{formData.name || "Customer"}</span>! Your service enquiry has been assigned Reference ID{" "}
                  <strong className="bg-emerald-200/80 text-emerald-950 px-2 py-0.5 rounded font-mono">
                    #{bookingId || "KK-SERVICE"}
                  </strong>.
                </p>
                {lastWaUrl && (
                  <div className="mb-5 max-w-sm mx-auto">
                    <a
                      href={lastWaUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-3.5 px-5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 transition-all active:scale-95"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Open WhatsApp Chat Again</span>
                    </a>
                  </div>
                )}
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <a
                    href="tel:+917823038645"
                    className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95"
                  >
                    <Phone className="w-4 h-4" /> Call For Urgent Status
                  </a>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        service: "AC Repair & Servicing",
                        area: "Wakad / Hinjewadi",
                        timeSlot: "Urgent (Within 90 Mins)",
                        date: "",
                        notes: ""
                      });
                    }}
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer active:scale-95"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                
                {/* Full Name & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-5">
                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-kk-red">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => {
                        const clean = e.target.value.replace(/[0-9]/g, "");
                        setFormData({ ...formData, name: clean });
                        if (nameError) setNameError("");
                      }}
                      className={`w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border text-sm sm:text-base bg-slate-50/50 focus:outline-none focus:ring-2 transition-all ${
                        nameError ? "border-red-400 focus:ring-red-400" : "border-slate-200 focus:ring-kk-teal focus:border-transparent"
                      }`}
                    />
                    {nameError && (
                      <p className="mt-1 text-[11px] font-semibold text-red-500">{nameError}</p>
                    )}
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Phone Number <span className="text-kk-red">*</span>
                      </label>
                      <span className={`text-[11px] font-mono ${formData.phone.length === 10 ? "text-emerald-600 font-bold" : "text-slate-400"}`}>
                        {formData.phone.length}/10 digits
                      </span>
                    </div>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">+91</span>
                      <input
                        type="tel"
                        inputMode="numeric"
                        maxLength={10}
                        required
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => {
                          const clean = e.target.value.replace(/\D/g, "").slice(0, 10);
                          setFormData({ ...formData, phone: clean });
                          if (phoneError) setPhoneError("");
                        }}
                        className={`w-full pl-12 pr-3.5 py-2.5 sm:py-3 rounded-xl border text-sm sm:text-base bg-slate-50/50 focus:outline-none focus:ring-2 transition-all ${
                          phoneError ? "border-red-400 focus:ring-red-400" : "border-slate-200 focus:ring-kk-teal focus:border-transparent"
                        }`}
                      />
                    </div>
                    {phoneError && (
                      <p className="mt-1 text-[11px] font-semibold text-red-500">{phoneError}</p>
                    )}
                  </div>
                </div>

                {/* Email Address & Service Option */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-5">
                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-kk-teal focus:border-transparent text-sm sm:text-base bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Select Appliance Service <span className="text-kk-red">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-kk-teal focus:border-transparent text-sm sm:text-base bg-slate-50/50"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Location, Preferred Date, and Time Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-5">
                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Area in Pune <span className="text-kk-red">*</span>
                    </label>
                    <select
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-kk-teal focus:border-transparent text-sm sm:text-base bg-slate-50/50"
                    >
                      {puneAreas.map((loc) => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-kk-teal focus:border-transparent text-sm sm:text-base bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Preferred Time Slot
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-kk-teal focus:border-transparent text-sm sm:text-base bg-slate-50/50"
                    >
                      <option value="Urgent (Within 90 Mins)">Urgent (Within 90 Mins)</option>
                      <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                      <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                      <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Problem Description */}
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Issue Description / Problem Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe the issue with your appliance (e.g. AC cooling issue, refrigerator not freezing, strange noise, error code)..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-kk-teal focus:border-transparent text-sm sm:text-base bg-slate-50/50 resize-none"
                  ></textarea>
                </div>

                {/* Guarantee Banner */}
                <div className="flex items-start xs:items-center gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600">
                  <ShieldCheck className="w-4 h-4 text-kk-teal shrink-0 mt-0.5 xs:mt-0" />
                  <span>No advance payment required. Full inspection and functional testing before payment.</span>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 sm:py-4 px-6 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl font-bold text-sm sm:text-base shadow-lg shadow-emerald-500/25 hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 active:scale-[0.99]"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Send Enquiry to WhatsApp</span>
                  <Send className="w-4 h-4 ml-1" />
                </button>

              </form>
            )}

          </div>

        </section>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}

``n
## Services Page
**File:** "c:\Users\MY\Downloads\kk-multi-services_02\src\app\services\page.tsx"

`	sx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Wrench, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  MessageCircle, 
  ChevronRight,
  ChevronDown,
  Sparkles,
  Zap,
  HelpCircle,
  Award,
  Calendar,
  Settings
} from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ServiceItem {
  id: string;
  category: "all" | "ac" | "fridge" | "washing" | "microwave" | "geyser";
  title: string;
  tag: string;
  tagColor: string;
  image: string;
  shortDesc: string;
  issues: string[];
  features: string[];
}

const servicesList: ServiceItem[] = [
  {
    id: "split-ac",
    category: "ac",
    title: "Split AC Repair, Installation & Jet Wash",
    tag: "Residential & Inverter",
    tagColor: "bg-kk-teal text-white",
    image: "/images/services/split_ac.jpg",
    shortDesc: "Complete split AC maintenance: 2500-PSI foam jet wash, indoor water leak fix, PCB repair, refrigerant gas refill (R32 / R410A), and precision wall mounting.",
    issues: [
      "AC blowing warm air or slow cooling",
      "Water dripping from indoor split unit",
      "Gas leakage & refrigerant top-up (R32 / R410A)",
      "Inverter compressor tripping or PCB error codes",
      "Foul odor, choked cooling coils, or dirty blower"
    ],
    features: ["Power jet chemical foam service", "90-day cooling assurance & warranty", "100% genuine copper pipes & spares"]
  },
  {
    id: "vrv-ac",
    category: "ac",
    title: "VRV & VRF Commercial AC Solutions",
    tag: "Commercial / VRF",
    tagColor: "bg-kk-blue text-white",
    image: "/images/services/vrv_ac.jpg",
    shortDesc: "Specialized servicing for Daikin VRV, Mitsubishi VRF, LG Multi V, and Blue Star systems. Centralized diagnostics, refnet joints, and multi-compressor staging.",
    issues: [
      "Master-to-slave communication failure (Error E-codes)",
      "Unequal cooling across indoor branch units",
      "Inverter power module & IPM driver faults",
      "Oil level imbalance & electronic expansion valve (EEV) choke",
      "Refrigerant loss in long-run piping networks"
    ],
    features: ["Certified commercial VRV/VRF engineers", "Nitrogen pressure leak detection", "Priority corporate SLA response"]
  },
  {
    id: "cassette-ac",
    category: "ac",
    title: "Cassette AC Repair & 4-Way Servicing",
    tag: "Ceiling 4-Way Flow",
    tagColor: "bg-kk-red text-white",
    image: "/images/services/cassette_ac.jpg",
    shortDesc: "Expert maintenance for 4-way ceiling cassette ACs in offices, commercial complexes, and luxury residences. Deep drain pump unclogging and sensor calibration.",
    issues: [
      "Ceiling water overflow due to lift-pump failure",
      "Motorized swing louvres jammed or stuck",
      "Indoor blower motor noise or reduced air throw",
      "Infrared receiver panel & wireless remote failure",
      "Heavy dust accumulation on hidden evaporator coil"
    ],
    features: ["Ceiling-safe catchment bag wash", "Condensate pump testing & descaling", "Same-day on-site troubleshooting"]
  },
  {
    id: "hvac-central",
    category: "ac",
    title: "Central HVAC Plant & Ductable AC Systems",
    tag: "Industrial & Centralized",
    tagColor: "bg-amber-600 text-white",
    image: "/images/services/hvac_system.jpg",
    shortDesc: "Industrial HVAC plant maintenance, Air Handling Units (AHU), water/air-cooled chillers, cooling towers, and package ductable AC installations.",
    issues: [
      "AHU blower belt wear, vibration, or bearing noise",
      "Chiller high condenser pressure / low suction trip",
      "Duct temperature variation & airflow imbalance",
      "Cooling tower water scale & fan motor breakdown",
      "BMS controller integration & thermostat faults"
    ],
    features: ["Comprehensive plant overhauls & AMCs", "CFM airflow balancing & air quality check", "24/7 breakdown emergency support"]
  },
  {
    id: "ac-repair",
    category: "ac",
    title: "General Air Conditioner Repair & Servicing",
    tag: "Most Popular",
    tagColor: "bg-kk-teal text-white",
    image: "/images/appliance_ac_1789636637732.jpg",
    shortDesc: "Complete split & window AC repair, deep jet pump cleaning, gas refilling, and PCB motherboard troubleshooting.",
    issues: [
      "AC not cooling or slow cooling",
      "Water leakage from indoor unit",
      "Gas leak & refrigerant refill (R32 / R410A / R22)",
      "Compressor tripping or loud humming noise",
      "PCB / sensor replacement & error codes"
    ],
    features: ["Jet-pump foam deep wash", "90-day warranty on spare parts", "Multi-brand certified technicians"]
  },
  {
    id: "ac-install",
    category: "ac",
    title: "AC Installation & Uninstallation",
    tag: "Express Service",
    tagColor: "bg-kk-blue text-white",
    image: "/images/hero_banner_ac.png",
    shortDesc: "Safe, precision wall mounting, vacuum piping, electrical wiring, and relocation of split and inverter ACs.",
    issues: [
      "New split / window AC installation",
      "AC relocation & uninstallation",
      "Copper pipe extension & insulation",
      "Outdoor unit heavy bracket mounting",
      "Pre-installation site inspection"
    ],
    features: ["Precision vacuum testing", "Heavy-duty rust-free brackets", "Vibration-free silent mount"]
  },
  {
    id: "fridge-repair",
    category: "fridge",
    title: "Refrigerator & Freezer Repair",
    tag: "High Demand",
    tagColor: "bg-kk-teal text-white",
    image: "/images/appliance_fridge_1789636595538.jpg",
    shortDesc: "Expert solutions for single door, double door, frost-free, and side-by-side inverter refrigerators.",
    issues: [
      "Refrigerator not cooling or freezer over-freezing",
      "Compressor not turning on or clicking noise",
      "Gas leakage & capillary choke repair",
      "Water pooling inside vegetable tray or bottom",
      "Thermostat, timer, and bi-metal sensor faults"
    ],
    features: ["Genuine compressor & relays", "100% genuine gas recharge", "90-day cooling assurance"]
  },
  {
    id: "washing-repair",
    category: "washing",
    title: "Washing Machine Repair & Service",
    tag: "Top Rated",
    tagColor: "bg-kk-red text-white",
    image: "/images/appliance_washing_machine_1789636610541.jpg",
    shortDesc: "Comprehensive repair for front-load, top-load, and semi-automatic washing machines of all leading brands.",
    issues: [
      "Machine drum not spinning or rotating",
      "Excessive vibration, shaking, or loud noise",
      "Water draining issue or E2 / OE error code",
      "Door lock jammed or door gasket torn",
      "Motor, belt, and motherboard PCB failure"
    ],
    features: ["Original shockers & spider arms", "Genuine drain pumps & valves", "Complete descaling & drum check"]
  },
  {
    id: "microwave-repair",
    category: "microwave",
    title: "Microwave Oven Repair",
    tag: "Same Day Visit",
    tagColor: "bg-amber-500 text-white",
    image: "/images/appliance_microwave_1789636624228.jpg",
    shortDesc: "Safe and certified diagnosis for solo, grill, and convection microwaves. Magnetron and touch-panel replacement.",
    issues: [
      "Microwave runs but food doesn't heat",
      "Sparking inside heating chamber",
      "Turntable glass plate not rotating",
      "Touch keypad buttons unresponsive",
      "Blown high-voltage fuse or diode failure"
    ],
    features: ["Certified high-voltage testing", "Genuine magnetrons & diodes", "Door safety interlock checks"]
  },
  {
    id: "geyser-repair",
    category: "geyser",
    title: "Geyser & Water Heater Service",
    tag: "Instant Visit",
    tagColor: "bg-kk-teal text-white",
    image: "/images/appliance_geyser.jpg",
    shortDesc: "Specialized maintenance for instant and storage electric geysers. Heating element descaling and thermostat replacement.",
    issues: [
      "Water not heating or lukewarm temperature",
      "Electric shock or MCB tripping when switched on",
      "Water leaking from tank or safety valve",
      "Heavy scale buildup on heating coil",
      "Thermostat and thermal cutout replacement"
    ],
    features: ["Heavy-duty copper elements", "High-pressure valve testing", "Earth leakage electrical safety check"]
  }
];

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

const faqs = [
  {
    q: "How does KK Multi Services pricing work?",
    a: "We believe in 100% transparent pricing. Our certified technician diagnoses your appliance on-site and provides an upfront, honest quote before beginning any repair work. When you approve the service estimate, the inspection charge is waived! You only pay for the repair and genuine replacement parts."
  },
  {
    q: "What warranty do you provide on repairs?",
    a: "All repairs and replacement components carry up to a 90-day warranty. If any issue reoccurs within the warranty period, our technician visits and rectifies it at zero additional labor cost."
  },
  {
    q: "Do you use original brand spare parts?",
    a: "Yes, exclusively. We source original OEM spare parts directly from verified manufacturers and authorized distributors for LG, Samsung, Whirlpool, Daikin, Bosch, IFB, and other brands."
  },
  {
    q: "Can I get an emergency technician visit on weekends?",
    a: "Yes! Our technicians are on duty 7 days a week, including Saturdays, Sundays, and public holidays from 8:00 AM to 10:00 PM."
  },
  {
    q: "Do you service all areas across Pune?",
    a: "Yes, our mobile service units cover Wakad, Hinjawadi, Baner, Aundh, Kothrud, Pimple Saudagar, Pimpri-Chinchwad, Hadapsar, Viman Nagar, Kharadi, and surrounding localities."
  }
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filteredServices = activeTab === "all" 
    ? servicesList 
    : servicesList.filter(s => s.category === activeTab);

  const handleSelectAcService = (serviceId: string) => {
    setActiveTab("ac");
    setTimeout(() => {
      const element = document.getElementById(serviceId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      } else {
        document.getElementById("services-grid")?.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <main id="top" className="min-h-screen font-sans bg-slate-50 text-slate-900 flex flex-col">
      {/* Top Header Bar */}
      <TopBar />

      {/* Sticky Navbar */}
      <Navbar />

      {/* Hero Header - 16:4 Aspect Ratio (referencing areas hero) */}
      <section 
        className="relative w-full aspect-[16/7] xs:aspect-[16/6] sm:aspect-[16/5] lg:aspect-[16/4] min-h-[440px] md:min-h-[380px] lg:min-h-0 flex items-center overflow-hidden border-b border-slate-200 bg-white"
        style={{ aspectRatio: "16 / 4" }}
      >
        {/* Background Image: hero_bg_01.png */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/hero_bg_01.png"
            alt="KK Multi Services Air Conditioning and Appliance Repair"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right md:object-center select-none"
          />
          {/* Left side background shadow till the text - rich contrast matching reference */}
          <div className="absolute inset-y-0 left-0 w-full sm:w-[60%] lg:w-[50%] xl:w-[48%] bg-gradient-to-r from-white via-white/95 via-white/80 to-transparent pointer-events-none z-[1]" />
          <div className="absolute inset-y-0 left-0 w-80 sm:w-[45%] bg-white/70 blur-3xl pointer-events-none z-[1]" />
        </div>

        {/* Content Container (Left Column matching areas page grid) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full py-4 sm:py-5 lg:py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Content (6 Cols lg / 5 Cols xl) */}
            <div className="lg:col-span-6 xl:col-span-5 max-w-xl">
              {/* Breadcrumb */}
              <div className="flex items-center gap-1.5 text-xs font-semibold mb-1.5 sm:mb-2">
                <Link href="/" className="text-[#0084ff] hover:underline">Home</Link>
                <span className="text-slate-400 font-normal">&gt;</span>
                <span className="text-slate-500">Services</span>
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-sky-50 border border-sky-200 text-slate-800 text-[11px] sm:text-xs font-bold mb-1.5 sm:mb-2 shadow-xs">
                <Settings className="w-3.5 h-3.5 text-[#0084ff]" />
                <span>Multi-Brand Certified AC &amp; Appliance Repair</span>
              </div>

              {/* Heading */}
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[28px] xl:text-[34px] font-black tracking-tight leading-[1.12] mb-1.5 sm:mb-2 drop-shadow-xs">
                <span className="text-[#0B1E3F] block">Expert Home Appliance &amp;</span>
                <span className="text-[#0084ff] block">Cooling AC Solutions</span>
              </h1>

              {/* Paragraph */}
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal mb-2.5 sm:mb-3 max-w-lg">
                Certified doorstep repair &amp; installation for <strong className="text-slate-900 font-bold">Split AC, VRV, Cassette AC, HVAC plants</strong>, and household appliances across <strong className="text-slate-900 font-bold">Pune &amp; PCMC</strong>. 90-minute arrival promise, genuine spare parts, and a 90-day peace-of-mind warranty.
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
                <a
                  href="tel:+917823038645"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-[#0B1E3F] hover:bg-[#162d55] text-white text-xs sm:text-sm font-bold transition-all shadow-md flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  <span>Call: +91 78230 38645</span>
                </a>
                <Link
                  href="/enquire"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-[#eaf4fd] hover:bg-[#d8ecfc] text-[#0077c8] text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 border border-[#bce0fb] shadow-xs"
                >
                  <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0077c8]" />
                  <span>Book Inspection</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0077c8]" />
                </Link>
              </div>

              {/* 4 Metric Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 max-w-xl">
                {/* Card 1 */}
                <div className="bg-white/95 rounded-xl p-1.5 sm:p-2 border border-slate-100 shadow-md shadow-slate-900/5 flex items-center gap-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-sky-100/90 flex items-center justify-center shrink-0">
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0084ff]" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight">90 Mins</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-500 font-medium leading-tight">Doorstep Response</div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white/95 rounded-xl p-1.5 sm:p-2 border border-slate-100 shadow-md shadow-slate-900/5 flex items-center gap-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-100/90 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight">90 Days</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-500 font-medium leading-tight">Service Warranty</div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white/95 rounded-xl p-1.5 sm:p-2 border border-slate-100 shadow-md shadow-slate-900/5 flex items-center gap-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-orange-100/90 flex items-center justify-center shrink-0">
                    <Wrench className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight">5,000+</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-500 font-medium leading-tight">Appliances Fixed</div>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="bg-white/95 rounded-xl p-1.5 sm:p-2 border border-slate-100 shadow-md shadow-slate-900/5 flex items-center gap-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-purple-100/90 flex items-center justify-center shrink-0">
                    <Settings className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight">100%</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-500 font-medium leading-tight">Genuine Parts</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 6 or 7 Cols Spacer so the background graphics shine through unobstructed */}
            <div className="lg:col-span-6 xl:col-span-7 hidden lg:block pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section id="services-grid" className="py-8 bg-white border-b border-slate-200 sticky top-[68px] md:top-[76px] z-40 shadow-sm backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {[
              { id: "all", label: "All Services" },
              { id: "ac", label: "Air Conditioner (AC)" },
              { id: "fridge", label: "Refrigerator" },
              { id: "washing", label: "Washing Machine" },
              { id: "microwave", label: "Microwave Oven" },
              { id: "geyser", label: "Geyser & Heater" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-kk-blue text-white shadow-md shadow-kk-blue/20"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div 
              key={service.id}
              id={service.id}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-lg shadow-slate-900/5 hover:shadow-2xl hover:border-kk-teal/30 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col group scroll-mt-36"
            >
              {/* Image & Badge */}
              <div className="relative w-full h-56 bg-slate-100 overflow-hidden flex items-center justify-center border-b border-slate-100">
                <span className={`absolute top-4 left-4 z-10 text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md ${service.tagColor}`}>
                  {service.tag}
                </span>

                <div className="relative w-full h-full">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow">
                <div className="flex items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-kk-blue transition-colors">
                    {service.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 mb-5 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Common Issues Checklist */}
                <div className="mb-6 bg-slate-50/80 rounded-2xl p-4 border border-slate-100">
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 block mb-2.5">
                    Common Problems Fixed:
                  </span>
                  <ul className="space-y-1.5">
                    {service.issues.map((issue, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-kk-teal shrink-0 mt-0.5" />
                        <span>{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Features Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.features.map((feat, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-kk-teal/5 text-kk-teal text-[11px] font-bold border border-kk-teal/15">
                      {feat}
                    </span>
                  ))}
                </div>

                {/* Guarantee & Action CTA */}
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-kk-teal shrink-0" />
                    <span className="text-xs font-bold text-slate-700">90-Day Warranty</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <a 
                      href="tel:+917823038645"
                      className="p-2.5 sm:p-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-kk-blue transition-colors"
                      aria-label={`Call for ${service.title}`}
                      title="Call Specialist"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                    <Link 
                      href="/enquire"
                      className="px-4 py-2.5 rounded-xl bg-kk-teal hover:bg-kk-teal-light text-white text-xs font-bold transition-all shadow-md hover:shadow-lg flex items-center gap-1.5"
                    >
                      Book Now <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Multi-Brand Compatibility */}
      <section className="py-14 sm:py-16 bg-slate-50/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-kk-teal block mb-2">
            Multi-Brand Compatibility
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-kk-blue tracking-tight mb-8 sm:mb-10">
            Certified Repair Across All Leading Appliance Brands
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 max-w-5xl mx-auto">
            {brandLogos.map((brand) => (
              <div 
                key={brand.name}
                className="h-16 sm:h-20 w-32 sm:w-40 px-3.5 sm:px-4 py-2 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-kk-teal/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
                title={brand.name}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image 
                    src={brand.src} 
                    alt={`${brand.name} Logo`} 
                    width={130} 
                    height={50} 
                    className="max-h-9 sm:max-h-11 w-auto max-w-[85%] object-contain group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Repair Process */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-kk-teal/10 text-kk-teal text-xs font-bold mb-3 uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" /> How It Works
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-kk-blue tracking-tight">
            Our 4-Step Express Service
          </h2>
          <p className="text-sm text-slate-500 mt-3">
            Getting your appliance repaired has never been this seamless and reliable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Quick Booking",
              desc: "Select your appliance service and convenient time slot online or over phone call."
            },
            {
              step: "02",
              title: "90-Min Arrival",
              desc: "A verified local technician arrives equipped with precision diagnostic instruments."
            },
            {
              step: "03",
              title: "Genuine Repair",
              desc: "Upfront price quotation with factory-genuine replacement parts and professional fitting."
            },
            {
              step: "04",
              title: "Testing & Warranty",
              desc: "Full functional testing before payment, accompanied by a 90-day warranty card."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xl shadow-slate-900/5 relative">
              <span className="text-4xl font-black text-slate-200 block mb-4">{item.step}</span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency CTA Banner */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-gradient-to-r from-kk-blue via-kk-blue-light to-kk-dark text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10">
          <div className="absolute top-0 right-0 w-80 h-80 bg-kk-teal/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kk-red/20 text-kk-red-light border border-kk-red/30 text-xs font-bold mb-4 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-kk-red animate-ping"></span> Urgent Breakdown
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3">
              Need Appliance Repair Right Now?
            </h3>
            <p className="text-sm sm:text-base text-slate-300">
              Speak directly with our on-duty technician for rapid doorstep dispatch in under 90 minutes.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-3.5 shrink-0 w-full md:w-auto">
            <a 
              href="tel:+917823038645"
              className="px-6 py-4 rounded-xl bg-kk-red hover:bg-kk-red-light text-white font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" /> Call Hotline: +91 78230 38645
            </a>
            <a 
              href="https://wa.me/917823038645"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#1DA851] text-white font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-kk-teal/10 text-kk-teal text-xs font-bold mb-3 uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" /> Services FAQ
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-kk-blue">
              Frequently Asked Questions About Repairs
            </h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 text-left font-bold text-slate-800 flex justify-between items-center gap-4 hover:text-kk-blue transition-colors"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-kk-teal shrink-0 transition-transform duration-200 ${openFaq === idx ? "rotate-180" : ""}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

``n
