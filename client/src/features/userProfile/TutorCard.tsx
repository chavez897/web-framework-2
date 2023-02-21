import React, { useState } from "react";
import Container from "@mui/material/Container";
import {
  Grid,
  InputAdornment,
  TextField,
  Typography,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { TagsInput } from "react-tag-input-component";
import ImageUpload from "../addTutor/components/ImageUpload.tsx";

const TutorCard = () => {
  const [picture, setPicture] = useState<string | undefined>();
  const [skills, setSkills] = useState([]);
  const [languages, setLanguages] = useState([]);

  return (
    <Container>
      <Card>
        <CardContent>
          <Grid container spacing={1}>
            <Grid item md={12}>
              <Typography variant="h4" fontWeight={500} color="initial" mb={3}>
                Tutor
              </Typography>
            </Grid>
            <Grid item md={6}>
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
                <Grid item md={12}>
                  <TagsInput
                    value={languages}
                    onChange={setLanguages}
                    name="languages"
                    placeHolder="Languages"
                  />
                </Grid>
                <Grid item md={12}>
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
            </Grid>
            <Grid item md={6}>
              <ImageUpload />
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

            <Button
              sx={{ mr: 0, my: 1, width: "100%" }}
              variant="contained"
              onClick={() => {}}
            >
              Update
            </Button>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default TutorCard;
