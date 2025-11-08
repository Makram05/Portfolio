import logo from "../assets/logo.png";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const Navigation = () => {
  return (
    <div className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} alt="logo" className="mx-2" width={100} />
        </a>
      </div>

      <div className="m-8 flex items-center justify-center gap-6">
        <a
          href="https://www.linkedin.com/in/moghal-mohammed-akram-258475282"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin"
        >
          <BsLinkedin size={30} className="bg-[#ffff] text-blue-500 rounded-[5px] "/>
        </a>

        <a
          href="https://github.com/Makram05"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <BsGithub size={30} className="bg-black text-white rounded-[5px]" />
        </a>
        
         <a
          href="https://www.instagram.com/mohammed_akram_5?igsh=czl3ZmM5bGphYjZp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <BsInstagram size={30} className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white rounded-[5px]" /> 
        </a>

        <a
          href="https://www.facebook.com/prince.akram.58511276?mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="facebook"
        >
          <BsFacebook size={30} className="bg-blue-500 text-white rounded-[5px]" /> 
        </a>
      </div>

    </div>
  );
};

export default Navigation;
