import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { BookingModalProvider } from "@/context/BookingModalContext";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Dial For Services | Professional AC & Appliance Repair",
  description: "Expert AC, Refrigerator, Washing Machine, Microwave Repair, Installation, and Maintenance services. Reliable, fast, and affordable solutions for your home and business.",
  icons: {
    icon: "/new_imgs/favicon.png",
    shortcut: "/new_imgs/favicon.png",
    apple: "/new_imgs/favicon.png",
  },
  openGraph: {
    title: "Dial For Services | Professional Home Appliance Services",
    description: "Expert AC, Refrigerator, and Appliance Repair, Installation, and Maintenance services.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth antialiased dark`} data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('dfs_theme') || localStorage.getItem('kk_theme');
                  var resolved = (t === 'light' || t === 'logo') ? 'light' : 'dark';
                  document.documentElement.setAttribute('data-theme', resolved);
                  if (resolved === 'dark') {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  } else {
                    document.documentElement.classList.add('light');
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <script type="text/javascript" dangerouslySetInnerHTML={{
          __html: `
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,hi,mr',
                autoDisplay: false
              }, 'google_translate_element');
            }
          `
        }} />
        <script type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
        <style dangerouslySetInnerHTML={{
          __html: `
            .goog-te-banner-frame { display: none !important; }
            iframe.skiptranslate { display: none !important; }
            .goog-te-menu-value { display: none !important; }
            .goog-tooltip { display: none !important; }
            .goog-tooltip:hover { display: none !important; }
            .goog-text-highlight { background-color: transparent !important; border: none !important; box-shadow: none !important; }
            body { top: 0 !important; position: static !important; }
            #google_translate_element { display: none !important; }
            .VIpgJd-ZVi9od-aZ2wEe-wOHMyf { display: none !important; }
            .VIpgJd-ZVi9od-ORHb-OEVmcd { display: none !important; }
          `
        }} />
      </head>
      <body className="font-sans min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <div id="google_translate_element"></div>
        <ThemeProvider>
          <BookingModalProvider>
            {children}
          </BookingModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
