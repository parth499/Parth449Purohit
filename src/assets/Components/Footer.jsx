import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 }
    }
  };

  const socialIconVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.2, y: -5 },
    tap: { scale: 0.9 }
  };

  const links = {
    personal: [
      { name: "Resources", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Blog", href: "/blog" }
    ],
    help: [
      { name: "Support", href: "/support" },
      { name: "Sign Up", href: "/signup" },
      { name: "Sign In", href: "/signin" }
    ],
    products: [
      { name: "Windframe", href: "/windframe" },
      { name: "Loop", href: "/loop" },
      { name: "Contrast", href: "/contrast" }
    ]
  };

  const socialLinks = [
    { icon: <FaFacebookF />, href: "#", color: "hover:bg-blue-600", bg: "bg-gray-800" },
    { icon: <FaTwitter />, href: "#", color: "hover:bg-blue-400", bg: "bg-gray-800" },
    { icon: <FaInstagram />, href: "#", color: "hover:bg-pink-500", bg: "bg-gray-800" },
    { icon: <FaGithub />, href: "#", color: "hover:bg-gray-700", bg: "bg-gray-800" },
    { icon: <FaLinkedinIn />, href: "#", color: "hover:bg-blue-700", bg: "bg-gray-800" }
  ];

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="relative z-10 overflow-hidden shadow-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 border-t border-gray-300 dark:border-gray-700"
    >
      <div className="container mx-auto px-6 lg:px-20">
        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <motion.div variants={itemVariants}>
            <motion.div className="flex items-center mb-6" whileHover={{ x: 5 }}>
              <motion.span
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
                className="text-3xl font-extrabold bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent drop-shadow-lg"
              >
                Parth Purohit
              </motion.span>
            </motion.div>
            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
              Welcome to my portfolio. Here you'll find all my latest MERN stack projects, designs, and experiments — crafted with precision and passion.
            </motion.p>
            <motion.div variants={containerVariants} className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  variants={itemVariants}
                  whileHover="hover"
                  whileTap="tap"
                  initial="rest"
                  className={`w-10 h-10 ${social.bg} text-white rounded-full flex items-center justify-center ${social.color} transition-colors shadow-lg`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {[{ title: "Personal", links: links.personal }, { title: "Help", links: links.help }, { title: "Products", links: links.products }].map((section, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.h5
                className="text-xl font-semibold mb-6 text-gray-900 dark:text-white tracking-wide"
                whileHover={{ x: 3 }}
              >
                {section.title}
              </motion.h5>
              <motion.ul variants={containerVariants} className="space-y-3">
                {section.links.map((link, i) => (
                  <motion.li
                    key={i}
                    variants={itemVariants}
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors flex items-center"
                    >
                      <motion.span
                        className="w-2 h-2 bg-fuchsia-500 rounded-full mr-2"
                        animate={{ scale: [0.8, 1.2, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
                      />
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="text-center mt-16 pt-6 border-t border-gray-200 dark:border-gray-700">
          <small className="text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} All rights reserved by{' '}
            <motion.span
              className="font-semibold text-fuchsia-600 dark:text-fuchsia-400"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Parth Purohit
            </motion.span>. Crafted with ❤️
          </small>
        </motion.div>

        <div className="absolute inset-0 -z-10">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x: Math.random() * 300 - 150,
                y: Math.random() * 300 - 150,
                opacity: 0.05
              }}
              animate={{
                x: [null, Math.random() * 300 - 150],
                y: [null, Math.random() * 300 - 150],
                opacity: [0.05, 0.1, 0.05]
              }}
              transition={{
                duration: 20 + Math.random() * 15,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className={`absolute rounded-full ${i % 2 === 0 ? "bg-fuchsia-500" : "bg-cyan-500"}`}
              style={{
                width: `${Math.random() * 150 + 60}px`,
                height: `${Math.random() * 150 + 60}px`,
                filter: "blur(60px)"
              }}
            />
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
