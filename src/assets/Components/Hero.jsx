import React from "react";
import { motion } from "framer-motion";
import { homeData } from "../Data/Homedata.js";
import undraw1 from "../Images/HomeImg/undraw1.svg";
import ScrollCardsComponent from "../Components/ScrollCardsComponent.jsx";
import VideoShowcaseComponent from "../Components/VideoShowcaseComponent.jsx";
import Services from "../Components/Services.jsx";
import ProjectShow from "../Components/ProjectShow.jsx";
import Project from "../Pages/Project.jsx";
import ConnectCard from "./ConnectCard.jsx";

// Animation variants
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

const Hero = () => {
  return (
    <div className="space-y-16 md:space-y-24">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <VideoShowcaseComponent />
        
        {/* About Me Section */}
        <section className="relative py-12 md:py-20 overflow-hidden rounded-3xl">
          {/* Animated Background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-gradient-to-br from-gray-50/30 to-white/30 dark:from-gray-900/30 dark:to-gray-800/30 z-0"
          >
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
                    ? "bg-purple-200/20 dark:bg-purple-900/10"
                    : "bg-blue-200/20 dark:bg-blue-900/10"
                } blur-xl`}
                style={{
                  width: `${Math.random() * 300 + 100}px`,
                  height: `${Math.random() * 300 + 100}px`,
                }}
              />
            ))}
          </motion.div>
          
          <div className="relative z-10 container mx-auto px-4 sm:px-6">
            <motion.h1
              variants={itemVariants}
              className="text-2xl md:text-2xl font-bold text-center mb-10 md:mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
            >
              {homeData.aboutMe.title}
              <motion.div
                className="w-32 h-1.5 mx-auto mt-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full "
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              />
            </motion.h1>
            
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
              {/* Image Container */}
              <motion.div
                variants={itemVariants}
                className="relative w-full lg:w-2/5 flex justify-center"
                whileHover={{ y: -10 }}
              >
                <motion.img
                  src={undraw1}
                  alt="About Me Illustration"
                  className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[300px] xl:max-w-[340px] rounded-2xl shadow-2xl border-4 border-white/20 dark:border-gray-700/30"
                  initial={{ rotate: -5 }}
                  animate={{ rotate: 5 }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  }}
                />
                <div className="absolute -inset-4 rounded-2xl border-4 border-transparent hover:border-purple-400/20 transition-all duration-500 pointer-events-none" />
              </motion.div>

              {/* Text Content */}
              <motion.div
                variants={containerVariants}
                className="w-full lg:w-3/5  space-y-5 md:space-y-6 text-base md:text-lg backdrop-blur-sm bg-white/60 dark:bg-gray-900/60 p-6 md:p-8 rounded-2xl shadow-lg border border-white/20 dark:border-gray-700/20"
              >
                {homeData.aboutMe.content.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    variants={itemVariants}
                    className="leading-relaxed text-gray-700 dark:text-gray-300 text-1sm"
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
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-300/5 rounded-full filter blur-3xl -z-10" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-300/5 rounded-full filter blur-3xl -z-10" />
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-purple-50/50 to-blue-50/50 dark:from-gray-900/50 dark:to-gray-800/50 rounded-3xl px-6 md:px-8 my-12 md:my-16">
          <motion.h1
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-12 text-purple-600 dark:text-purple-400"
          >
            {homeData.skills.title}
            <motion.div 
              className="w-24 h-1 mx-auto mt-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-1xl"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            />
          </motion.h1>

          <motion.div variants={containerVariants} className="space-y-10 md:space-y-12">
            <motion.p
              variants={itemVariants}
              className="text-center text-base md:text-lg mb-8 md:mb-10 dark:text-gray-300 text-gray-700 max-w-3xl mx-auto"
            >
              {homeData.skills.intro}
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {homeData.skills.skillCategories.map((category, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white/80 dark:bg-gray-800/80 p-6 md:p-8 rounded-xl shadow-lg dark:shadow-gray-700/10 backdrop-blur-sm"
                >
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-5 text-purple-600 dark:text-purple-400">
                    {category.title}
                  </h3>
                  <ul className="space-y-3 md:space-y-4">
                    {category.items.map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start dark:text-gray-300 text-gray-700"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <span className="dark:text-purple-400 text-purple-500 mr-2">
                          •
                        </span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="text-center mt-8 md:mt-10">
              <p className="text-base md:text-lg mb-6 md:mb-8 dark:text-gray-300 text-gray-700 max-w-2xl mx-auto">
                {homeData.skills.conclusion}
              </p>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 5px 15px rgba(124, 58, 237, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-purple-500/20 transition-all"
              >
                Check My Projects 🚀
                
              </motion.button>
            </motion.div>
          </motion.div>
        </section>
        
        {/* Additional Info Section */}
        <motion.section
          variants={fadeIn}
          className="py-12 md:py-16 bg-white/80 dark:bg-gray-800/80 rounded-3xl shadow-lg dark:shadow-gray-700/10 px-6 md:px-8 my-12 md:my-16 backdrop-blur-sm"
        >
          <motion.p
            variants={itemVariants}
            className=" text-1xl md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-4xl mx-auto"
          >
            {homeData.additionalInfo.content}
          </motion.p>
        </motion.section>
      </motion.div>
      
      <Services />
      <ProjectShow />
      <ConnectCard/>
    </div>
  );
};

export default Hero;