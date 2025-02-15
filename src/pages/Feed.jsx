import { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../components/PostCard";

const initialData = {
  title: "",
  content: "",
  image: "",
  tags: "",
};

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState(initialData);

  const fetchPosts = () => {
    axios.get("http://localhost:3000/posts").then((res) => setPosts(res.data));
  };

  useEffect(fetchPosts, []);

  return (
    <section className="container">
      <div className="feed">
        <h1>Ricette</h1>
        <div className="list-container">
          <ul className="post-list">
            {posts.map((post) => (
              <li key={post.id}>
                <PostCard post={post} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
