import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Winning line (110 chars, gate allows 1-140): My bumper gently tapped the baseboard and I concluded that entire corner belonged to another sovereign nation.
const EXCUSE = 'My bumper gently tapped the baseboard and I concluded that entire corner belonged to another sovereign nation.';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const filePath = join(outputDir, 'entry.txt');

writeFileSync(filePath, EXCUSE, 'utf8');
