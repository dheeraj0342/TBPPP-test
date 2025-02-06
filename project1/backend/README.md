# User Management Application - Backend

This is the backend part of the User Management application built using Node.js and Express. The application provides RESTful APIs for managing user data, including operations for creating, retrieving, updating, and deleting users.

## Project Structure

```
backend
├── controllers
│   └── userController.js    # Handles user-related operations
├── models
│   └── userModel.js         # Defines the User model and data operations
├── routes
│   └── userRoutes.js        # Sets up API routes for user management
├── services
│   └── fileService.js       # Contains file system operations for user data
├── users.json               # Data storage for user information in JSON format
├── app.js                   # Entry point of the backend application
├── package.json             # Configuration file for npm
└── README.md                # Documentation for the backend part of the project
```

## Features

- **User Management**: Create, read, update, and delete user information.
- **Data Storage**: User data is stored in a JSON file (`users.json`).
- **RESTful API**: Provides a set of endpoints for user operations.

## Getting Started

1. **Install Dependencies**: Run `npm install` in the `backend` directory to install the required packages.
2. **Run the Application**: Use `npm start` to start the backend server.

## API Endpoints

- **POST /api/users**: Create a new user.
- **GET /api/users**: Retrieve all users.
- **GET /api/users/:id**: Retrieve a user by ID.
- **PUT /api/users/:id**: Update a user by ID.
- **PATCH /api/users/:id**: Partially update a user by ID.
- **DELETE /api/users/:id**: Delete a user by ID.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.