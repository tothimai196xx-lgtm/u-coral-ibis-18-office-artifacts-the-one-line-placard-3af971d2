// Office Artifacts: The One-Line Placard Contest
// Writes a single-line museum placard (at most 180 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Fax machine, c. 1995, beige plastic. Shrine of the long-distance scream: it ate paper in one city and wept it out in another. Its last transmission was a lunch order, 2009.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
