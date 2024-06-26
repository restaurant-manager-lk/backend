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
3. Run the frontend container:
```bash
docker run -d -p 8000:8000 -e MONGODB_URL="mongodb+srv://Shavidika:shavi29924@cluster1.lgleyvj.mongodb.net/restaurant_manager?retryWrites=true&w=majority&appName=Cluster1" backend
```