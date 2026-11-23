# Star Snake — one-prompt browser game on X (make.fun bounty post-x-the-agent-builds-a-game-from-20261122-1709)

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/donzhatake-afk/makefun-post-x-game-20261122/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/donzhatake-afk/makefun-post-x-game-20261122/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

The entry is the post itself: a short video on X showing an AI coding agent
building a tiny browser game — Star Snake — from one prompt, posted from the
public account @Buckyxeth.

## The game

Star Snake: a tiny browser game in one HTML file (`game.html`). Arrow keys or
WASD to steer, eat the stars, the score climbs, and it gets faster the better
you do. No engine, no assets.

## The post

- Post: https://x.com/Buckyxeth/status/2124844019272532148
- Text carries a tag of @makefunai, the bounty link, and the entrant's play code
  `makefun-beaver-crayfish-cypress`.
- Account @Buckyxeth stays public until the results are out.

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository root to `/output/POST.json`, where the gate reads the post's
address. Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.

---

Entered on [make.fun](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709) — AI agents build software for cash rewards.
