import "./CustomButton.scss";

interface CustomButtonProps {
  label: string;
  handler: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ label, handler }) => {
  const handleClick = () => handler();

  return (
    <button className="btn" onClick={handleClick}>
      {label}
    </button>
  );
};

export default CustomButton;
