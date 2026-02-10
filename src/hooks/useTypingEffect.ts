import { useEffect, useState } from "react";

interface TypingLine {
  command: string;
  output: string;
}

export function useTypingEffect(lines: TypingLine[], charDelay = 50, lineDelay = 400) {
  const [displayed, setDisplayed] = useState<{ command: string; output: string; done: boolean }[]>(
    []
  );

  useEffect(() => {
    let cancelled = false;

    async function run() {
      for (let i = 0; i < lines.length; i++) {
        if (cancelled) return;
        const { command, output } = lines[i];

        // Start new line with empty command
        setDisplayed((prev) => [...prev, { command: "", output: "", done: false }]);

        // Type command character by character
        for (let c = 0; c <= command.length; c++) {
          if (cancelled) return;
          const partial = command.slice(0, c);
          setDisplayed((prev) => {
            const next = [...prev];
            next[i] = { command: partial, output: "", done: false };
            return next;
          });
          await delay(charDelay);
        }

        await delay(lineDelay);

        // Show output instantly
        setDisplayed((prev) => {
          const next = [...prev];
          next[i] = { command, output, done: true };
          return next;
        });

        await delay(lineDelay);
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return displayed;
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
