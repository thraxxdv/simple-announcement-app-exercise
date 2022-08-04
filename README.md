# Simple Announcement App Exercise

## About the project
This repository is a dockerized project intended to be ran on the reviewers machine seemlessly. The `backend` folder contains a Laravel application while the `frontend` folder contains a NextJS application.

### Notes
_The frontend implementation of this application is a simple UI with 2 pages. This was not meant to be a means of showing how proficient I am design-wise but rather a minimal, non-over-engineered NextJS app to demonstrate my fundamental knowledge of React._

_The same goes for the backend, the project requirements of this application is rather simple and very quick to utilize with Laravel without creating my own abstraction. Ideally, on a large application business logic should be handed over to service classes but I have chosen to put them in the HTTP controller in order to keep things minimal since most of the functions are one-liners. Again, emphasizing on not-overengineering and demonstrating my fundamental knowledge of Laravel._

## Initializing the project
1. Make sure that Docker is installed.
2. Open the root directory of this project in a terminal.
3. Run the command `docker-compose up` and it should build the containers needed to run the project.
4. Wait for the prompt that the project servers are ready.

_The environment variables are added into this repository, while it is not a good practice, this is a special case since this is a test project and I'm prioritizing easy installation._

_This project automatically seeds test data into the database_

## Accessing the project
**Backend** - The project's backend API is running at port 8080 in your local machine. Typing in `localhost:8080` in your web browser should take you to a Laravel default page. If the port is not available on your machine, stop the `docker-compose up` command and change the port number on line _18_ on the `docker-compose.yml` file.

**Frontend** - The frontend api is pointed to `localhost:4000`. Visiting that should take you to a login page where you can login with `test@test.com` and password as `password`. If the port is not available on your machine, stop the `docker-compose up` command and change the port number on line _38_ on the `docker-compose.yml` file.

## API Routes

**Auth Routes**

`GET      api/v1/announcements` - Get announcements, sorted descending by start date.
`POST     api/v1/announcements` - Create announcement.
`GET      api/v1/announcements/{announcement}` - Get a single announcement.
`PUT      api/v1/announcements/{announcement}` - Update an announcement.
`DELETE   api/v1/announcements/{announcement}` - Delete an announcement,
`POST     api/v1/auth/check` - Route for checking auth token validity.
`POST     api/v1/auth/login` - Login route.
`POST     api/v1/auth/logout` - Logout route.

## Running Unit Tests
To run unit tests, run `docker-compose exec laravel php artisan test`.

## Accessing CLIs
To run backend commands, type in `docker-compose exec laravel <command>`.
To run frontend commands, type in `docker-compose exec nextjs <command>`.