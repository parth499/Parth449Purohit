import React from "react";
import { motion } from "framer-motion";
import { homeData } from "../Data/Homedata.js";
import undraw1 from "../Images/HomeImg/undraw1.svg";
import ScrollCardsComponent from "../Components/ScrollCardsComponent.jsx";
import VideoShowcaseComponent from "../Components/VideoShowcaseComponent.jsx";
import Services from "../Components/Services.jsx";


// Animation variants remain exactly the same
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const Home = () => {
  return (
    <>
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 "
    >
        <VideoShowcaseComponent/>
      {/* About Me Section - Inverted dark mode */}
      <section className="relative py-16 overflow-hidden rounded-3xl">
        {/* Animated Background Div */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 z-0 "
        >
          {/* Floating gradient blobs */}
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
                y: [null, Math.random() * 100 - 50],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 15 + Math.random() * 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
              className={`absolute rounded-full ${
                i % 2 === 0
                  ? "bg-purple-200/40 dark:bg-purple-900/20"
                  : "bg-blue-200/40 dark:bg-blue-900/20"
              } blur-xl`}
              style={{
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
              }}
            />
          ))}
        </motion.div>
          
        <div className="relative z-10 container mx-auto px-6">
          <motion.h1
            variants={itemVariants}
            className="text-1xl md:text-2xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
          >
            {homeData.aboutMe.title}
            <motion.div
              className="w-24 h-1 mx-auto mt-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </motion.h1>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image with floating animation */}
            <motion.div
              variants={itemVariants}
              className="relative"
              whileHover={{ y: -10 }}
            >
              <motion.img
                src={undraw1}
                alt="About Me Illustration"
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-2xl shadow-2xl border-4 border-white/20 dark:border-gray-700/30"
                initial={{ rotate: -5 }}
                animate={{ rotate: 5 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
              />
              <div className="absolute -inset-4 rounded-2xl border-4 border-transparent hover:border-purple-400/20 transition-all duration-500 pointer-events-none " />
            </motion.div>

            {/* Text content with glassmorphism effect */}
            <motion.div
              variants={containerVariants}
              className="space-y-6 text-2lg md:text-xl backdrop-blur-sm bg-white/70 dark:bg-gray-900/70 p-8 rounded-2xl shadow-lg border border-white/30 dark:border-gray-700/30 text-black"
            >
              {homeData.aboutMe.content.map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={itemVariants}
                  className="leading-relaxed text-gray-700 dark:text-gray-300"
                  whileHover={{
                    x: 5,
                    textShadow: "0 0 8px rgba(124, 58, 237, 0.2)",
                  }}
                >
                  <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mr-2" />
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-300/10 rounded-full filter blur-3xl -z-10" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-300/10 rounded-full filter blur-3xl -z-10" />
        </div>
      </section>

      {/* Skills Section - Inverted dark mode */}
      <section className="py-12 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-100 dark:to-gray-200 rounded-3xl px-8 my-12 text-2lg">
        <motion.h1
          variants={itemVariants}
          className="text-3xl font-bold text-center mb-12 text-purple-600 dark:text-purple-700 underline underline-offset-8 "
        >
          {homeData.skills.title}
        </motion.h1>

        <motion.div variants={containerVariants} className="space-y-12">
          <motion.p
            variants={itemVariants}
            className="text-center text-2lg mb-8 dark:text-gray-800 text-black"
          >
            {homeData.skills.intro}
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {homeData.skills.skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-50 p-6 rounded-xl shadow-lg dark:shadow-gray-300/20"
              >
                <h3 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-700">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start dark:text-gray-800"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className=" dark:text-purple-600 mr-2 text-black">
                        •
                      </span>
                      <span className=" dark:text-purple-600 mr-2 text-black">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center mt-8">
            <p className="text-xl mb-6 dark:text-gray-800  text-black">
              {homeData.skills.conclusion}
            </p>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(124, 58, 237, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold"
            >
              Check My Projects 🚀
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
      

      {/* Additional Info Section - Inverted dark mode */}
      <motion.section
        variants={fadeIn}
        className="py-12 bg-white dark:bg-gray-100 rounded-3xl shadow-lg dark:shadow-gray-300/20 px-8 my-12"
      >
        <motion.p
          variants={itemVariants}
          className="text-lg leading-relaxed text-gray-700 dark:text-gray-800"
        >
          {homeData.additionalInfo.content}
        </motion.p>
      </motion.section>
    </motion.div>
    <Services/>
    </>
  );
};

export default Home;
