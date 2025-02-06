# User Management Application

This project is a full-stack User Management application built using Node.js for the backend and React.js for the frontend. It allows users to register, view, update, and delete user details, utilizing file system operations for data storage.

## Project Structure

```
user-management-app
├── backend
│   ├── controllers
│   │   └── userController.js       # Handles user-related operations
│   ├── models
│   │   └── userModel.js             # Defines the User model and data operations
│   ├── routes
│   │   └── userRoutes.js            # Sets up API routes for user management
│   ├── services
│   │   └── fileService.js           # Contains file system operations for user data
│   ├── users.json                   # Data storage for user information in JSON format
│   ├── app.js                        # Entry point of the backend application
│   ├── package.json                  # Configuration file for npm
│   └── README.md                     # Documentation for the backend
├── frontend
│   ├── public
│   │   └── index.html                # Main HTML file for the React application
│   ├── src
│   │   ├── components
│   │   │   ├── UserForm.js           # Component for user registration form
│   │   │   ├── UserItem.js           # Component to display individual user details
│   │   │   └── UserList.js           # Component to display the list of users
│   │   ├── App.css                   # Styles for the main application
│   │   ├── App.jsx                   # Main component managing state and rendering
│   │   ├── index.css                 # Global styles for the application
│   │   ├── main.jsx                  # Entry point of the React application
│   ├── .gitignore                    # Specifies files to be ignored by Git
│   ├── eslint.config.js              # ESLint configuration for linting
│   ├── package.json                  # Configuration file for npm
│   ├── README.md                     # Documentation for the frontend
│   └── vite.config.js                # Configuration file for Vite
```

## Features

- **User Registration**: Users can register by filling out a form with their name, email, and password.
- **User List**: Displays a list of registered users with options to update or delete their details.
- **Client-side Validation**: Ensures that user input is validated before submission.
- **RESTful API**: The backend provides a RESTful API for CRUD operations on user data.

## Getting Started

1. **Clone the Repository**: 
   ```
   git clone <repository-url>
   cd user-management-app
   ```

2. **Backend Setup**:
   - Navigate to the `backend` directory:
     ```
     cd backend
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Run the backend server:
     ```
     npm start
     ```

3. **Frontend Setup**:
   - Open a new terminal and navigate to the `frontend` directory:
     ```
     cd frontend
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Run the frontend application:
     ```
     npm start
     ```

## API Integration

The frontend communicates with the backend RESTful APIs to perform CRUD operations on user data. Ensure that the backend server is running to interact with the frontend.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.