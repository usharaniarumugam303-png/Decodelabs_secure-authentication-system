# Secure Authentication System

A secure authentication system built with Node.js, Express.js, MongoDB, and JWT (JSON Web Tokens). This project provides user registration, login, and protected route access using authentication middleware.

## Features

- User Registration
- User Login
- JWT Token Generation
- Protected Routes
- Authentication Middleware
- MongoDB Database Integration
- Environment Variable Configuration
- REST API Architecture

## Project Structure

```
├── authController.js      # Authentication logic
├── authMiddleware.js      # JWT verification middleware
├── authRoutes.js          # Authentication routes
├── db.js                  # Database connection
├── server.js              # Application entry point
├── .env                   # Environment variables
└── README.md
```

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcrypt.js
- dotenv

## Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/secure-authentication-system.git
```

2. Navigate to the project directory

```bash
cd secure-authentication-system
```

3. Install dependencies

```bash
npm install
```

4. Create a `.env` file

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

5. Start the server

```bash
npm start
```

or

```bash
node server.js
```

## API Endpoints

### Register User

```http
POST /api/auth/register
```

Request Body:

```json
{
  "username": "john",
  "email": "john@example.com",
  "password": "password123"
}
```

### Login User

```http
POST /api/auth/login
```

Request Body:

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

Response:

```json
{
  "token": "jwt_token_here"
}
```

### Protected Route

```http
GET /api/auth/profile
```

Headers:

```http
Authorization: Bearer <token>
```

## Authentication Flow

1. User registers an account.
2. Password is securely hashed before storage.
3. User logs in with valid credentials.
4. Server generates a JWT token.
5. Client sends the token in request headers.
6. Middleware verifies the token before granting access.

## Security Features

- Password Hashing using bcrypt
- JWT Authentication
- Environment Variable Protection
- Route Authorization Middleware
- Secure API Design

## Future Enhancements

- Refresh Tokens
- Password Reset
- Email Verification
- Role-Based Access Control (RBAC)
- OAuth Integration



## License

This project is licensed under the MIT License.
