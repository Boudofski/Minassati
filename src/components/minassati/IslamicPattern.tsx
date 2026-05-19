import { useId } from "react";
import { cn } from "@/lib/utils";

interface IslamicPatternProps {
  className?: string;
  opacity?: number;
  color?: string;
  size?: number;
}

export function IslamicPattern({ className, opacity = 0.07, color = "#3B82F6", size = 60 }: IslamicPatternProps) {
  const id = useId();
  const patternId = `ip-${id.replace(/:/g, "")}`;
  const c = size / 2;
  const r = size * 0.37;
  const ri = size * 0.17;

  // 8-pointed star: 16 alternating outer/inner points at 22.5° steps starting from top
  const points = Array.from({ length: 16 }, (_, i) => {
    const angle = (i * 22.5 - 90) * (Math.PI / 180);
    const radius = i % 2 === 0 ? r : ri;
    return `${(c + radius * Math.cos(angle)).toFixed(1)},${(c + radius * Math.sin(angle)).toFixed(1)}`;
  }).join(" ");

  return (
    <svg
      className={cn("pointer-events-none select-none", className)}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <defs>
        <pattern id={patternId} x="0" y="0" width={size} height={size} patternUnits="userSpaceOnUse">
          <polygon points={points} fill="none" stroke={color} strokeWidth="0.9" opacity={opacity} />
          <circle cx={c} cy={c} r={ri * 0.35} fill={color} opacity={opacity * 0.5} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}
