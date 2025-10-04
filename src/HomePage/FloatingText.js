import { motion } from "framer-motion";

const NewsTicker = () => {
  const text = "Delivering premium sports equipment designed for performance, durability, and excellence. At Sports Arena, quality meets passion — empowering every athlete to achieve more. ";

  return (
    <div className="overflow-hidden whitespace-nowrap bg-gray-900 py-2">
      <motion.div
        className="inline-block text-white font-arialblack text-lg sm:text-xl md:text-2xl"
        animate={{ x: ["0%", "-50%"] }} // move half of total width
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 50, // slower speed
          ease: "linear",
        }}
      >
        <span>{text}</span>
        <span>{text}</span> {/* repeat for seamless loop */}
      </motion.div>
    </div>
  );
};

export default NewsTicker;
