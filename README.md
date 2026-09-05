# Note App With Backend

A full-stack social-style note and post application that lets users upload an image with a caption, save it to MongoDB, and view all posts in a feed. The app is split into a Node.js + Express backend and a React + Vite frontend, making it a clean example of a simple modern web app architecture.

## Overview

This project was built as a practical full-stack app for learning and demonstrating how to:

- create a backend API using Express
- connect a Node.js app to MongoDB with Mongoose
- upload and store images using ImageKit
- build a frontend UI with React and React Router
- communicate between frontend and backend using Axios
- display submitted posts in a live feed

## Features

### User Features
- Upload an image file with a caption
- Create a new post from the frontend form
- Save post data to MongoDB
- Display all posts in a feed view
- View image and caption together on each card
- Navigate between the create-post page and feed page
- Responsive layout for a lightweight social-media-style experience

### Application Features
- REST API for POST creation and GET retrieval
- Image upload handling with `multer`
- Cloud image hosting integration through ImageKit
- CORS enabled for frontend-backend communication
- Environment-based configuration using `.env`
- MongoDB connection managed through a reusable DB function

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer
- dotenv
- CORS
- ImageKit SDK

### Frontend
- React
- Vite
- React Router DOM
- Axios

## Project Structure

```text
Note-App-With-Backend/
├── .env
├── README.md
├── Backend/
│   ├── package.json
│   ├── server.js
│   └── src/
│       ├── app.js
│       ├── Db/
│       │   └── db.js
│       ├── models/
│       │   └── post.model.js
│       └── Service/
│           └── storage.service.js
└── Frontend/
    ├── package.json
    ├── index.html
    ├── vite.config.js
    ├── public/
    └── src/
        ├── App.jsx
        ├── main.jsx
        ├── index.css
        ├── assets/
        └── Pages/
            ├── CreatePost.jsx
            └── Feed.jsx
```

## Backend Functionality

The backend is responsible for:

- connecting to MongoDB
- creating the Express app
- accepting image uploads
- uploading files to ImageKit
- saving the image URL and caption in the database
- returning all saved posts to the frontend

### API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| `POST` | `/create-post` | Upload image and caption to create a post |
| `GET` | `/posts` | Fetch all posts from the database |

### Example Request

```http
POST http://localhost:3000/create-post
Content-Type: multipart/form-data
```

Form fields:
- `image` — uploaded image file
- `caption` — short text description

## Frontend Functionality

The frontend consists of:

- a page to create a new post
- a page to view all posts in a feed
- route-based navigation with React Router
- Axios requests to the backend API

### Routes

| Route | Page | Purpose |
| --- | --- | --- |
| `/create-post` | CreatePost | Submit a new captioned image |
| `/feed` | Feed | Display all uploaded posts |

## Database Model

Each post is stored with:

```js
{
  image: String,
  caption: String
}
```

The `image` field stores the uploaded image URL, while the `caption` stores the description added by the user.

## Environment Variables

Create a `.env` file in the project root with the following values:

```env
MONGO_URI="your_mongodb_connection_string"
IMAGEKIT_PRIVATE_KEY="your_imagekit_private_key"
```

These values are used by the backend to connect to MongoDB and upload images to ImageKit securely.

## Setup Instructions

### 1. Install backend dependencies

```bash
cd Backend
npm install
```

### 2. Install frontend dependencies

```bash
cd Frontend
npm install
```

### 3. Start the backend

```bash
cd Backend
npm start
```

The backend runs on:

```text
http://localhost:3000
```

### 4. Start the frontend

```bash
cd Frontend
npm run dev
```

The frontend runs on the Vite dev server, usually at:

```text
http://localhost:5173
```

## How the Project Works

1. User opens the frontend and navigates to the post creation page.
2. The user selects an image and enters a caption.
3. The frontend sends a `multipart/form-data` request to the backend.
4. The backend uploads the image to ImageKit and gets a hosted URL.
5. MongoDB stores the image URL and caption as a post record.
6. The frontend requests all posts from `/posts` and displays them in the feed.

## Project Goals

This project demonstrates a simple but functional full-stack workflow with:

- user input handling
- media upload
- cloud image hosting
- database persistence
- frontend-backend integration
- deployment-ready project structure for learning and expansion

## Notes

This app is a practical learning project and can be extended with features such as:

- edit and delete post functionality
- user authentication
- comments and likes
- search and filtering
- profile pages
- image compression and validation
- dark mode UI

## License

This project does not currently include a formal license.
