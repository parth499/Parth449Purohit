import React, { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useDarkMode } from "../Components/DarkModeContext";
import logo from "../Images/logo.jpg";
import { motion, useAnimation } from "framer-motion";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const location = useLocation();
  const controls = useAnimation();

  // Floating bubble animation config
  const floatingBubbles = [...Array(5)].map((_, i) => ({
    id: i,
    size: Math.random() * 40 + 20,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5
  }));

  // Shimmer animation for hire me button
  const shimmerVariant = {
    initial: { backgroundPosition: "0% 50%" },
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: { duration: 4, repeat: Infinity, ease: "linear" }
    }
  };

  // Activate floating animation on hover
  const floatAnimation = {
    rest: { y: 0 },
    float: {
      y: [0, -5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/Skills" },
    { name: "Projects", path: "/Project" },
    { name: "Experience", path: "/Experience" },
    { name: "Certification", path: "/Certification" }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 15, stiffness: 100 }}
        className={`fixed w-full z-50 py-2 sm:py-3 px-4 sm:px-6  font-semibold backdrop-blur-lg border-b rounded-b-2xl sm:rounded-b-3xl shadow-lg sm:shadow-2xl ${
          isDarkMode
            ? "bg-gray-900/95 text-white border-gray-700 shadow-purple-900/20"
            : "bg-white/95 text-gray-900 border-gray-200 shadow-gray-400/20"
        }`}
      >
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
          {/* Logo with floating animation - smaller on mobile */}
          <motion.div
            initial="rest"
            whileHover="float"
            variants={floatAnimation}
            className="flex items-center gap-2 sm:gap-3"
          >
            <motion.img
              src={logo}
              alt="Logo"
              className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full object-cover border-2 border-purple-500 shadow-md sm:shadow-lg"
              animate={{
                scale: [1, 1.05, 1]
              }}
              transition={{
                rotate: {
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                },
                scale: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "mirror"
                }
              }}
            />
          </motion.div>

          {/* Navigation Links - smaller and more compact on mobile */}
          <motion.ul
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.4
                }
              }
            }}
            className="flex flex-wrap justify-center gap-1 sm:gap-3"
          >
            {navItems.map((item) => (
              <motion.li
                key={item.path}
                variants={{
                  hidden: { y: -15, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { type: "spring", stiffness: 300 }
                  }
                }}
                whileHover={{
                  scale: 1.05,
                  textShadow: "0 0 8px rgba(192, 132, 252, 0.8)"
                }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Link
                  to={item.path}
                  className={`px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full transition-all duration-300 flex items-center text-1xl sm:text-sm md:text-base ${
                    location.pathname === item.path
                      ? isDarkMode
                        ? "text-white bg-purple-600/30"
                        : "text-gray-900 bg-purple-200"
                      : isDarkMode
                      ? "text-gray-300 hover:text-white hover:bg-gray-800"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute left-1/2 bottom-0 w-3 h-0.5 sm:w-4 sm:h-1 bg-purple-400 rounded-full -translate-x-1/2"
                      transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                    />
                  )}
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          {/* Action Buttons - more compact on mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-2 sm:gap-3 items-center"
          >
            <motion.button
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className={`px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-1 sm:gap-2 text-1xl sm:text-sm ${
                isDarkMode
                  ? "bg-gray-800 text-white border-gray-700 hover:bg-gray-700"
                  : "bg-gray-200 text-gray-800 border-gray-300 hover:bg-gray-300"
              } border transition-all`}
            >
              <motion.span
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "mirror"
                }}
              >
                {isDarkMode ? "🌞" : "🌚"}
              </motion.span>
              <span className="hidden sm:inline">{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
            </motion.button>

            <motion.button
              variants={shimmerVariant}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-3 py-1 sm:px-4 sm:py-1.5 md:px-6 md:py-2 rounded-full text-white font-medium relative overflow-hidden text-xs sm:text-sm"
              style={{
                background: `linear-gradient(90deg, #7e22ce, #ec4899, #7e22ce)`,
                backgroundSize: "200% 100%"
              }}
            >
              <span className="relative z-10">Hire Me</span>
              <motion.span
                className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.1 }}
              />
            </motion.button>
          </motion.div>
        </div>

        {/* Floating background elements - fewer and smaller on mobile */}
        <div className="absolute inset-0 overflow-hidden -z-10 rounded-b-2xl sm:rounded-b-3xl">
          {floatingBubbles.map((bubble) => (
            <motion.div
              key={bubble.id}
              initial={{
                x: `${bubble.x}%`,
                y: `${bubble.y}%`,
                opacity: 0.08
              }}
              animate={{
                x: [`${bubble.x}%`, `${bubble.x + (Math.random() * 30 - 15)}%`],
                y: [`${bubble.y}%`, `${bubble.y + (Math.random() * 20 - 10)}%`],
                opacity: [0.08, 0.15, 0.08]
              }}
              transition={{
                duration: bubble.duration,
                delay: bubble.delay,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className={`absolute rounded-full ${
                isDarkMode
                  ? "bg-gradient-to-br from-purple-500/10 to-pink-500/10"
                  : "bg-gradient-to-br from-purple-300/20 to-pink-300/20"
              }`}
              style={{
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                filter: "blur(6px)"
              }}
            />
          ))}
        </div>
      </motion.nav>

      {/* Adjusted padding for mobile */}
      <div className={`pt-20 sm:pt-24 md:pt-28 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;