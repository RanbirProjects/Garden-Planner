![AB1B8DC0-4C8A-417C-B3FB-C319DB2027EC](https://github.com/user-attachments/assets/d82ea33c-72ff-4e88-b271-0f9c8ba27bae)Community Garden Planner 🌱

A comprehensive web application to help local communities manage their garden plots, watering schedules, and harvest logs.

 Features

- 🗺️ Interactive Garden Map View
- ![95CEFC79-62B4-45C7-A9B0-1E0A1C6D738A](https://github.com/user-attachments/assets/daa4a23e-7eb7-472e-9615-eed9cbdb583c)
- 💧 Watering Schedule Management
- ![3CB69F9B-3BB9-426E-BCC2-C197C5538DF4](https://github.com/user-attachments/assets/7aa02cd4-745c-4e3a-8806-6db82e3fba05)
- 📝 Harvest Logging
- ![AB1B8DC0-4C8A-417C-B3FB-C319DB2027EC](https://github.com/user-attachments/assets/b527395a-ac29-45a4-92da-f7a1d4bb291a)
- 👥 Role-based Authentication
- ![7805A1B3-8123-4DF5-B4BF-D52D4CAA3633](https://github.com/user-attachments/assets/ba64e5c1-3d9f-456a-b6e9-14108603f1ae)

- 📅 Calendar Integration
- 📊 Resource Tracking
- ✅ Task Assignment System

 Tech Stack

- Frontend: React.js, FullCalendar.js, TailwindCSS
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT

 Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

Setup Instructions

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

 Project Structure

```
community-garden-planner/
├── frontend/           # React frontend
├── backend/           # Node.js backend
└── README.md
```

License

MIT 
