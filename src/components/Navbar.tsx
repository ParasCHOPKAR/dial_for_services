"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Phone, 
  ArrowRight, 
  Menu, 
  X, 
  Calendar, 
  ChevronDown,
  Wind,
  Home,
  Sparkles,
  Zap,
  Flame,
  Building,
  ShieldCheck,
  Wrench
} from "lucide-react";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { useTheme } from "@/context/ThemeContext";
import { useBookingModal } from "@/context/BookingModalContext";
import LanguageSelector from "@/components/LanguageSelector";

const SERVICES_MENU_ITEMS = [
  {
    title: "Split & Inverter AC",
    desc: "Jet pump wash, PCB & gas charging",
    href: "/services#split-ac",
    icon: Wind,
  },
  {
    title: "Refrigerator & Freezer",
    desc: "Single, double & commercial deep freezer",
    href: "/services#refrigerator",
    icon: Home,
  },
  {
    title: "Washing Machine",
    desc: "Front load, top load & motor repair",
    href: "/services#washing-machine",
    icon: Sparkles,
  },
  {
    title: "Cassette & Ceiling AC",
    desc: "4-way commercial cassette repair",
    href: "/services#cassette-ac",
    icon: Building,
  },
  {
    title: "Commercial VRV / VRF",
    desc: "Daikin, Mitsubishi, multi-compressor",
    href: "/services#vrv-ac",
    icon: Zap,
  },
  {
    title: "Microwave & Oven",
    desc: "Magnetron, touch panel & sparking fix",
    href: "/services#microwave",
    icon: Wrench,
  },
  {
    title: "Geyser & Water Heater",
    desc: "Coil replacement, safety & descaling",
    href: "/services#geyser",
    icon: Flame,
  },
  {
    title: "Appliance AMC & CMC",
    desc: "Zero-downtime maintenance contracts",
    href: "/amc",
    icon: ShieldCheck,
  },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();
  const { theme, mounted } = useTheme();
  const { openBookingModal } = useBookingModal();
  const isLight = mounted && theme === "light";

  const isHomePage = pathname === "/";
  const isAboutPage = pathname === "/about";
  const isContactPage = pathname === "/contact";
  const isServicesPage = pathname === "/services";
  const isAreasPage = pathname === "/areas";
  const isAmcPage = pathname === "/amc";
  const isBlogPage = pathname === "/blog";
  const isEnquirePage = pathname === "/enquire";

  const navLinks = [
    { href: "/", label: "Home", active: isHomePage },
    { href: "/about", label: "About", active: isAboutPage },
    { href: "/services", label: "Services", active: isServicesPage },
    { href: "/amc", label: "AMC / CMC", active: isAmcPage },
    { href: "/areas", label: "Areas", active: isAreasPage },
    { href: "/blog", label: "Blog", active: isBlogPage },
    { href: "/contact", label: "Contact", active: isContactPage },
    { href: "/enquire", label: "Enquire", active: isEnquirePage },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop || window.scrollY || 0;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const progress = (totalScroll / windowHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav 
        className={`relative w-full sticky top-0 z-50 transition-colors duration-300 ${
          isLight 
            ? "bg-white border-b border-slate-200/90 shadow-xs" 
            : "bg-black border-b border-white/10"
        }`}
      >
        {/* Scroll Progress Line - Logo Cyan, Blue, and Green Gradient */}
        <div 
          className="absolute top-0 left-0 w-full h-[3px] md:h-1 bg-white/10 pointer-events-none overflow-hidden" 
          role="progressbar" 
          aria-valuenow={Math.round(scrollProgress)} 
          aria-valuemin={0} 
          aria-valuemax={100}
          aria-label="Scroll progress indicator"
        >
          <div 
            className="h-full bg-gradient-to-r from-kk-teal via-kk-blue-light to-[#16a34a] transition-[width] duration-75 ease-out shadow-[0_0_10px_rgba(0,196,204,0.8)]"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex justify-between items-center py-2.5 md:py-3">
            {/* Logo */}
            <div className="flex shrink-0">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/new_imgs/logo.png" 
                  alt="Dial For Services Logo" 
                  width={260} 
                  height={80} 
                  className={`h-10 sm:h-12 md:h-14 w-auto object-contain transition-all duration-300 ${!isLight ? 'drop-shadow-[0_2px_14px_rgba(0,196,204,0.35)]' : ''}`} 
                  priority 
                />
              </Link>
            </div>

            {/* Nav Links - Desktop */}
            <div className="hidden lg:flex flex-1 justify-center items-center space-x-3.5 xl:space-x-6 2xl:space-x-7">
              {navLinks.map((link) => {
                if (link.href === "/services") {
                  return (
                    <div 
                      key={link.href}
                      className="relative"
                      onMouseEnter={() => setIsServicesDropdownOpen(true)}
                      onMouseLeave={() => setIsServicesDropdownOpen(false)}
                    >
                      <Link 
                        href="/services" 
                        onClick={() => setIsServicesDropdownOpen(false)}
                        className={`text-xs xl:text-sm transition-colors inline-flex items-center gap-1 py-2 ${
                          link.active 
                            ? isLight
                              ? "font-bold text-[#002244] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-kk-teal"
                              : "font-bold text-white relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-kk-teal"
                            : isLight
                              ? "font-medium text-slate-700 hover:text-kk-teal"
                              : "font-medium text-slate-300 hover:text-white"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesDropdownOpen ? "rotate-180 text-kk-teal" : ""}`} />
                      </Link>

                      {/* Dropdown Menu Panel */}
                      <div 
                        className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 z-[90] ${
                          isServicesDropdownOpen 
                            ? "opacity-100 translate-y-0 pointer-events-auto visible" 
                            : "opacity-0 -translate-y-2 pointer-events-none invisible"
                        }`}
                      >
                        <div className={`w-[540px] rounded-2xl p-5 shadow-2xl border backdrop-blur-xl ${
                          isLight 
                            ? "bg-white/95 border-slate-200/90 text-slate-900 shadow-slate-900/15" 
                            : "bg-[#071124]/95 border-white/10 text-white shadow-black/60"
                        }`}>
                          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-white/10">
                            <div>
                              <span className="text-[10px] font-black tracking-widest uppercase text-kk-teal">Our Specializations</span>
                              <h4 className="text-xs font-black text-slate-900 dark:text-white">Expert Appliance Care in Pune</h4>
                            </div>
                            <Link 
                              href="/services" 
                              onClick={() => setIsServicesDropdownOpen(false)}
                              className="text-[11px] font-bold text-kk-teal hover:underline flex items-center gap-1"
                            >
                              All Services <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            {SERVICES_MENU_ITEMS.map((item) => {
                              const IconComponent = item.icon;
                              return (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={() => setIsServicesDropdownOpen(false)}
                                  className={`group flex items-start gap-3 p-2.5 rounded-xl transition-all duration-200 ${
                                    isLight 
                                      ? "hover:bg-slate-50 text-slate-700 hover:text-kk-blue" 
                                      : "hover:bg-white/5 text-slate-200 hover:text-cyan-300"
                                  }`}
                                >
                                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#003B8E]/10 to-[#00C8D7]/15 dark:from-[#00C8D7]/15 dark:to-[#65D01E]/15 flex items-center justify-center shrink-0 text-kk-teal group-hover:scale-110 transition-transform">
                                    <IconComponent className="w-4 h-4" />
                                  </div>
                                  <div>
                                    <div className="text-xs font-extrabold group-hover:text-kk-teal transition-colors">
                                      {item.title}
                                    </div>
                                    <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                                      {item.desc}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>

                          <div className={`mt-3 pt-3 border-t flex items-center justify-between text-[11px] ${
                            isLight ? "border-slate-100 text-slate-500" : "border-white/10 text-slate-400"
                          }`}>
                            <span className="flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-[#65D01E]" />
                              60-Min Express Arrival Across Pune
                            </span>
                            <span className="font-bold text-kk-teal">90-Day Guarantee</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link 
                    key={link.href}
                    href={link.href} 
                    className={`text-xs xl:text-sm transition-colors py-2 ${
                      link.active 
                        ? isLight
                          ? "font-bold text-[#002244] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-kk-teal"
                          : "font-bold text-white relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-kk-teal"
                        : isLight
                          ? "font-medium text-slate-700 hover:text-kk-teal"
                          : "font-medium text-slate-300 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* CTA & Mobile Actions */}
            <div className="flex items-center justify-end gap-2.5 sm:gap-4 md:gap-6">
              <LanguageSelector />
              
              {/* Desktop Direct Phone */}
              <div className="hidden md:flex items-center gap-4 xl:gap-6">
                <a 
                  href="tel:+917823038645" 
                  className={`flex items-center gap-2 font-bold hover:text-kk-teal transition-colors text-xs xl:text-sm ${
                    isLight ? "text-[#002244]" : "text-white"
                  }`}
                >
                  <Phone className="w-4 h-4 text-kk-teal" />
                  <span className="hidden xl:block">+91 78230 38645</span>
                </a>
                <button 
                  type="button"
                  onClick={() => openBookingModal()}
                  className="hidden lg:flex px-4 xl:px-6 py-2 xl:py-2.5 rounded-lg font-bold text-xs xl:text-sm transition-all shadow-md hover:shadow-lg items-center gap-2 active:scale-95 cursor-pointer bg-gradient-to-r from-kk-teal to-[#16a34a] hover:opacity-95 text-white"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a Service</span>
                </button>
              </div>

              {/* Mobile Quick Call Button */}
              <a 
                href="tel:+917823038645" 
                className="flex lg:hidden items-center justify-center w-9 h-9 rounded-full bg-kk-teal text-white hover:bg-kk-teal-light transition-colors shadow-sm active:scale-90"
                aria-label="Call Now"
              >
                <Phone className="w-4 h-4" />
              </a>
              
              {/* Mobile Menu Button */}
              <button 
                className={`lg:hidden p-2 transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-kk-teal/40 ${
                  isLight ? "text-slate-800 hover:text-kk-teal" : "text-white hover:text-kk-teal"
                }`}
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-xs lg:hidden transition-opacity" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm z-[70] transform transition-transform duration-300 ease-in-out lg:hidden shadow-2xl flex flex-col justify-between overflow-y-auto ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } ${
          isLight ? "bg-white text-slate-900 border-l border-slate-200" : "bg-black text-white border-l border-white/10"
        }`}
      >
        <div>
          <div className={`flex justify-between items-center p-5 border-b ${isLight ? "border-slate-100" : "border-white/10"}`}>
            <Image 
              src="/new_imgs/logo.png" 
              alt="Dial For Services Logo" 
              width={180} 
              height={55} 
              className={`h-9 w-auto object-contain ${!isLight ? 'drop-shadow-[0_2px_10px_rgba(0,196,204,0.35)]' : ''}`} 
            />
            <button 
              className={`p-2 transition-colors rounded-full ${
                isLight 
                  ? "text-slate-500 hover:text-kk-teal bg-slate-100 hover:bg-slate-200" 
                  : "text-slate-400 hover:text-white bg-white/10 hover:bg-white/20"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex flex-col p-5 space-y-1.5">
            {navLinks.map((link) => {
              if (link.href === "/services") {
                return (
                  <div key={link.href} className="flex flex-col">
                    <div 
                      className={`px-4 py-3 rounded-xl text-base transition-colors flex items-center justify-between cursor-pointer ${
                        link.active 
                          ? isLight
                            ? "font-bold text-kk-teal bg-kk-teal/10"
                            : "font-bold text-cyan-300 bg-white/10"
                          : isLight
                            ? "font-medium text-slate-700 hover:bg-slate-50"
                            : "font-medium text-slate-200 hover:bg-white/5"
                      }`}
                    >
                      <Link 
                        href="/services" 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex-grow flex items-center justify-between"
                      >
                        <span>{link.label}</span>
                        {link.active && <span className="w-1.5 h-1.5 rounded-full bg-kk-teal mr-2"></span>}
                      </Link>
                      <button 
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsMobileServicesOpen(!isMobileServicesOpen);
                        }}
                        className="p-1 -mr-1 text-slate-400 hover:text-kk-teal transition-colors"
                        aria-label="Toggle Services List"
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180 text-kk-teal" : ""}`} />
                      </button>
                    </div>

                    {/* Expandable sub-services list */}
                    {isMobileServicesOpen && (
                      <div className="mt-1 ml-3 pl-3 border-l-2 border-kk-teal/30 space-y-1 py-1">
                        {SERVICES_MENU_ITEMS.map((sub) => {
                          const SubIcon = sub.icon;
                          return (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsMobileServicesOpen(false);
                              }}
                              className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                                isLight 
                                  ? "text-slate-600 hover:text-kk-blue hover:bg-slate-100" 
                                  : "text-slate-300 hover:text-cyan-300 hover:bg-white/5"
                              }`}
                            >
                              <SubIcon className="w-3.5 h-3.5 text-kk-teal shrink-0" />
                              <span>{sub.title}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className={`px-4 py-3 rounded-xl text-base transition-colors flex items-center justify-between ${
                    link.active 
                      ? isLight
                        ? "font-bold text-kk-teal bg-kk-teal/10"
                        : "font-bold text-cyan-300 bg-white/10"
                      : isLight
                        ? "font-medium text-slate-700 hover:bg-slate-50"
                        : "font-medium text-slate-200 hover:bg-white/5"
                  }`} 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{link.label}</span>
                  {link.active && <span className="w-1.5 h-1.5 rounded-full bg-kk-teal"></span>}
                </Link>
              );
            })}
          </div>

          {/* Mobile Theme Switcher */}
          <div className="px-5 pb-4">
            <ThemeSwitcher variant="mobile" />
          </div>
        </div>

        {/* Drawer Bottom Actions */}
        <div className={`p-5 border-t ${isLight ? "border-slate-100 bg-slate-50/50" : "border-white/10 bg-[#08080a]"}`}>
          <a 
            href="tel:+917823038645" 
            className={`flex items-center gap-3.5 font-bold transition-colors mb-4 p-3.5 rounded-xl shadow-xs border ${
              isLight 
                ? "bg-white border-slate-200/80 text-slate-800 hover:text-[#002244]" 
                : "bg-[#111116] border-white/10 text-white hover:text-cyan-300"
            }`}
          >
            <div className="w-10 h-10 rounded-full bg-kk-teal/10 flex items-center justify-center text-kk-teal shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] opacity-70 font-medium">24/7 Emergency Service</span>
              <span className="text-base font-extrabold">+91 78230 38645</span>
            </div>
          </a>
          
          <button 
            type="button"
            onClick={() => {
              setIsMobileMenuOpen(false);
              openBookingModal();
            }}
            className="bg-gradient-to-r from-kk-teal to-[#16a34a] hover:opacity-95 text-white px-5 py-3.5 rounded-xl font-bold text-base transition-all shadow-md flex items-center justify-center gap-2 w-full text-center active:scale-95 cursor-pointer" 
          >
            Book a Service <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
}
