import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero from "./components/Hero";
import About from "./components/About";
import Nav from "./components/Nav";
import Features from "./components/Features";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Features />
    </main>
  );
};

export default App;
