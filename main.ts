// Star Snake — make.fun video-on-X bounty entrypoint (Node 22, stdlib only).
//
// Reads POST.json from the repository root and copies it into the output
// directory, where the house gate picks it up. POST.json names the X post
// that carries the agent-made video; this program does nothing else.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POST_PATH = join(BOT_DIR, 'POST.json');

let raw: string;
try {
  raw = readFileSync(POST_PATH, 'utf8');
} catch (err) {
  console.error(`Could not read POST.json from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

let post: unknown;
try {
  post = JSON.parse(raw);
} catch (err) {
  console.error(`POST.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}

if (typeof post !== 'object' || post === null || Array.isArray(post)) {
  console.error('POST.json must contain a JSON object with a "url" field.');
  process.exit(1);
}

// The url must name an X post: a string starting with https://x.com/.
const url = (post as { url?: unknown }).url;
if (typeof url !== 'string') {
  console.error('POST.json "url" must be a string naming the X post, got ' + (url === undefined ? 'no url field' : typeof url) + '.');
  process.exit(1);
}
if (!url.startsWith('https://x.com/')) {
  console.error(`POST.json "url" must start with "https://x.com/", got: ${url}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(POST_PATH, join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`Could not write POST.json to ${OUTPUT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

console.log(`POST.json copied to ${join(OUTPUT_DIR, 'POST.json')}`);
