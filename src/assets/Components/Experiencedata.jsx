import React from 'react';

const experiences = [
  {
    company: "Teachnook (Remote)",
    role: "Web-Developer Intern",
    duration: "Jan 2023 - Apr 2023",
    description: "I worked here as an web-developer (intern) and comes to know the basic of the web development. Learn the basic of Html, Css, Js, and also know i to developed a small projects and Developed the Wheather-Forecast like App. "
  },
  {
    company: " To-let-Globe (Remote)",
    role: "React-Developer Intern",
    duration: "April 2024 – June 2024 ",
    description: "A dynamic product-based company, I worked extensively with React.js developing key features like propertylistings and responsive testimonials. I collaborated closely with the backend team and content writers for  content strategy. I gained knowledge in using Git for version control and collaboration between frontend and backend teams. Additionally, I worked on a live company website, enhancing my understanding of deployment and real-time troubleshooting. Developed and implemented an interactive slider using Redux for state management, optimizing application performance. Gained expertise in handling CSV file formats for data integration and frontend-backend coordination. "
  },
  {
    company: "Nezware (Remote)",
    role: "JavaScript-Developer Intern",
    duration: "July 2024 - August 2024",
    description: "During my one-month remote internship at Nezware, I focused on JavaScript, HTML, and CSS, developing complex JS logic for various features. This role deepened my understanding of frontend development and enhanced my problem-solving skills"
  },
  {
    company: "Websenor (Onsite)",
    role: "Web-Development Intern",
    duration: "July 2024 - August 2024",
    description: "I worked on a live project for CPHR Academy, contributing to website development using ASP and SQL, focusing on DDL, DML, and features like registration, contact forms, reviews, and feedback."
  }
];

const Experiencedata = () => {
  return (
    <div className="px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10 text-purple-600">My Internship Experience</h1>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md transition hover:shadow-lg">
            <h2 className="text-2xl font-semibold text-purple-500">{exp.role} <span className="text-gray-500 dark:text-gray-300">@ {exp.company}</span></h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{exp.duration}</p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiencedata;
