import { useState } from "react";
import d from "../../../../shared/dictionary";
import CustomFormInput from "../../../ui/CustomFormInput/CustomFormInput";
import "./LoginModal.scss";
import CustomButton from "../../../ui/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";
import { LIBRARY_PATH } from "../../../../shared/paths";

const LoginModal = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => navigate(LIBRARY_PATH);

  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <div className="headingContainer">
          <p className="welcome">{d.EN.LOGIN_MODAL.TITLE.WELCOME_BACK}</p>
          <p className="login">{d.EN.LOGIN_MODAL.TITLE.LOGIN_ACCOUNT}</p>
        </div>

        <div className="inputContainer flex flex-col">
          <CustomFormInput
            label={d.EN.LOGIN_MODAL.INPUT.EMAIL_LABEL}
            placeholder={d.EN.LOGIN_MODAL.INPUT.EMAIL_PLACEHOLDER}
            value={username}
            setValue={setUsername}
          />

          <CustomFormInput
            label={d.EN.LOGIN_MODAL.INPUT.PASSWORD_LABEL}
            placeholder={d.EN.LOGIN_MODAL.INPUT.PASSWORD_PLACEHOLDER}
            value={password}
            setValue={setPassword}
            isPassword
          />
        </div>

        <div className="btnContainer">
          <CustomButton
            label={d.EN.LOGIN_MODAL.LOGIN_BTN}
            handler={handleLogin}
          />

          <div className="registerContainer">
            <span>{d.EN.LOGIN_MODAL.NOT_REGISTERD}</span>
            <span className="register">{d.EN.LOGIN_MODAL.REGISTER_BTN}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
