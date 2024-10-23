import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
    {
        id: 1,
        title: "Going to Kolkata",
        body: "Hi friends, I am going to Kolkata to meet my family & refreshment",
        reactions: 12,
        userId: "user_7",
        tags: ['vacation', 'family', 'enjoy'],
    },
    {
        id: 2,
        title: "Going to Kashmir",
        body: "Hi friends, I am going to Kashmir to meet my family & refreshment",
        reactions: 2,
        userId: "user_5",
        tags: ['family', 'love', 'travel'],
    },
    {
        id: 3,
        title: "Going to Kunner",
        body: "Hi friends, I am going to Kunner to meet my family & refreshment",
        reactions: 17,
        userId: "user_4",
        tags: ['journey', 'home', 'refreshment'],
    },
];

export default PostListProvider;
