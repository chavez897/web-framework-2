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
import ImageUpload from "./components/ImageUpload.tsx";
import axios from "../../lib/axios.ts";
import Swal from "sweetalert2";
import { FileWithPath } from "react-dropzone";

const TutorCard = () => {
  const userID = "63ee8670020ff35a7b716eb0";
  const [picture, setPicture] = useState("");
  const [skills, setSkills] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [description, setDescription] = useState("");
  const [hourlyCost, setHourlyCost] = useState("");
  const [id, setId] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/v1/tutors/byUser/?id=${userID}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setId(res.data._id);
        setSkills(res.data.skills);
        setLanguages(res.data.spokenLanguages);
        setHourlyCost(res.data.hourlyRate);
        setDescription(res.data.description);
        setPicture("http://localhost:5001/img/" + res.data.image);
        setIsLoading(false);
      });
  }, []);

  const handleHourlyCostChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHourlyCost(e.target.value);
  };
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  function handleAcceptedFiles(acceptedFiles: FileWithPath[]) {
    var bodyFormData = new FormData();
    bodyFormData.append("id", id);
    bodyFormData.append("image", acceptedFiles[0]);
    axios({
      method: "PUT",
      url: "http://localhost:5001/api/v1/tutors/image",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {})
      .catch(function (response) {});
  }

  const handleSubmit = () => {
    fetch("http://localhost:5001/api/v1/tutors/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        skills: skills,
        spokenLanguages: languages,
        hourlyRate: hourlyCost,
        description: description,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          Swal.fire({
            title: "Success!",
            text: "You have updated your data!",
            icon: "success",
            confirmButtonText: "OK",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Verify the fields",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      })
      .catch((err) => {
        console.log(err);
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
                    type="number"
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
              {!isLoading ? (
                <ImageUpload
                  onAcceptedFiles={handleAcceptedFiles}
                  preview={picture}
                />
              ) : (
                <div></div>
              )}
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
              disabled={
                skills.length <= 0 ||
                languages.length <= 0 ||
                hourlyCost.length <= 0 ||
                description.length <= 0
              }
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
