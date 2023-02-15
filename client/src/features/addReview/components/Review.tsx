import { Avatar, Grid, Rating, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import React from "react";

export default function Review() {
  return (
    <>
      <Container sx={{ mt: 3, width: "90%" }}>
        <Grid container>
          <Grid item mr={2}>
            <Avatar
              alt="Alex Benjamin"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 56, height: 56 }}
            />
          </Grid>
          <Grid item md={11}>
            <Stack direction="column">
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="body1" color="initial" fontWeight={500}>
                  Alex Benjamin
                </Typography>
                <Typography variant="body1" color="initial">
                  Dec 26,2022
                </Typography>
              </Stack>
              <Rating name="read-only size-small" value={4} readOnly />
            </Stack>
          </Grid>
          <Grid item mt={2}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            voluptatibus beatae vitae maiores asperiores. Obcaecati, ex error.
            Itaque eos cum amet fugit atque?
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
