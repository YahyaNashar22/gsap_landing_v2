import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero from "./components/Hero";
import About from "./components/About";
import Nav from "./components/Nav";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
    </main>
  );
};

export default App;
