import React from "react";

const SkillsData = () => {
  return (
    <div className="flex flex-wrap sm:m-32 sm:my-3 ml-14  mt-6">
      <div className="w-80 sm:h-72 h-96 bg-gray-200 rounded-2xl m-5">
        <h1 className="text-center m-2 text-xl underline font-mono ">
          Front-end
        </h1>
        <ul className="text-center m-7 font-thin">
          <li>HTML5</li>
          <li>CSS5</li>
          <li>TailwindCSS</li>
          <li>React.JS+Redux</li>
          <li>JavaScript + ES6</li>
        </ul>
      </div>
      <div className="w-80 h-72 bg-gray-400 rounded-2xl m-5">
        <h1 className="text-center m-2 text-xl underline font-mono ">
          Back-end
        </h1>
        <ul className="text-center m-7 font-thin">
          <li>Node.js</li>
          <li>Php</li>
          <li>Express.js</li>
        </ul>
      </div>
      <div className="w-80 sm:h-72 h-96 bg-gray-200 rounded-2xl m-5">
        <h1 className="text-center m-2 text-xl underline font-mono ">
          DataBase
        </h1>
        <ul className="text-center m-7 font-thin">
          <li>MongoDb</li>
          <li>MySql</li>
        </ul>
      </div>
      <div className="w-80 h-72 bg-gray-400  rounded-2xl m-5">
        <h1 className="text-center m-2 text-xl underline font-mono ">
          Programming
        </h1>
        <ul className="text-center m-7 font-thin">
          <li>C</li>
          <li>C++</li>
          <li>Java (Basic)</li>
          <li>DSA Basic </li>
        </ul>
      </div>
      <div className="w-80 sm:h-72 h-96 bg-gray-200  rounded-2xl m-5">
        <h1 className="text-center m-2 text-xl underline font-mono ">
          Web Realated knowledge
        </h1>
        <ul className="text-center m-7 font-thin">
          <li>AJAX</li>
          <li>Redux</li>
          <li>RTK-Query</li>
          <li>Animation Libary</li>
          <li>XML</li>
          <li>Figma</li>
          <li>Graph-QL</li>
          <li>Routing</li>
        </ul>
      </div>
      <div className=" w-80 h-72 bg-gray-400  rounded-2xl m-5">
        <h1 className="text-center m-2 text-xl underline font-mono ">
          Extra-Circular Activities
        </h1>
        <ul className="text-center m-7 font-thin">
          <li>
            Volleyball State Level <br></br> Player
          </li>
        </ul>
      </div>
      <div className="m-2">
        <h1 className="text-center text-xl m-5">About My Skill!</h1>
        <p className=" ml-7 font-thin m-10">Welcome to My Portfolio! About My Skills As a Full-Stack Developer, I
        specialize in crafting dynamic, user-friendly web experiences. My
        expertise includes: <br></br> Frontend Skills HTML, CSS, JavaScript: Building
        responsive and interactive user interfaces. React and Redux: Developing
        scalable single-page applications. Tailwind CSS: Designing sleek, modern
        layouts with minimal effort. Backend Skills Node.js and Express.js:
        Creating robust, scalable server-side logic. MongoDB: Managing and
        integrating dynamic data with ease. PHP: Delivering reliable backend
        solutions for web applications. Whether it’s creating visually appealing
        designs, optimizing performance, or managing data flow between the
        client and server, I enjoy solving complex problems and building
        innovative solutions.</p>
      
        <p className="  ml-5 sm:text-1xl m-5 mr-8 ">Check Out My Projects 🚀
        Explore how I’ve combined these skills to deliver impactful solutions in real-world scenarios.</p>
        <div className="flex items-center justify-center ">
        <button className="w-44 h-12 rounded-full bg-blue-500 hover:bg-blue-300 text-yellow-100 font-semibold m-10 p-2"> Check My Project 🚀 </button>
        </div>
      </div>
      
    </div>
  );
};

export default SkillsData;
