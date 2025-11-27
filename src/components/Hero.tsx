import { useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Loader from "./Loader";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [hasClicked, setHasClicked] = useState<boolean>(false);
  const [loadedVideos, setLoadedVideos] = useState<number>(0);

  const totalVideos = 4;
  const previewVideoRef = useRef<HTMLVideoElement | null>(null);
  const nextVideoRef = useRef<HTMLVideoElement | null>(null);

  const allLoaded = loadedVideos >= totalVideos;

  const handleVideoLoad = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    if (!e.currentTarget.dataset.loaded) {
      e.currentTarget.dataset.loaded = "true";
      setLoadedVideos((prev) => prev + 1);
    }
  };
  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  const handleMiniVdClick = () => {
    setHasClicked(true);

    setCurrentIndex(upcomingVideoIndex);
  };

  const getVideoSrc = (index: number) => `videos/hero-${index}.mp4`;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "Yahya Nashar Full Stack Engineer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });

        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => {
            nextVideoRef.current!.play();
          },
        });

        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
      borderRadius: "0 0 40% 10%",
    });

    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <div id="resume" className="relative h-dvh w-screen overflow-x-hidden">
      {allLoaded && <Loader />}
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVdClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                ref={previewVideoRef}
                src={getVideoSrc(upcomingVideoIndex)}
                loop
                muted
                id="current-video"
                className="size-64 origin-center object-cover object-center scale-150"
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>

          <video
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
          />

          <video
            src={getVideoSrc(currentIndex)}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
          />
        </div>
        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-50">
          S<b>o</b>ftwar<b>e</b> <br /> <b>E</b>ngin<b>ee</b>r
        </h1>
        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-25 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              Y<b>a</b>h<b>y</b>a <br /> N<b>a</b>sh<b>a</b>r
            </h1>

            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Building Innovative Solutions <br /> for a Digital Future
            </p>
            <Button
              id="download-resume"
              title="Download Resume"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-300! flex-center gap-1 hover:bg-white! ease-in-out duration-300 hover:-translate-y-3"
              onClick={handleDownload}
            />
          </div>
        </div>
      </div>
      <h1 className="special-font hero-heading absolute bottom-5 right-5  text-black">
        S<b>o</b>ftwar<b>e</b> <br /> <b>E</b>ngin<b>ee</b>r
      </h1>
    </div>
  );
};

export default Hero;
