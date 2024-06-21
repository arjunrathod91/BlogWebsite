"use client"
import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import axios from "axios";

export default function Home() {
  const submitBtn = ()=>{
    axios
      .get("https://restapi-hsoe.onrender.com/tasks")
      .then((response) => console.log(response.data))
      .catch((err) => console.error("Error fetching tasks:", err));
  }
  return (
    <div className="">
      <Navbar/>
      <h1>new Blog Website</h1>
      <h2 onClick={submitBtn}>Tasks</h2>
    </div>
  );
}
