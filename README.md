# Recipe API

## Overview

Welcome to the Recipe API! This project was developed by our team as a Simple API that allows users to manage recipes efficiently. The API is built using Node.js and Express and is connected to a MongoDB database, providing full CRUD (Create, Read, Update, Delete) functionality. This API serves as a foundation for managing recipe data, making it an ideal solution for applications that need to store, retrieve, and manipulate culinary information.

## Features

- **CRUD Operations**: Create, read, update, and delete recipes effortlessly.
- **MongoDB Integration**: All data is stored and managed in MongoDB, ensuring scalability and flexibility.
- **JSON Responses**: The API returns structured JSON data, making it easy to integrate with front-end applications.
- **Error Handling**: Includes comprehensive error handling to manage invalid inputs and server errors.
- **Validation**: Input validation ensures that only valid data is stored in the database.
- **RESTful Design**: Follows REST principles for easy integration and scalability.

## Endpoints

Here are some of the key endpoints available:

- `GET /recipes`: Retrieve a list of all recipes.
- `POST /recipes`: Add a new recipe to the database.
- `GET /recipes/:id`: Retrieve details of a specific recipe by its ID.
- `PUT /recipes/:id`: Update an existing recipe by its ID.
- `DELETE /recipes/:id`: Delete a recipe by its ID.

## Technologies Used

- **Node.js**: For building the server-side logic.
- **Express.js**: For managing routing and middleware.
- **MongoDB**: For database management.
- **Mongoose**: As an Object Data Modeling (ODM) library for MongoDB.
- **Postman**: For API testing and documentation.
- **Git**: For version control and collaboration.

## Installation

To get started with this project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/recipe-api.git
Install the dependencies:
npm install
npm install express
npm i mongoose -d

Contributors
Erick Pinedo - Lead Developer
Carlos Barragan - Backend Developer
Nicolas Herrera - Database Administrator
Edwin Julian - API Tester


This project is licensed under the BIT License
