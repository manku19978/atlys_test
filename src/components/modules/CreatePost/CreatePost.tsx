import d from "../../../shared/dictionary";
import CustomButton from "../../ui/CustomButton/CustomButton";
import "./CreatePost.scss";

const CreatePost = () => {
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
        <CustomButton label={d.EN.CREATE_POST.POST_BTN} handler={() => {}} />
      </div>
    </div>
  );
};

export default CreatePost;
