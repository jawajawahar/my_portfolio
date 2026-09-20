"use client";

import { useTypewriter } from "@/hooks/useTypewriter";
import { cn } from "@/lib/utils";

interface TypingTextProps {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

/** Classic typewriter loop: types a word, pauses, deletes, moves to the next. */
export function TypingText({ words, className, ...options }: TypingTextProps) {
  const { text, reducedMotion } = useTypewriter(words, options);

  return (
    <span className={cn("inline-flex items-baseline", className)}>
      {text}
      {!reducedMotion && (
        <span
          aria-hidden
          className="animate-caret-blink ml-1 inline-block h-[0.85em] w-[2px] translate-y-[0.05em] bg-current"
        />
      )}
    </span>
  );
}
