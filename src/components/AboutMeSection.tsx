"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function AboutMeSection() {
  const [flipped, setFlipped] = useState(false);

  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          layout
          className="grid lg:grid-cols-2 gap-10 items-center"
          transition={{ type: "spring", stiffness: 180, damping: 22 }}
        >
          {/* Person with laptop */}
          <motion.div
            layout
            className={`order-1 ${flipped ? "lg:order-2" : "lg:order-1"}`}
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.2, repeat: 0, ease: "easeInOut" }}
              className="relative max-w-md mx-auto lg:mx-0"
            >
              <div className="absolute -inset-2 rounded-3xl bg-action/10 blur-2xl pointer-events-none" />
              <div
                className="relative overflow-hidden rounded-3xl border border-black/10 bg-white cursor-pointer"
                onPointerEnter={() => setFlipped(false)}
                onPointerLeave={() => setFlipped(false)}
              >
                <img
                  src="/about-laptop-person.png"
                  alt="3D person with laptop illustration"
                  className="w-full h-auto object-cover"
                  draggable={false}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Text content */}
          <motion.div
            layout
            className={`order-2 ${flipped ? "lg:order-1" : "lg:order-2"}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 bg-white">
              <span className="w-2.5 h-2.5 rounded-full bg-action" />
              About Me
            </div>
            <h2 className="mt-5 text-3xl sm:text-4xl font-semibold">
              Building practical tech with{" "}
              <span className="text-action">focus</span>.
            </h2>
            <p className="mt-4 text-black/70 leading-relaxed">
              I&apos;m Siddarth Sreenivas, an IT student at Rajagiri School of
              Engineering and Technology, focused on Flutter development, Python
              projects, and secure engineering practices.
            </p>
            <p className="mt-3 text-black/70 leading-relaxed">
              My work combines strong fundamentals with modern product thinking,
              from mobile apps to ML-powered solutions, with an emphasis on clean
              implementation and usability.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

