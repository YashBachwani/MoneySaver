import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MoneySaverIcon from '../components/MoneySaverIcon';
import {
  CharacterAccountant,
  CharacterCustomer,
  CharacterMathNerd,
  CharacterModi,
  CharacterQR,
  CharacterShopkeeper,
  CharacterSitharaman,
} from '../components/characters/Characters';

export default function Home() {
  return (
    <div className="flex flex-col w-full paper-grid">

      {/* ========== HERO ========== */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center px-6 lg:px-12 text-center py-20 relative">
        {/* Technical label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="tag mb-8"
        >
          EXPERIMENT NO. 001 — UPI PAYMENT SIMULATOR
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase leading-[1] tracking-tight mb-8 max-w-5xl"
        >
          WHAT HAPPENS<br />
          WHEN YOU<br />
          <span className="relative inline-block">
            SPLIT ONE
          </span>
          <br />
          <span className="highlight-marker">PAYMENT?</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="text-base md:text-lg text-muted max-w-xl mb-12 leading-relaxed"
        >
          Drop a UPI QR, enter an amount, and watch MoneySaver break the math into smaller simulated payments.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link to="/app" className="btn-yellow text-lg px-10 py-4">
            TRY MONEYSAVER →
          </Link>
          <a href="#about" className="btn-editorial bg-background text-primary text-base px-8 py-4">
            HOW IT WORKS
          </a>
        </motion.div>

        {/* Decorative arrow pointing down */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-muted font-display text-xl tracking-widest flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold">the math ↓</span>
        </motion.div>

        {/* ========== HERO GRAPHIC ========== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 w-full max-w-3xl"
        >
          <div className="editorial-card p-6 md:p-10">
            <div className="mb-6 flex items-center justify-center gap-3 border-b-2 border-primary/20 pb-5 text-left sm:gap-5">
              <CharacterShopkeeper className="h-20 w-20 shrink-0 sm:h-24 sm:w-24" />
              <div className="min-w-0">
                <span className="tag mb-2 inline-block">THE QR QUESTION</span>
                <p className="text-sm font-bold">How much am I actually paying?</p>
              </div>
              <MoneySaverIcon className="hidden h-14 w-14 shrink-0 sm:block" />
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">

              {/* Original amount */}
              <div className="flex flex-col items-center gap-3">
                <span className="tag">ORIGINAL</span>
                <div className="border-3 border-primary px-8 py-5 bg-accent">
                  <span className="font-display text-4xl md:text-5xl">₹8,500</span>
                </div>
              </div>

              {/* Arrow */}
              <div className="font-display text-3xl hidden md:block">→</div>
              <div className="font-display text-3xl md:hidden">↓</div>

              {/* Splits */}
              <div className="flex flex-col gap-2 items-center">
                <span className="tag">SIMULATED SPLITS</span>
                <div className="flex flex-col gap-2 mt-2">
                  {[2000, 2000, 2000, 2000, 500].map((amt, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + i * 0.08 }}
                      className="border-2 border-primary px-4 py-2 flex items-center justify-between gap-6 bg-background"
                    >
                      <span className="font-bold text-sm">₹{amt.toLocaleString('en-IN')}</span>
                      <span className="text-xs text-muted font-mono">→ merchant@upi</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Total check */}
            <div className="mt-8 pt-6 border-t-2 border-primary flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-muted">TOTAL CHECK</span>
              <span className="font-display text-2xl">₹8,500 <span className="text-accent bg-primary px-2 py-0.5 text-sm">✓</span></span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ========== ABOUT SECTION ========== */}
      <section id="about" className="py-24 px-6 lg:px-12 bg-surface border-t-3 border-primary">
        <div className="max-w-4xl mx-auto">

          {/* Section label */}
          <div className="mb-6 flex items-center gap-3"><MoneySaverIcon className="h-9 w-9" /><div className="tag">ABOUT THE EXPERIMENT</div></div>

          <div className="grid md:grid-cols-2 gap-16">

            {/* Why */}
            <div>
              <h2 className="font-display text-4xl md:text-5xl uppercase mb-6 leading-[0.95]">
                WHY DID<br />WE BUILD<br /><span className="highlight-marker">THIS?</span>
              </h2>
              <p className="text-muted leading-relaxed">
                UPI payments look simple on the surface, but the rules behind merchant payments can get surprisingly complicated. MoneySaver is a small experiment designed to make that math visual and understandable.
              </p>
            </div>

            {/* What it does */}
            <div>
              <h2 className="font-display text-4xl md:text-5xl uppercase mb-6 leading-[0.95]">
                WHAT IT<br /><span className="highlight-marker">DOES</span>
              </h2>
              <ul className="space-y-4">
                {[
                  'Reads a UPI QR',
                  'Extracts payment information',
                  'Calculates simulated splits',
                  'Generates demo QR representations',
                  'Shows the mathematics clearly',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="font-display text-lg leading-none mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>

              {/* What it doesn't */}
              <div className="mt-10 pt-6 border-t-2 border-primary">
                <h3 className="font-bold text-sm uppercase tracking-wider mb-4">What it doesn't do</h3>
                <ul className="space-y-2 text-muted text-sm">
                  {[
                    'Process payments',
                    'Access bank accounts',
                    'Store UPI credentials',
                    'Bypass payment-provider systems',
                    'Guarantee fee avoidance',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-primary font-bold">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="money-desk" className="py-16 md:py-20 px-5 sm:px-6 lg:px-12 border-t-3 border-primary">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b-3 border-primary pb-6">
            <div>
              <div className="tag mb-4">THE INDEPENDENT PAYMENT EDITION</div>
              <h2 className="font-display text-5xl sm:text-6xl uppercase leading-[0.9]">THE MONEY<br /><span className="highlight-marker">DESK</span></h2>
            </div>
            <p className="max-w-sm text-sm sm:text-base text-muted">Payment math, explained without making your brain hurt.</p>
          </div>

          <div className="mt-8">
            <h3 className="font-display text-2xl uppercase mb-4">MEET THE CAST</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              <article className="character-card border-2 border-primary bg-background p-4">
                <CharacterShopkeeper className="mx-auto h-24 w-28" />
                <h4 className="mt-2 font-bold text-xs uppercase tracking-wider">THE SHOPKEEPER</h4>
                <p className="mt-1 text-sm text-muted">How much am I actually paying?</p>
              </article>
              <article className="character-card border-2 border-primary bg-background p-4">
                <CharacterCustomer className="mx-auto h-24 w-28" />
                <h4 className="mt-2 font-bold text-xs uppercase tracking-wider">THE CUSTOMER</h4>
                <p className="mt-1 text-sm text-muted">Can I just scan this?</p>
              </article>
              <article className="character-card border-2 border-primary bg-background p-4">
                <CharacterMathNerd className="mx-auto h-24 w-28" />
                <h4 className="mt-2 font-bold text-xs uppercase tracking-wider">THE MATH NERD</h4>
                <p className="mt-1 text-sm text-muted">Give me 3 seconds.</p>
              </article>
              <article className="character-card border-2 border-primary bg-background p-4">
                <CharacterAccountant className="mx-auto h-24 w-28" />
                <h4 className="mt-2 font-bold text-xs uppercase tracking-wider">THE ACCOUNTANT</h4>
                <p className="mt-1 text-sm text-muted">Where did that ₹1 go?</p>
              </article>
              <article className="character-card border-2 border-primary bg-background p-4">
                <CharacterQR className="mx-auto h-24 w-28" />
                <h4 className="mt-2 font-bold text-xs uppercase tracking-wider">THE QR GUY</h4>
                <p className="mt-1 text-sm text-muted">SCAN ME.</p>
              </article>
            </div>
          </div>

          <div className="mt-12 grid gap-6 border-t-3 border-primary pt-8 md:grid-cols-[1fr_1.3fr] md:items-center">
            <div>
              <div className="tag mb-4">PUBLIC POLICY · INDEPENDENT CONTEXT</div>
              <h3 className="font-display text-3xl uppercase leading-none">PAYMENT RULES<br />HAVE A BACKSTORY</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">Public policy and financial rules shape payment systems. MoneySaver is an independent educational simulation, not a policy statement.</p>
            </div>
            <div>
              <div className="grid grid-cols-2 divide-x-2 divide-primary border-y-2 border-primary py-4">
                <article className="flex items-center gap-2 pr-3 sm:gap-4 sm:pr-5">
                  <CharacterModi className="h-20 w-20 shrink-0 sm:h-24 sm:w-24" />
                  <div className="min-w-0"><p className="text-[10px] font-bold uppercase tracking-wider text-muted">PAYMENT RULES</p><h4 className="mt-1 text-sm font-bold">Narendra Modi</h4></div>
                </article>
                <article className="flex items-center gap-2 pl-3 sm:gap-4 sm:pl-5">
                  <CharacterSitharaman className="h-20 w-20 shrink-0 sm:h-24 sm:w-24" />
                  <div className="min-w-0"><p className="text-[10px] font-bold uppercase tracking-wider text-muted">PUBLIC FINANCE</p><h4 className="mt-1 text-sm font-bold">Nirmala Sitharaman</h4></div>
                </article>
              </div>
              <p className="mt-3 text-xs text-muted">Independent editorial illustrations. No affiliation, endorsement, or attributed statements.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
