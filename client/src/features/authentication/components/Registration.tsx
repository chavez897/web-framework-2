import React from "react";
import EmailInput from "./EmailInput.tsx";
import LoginCSS from "../../../assets/Login.module.css";
import { BsPerson } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
import ShowOrHideIcon from "./ShowOrHideIcon.tsx";
import MainButton from "./MainButton.tsx";
import Title from "./Title.tsx";

interface Props {
  togglePwVisibility: () => void;
  pwFieldType: string;
  toggleLoginRegister: () => void;
}

const Registration: React.FC<Props> = ({
  togglePwVisibility,
  pwFieldType,
  toggleLoginRegister,
}) => {
  return (
    <div className={`${LoginCSS.signUp} ${LoginCSS.form}`}>
      <Title text="Registration" />
      <form action="#">
        <div className={LoginCSS.inputField}>
          <input type="text" placeholder="name" required />
          <BsPerson className={LoginCSS.reactIcon} />
        </div>
        <EmailInput />
        <div className={LoginCSS.inputField}>
          <input
            type={pwFieldType}
            placeholder="Password"
            className={LoginCSS.password}
            required
          />
          <RiLockPasswordLine
            className={`${LoginCSS.reactIcon} ${LoginCSS.leftIcon}`}
          />
        </div>
        <div className={LoginCSS.inputField}>
          <input
            className={LoginCSS.password}
            type={pwFieldType}
            placeholder="Repeat your password"
            required
          />
          <RiLockPasswordLine
            className={`${LoginCSS.reactIcon} ${LoginCSS.leftIcon}`}
          />
          <ShowOrHideIcon
            pwFieldType={pwFieldType}
            togglePwVisibility={togglePwVisibility}
          />
        </div>

        <div className={LoginCSS.rememberMeAndCheckBoxContainer}>
          <div className={LoginCSS.checkBoxContainer}>
            <input type="checkbox" id="rememberMe" />
            <label className={LoginCSS.text} htmlFor="rememberMe">
              Remember me
            </label>
          </div>
          <div
            href="#"
            className={`${LoginCSS.highlightedText} ${LoginCSS.text}`}
          >
            Forgot password?
          </div>
        </div>
        <MainButton text="Register Now" />
      </form>
      <div className={LoginCSS.loginSignup}>
        <span className={LoginCSS.text}>
          Not a member?{" "}
          <div
            onClick={toggleLoginRegister}
            className={`${LoginCSS.highlightedText} ${LoginCSS.text} ${LoginCSS.signupText}`}
          >
            Login Now
          </div>
        </span>
      </div>
    </div>
  );
};

export default Registration;
