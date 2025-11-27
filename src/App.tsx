import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero from "./components/Hero";

gsap.registerPlugin(useGSAP,ScrollTrigger);

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <section className="z-0 min-h-screen bg-blue-500"></section>
    </main>
  );
};

export default App;
