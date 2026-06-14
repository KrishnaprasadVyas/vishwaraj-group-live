"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type HeroVisualProps = {
  imageSrc?: string;
  alt: string;
  eyebrow?: string;
};

export function HeroVisual({
  imageSrc = "/hero-packaging.svg",
  alt,
  eyebrow = "Manufacturing Excellence",
}: HeroVisualProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 14 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-white shadow-[0_30px_80px_rgba(17,24,39,0.08)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.18),_transparent_46%),radial-gradient(circle_at_bottom_right,_rgba(17,24,39,0.06),_transparent_40%)]" />
      <div className="absolute left-6 top-6 z-10 rounded-full border border-white/60 bg-white/80 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-[color:var(--secondary)] uppercase backdrop-blur">
        {eyebrow}
      </div>
      <div className="relative aspect-[4/3] w-full">
        <Image src={imageSrc} alt={alt} fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      </div>
      <div className="absolute inset-x-0 bottom-0 border-t border-white/60 bg-white/85 p-5 backdrop-blur">
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-[color:var(--secondary)]">
          <span>Precision foam and film solutions</span>
          <span>Built for demanding industrial use</span>
        </div>
      </div>
    </motion.div>
  );
}
