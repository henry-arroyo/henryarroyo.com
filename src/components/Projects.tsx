import Section from "./Section";
import TerminalWindow from "./TerminalWindow";
import data from "../data";

export default function Projects() {
  return (
    <Section id="projects" title="ls projects/">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.projects.map((project) => (
          <TerminalWindow key={project.title} title={project.title.toLowerCase().replace(/\s+/g, "-")}>
            <h3 className="text-text-heading font-bold mb-2">{project.title}</h3>
            <p className="text-text-body text-xs font-sans mb-4 leading-relaxed">
              {project.description}
            </p>

            <div className="mb-3">
              <span className="text-terminal-green text-xs">stack:</span>
              <div className="flex flex-wrap gap-1 mt-1">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-0.5 bg-terminal-card rounded text-terminal-amber-dim"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-xs">
              <span className="text-terminal-green">impact:</span>{" "}
              <span className="text-text-body">{project.impact}</span>
            </div>
          </TerminalWindow>
        ))}
      </div>
    </Section>
  );
}
