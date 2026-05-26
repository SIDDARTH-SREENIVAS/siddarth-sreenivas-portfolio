"use client";

import { motion } from "framer-motion";
import { TECH_LOGOS } from "@/lib/techLogos";
import { TechLogoIcon } from "@/components/TechLogoIcon";

export function WorkFloatingStacks() {
  return (
    <div className="mb-12 sm:mb-14">
      <div className="rounded-3xl border border-black/10 bg-white p-5 sm:p-7">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-7 sm:gap-x-12 sm:gap-y-10">
          {TECH_LOGOS.map((logo, index) => (
            <motion.div
              key={logo.name}
              className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3.2 + (index % 4) * 0.35,
                delay: index * 0.12,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
              aria-hidden="true"
            >
              <TechLogoIcon
                logo={logo}
                className="w-full h-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

