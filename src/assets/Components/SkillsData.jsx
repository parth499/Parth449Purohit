import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "../Data/Skilldata";

const Skills = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const hoverEffect = {
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -10px rgba(0, 0, 0, 0.1)",
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              opacity: 0.1
            }}
            animate={{
              x: [null, Math.random() * 200 - 100],
              y: [null, Math.random() * 100 - 50],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
            className={`absolute rounded-full ${
              i % 2 === 0 ? "bg-purple-200/30" : "bg-blue-200/30"
            } blur-xl`}
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6">
        {/* Skills Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          {skillsData.categories.map((category, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover="hover"
              className={`w-full sm:w-80 rounded-2xl p-6 ${category.bgColor} backdrop-blur-sm bg-opacity-70 shadow-lg bg-white`}
            >
              <motion.h2 
                className="text-2xl font-bold text-center mb-4 flex items-center justify-center gap-2 "
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-3xl">{category.emoji}</span>
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {category.title}
                </span>
              </motion.h2>
              <motion.ul 
                variants={container}
                className="space-y-3 text-center"
              >
                {category.skills.map((skill, i) => (
                  <motion.li
                    key={i}
                    variants={item}
                    className="text-gray-700 dark:text-gray-300 font-medium"
                    whileHover={{ x: 5, color: "#7c3aed" }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Description Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            My Developer Journey
          </h2>
          
          <motion.div 
            variants={container}
            className="space-y-6 text-lg text-gray-700 dark:text-gray-300"
          >
            {skillsData.description.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={item}
                className="leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-10"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.button
              whileHover={{ 
                boxShadow: "0 5px 15px rgba(99, 102, 241, 0.4)",
                background: "linear-gradient(45deg, #7c3aed, #6366f1)"
              }}
              className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg"
            >
              Explore My Projects 🚀
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;