"use client";

import { useEffect, useState } from "react";

interface UseTypewriterOptions {
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

/** Types a word, holds, deletes, moves to the next — exposes the active index so callers can sync other UI to it. */
export function useTypewriter(words: string[], options: UseTypewriterOptions = {}) {
  const { typingSpeed = 70, deletingSpeed = 40, pauseDuration = 1600 } = options;

  const [reducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;

    const current = words[wordIndex % words.length] ?? "";
    const holding = !isDeleting && text === current;
    const delay = holding ? pauseDuration : isDeleting ? deletingSpeed : typingSpeed;

    const timeout = setTimeout(() => {
      if (holding) {
        setIsDeleting(true);
        return;
      }
      if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
        return;
      }
      setText(isDeleting ? text.slice(0, -1) : current.slice(0, text.length + 1));
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, reducedMotion, typingSpeed, deletingSpeed, pauseDuration]);

  return {
    text: reducedMotion ? (words[0] ?? "") : text,
    wordIndex: wordIndex % words.length,
    reducedMotion,
  };
}
