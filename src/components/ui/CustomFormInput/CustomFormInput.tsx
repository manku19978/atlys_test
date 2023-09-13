import { SetStateAction, Dispatch } from "react";
import d from "../../../shared/dictionary";
import "./CustomFormInput.scss";

interface CustomFormInputProps {
  label: string;
  placeholder: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  isPassword?: boolean;
}

const CustomFormInput: React.FC<CustomFormInputProps> = ({
  label,
  placeholder,
  value,
  setValue,
  isPassword,
}) => {
  const handleChange = (e: any) => setValue(e.target.value);

  return (
    <div className="inputContainer">
      <div className="labelContainer flex justify-between">
        <span className="main">{label}</span>

        {isPassword && (
          <span className="forgot">
            {d.EN.LOGIN_MODAL.INPUT.FORGET_PASSWROD}
          </span>
        )}
      </div>

      <input
        className="input"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default CustomFormInput;
