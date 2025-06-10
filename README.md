# 📝 Todo List App - MERN Stack

A simple and functional **Todo List** application built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js).  
It allows users to create, manage, and track tasks with a title and description.  
The app demonstrates full CRUD operations with a clean and responsive UI.

---

## 🚀 Features

✅ Add new tasks with title and description  
✅ Mark tasks as **completed** or **pending**  
✅ Delete tasks  
✅ Live task statistics (Total, Completed, Pending)  
✅ Persistent storage with **MongoDB**  
✅ RESTful API using **Express.js** and **Node.js**  
✅ Responsive and user-friendly React front-end  
✅ Clean and modular project structure  

---

## 🛠️ Tech Stack

**Frontend:**  
- React.js  
- CSS  

**Backend:**  
- Node.js  
- Express.js  

**Database:**  
- MongoDB (with Mongoose)  

---

cd server
npm install

# Create a .env file with:
# MONGODB_URI=mongodb://localhost:27017/tododb
# PORT=5000
npm start
| Method | Endpoint         | Description                 |
| ------ | ---------------- | --------------------------- |
| GET    | /api/getall      | Get all tasks               |
| POST   | /api/create      | Create a new task           |
| PUT    | /api/update/\:id | Update task (ex: completed) |
| DELETE | /api/delete/\:id | Delete a task               |


