import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeaderStrings } from "../Commons/HeaderComponentString";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = [HeaderStrings.Home,HeaderStrings.About_Us];

    return (
        <header className="sticky top-0 z-50 bg-blue-900 text-white shadow-lg">
            <div className="max-w-7xl mx-auto flex flex-col items-center p-4 w-full">
                <div className="flex w-full items-center justify-between">
                    <div className="md:hidden w-8"></div>

<div className="flex flex-col items-center flex-1">
    <div className="font-extrabold tracking-wider cursor-pointer font-masque
        text-2xl sm:text-5xl md:text-6xl lg:text-7xl text-center whitespace-nowrap">
        {HeaderStrings.SPORTS_ARENA}
    </div>
    <div className="text-xl sm:text-3xl md:text-4xl lg:text-4xl font-teko text-green-400 mt-1 text-center break-words">
        {HeaderStrings.GEAR_UP_GAME_ON}
    </div>
</div>


                    <button
                        className="md:hidden text-3xl focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        &#9776;
                    </button>
                </div>
                <nav className="hidden md:flex gap-6 mt-4 mb-2">
                    {menuItems.map((link) => (
                        <a
                            key={link}
                            href={`${link.toLowerCase().replace(/\s+/g, "")}`}
                            className="hover:text-cyan-400 text-xl font-semibold transition-colors"
                        >
                            {link}
                        </a>
                    ))}
                </nav>

                {/* Mobile Side Panel */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{ x: "100%" }}       // start from right
                            animate={{ x: 0 }}            // slide to position
                            exit={{ x: "100%" }}          // slide out to right
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed top-0 right-0 h-full w-64 bg-blue-800 shadow-lg z-50 flex flex-col p-6"
                        >
                            <button
                                className="text-2xl mb-6 self-end focus:outline-none"
                                onClick={() => setMenuOpen(false)}
                            >
                                &times;
                            </button>

                            {menuItems.map((link) => (
                                <a
                                    key={link}
                                    href={`${link.toLowerCase().replace(/\s+/g, "")}`}
                                    className="hover:text-cyan-400 font-semibold mb-4 text-lg transition-colors"
                                    onClick={() => setMenuOpen(false)} // close menu on click
                                >
                                    {link}
                                </a>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </header>
    );
};

export default Header;
