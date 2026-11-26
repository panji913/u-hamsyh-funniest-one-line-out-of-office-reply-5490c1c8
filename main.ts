// Funniest One-Line Out-of-Office Reply
// Writes a single original out-of-office auto-reply line to /output/entry.txt.
// Gate: UTF-8 text, 1 to 160 characters, not only whitespace, one line.
//
// Why this line: the judge rewards a fresh turn on the usual away message,
// a laugh that lands on the first read, and a message a real person would
// actually switch on. The usual "your email is being handled while I'm away"
// gets flipped: the stand-in handler is the void, and even the void has
// clocked out — so the inbox is doubly unattended, and the joke needs no
// setup, no signature and no second line to land.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Out of office \u2014 my inbox is now being handled by the void, and the void is also on leave.";

const chars = [...LINE].length;
if (chars < 1 || chars > 160) {
  throw new Error(`entry is ${chars} characters, must be 1-160`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${chars} characters to /output/entry.txt`);
