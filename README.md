## GROUP 7 ASSIGNMENT (CRUD OPERATIONS)
## Student Management System (React CRUD)
A React-based Student Management System that allows users to:

✅ Add new students

✅ View all students

✅ View a single student

✅ Edit student details

✅ Delete student records

The application uses JSON Server as a fake backend and the native fetch() API for data communication.

## Technologies used
-React

-React Router DOM

-JSON Server

-Fetch API

-JavaScript (ES6)

-HTML & CSS

## Project Structure
react-crud-assignment/
│
├── database/db.json
│
└── src/
    ├── components/
    │   ├── Layout.jsx
    │   └── Footer.jsx
    │
    ├── pages/
    │   ├── Home.jsx
    │   ├── AddStudent.jsx
    │   ├── EditStudent.jsx
    │   └── ViewStudent.jsx
    │
    ├── App.jsx
    └── main.jsx


## Installation and Setup
1. Clone the repository using SSH
    ## git clone git@github.com:D-bengo/react_crud_assignment.git
    ## cd react_crud_assignment
2. Install Project Dependencies
    ## npm install
3. Install JSON Server
    ## npm install -g json-server
4. Start JSON Server
- Inside database folder,  run:
    ## json-server --watch db.json --port 3001
5. Both React apllication and db.json should run in order to function and see ouput.

