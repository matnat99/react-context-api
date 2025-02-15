import { useParams, useNavigate, Navigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Post() {
  const [post, setPost] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((error) => {
        if (error.status === 404) {
          navigate("/404");
        }
      });
  }, [id, navigate]);

  return (
    <div className="container">
      <div className="post-page">
        <Link to="/feed">↩ Torna alle ricette</Link>
        <div className="post-container">
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <div className="post-img-container">
            <img src={post.image} alt={post.title} />
          </div>
          <p>{post.recipe}</p>
          <ul className="tags-list">
            {post.tags &&
              post.tags.map((tag, index) => (
                <li key={index}>
                  <a href="#">#{tag}</a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
