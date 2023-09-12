import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Layout.scss";
import Loader from "../../ui/Loader/Loader";

const Layout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const redirectHandler = () => {
    if (isAuthenticated) navigate("/library");
    else navigate("/login");
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
