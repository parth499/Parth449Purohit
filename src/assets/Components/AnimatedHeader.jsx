import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className={`fixed top-0 left-0 right-0 z-50 mx-auto max-w-7xl px-6 py-3 rounded-b-xl ${
        isScrolled ? 'backdrop-blur-md bg-opacity-80' : 'bg-opacity-100'
      } ${
        theme === 'dark'
          ? 'bg-gray-900 text-white shadow-lg shadow-purple-900/20'
          : 'bg-white/90 text-gray-900 shadow-md'
      } transition-all duration-300 ease-in-out`}
    >
      <div className="flex items-center justify-between">
        {/* Logo with animation */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2"
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              repeatType: 'mirror',
              duration: 4,
              ease: 'easeInOut',
            }}
            className={`w-8 h-8 rounded-full ${
              theme === 'dark' ? 'bg-purple-500' : 'bg-purple-600'
            }`}
          />
          <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Animax
          </span>
        </motion.div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {['home', 'about', 'work', 'contact'].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
              onClick={() => setActiveLink(item)}
            >
              <button
                className={`capitalize px-3 py-1.5 rounded-lg font-medium ${
                  activeLink === item
                    ? theme === 'dark'
                      ? 'text-white'
                      : 'text-gray-900'
                    : theme === 'dark'
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-500 hover:text-gray-900'
                } transition-colors`}
              >
                {item}
              </button>
              {activeLink === item && (
                <motion.div
                  layoutId="activeLink"
                  className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                    theme === 'dark' ? 'bg-purple-400' : 'bg-purple-600'
                  }`}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </motion.div>
          ))}
        </nav>

        {/* Theme Toggle and Mobile Menu */}
        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className={`p-2 rounded-full ${
              theme === 'dark'
                ? 'bg-gray-800 text-yellow-300'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            {theme === 'dark' ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </motion.button>

          {/* Mobile menu button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 rounded-full focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden rounded-b-xl -z-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              opacity: 0.1,
            }}
            animate={{
              x: [null, Math.random() * 200 - 100],
              y: [null, Math.random() * 200 - 100],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
            }}
            className={`absolute rounded-full ${
              theme === 'dark'
                ? 'bg-purple-500/20'
                : 'bg-purple-300/30'
            }`}
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
            }}
          />
        ))}
      </div>
    </motion.header>
  );
};

export default AnimatedHeader;