import React, { useState } from "react";
import EmailInput from "./EmailInput";
import LoginCSS from "../../../assets/Login.module.css";
import { BsPerson } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
import ShowOrHideIcon from "./ShowOrHideIcon";
import MainButton from "./MainButton";
import Title from "./Title";
import { REGEX_VALIDATIONS } from "../../../utils/regexValidations";
import { API_ENDPOINTS } from "../../../utils/apiEndpoints";
import axios from "../../../lib/axios";

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
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const [formError, setFormError] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const validate = () => {
    setError("");
    setSuccess(false);
    let errors = {};
    errors.name = form.name ? "" : "Name is required";

    if (form.name && !REGEX_VALIDATIONS.NAME.test(form.name))
      errors.name =
        "Name can only contain letters and must be at least 2 characters long";

    errors.email = form.email ? "" : "Email is required";
    if (form.email && !REGEX_VALIDATIONS.EMAIL.test(form.email))
      errors.email = "Email is invalid";

    errors.password = form.password ? "" : "Password is required";
    if (form.password && !REGEX_VALIDATIONS.PASSWORD.test(form.password))
      errors.password =
        "Password must be at least 8 characters long and it must contain at least one number and one special character";

    errors.password2 = form.password2 ? "" : "Please confirm your password";
    if (form.password2 && form.password2 !== form.password)
      errors.password2 = "Passwords do not match";

    setFormError(errors);

    return Object.values(errors).every((err) => err === "");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("submitted ");
    // Check if form is valid
    if (!validate()) {
      if (success) setSuccess(false);
      return;
    }
    // If form is valid, send data to server

    try {
      const response = await axios.post(
        API_ENDPOINTS.REGISTER,
        JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      console.log({ response });
      setSuccess(true);
      console.log("form is valid");
    } catch (err) {
      console.log(err);
      if (!err?.response) {
        setError("No server response");
      } else if (err?.response?.status === 409) {
        setError("Email already exists");
      } else {
        setError("Registration failed");
      }
    }
  };

  return (
    <div className={`${LoginCSS.signUp} ${LoginCSS.form}`}>
      <Title text="Registration" />
      <br />
      <p className={success ? LoginCSS.success : LoginCSS.hide}>
        Successfully Registered please login
      </p>
      <p className={error ? LoginCSS.error : LoginCSS.hide}>{error}</p>
      <form action="#" onSubmit={handleSubmit}>
        <div className={LoginCSS.inputField}>
          <input
            type="text"
            placeholder="name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <BsPerson className={LoginCSS.reactIcon} />
        </div>
        <p className={!formError.name ? LoginCSS.hide : LoginCSS.error}>
          {formError.name}
        </p>
        <EmailInput form={form} setForm={setForm} />
        <p className={!formError.email ? LoginCSS.hide : LoginCSS.error}>
          {formError.email}
        </p>
        <div className={LoginCSS.inputField}>
          <input
            type={pwFieldType}
            placeholder="Password"
            className={LoginCSS.password}
            required
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <RiLockPasswordLine
            className={`${LoginCSS.reactIcon} ${LoginCSS.leftIcon}`}
          />
        </div>

        <p className={!formError.password ? LoginCSS.hide : LoginCSS.error}>
          {formError.password}
        </p>

        <div className={LoginCSS.inputField}>
          <input
            className={LoginCSS.password}
            type={pwFieldType}
            placeholder="Repeat your password"
            required
            value={form.password2}
            onChange={(e) => setForm({ ...form, password2: e.target.value })}
          />
          <RiLockPasswordLine
            className={`${LoginCSS.reactIcon} ${LoginCSS.leftIcon}`}
          />
          <ShowOrHideIcon
            pwFieldType={pwFieldType}
            togglePwVisibility={togglePwVisibility}
          />
        </div>

        <p className={!formError.password2 ? LoginCSS.hide : LoginCSS.error}>
          {formError.password2}
        </p>

        <div className={LoginCSS.rememberMeAndCheckBoxContainer}>
          <div className={LoginCSS.checkBoxContainer}>
            <input type="checkbox" id="rememberMe" />
            <label className={LoginCSS.text} htmlFor="rememberMe">
              Remember me{" "}
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
