import React from "react";
import FilterTutors from "./pages/FilterTutors";
import NewTutorForm from "./pages/NewTutorForm";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import TutorStatistics from "./features/tutorStatistics/TutorStatistics";
import LandingPage from "./pages/LandingPage";
import AppCSS from "./assets/App.module.css";
import blueShape from "./assets/blueShape.png";
import "./assets/index.css";
import TutorProfile from "./pages/TutorProfile";

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
          <Route path="/tutorProfile/:id" element={<TutorProfile />} />
          <Route path="/statistics" element={<TutorStatistics />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
