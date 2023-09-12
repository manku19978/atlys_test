import "./CustomButton.scss";

interface CustomButtonProps {
  label: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ label }) => {
  const handleClick = () => console.log("hi");

  return (
    <button className="btn" onClick={handleClick}>
      {label}
    </button>
  );
};

export default CustomButton;
