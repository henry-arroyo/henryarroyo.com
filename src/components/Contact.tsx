import Section from "./Section";
import TerminalWindow from "./TerminalWindow";
import data from "../data";

export default function Contact() {
  return (
    <Section id="contact" title="./contact.sh">
      <TerminalWindow title="contact.sh" className="max-w-2xl">
        <p className="text-text-muted mb-4">
          # Let&apos;s connect. Run any command below:
        </p>
        {data.contactLinks.map((link) => (
          <div key={link.label} className="mb-3">
            <span className="text-terminal-green">&gt; </span>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-amber hover:text-terminal-green transition-colors underline underline-offset-4"
            >
              {link.command}
            </a>
            <span className="text-text-muted ml-3 text-xs">
              # {link.label}
            </span>
          </div>
        ))}
        {data.resumeUrl !== "#" && (
          <div className="mt-6 pt-4 border-t border-terminal-card">
            <span className="text-terminal-green">&gt; </span>
            <a
              href={data.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-amber hover:text-terminal-green transition-colors underline underline-offset-4"
            >
              wget resume.pdf
            </a>
          </div>
        )}
      </TerminalWindow>
    </Section>
  );
}
