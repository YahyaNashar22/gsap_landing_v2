import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero from "./components/Hero";
import About from "./components/About";
import Nav from "./components/Nav";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const App = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    // Wait for window load or other global assets
    const handleLoad = () => setIsLoaded(true);

    if (document.readyState === "complete") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsLoaded(true);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      {!isLoaded && <Loader />}
      {isLoaded && (
        <>
          <Nav />
          <Hero />
          <About />
          <Features />
          <Story />
          <Contact />
          <Footer />
        </>
      )}
    </main>
  );
};

export default App;
