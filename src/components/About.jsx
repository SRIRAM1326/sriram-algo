import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl text-vintage-burgundy font-serif font-bold">About Me</h2>
          <div className="flex-grow h-[1px] bg-vintage-gold/30"></div>
        </div>

        <div className="font-montserrat text-base md:text-lg text-vintage-charcoal/90 leading-relaxed space-y-6">
          <p className="relative clear-both">
            <span className="float-left text-6xl md:text-7xl font-serif font-bold text-vintage-gold leading-[0.8] mr-4 mt-2 tracking-tighter drop-shadow-md">I</span>
            <span className="mt-1 block">am a developer focused on building intelligent financial and AI-powered systems that combine automation, real-time analytics, and scalable backend architecture. With a Bachelor’s degree in Information Systems Management from <a href="https://www.srmist.edu.in/" target="_blank" rel="noopener noreferrer" className="text-vintage-gold hover:underline font-medium">SRM Institute of Science and Technology</a>, I enjoy solving complex problems through technology-driven solutions and performance-focused engineering.</span>
          </p>
          <p>
            Currently, I work on algorithmic trading developer at <a href="https://www.uvfarms.in/" target="_blank" rel="noopener noreferrer" className="text-vintage-gold hover:underline font-medium">UVfarms</a> infrastructure, low-latency market systems, and AI applications using Python, FastAPI, Flask, WebSockets, and LLM technologies. My experience includes developing automated options trading platforms, real-time scalping terminals, website-aware RAG chatbots, and production-ready full-stack applications. I am particularly interested in event-driven systems, live data processing, quantitative trading strategies, and practical AI implementations that improve speed, accuracy, and decision-making.
          </p>
          <p>
            Beyond engineering, I enjoy creating clean and scalable digital experiences that balance functionality with modern design. I continuously explore new technologies in AI, backend systems, and financial automation while building projects that challenge both my technical and creative thinking.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
