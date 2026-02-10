import Section from "./Section";
import data from "../data";

export default function Experience() {
  return (
    <Section id="experience" title="git log --career">
      <div className="space-y-0">
        {data.experiences.map((exp, i) => (
          <div key={i} className="relative pl-6 pb-10 border-l-2 border-terminal-green-dim last:pb-0">
            {/* Timeline dot */}
            <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-terminal-green glow-green" />

            <div className="mb-1">
              <h3 className="font-mono text-lg text-text-heading">{exp.title}</h3>
              <p className="font-mono text-sm text-terminal-amber">{exp.company}</p>
              <p className="font-mono text-xs text-text-muted mt-1">{exp.period}</p>
            </div>

            <ul className="mt-3 space-y-2">
              {exp.bullets.map((b, j) => (
                <li key={j} className="text-text-body text-sm font-sans flex gap-2">
                  <span className="text-terminal-green-dim shrink-0">&gt;</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
