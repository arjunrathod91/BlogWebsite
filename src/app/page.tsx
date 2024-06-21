"use client"
import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import axios from "axios";

export default function Home() {
  const submit = ()=>{
    axios
      .get("https://restapi-hsoe.onrender.com/tasks")
      .then((response) => console.log(response.data))
      .catch((err) => console.error("Error fetching tasks:", err));
  }
  return (
    <div className="">
      <Navbar/>
      <h1>Blog Website</h1>
      <h2 onClick={submit}>Tasks</h2>
    </div>
  );
}
