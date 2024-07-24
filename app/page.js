import Hero from "@/components/Hero";
import RunningText from "@/components/RunningText";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Features from "@/components/Features";

export default function Home() {
  return (
    <>
      <RunningText />
      <Navbar />
      <Features />
      <Hero />
      <Footer />
    </>
  );
}
