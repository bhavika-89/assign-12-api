import React, { useState, useEffect } from "react";
import { fetchPosts, Post } from "./api";
import PostForm from "./components/Postform";
import PostList from "./components/Postlist";
import "./style.css";

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      const fetchedPosts = await fetchPosts();
      setPosts(fetchedPosts);
    };
    loadPosts();
  }, []);

  const addNewPost = (newPost: Post) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="container">
      <PostForm addNewPost={addNewPost} />
      <PostList posts={posts} />
    </div>
  );
};

export default App;
