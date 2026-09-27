import { motion } from 'framer-motion';

type CharacterKind = 'shopkeeper' | 'customer' | 'mathNerd' | 'accountant' | 'qr' | 'modi' | 'sitharaman';

type CharacterProps = {
  className?: string;
  looking?: boolean;
};

const characterLabels: Record<CharacterKind, string> = {
  shopkeeper: 'Illustration of the MoneySaver shopkeeper holding a QR code',
  customer: 'Illustration of a MoneySaver customer holding a phone',
  mathNerd: 'Illustration of the MoneySaver math nerd holding a calculator',
  accountant: 'Illustration of the MoneySaver accountant holding receipts',
  qr: 'Illustration of the MoneySaver QR character',
  modi: 'Respectful editorial illustration inspired by Narendra Modi',
  sitharaman: 'Respectful editorial illustration inspired by Nirmala Sitharaman',
};

function CharacterArt({ kind, className = '', looking = false }: CharacterProps & { kind: CharacterKind }) {
  const pupilOffset = looking ? 3 : 0;

  return (
    <motion.svg
      className={`editorial-character ${className}`}
      viewBox="0 0 180 160"
      role="img"
      aria-label={characterLabels[kind]}
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0.8, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3, rotate: kind === 'qr' ? 1 : -1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.32, ease: 'easeOut' }}
    >
      <path d="M18 139c15-9 35-13 72-13s57 4 72 13" fill="none" stroke="#050505" strokeWidth="2" strokeDasharray="3 5" />

      {kind === 'shopkeeper' && (
        <g stroke="#050505" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
          <path d="M43 157c2-24 16-37 39-40h20c21 3 34 16 36 40" fill="#F7F4E8" />
          <path d="M66 117h38l10 40H56z" fill="#FFF000" />
          <path d="M68 118l17 16 17-16" fill="none" />
          <path d="M82 25c-17 0-28 13-28 31v15c0 22 12 37 29 37s29-15 29-37V55c0-18-12-30-30-30z" fill="#F7F4E8" />
          <path d="M54 57c-4-19 4-35 21-40 15-5 32 2 38 17l-4 19-8-15c-12 6-25 8-44 7z" fill="#050505" />
          <path d="M66 67l9-2m20 2 9-2" fill="none" />
          <circle cx={76 + pupilOffset} cy="73" r="2.5" fill="#050505" stroke="none" />
          <circle cx={98 + pupilOffset} cy="73" r="2.5" fill="#050505" stroke="none" />
          <path d="M79 89c5 3 10 3 15 0m-21-6c4 3 8 4 13 3m6 0c4 1 8 0 12-3" fill="none" />
          <path d="M115 73h34v43h-34z" fill="#F7F4E8" />
          <path d="M120 78h10v10h-10zm19 0h6v6h-6zm-19 19h10v10h-10zm19 0h6v6h-6z" fill="#050505" stroke="none" />
          <path d="M108 90l7 4m-48 27-9 8m49-10 11 5" fill="none" />
        </g>
      )}

      {kind === 'customer' && (
        <g stroke="#050505" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
          <path d="M42 157c3-25 18-39 43-40h15c23 2 37 16 39 40" fill="#FFF000" />
          <path d="M66 31c5-13 20-20 34-15 16 5 23 20 22 37l-8 22H59l-7-22c-2-9 3-18 14-22z" fill="#050505" />
          <ellipse cx="88" cy="63" rx="29" ry="34" fill="#F7F4E8" />
          <path d="M69 61l8-2m22 2 8-2" fill="none" />
          <circle cx={78 + pupilOffset} cy="68" r="2.5" fill="#050505" stroke="none" />
          <circle cx={100 + pupilOffset} cy="68" r="2.5" fill="#050505" stroke="none" />
          <path d="M82 84c4 5 10 5 14 0" fill="none" />
          <path d="M111 88l18 7v37l-18-7z" fill="#050505" />
          <path d="M116 94l9 4v27l-9-4z" fill="#F7F4E8" />
          <path d="M63 119l-9 14m59-33 8 5" fill="none" />
        </g>
      )}

      {kind === 'mathNerd' && (
        <g stroke="#050505" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
          <path d="M38 157c3-24 20-38 46-40h18c25 2 40 16 43 40" fill="#F7F4E8" />
          <path d="M66 115h39l11 42H56z" fill="#FFF000" />
          <path d="M61 55c0-21 12-34 29-34s29 13 29 34v20c0 23-13 37-29 37S61 98 61 75z" fill="#F7F4E8" />
          <path d="M62 56c-2-20 9-38 27-39 19-1 32 12 32 33l-10-9-12 5-10-7-11 9-14-1z" fill="#050505" />
          <rect x="66" y="64" width="19" height="14" rx="5" fill="#F7F4E8" />
          <rect x="94" y="64" width="19" height="14" rx="5" fill="#F7F4E8" />
          <path d="M85 70h9" fill="none" />
          <circle cx={77 + pupilOffset} cy="71" r="2.5" fill="#050505" stroke="none" />
          <circle cx={103 + pupilOffset} cy="71" r="2.5" fill="#050505" stroke="none" />
          <path d="M80 91c4-2 9-2 13 0m-9 6h8" fill="none" />
          <path d="M118 75l7-8m-67 6-7-8" fill="none" />
          <rect x="117" y="105" width="29" height="39" rx="2" fill="#050505" />
          <rect x="121" y="110" width="21" height="9" fill="#FFF000" stroke="none" />
          <path d="M123 125h5m5 0h5m-15 7h5m5 0h5" fill="none" stroke="#F7F4E8" />
          <path d="M47 45l-6-4m95 1 5-5M51 91l-7 2" fill="none" stroke="#FFF000" strokeWidth="4" />
        </g>
      )}

      {kind === 'accountant' && (
        <g stroke="#050505" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
          <path d="M38 157c3-24 19-38 45-40h18c26 2 41 16 44 40" fill="#F7F4E8" />
          <path d="M65 117h39l8 40H57z" fill="#050505" />
          <path d="M82 117l8 12 8-12" fill="#FFF000" />
          <ellipse cx="89" cy="64" rx="29" ry="34" fill="#F7F4E8" />
          <path d="M60 59c-3-19 8-37 28-39 21-2 32 14 30 34l-9-13-8 6-9-11-12 12-9-7z" fill="#050505" />
          <path d="M68 67l9-1m23 0 9-1" fill="none" />
          <circle cx={78 + pupilOffset} cy="73" r="2.5" fill="#050505" stroke="none" />
          <circle cx={101 + pupilOffset} cy="73" r="2.5" fill="#050505" stroke="none" />
          <path d="M80 91c5 2 10 2 15 0" fill="none" />
          <path d="M116 83h32v43h-32z" fill="#FFF000" />
          <path d="M122 94h19m-19 8h19m-19 8h12" fill="none" />
          <path d="M119 77h29v38h-29z" fill="#F7F4E8" />
          <path d="M125 88h17m-17 8h17m-17 8h10" fill="none" />
        </g>
      )}

      {kind === 'qr' && (
        <g stroke="#050505" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
          <path d="M50 45h80v77H50z" fill="#050505" />
          <path d="M57 52h66v63H57z" fill="#F7F4E8" stroke="none" />
          <path d="M63 58h20v20H63zm48 0h9v9h-9zm-48 42h20v9H63z" fill="#050505" stroke="none" />
          <path d="M68 63h10v10H68zm48 0h4v4h-4zm-48 42h10v4H68z" fill="#FFF000" stroke="none" />
          <circle cx="93" cy="87" r="12" fill="#FFF000" />
          <circle cx={89 + pupilOffset} cy="85" r="2" fill="#050505" stroke="none" />
          <circle cx={98 + pupilOffset} cy="85" r="2" fill="#050505" stroke="none" />
          <path d="M89 92c3 2 6 2 9 0" fill="none" />
          <path d="M63 122l-8 16m66-16 8 16m-67-37-14 3m76-3 14 3" fill="none" />
          <path d="M79 139h-9m49 0h-9" fill="none" />
          <path className="qr-scanline" d="M58 91h64" fill="none" stroke="#FFF000" strokeWidth="3" />
          <path d="M139 54v23m-5-11h10" fill="none" stroke="#FFF000" strokeWidth="4" />
        </g>
      )}

      {kind === 'modi' && (
        <g stroke="#050505" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
          <path d="M38 157c3-23 18-37 44-40h18c26 3 40 17 43 40" fill="#F7F4E8" />
          <path d="M61 117h45l8 40H55z" fill="#FFF000" />
          <path d="M83 117l9 12 9-12" fill="#F7F4E8" />
          <ellipse cx="90" cy="57" rx="29" ry="34" fill="#F7F4E8" />
          <path d="M61 51c-2-20 10-36 29-37 19 0 31 14 29 34l-8-13-10 7-9-11-11 10-10-7z" fill="#F7F4E8" />
          <path d="M65 66l8-1m27 0 8-1" fill="none" />
          <rect x="66" y="65" width="20" height="13" rx="5" fill="none" />
          <rect x="94" y="65" width="20" height="13" rx="5" fill="none" />
          <path d="M86 70h8" fill="none" />
          <circle cx={77 + pupilOffset} cy="71" r="2" fill="#050505" stroke="none" />
          <circle cx={104 + pupilOffset} cy="71" r="2" fill="#050505" stroke="none" />
          <path d="M70 83c5 4 10 5 17 3m6 0c7 2 12 1 17-3m-31 5c1 15 5 25 13 29 8-4 12-14 13-29" fill="#F7F4E8" />
          <path d="M78 88c4 2 8 2 12 0m-8 8h7" fill="none" />
          <path d="M64 29c7-11 17-16 27-16m8 1c12 4 18 13 21 25" fill="none" stroke="#B8B4A7" strokeWidth="5" />
          <path d="M105 126l10 4" fill="none" stroke="#050505" strokeWidth="4" />
        </g>
      )}

      {kind === 'sitharaman' && (
        <g stroke="#050505" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
          <path d="M39 157c3-23 18-37 44-40h18c26 3 40 17 43 40" fill="#F7F4E8" />
          <path d="M58 118l32 12 30-12 15 39H46z" fill="#FFF000" />
          <path d="M59 118l31 12 30-12m-30 12v27" fill="none" />
          <ellipse cx="89" cy="61" rx="28" ry="34" fill="#F7F4E8" />
          <path d="M60 63c-6-24 5-43 28-45 24-1 34 18 29 43l-7-19-10-8-11 8-15-3-8 21z" fill="#050505" />
          <path d="M68 68l8-1m25 0 8-1" fill="none" />
          <circle cx={78 + pupilOffset} cy="73" r="2.5" fill="#050505" stroke="none" />
          <circle cx={101 + pupilOffset} cy="73" r="2.5" fill="#050505" stroke="none" />
          <path d="M81 91c5 3 10 3 15 0" fill="none" />
          <circle cx="89" cy="57" r="2" fill="#FFF000" />
          <path d="M63 50c-3-13 1-25 11-32m30 0c10 6 15 17 14 29" fill="none" stroke="#B8B4A7" strokeWidth="4" />
          <path d="M114 83v28" fill="none" stroke="#050505" strokeWidth="4" />
        </g>
      )}
    </motion.svg>
  );
}

export function CharacterShopkeeper(props: CharacterProps) {
  return <CharacterArt kind="shopkeeper" {...props} />;
}

export function CharacterCustomer(props: CharacterProps) {
  return <CharacterArt kind="customer" {...props} />;
}

export function CharacterMathNerd(props: CharacterProps) {
  return <CharacterArt kind="mathNerd" {...props} />;
}

export function CharacterAccountant(props: CharacterProps) {
  return <CharacterArt kind="accountant" {...props} />;
}

export function CharacterQR(props: CharacterProps) {
  return <CharacterArt kind="qr" {...props} />;
}

export function CharacterModi(props: CharacterProps) {
  return <CharacterArt kind="modi" {...props} />;
}

export function CharacterSitharaman(props: CharacterProps) {
  return <CharacterArt kind="sitharaman" {...props} />;
}