import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";

const links = [
  { href: "", icon: <FaDiscord size={24} color="#eff6ff " /> },
  { href: "", icon: <FaGithub size={24} color="#eff6ff " /> },
  { href: "", icon: <FaLinkedin size={24} color="#eff6ff " /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-black py-8 text-blue-50">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm md:text-left">
          &copy; Nova 2024. All rights reserved
        </p>

        <div className="flex justify-center gap-4 md:justify-start">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
