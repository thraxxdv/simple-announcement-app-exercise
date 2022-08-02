# Simple Announcement App Exercise

### Note
*As much as I hate to admit it, I did not finish this project. I know that I am capable of the functionalities given and to be honest, they sound rather simple especially with how Laravel structures its validations and React/Next JS handles component-based UI.*

*With my current situation, having a full time job and being an independent adult living alone and having all the responsibilities that comes with it, a deadline less than 48 hours has proven to be a bit steep.*

## About the project
This repository is a dockerized project intended to be ran on the reviewers machine seemlessly. The `backend` folder contains a Laravel application while the `frontend` folder contains a NextJS application.

## Initializing the project
1. Make sure that Docker is installed
2. Open the root directory of this project in a terminal
3. Run the command `docker-compose up` and it should build the containers needed to run the project
4. Wait for the prompt that the project servers are ready

This project automatically seeds

## Accessing the project
**Backend** - The project's backend API is running at port 8080 in your local machine. Typing in `localhost:8080` in your web browser should take you to a Laravel default page

**Frontend** - The frontend api is pointed to `localhost:4000`. Visiting that should take you to a login page where you can login with `test@test.com` and password as `password`

### Project breakdown
The backend is 80% done with only deleting announcement missing and unit tests. The frontend has a lot missing, but at this point in the project it only needs to be calling APIs.

So far, these are the completed API routes

`POST /api/v1/auth/login` - Logging in route
`POST /api/v1/auth/check` - To check if API token is still valid
`GET /api/v1/announcements` - Get announcements
`POST /api/v1/announcements` - Store announcements to DB