"use client";

import { motion } from "framer-motion";
import { WorkFloatingStacks } from "@/components/WorkFloatingStacks";

type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "TNS INQUIRE",
    description:
      "Real estate management solution that streamlines property workflows and supports end-to-end deal lifecycle tracking.",
    tags: ["Flutter", "Dart"],
    featured: true
  },
  {
    title: "Venkit:Volatility Estimator & Knowledge Investment Tool.",
    description:
      "stock market prediction and analysis application",
    tags: ["Python", "ML", "Regression"]
  },
  {
    title: "75% Tracker",
    description:
      " Developed a cross-platform mobile application designed to eliminate attendance anxiety for university students.",
    tags: ["Flutter", "Dart", "Firebase"]
  }
];

export function ProjectsBento() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 bg-white">
            <span className="w-2.5 h-2.5 rounded-full bg-action" />
            Work
          </div>
          <h2 className="mt-5 text-3xl sm:text-4xl font-semibold">
            Projects that <span className="text-action">stand out</span>.
          </h2>
          <p className="mt-3 text-black/70 leading-relaxed">
            Minimal UI, real outcomes. Flutter apps get front and center, with
            Python ML projects highlighted for technical depth.
          </p>
        </div>

        <WorkFloatingStacks />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <motion.a
              key={project.title}
              href={project.link ?? "#"}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4 }}
              className={[
                "group relative rounded-2xl border-3 border-black bg-white overflow-hidden",
                "p-5 sm:p-6",
                "hover:border-action transition-colors"
              ].join(" ")}
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute -right-20 -top-20 w-56 h-56 rounded-full bg-action/10 blur-2xl" />
              </div>

              <div className="relative z-10 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold leading-tight">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-black/70 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {project.featured && (
                  <div className="shrink-0 inline-flex items-center justify-center px-3 py-2 rounded-full border border-action/30 bg-action/5 text-action text-xs font-semibold">
                    Featured
                  </div>
                )}
              </div>

              <div className="relative z-10 mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full border border-black/15 text-xs font-medium text-black/70 group-hover:text-action transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

