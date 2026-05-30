import { motion } from 'framer-motion';

const projects = [
  {
    title: "NanoProfitsAI",
    subtitle: "Fully Automated Algo Trading Platform",
    image: "/projects/nanoprofits.png",
    description: "Designed and developed a low-latency algorithmic options trading platform for automated trade execution and real-time market analytics using Python, Flask, WebSockets, and REST APIs. Built a tick-level indicator engine with sub-100ms execution latency, supporting multi-timeframe VWAP, ATR, SuperTrend, and Parabolic SAR–based strategies for live signal generation. Implemented dynamic ATM strike selection, concurrent monitoring for multiple option contracts, ATR-based stop-loss systems, and advanced risk controls including structural exits and kill-switch mechanisms. Developed real-time dashboards for P&L tracking, latency monitoring, and system health, ensuring high reliability and continuous performance during volatile market conditions."
  },
  {
    title: "MinnalMoney",
    subtitle: "Real-Time Options Scalping Terminal",
    image: "/projects/minnalmoney.png",
    description: "Developed and scaled a real-time options scalping terminal focused on low-latency execution, broker-session reliability, and live risk analytics using Python, Flask, WebSockets, SSE, and REST APIs. Built a high-performance trading system capable of handling 100+ concurrent live tick streams with sub-second execution speed. Designed a fault-tolerant broker abstraction layer with automatic session recovery, achieving 99.9% trading-session availability. Modularized the backend into multiple Blueprint-based service modules for better scalability, maintainability, and faster feature deployment. Implemented live MTM, P&L, strike-selection, and order-book dashboards to support faster trading decisions. Integrated VWAP, ATR, SuperTrend, and automated stop-loss/target square-off pipelines to improve execution discipline and risk management during volatile market conditions."
  },
  {
    title: "Thedal",
    subtitle: "Universal Website-Aware RAG Chatbot with Voice",
    image: "/projects/RAGCHAT.png",
    description: "Built a full-stack enterprise-grade RAG chatbot with real-time website crawling, contextual retrieval, and voice-enabled AI interactions using FastAPI, LangChain, React, FAISS, and Llama models. Developed a plug-and-play RAG architecture capable of crawling websites, generating contextual embeddings, and delivering accurate domain-specific responses. Designed a multi-model fallback system using Llama 70B, Nemotron, Qwen, and Llama 8B to improve reliability, availability, and response consistency. Implemented persistent FAISS indexing, caching, and auto-retry mechanisms to reduce downtime and optimize response latency. Integrated Groq Whisper-v3 for Speech-to-Text and Deepgram for natural Text-to-Speech communication, enabling seamless voice-based AI interactions. Delivered a scalable chatbot platform capable of handling contextual queries across multiple websites in real time."
  },
  {
    title: "UVFarms Official Website",
    subtitle: "Production-Ready Agri-Tech Platform",
    link: "www.uvfarms.in",
    image: "/projects/UVFARMS WEBSITE.png",
    description: "Developed and deployed the official UVFarms website using Next.js and React, creating a scalable digital platform supporting multiple agri-tech verticals. Built responsive and SEO-friendly user interfaces optimized for desktop, tablet, and mobile devices to ensure a seamless user experience across platforms. Designed a modular frontend architecture for improved scalability, maintainability, and faster feature development. Worked with modern prompt-engineering workflows and Gemini CLI (Antigravity) to accelerate development and deployment processes. Successfully launched and maintained the live production platform for UVFarms."
  },
  {
    title: "US Healthcare Financial Dashboard",
    subtitle: "Financial Analysis & Strategic Insights | 2025",
    image: "/projects/ushealthcare.png",
    description: "Analyzed 100K+ US healthcare records to identify cost trends, insurance coverage gaps, and financial deficits using data-driven financial analytics techniques. Built an interactive Power BI dashboard featuring KPI tracking, demographic insights, regional analysis, and scenario modeling to support strategic decision-making and cost optimization. Conducted multi-state trend analysis that identified a 60% rise in financial deficits and uncovered key demographic and regional insurance gaps. Developed strategic recommendations for payment optimization and cost-control initiatives, estimating potential annual recovery opportunities of ₹17–23.75 Cr."
  },
  {
    title: "Market Analysis & Business Understanding Report",
    subtitle: "Sales & Consumer Analytics | 2024",
    image: "/projects/market analyse.png",
    description: "Analyzed 106K+ sales records to uncover customer behavior patterns, regional performance trends, and product-level insights using data analytics and market research techniques. Delivered strategic recommendations to support revenue growth, omnichannel optimization, and targeted customer engagement initiatives. Evaluated online versus in-store sales performance, identified regional growth opportunities, and analyzed customer spending behavior to improve business decision-making. Developed recommendations for cross-selling, product bundling, and seasonal growth strategies while transforming raw business data into actionable insights through KPI reporting and strategic analysis."
  },
  {
    title: "Event Marketing Professional",
    subtitle: "Strategic Event Analysis | SRMIST | 2023",
    image: "/projects/bookfair.png",
    description: "Conducted strategic analysis of major public and institutional events including the Chennai Book Fair and International Leather Expo, focusing on engagement, operations, budgeting, and ROI.",
    skills: "Event Marketing • Budget Analysis • Market Research • Operational Planning • Strategic Reporting",
    points: []
  },
  {
    title: "Instagram Influencer Marketing Impact",
    subtitle: "Consumer Behavior Research | SRMIST | 2022",
    image: "/projects/instagram.jpeg",
    description: "Performed a quantitative research study on Instagram influencer marketing and its impact on customer trust and purchase intention using statistical analysis and survey-based insights.",
    skills: "Consumer Research • Digital Marketing Analytics • Statistical Analysis • Data Interpretation",
    points: []
  }
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative border border-vintage-gold/20 bg-white/40 backdrop-blur-sm p-8 hover:bg-white/60 hover:border-vintage-gold/50 transition-all duration-500 rounded-sm"
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-vintage-gold/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
      
      {project.image && (
        <div className="mb-6 overflow-hidden rounded-sm border border-vintage-gold/10 relative group">
          <div className="absolute inset-0 bg-vintage-burgundy/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-48 md:h-64 object-cover object-top opacity-90 group-hover:opacity-100 transform group-hover:scale-105 transition-all duration-700" 
            loading="lazy"
          />
        </div>
      )}

      <div className="mb-6 border-b border-vintage-gold/10 pb-6">
        <h3 className="text-2xl font-serif text-vintage-charcoal mb-1 flex items-baseline justify-between">
          <span>{project.title}</span>
          {project.link && (
            <a href={`https://${project.link}`} target="_blank" rel="noreferrer" className="text-xs font-sans uppercase tracking-widest text-vintage-gold hover:text-vintage-burgundy transition-colors">
              Visit Site ↗
            </a>
          )}
        </h3>
        <p className="font-sans text-sm tracking-widest uppercase text-vintage-gold/80">{project.subtitle}</p>
      </div>

      <div className="space-y-4 font-sans text-sm text-vintage-charcoal/80 mb-6">
        {project.problem && <p><strong className="text-vintage-charcoal font-medium">Problem:</strong> {project.problem}</p>}
        {project.role && <p><strong className="text-vintage-charcoal font-medium">Role:</strong> {project.role}</p>}
        {project.description && <p className="leading-relaxed">{project.description}</p>}
        {project.technologies && <p><strong className="text-vintage-charcoal font-medium">Technologies:</strong> {project.technologies}</p>}
        {project.skills && <p><strong className="text-vintage-charcoal font-medium">Skills:</strong> {project.skills}</p>}
      </div>

      {project.points && project.points.length > 0 && (
        <ul className="space-y-2 font-sans text-sm text-vintage-charcoal/70 list-none">
          {project.points.map((point, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-vintage-gold mt-[2px] opacity-70">❖</span>
              <span className="leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-4 mb-16"
      >
        <h2 className="text-3xl md:text-4xl text-vintage-burgundy">Selected Works</h2>
        <div className="flex-grow h-[1px] bg-vintage-gold/30"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
