# Use Cypress included image which has browsers pre-installed
FROM cypress/included:13.6.4

# Set working directory
WORKDIR /e2e

# Copy specific files first to leverage caching
COPY package.json package-lock.json ./
COPY cypress.config.ts tsconfig.json ./

# Install dependencies
RUN npm ci

# Copy project files
COPY cypress ./cypress
COPY .eslint* .prettier* .husky ./

# Default command to run tests
ENTRYPOINT ["npx", "cypress", "run"]
