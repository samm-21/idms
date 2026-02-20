Employee Management System is a full-stack web application built using the MERN stack.  
It allows administrators to manage employees including:

- Authentication (Register/Login/Logout)
- Create Employee
- View Employees
- Dashboard Overview

The system uses JWT authentication with HTTP-only cookies for secure access.

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- React Router DOM
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB (MongoDB Atlas)
- Mongoose
- JWT Authentication
- bcryptjs

---

## ⚙️ Setup Instructions
```
1️) Clone the Repository

git clone https://github.com/samm-21/idms.git
cd idms


2️) Backend Setup
cd backend
npm install

Create .env file inside backend folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Run Backend
npm run dev

3️) Frontend Setup

Open a new terminal:
cd frontend
npm install
npm run dev

🔐 Authentication Flow

> User registers using /api/auth/register
> Password is hashed using bcrypt
> JWT token is generated on login
> Token is stored as HTTP-only cookie
> Protected routes require authentication middleware

📊 Features Implemented
- User Registration
- User Login
- JWT-based Authentication
- Add Employee
- View Employees
- Basic Dashboard Layout
- MongoDB Integration

🗄️ Database
MongoDB Atlas
