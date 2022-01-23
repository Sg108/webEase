import axios from "axios";
import { useState,useEffect } from "react";
import { Link ,useLocation} from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
  const location = useLocation()
  const path=location.pathname.split("/")[2]
  const [post,setPost]=useState([])
  useEffect(()=>{
    const getPost = async () => {
      const x=await axios.get("/posts/"+path)
      setPost(x.data)
    }
    getPost()
},[path])
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={post.image}
          alt=""
        />
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
         
          
            <span className="singlePostAuthor">
            Author:
              <Link className="link" to={`/?user=${post.username}`}>
              <b>{post.username}</b>
              </Link>
         
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">
        {post.desc}
        </p>
      </div>
    </div>
  );
}
