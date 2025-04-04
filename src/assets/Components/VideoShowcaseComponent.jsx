import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import global from '../Images/global.mp4'

const VideoShowcaseComponent = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Scroll-based transformations
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  // Intersection observer animations
  const [sectionRef, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  return (
    <div className="relative w-full h-screen overflow-hidden rounded-2xl">
      {/* Video Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ scale, opacity }}
      >
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={global} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/30"></div>
      </motion.div>

      {/* Content Container */}
      <motion.div 
        ref={containerRef}
        className="relative z-10 h-[300vh]"
      >
        {/* Sticky Content */}
        <div className="sticky top-0 h-screen flex flex-col justify-center">
          <motion.div 
            className="px-8 md:px-16"
            style={{ y }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              🚀Build Something Amazing Together
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/80 max-w-2xl mb-8"
            >
             I'm Parth, a passionate web developer focused on building stunning, responsive, and interactive digital experiences. Whether you're looking to collaborate on an exciting project, need a developer who brings ideas to life, or just want to connect and share insights.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-4"
            >
              <button className="px-6 py-3 bg-white text-black rounded-full font-medium">
                Services
              </button>
              <button className="px-6 py-3 border border-white text-white rounded-full font-medium">
                <span>Linkdin</span>
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll-through Content Sections */}
        <div className="absolute top-[100vh] w-full">
          {/* Feature Section 1 */}
          <motion.section
            ref={sectionRef}
            className="min-h-screen py-20 px-8 md:px-16 bg-white"
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h2 
                  className="text-3xl md:text-5xl font-bold mb-6"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  Seamless Integration
                </motion.h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our technology integrates effortlessly with your existing systems, 
                  providing a smooth transition to advanced capabilities.
                </p>
                <ul className="space-y-4">
                  {['API Compatibility', 'Plug-and-Play Setup', 'Real-time Syncing'].map((item, i) => (
                    <motion.li 
                      key={i}
                      className="flex items-center gap-3"
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                        <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <motion.div
                className="relative h-80 bg-gray-100 rounded-2xl overflow-hidden"
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Placeholder for demo image/video */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-400">Interactive Demo</span>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Feature Section 2 - Parallax Effect */}
          <section className="min-h-screen relative overflow-hidden">
            <motion.div 
              className="absolute inset-0 bg-purple-600"
              style={{
                scale: useTransform(scrollYProgress, [0, 1], [1.2, 1]),
                opacity: useTransform(scrollYProgress, [0, 0.8], [1, 0.5])
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="text-center px-8"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Transform Your Workflow
                  </h2>
                  <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                    Experience unprecedented efficiency with our revolutionary approach.
                  </p>
                  <button className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg">
                    Schedule a Demo
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default VideoShowcaseComponent;