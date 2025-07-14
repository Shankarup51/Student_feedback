# 🎓 Student Feedback System

A full-stack role-based student feedback platform that enables students to submit course feedback anonymously, while faculty and admins can view meaningful insights and visual reports.

Built with **React**, **Node.js**, **Express**, and **MySQL**.

---

## 🔗 Live Demo (optional)
👉 [View Demo](https://your-live-demo-link.com)

---

## 📌 Features

### 👤 Student
- Role-based login
- Select semester & view subjects
- Submit feedback:
  - **Theory + Teacher**
  - **Practical + Teacher**
  - **Course-only**
- Feedback is recorded **anonymously**

### 👨‍🏫 Faculty
- Login to personalized dashboard
- View anonymous feedback trends
- Track performance across subjects
- Export feedback reports as CSV

### 🛠️ Admin
- Manage all feedback and user roles
- See global feedback stats and trends
- Access complete faculty/course reports
- Export any dataset to CSV

---

## 🖼️ Screenshots

| Student Dashboard | Feedback Form | Faculty Analytics |
|-------------------|---------------|-------------------|
| ![Student](./screenshots/student_dashboard.png) | ![Form](./screenshots/feedback_form.png) | ![Faculty](./screenshots/faculty_dashboard.png) |

---

## 🧰 Tech Stack

### Frontend
- ⚛️ React.js
- 🌬️ Tailwind CSS
- 📊 Recharts
- 🔐 React Router + Context API

### Backend
- 🟢 Node.js
- 🚀 Express.js
- 🗃️ MySQL
- 🔒 JWT Authentication (optional)

---

## 🗂️ Project Structure
INTERSHIP_NG/
├── student_feedback/         # React client
│   ├── public/
│   ├── src/
│   │   ├── assets/           # Logos, background images
│   │   ├── components/
│   │   │   ├── admin/
│   │   │   ├── common/       # Header, Sidebar (shared)
│   │   │   ├── faculty/      # Recharts components
│   │   │   └── student/      # SubjectTable, etc.
│   │   ├── context/          # AuthContext.js
│   │   ├── data/             # Dummy course/subject data
│   │   ├── Pages/
│   │   │   ├── Admin/
│   │   │   ├── Faculty/
│   │   │   └── Student/      # Login, Dashboard, Settings, FeedbackForm
│   │   ├── routes/           # ProtectedRoute.jsx
│   │   ├── App.js
│   │   ├── index.js
│   │   └── tailwind.config.js
│   ├── package.json
│   └── README.md
│
├── server/                   # Express backend
│   ├── login_routes/         # Role-based login routes
│   ├── db.js                 # MySQL connection config
│   └── server.js             # Express server entry
│
├── .gitignore
├── LICENSE
└── README.md                 # You're reading it 😉


