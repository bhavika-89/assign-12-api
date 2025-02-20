import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export interface Post {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response = await axios.get<Post[]>(API_URL);
    return response.data.slice(0, 10); 
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

export const createPost = async (postData: Post): Promise<Post | null> => {
  try {
    const response = await axios.post<Post>(API_URL, postData);
    return response.data;
  } catch (error) {
    console.error("Error creating post:", error);
    return null;
  }
};
