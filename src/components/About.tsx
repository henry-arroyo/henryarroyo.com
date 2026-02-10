import Section from "./Section";
import TerminalWindow from "./TerminalWindow";
import data from "../data";

export default function About() {
  return (
    <Section id="about" title="cat about.md">
      <div className="grid md:grid-cols-2 gap-8">
        <p className="text-text-body leading-relaxed font-sans">{data.aboutSummary}</p>

        <TerminalWindow title="details.sh">
          {data.aboutDetails.map((d) => (
            <div key={d.label} className="mb-2">
              <span className="text-terminal-green">{d.label}:</span>{" "}
              <span className="text-text-body">{d.value}</span>
            </div>
          ))}
        </TerminalWindow>
      </div>
    </Section>
  );
}
