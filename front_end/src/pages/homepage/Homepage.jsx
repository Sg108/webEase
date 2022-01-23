import axios from "axios";
import { useLocation } from "react-router";
import {useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";

export default function Homepage() {
  const [posts,setposts]=useState([]);
  const {search}=useLocation()
  useEffect(()=>{
    const fetchPosts=async()=>{
     const r= await axios.get("/posts"+search)
     setposts(r.data)
     console.log(r.data)
    }

    fetchPosts()
  },[search])
  const location = useLocation();
  console.log(location);
  return (
       <div>
      <Header />
      <div className="home">
        <Posts posts={posts}/>
        <Sidebar />
      </div>
      </div>
  
  );
}
