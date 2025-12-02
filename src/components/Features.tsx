import { TiLocationArrow } from "react-icons/ti";
import BentoCard from "./BentoCard";
import BentoTilt from "./BentoTilt";

import feature1 from "../assets/videos/feature-1.mp4";
import feature2 from "../assets/videos/feature-2.mp4";
import feature3 from "../assets/videos/feature-3.mp4";
import feature4 from "../assets/videos/feature-4.mp4";
import feature5 from "../assets/videos/feature-5.mp4";

const Features = () => {
  return (
    <section id="projects" className="bg-black pb-52">
      <div className="container mx-auto px-3 mdLpx-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-2xl text-blue-50">
            Enter My Development Layer
          </p>
          <p className="max-w-md font-circular-web text-xl text-blue-50 opacity-50">
            Explore a curated showcase of projects built with Three.js, Unity,
            GSAP, Flutter, React, and NestJS — from immersive 3D experiences and
            games to high-performance web and mobile applications.
          </p>
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src={feature1}
            title={
              <>
                GS<b>A</b>P Motion Men<b>u</b>
              </>
            }
            description="A dynamic, animation-driven menu experience built with GSAP for smooth, immersive user interaction."
          />
        </BentoTilt>

        <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 border-hsla col-span-2 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src={feature2}
              title={
                <>
                  Pi<b>x</b>eleri<b>o</b>n
                </>
              }
              description="Pixelerion is my creative development agency — whether you need a website, mobile app, desktop software, or a complete digital solution, we're ready to build it for you."
            />
          </BentoTilt>

          <BentoTilt
            className="bento-tilt_1 border-hsla 
          col-span-2 row-span-1 ms-32 md:col-span-1 md:ms-0"
          >
            <BentoCard
              src={feature3}
              title={
                <>
                  <b>T</b>hree <b>J</b>S Met<b>av</b>erse
                </>
              }
              description="Step into a 3D metaverse experience built with Three.js — explore, interact, and witness the future of web-based immersive worlds."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 border-hsla col-span-2 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src={feature4}
              title={
                <>
                  <b>U</b>nity De<b>v</b>elopmen<b>t</b>
                </>
              }
              description="Crafting immersive 2D and 3D games with Unity — from fun gameplay to interactive experiences that captivate players."
            />
          </BentoTilt>

          <div className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-500 p-5">
              <h1 className="bento-title special-font max-w-64 text-black">
                A<b>n</b>d a lo<b>t</b> m<b>o</b>re!
              </h1>
              <p className="mt-3 max-w-64 text-xs md:text-base">
                From interactive websites and mobile apps to 3D worlds,
                AI-powered experiences, and secure software solutions, I bring
                your ideas to life across every platform.
              </p>

              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </div>

          <div className="bento-tilt-2">
            <div className="absolute inset-0	bg-black/10 bg-linear-to-b from-black/40 via-black/60 to-black/40" />
            <video
              src={feature5}
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
