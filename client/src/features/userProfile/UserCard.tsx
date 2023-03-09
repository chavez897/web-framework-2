import React, { useState, useEffect } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { Button } from "@mui/material";
import Swal from "sweetalert2";

const UserCard = (props: any) => {
  const [name, setName] = useState(props.name);
  const [lastName, setLastName] = useState(props.lastName);
  const [email, setEmail] = useState(props.email);
  const [phone, setPhone] = useState(props.phone);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleSubmit = () => {
    fetch("http://localhost:5001/api/v1/user/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        lastName: lastName,
        email: email,
        phone: phone,
      }),
    }).then((res) => {
      if (res.status === 200) {
        Swal.fire({
          title: "Success!",
          text: "You have updated your profile",
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
    });
  };

  return (
    <Container>
      <Card>
        <CardContent>
          <Typography variant="h4" component="div">
            UserProfile
          </Typography>
          <Grid container spacing={2} mt={1}>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth sx={{ mr: 5, my: 0 }}>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Name
                </InputLabel>
                <OutlinedInput
                  id="Name"
                  label="Name"
                  value={name}
                  onChange={handleNameChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth sx={{ mr: 5, my: 0 }} disabled={true}>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Last Name
                </InputLabel>
                <OutlinedInput
                  id="Email"
                  label="Email"
                  value={lastName}
                  onChange={handleLastNameChange}
                  disabled={false}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth sx={{ mr: 5, my: 0 }}>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Email
                </InputLabel>
                <OutlinedInput
                  id="Email"
                  label="Email"
                  value={email}
                  disabled={true}
                  onChange={handleEmailChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth sx={{ mr: 5, my: 0 }}>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Phone
                </InputLabel>
                <OutlinedInput
                  id="Email"
                  label="Email"
                  value={phone}
                  onChange={handlePhoneChange}
                />
              </FormControl>
            </Grid>
          </Grid>

          <Button
            sx={{ mr: 5, my: 1, width: "100%" }}
            variant="contained"
            onClick={handleSubmit}
            disabled={
              name.length <= 0 ||
              lastName.length <= 0 ||
              email.length <= 0 ||
              phone.length <= 0
            }
          >
            Update
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default UserCard;
