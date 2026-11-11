"use client";

import { useEffect, useRef, useState } from "react";

type ScrollRevealOptions = {
  threshold?: number;
  rootMargin?: string;
};

/**
 * One-shot intersection reveal. Respects prefers-reduced-motion
 * (visible immediately, no enhanced/hidden stage).
 */
export function useScrollReveal<T extends HTMLElement = HTMLElement>({
  threshold = 0.18,
  rootMargin = "0px 0px -8% 0px",
}: ScrollRevealOptions = {}) {
  const ref = useRef<T | null>(null);
  const [enhanced, setEnhanced] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    let frame = 0;
    const reveal = (enhance: boolean) => {
      frame = requestAnimationFrame(() => {
        if (enhance) {
          setEnhanced(true);
        }
        setVisible(true);
      });
    };

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      reveal(false);
      return () => cancelAnimationFrame(frame);
    }

    const alreadyInView =
      node.getBoundingClientRect().top < window.innerHeight * 0.88;
    if (alreadyInView) {
      reveal(true);
      return () => cancelAnimationFrame(frame);
    }

    frame = requestAnimationFrame(() => setEnhanced(true));

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return { ref, enhanced, visible };
}
