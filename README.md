# Shinnigammi-vocab
Single-file vocabulary page (GitHub Pages serves index.html).
Source of truth: src/ (app.js readable bundle, words.json data, style.css, tpl_*.txt). Build: `python3 tools/build.py vNN` writes index.html. Smoke test: `node tools/smoke.js <url>` (puppeteer-core). inbox/ and words-inbox.json are data files read/written at runtime.
