# Docker-Based Full-Stack Application (Backend)

This is a Docker-based full-stack application that includes a frontend and a backend connected to a MongoDB database.

## Prerequisites

- Docker installed on your machine

## Build and Run

### Backend

1. Navigate to the Backend directory.
2. Build the backend image:

```bash
docker build -t backend -f ./Dockerfile .
```

Run Containers
3. Run the frontend container:
```bash
docker run -d -p 8000:8000 -e MONGODB_URL backend
```