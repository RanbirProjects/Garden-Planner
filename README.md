# Community Garden Planner 🌱

A comprehensive web application to help local communities manage their garden plots, watering schedules, and harvest logs.

## Features

- 🗺️ Interactive Garden Map View
- 💧 Watering Schedule Management
- 📝 Harvest Logging
- 👥 Role-based Authentication
- 📅 Calendar Integration
- 📊 Resource Tracking
- ✅ Task Assignment System

## Tech Stack

- **Frontend**: React.js, FullCalendar.js, TailwindCSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. Create a `.env` file in the backend directory with the following variables:
   ```
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

4. Start the development servers:
   ```bash
   # Start backend server
   cd backend
   npm run dev

   # Start frontend server
   cd ../frontend
   npm start
   ```

## Project Structure

```
community-garden-planner/
├── frontend/           # React frontend
├── backend/           # Node.js backend
└── README.md
```

## License

MIT 