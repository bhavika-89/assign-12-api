import React, { useState } from "react";
import { createPost, Post } from "../api";

interface PostFormProps {
  addNewPost: (newPost: Post) => void;
}

const PostForm: React.FC<PostFormProps> = ({ addNewPost }) => {
  const [formData, setFormData] = useState<Post>({
    userId: 0,
    title: "",
    body: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newPost = await createPost(formData);
    if (newPost) {
      addNewPost(newPost);
      setFormData({ userId: 0, title: "", body: "" });
    }
  };

  return (
    <div>
      <h2>Create a Post</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="number"
          name="userId"
          value={formData.userId}
          onChange={handleChange}
          placeholder="User ID"
          required
        />
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <textarea
          name="body"
          value={formData.body}
          onChange={handleChange}
          placeholder="Body"
          required
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default PostForm;
