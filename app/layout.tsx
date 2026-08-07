import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ToastProvider from "@/components/ToastProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "INSA Summer Camp DA",
    template: "%s | INSA Summer Camp",
  },
  description:
    "A student progress dashboard and daily activity hub for the INSA Summer Camp.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000",
  ),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "INSA Summer Camp DA",
    description:
      "A student progress dashboard and daily activity hub for the INSA Summer Camp.",
    type: "website",
    locale: "en_US",
    images: ["/favicon.ico"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <div className="app-shell flex-1">{children}</div>

        <footer className="mt-auto relative overflow-hidden bg-[#090D16] border-t border-white/10 pt-16 pb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(15,76,129,0.05)] to-transparent pointer-events-none" />
          <div className="mx-auto max-w-7xl px-6 relative z-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8 mb-12">
              <div className="lg:col-span-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0F4C81] to-[#00A8E8] flex items-center justify-center text-white font-bold shadow-[0_0_15px_rgba(0,168,232,0.3)]">
                    DA
                  </div>
                  <div className="leading-tight">
                    <span className="block text-white font-bold">INSA Summer Camp</span>
                    <span className="block text-xs text-slate-400">Daily Activity Pulse</span>
                  </div>
                </div>
                <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                  Empowering the next generation of cyber leaders. A secure space for reflections, peer collaboration, and daily camp updates.
                </p>
                <div className="flex items-center gap-4">
                  <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#00A8E8] transition-all duration-300">
                    <i className="fa-brands fa-twitter text-sm" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#00A8E8] transition-all duration-300">
                    <i className="fa-brands fa-linkedin-in text-sm" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#00A8E8] transition-all duration-300">
                    <i className="fa-brands fa-github text-sm" />
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Resources</h3>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li><a href="#" className="hover:text-[#00A8E8] transition-colors">Camp Schedule</a></li>
                  <li><a href="#" className="hover:text-[#00A8E8] transition-colors">Curriculum Info</a></li>
                  <li><a href="#" className="hover:text-[#00A8E8] transition-colors">Student Guidelines</a></li>
                  <li><a href="#" className="hover:text-[#00A8E8] transition-colors">Mentorship Program</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Organization</h3>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li><a href="#" className="hover:text-[#00A8E8] transition-colors">About INSA</a></li>
                  <li><a href="#" className="hover:text-[#00A8E8] transition-colors">Leadership</a></li>
                  <li><a href="#" className="hover:text-[#00A8E8] transition-colors">Careers & Training</a></li>
                  <li><a href="#" className="hover:text-[#00A8E8] transition-colors">Press & Media</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Support</h3>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li><a href="#" className="hover:text-[#00A8E8] transition-colors">Help Center</a></li>
                  <li><a href="#" className="hover:text-[#00A8E8] transition-colors">Report an Issue</a></li>
                  <li><a href="#" className="hover:text-[#00A8E8] transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-[#00A8E8] transition-colors">Terms of Service</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
              <p>&copy; {new Date().getFullYear()} Information Network Security Administration (INSA). All rights reserved.</p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                <span>System Status: Fully Operational</span>
              </div>
            </div>
          </div>
        </footer>

        <ToastProvider />
      </body>
    </html>
  );
}
