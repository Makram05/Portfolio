import { CONTACT } from "../content/Projects"
import { FaAddressCard } from "react-icons/fa"
import { PiPhoneCallBold } from "react-icons/pi"
import { MdEmail, MdMarkEmailRead, MdOutlineEmail } from "react-icons/md"
import { motion } from "framer-motion"
const Contact = () => {
  return (
    <div className=" border-t-2 border-stone-900 pb-20">
        <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
        className="my-10 font-semibold text-4xl text-center">Get In Touch</motion.h1>
        <div className="text-center tracking-tight text-sm">
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1}}
            className="flex justify-center  gap-4 pb-4">
                <FaAddressCard className="text-xl text-yellow-100" />
                <p >{CONTACT.address}</p>
            </motion.div>
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:1}}
            className="flex justify-center  gap-4 pb-4">
                <PiPhoneCallBold className="text-xl text-green-700" />
                <a href="tel:+919573547546">{CONTACT.phone}</a>
            </motion.div>
             <motion.div 
             whileInView={{opacity:1,x:0}}
             initial={{opacity:0,x:-100}}
             transition={{duration:1}}
             className="flex justify-center  gap-4 pb-4">
                <MdOutlineEmail className="text-xl bg-yellow-50 text-red-700 rounded-md" />
                <a href="mailto:akram94407@gmail.com">{CONTACT.email}</a>
            </motion.div>
        </div>
    </div>
  )
}

export default Contact