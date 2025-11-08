import { FaGithub} from "react-icons/fa";
import {  RiReactjsLine, RiTailwindCssLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { SiMysql } from "react-icons/si";
import { IoLogoPython } from "react-icons/io";
import { LiaJava } from "react-icons/lia";

const iconsVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24 ">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-10 text-center text-4xl font-semibold"
      >
        Technologies
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-5"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariants(2.5)}
        >
          <RiReactjsLine className="text-6xl rounded-full text-cyan-400 hover:shadow-lg shadow-teal-300" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariants(3)}
          className="p-4"
        >
          <RiTailwindCssLine className="text-6xl bg-white text-cyan-300 rounded-full hover:shadow-lg shadow-teal-300" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariants(5)}
          className="p-4"
        >
          <LiaJava className="text-6xl text-orange-500 border-2 border-gray-400 rounded-2xl bg-yellow-50 hover:shadow-lg shadow-teal-300" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariants(2)}
        >
          <IoLogoPython className="text-6xl text-[#3776AB] bg-white rounded-3xl hover:shadow-lg shadow-teal-300" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariants(6)}
          className="p-4"
        >
          <SiMysql className="p-2 text-6xl bg-blue-400 rounded-2xl hover:shadow-lg shadow-teal-300" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariants(3.5)}
        >
          <FaGithub className="text-6xl rounded-2xl hover:shadow-lg shadow-teal-300" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
