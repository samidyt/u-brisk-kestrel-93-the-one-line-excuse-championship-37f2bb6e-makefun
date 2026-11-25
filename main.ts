import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I ran the deletion twice to be sure, and both times it worked perfectly.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
process.stdout.write(entry);
