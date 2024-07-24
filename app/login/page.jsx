import React from "react";
import Login from "@/components/Login";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RunningText from "@/components/RunningText";

export default function page() {
  return (
    <>
      <RunningText />
      <Navbar />
      <Login />
      <Footer />
    </>
  );
}
