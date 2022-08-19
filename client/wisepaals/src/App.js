import React from "react";
import FilterTutors from "./components/FilterTutors";
import NewTutorForm from "./components/tutors/NewTutorForm";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import AppCSS from "./App.module.css";
import blueShape from "./components/blueShape.png";
import "./index.css";

const App = () => {
  return (
    <div className="App">
      <div className={`light ${AppCSS.bigWrapper} bigWrapper`}>
        <img className={AppCSS.blueShape} src={blueShape} />
        <Header />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/tutors/:skill" element={<FilterTutors />} />
          <Route path="/addTutor" element={<NewTutorForm />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
