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
import ContactTutor from "./pages/ContactTutor";
import UserProfile from "./pages/UserProfile";
import RequireAuth from "./components/RequireAuth";
import { useState } from "react";
import Authentication from "./pages/Authentication";
import Modal from "./components/modal/Modal";
import ROLES from "./utils/rolesList";

interface Props {}

const App: React.FC<Props> = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <div className="App">
      <div className={`light ${AppCSS.bigWrapper} bigWrapper`}>
        <img className={AppCSS.blueShape} src={blueShape} />
        <Header />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/tutors/:skill" element={<FilterTutors />} />
          <Route element={<RequireAuth allowedRoles={[ROLES.USER]} />}>
            <Route path="/addTutor" element={<NewTutorForm />} />
          </Route>
          <Route path="/tutorProfile/:id" element={<TutorProfile />} />
          <Route path="/statistics" element={<TutorStatistics />} />
          <Route path="/contactTutor/:tutor" element={<ContactTutor />} />
          <Route path="/userProfile" element={<UserProfile />} />

          <Route
            path="/authentication"
            element={
              <Modal open={isModalOpen} setIsModalOpen={setIsModalOpen}>
                <Authentication />
              </Modal>
            }
          />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
