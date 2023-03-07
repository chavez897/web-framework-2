import React, { useState, useEffect } from "react";
import UserCard from "../features/userProfile/UserCard.tsx";
import { Box, Container } from "@mui/material";
import TutorCard from "../features/userProfile/TutorCard.tsx";
import axios from "../lib/axios.ts";

const UserProfile = () => {
  const userID = "63ee8670020ff35a7b716eb0";
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isTutor, setIsTutor] = useState(false);
  const [isLaoding, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/v1/user/byId/?id=${userID}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setName(res.data.name);
        setLastName(res.data.lastName);
        setEmail(res.data.email);
        setPhone(res.data.phone);
        setIsTutor(res.data.isTutor);
        if (res.data.isTutor) {
        } else {
          setIsLoading(false);
        }
      });
  }, []);
  if (isLaoding) {
    return <Container></Container>;
  } else {
    return (
      <Container>
        <Box my={5}>
          <UserCard
            name={name}
            lastName={lastName}
            email={email}
            phone={phone}
          />
        </Box>
        <Box my={5}>
          <TutorCard />
        </Box>
      </Container>
    );
  }
};

export default UserProfile;
