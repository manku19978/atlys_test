import { useState } from "react";
import CreatePost from "../CreatePost/CreatePost";
import Post from "../Post/Post";
import initialPostList from "../../../utils/config";
import "./Library.scss";

const Library = () => {
  const [posts, setPosts] = useState(initialPostList);

  const postList = posts.map((post, index) => {
    return <Post key={index} data={post} />;
  });

  return (
    <div className="wrapper">
      <div className="libraryContainer">
        <div className="headerContainer">
          <p className="name">Hello Jane</p>
          <p className="greeting">
            How are you doing today? Would you like to share something with the
            community 🤗
          </p>
        </div>

        <div className="postContainer flex flex-col">
          <CreatePost />
          {postList}
        </div>
      </div>
    </div>
  );
};

export default Library;
