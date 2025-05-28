#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

echo "Installing project dependencies..."
npm install

echo "Starting Next.js development server on port 9000..."
# The '-p 9000' is specified in the 'dev' script in package.json
npm run dev