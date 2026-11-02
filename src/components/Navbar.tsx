import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navItems = [
    { label: 'Home', href: isHome ? '#home' : '/' },
    { label: 'About', href: isHome ? '#about' : '/#about' },
    { label: 'Services', href: isHome ? '#services' : '/#services' },
    { label: 'Work', href: isHome ? '#work' : '/#work' },
    { label: 'Contact', href: isHome ? '#contact' : '/#contact' },
  ];

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
          aria-label="Talmeez Home"
        >
          alifbima<span className="text-[#ff5520] ml-0.5">.</span>
        </Link>

        {/* Center Navigation Pill (Desktop) */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center bg-[#121316] rounded-full p-1.5 shadow-sm space-x-1"
        >
          {navItems.map((item) => {
            const isActive = isHome && item.label === 'Home';
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
                className={`text-sm px-4 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-[#ff5520] text-white font-semibold shadow-xs'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button (Desktop) */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onOpenContact}
            className="group bg-[#121316] hover:bg-black text-white text-sm font-semibold pl-5 pr-2 py-2 rounded-full flex items-center gap-3 transition-all shadow-sm"
          >
            <span>Let's Talk</span>
            <span className="w-7 h-7 rounded-full bg-[#ff5520] text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenContact}
            className="bg-[#ff5520] text-white text-xs font-semibold px-3 py-2 rounded-full flex items-center gap-1.5 shadow-xs"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-3 h-3" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-[#121316] text-white hover:bg-black transition-colors"
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
                {item.label === 'Home' && isHome && (
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
