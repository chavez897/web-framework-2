## Prerequisites to run the server

.env file with the following info:

```sh
PORT = 5001
MONGO_DB_URL = mongodb+srv://username:password@cluster0.ewxzt.mongodb.net/?retryWrites=true&w=majority
RANDOM_TUTORS_NUMBER = 30
UNSPLASH_ACCESS_KEY = your_key
```

## Start the project

Inside client and server folder run:

- npm start

## To populate DB With Random Tutors

Start the server and go to the following path:

- http://localhost:5001/api/v1/tutors/populateDB

The DB will be populated with the number of tutors that you defined in the RANDOM_TUTORS_NUMBER variable of your .env file.
