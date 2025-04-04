import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollCardsComponent = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const cards = [
    {
      title: "Interactive Design",
      description: "Engage users with fluid animations and intuitive interfaces.",
      color: "bg-blue-500"
    },
    {
      title: "Real-time Analytics",
      description: "Get instant insights with our powerful processing engine.",
      color: "bg-purple-500"
    },
    {
      title: "AI Integration",
      description: "Smart features that learn and adapt to your needs.",
      color: "bg-green-500"
    }
  ];

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="w-full max-w-6xl px-8"
          style={{ rotateX, y, opacity }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
            Our Core Features
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                className={`${card.color} rounded-2xl p-8 text-white h-96 flex flex-col justify-end`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -20 }}
              >
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <p className="text-lg opacity-90">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollCardsComponent;