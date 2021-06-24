import { createContext, useState } from "react";

export const PostContext = createContext(null);

function Post({ children }) {
  const [postview, setPostView] = useState([]);
  return (
    <PostContext.Provider value={{ postview, setPostView }}>
      {children}
    </PostContext.Provider>
  );
}
export default Post;
