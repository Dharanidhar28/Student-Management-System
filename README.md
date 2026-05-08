# Student Management System

A full-stack Student Management Dashboard built with FastAPI, SQLite, JavaScript, Bootstrap, Docker, and Docker Compose.

The application lets an administrator log in, manage student records, search and sort students, view dashboard statistics, and use a refreshed responsive UI.

## Features

- JWT authentication with login and logout
- Add, edit, delete, and view students
- Search by name, email, or course
- Sorting by name, age, or course
- Pagination support
- Dashboard statistics for total students and average age
- Loading and empty states
- Toast notifications
- Responsive dashboard and login UI
- Separate frontend and backend Docker images
- Docker Compose setup with a persistent SQLite volume

## Tech Stack

Frontend:

- HTML
- CSS
- JavaScript
- Bootstrap
- Nginx for containerized static hosting and API proxying

Backend:

- FastAPI
- Python
- SQLAlchemy
- Uvicorn

Database:

- SQLite

Authentication:

- JWT

DevOps:

- Docker
- Docker Compose

## Project Structure

```text
student-management-system/
+-- backend/
|   +-- app/
|   +-- requirements.txt
|   +-- Dockerfile
+-- frontend/
|   +-- index.html
|   +-- login.html
|   +-- script.js
|   +-- api_helper.js
|   +-- style.css
|   +-- nginx.conf
|   +-- Dockerfile
+-- docker-compose.yml
+-- .dockerignore
+-- README.md
```

## Run With Docker Compose

Build and start both containers:

```bash
docker compose up --build
```

Run in the background:

```bash
docker compose up --build -d
```

Stop the containers:

```bash
docker compose down
```

Stop the containers and remove the SQLite Docker volume:

```bash
docker compose down -v
```

## Docker Services

| Service | Image | Port | Description |
| --- | --- | --- | --- |
| backend | student-management-backend:latest | 8000 | FastAPI API server |
| frontend | student-management-frontend:latest | 3000 | Nginx static frontend and API proxy |

Docker Compose creates a persistent volume named `backend-data` for the SQLite database at `/app/data/students.db` inside the backend container.

## App URLs

Frontend:

```text
http://localhost:3000
```

Backend API docs:

```text
http://localhost:8000/docs
```

Backend API:

```text
http://localhost:8000
```

## Login Credentials

```text
Email: admin@example.com
Password: 1234
```

## How The Docker Setup Works

- The backend image is built from `backend/Dockerfile`.
- The backend runs FastAPI with Uvicorn on port `8000`.
- The backend reads these environment variables from `docker-compose.yml`:
  - `SECRET_KEY`
  - `ALGORITHM`
  - `ACCESS_TOKEN_EXPIRE_MINUTES`
  - `DATABASE_URL`
  - `PORT`
- The frontend image is built from `frontend/Dockerfile`.
- Nginx serves the static frontend on port `80` inside the container.
- Docker Compose maps frontend port `80` to host port `3000`.
- `frontend/nginx.conf` proxies API requests from the browser to the backend service:
  - `/login`
  - `/students/`
- `frontend/api_helper.js` uses same-origin API calls, so the frontend works through the Nginx proxy.

## Manual Local Setup

You can also run the backend without Docker.

Create and activate a virtual environment:

```bash
cd backend
python -m venv venv
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run the backend:

```bash
cd ..
uvicorn backend.app.main:app --reload --host 0.0.0.0 --port 8000
```

Then serve the frontend with a static server or VS Code Live Server.

## API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/login` | User login |
| GET | `/students/` | Get students |
| GET | `/students/{id}` | Get one student |
| POST | `/students/` | Add student |
| PUT | `/students/{id}` | Update student |
| DELETE | `/students/{id}/` | Delete student |

## Recent Changes

- Added separate Dockerfiles for frontend and backend.
- Added `docker-compose.yml` to run the complete app.
- Added Nginx proxy configuration for frontend-to-backend API calls.
- Made the backend database URL configurable with `DATABASE_URL`.
- Added persistent SQLite storage through a Docker volume.
- Refreshed the login and dashboard UI.
- Improved search, sorting, table empty state, and action button styling.
- Updated Docker ignore rules to keep images smaller.

## Screenshots

### Login

![Login Screenshot](Screenshots/Login_page.png)

### Dashboard

![Dashboard Screenshot](Screenshots/dashboard.png)

### Add Student

![Add Student](Screenshots/addStudent.png)

### Edit Student

![Edit Student](Screenshots/EditStudent.png)

### Search Student

![Search Screenshot](Screenshots/search.png)

### Sort Student

![Sort Screenshot](Screenshots/sorting.png)

## Future Improvements

- Add user registration
- Add password hashing
- Add role-based access control
- Add CSV export
- Add PostgreSQL support for production deployments

## Author

<<<<<<< HEAD
Dharanidhar Kotha  
=======
```bash
git clone https://github.com/yourusername/student-management-system.git
cd student-management-system
```

### 2️⃣ Setup Backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

Run server:

```bash
uvicorn app.main:app --reload
```

Backend runs at:

```
http://127.0.0.1:8000
```

Swagger Docs:

```
http://127.0.0.1:8000/docs
```

---

### 3️⃣ Run Frontend

Open:

```
frontend/login.html
username:admin@example.com
password:1234
```

or run using Live Server in VS Code.

---

## 📡 API Endpoints

| Method | Endpoint       | Description    |
| ------ | -------------- | -------------- |
| POST   | /login         | User login     |
| GET    | /students      | Get students   |
| POST   | /students      | Add student    |
| PUT    | /students/{id} | Update student |
| DELETE | /students/{id} | Delete student |

---

## 📌 Future Improvements

* Add role-based authentication
* Export students to CSV

---
## Live Demo

Frontend:
https://student-management-system-t3gh.onrender.com

username:admin@example.com
password:1234

API Docs:
https://student-management-system-t3gh.onrender.com/docs

## 👨‍💻 Author

Dharanidhar Kotha
>>>>>>> e1f9751a7007af46c3270e348e8fb66448d3ab7f
GitHub: https://github.com/Dharanidhar28
