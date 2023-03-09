import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import Modal from "./modal/Modal";
import Authentication from "../pages/Authentication";

interface Props {
  allowedRoles: number[];
}

const RequireAuth = ({ allowedRoles }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  //Get the user session
  const user = useSelector((state) => state.session);
  const location = useLocation();

  console.log("Location is: ", location);
  console.log(
    "user?.roles?.find((role) => allowedRoles?.includes(role) ",
    user?.roles?.find((role) => allowedRoles?.includes(role))
  );

  return user?.roles?.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : (
    <>
      {/* <Modal open={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <Authentication />
      </Modal> */}
      <Navigate to="/authentication" state={{ from: location }} replace />
    </>
  );
};

export default RequireAuth;
