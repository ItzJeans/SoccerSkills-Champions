# ⚽ Soccer Skills Champions

A browser-based soccer game hosted using **GitHub and jsDelivr**.

## 🎮 About

Soccer Skills Champions is a soccer game featuring canvas-based gameplay, team and league data, graphics, and sound.

This repository contains the game files and supporting assets needed to run the game through a web browser.

## 🚀 Hosting

This project uses:

- **GitHub** to store the game files.
- **jsDelivr** to deliver the files through a CDN.
- **HTML, CSS, and JavaScript** for the browser experience.

The project uses jsDelivr instead of GitHub Pages or npm.

### CDN Base URL

```text
https://cdn.jsdelivr.net/gh/ItzJeans/SoccerSkills-Champions@cdn-fix-2/
```

Individual files can be accessed by adding their path to the end of the URL.

For example:

```text
https://cdn.jsdelivr.net/gh/ItzJeans/SoccerSkills-Champions@cdn-fix-2/soccerskills.js
```

## 📁 Project Structure

| File / Folder | Description |
|---|---|
| `index.html` | Original HTML game entry page |
| `soccerskills.js` | Main game JavaScript |
| `data/` | Game graphics, interface assets, audio, and other resources |
| `cleague/` | League data, teams, and logos |
| `fonts/` | Font resources |
| `launcher-ui/` | Launcher interface assets and controls |

## 🕹️ Controls

**Mouse**
- Click and hold to aim.
- Drag to control the shot.
- Release to shoot.

**Touchscreen**
- Touch and drag to aim.
- Release to shoot.

## 🔧 Technical Information

- Custom JavaScript Canvas 2D game.
- Browser-based rendering.
- Uses browser storage for game progress.
- Uses Web Audio for sound.
- Supports mouse and touchscreen input.

## 📌 Important Notes

- Keep the original folder structure when uploading or updating game files.
- File names and capitalization must remain consistent.
- Make sure all game assets are committed to the same branch used by the launcher.
- jsDelivr may cache recently updated files, so changes might not appear immediately.
- Some browsers may display non-fatal warnings about legacy synchronous XMLHttpRequests.

## Credits

The original game credits Radical Play LLC.

This repository is an independent hosting and compatibility project. It does not claim ownership of the original game or its assets.
