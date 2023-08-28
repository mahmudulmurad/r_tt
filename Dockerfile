# Use an official Node.js image as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json /app

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React app
RUN npm run build

# Fetching the latest nginx image
# FROM nginx

# Copying built assets from builder
# COPY --from=builder /app/build /usr/share/nginx/html

# Copying our nginx.conf
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port that the app will run on
EXPOSE 3000

# Define the command to run your app when the container starts
CMD ["npm", "start"]
