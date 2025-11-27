import { useRef, type MouseEvent } from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import RoundedCorners from "./RoundedCorners";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";

const Story = () => {
  const frameRef = useRef<HTMLImageElement | null>(null);

  const handleLinkedInNavigation = () => {
    const link = document.createElement("a");
    link.href = "https://www.linkedin.com/in/yahya-nashar-693456297/";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;
    if (!element) return;

    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: "power1.inOut",
    });
  };
  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };
  return (
    <section id="experience" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-xl uppercase md:text-2xl">
          My Professional Journey
        </p>

        <div className="relative size-full">
          <AnimatedTitle
            title="Experience, <br /> Skills & Projects"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                  src="/img/entrance.jpg"
                  alt="entrance"
                  className="object-contain"
                />
              </div>
            </div>

            <RoundedCorners />
          </div>
        </div>

        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              I've led and contributed to a variety of enterprise-level
              projects, ranging from e-commerce and FinTech to large-scale
              systems. Experienced in microservices architecture, AWS
              deployments, testing, and cybersecurity, I've worked across
              multiple tech stacks and served as team lead or head programmer
              for numerous companies.
            </p>
            <Button
              id="linkedin-button"
              onClick={handleLinkedInNavigation}
              title="Check My LinkedIn"
              rightIcon={<TiLocationArrow />}
              containerClass="flex justify-items items-center gap-1 mt-5 hover:bg-violet-500 hover:text-white ease-in-out duration-300 hover:translate-x-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
