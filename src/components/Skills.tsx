import Section from "./Section";
import data from "../data";

export default function Skills() {
  return (
    <Section id="skills" title="ls skills/">
      {/* Skill categories */}
      <div className="space-y-8 mb-16">
        {data.skillCategories.map((cat) => (
          <div key={cat.category}>
            <h3 className="font-mono text-sm text-terminal-green mb-3">
              &gt; ls skills/{cat.category.toLowerCase().replace(/\s+/g, "-")}/
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs font-mono text-terminal-green-dim border border-terminal-green-muted bg-terminal-green-muted/20 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <h3 className="font-mono text-xl text-text-heading mb-6">
        <span className="text-terminal-amber glow-amber">$</span> cat certifications.json
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.certifications.map((cert) => (
          <div
            key={cert.name}
            className="terminal-window"
          >
            <div className="p-5">
              <h4 className="font-mono text-sm text-terminal-amber font-medium mb-2">
                {cert.name}
              </h4>
              <p className="text-xs text-text-muted font-mono">
                {cert.issuer} &middot; {cert.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
