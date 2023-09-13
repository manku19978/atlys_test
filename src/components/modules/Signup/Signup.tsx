import { useState } from "react";
import d from "../../../shared/dictionary";
import CustomFormInput from "../../ui/CustomFormInput/CustomFormInput";
import "./Signup.scss";
import CustomButton from "../../ui/CustomButton/CustomButton";
import { Close } from "../../icons";

interface SignupProps {
  isPopup?: boolean;
  closeHandler?: () => void;
  switchHandler?: () => void;
}

const Signup: React.FC<SignupProps> = ({
  isPopup,
  closeHandler,
  switchHandler,
}) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const continueHandler = () => {
    if (isPopup) closeHandler?.();
    else return;
  };

  return (
    <div className="signupWrapper">
      {isPopup && (
        <div
          className="signupCloseBtn flex align-center justify-center"
          onClick={closeHandler}
        >
          <Close />
        </div>
      )}

      <div className="signupTitleContainer">
        <p className="signup">{d.EN.SIGN_UP_MODAL.TITLE.SIGN_UP}</p>
        <p className="createAccount">
          {d.EN.SIGN_UP_MODAL.TITLE.CREATE_ACCOUNT}
        </p>
      </div>

      <div className="signupContainer">
        <div className="signupInputContainer flex flex-col">
          <CustomFormInput
            label={d.EN.SIGN_UP_MODAL.INPUT.EMAIL_LABEL}
            placeholder={d.EN.SIGN_UP_MODAL.INPUT.EMAIL_PLACEHOLDER}
            value={email}
            setValue={setEmail}
          />

          <CustomFormInput
            label={d.EN.SIGN_UP_MODAL.INPUT.USERNAME_LABEL}
            placeholder={d.EN.SIGN_UP_MODAL.INPUT.USERNAME_PLACEHOLDER}
            value={username}
            setValue={setUsername}
          />

          <CustomFormInput
            label={d.EN.SIGN_UP_MODAL.INPUT.PASSWORD_LABEL}
            placeholder={d.EN.SIGN_UP_MODAL.INPUT.PASSWORD_PLACEHOLDER}
            value={password}
            setValue={setPassword}
          />
        </div>

        <div className="signupBtnContainer">
          <CustomButton
            label={d.EN.SIGN_UP_MODAL.CONTINUE_BTN}
            handler={continueHandler}
          />
        </div>

        <div>
          <span className="haveAccount">
            {d.EN.SIGN_UP_MODAL.ALREADY_ACCOUNT}
          </span>
          <span className="signupTxtBtn" onClick={switchHandler}>
            {d.EN.SIGN_UP_MODAL.SIGN_UP_BTN}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
