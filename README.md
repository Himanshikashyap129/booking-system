# Service Booking System

## Description
This is a backend service booking system developed as part of an assignment. It allows users to register, login, create services, and book services based on roles.

## Features
- User Authentication (JWT)
- Role-Based Access (Admin, Provider, Customer)
- Service Creation (Provider only)
- Booking System (Customer only)

## Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT

## Setup Instructions

1. Clone repo
git clone git clone https://github.com/Himanshikashyap129/booking-system.git

2. Install dependencies
npm install

3. Create .env file
PORT=5000
MONGO_URI=my_mongodb_url
JWT_SECRET=your_secret

4. Run server
npm start

## API Endpoints

### Auth
- POST /api/auth/register
- POST /api/auth/login

### Services
- POST /api/services (Provider only)
- GET /api/services

### Bookings
- POST /api/bookings (Customer only)
- GET /api/bookings/my

## Assumptions
- Users have predefined roles (admin, provider, customer)
- No frontend included
- Booking is based on service ID and date

## Future Improvements
- Prevent double booking
- Add time slots
- Admin dashboard
