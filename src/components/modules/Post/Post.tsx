import "./Post.scss";

interface IPostType {
  text: string;
  postedAt: string;
  comments: number;
  isEditted?: boolean;
}

interface PostProps {
  data: {
    avatarUrl: string;
    name: string;
    post: IPostType;
  };
}

const Post: React.FC<PostProps> = ({ data }) => {
  const { avatarUrl, name, post } = data;

  return (
    <div className="postWrapper">
      <div className="profileRow">
        <div className="avatarContainer flex align-center">
          <div
            className="imgContainer"
            style={{ backgroundImage: `url(${avatarUrl})` }}
          />

          <div>
            <p className="name">{name}</p>
            <p className="time">{post.postedAt}</p>
          </div>
        </div>
      </div>

      <div className="postText flex">
        <div className="waveIcon flex align-center justify-center">👋</div>
        <p className="text">{post.text}</p>
      </div>
    </div>
  );
};

export default Post;
