import React, { useState, useEffect } from 'react';
import { NavLink, Link, Outlet, useLocation } from 'react-router-dom';
import { ShoppingBag, User, Send, Menu, X } from 'lucide-react';
import { ROUTES } from '../types';
import TermsDialog from './TermsDialog';

const navLeft = [
  { label: 'Shop Men', to: ROUTES.collectionsMen },
  { label: 'Shop Women', to: ROUTES.collectionsWomen },
] as const;

const navRight = [
  { label: 'Inspiration', to: ROUTES.inspiration },
  { label: 'Comfort & Fit', to: ROUTES.comfort },
  { label: 'About', to: ROUTES.about },
] as const;

function navLinkClassName(isActive: boolean) {
  return [
    'text-[12px] font-semibold uppercase tracking-widest transition-transform hover:-translate-y-0.5 cursor-pointer',
    isActive ? 'text-accent-teal border-b border-accent-teal' : 'text-zinc-600',
  ].join(' ');
}

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const mobileLinks = [...navLeft, ...navRight];

  return (
    <div className="min-h-screen flex flex-col bg-background-paper">
      <header className="bg-background-paper border-b-2 border-text-charcoal sticky top-0 z-50 pt-4 px-4 md:px-6 pb-2">
        <div className="max-w-container-max mx-auto">
          <div className="flex justify-between items-center mb-4">
            <div className="hidden md:flex flex-1 gap-6">
              {navLeft.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end
                  className={({ isActive }) => navLinkClassName(isActive)}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <div className="md:hidden flex-1">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-text-charcoal p-2"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>

            <div className="flex-1 text-center">
              <NavLink
                to={ROUTES.home}
                className="font-serif font-black text-3xl md:text-5xl tracking-tighter uppercase text-text-charcoal cursor-pointer inline-block"
              >
                L'ENTRE-DEUX
              </NavLink>
            </div>

            <div className="hidden md:flex flex-1 justify-end items-center gap-6">
              {navRight.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) => navLinkClassName(isActive)}
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="flex items-center gap-4 ml-4 pl-4 border-l border-text-charcoal">
                <button type="button" className="text-text-charcoal hover:text-accent-teal transition-colors" aria-label="Cart">
                  <ShoppingBag size={20} />
                </button>
                <button type="button" className="text-text-charcoal hover:text-accent-teal transition-colors" aria-label="Account">
                  <User size={20} />
                </button>
              </div>
            </div>

            <div className="md:hidden flex-1 flex justify-end gap-3">
              <button type="button" className="text-text-charcoal" aria-label="Cart">
                <ShoppingBag size={20} />
              </button>
              <button type="button" className="text-text-charcoal" aria-label="Account">
                <User size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-background-paper p-6 flex flex-col md:hidden">
          <div className="flex justify-between items-center mb-12">
            <span className="font-serif font-black text-2xl tracking-tighter uppercase">L'ENTRE-DEUX</span>
            <button type="button" onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
              <X size={32} strokeWidth={1} />
            </button>
          </div>
          <nav className="flex flex-col gap-8">
            {mobileLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-4xl font-serif italic text-left text-text-charcoal"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-stone-100 border-t border-text-charcoal mt-12 py-12">
        <div className="max-w-container-max mx-auto px-6">
          <div className="mb-8 text-center md:text-left">
            <Link to={ROUTES.home} className="font-serif font-bold text-2xl text-text-charcoal">
              L'ENTRE-DEUX
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 border border-text-charcoal divide-y md:divide-y-0 md:divide-x divide-text-charcoal bg-white">
            <div className="p-6 flex flex-col gap-3">
              <TermsDialog triggerClassName="footer-link" />
              <Link to={ROUTES.comfort} className="footer-link">
                Comfort & Fit
              </Link>
              <p className="mt-auto text-[10px] uppercase font-mono opacity-60">© 1924-2024 L'Entre-Deux Gazette</p>
            </div>
            <div className="p-6 flex flex-col gap-3">
              <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">Shipping Logistics</span>
              <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">Return Policy</span>
            </div>
            <div className="p-6 flex flex-col gap-3">
              <Link to={ROUTES.home} className="footer-link">
                Archives
              </Link>
              <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">Wholesale</span>
            </div>
            <div className="p-6 flex flex-col gap-3">
              <Link to={ROUTES.about} className="footer-link">
                Contact Editor
              </Link>
              <div className="mt-4">
                <p className="text-[10px] font-mono mb-2 uppercase opacity-60">Telegram Signup</p>
                <div className="flex border border-text-charcoal">
                  <input
                    type="text"
                    placeholder="DISPATCH ADDRESS"
                    className="flex-grow bg-transparent border-none text-[11px] font-mono px-2 py-2 focus:ring-0"
                  />
                  <button type="button" className="bg-text-charcoal text-white px-3 py-2 hover:bg-accent-teal transition-colors" aria-label="Subscribe">
                    <Send size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-[10px] font-mono uppercase tracking-widest opacity-60">
            Professional Apparel for the Modern Transitionalist.
          </div>
        </div>
      </footer>

      <style>{`
        .footer-link {
          @apply font-mono text-[11px] uppercase tracking-widest text-zinc-700 hover:bg-text-charcoal hover:text-background-paper px-1 transition-colors w-fit text-left cursor-pointer;
        }
      `}</style>
    </div>
  );
}
