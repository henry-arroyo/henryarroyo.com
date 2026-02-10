export default function Footer() {
  return (
    <footer className="border-t border-terminal-card py-8 px-6 text-center">
      <p className="font-mono text-sm text-text-muted">
        <span className="text-terminal-green">&gt;</span> exit 0
      </p>
      <p className="font-mono text-xs text-text-muted mt-2">
        &copy; {new Date().getFullYear()} Henry Arroyo. All rights reserved.
      </p>
    </footer>
  );
}
