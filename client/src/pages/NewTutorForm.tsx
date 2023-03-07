import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "@mui/material/Container";
import { REGEX_VALIDATIONS } from "../utils/regexValidations";
import Swal from "sweetalert2";

import {
  getNewTutor,
  getNewTutorRequestStatus,
  getNewTutorRequestError,
  addTutorService,
} from "../features/addTutor/index";
import {
  Grid,
  TextField,
  Typography,
  Button,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { TagsInput } from "react-tag-input-component";
import ImageUpload from "../features/addTutor/components/ImageUpload";
import { FileWithPath } from "react-dropzone";
import { addTutor } from "../features/addTutor/store/tutorSlice";

const NewTutorForm = () => {
  //Get the user session
  const user = useSelector((state) => state.session);
  console.log("Email: ", user.email);

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => ({ ...state.tutorSlice }));

  // image upload
  const [image, setImage] = useState<File[]>([]);

  function handleAcceptedFiles(acceptedFiles: FileWithPath[]) {
    setImage(acceptedFiles);
  }

  // Input fields
  const [skills, setSkills] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [currency, setCurrency] = useState("");
  const [hourlyCost, setHourlyCost] = useState("");
  const [description, setDescription] = useState("");

  const [errors, setErrors] = useState({
    image: false,
    skills: false,
    languages: false,
    hourlyCost: false,
    currency: false,
    description: false,
  });

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(e.target.value);
  };

  const handleHourlyCostChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHourlyCost(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const validateForm = (): any => {
    const errors: any = {
      skills: false,
      languages: false,
      hourlyCost: false,
      currency: false,
      description: false,
    };
    const priceRegex = REGEX_VALIDATIONS.PRICE;

    if (image.length == 0) {
      errors.image = true;
    }

    if (!priceRegex.test(hourlyCost)) {
      errors.hourlyCost = true;
    }

    if (currency === "") {
      errors.currency = true;
    }

    if (description === "") {
      errors.description = true;
    }

    if (languages.length === 0) {
      errors.languages = true;
    }

    if (skills.length === 0) {
      errors.skills = true;
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (
      errors.image === true ||
      errors.skills === true ||
      errors.languages === true ||
      errors.hourlyCost === true ||
      errors.currency === true ||
      errors.description === true
    ) {
      // Errors
      setErrors(errors);
    } else {
      //No errors
      const addTutorAction = addTutor({
        values: {
          image: image[0],
          userId: "63f180ae4092a7cc8da26b72",
          description: description,
          spokenLanguages: languages,
          skills: skills,
          hourlyRate: Number(hourlyCost),
        },
      });
      dispatch(addTutorAction);

      // Reset form
      setImage([]);
      setSkills([]);
      setLanguages([]);
      setCurrency("");
      setHourlyCost("");
      setDescription("");

      setErrors({
        image: false,
        skills: false,
        languages: false,
        hourlyCost: false,
        currency: false,
        description: false,
      });

      if (loading === false) {
        Swal.fire({
          title: "Success!",
          text: "Profile registered successfully",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    }
  };

  return (
    <>
      <Container maxWidth="lg" sx={{ width: "60%" }}>
        <Grid container>
          <Grid item md={12}>
            <Typography
              variant="h4"
              sx={{ mb: 2 }}
              fontWeight={500}
              color="initial"
            >
              Register as a Tutor
            </Typography>
          </Grid>
          <form
            action="POST"
            encType="multipart/form-data"
            style={{ width: "100%" }}
          >
            {/* Image Component */}
            <ImageUpload onAcceptedFiles={handleAcceptedFiles} />
            {errors.image && (
              <FormHelperText error>Please upload an image</FormHelperText>
            )}
            {/* user Id */}
            <input
              type="text"
              hidden
              name="userId"
              value="63f180ae4092a7cc8da26b72"
            />
            <Grid item md={12}>
              <TextField
                inputProps={{ readOnly: true }}
                defaultValue="Sourav"
                variant="outlined"
                fullWidth
                sx={{ margin: "17px 0 0 0" }}
              />
            </Grid>
            <Grid item md={12}>
              <TextField
                inputProps={{ readOnly: true }}
                defaultValue="sourav@gmail.com"
                variant="outlined"
                sx={{ margin: "17px 0 0 0" }}
                fullWidth
              />
            </Grid>
            <Grid item md={12}>
              <TagsInput
                value={skills}
                onChange={setSkills}
                name="skills"
                placeHolder="Skills"
              />
              {errors.skills && (
                <FormHelperText error>Please enter some skills</FormHelperText>
              )}
            </Grid>
            <Grid container spacing={2}>
              <Grid item md={6}>
                <TagsInput
                  value={languages}
                  onChange={setLanguages}
                  name="languages"
                  placeHolder="Languages"
                />
                {errors.languages && (
                  <FormHelperText error>
                    Please enter some language
                  </FormHelperText>
                )}
              </Grid>
              <Grid item md={3}>
                <TextField
                  id="cost"
                  error={errors.hourlyCost}
                  helperText={
                    errors.hourlyCost ? "Please enter a valid price" : ""
                  }
                  name="cost"
                  label="Hourly Cost"
                  variant="outlined"
                  // type="number"
                  value={hourlyCost}
                  onChange={handleHourlyCostChange}
                  fullWidth
                  sx={{ margin: "17px 0 0 0" }}
                />
              </Grid>
              <Grid item md={3}>
                <FormControl fullWidth sx={{ mt: 2 }}>
                  <InputLabel
                    id="demo-simple-select-label"
                    error={errors.currency}
                  >
                    Currency
                  </InputLabel>
                  <Select
                    error={errors.currency}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={currency}
                    label="Currency"
                    onChange={handleCurrencyChange}
                  >
                    <MenuItem value={"CAD"}>CAD</MenuItem>
                    <MenuItem value={"USD"}>USD</MenuItem>
                  </Select>
                  {errors.currency && (
                    <FormHelperText error>
                      Please choose a currency
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
            </Grid>
            <Grid item md={12}>
              <TextField
                id="description"
                name="description"
                label="Tell us about yourself"
                variant="outlined"
                fullWidth
                multiline
                sx={{ margin: "17px 0 0 0" }}
                rows={4}
                value={description}
                onChange={handleDescriptionChange}
                error={errors.description}
                helperText={
                  errors.description ? "Please enter a valid description" : ""
                }
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                onClick={handleSubmit}
                type="submit"
                sx={{ mt: 2 }}
              >
                Submit
              </Button>
            </Grid>
          </form>
        </Grid>
      </Container>
    </>
  );
};

export default NewTutorForm;
