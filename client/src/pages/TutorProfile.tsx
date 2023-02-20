import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {
  Avatar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Rating,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Stack } from "@mui/system";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import StarIcon from "@mui/icons-material/Star";
import Review from "../features/addReview/components/Review.tsx";
import { useTheme } from "@mui/material/styles";

export default function TutorProfile() {
  const { id } = useParams();

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [rating, setRating] = useState(4);

  return (
    <>
      <Dialog open={open} onClose={handleClose} fullScreen={fullScreen}>
        <DialogTitle>Add a Review</DialogTitle>
        <DialogContent>
          <input
            name="rating"
            type="number"
            value={rating}
            hidden
            readOnly
          />
          <Rating
            name="simple-controlled"
            value={rating}
            precision={0.5}
            onChange={(_, value) => {
              setRating(value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="review"
            label="Review"
            name="review"
            type="text"
            multiline
            rows={4}
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
      <Container sx={{ mt: 3 }}>
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item md={4}>
            {/* Avatar Image */}
            <Avatar
              alt="Remy Sharp"
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
              sx={{ width: 200, height: 200 }}
            />
          </Grid>
          {/* Profile Information */}
          <Grid item md={8}>
            <Typography
              variant="caption"
              sx={{ color: "gray", fontWeight: 500 }}
            >
              INSTRUCTOR
            </Typography>
            <Stack direction="row" alignItems="center">
              <Typography sx={{ fontWeight: 500 }} variant="h4" component="h4">
                Lamont Thornton
                <a href="mailto:myemailaddress@gmail.com">
                  <EmailIcon sx={{ color: "gray", ml: 1 }} />
                </a>
              </Typography>
            </Stack>
            <Rating
              sx={{ mb: 1 }}
              precision={0.5}
              name="size-medium read-only"
              value={4.5}
              readOnly
            />
            <Typography variant="body1" component="h6">
              Skills: Java, Python, Reactjs
            </Typography>
            <Typography variant="body1" component="h6">
              Knows English, French
            </Typography>
            <Typography variant="body1" component="h2">
              Cost: $ 4/hr
            </Typography>
            <Typography variant="body1" component="h2">
              Number of classes given: 5
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={12}>
            <Typography variant="h4" sx={{ fontWeight: 500 }} color="initial">
              About Me
            </Typography>
            <Typography variant="body1" color="initial">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              eveniet voluptatum commodi harum, ea libero cum quas debitis quos
              quidem iusto hic, reiciendis adipisci necessitatibus eum, tenetur
              ipsam possimus nulla deserunt nisi obcaecati. Dignissimos quas
              beatae, et fuga quod repellat doloribus inventore recusandae quam
              vel est voluptatum dolorem a fugit nemo aperiam exercitationem
              veritatis illum sed delectus illo sint nesciunt alias earum!
              Quasi, amet nulla!
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ mt: 3, mb: 2 }} />

        {/* Reviews Container */}
        <Grid container>
          <Grid item md={12}>
            <Stack direction="row" alignItems="center">
              <StarIcon sx={{ color: "#faaf00" }} />
              <Typography ml={1} variant="h6" color="initial">
                4.3 tutor rating | 20 ratings
              </Typography>
            </Stack>
          </Grid>

          {/* Add a Review Component */}
          <Button variant="contained" sx={{ mt: 1 }} onClick={handleClickOpen}>
            Add a Review
          </Button>
          {/* Review Component */}
          <Review />
          <Review />
        </Grid>
      </Container>
    </>
  );
}
