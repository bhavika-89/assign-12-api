import React from "react";
import { Post } from "../api";

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div>
      <h2>Posts</h2>
      {posts.length === 0 ? <p>No posts available</p> : null}
      {posts.map((post) => (
        <div key={post.id} style={{ border: "1px solid #ccc", padding: "10px", marginTop: "10px" }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <small>User ID: {post.userId}</small>
        </div>
      ))}
    </div>
  );
};

export default PostList;
