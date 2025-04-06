import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  // Your experience data remains exactly the same
  {
    company: "T-----k (Remote) (Bangalore)",
    role: "Web-Developer Intern",
    duration: "Jan 2023 - Apr 2023",
    description: "I worked here as an web-developer (intern) and comes to know the basic of the web development. Learn the basic of Html, Css, Js, and also know i to developed a small projects and Developed the Wheather-Forecast like App."
  },
  {
    company: "To----e (Remote) (Lucknow)",
    role: "React-Developer Intern",
    duration: "April 2024 – June 2024",
    description: "A dynamic product-based company, I worked extensively with React.js developing key features like property listings and responsive testimonials. I collaborated closely with the backend team and content writers for content strategy. I gained knowledge in using Git for version control and collaboration between frontend and backend teams. Additionally, I worked on a live company website, enhancing my understanding of deployment and real-time troubleshooting. Developed and implemented an interactive slider using Redux for state management, optimizing application performance. Gained expertise in handling CSV file formats for data integration and frontend-backend coordination."
  },
  {
    company: "N-----e (Remote) (Nodia)",
    role: "JavaScript-Developer Intern",
    duration: "July 2024 - August 2024",
    description: "During my one-month remote internship at Nezware, I focused on JavaScript, HTML, and CSS, developing complex JS logic for various features. This role deepened my understanding of frontend development and enhanced my problem-solving skills"
  },
  {
    company: "W-----r (Onsite) (Udaipur)",
    role: "Web-Development Intern",
    duration: "July 2024 - August 2024",
    description: "I worked on a live project for CPHR Academy, contributing to website development using ASP and SQL, focusing on DDL, DML, and features like registration, contact forms, reviews, and feedback."
  }
];

const Experiencedata = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
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
    <div className="px-4 sm:px-6 py-10 md:py-12 max-w-4xl mx-auto m-9">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-20">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${
              i % 2 === 0 ? "bg-purple-200/30" : "bg-blue-200/30"
            } blur-xl`}
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-10 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent m-6"
      >
        My Internship Experience
      </motion.h1>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-6 md:space-y-8"
      >
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            variants={item}
            whileHover="hover"
            className="p-5 md:p-6 bg-white/70 dark:bg-gray-900/70 rounded-2xl shadow-md backdrop-blur-sm border border-white/30 dark:border-gray-700/30"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-purple-600 dark:text-purple-500">
              {exp.role} <span className="text-gray-600 dark:text-gray-300">@ {exp.company}</span>
            </h2>
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-3 md:mb-4">{exp.duration}</p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experiencedata;