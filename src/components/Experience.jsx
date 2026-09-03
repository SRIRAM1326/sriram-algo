import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-2xl md:text-3xl text-granger-dark font-sans font-black uppercase tracking-widest">Experience</h2>
          <div className="flex-grow h-[2px] bg-granger-light rounded-full"></div>
        </div>

        <div className="relative border-l-2 border-granger-border pl-8 pb-8 ml-2">
          <div className="absolute w-4 h-4 bg-granger-primary rounded-full -left-[9px] top-2 shadow-[0_0_0_4px_rgba(255,76,1,0.2)]"></div>
          
          <div className="md:pr-8 mt-2">
            <div className="mb-4 flex flex-col md:flex-row md:justify-between md:items-baseline gap-2">
              <h3 className="text-2xl font-sans font-bold text-granger-dark tracking-tight">Algorithmic Trading Developer & Full-Stack Engineer</h3>
              <span className="font-sans text-xs tracking-wider uppercase text-granger-primary font-bold whitespace-nowrap">Dec 2024 – Present</span>
            </div>
            
            <div className="mb-5 flex flex-wrap items-center gap-2 font-sans text-sm text-granger-text font-bold">
              <span className="text-granger-dark">UVFarms</span>
              <span className="text-granger-light">•</span>
              <span>Chennai, India</span>
              <span className="text-granger-light">•</span>
              <span>Remote</span>
            </div>

            <p className="font-sans text-granger-dark font-medium leading-relaxed mb-6">
              I work on building real-time algorithmic trading systems, backend infrastructure, and full-stack applications focused on performance, reliability, and automation.
            </p>
            
            <ul className="space-y-4 font-sans text-sm md:text-base text-gray-600 leading-[1.6] font-medium">
              <li className="flex gap-3 items-start"><span className="text-granger-primary mt-1">✦</span><span>Developed real-time trading systems for NIFTY and SENSEX derivatives using Python, REST APIs, WebSockets, and broker integrations.</span></li>
              <li className="flex gap-3 items-start"><span className="text-granger-primary mt-1">✦</span><span>Designed and implemented 6+ quantitative trading strategies, including VWAP, SuperTrend, Parabolic SAR, CPR, and ATR-based strategies.</span></li>
              <li className="flex gap-3 items-start"><span className="text-granger-primary mt-1">✦</span><span>Built low-latency market-data and signal-processing pipelines for real-time trading and automated execution.</span></li>
              <li className="flex gap-3 items-start"><span className="text-granger-primary mt-1">✦</span><span>Implemented risk-management systems including stop-losses, trailing exits, automated square-offs, P&L monitoring, and emergency kill switches.</span></li>
              <li className="flex gap-3 items-start"><span className="text-granger-primary mt-1">✦</span><span>Developed scalable backend services using FastAPI, Flask, PostgreSQL, SQLAlchemy, Redis, and Docker.</span></li>
              <li className="flex gap-3 items-start"><span className="text-granger-primary mt-1">✦</span><span>Built enterprise B2B platforms and multi-portal applications with JWT authentication, RBAC, loyalty workflows, GPS validation, and REST APIs.</span></li>
              <li className="flex gap-3 items-start"><span className="text-granger-primary mt-1">✦</span><span>Developed RAG-powered AI applications and voice assistants using LangChain, FAISS, LLMs, Whisper, and Deepgram.</span></li>
              <li className="flex gap-3 items-start"><span className="text-granger-primary mt-1">✦</span><span>Built modern frontend applications using Next.js, React, TypeScript, and Tailwind CSS.</span></li>
              <li className="flex gap-3 items-start"><span className="text-granger-primary mt-1">✦</span><span>Worked on event-driven and real-time architectures designed for high concurrency, reliability, and production environments.</span></li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
