import { motion } from "framer-motion";
import { HomePageString } from "../Commons/HomePageStrings";

const NewsTicker = () => {
  const text = HomePageString.FLOATING_TEXT;

  return (
    <div className="overflow-hidden whitespace-nowrap bg-sand py-2">
      <motion.div
        className="inline-block text-black font-arialblack text-lg sm:text-xl md:text-xl"
        animate={{ x: ["0%", "-50%"] }} 
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear",
        }}
      >
        <span>{text}</span>
        <span>{text}</span> 
      </motion.div>
    </div>
  );
};

export default NewsTicker;
