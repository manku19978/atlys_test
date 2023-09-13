import d from "../../../shared/dictionary";
import CustomButton from "../../ui/CustomButton/CustomButton";
import "./CreatePost.scss";

interface CreatePostProps {
  openPopup: () => void;
}

const CreatePost: React.FC<CreatePostProps> = ({ openPopup }) => {
  return (
    <div className="createContainer">
      <p className="title">{d.EN.CREATE_POST.TITLE}</p>

      <div className="create flex align-center">
        <div className="msgLogo flex justify-center align-center">💬</div>
        <input
          type="text"
          className="postInput"
          placeholder={d.EN.CREATE_POST.PLACEHOLDER}
        />
      </div>

      <div className="postBtn">
        <CustomButton label={d.EN.CREATE_POST.POST_BTN} handler={openPopup} />
      </div>
    </div>
  );
};

export default CreatePost;
