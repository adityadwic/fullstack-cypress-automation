# Cypress UI Automation Framework

![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

## Overview
This repository contains a robust UI Automation Framework built with **Cypress** and **TypeScript**. It is designed to test the E-Commerce platform [Automation Exercise](http://automationexercise.com) and demonstrates a professional-grade "Senior QA" architecture.

### Key Features
- **Page Object Model (POM)**: Modular and reusable page classes in `cypress/pages`.
- **Custom Commands**: Simplified test steps (e.g., `cy.login()`) in `cypress/support/commands.ts`.
- **Cross-Browser Support**: Configured for Chrome, Firefox, and Edge.
- **Reporting**: Integrated **Mochawesome HTML Reports** with embedded screenshots.
- **CI/CD**: Automated testing pipeline via **GitHub Actions**.
- **Code Quality**: Enforced linting and formatting via **ESLint**, **Prettier**, and **Husky**.
- **Data Management**: Use of fixtures for clean test data separation.

## Project Structure
```
├── .github/              # GitHub Actions Workflow
├── .husky/               # Git Hooks (Pre-commit)
├── cypress/
│   ├── e2e/              # Test Specs
│   ├── fixtures/         # Test Data (JSON)
│   ├── pages/            # Page Objects (POM)
│   ├── support/          # Custom Commands & Config
├── cypress.config.ts     # Cypress Configuration
└── tsconfig.json         # TypeScript Config
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/fullstack-ui-automation.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Tests

**Run all tests in headless mode:**
```bash
npx cypress run
```

**Open Cypress Test Runner (UI):**
```bash
npx cypress open
```

**Run specific spec file:**
```bash
npx cypress run --spec "cypress/e2e/login.cy.ts"
```

## Reports
After execution, HTML reports are generated in the `cypress/reports` directory.
- CI/CD Artifacts: Reports are automatically uploaded to GitHub Actions artifacts.
<img width="1439" height="778" alt="Fullstack Cypress Automation" src="https://github.com/user-attachments/assets/5fe79d7e-fcc3-41f7-a1fb-fd1b291c8e9a" />

## Code Quality
This project uses **Husky** to ensure code quality before every commit.
- **Linting**: `npm run lint`
- **Formatting**: `npm run format`

## Contributing
Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.
