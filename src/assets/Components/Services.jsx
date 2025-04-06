import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaMobileAlt, FaDatabase, FaPaintBrush, FaRocket } from 'react-icons/fa';

const Services = () => {
  // Animation variants remain the same
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const hoverEffect = {
    hover: {
      y: -10,
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
      transition: { type: "spring", stiffness: 300 }
    }
  };

  const services = [
    // Services data remains exactly the same
    {
      title: "MERN Stack Development",
      description: "Applications using MongoDB, Express, React, and Node.js with modern architectures",
      icon: <FaCode className="text-4xl text-blue-500" />,
      features: ["RESTful APIs", "JWT Authentication", "Redux State Management", "Responsive UI"]
    },
    {
      title: "Php Application",
      description: "Robust server-side applications with PHP frameworks like Laravel and CodeIgniter",
      icon: <FaServer className="text-4xl text-purple-500" />,
      features: ["Admin Areas", "Localhost-Management", "API Integrations", "Database Management"]
    },
    {
      title: "Frontend Development",
      description: "Beautiful, interactive UIs with React, TailwindCSS, and modern JavaScript",
      icon: <FaPaintBrush className="text-4xl text-cyan-500" />,
      features: ["Component Libraries", "Animations", "Responsive Design", "Performance Optimization"]
    },
    {
      title: "Database Architecture",
      description: "Optimized database solutions with MongoDB, MySQL",
      icon: <FaDatabase className="text-4xl text-green-500" />,
      features: ["Schema Design", "Query Optimization", "Data Migration", "NoSQL Solutions","CRUD-Operation"]
    },
    {
      title: "Mobile Responsive Design",
      description: "Flawless experiences across all devices with mobile-first approach",
      icon: <FaMobileAlt className="text-4xl text-yellow-500" />,
      features: ["Cross-browser Testing", "Touch Optimization", "Performance Tuning", "PWA Implementation"]
    },
    {
      title: "Deployment & DevOps",
      description: "Seamless deployment pipelines and cloud infrastructure setup",
      icon: <FaRocket className="text-4xl text-red-500" />,
      features: ["AWS/Heroku Setup", "CI/CD Pipelines", "Docker Configuration", "Performance Monitoring"]
    }
  ];

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      variants={container}
      viewport={{ once: true, margin: "-100px" }}
      className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50/30 to-white/30 dark:from-gray-900/30 dark:to-gray-800/30 overflow-hidden"
    >
      {/* Floating background elements - More transparent */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              opacity: 0.05 // Reduced opacity
            }}
            animate={{
              x: [null, Math.random() * 200 - 100],
              y: [null, Math.random() * 100 - 50],
              opacity: [0.05, 0.1, 0.05] // Reduced opacity range
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
            className={`absolute rounded-full ${
              i % 2 === 0 ? 'bg-blue-500/10' : 'bg-purple-500/10' // More transparent
            } blur-xl`}
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          variants={item}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4"
            whileHover={{ scale: 1.02 }}
          >
            My Professional Expertise
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
          <motion.p 
            className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            variants={item}
          >
            Comprehensive web development solutions tailored to your business needs
          </motion.p>
        </motion.div>

        {/* Services Grid - More transparent cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover="hover"
              className="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg overflow-hidden border border-gray-100/50 dark:border-gray-700/50 backdrop-blur-sm"
            >
              <motion.div 
                variants={hoverEffect}
                className="p-6 md:p-8 h-full flex flex-col"
              >
                <div className="mb-4 md:mb-6 flex justify-center">
                  <div className="p-3 md:p-4 bg-blue-50/50 dark:bg-gray-700/50 rounded-full">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-center text-gray-800 dark:text-white mb-3 md:mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-4 md:mb-6 text-sm md:text-base">
                  {service.description}
                </p>
                <div className="mt-auto">
                  <ul className="space-y-1 md:space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-4 w-4 md:h-5 md:w-5 text-green-500 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300 text-sm md:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section - More transparent */}
        <motion.div 
          variants={item}
          className="mt-12 md:mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-gray-800/50 dark:to-gray-700/50 rounded-2xl p-6 md:p-8 lg:p-12 shadow-inner backdrop-blur-sm">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-3 md:mb-4">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6 md:mb-8 text-sm md:text-base">
              Let's discuss how I can help bring your vision to life with cutting-edge web solutions.
            </p>
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)" 
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold text-base md:text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;