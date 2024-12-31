# Project Title: MERN Stack Backend with TypeScript and OpenAI Integration

This project is a robust backend application built on the classic MERN (MongoDB, Express, React, Node.js) stack utilizing TypeScript for type safety. It integrates with OpenAI's API to generate AI-driven prompts and responses. The application follows a modern architectural approach using controllers, models, and route separation.

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Health Check Route](#health-check-route)
  - [Items Routes](#items-routes)
- [Middleware](#middleware)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Introduction

This backend service provides API endpoints for managing items within an application. It supports operations such as creating, retrieving, and deleting items. The integration with OpenAI allows for advanced prompt generation and response handling, enhancing the functionality of the application.

## Installation

To get started with this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/H-Was1/server
   cd server
   ```

2. **Install dependencies:**
   Ensure you have Node.js and npm installed, then run:
   ```bash
   npm install
   ```

3. **Create a  file:**
   Copy the  file and rename it to . Update it with your MongoDB connection string and OpenAI API key.

4. **Configure Environment Variables:**
   Ensure your  file contains the following:
   ```plaintext
   # MongoDB connection string
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<yourdbname>?retryWrites=true&w=majority

   # OpenAI API key
   OPENAI_API_KEY=<your_openai_api_key_here>

   # Application port (default is 5000)
   PORT=<your_port_here>
   ```

## Usage

To run the application, execute the following command:
```bash
npm run dev
```

You can replace  with  for production mode if you have a build script set up.

## API Endpoints

### Health Check Route
- **GET**
  - **Description**: Checks if the server is running.
  - **Response**: Returns a success message with HTTP status 200.

### Items Routes
- **POST**
  - **Description**: Create a new item.
  - **Request Body**: JSON object representing the item.
  - **Response**: Returns the created item with HTTP status 201.

- **GET**
  - **Description**: Retrieve all items.
  - **Response**: Returns an array of items with HTTP status 200.

- **DELETE**
  - **Description**: Delete an item by ID.
  - **Response**: Returns a success message with HTTP status 204.

## Middleware
This application uses various middleware to enhance functionality and security:

- **Helmet**: Sets various HTTP headers to secure the application.
- **CORS**: Enables Cross-Origin Resource Sharing to allow requests from different origins.
- **Morgan**: Logs HTTP requests and facilitates debugging.
- **Express Router**: Provides a modular way to define routes.
- **Dotenv**: Loads environment variables from the  file.

- **Eslint and Prettier**: for code quality and consistency.

## Configuration

The application listens on port 5000 by default, which can be modified in the  file. Ensure all sensitive configurations are stored in the  file and are not committed to version control for security purposes.

## Deployment
This application is deployed using Railway. For deployment:
- Sign up / Log in to Railway.
- Create a new project and link it to your repository.
- Set the necessary environment variables in the Railway dashboard.
- Deploy the project.

## Contributing
Contributions are welcome! If you would like to contribute, please fork the repository and submit a pull request. You can also open issues to discuss new features or improvements.
