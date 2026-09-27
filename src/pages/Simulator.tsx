import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, AlertCircle } from 'lucide-react';
import jsQR from 'jsqr';
import { QRCodeSVG } from 'qrcode.react';

import { parseUpiUrl, generateUpiUrl } from '../utils/upiParser';
import type { UpiDetails } from '../utils/upiParser';
import { calculateSplitAmount } from '../utils/splitCalculator';
import type { SplitResult } from '../utils/splitCalculator';
import { formatCurrency, formatCurrencyRaw, parseCurrencyInput, sanitizeCurrencyInput } from '../utils/currency';
import MoneySaverIcon from '../components/MoneySaverIcon';
import { CharacterMathNerd, CharacterQR, CharacterShopkeeper } from '../components/characters/Characters';

export default function Simulator() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [upiDetails, setUpiDetails] = useState<UpiDetails | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState('');
  
  const [totalAmountStr, setTotalAmountStr] = useState('');
  const [amountFocused, setAmountFocused] = useState(false);
  const [maxAmount, setMaxAmount] = useState(2000);
  
  const [splitResult, setSplitResult] = useState<SplitResult | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const totalAmount = parseCurrencyInput(totalAmountStr);
  const amountIsValid = totalAmountStr !== ''
    && Number.isFinite(totalAmount)
    && totalAmount > 0
    && /^\d+(?:\.\d{0,2})?$/.test(totalAmountStr);
  const amountStatus = totalAmountStr === ''
    ? 'ENTER AN AMOUNT'
    : !Number.isFinite(totalAmount) || !/^\d+(?:\.\d{0,2})?$/.test(totalAmountStr)
      ? 'THAT NUMBER LOOKS A LITTLE WEIRD.'
      : totalAmount <= 0
        ? 'AMOUNT MUST BE GREATER THAN ₹0'
        : '✓ AMOUNT READY';
  const liveSplit = amountIsValid ? calculateSplitAmount(totalAmount, maxAmount) : null;
  const sliderMax = Math.max(20000, Math.ceil(totalAmount / 500) * 500);

  const handleDemoMode = () => {
    setUpiDetails({
      upiId: 'demo-store@upi',
      payeeName: 'Demo Store',
      originalUrl: 'upi://pay?pa=demo-store@upi&pn=Demo%20Store'
    });
    setTotalAmountStr('7500');
    setAmountFocused(false);
    setMaxAmount(2000);
    setStep(2);
    setError(null);
  };

  const processImage = (file: File) => {
    setError(null);
    setLoading(true);
    setLoadingMsg('READING YOUR QR...');
    
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          setError('Failed to process image.');
          setLoading(false);
          return;
        }
        
        ctx.drawImage(img, 0, 0, img.width, img.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        
        const code = jsQR(imageData.data, imageData.width, imageData.height, {
          inversionAttempts: "dontInvert",
        });
        
        if (code) {
          const details = parseUpiUrl(code.data);
          if (details) {
            setUpiDetails(details);
            setLoadingMsg('QR understood. 👀');
            setTimeout(() => {
              setStep(2);
              setLoading(false);
            }, 800);
          } else {
            setError("Hmm… this doesn't look like a UPI QR.");
            setLoading(false);
          }
        } else {
          setError("That's a QR. Just not the QR we're looking for.");
          setLoading(false);
        }
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processImage(e.dataTransfer.files[0]);
    }
  };

  const handleCalculate = () => {
    if (totalAmount <= 0) {
      setError('Please enter a valid amount.');
      return;
    }
    if (maxAmount <= 0) {
      setError('Maximum amount must be greater than 0.');
      return;
    }
    setError(null);
    const res = calculateSplitAmount(totalAmount, maxAmount);
    setSplitResult(res);
    setStep(3);
  };

  const reset = () => {
    setStep(1);
    setUpiDetails(null);
    setSplitResult(null);
    setTotalAmountStr('');
    setAmountFocused(false);
    setMaxAmount(2000);
    setError(null);
  };

  const cardRotations = [-1.2, 0.5, -0.8, 1.1, -0.3, 0.7, -1, 0.4];

  return (
    <div className="w-full paper-grid min-h-screen">
      <div className="max-w-6xl mx-auto p-4 md:p-8">

        {/* Page header */}
        <div className="mb-8 md:mb-12 pt-4">
          <div className="tag mb-4">EXPERIMENT 01</div>
          <h1 className="font-display text-5xl md:text-7xl uppercase leading-[0.9] mb-3">
            SPLIT THE<br /><span className="highlight-marker">MATH</span>
          </h1>
          <p className="text-muted text-sm max-w-md">
            Upload a UPI QR → enter an amount → watch the simulation.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* ========== LEFT PANEL ========== */}
          <div className="w-full lg:w-[380px] flex flex-col gap-6 lg:sticky lg:top-24">

            {/* STEP 1: QR Upload */}
            <div className={`editorial-card p-0 overflow-hidden transition-opacity ${step > 1 ? 'opacity-70' : ''}`}>
              {/* Step header */}
              <div className="flex items-center justify-between px-5 py-3 border-b-3 border-primary bg-primary text-background">
                <span className="font-bold text-xs uppercase tracking-widest">01 — UPLOAD QR</span>
                {step > 1 && <span className="bg-accent text-primary text-[10px] font-bold px-2 py-0.5 tracking-wider">DONE ✓</span>}
              </div>

              <div className="p-5">
                {step === 1 ? (
                  <>
                    <div
                      role="button"
                      tabIndex={0}
                      aria-label="Choose a UPI QR image to upload"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          fileInputRef.current?.click();
                        }
                      }}
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full aspect-[4/3] border-3 border-dashed border-primary hover:border-accent hover:bg-accent/10 transition-all flex flex-col items-center justify-center cursor-pointer p-4 text-center group"
                    >
                      <input 
                        type="file" 
                        ref={fileInputRef} 
                        onChange={(e) => e.target.files?.[0] && processImage(e.target.files[0])}
                        accept="image/*" 
                        className="hidden" 
                      />
                      
                      {loading ? (
                        <div className="flex flex-col items-center gap-3">
                          <MoneySaverIcon className="h-10 w-10 animate-spin" />
                          <p className="text-sm font-bold uppercase tracking-wider">{loadingMsg}</p>
                        </div>
                      ) : (
                        <>
                          <Upload size={36} className="mb-3 group-hover:scale-110 transition-transform" />
                          <p className="font-display text-2xl uppercase mb-1">
                            <span className="group-hover:hidden">DROP YOUR<br />UPI QR HERE</span>
                            <span className="hidden group-hover:inline">DROP IT HERE →</span>
                          </p>
                          <p className="text-xs text-muted font-bold uppercase tracking-wider mt-2">PNG / JPG / WEBP</p>
                          <div className="mt-3 flex items-center justify-center gap-2">
                            <CharacterQR className="h-10 w-11 shrink-0" />
                            <p className="max-w-[150px] text-left text-xs italic text-muted">Let's see what you've got.</p>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Error */}
                    {error && (
                      <div className="mt-4 p-4 border-3 border-primary bg-accent flex gap-3 items-start">
                        <AlertCircle size={18} className="shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold text-sm uppercase mb-1">⚠ Something's off</p>
                          <p className="text-sm">{error}</p>
                        </div>
                      </div>
                    )}

                    {/* Demo button */}
                    <button 
                      onClick={handleDemoMode}
                      className="btn-yellow w-full mt-4 flex items-center justify-center gap-2"
                    >
                      <span className="inline-block w-2 h-2 bg-primary" />
                      TRY DEMO DATA
                    </button>
                  </>
                ) : (
                  /* QR detected state */
                  <div className="border-3 border-primary p-4 relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
                    <p className="text-xs font-bold uppercase tracking-widest text-muted mb-2">UPI ID</p>
                    <p className="font-mono text-sm break-all font-bold mb-3">{upiDetails?.upiId}</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted mb-2">MERCHANT</p>
                    <p className="font-bold">{upiDetails?.payeeName}</p>
                    
                    {upiDetails?.upiId === 'demo-store@upi' && (
                      <span className="tag bg-accent mt-3 inline-block">DEMO DATA</span>
                    )}

                    <button onClick={reset} className="mt-4 text-xs font-bold uppercase tracking-wider hover:text-muted transition-colors underline">
                      ← Upload different QR
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* STEP 2: Amount & Split */}
            <div className={`editorial-card p-0 overflow-hidden transition-opacity ${step === 1 ? 'opacity-40 pointer-events-none' : ''}`}>
              {/* Step header */}
              <div className={`flex items-center justify-between px-5 py-3 border-b-3 border-primary ${step >= 2 ? 'bg-primary text-background' : 'bg-surface'}`}>
                <span className="font-bold text-xs uppercase tracking-widest">02 — ENTER AMOUNT</span>
                {step === 3 && <span className="bg-accent text-primary text-[10px] font-bold px-2 py-0.5 tracking-wider">DONE ✓</span>}
              </div>

              <div className="p-5 flex flex-col gap-5">
                {/* Amount input */}
                <div>
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <label htmlFor="total-amount" className="block text-xs font-bold uppercase tracking-widest text-muted">HOW MUCH?</label>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] italic font-bold uppercase tracking-wider text-muted">THE BIG NUMBER</span>
                      <CharacterMathNerd className="h-11 w-12 shrink-0" looking={amountIsValid} />
                    </div>
                  </div>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-display text-3xl">₹</span>
                    <input 
                      id="total-amount"
                      type="text" 
                      disabled={step === 1}
                      inputMode="decimal"
                      aria-label="Total amount in rupees"
                      value={amountFocused ? totalAmountStr : (totalAmountStr ? formatCurrencyRaw(totalAmount) : '')}
                      onFocus={() => setAmountFocused(true)}
                      onBlur={() => setAmountFocused(false)}
                      onChange={(e) => {
                        const nextAmount = sanitizeCurrencyInput(e.target.value);
                        const nextTotal = parseCurrencyInput(nextAmount);
                        const nextSliderMax = Math.max(20000, Math.ceil(nextTotal / 500) * 500);
                        setTotalAmountStr(nextAmount);
                        setMaxAmount((current) => Math.min(current, nextSliderMax));
                        setSplitResult(null);
                        if (step === 3) setStep(2);
                      }}
                      className="editorial-input currency-input w-full pl-12 text-2xl"
                      placeholder="0"
                    />
                  </div>
                  <p aria-live="polite" className={`mt-2 border-l-4 border-primary bg-accent/70 px-3 py-2 text-xs font-bold tracking-wider ${amountIsValid ? 'text-primary' : 'text-primary/75'}`}>
                    {amountStatus}
                  </p>
                </div>

                {/* Max amount slider */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-muted mb-1">
                    MAXIMUM SIMULATED PAYMENT
                  </label>
                  <div className="border-3 border-primary p-4 bg-surface/50 mt-2">
                    <div className="font-display text-3xl text-center mb-4">
                      {formatCurrency(maxAmount)}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-muted">SMALL</span>
                      <input 
                        type="range" 
                        disabled={step === 1}
                        min="500" 
                        max={sliderMax}
                        step="500"
                        value={maxAmount}
                        aria-label="Maximum simulated payment"
                        onChange={(e) => {
                          setMaxAmount(Math.max(500, Number(e.target.value) || 2000));
                          setSplitResult(null);
                          if (step === 3) setStep(2);
                        }}
                        className="flex-1"
                      />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-muted">LARGE</span>
                    </div>
                  </div>
                </div>

                {/* Error */}
                {error && step === 2 && (
                  <div className="p-4 border-3 border-primary bg-accent flex gap-3 items-start">
                    <AlertCircle size={18} className="shrink-0 mt-0.5" />
                    <p className="text-sm font-bold">{error}</p>
                  </div>
                )}

                {/* Calculate button */}
                <button 
                  onClick={handleCalculate}
                  disabled={step === 1 || !amountIsValid || loading}
                  className="btn-editorial w-full flex items-center justify-center gap-2 text-base py-4"
                >
                  CALCULATE SPLIT →
                </button>
              </div>
            </div>
          </div>

          {/* ========== RIGHT PANEL — RESULTS ========== */}
          <div className="w-full lg:flex-1 min-h-[500px]">
            <AnimatePresence mode="wait">
              {step < 3 ? (
                <motion.div 
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="min-h-[420px] h-full flex flex-col items-center justify-center text-center p-6 sm:p-10 border-3 border-dashed border-primary/30 bg-background/80"
                >
                  <MoneySaverIcon className="w-14 h-14 mb-4" />
                  <p className="tag mb-5">LIVE PREVIEW</p>
                  {liveSplit ? (
                    <div className="w-full max-w-lg text-left">
                      <div className="grid grid-cols-3 border-3 border-primary bg-background divide-x-2 divide-primary">
                        <div className="p-3 sm:p-4"><p className="text-[10px] font-bold tracking-widest text-muted">TOTAL</p><p className="font-display text-xl sm:text-2xl break-words">{formatCurrency(totalAmount)}</p></div>
                        <div className="p-3 sm:p-4"><p className="text-[10px] font-bold tracking-widest text-muted">MAX</p><p className="font-display text-xl sm:text-2xl break-words">{formatCurrency(maxAmount)}</p></div>
                        <div className="p-3 sm:p-4"><p className="text-[10px] font-bold tracking-widest text-muted">PAYMENTS</p><p className="font-display text-xl sm:text-2xl">{liveSplit.numberOfPayments}</p></div>
                      </div>
                      {upiDetails && <p className="mt-4 inline-flex max-w-full items-center gap-2 border-2 border-primary bg-accent px-3 py-2 text-xs font-bold"><span className="shrink-0">QR DETECTED ✓</span><span className="truncate">{upiDetails.payeeName || upiDetails.upiId}</span></p>}
                      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {liveSplit.payments.slice(0, 4).map((payment, index) => (
                          <div key={index} className="flex items-center justify-between border-2 border-primary bg-surface px-3 py-2 text-sm font-bold">
                            <span>PAYMENT {String(index + 1).padStart(2, '0')}</span><span>{formatCurrency(payment.amount)}</span>
                          </div>
                        ))}
                        {liveSplit.numberOfPayments > 4 && <p className="text-xs font-bold uppercase tracking-wider text-muted">+ {liveSplit.numberOfPayments - 4} more simulated payments</p>}
                      </div>
                      <div className="mt-4 flex items-center justify-center gap-2 border-t-2 border-primary/20 pt-3">
                        <CharacterMathNerd className="h-14 w-14" />
                        <span className="font-display text-xl uppercase sketch-underline">EASY.</span>
                      </div>
                      <p className="mt-5 text-center text-sm text-muted">Press calculate to generate the demo QR representations.</p>
                    </div>
                  ) : (
                    <>
                      <div className="font-display text-5xl sm:text-7xl uppercase leading-[0.9] mb-4">
                        RESULTS<br /><span className="highlight-marker">GO HERE</span>
                      </div>
                      <p className="text-muted text-sm max-w-sm">Upload a QR and enter an amount to see the experiment.</p>
                    </>
                  )}
                </motion.div>
              ) : (
                <motion.div 
                  key="results"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col gap-8"
                >
                  {/* Results header */}
                  <div className="editorial-card p-0 overflow-hidden">
                    <div className="bg-primary text-background px-6 py-3 flex items-center justify-between">
                      <span className="font-bold text-xs uppercase tracking-widest">RESULT</span>
                      <span className="text-xs font-mono opacity-60">EXPERIMENT 01</span>
                    </div>
                    <div className="p-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
                      <div>
                        <h2 className="font-display text-5xl md:text-6xl uppercase leading-[0.9] mb-2">
                          HERE'S<br />THE <span className="highlight-marker">MATH.</span>
                        </h2>
                        <p className="text-muted text-sm mt-2">
                          {splitResult?.numberOfPayments} simulated payments · Total {formatCurrency(totalAmount)}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-bold uppercase tracking-widest text-muted mb-1">DESTINATION</p>
                        <p className="font-mono font-bold text-sm border-2 border-primary px-3 py-1 bg-accent">{upiDetails?.upiId}</p>
                      </div>
                    </div>
                  </div>

                  {/* Demo disclaimer */}
                  <div className="border-3 border-primary bg-accent p-4 flex gap-3 items-start">
                    <AlertCircle size={20} className="shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-bold uppercase mb-1">⚠ Demo Mode</p>
                      <p className="opacity-80">MoneySaver generates simulated UPI QR payment representations for educational/testing purposes. It does not process payments or guarantee fee avoidance or compliance with payment-provider rules. All simulated payments point to the same destination.</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 border-y-2 border-primary/30 py-2">
                    <CharacterShopkeeper className="h-14 w-14 shrink-0" />
                    <p className="text-sm font-bold">Same destination. These are simulated QR representations, not transactions.</p>
                  </div>

                  {/* Payment cards grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {splitResult?.payments.map((payment, i) => {
                      const url = generateUpiUrl(upiDetails!, payment.amount);
                      const rotation = cardRotations[i % cardRotations.length];
                      return (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, y: 30, rotate: rotation * 2 }}
                          animate={{ opacity: 1, y: 0, rotate: rotation }}
                          transition={{ delay: i * 0.1, type: 'spring', stiffness: 200 }}
                          className="editorial-card p-0 overflow-hidden"
                        >
                          {/* Card header */}
                          <div className="px-5 py-3 border-b-3 border-primary flex items-center justify-between bg-primary text-background">
                            <span className="font-bold text-xs uppercase tracking-widest">
                              PAYMENT {String(i + 1).padStart(2, '0')}
                            </span>
                            <span className="font-display text-2xl">{formatCurrency(payment.amount)}</span>
                          </div>

                          {/* QR area */}
                          <div className="p-6 flex flex-col items-center justify-center gap-4 bg-white">
                            <QRCodeSVG value={url} size={160} level="H" />
                            <span className="tag bg-accent">DEMO QR</span>
                          </div>

                          {/* Card footer */}
                          <div className="px-5 py-3 border-t-3 border-primary flex items-center justify-between">
                            <p className="text-xs font-mono font-bold">{upiDetails?.upiId}</p>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-muted">SCAN ME</span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* ========== TOTAL VERIFICATION ========== */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (splitResult?.numberOfPayments || 0) * 0.1 + 0.2 }}
                    className="editorial-card p-0 overflow-hidden"
                  >
                    <div className="px-6 py-3 border-b-3 border-primary bg-primary text-background">
                      <span className="font-bold text-xs uppercase tracking-widest">MATH CHECKED ✓</span>
                    </div>
                    <div className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        {/* The math */}
                        <div className="font-mono text-lg min-w-[200px]">
                          {splitResult?.payments.map((p, i) => (
                            <div key={i} className="flex items-center gap-3 mb-2">
                              {i > 0 && <span className="font-bold text-muted">+</span>}
                              {i === 0 && <span className="invisible font-bold">+</span>}
                              <span className="font-bold">{formatCurrency(p.amount)}</span>
                            </div>
                          ))}
                          <div className="border-t-3 border-primary my-3 pt-3 flex items-center gap-3">
                            <span className="font-bold text-muted">=</span>
                            <span className="font-display text-3xl bg-accent px-3 py-1 border-2 border-primary inline-block">
                              {formatCurrency(totalAmount)}
                            </span>
                            <span className="font-display text-2xl">✓</span>
                          </div>
                        </div>

                        {/* Annotation */}
                        <div className="text-center md:text-right">
                          <CharacterMathNerd className="mx-auto h-16 w-16 md:ml-auto md:mr-0" />
                          <p className="font-display text-3xl uppercase leading-[0.95] mb-2">
                            NUMBERS<br />ADD UP
                          </p>
                          <p className="text-xs font-bold uppercase tracking-widest mb-2">TOLD YOU.</p>
                          <p className="text-sm text-muted italic">
                            "Not a single rupee escaped the spreadsheet."
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* ========== ORIGINAL VS SPLIT ========== */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (splitResult?.numberOfPayments || 0) * 0.1 + 0.4 }}
                    className="editorial-card p-0 overflow-hidden"
                  >
                    <div className="px-6 py-3 border-b-3 border-primary bg-surface">
                      <span className="font-bold text-xs uppercase tracking-widest">COMPARISON</span>
                    </div>
                    <div className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row items-stretch gap-6">
                        {/* Original */}
                        <div className="flex-1 border-3 border-primary p-6 text-center">
                          <span className="tag mb-4 inline-block">ORIGINAL</span>
                          <div className="font-display text-5xl my-4">{formatCurrency(totalAmount)}</div>
                          <p className="text-xs text-muted font-bold uppercase tracking-widest">ONE QR</p>
                        </div>

                        {/* Arrow */}
                        <div className="flex items-center justify-center">
                          <div className="font-display text-3xl hidden md:block">→</div>
                          <div className="font-display text-3xl md:hidden">↓</div>
                        </div>

                        {/* Simulation */}
                        <div className="flex-1 border-3 border-primary p-6">
                          <span className="tag bg-accent mb-4 inline-block">SIMULATION</span>
                          <div className="flex flex-col gap-2 my-4">
                            {splitResult?.payments.map((p, i) => (
                              <div key={i} className="flex items-center justify-between border-2 border-primary px-3 py-2 bg-background text-sm font-bold">
                                <span>QR {String(i + 1).padStart(2, '0')}</span>
                                <span>{formatCurrency(p.amount)}</span>
                              </div>
                            ))}
                          </div>
                          <p className="text-xs text-muted font-bold uppercase tracking-widest text-center">
                            SAME DESTINATION
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Start over */}
                  <div className="flex justify-center pt-4 pb-8">
                    <button onClick={reset} className="btn-editorial">
                      ← START OVER
                    </button>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
