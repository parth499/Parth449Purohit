import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaMobileAlt, FaDatabase, FaPaintBrush, FaRocket } from 'react-icons/fa';

const Services = () => {
  // Animation variants
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
    {
      title: "MERN Stack Development",
      description: "Full-stack applications using MongoDB, Express, React, and Node.js with modern architectures",
      icon: <FaCode className="text-4xl text-blue-500" />,
      features: ["RESTful APIs", "JWT Authentication", "Redux State Management", "Responsive UI"]
    },
    {
      title: "PHP Backend Solutions",
      description: "Robust server-side applications with PHP frameworks like Laravel and CodeIgniter",
      icon: <FaServer className="text-4xl text-purple-500" />,
      features: ["Custom CMS Development", "E-commerce Solutions", "API Integrations", "Legacy System Modernization"]
    },
    {
      title: "Frontend Development",
      description: "Beautiful, interactive UIs with React, TailwindCSS, and modern JavaScript",
      icon: <FaPaintBrush className="text-4xl text-cyan-500" />,
      features: ["Component Libraries", "Animations", "Responsive Design", "Performance Optimization"]
    },
    {
      title: "Database Architecture",
      description: "Optimized database solutions with MongoDB, MySQL, and PostgreSQL",
      icon: <FaDatabase className="text-4xl text-green-500" />,
      features: ["Schema Design", "Query Optimization", "Data Migration", "NoSQL Solutions"]
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
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-10">
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
              i % 2 === 0 ? 'bg-blue-500/20' : 'bg-purple-500/20'
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
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4"
            whileHover={{ scale: 1.02 }}
          >
            My Professional Services
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
          <motion.p 
            className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            variants={item}
          >
            Comprehensive web development solutions tailored to your business needs
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover="hover"
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <motion.div 
                variants={hoverEffect}
                className="p-8 h-full flex flex-col"
              >
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-blue-50 dark:bg-gray-700 rounded-full">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                  {service.description}
                </p>
                <div className="mt-auto">
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          variants={item}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-12 shadow-inner">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Let's discuss how I can help bring your vision to life with cutting-edge web solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
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