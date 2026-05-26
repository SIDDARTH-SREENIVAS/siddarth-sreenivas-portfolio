import type { TechLogo } from "@/lib/techLogos";
import * as simpleIcons from "simple-icons";

function toDataUriFromSvg(svg: string) {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function escapeXml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function fallbackSvgForLogo(name: string) {
  if (name === "Cursor") {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
        <path
          d="M26 10 L50 33 L36 36 L43 52 L24 37 L14 46 Z"
          fill="#FF5722"
          opacity="0.95"
          stroke="#000000"
          stroke-width="2.5"
          stroke-linejoin="round"
        />
      </svg>
    `;
  }

  if (name === "Antigravity") {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="22" fill="none" stroke="#FF5722" stroke-width="3.5" opacity="0.22" />
        <path
          d="M16 52 L32 14 L48 52 Z"
          fill="none"
          stroke="#000000"
          stroke-width="3"
          stroke-linejoin="round"
          opacity="0.30"
        />
        <path
          d="M26 48 L32 28 L38 48 Z"
          fill="#FF5722"
          opacity="0.20"
          stroke="#FF5722"
          stroke-width="2"
          stroke-linejoin="round"
        />
        <path d="M24 40 H40" stroke="#FF5722" stroke-width="3" stroke-linecap="round" opacity="0.75"/>
      </svg>
    `;
  }

  if (name === "Java") {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
        <path d="M24 50c0 3 2 4 4 4h8c2 0 4-1 4-4V18c0-3-2-4-4-4h-8c-2 0-4 1-4 4v32Z" fill="#FF5722" opacity="0.18"/>
        <path d="M30 21h4v14h-4z" fill="#000000" opacity="0.85"/>
        <path d="M30 39h4v4h-4z" fill="#000000" opacity="0.85"/>
        <path d="M22 18c4-4 16-4 20 0" fill="none" stroke="#FF5722" stroke-width="3" stroke-linecap="round" opacity="0.75"/>
        <path d="M18 26c-2 6-2 12 0 18" fill="none" stroke="#000000" stroke-width="2.5" stroke-linecap="round" opacity="0.22"/>
        <text x="32" y="60" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-weight="900" font-size="10" fill="#000000" opacity="0.85">JAVA</text>
      </svg>
    `;
  }

  // Default word-mark fallback (still an SVG data-uri).
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="220" height="220" viewBox="0 0 220 220">
      <defs>
        <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.08"/>
        </filter>
      </defs>
      <rect x="14" y="14" width="192" height="192" rx="44" fill="#FFFFFF"/>
      <rect x="26" y="26" width="168" height="168" rx="38" fill="none" stroke="#FF5722" stroke-width="10" opacity="0.28"/>
      <text x="110" y="118" text-anchor="middle"
        font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
        font-size="26" font-weight="800" fill="#000000" filter="url(#shadow)">${escapeXml(name)}</text>
    </svg>
  `;
}

export function TechLogoIcon({
  logo,
  className
}: {
  logo: TechLogo;
  className?: string;
}) {
  const key = `si${logo.iconKey.charAt(0).toUpperCase()}${logo.iconKey.slice(1)}`;
  const icon = (simpleIcons as any)[key];

  const src = icon?.svg
    ? toDataUriFromSvg(icon.svg as string)
    : toDataUriFromSvg(fallbackSvgForLogo(logo.name));

  return (
    <img
      src={src}
      alt={`${logo.name} logo`}
      draggable={false}
      className={className}
    />
  );
}

