import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options: any = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Courses VS Students",
    },
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    xAxes: [
      {
        barPercentage: 0.2,
      },
    ],
  },
};
const TutorStatistics = () => {
  const courses = [
    {
      title: "Introduction to React",
      students: 50,
    },
    {
      title: "Advanced JavaScript",
      students: 30,
    },
    {
      title: "Introduction to Node.js",
      students: 40,
    },
  ];

  const students = courses.reduce(
    (total, course) => total + course.students,
    0
  );

  const avgRating = 4.5;

  const earnings = courses.reduce(
    (total, course) => total + course.students * 20,
    0
  );
  const data = {
    labels: courses.map((course) => course.title),
    datasets: [
      {
        label: "Students",
        data: courses.map((course) => course.students),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <Container>
      <Paper>
        <Typography variant="h5" component="h3">
          Tutor Statistics
        </Typography>
        <Typography component="p">Courses taught: {courses.length}</Typography>
        <Typography component="p">Students attending: {students}</Typography>
        <Typography component="p">
          Average student rating: {avgRating}
        </Typography>
        <Typography component="p">Total earnings: {earnings}</Typography>
        <Bar options={options} data={data} />;
      </Paper>
    </Container>
  );
};
export default TutorStatistics;
