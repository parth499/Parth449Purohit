import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
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
    {
      icon: <FaFacebookF />,
      href: "#",
      color: "hover:bg-blue-600",
      bg: "bg-gray-800"
    },
    {
      icon: <FaTwitter />,
      href: "#",
      color: "hover:bg-blue-400",
      bg: "bg-gray-800"
    },
    {
      icon: <FaInstagram />,
      href: "#",
      color: "hover:bg-pink-500",
      bg: "bg-gray-800"
    },
    {
      icon: <FaGithub />,
      href: "#",
      color: "hover:bg-gray-700",
      bg: "bg-gray-800"
    },
    {
      icon: <FaLinkedinIn />,
      href: "#",
      color: "hover:bg-blue-700",
      bg: "bg-gray-800"
    }
  ];

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="shadow-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 border-t border-gray-200 dark:border-gray-700"
    >
      <div className="container mx-auto px-6 lg:px-20">
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-4 gap-10"
        >
          {/* Logo and About Section */}
          <motion.div variants={itemVariants}>
            <motion.div 
              className="flex items-center mb-6"
              whileHover={{ x: 5 }}
            >
              <motion.span
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror"
                }}
                className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
              >
                Personal
              </motion.span>
            </motion.div>
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 dark:text-gray-400 mb-6"
            >
              Creating high-quality resources and tools to aid developers during
              project development.
            </motion.p>
            <motion.div 
              variants={containerVariants}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  variants={itemVariants}
                  whileHover="hover"
                  whileTap="tap"
                  initial="rest"
                  className={`w-10 h-10 ${social.bg} text-white rounded-full flex items-center justify-center ${social.color} transition-colors shadow-md`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Links Sections */}
          {[
            { title: "Personal", links: links.personal },
            { title: "Help", links: links.help },
            { title: "Products", links: links.products }
          ].map((section, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.h5 
                className="text-lg font-semibold mb-6 text-gray-900 dark:text-white"
                whileHover={{ x: 3 }}
              >
                {section.title}
              </motion.h5>
              <motion.ul 
                variants={containerVariants}
                className="space-y-3"
              >
                {section.links.map((link, i) => (
                  <motion.li 
                    key={i}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center"
                    >
                      <motion.span
                        className="w-2 h-2 bg-purple-500 rounded-full mr-2"
                        animate={{ scale: [0.8, 1.2, 0.8] }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                      />
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-12 pt-6 border-t border-gray-200 dark:border-gray-700"
        >
          <small className="text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} All rights reserved by{" "}
            <motion.span
              className="font-semibold text-purple-600 dark:text-purple-400"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Parth Purohit
            </motion.span>
            . Crafted with ❤️
          </small>
        </motion.div>

        {/* Floating background elements */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 -z-10 overflow-hidden opacity-10">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: 0.1
              }}
              animate={{
                x: [null, Math.random() * 200 - 100],
                y: [null, Math.random() * 100 - 50]
              }}
              transition={{
                duration: 15 + Math.random() * 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
              className={`absolute rounded-full ${
                i % 2 === 0 ? "bg-purple-500" : "bg-blue-500"
              }`}
              style={{
                width: `${Math.random() * 200 + 50}px`,
                height: `${Math.random() * 200 + 50}px`,
                filter: "blur(40px)"
              }}
            />
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;