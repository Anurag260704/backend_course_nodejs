# Express.js & Mongoose MVC Project

This is a simple backend project built with Express.js and Mongoose, following the Model-View-Controller (MVC) architectural pattern. It provides a basic structure for creating a RESTful API with user management functionalities.

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/en/) (which includes npm)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

## Running the Application

1.  **Start your MongoDB server.**

2.  **Run the application:**

    ```bash
    npm start
    ```

    The server will start on `http://localhost:3000`.

## How to Run This Project

1.  **Install dependencies:**
    ```bash
    npm i express mongoose
    ```
2.  **Run the project:**
    ```bash
    node server.js
    ```

## API Endpoints

The following API endpoints are available:

- `GET /`: A simple message to confirm the server is running.
- `GET /api/users`: Get all users.
- `GET /api/users/:id`: Get a single user by their ID.
- `POST /api/users`: Create a new user.
- `PUT /api/users/:id`: Update a user's information.
- `DELETE /api/users/:id`: Delete a user.
