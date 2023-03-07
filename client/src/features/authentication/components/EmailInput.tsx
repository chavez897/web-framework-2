import React from "react";
import LoginCSS from "../../../assets/Login.module.css";
import { AiOutlineMail } from "react-icons/ai";

interface Props {
  form: {
    email: string;
  };
  setForm: React.Dispatch<
    React.SetStateAction<{
      email: string;
    }>
  >;
}

const EmailInput = ({ form, setForm }: Props) => {
  return (
    <div className={LoginCSS.inputField}>
      <input
        type="text"
        placeholder="Email"
        required
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <AiOutlineMail className={LoginCSS.reactIcon} />
    </div>
  );
};

export default EmailInput;
