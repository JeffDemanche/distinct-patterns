import { SVG } from "@svgdotjs/svg.js";

interface GeneratePatternOptions {}

interface Pattern {
  pattern: string;
  length: number;
}

export function generatePattern(options: GeneratePatternOptions) {
  const svg = SVG();

  svg.rect(100, 100).fill("red");

  return svg.svg();
}

if (process.env.NODE_ENV === "development") {
  function initDemo() {
    const patterns = Array.from({ length: 10 }, () => generatePattern({}));

    const patternsContainer = document.getElementById("patterns");
    patterns.forEach((pattern) => {
      if (patternsContainer) {
        patternsContainer.innerHTML += pattern;
      }
    });
  }

  initDemo();
}
