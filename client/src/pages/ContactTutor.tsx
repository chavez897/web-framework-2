import React, { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";

const ContactTutor = () => {
  const { tutor } = useParams();
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("");
  const [skill, setSkill] = useState("");
  const [description, setDescription] = useState("");

  const skills = ["opt 1", "op2"];

  console.log(tutor);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLanguage(e.target.value);
  };

  const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSkill(e.target.value);
  };
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("http://localhost:5001/api/v1/contact/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        language: language,
        skill: skill,
        description: description,
        user: "test user",
        tutor: "test tutor",
      }),
    }).then((response) => {
      setTitle("");
      setDescription("");
      setLanguage("");
      setSkill("");
    });
  };

  return (
    <Container>
      <Card>
        <CardContent>
          <Typography variant="h4" component="div">
            Contact
          </Typography>
          <Grid container spacing={2} mt={1}>
            <Grid item xs={12} md={12}>
              <FormControl fullWidth sx={{ mr: 5, my: 0 }}>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Title
                </InputLabel>
                <OutlinedInput
                  id="productName"
                  label="Product Name"
                  value={title}
                  onChange={handleTitleChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth sx={{ mr: 5, my: 1 }}>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={skills}
                  renderInput={(params) => (
                    <TextField {...params} label="Skills" />
                  )}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth sx={{ mr: 5, my: 1 }}>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={skills}
                  renderInput={(params) => (
                    <TextField {...params} label="Language" />
                  )}
                />
              </FormControl>
            </Grid>
          </Grid>
          <FormControl fullWidth sx={{ mr: 5, my: 1 }}>
            <TextField
              id="description"
              label="Description"
              multiline
              rows={4}
              value={description}
              onChange={handleDescriptionChange}
            />
          </FormControl>
          <Button
            sx={{ mr: 5, my: 1, width: "100%" }}
            variant="contained"
            onClick={() => {}}
          >
            Contact
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ContactTutor;
