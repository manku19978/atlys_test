import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../ui/Loader/Loader";
import { LOGIN_PATH, LIBRARY_PATH } from "../../../shared/paths";
import "./Layout.scss";

const Layout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const redirectHandler = () => {
    if (isAuthenticated) navigate(LIBRARY_PATH);
    else navigate(LOGIN_PATH);
  };

  useEffect(() => {
    setTimeout(() => {
      redirectHandler();
    }, 3000);
  }, []);

  return (
    <div className="wrapper flex justify-center align-center">
      <Loader />
    </div>
  );
};

export default Layout;
