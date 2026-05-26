const skills = [
  "React",
  "TypeScript",
  "Flutter",
  "Dart",
  "Python",
  "Java",
  "Artificial Intelligence",
  "GitHub",
  "APIs",
  "Databases",
  "Cybersecurity",
  "Cloud Deployments"
] as const;

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 bg-white">
            <span className="w-2.5 h-2.5 rounded-full bg-action" />
            Skills
          </div>
          <h2 className="mt-5 text-3xl sm:text-4xl font-semibold">
            Tools I use to{" "}
            <span className="text-action">ship</span>.
          </h2>
          <p className="mt-3 text-black/70 leading-relaxed">
            A focused stack across mobile, web, and data-driven development.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {skills.map((skill) => (
            <div
              key={skill}
              className="group rounded-2xl border-2 border-black/10 bg-white px-4 py-4 hover:border-action hover:shadow-[0_0_0_6px_rgba(255,87,34,0.08)] transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="text-black/80 font-medium">{skill}</div>
                <div className="w-2.5 h-2.5 rounded-full bg-action opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

