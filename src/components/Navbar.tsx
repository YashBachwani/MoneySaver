import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import MoneySaverIcon from './MoneySaverIcon';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full border-b-3 border-primary bg-background sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 lg:px-12 h-16">
        {/* Logo */}
        <Link to="/" aria-label="MoneySaver home" className="flex items-center gap-2 group">
          <MoneySaverIcon className="w-9 h-9 shrink-0" />
          <span className="flex items-baseline gap-1 font-display text-xl sm:text-2xl md:text-3xl uppercase leading-none">
            MONEY SAVER<span className="w-2 h-2 bg-accent inline-block ml-0.5" />
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wider">
          <Link to="/" className="nav-marker">
            How it works
          </Link>
          <Link to="/app" className="nav-marker">
            Demo
          </Link>
          <a href="#about" className="nav-marker">
            About
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link to="/app" className="btn-editorial inline-flex items-center gap-2">
            TRY IT →
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button 
          type="button"
          className="md:hidden p-2 -mr-2 border-2 border-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t-3 border-primary overflow-hidden"
            id="mobile-navigation"
          >
            <div className="flex flex-col p-6 gap-4">
              <Link to="/" onClick={() => setMobileOpen(false)} className="font-bold uppercase tracking-wider text-sm py-2 border-b-2 border-surface">
                How it works
              </Link>
              <Link to="/app" onClick={() => setMobileOpen(false)} className="font-bold uppercase tracking-wider text-sm py-2 border-b-2 border-surface">
                Demo
              </Link>
              <a href="#about" onClick={() => setMobileOpen(false)} className="font-bold uppercase tracking-wider text-sm py-2 border-b-2 border-surface">
                About
              </a>
              <Link to="/app" onClick={() => setMobileOpen(false)} className="btn-editorial text-center mt-2">
                TRY IT →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
