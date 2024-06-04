# Movie Library Web Application

## Overview

This is a movie library web application with user authentication, movie search using the OMDB API, and movie list management with public/private visibility.

## Features

1. User Authentication (Sign In / Sign Up)
2. Movie Search and Details
3. Create and Manage Movie Lists (Public/Private)

## Technology Stack

- **Frontend:** React.js, Material-UI, Axios, React Router
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT
- **APIs:** OMDB API

## Prerequisites

- Node.js and npm installed
- MongoDB installed locally or a MongoDB Atlas account
- OMDB API key (register at [OMDB API](http://www.omdbapi.com/))


### Backend Setup:
#### Install Backend Dependencies:
#### -- cd backend
#### -- npm install

### Set Up Environment Variables:
#### Create a .env file in the backend directory
#### -- MONGODB_URI=<your_mongodb_connection_string>
#### -- JWT_SECRET=<your-jwt-secret>
#### -- OMDB_API_KEY=<your-omdb-api-key>

### Start the Backend Server:
#### -- npm start

### Frontend Setup
#### Navigate to the Frontend Directory:
#### -- cd ../frontend

#### Install Frontend Dependencies:
#### -- npm install

#### Start the Frontend Development Server:
#### -- npm start

### Backend Directory Structure - Sample:

backend/
├── models/
│   ├── List.js
│   ├── User.js
├── routes/
│   ├── auth.js
│   ├── movies.js
│   ├── lists.js
├── middleware/
│   ├── auth.js
├── .env
├── server.js
├── package.json

#### Start the backend server:

#### -- cd backend
#### -- npm install
#### -- npm start

### Frontend Directory Structure - Sample:

frontend/
├── src/
│   ├── components/
│   │   ├── Home.js
│   │   ├── MovieList.js
│   │   ├── SignIn.js
│   │   ├── SignUp.js
│   │   ├── PrivateRoute.js
│   ├── utils/
│   │   ├── auth.js
│   ├── App.js
│   ├── index.js
├── package.json

#### Running the Application
#### Start the Backend Server:
#### -- cd backend
#### -- npm start

#### Start the Frontend Server:

#### -- cd frontend
#### -- npm start

### Access the Application:
##### Open a browser and navigate to http://localhost:3000. 
##### You should see the frontend application running, with options to sign in and sign up.

## ** Note -- Install all the Required Dependencies before running the Application.
