import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import { useSelector, useDispatch } from "react-redux";
import FileBase from "react-file-base64";
import Container from "@mui/material/Container";
import {
  getNewTutor,
  getNewTutorRequestStatus,
  getNewTutorRequestError,
  addTutorService,
} from "../features/addTutor/index.ts";
import {
  Grid,
  InputAdornment,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { TagsInput } from "react-tag-input-component";
import ImageUpload from "../features/addTutor/components/ImageUpload.tsx"

const NewTutorForm = () => {
  const [picture, setPicture] = useState<string | undefined>();
  const dispatch = useDispatch();
  const onSubmit = (e: { [key: string]: any }) => {
    e.picture = picture;
    dispatch(addTutorService(e));
  };
  const validate = (e: { [key: string]: any }) => {};

  // Skills Array
  const [skills, setSkills] = useState([]);
  const [languages, setLanguages] = useState([]);

  return (
    <>
      <Container maxWidth="lg" sx={{ width: "60%" }}>
        <Grid container>
          <Grid item md={12}>
            <Typography variant="h4" fontWeight={500} color="initial">
              Register as a Tutor
            </Typography>
          </Grid>
          <ImageUpload/>
          <Grid item md={12}>
            <TextField
              id="Name"
              name="name"
              label="Name"
              variant="outlined"
              fullWidth
              sx={{ margin: "17px 0 0 0" }}
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              id="email"
              type="email"
              name="email"
              label="Email"
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
          </Grid>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <TagsInput
                value={languages}
                onChange={setLanguages}
                name="languages"
                placeHolder="Languages"
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                id="cost"
                name="cost"
                label="Hourly Cost"
                variant="outlined"
                fullWidth
                sx={{ margin: "17px 0 0 0" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">CAD</InputAdornment>
                  ),
                }}
              />
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
            />
          </Grid>
          <Grid item>
            <Button variant="contained" type="submit" sx={{ mt: 2 }}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default NewTutorForm;
