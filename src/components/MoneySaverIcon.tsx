type MoneySaverIconProps = {
  className?: string;
};

export default function MoneySaverIcon({ className }: MoneySaverIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      role="img"
      aria-label="MoneySaver mark"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="2" width="44" height="44" fill="#050505" />
      <rect x="6" y="6" width="36" height="36" fill="#F7F4E8" />
      <path d="M9 9h11v11H9zM28 9h11v11H28zM9 28h11v11H9z" fill="#050505" />
      <path d="M12 12h5v5h-5zM31 12h5v5h-5zM12 31h5v5h-5z" fill="#FFF000" />
      <path d="M28 28h4v4h-4zM35 28h4v4h-4zM28 35h4v4h-4zM35 35h4v4h-4z" fill="#050505" />
      <rect x="21" y="21" width="9" height="9" fill="#FFF000" stroke="#050505" strokeWidth="2" />
      <path d="M25.5 22.5v6M28 23.5c-.4-.6-1.1-.9-2-.9-1.1 0-1.8.6-1.8 1.4 0 2 3.8.8 3.8 2.7 0 .8-.8 1.4-1.9 1.4-.9 0-1.7-.3-2.2-1" fill="none" stroke="#050505" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M21 16h6l-2-2m2 2-2 2M27 32h-6l2 2m-2-2 2-2" fill="none" stroke="#050505" strokeWidth="1.8" strokeLinecap="square" strokeLinejoin="miter" />
    </svg>
  );
}