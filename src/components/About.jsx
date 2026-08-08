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
            <span className="mt-1 block">’m a Quantitative &amp; AI Developer focused on building intelligent financial and full-stack systems that combine automation, real-time data processing, and scalable software architecture. I hold a B.Com in Information Systems Management from <a href="https://www.srmist.edu.in/" target="_blank" rel="noopener noreferrer" className="text-vintage-gold hover:underline font-medium">SRM Institute of Science and Technology</a>, and I enjoy turning complex requirements into practical, technology-driven solutions.</span>
          </p>
          <p>
            Currently, I work as an Algorithmic Trading Developer at <a href="https://www.uvfarms.in/" target="_blank" rel="noopener noreferrer" className="text-vintage-gold hover:underline font-medium">UVFarms</a>, where I develop automated trading systems, quantitative strategies, real-time market-data pipelines, and AI-powered applications. My experience includes working with Python, FastAPI, React, Next.js, PostgreSQL, WebSockets, and AI/LLM technologies to build production-oriented systems.
          </p>
          <p>
            I have developed projects across algorithmic trading, AI/RAG, enterprise ERP, and real-time applications. My work includes Thedal, a website-aware RAG chatbot with voice AI; an Enterprise B2B ERP &amp; Loyalty Platform with Admin, Sales Representative, and Buyer portals; and multiple quantitative trading systems involving options, technical indicators, broker APIs, real-time market data, and automated execution.
          </p>
          <p>
            I also leverage AI-assisted development tools to accelerate coding, debugging, research, and system development. I’m particularly interested in quantitative engineering, intelligent automation, AI applications, real-time systems, and building practical software that solves real-world problems.
          </p>
        </div>

        {/* How I Work Section */}
        <div className="mt-16 pt-10 border-t border-vintage-gold/20">
          <h3 className="text-2xl font-serif font-bold text-vintage-burgundy mb-6 flex items-center gap-3">
            <span>How I Work</span>
            <span className="flex-grow h-[1px] bg-vintage-gold/20"></span>
          </h3>

          <div className="bg-white/60 backdrop-blur-sm border border-vintage-gold/25 rounded-md p-6 md:p-8 shadow-sm">
            <div className="flex flex-wrap items-center justify-start sm:justify-between gap-2 md:gap-3 mb-6 pb-6 border-b border-vintage-gold/15">
              {['Understand', 'Plan', 'Build', 'Test', 'Integrate', 'Improve'].map((step, idx, arr) => (
                <div key={step} className="flex items-center gap-2 md:gap-3">
                  <span className="px-3 py-1.5 bg-vintage-burgundy/5 text-vintage-burgundy border border-vintage-burgundy/20 rounded-sm font-sans text-xs md:text-sm font-semibold tracking-wide">
                    <span className="text-vintage-gold mr-1.5 font-serif">{String(idx + 1).padStart(2, '0')}.</span>
                    {step}
                  </span>
                  {idx < arr.length - 1 && (
                    <span className="text-vintage-gold/60 text-xs md:text-sm hidden sm:inline">→</span>
                  )}
                </div>
              ))}
            </div>

            <p className="font-montserrat text-sm md:text-base text-vintage-charcoal/80 leading-relaxed font-light">
              I turn complex requirements into practical software by combining structured problem-solving, modern development technologies, and AI-assisted engineering. I focus on designing, building, testing, and integrating reliable systems across AI applications, quantitative platforms, real-time data systems, and full-stack products.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
