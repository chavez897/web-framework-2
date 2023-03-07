import React, { useState, useEffect } from "react";
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
import axios from "../../lib/axios.ts";

const TutorCard = () => {
  const userID = "63ee8670020ff35a7b716eb0";
  const [picture, setPicture] = useState<string | undefined>();
  const [skills, setSkills] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [hourlyCost, setHourlyCost] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/v1/tutors/byUser/?id=${userID}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
        setSkills(res.data.skills);
        setLanguages(res.data.spokenLanguages);
        setHourlyCost(res.data.hourlyRate);
        setDescription(res.data.description);
      });
  }, []);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleHourlyCostChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHourlyCost(e.target.value);
  };
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleSubmit = () => {
    console.log({
      name: name,
      email: email,
      skills: skills,
      languages: languages,
      hourlyRate: hourlyCost,
      description: description,
    });
  };

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
                  value={name}
                  onChange={handleNameChange}
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
                  value={email}
                  onChange={handleEmailChange}
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
                    value={hourlyCost}
                    onChange={handleHourlyCostChange}
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
                value={description}
                onChange={handleDescriptionChange}
              />
            </Grid>

            <Button
              sx={{ mr: 0, my: 1, width: "100%" }}
              variant="contained"
              onClick={handleSubmit}
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
