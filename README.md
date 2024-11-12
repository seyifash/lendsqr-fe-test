## Admin & User Management System
A Redux Toolkit-based TypeScript application for managing admin and user data, including authentication and local data persistence. This project allows for fetching user/admin data, handling login actions, and managing authentication status with data stored in local storage.

## Table of Contents
Project Overview
Technologies Used
Installation
Running the Project
Project Structure
Features
Code Explanation
Future Enhancements
Contributing
Project Overview
This project is a frontend application built with React, TypeScript, Scss, and Redux Toolkit. It includes:

Fetching Data: Retrieves user and admin data from a mock API.
Authentication: Allows admins to log in, storing authentication state in local storage.
Data Management: Uses Redux for managing user and admin data, making it easy to extend and maintain.
Technologies Used
React: UI Library for building dynamic interfaces.
TypeScript: Ensures type safety throughout the app.
Redux Toolkit: Simplifies state management and enables the creation of async actions.
Axios: For making HTTP requests.
LocalStorage: Persists certain pieces of application state.
Installation

## Clone the repository:

bash
Copy code
git clone https://github.com/your-username/admin-user-management.git
cd admin-user-management
Install dependencies:

bash
Copy code
npm install
Running the Project
To start the application locally:

bash
Copy code
npm start
This will run the app on http://localhost:3000.

## Project Structure
src/adminSlice.tsx - Redux slice managing admin actions, login state, and async admin data fetching.
src/Users/userSlice.tsx - Redux slice handling user data.
src/App.tsx - Root component containing application structure.
src/Users/ - Contains TypeScript interfaces for structured data types (Admin, UserInterface).
Features
Admin and User Data Fetching: Retrieves and stores user/admin data from a mock API, using fetchUsers and fetchAdmins thunks.
Authentication State Management: Stores authentication status (isCorrectPassword) and logged-in user (adminUser) in local storage, persisting login status.
Error Handling: Catches errors in async actions, and displays error messages in the UI.
Data Persistence: Maintains login state even on page refresh, by persisting data in local storage.
Code Explanation
Redux Thunks for Async Actions:

fetchUsers and fetchAdmins: Retrieve data from the mock API and store it in the Redux store.
adminSlice.ts:

Defines AdminsState interface to manage admins, loading, error, authentication status (isCorrectPassword), and current admin user (adminUser).
loginUser reducer updates authentication status and stores isCorrectPassword and adminUser in local storage.
Uses JSON.stringify and JSON.parse to manage objects in local storage.
Local Storage Persistence:

Retrieves initial authentication state and user data from local storage upon app load.
TypeScript Types:

Admin and UserInterface types provide type safety for admin and user data.
Future Enhancements
Logout Functionality: Add a logout action to clear local storage and reset state upon user logout.
Improved Error Messaging: Display error messages in a user-friendly way in the UI.
Pagination for Data: Handle large datasets by implementing pagination for admin/user lists.
Access Control: Add role-based access control to distinguish between admin and regular user actions.
Contributing


## Fork the repository.
Create a new branch (feature/your-feature).
Make your changes and add clear commit messages.
Push to your branch and create a pull request.
Sample Commit History
Initial Commit: Project setup with TypeScript, React, and Redux Toolkit.
second commit : lendsqr-test done

