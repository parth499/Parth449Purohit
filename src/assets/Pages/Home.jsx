import React from "react";
import undraw1 from "../Images/HomeImg/undraw1.svg";

const Home = () => {
  return (
    <div>
      <div>
        <h1 className="text-xl  text-center underline mt-10 ">About Me</h1>
        <div className="sm:flex p-6">
          <img
            className="p-10"
            src={undraw1}
            alt="About Me Illustration"
            width={500}
            height={90}
          />
          <p className="p-10 font-thin">
            I am a dynamic and visionary web developer, deeply passionate about
            crafting innovative, efficient, and scalable digital solutions that
            redefine user experiences. With a strong foundation in modern
            ECMAScript, React, and Redux, I specialize in creating responsive,
            user-centric web designs that seamlessly adapt to evolving
            technological landscapes. <br></br>My expertise extends to modern
            JavaScript frameworks and collaborative backend integration,
            ensuring cohesive development and robust application performance.
            With practical experience in full-stack web development, I am adept
            at utilizing version control systems like GitHub, enabling
            streamlined collaboration and efficient code management. I also
            possess a solid understanding of PHP and other backend technologies,
            which complements my ability to work seamlessly across diverse
            development environments. My technical acumen is matched by my
            commitment to lifelong learning, as I constantly seek opportunities
            to enhance my skills and embrace emerging trends in web development.
            Looking forward, my career aspiration is to excel as a frontend
            developer specializing in cloud-based user interfaces.<br></br>I am
            driven by the ambition to leverage cutting-edge technologies and
            create seamless, intuitive, and visually compelling user interfaces
            that elevate digital interactions. By mastering frontend frameworks,
            cloud integration techniques, and advanced design principles, I aim
            to contribute to the development of innovative web applications that
            integrate effortlessly with cloud services. I envision collaborating
            with multidisciplinary teams to deliver scalable, secure, and
            responsive solutions tailored to diverse user needs and strategic
            business objectives. My goal is to actively participate in shaping
            the future of digital experiences by blending creativity with
            technology to redefine the way users interact with the web. Fueled
            by a passion for excellence and innovation, I aspire to leave an
            indelible mark in the realm of frontend development, contributing to
            a more interconnected and user-friendly digital world.
          </p>
        </div>
      </div>
      <div className="m-5">
        <h1 className="text-center text-xl m-5 underline">About My Skill!</h1>
        <p className=" ml-7 font-thin m-10">
          Welcome to My Portfolio! About My Skills As a Full-Stack Developer, I
          specialize in crafting dynamic, user-friendly web experiences. My
          expertise includes: <br></br> Frontend Skills HTML, CSS, JavaScript:
          Building responsive and interactive user interfaces. React and Redux:
          Developing scalable single-page applications. Tailwind CSS: Designing
          sleek, modern layouts with minimal effort. Backend Skills Node.js and
          Express.js: Creating robust, scalable server-side logic. MongoDB:
          Managing and integrating dynamic data with ease. PHP: Delivering
          reliable backend solutions for web applications. Whether it’s creating
          visually appealing designs, optimizing performance, or managing data
          flow between the client and server, I enjoy solving complex problems
          and building innovative solutions.
        </p>

        <p className="  ml-5 sm:text-1xl m-5 mr-8 ">
          Check Out My Projects 🚀 Explore how I’ve combined these skills to
          deliver impactful solutions in real-world scenarios.
        </p>
        <div className="flex items-center justify-center ">
          <button className="w-44 h-12 rounded-full bg-blue-500 hover:bg-blue-300 text-yellow-100 font-semibold m-10 p-2">
            {" "}
            Check My Project 🚀{" "}
          </button>
        </div>
      </div>

      <div className=" w-auto h-96 m-5  sm:m-5 sm:h-36">
        <p className="p-2 font-thin">
          As a front-end developer, I possess a comprehensive skill set rooted
          in modern web development principles and cutting-edge technologies. My
          expertise spans semantic HTML5 and advanced CSS3, where I excel in
          crafting responsive, cross-browser-compatible designs enriched with
          animations, transitions, and layouts utilizing flexbox and grid. With
          a robust understanding of JavaScript ES6+ features, I am proficient in
          DOM manipulation, asynchronous programming, and debugging, ensuring
          seamless interactivity and functionality. I specialize in frameworks
          like React.js, leveraging hooks such as useState and useEffect, and
          employ Context API or Redux for efficient state management.
          Additionally, I have hands-on experience with Next.js for server-side
          rendering and SEO optimization. 
        </p>
      </div>
    </div>
  );
};

export default Home;
