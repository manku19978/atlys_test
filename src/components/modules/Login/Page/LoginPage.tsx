import { Logo } from "../../../icons";
import LoginModal from "../Modal/LoginModal";
import "./LoginPage.scss";

const LoginPage = () => {
  return (
    <div className="wrapper flex justify-center align-center">
      <div className="flex flex-col align-center">
        <div className="logoContainer">
          <Logo />
        </div>

        <LoginModal />
      </div>
    </div>
  );
};

export default LoginPage;
