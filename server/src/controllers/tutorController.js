import {
  getTutorsService,
  createNewTutorService,
  getTutorService,
  getTutorByUserService,
  updateTutorService,
  updateImageService,
} from "../services/tutorService.js";

import multer from "multer";
import path from "path";

let uniqueImageName;
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

const upload = multer({ storage: storage });

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

export const getByUser = async (req, res) => {
  try {
    const { id } = req.query;
    console.log("asdf");
    res.status(200).json(await getTutorByUserService(id));
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createNewTutor = async (req, res) => {
  try {
    // await body('userId').isMongoId().withMessage('Invalid user ID').run(req);
    // await body('description').isLength({ min: 10, max: 200 }).withMessage('Description must be between 10 and 200 characters').run(req);
    // await body('spokenLanguages').isArray({ min: 1 }).withMessage('At least one spoken language is required').run(req);
    // await body('skills').isArray({ min: 1 }).withMessage('At least one skill is required').run(req);
    // await body('hourlyRate').isNumeric({ min: 0 }).withMessage('Hourly rate must be a positive number').run(req);
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }
    upload.single("image")(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ message: err.message });
      }
      const tutor = await createNewTutorService({
        profile: req.body,
        file: uniqueImageName,
      });
      res.status(201).json(tutor);
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
