const education = [
  {
    period: "2024 — Present",
    role: "Bachelors in Technology - Information Technology",
    company: "Rajagiri School of Engineering and Technology",
    description:
      "Current CGPA: 8.6/10\nHonours in Cybersecurity\nMinors in Mathematics",
    technologies: ["C programming", "Java", "Python"],
    current: true
  },
  {
    period: "2023 — 2024",
    role: "Senior Secondary Certificate Examination (12th)",
    company: "Chinmaya Vidyalaya Kolazhy (CBSE)",
    description: "Percentage: 85.4% • PCMB",
    technologies: [],
    current: false
  },
  {
    period: "2021 — 2022",
    role: "Secondary School Examination",
    company: "Chinmaya Vidyalaya Kolazhy (CBSE)",
    description: "",
    technologies: [],
    current: false
  }
] as const;

export function EducationTimeline() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 bg-white">
            <span className="w-2.5 h-2.5 rounded-full bg-action" />
            Experience / Education
          </div>
          <h2 className="mt-5 text-3xl sm:text-4xl font-semibold">
            A timeline of{" "}
            <span className="text-action">growth</span>.
          </h2>
          <p className="mt-3 text-black/70 leading-relaxed">
            Focused on my RSET journey and the IT work I&apos;ve been building
            through real products.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[3px] bg-black/10 rounded-full -translate-x-1/2" />

          <div className="space-y-10">
            {education.map((exp, idx) => {
              const isRight = idx % 2 === 0;
              const sideWrapper = isRight
                ? "md:col-start-2 md:justify-self-end md:text-right"
                : "md:col-start-1 md:justify-self-start md:text-left";
              return (
                <div
                  key={exp.period}
                  className="relative md:grid md:grid-cols-2 md:gap-10"
                >
                  {/* Desktop dot aligned to the card header area */}
                  <div className="hidden md:block absolute left-1/2 top-7 -translate-x-1/2">
                    <div className="w-3.5 h-3.5 rounded-full bg-black relative">
                      {exp.current && (
                        <span className="absolute inset-0 rounded-full bg-action opacity-30 animate-ping" />
                      )}
                    </div>
                  </div>

                  <div className={`${sideWrapper} w-full md:max-w-md`}>
                    <div
                      className={[
                        "rounded-2xl border-2 bg-white p-6",
                        exp.current ? "border-action" : "border-black"
                      ].join(" ")}
                    >
                      {/* Mobile period row with dot */}
                      <div className="md:hidden flex items-center gap-3 text-sm font-semibold text-action">
                        <span className="inline-flex w-3.5 h-3.5 rounded-full bg-black" />
                        {exp.period}
                      </div>

                      <div className="hidden md:block text-sm font-semibold text-action">
                        {exp.period}
                      </div>

                      <h3 className="mt-2 text-xl font-semibold">{exp.role}</h3>
                      <div className="mt-1 text-black/70">{exp.company}</div>

                      {exp.description && (
                        <pre className="mt-4 whitespace-pre-wrap text-black/70 text-sm font-sans">
                          {exp.description}
                        </pre>
                      )}

                      {exp.technologies.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
                          {exp.technologies.map((t) => (
                            <span
                              key={t}
                              className="px-3 py-1 rounded-full border border-black/10 text-xs text-black/70"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

