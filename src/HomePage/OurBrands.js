import { motion } from "framer-motion";
import AkkashNeIcon from '../Assets/HomePageAssets/Akkashne.jpg';
import CockaTooIcon from '../Assets/HomePageAssets/CockaToo.jpg';
import CosCoIcon from '../Assets/HomePageAssets/Cosco.jpg';
import KaizeIcon from '../Assets/HomePageAssets/Kaizen.jpg';
import NiviaIcon from '../Assets/HomePageAssets/Nivia.jpg';
import RebokIcon from '../Assets/HomePageAssets/Rebok.jpg';
import RXNIcon from '../Assets/HomePageAssets/RXN.jpg';
import SgIcon from '../Assets/HomePageAssets/SG.jpg';
import XpeedIcon from '../Assets/HomePageAssets/XPEED.jpg';
import { HomePageString } from "../Commons/HomePageStrings";

export default function PartnersSection() {
  const partners = [
    { name: HomePageString.Akkash_ne, logo: AkkashNeIcon },
    { name: HomePageString.CockaToo, logo: CockaTooIcon },
    { name: HomePageString.CosCo, logo: CosCoIcon },
    { name: HomePageString.Kaizen, logo: KaizeIcon },
    { name: HomePageString.Nivia, logo: NiviaIcon },
    { name: HomePageString.ReeBok, logo: RebokIcon },
    { name: HomePageString.RXN, logo: RXNIcon },
    { name: HomePageString.Sg, logo: SgIcon },
    { name: HomePageString.Xpeed, logo: XpeedIcon },
  ];

  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="w-full py-16 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="ffont-extrabold tracking-wider cursor-pointer font-masque
        text-2xl sm:text-5xl md:text-6xl lg:text-7xl text-center whitespace-nowrap pb-5"
      >
        Our Brands
      </motion.div>

      <div className="bg-blue-900 py-8 md:py-12 overflow-hidden">
        <motion.div
          className="flex"
          animate={{
            x: [0, '-50%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedPartners.map((partner, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 mx-3 sm:mx-6 md:mx-8 bg-white rounded-lg shadow-lg p-3 sm:p-4 md:p-6 w-32 h-20 sm:w-40 sm:h-24 md:w-44 md:h-28 flex items-center justify-center"
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
