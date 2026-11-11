import Lenis from "lenis";

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
).matches;

// Visitors who ask for reduced motion keep native scrolling.
export const lenis = prefersReducedMotion
    ? null
    : new Lenis({
        autoRaf: true,
        lerp: 0.085,
        smoothWheel: true,
        anchors: true,
    });