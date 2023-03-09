import {
  getTutorsService,
  createNewTutorService,
  getTutorService,
  getTutorByUserService,
  updateTutorService,
  updateImageService,
  getTutorByIdService,
} from "../services/tutorService.js";

import multer from "multer";
import path from "path";
import { check, validationResult } from "express-validator";

export const validateTutor = [
  check("description")
    .notEmpty()
    .withMessage("Description is required")
    .isLength({ max: 500 })
    .withMessage("Description cannot be longer than 500 characters"),
  check("spokenLanguages")
    .notEmpty()
    .withMessage("Spoken languages are required")
    .isArray()
    .withMessage("Spoken languages must be an array"),
  check("skills")
    .notEmpty()
    .withMessage("Skills are required")
    .isArray()
    .withMessage("Skills must be an array"),
  check("hourlyRate")
    .notEmpty()
    .withMessage("Hourly rate is required")
    .isFloat({ min: 0 })
    .withMessage("Hourly rate must be a positive number"),
  check("currency")
    .notEmpty()
    .withMessage("Currency is required")
    .isString()
    .withMessage("Currency must be a string"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  },
];

let uniqueImageName;

const maxSize = 5 * 1024 * 1024; //5MB
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    uniqueImageName =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      path.extname(file.originalname);
    cb(null, uniqueImageName);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/png"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
  limits: { fileSize: maxSize },
});

export const getTutors = async (req, res) => {
  try {
    const { skill } = req.query;
    res.status(200).json(await getTutorsService(skill));
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getTutor = async (req, res) => {
  try {
    const { id } = req.query;
    res.status(200).json(await getTutorService(id));
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


// Get tutor by id
export const getTutorById = async (req, res) => {
  try {
    const id  = req.params.id;
    res.status(200).json(await getTutorByIdService(id));
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const getByUser = async (req, res) => {
  try {
    const { id } = req.query;
    res.status(200).json(await getTutorByUserService(id));
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createNewTutor = async (req, res) => {
  try {
    upload.single("image")(req, res, async (err) => {
      if(err instanceof multer.MulterError) {
        res.status().send(err);
      }
      else if (err) {
        return res.status(400).json({ message: err.message });
      }
      try {
        const tutor = await createNewTutorService({
          profile: req.body,
          file: uniqueImageName,
        });
        res.status(201).json(tutor);
      } catch (error) {
        if ((error.code = 11000)) {
          res.status(409).json({ message: `User already registered as tutor` });
        } else {
          res.status(409).json({ message: error });
        }
      }
    });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateTutor = async (req, res) => {
  const { id, skills, spokenLanguages, hourlyRate, description } = req.body;
  if (!id || !skills || !spokenLanguages || !hourlyRate || !description) {
    res.status(400).json({ message: "Missing fields" });
    return;
  }
  try {
    const user = await updateTutorService(
      id,
      skills,
      spokenLanguages,
      hourlyRate,
      description
    );
    if (user) {
      res.status(200).json({
        _id: user._id,
      });
    }
  } catch (error) {
    res.status(503).json({ message: error.message });
  }
};

export const updateImage = async (req, res) => {
  try {
    const { id } = req.body;
    upload.single("image")(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ message: err.message });
      }
      const tutor = await updateImageService({
        id: id,
        file: uniqueImageName,
      });
      res.status(200).json(tutor);
    });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
