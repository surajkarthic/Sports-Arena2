import {
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { FooterString } from "../Commons/FooterComponentString";
import { HeaderStrings } from "../Commons/HeaderComponentString";

const Footer = () => {
  return (
    <footer  id="contact" className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 md:flex md:justify-between md:items-start gap-8">
        
        <div className="md:w-1/2">
          <h3 className="font-bold mb-4 text-lg">{FooterString.Contact_US}</h3>
          <p className="text-sm">
            {FooterString.Address_Heading} <br />
            {FooterString.Address}
          </p>
          <p className="text-sm mt-2">{FooterString.Email}</p>

          <div className="w-full h-40 pt-5">
            <iframe 
              title="Sports Arena"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.986862697203!2d76.90419487452037!3d11.039611554285164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85fa6b987f69b%3A0x1dfe4bfa2e0f3d04!2sSports%20Arena!5e0!3m2!1sen!2sin!4v1759568975071!5m2!1sen!2sin"
              className="w-full h-full rounded-lg"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
<div className="md:w-1/2 flex flex-col items-start md:items-end mt-6 md:mt-0">
  <h3 className="font-bold mb-4 text-lg text-left md:text-right">{FooterString.Contact_Follow}</h3>
  <div className="flex justify-start space-x-3">
    <a 
      href="https://wa.me/9363705115" 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-green-500 p-2 rounded-full text-white hover:bg-green-600"
    >
      <FaWhatsapp />
    </a>
    <a 
      href="https://www.instagram.com/sportsarena_cbe/?igsh=MWttM2Vucm52b2NkbA%3D%3D#" 
      className="bg-pink-500 p-2 rounded-full text-white hover:bg-pink-600"
    >
      <FaInstagram />
    </a>
  </div>
</div>

      </div>

      <div className="border-t border-white/30 mt-4 py-4 flex flex-col md:flex-row justify-between items-center px-4 max-w-7xl mx-auto text-sm">
        <div className="flex items-center space-x-3 mb-2 md:mb-0">
          <div className="font-extrabold tracking-wider cursor-pointer font-masque text-2xl text-center whitespace-nowrap">
            {HeaderStrings.SPORTS_ARENA}
          </div>
        </div>
        <p>{FooterString.CopyRight}</p>
      </div>
    </footer>
  );
};

export default Footer;
