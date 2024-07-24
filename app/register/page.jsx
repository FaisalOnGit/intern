import React from "react";
import Register from "@/components/Register";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RunningText from "@/components/RunningText";

export default function page() {
  return (
    <>
      <RunningText />
      <Navbar />
      <Register />
      <Footer />
    </>
  );
}
