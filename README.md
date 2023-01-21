# Wise Paals

## Overview

Wise Paals is a platform that connects students with tutors. The user can filter for the tutor of his preference from different parameters such as the subject and the price. The user can also register as a tutor and add his information to the platform.

## Features

- [x] Register and Login Page (Modal)
- [x] Forgot Password
- [x] Find Tutors based on different filters
- [x] Register as a tutor
- [x] Contact tutors
- [x] User and Tutor(Profile, Settings)
- [x] Admin Dashboard with web App statistics
- [x] Admin Users and Tutors management
- [x] FAQ
- [x] About Us
- [x] Contact Us

## Technologies

- [x] React.js
- [x] Node.js
- [x] Express.js
- [x] MongoDB
- [x] Javascript
- [x] CSS
- [x] Material-UI

## Prerequisites to run the REST API

- Node.js and npm

Add .env file in the root of the server folder with the following info:

```sh
PORT = 5001
MONGO_DB_URL = mongodb+srv://username:password@cluster0.ewxzt.mongodb.net/?retryWrites=true&w=majority
RANDOM_TUTORS_NUMBER = 30
UNSPLASH_ACCESS_KEY = your_key
```

## REST API Endpoints

- `GET /api/v1/tutors?skill=<tutor-skill>` -Retrieve a list of tutors filtered by skill
- `POST /api/v1/tutors` -Add a tutor
- `POST /api/v1/auth/register` -Register User
- `POST /api/v1/auth/login` -Login User
- `GET /api/v1/generate-random-tutors` -Populate DB with random tutors

## Start the project

Inside client and server folder run:

```sh
npm start
```

## To populate DB With Random Tutors

<details>
<summary>Click to Expand</summary>
Start the server and go to the following path:

```
http://localhost:5001/api/v1/generate-random-tutors
```

The DB will be populated with the number of tutors that you defined in the RANDOM_TUTORS_NUMBER variable of your .env file.

</details>

### Contributors

Juan Gutierrez [<img src="https://i.stack.imgur.com/gVE0j.png" alt="Linkedin">](https://www.linkedin.com/in/-juan-gutierrez/)  
Rodrigo Chavez [<img src="https://i.stack.imgur.com/gVE0j.png" alt="Linkedin">](https://www.linkedin.com/in/rodrigo-chavez-m/)  
Moanisha Velayuthem [<img src="https://i.stack.imgur.com/gVE0j.png" alt="Linkedin">](https://www.linkedin.com/in/moanisha-velayuthem/)  
Sourav Choudhary [<img src="https://i.stack.imgur.com/gVE0j.png" alt="Linkedin">](https://www.linkedin.com/in/sourav009/)
