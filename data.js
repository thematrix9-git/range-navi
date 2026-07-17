/* =====================================================================
   METADATA-FIRST EXPORTS (schema version 2)
   -----------------------------------------
   Libraries created by HRC Screenshot Exporter 2.x use simple node filenames
   such as BTN/node-000011.png. Their poker meaning is stored in pack.json and
   the generated library-metadata.js index. The Navigator always prefers that
   typed metadata, including exact action history and actual action sizes.

   The filename convention documented below is retained for legacy and
   manually assembled libraries only. Do not rename schema-v2 exporter output.

   Range Navigator — data.js
   =====================================================================

   ── FILE NAMING CONVENTION ──────────────────────────────────────────

   The HERO (the position whose chart it is) always comes FIRST.
   _  separates the hero position from an action label.
   -  separates players / components within the name.
   Size is always the very last component (e.g. -7bb, -22bb).

   ┌─────────────┬────────────────────────────────────────────────────┐
   │ Situation   │ Pattern                                            │
   ├─────────────┼────────────────────────────────────────────────────┤
   │ RFI         │ Position.png                                       │
   │ 3BET        │ Actor_3B-Opener(-size).png                         │
   │ vs 3BET     │ Actor-Opener_3B(-size).png                         │
   │ 4BET        │ Actor_4B-Opponent(-size).png                       │
   │ vs 4BET     │ Actor-Opponent_4B(-size).png                       │
   │ C4BET       │ Actor_C4B-3Bpos-Opener(-size).png                  │
   │ Squeeze     │ Actor_Squeeze-Caller-Opener(-size).png             │
   │ vs Squeeze  │ Actor-Caller-Squeezer_Squeeze(-size).png           │
   └─────────────┴────────────────────────────────────────────────────┘

   Examples:
     UTG.png                    UTG RFI range
     BTN_3B-CO.png              BTN 3bets CO's open
     BTN_3B-CO-7bb.png          same, 7bb size variant
     UTG-CO_3B.png              UTG vs CO 3bet (UTG opened, CO 3bet)
     UTG-CO_3B-22bb.png         same, 22bb size variant
     UTG_4B-BTN.png             UTG 4bets BTN's 3bet
     UTG_4B-BTN-22bb.png        same, 22bb size variant
     BTN-UTG_4B.png             BTN vs UTG 4bet
     BTN-UTG_4B-23bb.png        same, 23bb size variant
     BB_C4B-SB-BTN.png          BB cold 4bets (BTN opened, SB 3bet)
     BB_C4B-SB-BTN-23bb.png     same, 23bb size variant
     BB_Squeeze-BTN-UTG.png     BB squeezes (UTG opened, BTN called)
     BB_Squeeze-BTN-UTG-13bb.png same, 13bb size variant
     UTG-BTN-BB_Squeeze.png     UTG vs BB squeeze (UTG opened, BTN called)
     UTG-BTN-BB_Squeeze-13bb.png same, 13bb size variant

   Size variants are auto-tabbed in the app — add as many size files as
   you need for a spot and they'll appear as tabs automatically:
     UTG_3B-CO.png  +  UTG_3B-CO-7bb.png  +  UTG_3B-CO-9bb.png
     → tabs: Base | 7bb | 9bb

   The imageBase field must be the shared prefix WITHOUT the size suffix
   and WITHOUT the file extension:
     imageBase: "BTN_3B-CO"    matches BTN_3B-CO.png, BTN_3B-CO-7bb.png …
     imageBase: "UTG-CO_3B"    matches UTG-CO_3B.png, UTG-CO_3B-22bb.png …

   ── HU NAMING ───────────────────────────────────────────────────────

   In heads-up, the dealer / small blind position is called BTN.
   Use BTN (not BTN_SB) everywhere in paths, filenames, and folders.

   ── OVERVIEW FILES ──────────────────────────────────────────────────

   Pattern:  HERO-overview[_CONTEXT].ext

   Examples:
     BB-overview_RFI.png         BB defence vs all opens (combined chart)
     BB-overview_3B.png          BB 3bet ranges vs all positions
     SB-overview_3B.png          SB 3bet ranges
     UTG-overview_open.png       UTG opening overview

   Place overview files in the same position subfolder as regular charts:
     images/6max 2.2x/BB/BB-overview_RFI.png

   You can also add/edit overviews directly inside the app (⋯ button → Manage).
   Custom overviews added in-app are stored locally and do not require
   editing this file.

   ── STRATEGY FILE (HU only) ─────────────────────────────────────────

   Place a file named strategy.png in the pack root folder (not a subfolder):
     images/HU Raked/strategy.png

   The app will show a "Strategy" button in the centre of the HU table.

   ── FOLDER STRUCTURE ────────────────────────────────────────────────

   images/
     6max_22/             ← existing folder (or rename to "6max 2.2x" etc.)
       UTG/   BB/   MP/   CO/   BTN/   SB/
     6max_25/
       UTG/   BB/   MP/   CO/   BTN/   SB/
     HU Raked/            ← renamed from "HU"
       BTN/   BB/
       strategy.png       ← optional strategy overview

   New folders are auto-detected from the image manifest — no editing needed.
   Name new folders clearly: "HU Rake Free", "6max 3x", etc.

   Rule: a chart lives in the folder of its HERO (the position whose
   range it shows — always the last position to act in the path).

   ── ADDING CONTENT ──────────────────────────────────────────────────

   To add a new chart:
     1. Drop the PNG into images/{pack folder}/{position}/
     2. Add a node entry below (copy an existing one as a template)
     3. Double-click build-manifest.ps1 → reload the app

   To add an overview:
     Option A (in-app): tap ⋯ on any position → Manage → Add new entry
     Option B (data.js): add an entry to the pack's overviews array below,
                         then run build-manifest.ps1 → reload
   ===================================================================== */

