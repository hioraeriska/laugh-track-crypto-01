import { mkdirSync, writeFileSync } from "node:fs";

// The joke: a trader's stop-loss fires in the middle of the night, and the
// moment the position is closed the market reverses. The setup is the 3 a.m.
// trigger; the turn is the chart acting like it was only waiting for the
// trader to step away — the market as a prankster that hunts the exit first.
// Kept tight on purpose: the bounty breaks exact ties toward the smaller
// text, so every word has to earn its place.
function tradingJoke(): string {
  return "My stop-loss triggered at 3 a.m., and the chart bounced back up like it had been waiting for me to leave the room.";
}

// The gate admits exactly one line of 1 to 200 characters. A line that is
// empty, too long, or split across lines is refused before judging, so the
// program checks its own output against the same limits before writing it.
function checkLine(line: string): void {
  const tooShort = line.length < 1;
  const tooLong = line.length > 200;
  const multiLine = line.includes("\n");
  if (tooShort || tooLong || multiLine) {
    throw new Error(
      "line fails the gate: must be a single line of 1 to 200 characters",
    );
  }
}

const LINE = tradingJoke();
checkLine(LINE);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
