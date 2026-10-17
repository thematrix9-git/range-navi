# Handoff: RNG for the Range Navigator iPad app

The reference is `iPad RNG.dc.html`. Open it in a browser and try it: tap seats, tap the felt, switch modes. It's a visual reference, not code to ship. Keep the existing layout, seats, buttons and behaviour. Only the RNG and its settings are new.

## 1. The RNG number
- **Place:** dead centre of the felt (the table is empty there).
- **Contents:** **just the number** (1–100). No circle, no "RNG" label.
- **Style:** 38px, weight 600, tabular numbers, `text-shadow: 0 1px 8px rgba(0,0,0,.35)`.
- **Colour by 25% block:**
  - 1–25: red `#ff6b6b`
  - 26–50: orange `#ffa94d`
  - 51–75: white `#f4f6f8`
  - 76–100: green `#4ade80`
- **On change:** a quick 250ms ease, from opacity .6 / scale .94 back to 1, so you can see it rolled.
- **Never repeats** the same number twice in a row.
- **Tapping the number always re-rolls**, in every mode. It must **not** also trigger the felt-tap reset.
- **Timer mode only:** a 44 × 3px bar centred 8px under the number, in the number's colour at .8 opacity, empties until the next roll.

## 2. When it rolls: setting `rng.mode`
- **`action`** (default): a new roll every time a seat is tapped.
- **`felt`**: a new roll any time the felt is tapped. The existing "Reset path on felt tap" behaviour still applies.
- **`timer`**: rolls automatically every `rng.interval` seconds: **1, 2 or 3** (default 2). Restart the countdown after a manual roll.
- **`tap`**: rolls only when the number is tapped.

## 3. Settings must be visible IN the installed iPad app ⚠
- **Requirement:** the RNG settings must be **reachable on the iPad itself**. There's no desktop or dev panel, so don't hide them in code, a config file or a debug menu. If the user can't change them on the installed app, it's wrong.
- **Where:** add them to the existing in-app settings. The top-left toggles (Reset path on felt tap / Show next action / Wide CC / 3B) are the natural spot. Add an **RNG** group there, or behind the **?** / a ⚙ button if that list is getting long.
  - **Show RNG**: on/off toggle. Off hides the number.
  - **Roll on**: segmented control **Seat tap · Felt tap · Timer · Manual**.
  - **Every**: segmented control **1s · 2s · 3s**. Only shown when Timer is selected.
- **Touch targets:** at least 44pt tall (iPad touch rule).
- **Persistence:** save to local storage / UserDefaults so the settings survive closing and reopening the app.
- **Live:** changes take effect immediately.
- **Timer and sleep:** the timer must keep running while the app is open, and pause when the app goes to the background.
