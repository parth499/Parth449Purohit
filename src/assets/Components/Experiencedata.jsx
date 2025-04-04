import React from 'react';

const experiences = [
  {
    company: "Tech Startup A",
    role: "Frontend Intern",
    duration: "Jan 2023 - Apr 2023",
    description: "Built responsive user interfaces using React and Tailwind CSS. Collaborated with backend team to integrate APIs and enhance UI/UX."
  },
  {
    company: "Startup B",
    role: "Web Developer Intern",
    duration: "May 2023 - Aug 2023",
    description: "Developed landing pages and dashboards using HTML, CSS, JavaScript, and animation libraries. Participated in daily stand-ups and Agile sprints."
  },
  {
    company: "Innovative Tech Labs",
    role: "Frontend Developer Intern",
    duration: "Sept 2023 - Dec 2023",
    description: "Improved website performance and SEO, implemented dark/light mode toggle, and contributed to component-based development in React."
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
