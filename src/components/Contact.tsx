import Button from "./Button";
import ImageClipBox from "./ImageClipBox";

import contact1 from "../assets/img/contact-1.webp";
import contact2 from "../assets/img/contact-2.webp";
import swordman from "../assets/img/swordman.webp";

const Contact = () => {
  const handleContactClick = () => {
    const email = "yahyanashar22@gmail.com";
    const subject = encodeURIComponent("Hello Yahya");
    const body = encodeURIComponent(
      "Hi Yahya, I would like to connect with you regarding a new project..."
    );
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox src={contact1} clipClass="contact-clip-path-2" />
          <ImageClipBox
            src={contact2}
            clipClass="contact-clip-path-2 lg:translate-y-20 translate-y-60"
          />
        </div>
        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src={swordman}
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="font-general text-xl md:text-2xl uppercase mix-blend-difference z-100">
            Get in Touch
          </p>
          <p className="special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem] z-100 mix-blend-difference">
            Let's c<b>o</b>nnect <br /> <b>a</b>nd t<b>u</b>rn yo<b>u</b>r{" "}
            <br /> id<b>e</b>as int<b>o</b> r<b>e</b>ality
          </p>

          <Button
            id="contact-us"
            title="contact me"
            onClick={handleContactClick}
            containerClass="mt-10 cursor-pointer hover:bg-violet-500 hover:text-white ease-in-out duration-300 hover:scale-150"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
