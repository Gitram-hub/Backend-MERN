# FoodApp

> A simple Node.js + Express backend for a food ordering app.

## Project structure

- `server.js` - app entrypoint
- `config/` - configuration (database connection)
- `controllers/` - route handlers
- `models/` - Mongoose models
- `routes/` - Express route definitions
- `middlewares/` - authentication and authorization

## Prerequisites

- Node.js 16+ and npm
- MongoDB (local or Atlas)

## Install

```bash
npm install
```

## Environment

Create a `.env` file with the following values (example):

```
PORT=3000
MONGO_URI=mongodb://localhost:27017/foodapp
JWT_SECRET=your_jwt_secret
```

## Run

Start the server:

```bash
node server.js
# or with nodemon
npx nodemon server.js
```

Server will listen on `http://localhost:3000` (or the `PORT` you set).

## API Routes

Key route files are in the `routes/` folder. Main endpoints include:

- `POST /api/auth/register` — register user (see `routes/authRoutes.js`)
- `POST /api/auth/login` — login (see `routes/authRoutes.js`)
- `GET /api/users` — user endpoints (see `routes/userRoutes.js`)
- `GET /api/categories` — category endpoints (see `routes/catgeoryRoutes.js`)
- `GET /api/foods` — food endpoints (see `routes/foodRoutes.js`)
- `GET /api/restaurants` — restaurant endpoints (see `routes/resturantRoutes.js`)

Explore the `routes/` folder for full details.

## Development notes

- Controllers are in `controllers/` and use models from `models/`.
- Middlewares for auth and admin checks are in `middlewares/`.

## Quick test

Use `curl` or Postman to test endpoints. Example:

```bash
curl http://localhost:3000/api/foods
```

---
If you want, I can expand this README with examples for each endpoint or add a Postman collection.
