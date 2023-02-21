import React, { useState } from "react";
import UserCard from "../features/userProfile/UserCard.tsx";
import { Box, Container } from "@mui/material";
import TutorCard from "../features/userProfile/TutorCard.tsx";
const UserProfile = () => {
  return (
    <Container>
      <Box my={5}>
        <UserCard />
      </Box>
      <Box my={5}>
        <TutorCard />
      </Box>
    </Container>
  );
};

export default UserProfile;
