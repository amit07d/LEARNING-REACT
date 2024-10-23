import { MdDelete } from "react-icons/md";
import { useContext } from "react";
// Import the context, not the component
import { PostList as PostListData } from "../store/Post-list-store";

const Post = ({ post }) => {
  // Use the correct context
  const { deletePost } = useContext(PostListData);

  return (
    <div className="card post-card" style={{ width: "32rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
            style={{ cursor: "pointer" }}
          >
            <MdDelete />
            <span className="visually-hidden">Delete post</span>
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        <div>
          {post.tags.map((tag, index) => (
            <span key={index} className="badge text-bg-primary mx-1">
              {tag}
            </span>
          ))}
          <div className="alert alert-primary reactions" role="alert">
            This post has been reacted to by {post.reactions} people
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
