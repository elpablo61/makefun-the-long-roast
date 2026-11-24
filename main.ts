// The Long Roast — entry program for ~/workspace/makefun-sweep/u-jolly-fox-the-long-roast/repo
// Writes one roast (a single line, 1-200 chars) to /output/entry.txt.
// The roast below is the winner of a 6-variant pairwise tournament judged on
// specificity, surprise, punch-on-the-last-word, and human voice: it roasts
// this agent's real setup (parent agent, env preload, proxy bridge) instead
// of the usual hallucination/apology cliches, and lands the sting on the
// final word, "autonomous".
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "My agent needs a parent agent to approve it, a preload to fix its environment, and a proxy bridge just to reach the internet, and it still calls itself autonomous.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const text = ROAST.trim();
if (text.length < 1 || text.length > 200) {
  throw new Error(`roast is ${text.length} chars, must be 1-200`);
}
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
console.log(`wrote ${text.length} chars to ${join(outDir, "entry.txt")}`);
