"use client";

import { useState } from "react";

export function FloatingHero() {
  const [isPhotoHovered, setIsPhotoHovered] = useState(false);

  return (
    <section className="pt-24 pb-24 sm:pt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 bg-white">
              <span className="w-2.5 h-2.5 rounded-full bg-action" />
              Software Engineer • IT Student • Flutter Enthusiast
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
              Crafting
              <span className="text-action"> digital </span>
              experiences with{" "}
              <span className="font-medium">precision.</span>
            </h1>

            <p className="text-black/70 max-w-xl leading-relaxed">
              Hi, I&apos;m Siddarth Sreenivas — a software developer specializing
              in Flutter, Java, and Python. I&apos;m currently a B.Tech IT
              student at Rajagiri School of Engineering and Technology,
              building secure cross-platform mobile and enterprise applications.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-black bg-black text-white hover:bg-action hover:border-action transition-colors"
              >
                Contact
              </a>
              <a
                href="/Siddarth_Sreenivas_CV.pdf"
                download="Siddarth_Sreenivas_CV.pdf"
                className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-black/10 bg-white text-black hover:border-black hover:text-action transition-colors"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="w-full flex justify-center lg:justify-end">
            <div
              className="relative w-full max-w-[360px] sm:max-w-[420px] rounded-3xl p-4 sm:p-6"
              aria-label="Profile photo"
            >
              {/* Soft base glow */}
              <div
                className="absolute inset-x-4 sm:inset-x-6 bottom-8 sm:bottom-10 h-20 rounded-full blur-2xl pointer-events-none transition-all"
                style={{
                  background: isPhotoHovered
                    ? "rgba(255,87,34,0.35)"
                    : "rgba(255,87,34,0.10)"
                }}
              />

              {/* Photo frame that changes color on hover */}
              <div
                className="relative overflow-hidden rounded-2xl border border-black/10 transition-colors duration-500"
                style={{
                  background: "transparent"
                }}
                onPointerEnter={() => setIsPhotoHovered(true)}
                onPointerLeave={() => setIsPhotoHovered(false)}
              >
                {/* Tinted orange backdrop behind the (grayscale) image */}
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                  style={{
                    opacity: isPhotoHovered ? 0.85 : 0
                  }}
                >
                  <div
                    className="absolute inset-0"
                    style={{ backgroundColor: "#FF5722" }}
                  />
                </div>

                {/* Crop top by shifting image upward */}
                <div className="relative aspect-[4/5]">
                  <img
                    src="/siddarth-hero.png"
                    alt="Siddarth Sreenivas smiling portrait"
                    draggable={false}
                    className={[
                      "absolute inset-0 w-full h-full object-cover",
                      // Keep framing close to your reference screenshot
                      "object-[50%_48%]",
                      "transition-transform duration-500"
                    ].join(" ")}
                    style={{
                      filter: isPhotoHovered
                        ? "grayscale(1) contrast(1.15) brightness(0.98)"
                        : "none"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}