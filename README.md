# 99×99 — Mental Math Practice (11–99)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?logo=github)](https://js4484821266.github.io/99x99/)
[![CI Tests](https://github.com/js4484821266/99x99/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/js4484821266/99x99/actions/workflows/ci.yml)

A tiny browser-based multiplication drill app for practicing **two-digit × two-digit (11–99)** mental math.

> No frameworks. No build step. Just open and practice.

---

## Demo

- **GitHub Pages:** https://js4484821266.github.io/99x99/
- **Repo:** https://github.com/js4484821266/99x99

---

## What it does

- Generates random multiplication problems in the **11–99** range
- **Commence / Pause** flow
  - Starts a timer when you begin
  - Lets you pause and hide the problem (focus / anti-peek mode)
  - Can generate a new problem when you commence again
- Answer checking with clear feedback
  - If incorrect, shows the correct answer and visually marks the wrong attempt
- “Stuck?” behavior
  - Can automatically move on to a new problem after a time limit
  - Resets timing on solve (practice loop stays snappy)

*(Exact UI/behavior may evolve—see the app for the current behavior on `main`.)*

---

## Run locally

### Option A) The simple way
1. Clone:
   ```bash
   git clone https://github.com/js4484821266/99x99.git
   cd 99x99
   ```

2. Open `index.html` in your browser.

### Option B) Recommended (local server)

Some browsers restrict certain behaviors when opening files directly. A tiny local server avoids that:

```bash
python -m http.server 8000
```

Then open:

* [http://localhost:8000](http://localhost:8000)

---

## Testing & quality checks

This repo includes a lightweight “quality gate” setup aimed at making even a small toy project behave like a real project:

* **Unit tests** (Jest)
* **Linting** (ESLint)
* **HTML validation**
* **CI on GitHub Actions** (runs checks on pushes & PRs)

> The goal here isn’t pretending a tiny web toy is a spaceship—
> It’s demonstrating habits: repeatable checks, automation, and maintainability.

---

## Project structure

```text
.
├─ index.html
├─ js.js
├─ js.test.js
├─ jest.config.js
├─ eslint.config.js
├─ .htmlvalidaterc.json
└─ .github/
   └─ workflows/
      └─ ci.yml
```

---

## AI-assisted development (disclosure)

Parts of this repository were created and iterated with the help of **GitHub Copilot**, using explicit prompts, then reviewed/adjusted by the maintainer.

This is intentional: the point is to show how I structure requirements, iterate quickly, and then put guardrails around the result (tests/CI/lint).

---

## Contributing

Issues and PRs are welcome:

* Bug reports: include browser + steps to reproduce
* Feature suggestions: describe the expected behavior precisely (edge cases matter)

---

## License

ISC
