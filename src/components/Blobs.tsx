export function HalfCircle({ className, color = "var(--secondary)" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M0 50a50 50 0 0 1 100 0Z" fill={color} />
    </svg>
  );
}

export function Blob({ className, color = "var(--accent)" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M45.6,-58.3C58.1,-49.9,66.3,-34.5,70.4,-18.1C74.5,-1.7,74.5,15.7,67.5,29.8C60.6,43.9,46.8,54.7,31.5,61.9C16.3,69.1,-0.4,72.7,-17.1,70.2C-33.9,67.7,-50.7,59,-61.1,45.4C-71.5,31.8,-75.5,13.2,-73.6,-4.3C-71.7,-21.9,-63.9,-38.4,-51.6,-47.1C-39.3,-55.9,-22.4,-57,-5.2,-50.4C12,-43.8,33.2,-66.7,45.6,-58.3Z"
        fill={color}
        transform="translate(100 100)"
      />
    </svg>
  );
}

export function Squiggle({ className, color = "var(--accent)" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M2 32c12-24 24-24 36 0s24 24 36 0 24-24 36 0 24 24 36 0"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function Sparkle({ className, color = "var(--secondary)" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M12 0c0 6-2 10-6 12 4 2 6 6 6 12 0-6 2-10 6-12-4-2-6-6-6-12Z" fill={color} />
    </svg>
  );
}
