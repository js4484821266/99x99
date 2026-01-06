# 99×99 Multiplication Practice

A web-based multiplication practice application for numbers from 11 to 99.

## Features

- Random multiplication problems (11-99 range)
- Timer to track problem-solving speed
- Auto-advance after 60 seconds
- Pause/Resume functionality
- Visual feedback for correct and incorrect answers

## Testing

This project includes comprehensive software testing:

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

### Test Coverage

The project includes:

- **Unit Tests**: 27 Jest tests covering all JavaScript functions
- **ESLint**: Code quality and style checks
- **HTML Validation**: HTML5 standards compliance

### Continuous Integration

GitHub Actions automatically runs all tests on every push and pull request.

## Development

To run the application locally, simply open `index.html` in a web browser.

## License

ISC