const PACKS = [

  // ═══════════════════════════════════════════════════════════════
  //  6max 2.2bb
  // ═══════════════════════════════════════════════════════════════
  {
    id:          "6max_22bb",
    displayName: "6max 2.2bb",
    format:      "sixMax",
    imageFolder: "6max_22",

    // ── Double-tap defaults: overview opened when a position is double-tapped
    //    with nothing else in the path. Can be overridden per-pack in the app.
    defaultOverviews: {
      BB: { label: "BB vs RFI", imageFolder: "BB", imageBase: "BB-overview_RFI" },
    },

    // ── Overview charts (shown via the ⋯ button on each position) ──
    overviews: [
      {
        position:    "BB",
        label:       "BB vs RFI",
        imageFolder: "BB",
        imageBase:   "BB-overview_RFI"
        // File: images/6max_22/BB/BB-overview_RFI.png
      },
      {
        position:    "BB",
        label:       "BB vs 4B",
        imageFolder: "BB",
        imageBase:   "BB-overview_4B"
      },
      {
        position:    "SB",
        label:       "SB vs RFI",
        imageFolder: "SB",
        imageBase:   "SB-overview_RFI"
      },
      {
        position:    "SB",
        label:       "SB vs BB 3B",
        imageFolder: "SB",
        imageBase:   "SB-overview_BB3B"
      },
      {
        position:    "BTN",
        label:       "BTN vs RFI",
        imageFolder: "BTN",
        imageBase:   "BTN-overview_RFI"
      },
      {
        position:    "BTN",
        label:       "BTN vs 3B",
        imageFolder: "BTN",
        imageBase:   "BTN-overview_3B"
      },
      {
        position:    "UTG",
        label:       "UTG RFI",
        imageFolder: "UTG",
        imageBase:   "UTG-overview_open"
      },
      {
        position:    "UTG",
        label:       "UTG vs 3B",
        imageFolder: "UTG",
        imageBase:   "UTG-overview_3B"
      },
      {
        position:    "CO",
        label:       "CO vs RFI",
        imageFolder: "CO",
        imageBase:   "CO-overview_RFI"
      },
      {
        position:    "MP",
        label:       "MP vs RFI",
        imageFolder: "MP",
        imageBase:   "MP-overview_RFI"
      },
    ],

    // ── Nodes ──────────────────────────────────────────────────────
    nodes: [

      // UTG opens
      { path: ["UTG"],           title: "UTG RFI",           imageFolder: "UTG", imageBase: "UTG_RFI" },
      { path: ["UTG","MP"],      title: "MP vs UTG open",    imageFolder: "MP",  imageBase: "MP-UTG" },
      { path: ["UTG","CO"],      title: "CO vs UTG open",    imageFolder: "CO",  imageBase: "CO-UTG" },
      { path: ["UTG","BTN"],     title: "BTN vs UTG open",   imageFolder: "BTN", imageBase: "BTN-UTG", variants: ["CC", "4B"] },
      { path: ["UTG","SB"],      title: "SB vs UTG open",    imageFolder: "SB",  imageBase: "SB-UTG" },
      { path: ["UTG","BB"],      title: "BB vs UTG open",    imageFolder: "BB",  imageBase: "BB-UTG" },

      // UTG faces 3bet
      { path: ["UTG","BB","UTG"],    title: "UTG vs BB 3bet",  imageFolder: "UTG", imageBase: "UTG-BB_3B" },
      { path: ["UTG","SB","UTG"],    title: "UTG vs SB 3bet",  imageFolder: "UTG", imageBase: "UTG-SB_3B" },
      { path: ["UTG","BTN","UTG"],   title: "UTG vs BTN 3bet", imageFolder: "UTG", imageBase: "UTG-BTN_3B" },
      { path: ["UTG","MP","UTG"],    title: "UTG vs MP 3bet",  imageFolder: "UTG", imageBase: "UTG-MP_3B" },
      { path: ["UTG","CO","UTG"],    title: "UTG vs CO 3bet",  imageFolder: "UTG", imageBase: "UTG-CO_3B" },

      // UTG 4bet / 5bet
      { path: ["UTG","BB","UTG","BB"],         title: "BB vs UTG 4bet",    imageFolder: "BB",  imageBase: "BB-UTG_4B" },
      { path: ["UTG","BB","UTG","BB","UTG"],    title: "UTG vs BB 5bet",    imageFolder: "UTG", imageBase: "UTG-BB_5B" },

      // MP opens
      { path: ["MP"],            title: "MP RFI",            imageFolder: "MP",  imageBase: "MP_RFI" },
      { path: ["MP","CO"],       title: "CO vs MP open",     imageFolder: "CO",  imageBase: "CO-MP" },
      { path: ["MP","BTN"],      title: "BTN vs MP open",    imageFolder: "BTN", imageBase: "BTN-MP" },
      { path: ["MP","SB"],       title: "SB vs MP open",     imageFolder: "SB",  imageBase: "SB-MP" },
      { path: ["MP","BB"],       title: "BB vs MP open",     imageFolder: "BB",  imageBase: "BB-MP" },

      // MP faces 3bet
      { path: ["MP","BB","MP"],  title: "MP vs BB 3bet",     imageFolder: "MP",  imageBase: "MP-BB_3B" },
      { path: ["MP","SB","MP"],  title: "MP vs SB 3bet",     imageFolder: "MP",  imageBase: "MP-SB_3B" },
      { path: ["MP","BTN","MP"], title: "MP vs BTN 3bet",    imageFolder: "MP",  imageBase: "MP-BTN_3B" },
      { path: ["MP","CO","MP"],  title: "MP vs CO 3bet",     imageFolder: "MP",  imageBase: "MP-CO_3B" },

      // CO opens
      { path: ["CO"],            title: "CO RFI",            imageFolder: "CO",  imageBase: "CO_RFI" },
      { path: ["CO","BTN"],      title: "BTN vs CO open",    imageFolder: "BTN", imageBase: "BTN-CO" },
      { path: ["CO","SB"],       title: "SB vs CO open",     imageFolder: "SB",  imageBase: "SB-CO" },
      { path: ["CO","BB"],       title: "BB vs CO open",     imageFolder: "BB",  imageBase: "BB-CO" },

      // CO faces 3bet
      { path: ["CO","BTN","CO"], title: "CO vs BTN 3bet",    imageFolder: "CO",  imageBase: "CO-BTN_3B" },
      { path: ["CO","SB","CO"],  title: "CO vs SB 3bet",     imageFolder: "CO",  imageBase: "CO-SB_3B" },
      { path: ["CO","BB","CO"],  title: "CO vs BB 3bet",     imageFolder: "CO",  imageBase: "CO-BB_3B" },

      // CO 4bet
      { path: ["CO","BTN","CO","BTN"], title: "BTN vs CO 4bet", imageFolder: "BTN", imageBase: "BTN-CO_4B" },

      // BTN opens
      { path: ["BTN"],           title: "BTN RFI",           imageFolder: "BTN", imageBase: "BTN_RFI" },
      { path: ["BTN","SB"],      title: "SB vs BTN open",    imageFolder: "SB",  imageBase: "SB-BTN" },
      { path: ["BTN","BB"],      title: "BB vs BTN open",    imageFolder: "BB",  imageBase: "BB-BTN" },

      // BTN faces 3bet
      { path: ["BTN","SB","BTN"], title: "BTN vs SB 3bet",   imageFolder: "BTN", imageBase: "BTN-SB_3B" },
      { path: ["BTN","BB","BTN"], title: "BTN vs BB 3bet",   imageFolder: "BTN", imageBase: "BTN-BB_3B" },

      // BTN 4bet
      { path: ["BTN","SB","BTN","SB"], title: "SB vs BTN 4bet",  imageFolder: "SB",  imageBase: "SB-BTN_4B" },
      { path: ["BTN","BB","BTN","BB"], title: "BB vs BTN 4bet",  imageFolder: "BB",  imageBase: "BB-BTN_4B" },

      // SB opens
      { path: ["SB"],            title: "SB RFI",            imageFolder: "SB",  imageBase: "SB_RFI" },
      { path: ["SB","BB"],       title: "BB vs SB open",     imageFolder: "BB",  imageBase: "BB-SB" },

      // SB faces 3bet
      { path: ["SB","BB","SB"],  title: "SB vs BB 3bet",     imageFolder: "SB",  imageBase: "SB-BB_3B" },

      // SB 4bet
      { path: ["SB","BB","SB","BB"], title: "BB vs SB 4bet", imageFolder: "BB",  imageBase: "BB-SB_4B" },

      // ── Cold 4bet (C4B) ────────────────────────────────────────
      // Existing (kept for backwards compat with any saved freq data)
      { path: ["BTN","SB","BB"],       title: "BB cold 4bet vs SB 3bet",    imageFolder: "BB",  imageBase: "BB_C4B-SB_3B-BTN" },
      { path: ["CO","BTN","SB"],       title: "SB cold 4bet vs BTN 3bet",   imageFolder: "SB",  imageBase: "SB_C4B-BTN_3B-CO" },
      { path: ["UTG","CO","BTN"],      title: "BTN cold 4bet vs CO 3bet",   imageFolder: "BTN", imageBase: "BTN_C4B-CO_3B-UTG" },

      // UTG opens, MP 3bets → C4B
      { path: ["UTG","MP","CO"],  title: "CO C4B vs MP-UTG",  imageFolder: "CO",  imageBase: "CO_C4B-MP_3B-UTG" },
      { path: ["UTG","MP","BTN"], title: "BTN C4B vs MP-UTG", imageFolder: "BTN", imageBase: "BTN_C4B-MP_3B-UTG" },
      { path: ["UTG","MP","SB"],  title: "SB C4B vs MP-UTG",  imageFolder: "SB",  imageBase: "SB_C4B-MP_3B-UTG" },
      { path: ["UTG","MP","BB"],  title: "BB C4B vs MP-UTG",  imageFolder: "BB",  imageBase: "BB_C4B-MP_3B-UTG" },

      // UTG opens, CO 3bets → C4B
      { path: ["UTG","CO","SB"],  title: "SB C4B vs CO-UTG",  imageFolder: "SB",  imageBase: "SB_C4B-CO_3B-UTG" },
      { path: ["UTG","CO","BB"],  title: "BB C4B vs CO-UTG",  imageFolder: "BB",  imageBase: "BB_C4B-CO_3B-UTG" },

      // UTG opens, BTN 3bets → C4B
      { path: ["UTG","BTN","SB"], title: "SB C4B vs BTN-UTG", imageFolder: "SB",  imageBase: "SB_C4B-BTN_3B-UTG" },
      { path: ["UTG","BTN","BB"], title: "BB C4B vs BTN-UTG", imageFolder: "BB",  imageBase: "BB_C4B-BTN_3B-UTG" },

      // UTG opens, SB 3bets → C4B
      { path: ["UTG","SB","BB"],  title: "BB C4B vs SB-UTG",  imageFolder: "BB",  imageBase: "BB_C4B-SB_3B-UTG" },

      // MP opens, CO 3bets → C4B
      { path: ["MP","CO","BTN"],  title: "BTN C4B vs CO-MP",  imageFolder: "BTN", imageBase: "BTN_C4B-CO_3B-MP" },
      { path: ["MP","CO","SB"],   title: "SB C4B vs CO-MP",   imageFolder: "SB",  imageBase: "SB_C4B-CO_3B-MP" },
      { path: ["MP","CO","BB"],   title: "BB C4B vs CO-MP",   imageFolder: "BB",  imageBase: "BB_C4B-CO_3B-MP" },

      // MP opens, BTN 3bets → C4B
      { path: ["MP","BTN","SB"],  title: "SB C4B vs BTN-MP",  imageFolder: "SB",  imageBase: "SB_C4B-BTN_3B-MP" },
      { path: ["MP","BTN","BB"],  title: "BB C4B vs BTN-MP",  imageFolder: "BB",  imageBase: "BB_C4B-BTN_3B-MP" },

      // MP opens, SB 3bets → C4B
      { path: ["MP","SB","BB"],   title: "BB C4B vs SB-MP",   imageFolder: "BB",  imageBase: "BB_C4B-SB_3B-MP" },

      // CO opens, BTN 3bets → C4B
      { path: ["CO","BTN","BB"],  title: "BB C4B vs BTN-CO",  imageFolder: "BB",  imageBase: "BB_C4B-BTN_3B-CO" },

      // CO opens, SB 3bets → C4B
      { path: ["CO","SB","BB"],   title: "BB C4B vs SB-CO",   imageFolder: "BB",  imageBase: "BB_C4B-SB_3B-CO" },

      // ── Squeeze (coldcall → squeeze) ───────────────────────────
      // Notation: middle step is _CC = cold-caller.
      // Squeeze image naming: Squeezer_Squeeze-Caller-Opener(-size).png
      //   e.g. BB_Squeeze-BTN-UTG.png
      //
      // BTN coldcalls opener → SB or BB squeezes
      { path: ["UTG","BTN_CC","SB"],  title: "SB Squeeze vs BTN CC-UTG",  imageFolder: "SB",  imageBase: "SB_Squeeze-BTN-UTG" },
      { path: ["UTG","BTN_CC","BB"],  title: "BB Squeeze vs BTN CC-UTG",  imageFolder: "BB",  imageBase: "BB_Squeeze-BTN-UTG" },
      { path: ["MP", "BTN_CC","SB"],  title: "SB Squeeze vs BTN CC-MP",   imageFolder: "SB",  imageBase: "SB_Squeeze-BTN-MP"  },
      { path: ["MP", "BTN_CC","BB"],  title: "BB Squeeze vs BTN CC-MP",   imageFolder: "BB",  imageBase: "BB_Squeeze-BTN-MP"  },
      { path: ["CO", "BTN_CC","SB"],  title: "SB Squeeze vs BTN CC-CO",   imageFolder: "SB",  imageBase: "SB_Squeeze-BTN-CO"  },
      { path: ["CO", "BTN_CC","BB"],  title: "BB Squeeze vs BTN CC-CO",   imageFolder: "BB",  imageBase: "BB_Squeeze-BTN-CO"  },
      // SB coldcalls opener → BB squeezes
      { path: ["UTG","SB_CC", "BB"],  title: "BB Squeeze vs SB CC-UTG",   imageFolder: "BB",  imageBase: "BB_Squeeze-SB-UTG"  },
      { path: ["MP", "SB_CC", "BB"],  title: "BB Squeeze vs SB CC-MP",    imageFolder: "BB",  imageBase: "BB_Squeeze-SB-MP"   },
      { path: ["CO", "SB_CC", "BB"],  title: "BB Squeeze vs SB CC-CO",    imageFolder: "BB",  imageBase: "BB_Squeeze-SB-CO"   },
      { path: ["BTN","SB_CC", "BB"],  title: "BB Squeeze vs SB CC-BTN",   imageFolder: "BB",  imageBase: "BB_Squeeze-SB-BTN"  },

      // ── Cold 5bet / 5bet responses (C5B) ───────────────────────
      // After UTG-MP-BTN (BTN C4B vs MP-UTG)
      { path: ["UTG","MP","BTN","UTG"], title: "UTG 5B vs BTN C4B vs MP-UTG", imageFolder: "UTG", imageBase: "UTG_5B-BTN_C4B-MP_3B" },
      { path: ["UTG","MP","BTN","MP"],  title: "MP 5B vs BTN C4B vs UTG-MP",  imageFolder: "MP",  imageBase: "MP_5B-BTN_C4B-MP_3B-UTG" },
      { path: ["UTG","MP","BTN","CO"],  title: "CO C5B vs BTN C4B vs MP-UTG", imageFolder: "CO",  imageBase: "CO_C5B-BTN_C4B-MP_3B-UTG" },
      { path: ["UTG","MP","BTN","SB"],  title: "SB C5B vs BTN C4B vs MP-UTG", imageFolder: "SB",  imageBase: "SB_C5B-BTN_C4B-MP_3B-UTG" },
      { path: ["UTG","MP","BTN","BB"],  title: "BB C5B vs BTN C4B vs MP-UTG", imageFolder: "BB",  imageBase: "BB_C5B-BTN_C4B-MP_3B-UTG" },

      // After UTG-CO-BTN (BTN C4B vs CO-UTG)
      { path: ["UTG","CO","BTN","UTG"], title: "UTG 5B vs BTN C4B vs CO-UTG", imageFolder: "UTG", imageBase: "UTG_5B-BTN_C4B-CO_3B" },
      { path: ["UTG","CO","BTN","MP"],  title: "MP C5B vs BTN C4B vs CO-UTG", imageFolder: "MP",  imageBase: "MP_C5B-BTN_C4B-CO_3B-UTG" },
      { path: ["UTG","CO","BTN","CO"],  title: "CO 5B vs BTN C4B vs UTG-CO",  imageFolder: "CO",  imageBase: "CO_5B-BTN_C4B-CO_3B-UTG" },
      { path: ["UTG","CO","BTN","SB"],  title: "SB C5B vs BTN C4B vs CO-UTG", imageFolder: "SB",  imageBase: "SB_C5B-BTN_C4B-CO_3B-UTG" },
      { path: ["UTG","CO","BTN","BB"],  title: "BB C5B vs BTN C4B vs CO-UTG", imageFolder: "BB",  imageBase: "BB_C5B-BTN_C4B-CO_3B-UTG" },

      // After CO-BTN-SB (SB C4B vs BTN-CO)
      { path: ["CO","BTN","SB","CO"],  title: "CO 5B vs SB C4B vs BTN-CO",  imageFolder: "CO",  imageBase: "CO_5B-SB_C4B-BTN_3B" },
      { path: ["CO","BTN","SB","BTN"], title: "BTN 5B vs SB C4B vs CO-BTN", imageFolder: "BTN", imageBase: "BTN_5B-SB_C4B-BTN_3B-CO" },
      { path: ["CO","BTN","SB","BB"],  title: "BB C5B vs SB C4B vs BTN-CO", imageFolder: "BB",  imageBase: "BB_C5B-SB_C4B-BTN_3B-CO" },

      // After BTN-SB-BB (BB C4B vs SB-BTN)
      { path: ["BTN","SB","BB","BTN"], title: "BTN 5B vs BB C4B vs SB-BTN", imageFolder: "BTN", imageBase: "BTN_5B-BB_C4B-SB_3B" },
      { path: ["BTN","SB","BB","SB"],  title: "SB 5B vs BB C4B vs BTN-SB",  imageFolder: "SB",  imageBase: "SB_5B-BB_C4B-SB_3B-BTN" },
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  //  6max 2.5bb
  // ═══════════════════════════════════════════════════════════════
  {
    id:          "6max_25bb",
    displayName: "6max 2.5bb",
    format:      "sixMax",
    imageFolder: "6max_25",

    defaultOverviews: {
      BB: { label: "BB vs RFI", imageFolder: "BB", imageBase: "BB-overview_RFI" },
    },

    overviews: [
      {
        position:    "BB",
        label:       "BB vs RFI",
        imageFolder: "BB",
        imageBase:   "BB-overview_RFI"
      },
      {
        position:    "BB",
        label:       "BB vs 3B",
        imageFolder: "BB",
        imageBase:   "BB-overview_3B"
      },
      {
        position:    "BB",
        label:       "BB vs 4B",
        imageFolder: "BB",
        imageBase:   "BB-overview_4B"
      },
      {
        position:    "SB",
        label:       "SB vs RFI",
        imageFolder: "SB",
        imageBase:   "SB-overview_RFI"
      },
      {
        position:    "SB",
        label:       "SB vs BB 3B",
        imageFolder: "SB",
        imageBase:   "SB-overview_BB3B"
      },
    ],

    nodes: [
      { path: ["UTG"],              title: "UTG RFI",          imageFolder: "UTG", imageBase: "UTG_RFI" },
      { path: ["UTG","BB"],         title: "BB vs UTG open",   imageFolder: "BB",  imageBase: "BB-UTG" },
      { path: ["UTG","BB","UTG"],   title: "UTG vs BB 3bet",   imageFolder: "UTG", imageBase: "UTG-BB_3B" },

      { path: ["MP"],               title: "MP RFI",           imageFolder: "MP",  imageBase: "MP_RFI" },
      { path: ["MP","BB"],          title: "BB vs MP open",    imageFolder: "BB",  imageBase: "BB-MP" },
      { path: ["MP","BB","MP"],     title: "MP vs BB 3bet",    imageFolder: "MP",  imageBase: "MP-BB_3B" },

      { path: ["CO"],               title: "CO RFI",           imageFolder: "CO",  imageBase: "CO_RFI" },
      { path: ["CO","BTN"],         title: "BTN vs CO open",   imageFolder: "BTN", imageBase: "BTN-CO" },
      { path: ["CO","BB"],          title: "BB vs CO open",    imageFolder: "BB",  imageBase: "BB-CO" },
      { path: ["CO","BTN","CO"],    title: "CO vs BTN 3bet",   imageFolder: "CO",  imageBase: "CO-BTN_3B" },

      { path: ["BTN"],              title: "BTN RFI",          imageFolder: "BTN", imageBase: "BTN_RFI" },
      { path: ["BTN","SB"],         title: "SB vs BTN open",   imageFolder: "SB",  imageBase: "SB-BTN" },
      { path: ["BTN","BB"],         title: "BB vs BTN open",   imageFolder: "BB",  imageBase: "BB-BTN" },
      { path: ["BTN","SB","BTN"],   title: "BTN vs SB 3bet",   imageFolder: "BTN", imageBase: "BTN-SB_3B" },
      { path: ["BTN","BB","BTN"],   title: "BTN vs BB 3bet",   imageFolder: "BTN", imageBase: "BTN-BB_3B" },

      { path: ["SB"],               title: "SB RFI",           imageFolder: "SB",  imageBase: "SB_RFI" },
      { path: ["SB","BB"],          title: "BB vs SB open",    imageFolder: "BB",  imageBase: "BB-SB" },
      { path: ["SB","BB","SB"],     title: "SB vs BB 3bet",    imageFolder: "SB",  imageBase: "SB-BB_3B" },

      // ── Cold 4bet (C4B) ────────────────────────────────────────
      // UTG opens, MP 3bets → C4B
      { path: ["UTG","MP","CO"],  title: "CO C4B vs MP-UTG",  imageFolder: "CO",  imageBase: "CO_C4B-MP_3B-UTG" },
      { path: ["UTG","MP","BTN"], title: "BTN C4B vs MP-UTG", imageFolder: "BTN", imageBase: "BTN_C4B-MP_3B-UTG" },
      { path: ["UTG","MP","SB"],  title: "SB C4B vs MP-UTG",  imageFolder: "SB",  imageBase: "SB_C4B-MP_3B-UTG" },
      { path: ["UTG","MP","BB"],  title: "BB C4B vs MP-UTG",  imageFolder: "BB",  imageBase: "BB_C4B-MP_3B-UTG" },

      // UTG opens, CO 3bets → C4B
      { path: ["UTG","CO","BTN"], title: "BTN C4B vs CO-UTG", imageFolder: "BTN", imageBase: "BTN_C4B-CO_3B-UTG" },
      { path: ["UTG","CO","SB"],  title: "SB C4B vs CO-UTG",  imageFolder: "SB",  imageBase: "SB_C4B-CO_3B-UTG" },
      { path: ["UTG","CO","BB"],  title: "BB C4B vs CO-UTG",  imageFolder: "BB",  imageBase: "BB_C4B-CO_3B-UTG" },

      // UTG opens, BTN 3bets → C4B
      { path: ["UTG","BTN","SB"], title: "SB C4B vs BTN-UTG", imageFolder: "SB",  imageBase: "SB_C4B-BTN_3B-UTG" },
      { path: ["UTG","BTN","BB"], title: "BB C4B vs BTN-UTG", imageFolder: "BB",  imageBase: "BB_C4B-BTN_3B-UTG" },

      // UTG opens, SB 3bets → C4B
      { path: ["UTG","SB","BB"],  title: "BB C4B vs SB-UTG",  imageFolder: "BB",  imageBase: "BB_C4B-SB_3B-UTG" },

      // MP opens, CO 3bets → C4B
      { path: ["MP","CO","BTN"],  title: "BTN C4B vs CO-MP",  imageFolder: "BTN", imageBase: "BTN_C4B-CO_3B-MP" },
      { path: ["MP","CO","SB"],   title: "SB C4B vs CO-MP",   imageFolder: "SB",  imageBase: "SB_C4B-CO_3B-MP" },
      { path: ["MP","CO","BB"],   title: "BB C4B vs CO-MP",   imageFolder: "BB",  imageBase: "BB_C4B-CO_3B-MP" },

      // MP opens, BTN 3bets → C4B
      { path: ["MP","BTN","SB"],  title: "SB C4B vs BTN-MP",  imageFolder: "SB",  imageBase: "SB_C4B-BTN_3B-MP" },
      { path: ["MP","BTN","BB"],  title: "BB C4B vs BTN-MP",  imageFolder: "BB",  imageBase: "BB_C4B-BTN_3B-MP" },

      // MP opens, SB 3bets → C4B
      { path: ["MP","SB","BB"],   title: "BB C4B vs SB-MP",   imageFolder: "BB",  imageBase: "BB_C4B-SB_3B-MP" },

      // CO opens, BTN 3bets → C4B
      { path: ["CO","BTN","SB"],  title: "SB C4B vs BTN-CO",  imageFolder: "SB",  imageBase: "SB_C4B-BTN_3B-CO" },
      { path: ["CO","BTN","BB"],  title: "BB C4B vs BTN-CO",  imageFolder: "BB",  imageBase: "BB_C4B-BTN_3B-CO" },

      // CO opens, SB 3bets → C4B
      { path: ["CO","SB","BB"],   title: "BB C4B vs SB-CO",   imageFolder: "BB",  imageBase: "BB_C4B-SB_3B-CO" },

      // BTN opens → C4B
      { path: ["BTN","SB","BB"],  title: "BB C4B vs SB-BTN",  imageFolder: "BB",  imageBase: "BB_C4B-SB_3B-BTN" },

      // ── Squeeze (coldcall → squeeze) ───────────────────────────
      { path: ["UTG","BTN_CC","SB"],  title: "SB Squeeze vs BTN CC-UTG",  imageFolder: "SB",  imageBase: "SB_Squeeze-BTN-UTG" },
      { path: ["UTG","BTN_CC","BB"],  title: "BB Squeeze vs BTN CC-UTG",  imageFolder: "BB",  imageBase: "BB_Squeeze-BTN-UTG" },
      { path: ["MP", "BTN_CC","SB"],  title: "SB Squeeze vs BTN CC-MP",   imageFolder: "SB",  imageBase: "SB_Squeeze-BTN-MP"  },
      { path: ["MP", "BTN_CC","BB"],  title: "BB Squeeze vs BTN CC-MP",   imageFolder: "BB",  imageBase: "BB_Squeeze-BTN-MP"  },
      { path: ["CO", "BTN_CC","SB"],  title: "SB Squeeze vs BTN CC-CO",   imageFolder: "SB",  imageBase: "SB_Squeeze-BTN-CO"  },
      { path: ["CO", "BTN_CC","BB"],  title: "BB Squeeze vs BTN CC-CO",   imageFolder: "BB",  imageBase: "BB_Squeeze-BTN-CO"  },
      { path: ["UTG","SB_CC", "BB"],  title: "BB Squeeze vs SB CC-UTG",   imageFolder: "BB",  imageBase: "BB_Squeeze-SB-UTG"  },
      { path: ["MP", "SB_CC", "BB"],  title: "BB Squeeze vs SB CC-MP",    imageFolder: "BB",  imageBase: "BB_Squeeze-SB-MP"   },
      { path: ["CO", "SB_CC", "BB"],  title: "BB Squeeze vs SB CC-CO",    imageFolder: "BB",  imageBase: "BB_Squeeze-SB-CO"   },
      { path: ["BTN","SB_CC", "BB"],  title: "BB Squeeze vs SB CC-BTN",   imageFolder: "BB",  imageBase: "BB_Squeeze-SB-BTN"  },

      // ── Cold 5bet / 5bet responses (C5B) ───────────────────────
      { path: ["UTG","MP","BTN","UTG"], title: "UTG 5B vs BTN C4B vs MP-UTG", imageFolder: "UTG", imageBase: "UTG_5B-BTN_C4B-MP_3B" },
      { path: ["UTG","MP","BTN","MP"],  title: "MP 5B vs BTN C4B vs UTG-MP",  imageFolder: "MP",  imageBase: "MP_5B-BTN_C4B-MP_3B-UTG" },
      { path: ["UTG","MP","BTN","CO"],  title: "CO C5B vs BTN C4B vs MP-UTG", imageFolder: "CO",  imageBase: "CO_C5B-BTN_C4B-MP_3B-UTG" },
      { path: ["UTG","MP","BTN","SB"],  title: "SB C5B vs BTN C4B vs MP-UTG", imageFolder: "SB",  imageBase: "SB_C5B-BTN_C4B-MP_3B-UTG" },
      { path: ["UTG","MP","BTN","BB"],  title: "BB C5B vs BTN C4B vs MP-UTG", imageFolder: "BB",  imageBase: "BB_C5B-BTN_C4B-MP_3B-UTG" },
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  //  HU Raked
  //
  //  Folder: images/HU Raked/
  //  Position names: BTN (dealer/SB), BB
  //
  //  Image naming uses BTN (not BTN_SB):
  //    BTN_RFI.png, BTN-BB_3B.png, BB-BTN.png, etc.
  //
  //  Strategy overview: images/HU Raked/strategy.png
  // ═══════════════════════════════════════════════════════════════
  {
    id:          "hu_raked",
    displayName: "HU Raked",
    format:      "headsUp",
    imageFolder: "HU Raked",

    defaultOverviews: {
      BB: { label: "BB vs RFI", imageFolder: "BB", imageBase: "BB-BTN" },
    },

    // ── Overview charts ────────────────────────────────────────────
    // Labels preserved as originally set. Do not change these.
    overviews: [
      {
        position:    "BTN",
        label:       "vs 3B",
        imageFolder: "BTN",
        imageBase:   "BTN-BB_3B"
      },
      {
        position:    "BTN",
        label:       "vs 5B",
        imageFolder: "BTN",
        imageBase:   "BTN-BB_5B"
      },
      {
        position:    "BB",
        label:       "BB vs RFI",
        imageFolder: "BB",
        imageBase:   "BB-BTN"
      },
      {
        position:    "BB",
        label:       "BB vs 4B",
        imageFolder: "BB",
        imageBase:   "BB-BTN_4B"
      },
    ],

    nodes: [
      { path: ["BTN"],                     title: "BTN RFI",          imageFolder: "BTN", imageBase: "BTN_RFI" },
      { path: ["BTN","BB"],                title: "BB vs BTN open",   imageFolder: "BB",  imageBase: "BB-BTN" },
      { path: ["BTN","BB","BTN"],          title: "BTN vs BB 3bet",   imageFolder: "BTN", imageBase: "BTN-BB_3B" },
      { path: ["BTN","BB","BTN","BB"],     title: "BB vs BTN 4bet",   imageFolder: "BB",  imageBase: "BB-BTN_4B" },
      { path: ["BTN","BB","BTN","BB","BTN"], title: "BTN vs BB 5bet", imageFolder: "BTN", imageBase: "BTN-BB_5B" },
    ]
  }

];
