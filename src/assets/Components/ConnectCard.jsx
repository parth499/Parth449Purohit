import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";
import my from '../Images/my.jpg';

const ConnectCard = () => {
  const socialLinks = [
    { icon: <FaLinkedin className="text-blue-600" />, name: "LinkedIn", url: "https://www.linkedin.com/in/parth-purohit-79web/" },
    { icon: <FaGithub className="text-gray-800 dark:text-gray-200" />, name: "GitHub", url: "https://github.com/parth499" },
    { icon: <FaTwitter className="text-blue-400" />, name: "Twitter", url: "https://x.com/parthpurohit449" },
    { icon: <FaEnvelope className="text-red-500" />, name: "Email", url: "mailto:parthpurohit449@gmail.com" },
    { icon: <FaPhone className="text-green-500" />, name: "Phone", url: "tel:+917970054563" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto my-8 overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 relative"
    >
      {/* Profile Header */}
      <div className="relative h-60 bg-gradient-to-r from-purple-500 to-blue-500 flex justify-center items-end">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="absolute -bottom-16 transform"
        >
          <img
            src={my}
            alt="Profile"
            className="w-56 h-50 rounded-full border-4 border-white dark:border-gray-800 object-cover shadow-lg"
            style={{
              objectPosition: 'center top', // Adjust this if your face isn't centered
            }}
          />
        </motion.div>
      </div>

      {/* Profile Content */}
      <div className="px-6 pt-20 pb-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Parth Purohit</h2>
        <p className="text-purple-600 dark:text-purple-400 mb-4">Learner</p>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Let's build something amazing together! Feel free to reach out.
        </p>

        {/* Social Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center p-3 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <span className="text-2xl mb-1">{link.icon}</span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                {link.name}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Contact Form Trigger */}
        <motion.button
          whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(124, 58, 237, 0.3)" }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-lg shadow-md transition-all"
        >
          Send Me a Message
        </motion.button>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-purple-400/10 rounded-full blur-xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400/10 rounded-full blur-xl -z-10"></div>
    </motion.div>
  );
};

export default ConnectCard;