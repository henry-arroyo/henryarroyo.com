import { useInView } from "../hooks/useInView";

interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ id, title, children, className = "" }: SectionProps) {
  const { ref, inView } = useInView();

  return (
    <section
      id={id}
      ref={ref}
      className={`py-20 px-6 max-w-5xl mx-auto ${inView ? "fade-in-visible" : "fade-in-hidden"} ${className}`}
    >
      {title && (
        <h2 className="font-mono text-2xl md:text-3xl text-text-heading mb-10">
          <span className="text-terminal-green glow-green">$</span> {title}
        </h2>
      )}
      {children}
    </section>
  );
}
