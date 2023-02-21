import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import tutorRoutes from "./v1/routes/tutorRoutes.js";
import reviewRoutes from "./v1/routes/reviewRoutes.js";
import homeRoutes from "./v1/routes/homeRoutes.js";

import connectDb from "./database/MongoDbConfig.js";
import dotenv from "dotenv";
import authenticationRoutes from "./v1/routes/authenticationRoutes.js";
import populateDBRoutes from "./v1/routes/populateDBRoutes.js";
import cookieParser from "cookie-parser";
import corsOptions from "./config/corsOptions.js";
import credentials from "./middlewares/credentials.js";
import contactFomrRoutes from "./v1/routes/contactFormRoutes.js";

//Choosen architekture: 3 layer architecture
//Router -> Controller -> Service Layer -> Data Access Layer

//To load env variables into the process global object
dotenv.config();

//Create server
const app = express();

const PORT = process.env.PORT || 5001;
//To connect to the Db
connectDb()
  .then(app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

//Configure server

//Middleware to be able to set cookies in the response
//Before cors so it can set the credentials header and cors doesn't throw an error
app.use(credentials);

// app.use(cors({ origin: "*" }));
app.use(cors(corsOptions));
//Middleware to parse json data
app.use(bodyParser.json({ limit: "30mb", extended: true }));
//Middleware to parse urlencoded data
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
//Middleware to parse cookies
app.use(cookieParser());

//Route to the tutors CRUD
app.use("/api/v1/tutors", tutorRoutes);
//Route to populate the DB with random tutors
app.use("/api/v1/generate-random-tutors", populateDBRoutes);
//Authentication routes
app.use("/api/v1/auth", authenticationRoutes);
//Review Routes
app.use("/api/v1/reviews", reviewRoutes);
app.use("/api/v1/contents", homeRoutes);
app.use("/api/v1/contact", contactFomrRoutes);
