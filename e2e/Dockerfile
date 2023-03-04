# Get the base image of Node version 18
FROM node:18

# Get the latest version of Playwright
FROM mcr.microsoft.com/playwright:focal
 
# Set the work directory for the application
WORKDIR /app
 
# Set the environment path to node_modules/.bin
ENV PATH /app/node_modules/.bin:$PATH
ENV PLAYWRIGHT_FOLDERNAME=checkout

# COPY the needed files to the app folder in Docker image
COPY package.json /app/
COPY e2e/ /app/e2e/
COPY tsconfig.json /app/
COPY src/ /app/

# Get the needed libraries to run Playwright
RUN apt-get update && apt-get -y install libnss3 libatk-bridge2.0-0 libdrm-dev libxkbcommon-dev libgbm-dev libasound-dev libatspi2.0-0 libxshmfence-dev

# Install the dependencies in Node environment
RUN npm install
CMD npx playwright test ${PLAYWRIGHT_FOLDERNAME} --reporter=list
#RUN npm run dev
