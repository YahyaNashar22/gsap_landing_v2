import { useEffect, useState } from "react";
import Loader from "./components/Loader";

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
import AudioPlayer from "./components/AudioPlayer";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const App = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Automatically grab all assets inside src/assets
    const assetModules = import.meta.glob(
      "/src/assets/**/*.{png,jpg,jpeg,webp,svg,gif,mp4,webm}",
      { eager: true }
    );

    const assetURLs = Object.values(assetModules).map(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (mod: any) => mod.default
    );
    let loaded = 0;

    const update = () => {
      loaded++;
      const pct = Math.round((loaded / assetURLs.length) * 100);
      setProgress(pct);

      if (pct === 100) {
        setTimeout(() => setLoading(false), 400);
      }
    };

    assetURLs.forEach((url) => {
      // Video
      if (url.endsWith(".mp4") || url.endsWith(".webm")) {
        const v = document.createElement("video");
        v.src = url;
        v.onloadeddata = update;
        v.onerror = update;
      }
      // Image
      else {
        const i = new Image();
        i.src = url;
        i.onload = update;
        i.onerror = update;
      }
    });
  }, []);

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      {loading ? (
        <Loader progress={progress} />
      ) : (
        <>
          <AudioPlayer />
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
