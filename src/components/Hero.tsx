import { useTypingEffect } from "../hooks/useTypingEffect";
import data from "../data";

const lines = [
  { command: "whoami", output: data.name },
  { command: "cat title.txt", output: data.title },
];

export default function Hero() {
  const displayed = useTypingEffect(lines, 60, 500);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-3xl w-full">
        <div className="font-mono space-y-4">
          {displayed.map((line, i) => (
            <div key={i}>
              <div className="text-text-muted">
                <span className="text-terminal-green glow-green">&gt; </span>
                {line.command}
                {!line.done && (
                  <span className="inline-block w-2 h-5 bg-terminal-green ml-1 align-middle animate-blink" />
                )}
              </div>
              {line.done && (
                <div
                  className={`mt-1 ${i === 0 ? "text-3xl md:text-5xl font-bold text-text-heading glow-green" : "text-xl md:text-2xl text-terminal-amber glow-amber"}`}
                >
                  {line.output}
                </div>
              )}
            </div>
          ))}

          {displayed.length === lines.length && displayed[displayed.length - 1]?.done && (
            <div className="mt-4 animate-fade-in">
              <p className="text-text-body mb-8 font-sans text-lg">{data.heroSubtitle}</p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="inline-block px-6 py-3 border border-terminal-green text-terminal-green font-mono text-sm hover:bg-terminal-green-muted transition-colors"
                >
                  ls projects/
                </a>
                <a
                  href="#contact"
                  className="inline-block px-6 py-3 border border-terminal-amber text-terminal-amber font-mono text-sm hover:bg-terminal-amber/10 transition-colors"
                >
                  ./contact.sh
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
