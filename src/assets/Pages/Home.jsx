import React from "react";
import { motion } from "framer-motion";
import { homeData } from "../Data/Homedata.js";
import undraw1 from "../Images/HomeImg/undraw1.svg";
// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

const Home = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* About Me Section */}
      <section className="py-12">
        <motion.h1 
          variants={itemVariants}
          className="text-2xl font-bold text-center mb-12 text-purple-600 underline underline-offset-8"
        >
          {homeData.aboutMe.title}
        </motion.h1>
        
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <motion.img
            variants={itemVariants}
            src={undraw1}
            alt="About Me Illustration"
            className="w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-full shadow-xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          />
          
          <motion.div 
            variants={containerVariants}
            className="space-y-6 text-lg text-gray-700 dark:text-gray-300"
          >
            {homeData.aboutMe.content.map((paragraph, index) => (
              <motion.p 
                key={index}
                variants={itemVariants}
                className="leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl px-8 my-12">
        <motion.h1 
          variants={itemVariants}
          className="text-3xl font-bold text-center mb-12 text-purple-600 dark:text-purple-400 underline underline-offset-8"
        >
          {homeData.skills.title}
        </motion.h1>
        
        <motion.div variants={containerVariants} className="space-y-12">
          <motion.p variants={itemVariants} className="text-center text-xl mb-8">
            {homeData.skills.intro}
          </motion.p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {homeData.skills.skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-400">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item, i) => (
                    <motion.li 
                      key={i}
                      className="flex items-start"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="text-purple-500 mr-2">•</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            variants={itemVariants}
            className="text-center mt-8"
          >
            <p className="text-xl mb-6">{homeData.skills.conclusion}</p>
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(124, 58, 237, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold"
            >
              Check My Projects 🚀
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Additional Info Section */}
      <motion.section 
        variants={fadeIn}
        className="py-12 bg-white dark:bg-gray-800 rounded-3xl shadow-lg px-8 my-12"
      >
        <motion.p 
          variants={itemVariants}
          className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
        >
          {homeData.additionalInfo.content}
        </motion.p>
      </motion.section>
    </motion.div>
  );
};

export default Home;