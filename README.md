# 99×99 Multiplication Practice

<div align="center">

[![Live Demo](https://img.shields.io/badge/demo-live-success?style=flat-square)](https://js4484821266.github.io/99x99/)
[![CI Tests](https://img.shields.io/github/actions/workflow/status/js4484821266/99x99/ci.yml?style=flat-square&label=tests)](https://github.com/js4484821266/99x99/actions)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow?style=flat-square)](https://github.com/js4484821266/99x99)

**Mental math trainer built with vanilla JavaScript, comprehensive testing, and modern CI/CD.**

[Try Live Demo](https://js4484821266.github.io/99x99/)

</div>

---

## Overview

A web-based multiplication practice application for numbers from 11 to 99. This project demonstrates professional development practices including test-driven development, continuous integration, and clean code principles.

Built iteratively with AI pair programming, this project showcases how clear requirements and comprehensive testing can produce production-ready code.

### What This Demonstrates

- **Test-Driven Development** — 27 comprehensive Jest unit tests
- **CI/CD Pipeline** — Automated testing with GitHub Actions
- **Code Quality** — ESLint and HTML validation
- **Clean Architecture** — Vanilla JavaScript without framework dependencies
- **Production Deployment** — Live on GitHub Pages
- **AI-Assisted Development** — Iterative feature development with prompt engineering

## Features

- Random multiplication problems (11-99 range)
- Timer to track problem-solving speed
- Pause/Resume functionality
- Visual feedback for correct and incorrect answers
- Auto-advance after 60 seconds

## Tech Stack

```
JavaScript (ES6+)    • Pure vanilla JavaScript
Jest                 • Unit testing framework
ESLint               • Code quality enforcement
GitHub Actions       • Continuous integration
GitHub Pages         • Deployment platform
```

## Development Process

This application was built through iterative AI-assisted development. The prompts used demonstrate how to effectively work with AI coding assistants:

### Prompt 1: Core Features
```
Fancify the webpage and add these features:
- add timer
- display the problem and start the timer the instant the "commence" button is clicked
- When the "pause" button is clicked, hide the problem
- When the "commence" button is clicked again, show a new problem, no matter whether paused or not
- When the answer is submitted, tell if the response matches the answer. if not, strike out the response and show the answer by that.
```

### Prompt 2: Refinement
```
add features:

automatically show a new problem when not solved for over a minute
not display minutes but only seconds to milliseconds
when solved, reset the timer
when paused, hide the timer
```

### Prompt 3: Quality Assurance
```
pass it through all possible software tests
```

These prompts showcase:
- **Clear requirements** — Specific, actionable feature requests
- **Iterative refinement** — Building on existing functionality
- **Quality focus** — Explicit testing requirements

## Testing

This project includes comprehensive software testing:

| Type | Tool | Coverage |
|------|------|----------|
| Unit Tests | Jest | 27 tests covering all functions |
| Code Quality | ESLint | Style and quality enforcement |
| HTML Validation | html-validate | HTML5 standards compliance |
| CI/CD | GitHub Actions | Multi-version Node.js (18.x, 20.x) |

### Running Tests

```bash
# Install dependencies
npm install

# Run all tests
npm test

# Run individual test suites
npm run test:jest    # JavaScript unit tests
npm run test:lint    # ESLint code quality checks
npm run test:html    # HTML validation
```

## Development

```bash
# Clone the repository
git clone https://github.com/js4484821266/99x99.git

# Open in browser
open index.html
```

No build process or runtime dependencies required.

## Design Decisions

**Why vanilla JavaScript?**  
Demonstrates deep understanding of core JavaScript without framework abstractions.

**Why comprehensive testing?**  
Testing enables confident deployment and refactoring. Every function includes unit tests with edge case coverage.

**Why GitHub Actions?**  
Automated quality checks on every commit ensure consistent code standards.

**Why document the prompts?**  
Shows effective AI collaboration practices and makes the development process transparent and reproducible.

## Project Metrics

- 27 Jest unit tests
- 0 external runtime dependencies
- 100% function coverage
- Multi-version Node.js testing (18.x, 20.x)
- 3 iterative development prompts

## License

ISC
