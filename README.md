# 99×99 Multiplication Practice

<div align="center">

[![Live Demo](https://img.shields.io/badge/demo-live-success?style=flat-square)](https://js4484821266.github.io/99x99/)
[![CI](https://img.shields.io/github/actions/workflow/status/js4484821266/99x99/ci.yml?style=flat-square&label=tests)](https://github.com/js4484821266/99x99/actions)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow?style=flat-square)](https://github.com/js4484821266/99x99)

Mental math trainer built with vanilla JavaScript, comprehensive testing, and CI/CD.

**[Try it live →](https://js4484821266.github.io/99x99/)**

</div>

---

## Overview

A web-based multiplication practice application for numbers 11–99. Demonstrates professional development practices: test-driven development, continuous integration, and clean code principles.

## Features

- Random multiplication problems (11-99 range)
- Timer tracking (seconds to milliseconds)
- Pause/Resume functionality  
- Visual feedback (correct/incorrect answers)
- Auto-advance after 60 seconds

## Tech Stack

```
JavaScript (ES6+)    Pure vanilla JavaScript
Jest                 Unit testing framework
ESLint               Code quality enforcement
GitHub Actions       Continuous integration
GitHub Pages         Deployment
```

## Quick Start

```bash
# Run locally
open index.html

# No build process or dependencies required
```

## Testing

| Type | Tool | Coverage |
|------|------|----------|
| Unit Tests | Jest | 27 tests, 100% functions |
| Code Quality | ESLint | Style enforcement |
| HTML | html-validate | HTML5 compliance |
| CI/CD | GitHub Actions | Node 18.x, 20.x |

```bash
npm install
npm test              # Run all tests
npm run test:jest     # Unit tests only
npm run test:lint     # Linting only
npm run test:html     # HTML validation
```

## Development

```bash
git clone https://github.com/js4484821266/99x99.git
cd 99x99
open index.html
```

No build step needed.

## Technical Approach

**Vanilla JavaScript** — Core language mastery without framework abstractions.

**Test coverage** — Every function tested with edge cases. Enables confident refactoring.

**Automated quality** — GitHub Actions validates every commit. Multi-version Node testing.

## Stats

- 27 Jest unit tests
- 0 runtime dependencies
- 100% function coverage  
- Multi-version CI (Node 18.x, 20.x)

## License

ISC