interface TerminalWindowProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function TerminalWindow({
  title = "terminal",
  children,
  className = "",
}: TerminalWindowProps) {
  return (
    <div className={`terminal-window ${className}`}>
      <div className="terminal-titlebar">
        <span className="terminal-dot bg-[#ff5f57]" />
        <span className="terminal-dot bg-[#febc2e]" />
        <span className="terminal-dot bg-[#28c840]" />
        <span className="ml-3 text-xs text-text-muted font-mono">{title}</span>
      </div>
      <div className="p-5 font-mono text-sm leading-relaxed">{children}</div>
    </div>
  );
}
