# Student Report Card System
A full‑stack web application for managing student records, grades, and report cards.
Built with a Node.js/Express for thebackend, and MySQL database.

-- 
## Features
- Student management: Add, edit, and delete student profiles
- Grade tracking: Store and update subject grades
   View student report card

REST API backend: Node.js + Express

MySQL database integration: Secure and structured data storage

---
## Project Structure
```
project-root/
│
├── backend/
│   ├── server.js
│   ├── db.js
│   ├── routes/
│   |   └── students.js
│   └── .env
│
├── frontend/
│   └── addclass.html
|   └── view.html
|   └── index.html
|   └── students.html
│   └── addclass.css
|   └── view.css
|   └── index.css
|   └── students.css
│   └── addclass.js
|   └── view.js
|   └── index.js
|   └── students.js
│
└── README.md
```
--- 
## Technologies Used
Node.js + Express — backend API

MySQL — relational database

dotenv — environment variable management

Javascript

--- 
## Backend Setup
1. Install dependencies
cd backend
npm install

2. Create your .env file
Code
DB_HOST=localhost
DB_USER=your_mysql_user
DB_PASS=your_mysql_password
DB_NAME=school

4. Start the backend server
node server.js
You should see:
--- 
## Frontend Setup
GET /students — fetch all students

POST /students — add a new student

GET /students/:id — get a single student

POST /grades — add or update grades

--- 
## Some Future Improvements
- Login-inn system

- Admin and student views 

- GPA calculations
--- 
## Output 
<img width="1916" height="1013" alt="image" src="https://github.com/user-attachments/assets/6db68a6e-fb3f-44c9-87fe-4c342bd98d79" />
