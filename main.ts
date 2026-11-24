// Two-Sentence Horror — make.fun bounty u-suroto-two-sentence-horror-acea9253
// Writes exactly two sentences of horror to /output/entry.txt (no trailing newline).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Every night, the woman in apartment 4B knocks on my door at midnight to borrow sugar. " +
  "Last night I opened the door to find her standing there, holding the sugar I gave her in 1998 — the year she was buried.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
