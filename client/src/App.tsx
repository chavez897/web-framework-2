import React from "react";
import FilterTutors from "./pages/FilterTutors.tsx";
import NewTutorForm from "./pages/NewTutorForm.tsx";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";
import TutorStatistics from "./features/tutorStatistics/TutorStatistics.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import AppCSS from "./assets/App.module.css";
import blueShape from "./assets/blueShape.png";
import "./assets/index.css";
import TutorProfile from "./pages/TutorProfile.tsx";
import ContactTutor from "./pages/ContactTutor.tsx";
import UserProfile from "./pages/UserProfile.tsx";

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div className="App">
      <div className={`light ${AppCSS.bigWrapper} bigWrapper`}>
        <img className={AppCSS.blueShape} src={blueShape} />
        <Header />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/tutors/:skill" element={<FilterTutors />} />
          <Route path="/addTutor" element={<NewTutorForm />} />
          <Route path="/tutorProfile/:id" element={<TutorProfile/>} />
          <Route path="/statistics" element={<TutorStatistics />} />
          <Route path="/contactTutor/:tutor" element={<ContactTutor />} />
          <Route path="/userProfile" element={<UserProfile />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
