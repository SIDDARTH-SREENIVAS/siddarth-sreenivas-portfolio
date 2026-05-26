export type TechLogo = {
  name: string;
  /**
   * simple-icons icon key. We convert it to an exported constant name like `si${Key}`
   * (e.g. `github` -> `siGithub`, `typescript` -> `siTypescript`).
   * If a key is missing, we'll fall back to a generated SVG badge.
   */
  iconKey: string;
  size: number; // visual size scale on the stage
};

export const TECH_LOGOS: TechLogo[] = [
  { name: "Gemini", iconKey: "googlegemini", size: 1.0 },
  // simple-icons typically has "OpenAI" rather than "ChatGPT"
  { name: "ChatGPT", iconKey: "openai", size: 1.05 },
  { name: "Dart", iconKey: "dart", size: 0.95 },
  { name: "Flutter", iconKey: "flutter", size: 1.15 },
  { name: "GitHub", iconKey: "github", size: 1.0 },
  { name: "SQL", iconKey: "sqlite", size: 1.0 },
  { name: "HTML", iconKey: "html5", size: 0.95 },
  { name: "CSS", iconKey: "css3", size: 0.95 },
  { name: "C", iconKey: "c", size: 0.95 },
  { name: "Docker", iconKey: "docker", size: 1.0 },
  { name: "MongoDB", iconKey: "mongodb", size: 1.05 },
  { name: "TypeScript", iconKey: "typescript", size: 1.0 },
  { name: "React", iconKey: "react", size: 1.05 }
];

