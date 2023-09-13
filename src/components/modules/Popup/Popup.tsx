import { useEffect, useState } from "react";
import LoginModal from "../Login/Modal/LoginModal";
import Signup from "../Signup/Signup";
import "./Popup.scss";

interface PopupProps {
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  const [signup, setSignUp] = useState(true);

  const toggleSignUp = () => setSignUp((prev) => !prev);

  useEffect(() => {
    setTimeout(() => {
      const wrapper = document.querySelector(".popupWrapper");
      wrapper?.classList.add("open");
    }, 100);
  }, []);

  return (
    <div className="popupWrapper flex align-center justify-center">
      {signup ? (
        <Signup isPopup closeHandler={onClose} switchHandler={toggleSignUp} />
      ) : (
        <LoginModal
          isPopup
          closeHandler={onClose}
          switchHandler={toggleSignUp}
        />
      )}
    </div>
  );
};

export default Popup;
