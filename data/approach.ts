export type ApproachPillar = {
  id: string;
  name: string;
  summary: string;
};

/** Five method ideas from the homepage approach lede — not company values. */
export const approachPillars: readonly ApproachPillar[] = [
  {
    id: "connection",
    name: "Connection",
    summary: "Build genuine rapport so people feel safe enough to show up as a team.",
  },
  {
    id: "collaboration",
    name: "Collaboration",
    summary: "Practice working together under shared goals, roles, and real constraints.",
  },
  {
    id: "fun",
    name: "Fun",
    summary: "Keep energy high so learning sticks and participation stays natural.",
  },
  {
    id: "reflection",
    name: "Reflection",
    summary: "Pause to notice what worked, what strained, and what the team can carry forward.",
  },
  {
    id: "purposeful-learning",
    name: "Purposeful learning",
    summary: "Close with clear takeaways that strengthen communication, trust, and leadership.",
  },
] as const;
