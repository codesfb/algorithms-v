import type { SVGProps } from "react";

type LogoBequerProps = SVGProps<SVGSVGElement>;

export default function LogoBequer({ className = "", ...props }: LogoBequerProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 248 48"
      role="img"
      aria-labelledby="algorithms-v-logo-title"
      className={`algorithms-logo ${className}`.trim()}
      {...props}
    >
      <title id="algorithms-v-logo-title">algorithms-v</title>
      <defs>
        <linearGradient id="logo-liquid" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#c9a4ff" />
          <stop offset="1" stopColor="#8f63d8" />
        </linearGradient>
        <clipPath id="logo-beaker-clip">
          <path d="M8 14h34v22c0 4-3 7-7 7H14c-4 0-7-3-7-7V14Z" />
        </clipPath>
      </defs>

      <g transform="translate(1 -1) rotate(-8 24 25)">
        <path d="M5 9h35" stroke="#f8f8f2" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M10 9v27c0 4 3 7 7 7h12c4 0 7-3 7-7V9" fill="none" stroke="#f8f8f2" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M7 27h34v9c0 4-3 7-7 7H14c-4 0-7-3-7-7v-9Z" fill="url(#logo-liquid)" clipPath="url(#logo-beaker-clip)" className="logo-liquid" />
        <path d="M8 27c8 2.5 20 2.5 32 0" fill="none" stroke="#e1d0ff" strokeWidth="1.5" strokeLinecap="round" className="logo-wave" />
        <g className="logo-graduations" fill="none" stroke="#f8f8f2" strokeWidth="1" strokeLinecap="round">
          <path d="M29 16h6" />
          <path d="M31 21h4" />
          <path d="M29 26h6" />
          <path d="M31 31h4" />
        </g>
        <text x="34" y="13" textAnchor="middle" fill="#f8f8f2" fontFamily="Space Grotesk, sans-serif" fontSize="3.2" fontWeight="600">cm</text>
        <text x="24" y="36" textAnchor="middle" fill="#f8f8f2" fontFamily="Space Grotesk, sans-serif" fontSize="5.5" fontWeight="700" letterSpacing="0">O(n log n)</text>
        <circle cx="16" cy="32" r="1.4" fill="#f8f8f2" className="logo-bubble logo-bubble-one" />
        <circle cx="32" cy="35" r="1.1" fill="#f8f8f2" className="logo-bubble logo-bubble-two" />
      </g>

      <text x="65" y="31" fill="#f8f8f2" fontFamily="Space Grotesk, sans-serif" fontSize="21" fontWeight="600" letterSpacing="0">algorithms</text>
      <text x="191" y="31" fill="#bd93f9" fontFamily="Space Grotesk, sans-serif" fontSize="21" fontWeight="700">V</text>

      <style>
        {`
          .algorithms-logo { display: block; overflow: visible; }
          .logo-liquid { transform-origin: 22px 32px; animation: logo-liquid-rise 2.8s ease-in-out infinite; }
          .logo-wave { transform-origin: center; animation: logo-wave 2.8s ease-in-out infinite; }
          .logo-bubble { animation: logo-bubble 2.8s ease-in-out infinite; }
          .logo-bubble-two { animation-delay: 700ms; }
          @keyframes logo-liquid-rise { 0%, 100% { transform: translateY(1px); } 50% { transform: translateY(-1px); } }
          @keyframes logo-wave { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(1px); } }
          @keyframes logo-bubble { 0%, 100% { opacity: .25; transform: translateY(2px); } 45%, 65% { opacity: 1; transform: translateY(-4px); } }
          @media (prefers-reduced-motion: reduce) {
            .logo-liquid, .logo-wave, .logo-bubble { animation: none; }
          }
        `}
      </style>
    </svg>
  );
}
