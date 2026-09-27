import { Link } from 'react-router-dom';
import MoneySaverIcon from './MoneySaverIcon';

export default function Footer() {
  return (
    <footer className="w-full border-t-3 border-primary bg-dark text-background mt-auto">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left: Logo & tagline */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <MoneySaverIcon className="w-12 h-12 shrink-0" />
              <span className="font-display text-3xl sm:text-4xl uppercase leading-none">MONEY SAVER<span className="text-accent"> ▪</span></span>
            </div>
            <p className="text-sm opacity-60 max-w-xs">
              A tiny experiment in payment math.
            </p>
          </div>

          {/* Middle: Links */}
          <div className="flex gap-12 text-sm font-bold uppercase tracking-wider border-y-2 border-accent/50 py-4 md:border-y-0 md:py-0">
            <div className="flex flex-col gap-3">
              <Link to="/" className="hover:text-accent transition-colors">How it works</Link>
              <Link to="/app" className="hover:text-accent transition-colors">Demo</Link>
              <a href="#about" className="hover:text-accent transition-colors">About</a>
            </div>
          </div>

          {/* Right: Privacy */}
          <div className="flex flex-col gap-3 text-sm opacity-60 max-w-xs">
            <p>Your QR is processed locally in your browser.</p>
            <p>We don't store your data. We don't want it.</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-background/20 flex flex-col md:flex-row justify-between gap-4 text-xs opacity-50 uppercase tracking-wider">
          <p>Demo / Educational Tool — No payments processed</p>
          <p>MoneySaver does not access bank accounts or guarantee fee/MDR avoidance.</p>
        </div>
      </div>
    </footer>
  );
}
