import * as React from "react";
import { cn } from "@/lib/utils";

function PawMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden
      className={cn("h-12 w-12 rounded-md", className)}
    >
      <defs>
        <linearGradient id="g" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="100" height="100" rx="12" fill="url(#g)" />
      <g fill="#ffffff">
        <circle cx="30" cy="40" r="10" />
        <circle cx="50" cy="32" r="10" />
        <circle cx="70" cy="40" r="10" />
        <path d="M50 50c-16 0-26 10-26 22h52c0-12-10-22-26-22z" />
      </g>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      className="mt-[2in] w-full border-t border-violet-100/60 bg-white"
      aria-label="Site footer"
    >
      <div
        className="mx-auto max-w-5xl px-6 py-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-nowrap items-center gap-3 whitespace-nowrap">
          <span className="text-[56px] sm:text-[64px] font-extrabold leading-none tracking-tight text-[#707070]">
            Spark
          </span>
          <PawMark />
          <span className="text-[56px] sm:text-[64px] font-light leading-none tracking-tight text-[#b3b3b3]">
            nomy
          </span>
        </div>
        <div className="mt-3 text-[32px] sm:text-[40px] font-light leading-tight text-[#9a9a9a]">
          sparking the creator economy
        </div>
      </div>
    </footer>
  );
}
