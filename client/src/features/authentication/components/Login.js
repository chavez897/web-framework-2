import React from "react";
import EmailInput from "./EmailInput";
import LoginCSS from "../../../assets/Login.module.css";
import { BsPerson } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
import ShowOrHideIcon from "./ShowOrHideIcon";
import MainButton from "./MainButton";
import Title from "./Title";

const Login = ({ togglePwVisibility, pwFieldType, toggleLoginRegister }) => {
  return (
    <div className={LoginCSS.loginWhiteContainer}>
      <div className={`${LoginCSS.login} ${LoginCSS.form}`}>
        <Title text="Login" />
        <form action="#">
          <EmailInput />
          <div className={LoginCSS.inputField}>
            <input
              type={pwFieldType}
              className={LoginCSS.password}
              placeholder="Password"
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
          <MainButton text="Login Now" />
        </form>
        <div className={LoginCSS.loginSignup}>
          <span className={LoginCSS.text}>
            Not a member?{" "}
            <div
              onClick={toggleLoginRegister}
              className={`${LoginCSS.text} ${LoginCSS.highlightedText} ${LoginCSS.signupText}`}
            >
              Signup now
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
