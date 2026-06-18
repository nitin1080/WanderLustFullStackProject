# WanderLust - Travel Listing Platform

WanderLust is a full-stack web application that allows users to explore, create, edit, and manage travel accommodation listings. Users can view destinations, upload images, and share travel stays with others.

## Features

- View all travel listings
- Create new listings
- Edit existing listings
- Delete listings
- Upload listing images
- Responsive user interface
- Server-side validation
- MongoDB database integration

## Tech Stack

### Frontend
- HTML
- CSS
- JavaScript
- EJS

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Other Tools
- Cloudinary (Image Storage)
- Joi Validation
- Express Middleware

## Project Structure

```
WanderLustFullStackProject/
│
├── controllers/
├── models/
├── routes/
├── views/
├── public/
├── utils/
├── init/
├── app.js
├── cloudConfig.js
├── schema.js
└── package.json
```

## Installation

### Clone Repository

```bash
git clone https://github.com/nitin1080/WanderLustFullStackProject.git
cd WanderLustFullStackProject
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file and add:

```env
ATLASDB_URL=your_mongodb_connection_string

CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_api_key
CLOUD_API_SECRET=your_api_secret
```

### Run Application

```bash
node app.js
```

or

```bash
nodemon app.js
```

Application will run on:

```text
http://localhost:8080
```

## Screenshots

Add screenshots here:

### Home Page
![Home](screenshots/home.png)

### Listing Details
![Details](screenshots/details.png)

### Create Listing
![Create](screenshots/create.png)

## Future Improvements

- User Authentication
- Booking System
- Reviews & Ratings
- Search and Filter Listings
- Wishlist Feature
- Payment Integration

## Learning Outcomes

This project helped me learn:

- REST APIs
- MVC Architecture
- MongoDB and Mongoose
- Express Routing
- Cloudinary Integration
- Full Stack Development
- CRUD Operations

## Author
**Nitin Singh**
- Final Year EIE Student, NIT Silchar
- Passionate about Full-Stack Web Development, Data Structures & Algorithms, and Software Engineering.
- Skilled in MERN Stack (MongoDB, Express.js, React.js, Node.js), SQL, and REST APIs.
