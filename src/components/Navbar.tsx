import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtranslateSettings?: {
      default_language: string;
      native_language_names?: boolean;
      languages: string[];
      wrapper_selector: string;
      flag_size?: number;
      flag_style?: string;
    };
    doGTranslate?: (langPair: string) => void;
  }
}

interface NavbarProps {
  onOpenContact?: () => void;
}

function getInitialLanguage(): 'id' | 'en' {
  if (typeof document === 'undefined') return 'en';
  const match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]*)/);
  if (match && decodeURIComponent(match[1]).endsWith('/id')) {
    return 'id';
  }
  return 'en';
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLang, setActiveLang] = useState<'id' | 'en'>(getInitialLanguage);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isAbout = location.pathname === '/about';

  useEffect(() => {
    window.gtranslateSettings = {
      default_language: 'en',
      native_language_names: true,
      languages: ['id', 'en'],
      wrapper_selector: '.gtranslate_wrapper',
      flag_size: 24,
    };

    const libSrc = 'https://cdn.gtranslate.net/widgets/latest/lib.min.js';
    if (!document.querySelector(`script[src="${libSrc}"]`)) {
      const libScript = document.createElement('script');
      libScript.src = libSrc;
      libScript.defer = true;
      document.body.appendChild(libScript);
    }

    const flagsSrc = 'https://cdn.gtranslate.net/widgets/latest/flags.js';
    const existingFlags = document.querySelectorAll(`script[src="${flagsSrc}"]`);
    existingFlags.forEach((s) => s.remove());

    const flagsScript = document.createElement('script');
    flagsScript.src = flagsSrc;
    flagsScript.defer = true;
    document.body.appendChild(flagsScript);
  }, [location.pathname]);

  const handleWrapperClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = (e.target as HTMLElement).closest('a[data-gt-lang]') as HTMLAnchorElement | null;
    if (!target) return;

    const lang = target.getAttribute('data-gt-lang');
    if (lang === 'id' || lang === 'en') {
      e.preventDefault();
      setActiveLang(lang);
      if (typeof window.doGTranslate === 'function') {
        window.doGTranslate(`en|${lang}`);
      }
    }
  };

  const navItems = [
    { label: 'Home', href: isHome ? '#home' : '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: isHome ? '#services' : '/#services' },
    { label: 'Work', href: isHome ? '#work' : '/#work' },
    { label: 'Contact', href: isHome ? '#contact' : '/#contact' },
  ];

  const isNavItemActive = (label: string) =>
    (label === 'Home' && isHome) || (label === 'About' && isAbout);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 pt-4 pb-2 px-4 sm:px-6 md:px-8 bg-[#faf8f5]/90 backdrop-blur-md transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Brand Logo Pill */}
        <Link
          to="/"
          className="bg-[#121316] text-white px-5 py-2 rounded-full font-bold text-xl tracking-tight flex items-center hover:bg-black transition-colors shadow-sm"
          aria-label="alifbima Home"
        >
          alifbima<span className="text-[#ff5520] ml-0.5">.</span>
        </Link>

        {/* Center Navigation Pill (Desktop) */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center bg-[#121316] rounded-full p-1.5 shadow-sm space-x-1"
        >
          {navItems.map((item) => {
            const isActive = isNavItemActive(item.label);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith('#')) {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }
                }}
                className={`text-sm px-4 py-1.5 rounded-full transition-all duration-200 ${isActive
                    ? 'bg-[#ff5520] text-white font-semibold shadow-xs'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Language Flags Switcher & Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <div
            onClick={handleWrapperClick}
            className="bg-[#121316] px-2.5 py-1.5 rounded-full flex items-center shadow-sm border border-white/10"
            aria-label="Language Switcher"
          >
            <div
              className="gtranslate_wrapper notranslate"
              data-active-lang={activeLang}
            >
              <a
                href="#"
                title="Bahasa Indonesia"
                data-gt-lang="id"
                className="glink nturl notranslate"
              >
                <img
                  src="https://cdn.gtranslate.net/flags/svg/id.svg"
                  width={24}
                  height={24}
                  alt="id"
                />
              </a>
              <a
                href="#"
                title="English"
                data-gt-lang="en"
                className="glink nturl notranslate"
              >
                <img
                  src="https://cdn.gtranslate.net/flags/svg/en.svg"
                  width={24}
                  height={24}
                  alt="en"
                />
              </a>
            </div>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-[#121316] text-white hover:bg-black transition-colors"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 max-w-6xl mx-auto bg-[#121316] text-white rounded-2xl p-4 shadow-xl border border-white/10 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith('#')) {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }
                }}
                className="px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-white/10 transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                {isNavItemActive(item.label) && (
                  <span className="w-2 h-2 rounded-full bg-[#ff5520]" />
                )}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
