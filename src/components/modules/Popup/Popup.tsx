import LoginModal from "../Login/Modal/LoginModal";
import "./Popup.scss";

interface PopupProps {
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  return (
    <div className="popupWrapper flex align-center justify-center">
      <LoginModal isPopup closeHandler={onClose} />
    </div>
  );
};

export default Popup;
