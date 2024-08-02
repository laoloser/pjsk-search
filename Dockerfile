# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Copy the rest of your client application
COPY . .

# Build the app for production
RUN npm run build

# Start the app using a simple static server
# For example, serve: npm install -g serve
# CMD ["serve", "-s", "build", "-l", "3000"]
# This example uses serve, but you can configure your own server
CMD ["npx", "serve", "-s", "build"]
