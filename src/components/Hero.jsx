import profilepic from "../assets/profilepic.jpeg";
import resume from "../assets/resume.pdf";
import { motion } from "framer-motion";

const containerVarient = {
  hidden: { opacity: 0, x:-400 },
  visible: {
    opacity: 1,
    x: 0,
  },
    transition: {
      duration: 1,
      staggerChildrem: 1,
    },
};

const childVarient = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">

      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={profilepic}
              alt="profile-pic"
              width={350}
              height={350}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className=" border border-stone-900 rounded-3xl hover:shadow-lg shadow-teal-300"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            
            variants={containerVarient}
            className="flex flex-col items-center lg:items-start mt-10"
          >
            <motion.h2
              variants={childVarient}
              className="pb-2 text-4xl tracking-tight lg:text-6xl mb-2"
            >
              Moghal MD Akram
            </motion.h2>
            <motion.span
              variants={childVarient}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text
                text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={childVarient}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed 
                tracking-tighter"
            >
              Results-driven and enthusiastic Fresher Full-Stack Developer with
              a solid foundation in both front-end (React, JavaScript) and
              back-end development (Java Spring Boot, Python FastAPI, MySQL).
              Eager to leverage problem-solving skills and project experience,
              to contribute to innovative and scalable web solutions
            </motion.p>

            <motion.a
              variants={childVarient}
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white text-md rounded-full p-4 mb-4 text-stone-800 "
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
