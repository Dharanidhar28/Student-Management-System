# Student Management System

A full-stack **Student Management Dashboard** built with **FastAPI** and **JavaScript**.

This application allows users to manage student records using a REST API and an interactive dashboard.

## Features

* JWT Authentication
* Add Student
* Edit Student
* Delete Student
* View Students
* Dashboard statistics (Total Students & Average Age)

## Tech Stack

### Backend

* Python
* FastAPI
* Pydantic
* JWT Authentication

### Frontend

* HTML
* CSS
* JavaScript
* Bootstrap

## Project Structure

```
student-management-system
│
├── backend
│   ├── main.py
│   ├── routers
│   ├── models
│   └── requirements.txt
│
├── frontend
│   ├── index.html
│   ├── login.html
│   ├── script.js
│   ├── api_helper.js
│   └── style.css
│
└── README.md
```

## Running the Project

### Start Backend

```
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### Start Frontend

Open `index.html` using Live Server.

## API Endpoints

| Method | Endpoint       | Description       |
| ------ | -------------- | ----------------- |
| POST   | /login         | Authenticate user |
| GET    | /students      | Retrieve students |
| POST   | /students      | Add student       |
| PUT    | /students/{id} | Update student    |
| DELETE | /students/{id} | Delete student    |
