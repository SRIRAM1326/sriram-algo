import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: "Enterprise B2B Wholesale ERP & Loyalty Platform",
    subtitle: "Integrated Multi-Portal B2B System & Loyalty Engine",
    image: "/projects/erp.png",
    posterImage: "/posterimage/02_erp_A2_Poster.png",
    description: "Enterprise B2B wholesale ERP platform with three integrated portals (Admin Web, Sales Rep PWA, Buyer PWA) connected via FastAPI & PostgreSQL.",
    technologies: "FastAPI • SQLAlchemy • PostgreSQL • React/PWA • Docker • Git",
    highlight: "3 Integrated Portals • Automated Rewards & Geofencing Engine",
    caseStudyUrl: "/html-casestudy/ERP_Integrated_Ecosystem_Case_Study.html"
  },
  {
    title: "NanoProfitsAI",
    subtitle: "Fully Automated Algo Trading Platform",
    image: "/projects/nanoprofits.png",
    posterImage: "/posterimage/04_nanoprofits_A2_Poster.png",
    description: "Low-latency options trading platform designed for automated trade execution and real-time market analytics.",
    technologies: "Python • Flask • WebSockets • REST APIs",
    highlight: "Sub-100ms Execution Latency",
    caseStudyUrl: "/html-casestudy/nanoprofits.html"
  },
  {
    title: "MinnalMoney",
    subtitle: "Real-Time Options Scalping Terminal",
    image: "/projects/minnalmoney.png",
    posterImage: "/posterimage/03_minnal_A2_Poster.png",
    description: "High-performance trading terminal focused on sub-second execution, broker-session reliability, and live risk analytics.",
    technologies: "Python • Flask • WebSockets • SSE • REST APIs",
    highlight: "100+ Live Tick Streams • 99.9% Session Availability",
    caseStudyUrl: "/html-casestudy/minnalmoney.html"
  },
  {
    title: "Thedal",
    subtitle: "Universal Website-Aware RAG Chatbot with Voice",
    image: "/projects/RAGCHAT.png",
    posterImage: "/posterimage/05_thedal_A2_Poster.png",
    description: "Full-stack enterprise-grade RAG chatbot featuring real-time website crawling, contextual retrieval, and voice AI.",
    technologies: "FastAPI • LangChain • React • FAISS • Llama Models",
    highlight: "Voice AI & Multi-Model Fallback System",
    caseStudyUrl: "/html-casestudy/Thedal.html"
  },
  {
    title: "UVFarms Official Website",
    subtitle: "Production-Ready Agri-Tech Platform",
    link: "www.uvfarms.in",
    image: "/projects/UVFARMS WEBSITE.png",
    description: "Scalable, responsive digital platform supporting multiple agri-tech verticals with modern frontend architecture.",
    technologies: "Next.js • React • Tailwind CSS • Gemini CLI",
    highlight: "Live Production Platform",
    caseStudyUrl: "https://www.uvfarms.in"
  },
  {
    title: "Sri Kubera Puri",
    subtitle: "Tamil Cultural & Spiritual Website",
    link: "www.srikuberapuri.com",
    image: "/projects/srikuberapuri.png",
    posterImage: "/posterimage/01_kuberapuri_A2_Poster.png",
    description: "Responsive informational website presenting Tamil spiritual and cultural content with custom traditional visual themes.",
    technologies: "HTML5 • CSS3 • JavaScript • Responsive Design • Noto Serif Tamil",
    highlight: "Custom Tamil Typography & Interactive Gallery",
    caseStudyUrl: "/html-casestudy/Kuberapuri.html"
  },
  {
    title: "US Healthcare Financial Dashboard",
    subtitle: "Financial Analysis & Strategic Insights | 2025",
    image: "/projects/ushealthcare.png",
    posterImage: "/posterimage/06_healthcare_A2_Poster.png",
    description: "Data-driven financial analytics on 100K+ US healthcare records identifying cost trends and insurance deficits.",
    technologies: "Power BI • Financial Analytics • Data Modeling",
    highlight: "₹17–23.75 Cr Potential Annual Recovery",
    caseStudyUrl: "/html-casestudy/US-Healthcare-Dashboard-Technical-Analysis.html"
  },
  {
    title: "Market Analysis & Business Understanding Report",
    subtitle: "Sales & Consumer Analytics | 2024",
    image: "/projects/market analyse.png",
    posterImage: "/posterimage/09_market_A2_Poster.png",
    description: "Strategic sales analysis of 106K+ records uncovering customer behavior patterns, regional trends, and growth opportunities.",
    technologies: "Data Analytics • Market Research • KPI Reporting",
    highlight: "106K+ Records Analyzed • Omnichannel Insights",
    caseStudyUrl: "/html-casestudy/Market-Analysis-Report-Multicolor.html"
  },
  {
    title: "Event Marketing Professional",
    subtitle: "Strategic Event Analysis | SRMIST | 2023",
    image: "/projects/bookfair.png",
    posterImage: "/posterimage/07_event_A2_Poster.png",
    description: "Strategic analysis of major public events evaluating visitor engagement, venue logistics, budget, and ROI.",
    technologies: "Event Marketing • Budget Analysis • Market Research",
    highlight: "Multi-Day Exhibition Logistics & ROI Analysis",
    caseStudyUrl: "/html-casestudy/Event_Marketing_Report.html"
  },
  {
    title: "Instagram Influencer Marketing Impact",
    subtitle: "Consumer Behavior Research | SRMIST | 2022",
    image: "/projects/instagram.jpeg",
    posterImage: "/posterimage/08_instagram_A2_Poster.png",
    description: "Quantitative research on Instagram influencer marketing impact on customer trust and purchase intention.",
    technologies: "Consumer Research • Digital Analytics • Statistical Analysis",
    highlight: "Statistical Trust & Purchase Intention Model",
    caseStudyUrl: "/html-casestudy/Instagram_Impact_Complete.html"
  }
];

const posters = [
  {
    id: 1,
    title: "Sri Kubera Puri Poster",
    subtitle: "Tamil Cultural & Spiritual Platform (A2 Poster)",
    image: "/posterimage/01_kuberapuri_A2_Poster.png",
    technologies: "Design • Typography • Visual Identity",
    caseStudyUrl: "/html-casestudy/Kuberapuri.html"
  },
  {
    id: 2,
    title: "Enterprise ERP & Loyalty Platform Poster",
    subtitle: "Multi-Portal B2B System Architecture (A2 Poster)",
    image: "/posterimage/02_erp_A2_Poster.png",
    technologies: "System Architecture • Infographic • Workflow",
    caseStudyUrl: "/html-casestudy/ERP_Integrated_Ecosystem_Case_Study.html"
  },
  {
    id: 3,
    title: "MinnalMoney Scalping Terminal Poster",
    subtitle: "Real-Time Options Scalping Analytics (A2 Poster)",
    image: "/posterimage/03_minnal_A2_Poster.png",
    technologies: "Fintech • Real-Time Systems • Analytics Layout",
    caseStudyUrl: "/html-casestudy/minnalmoney.html"
  },
  {
    id: 4,
    title: "NanoProfitsAI Algo Trading Poster",
    subtitle: "Automated Options Trading Execution (A2 Poster)",
    image: "/posterimage/04_nanoprofits_A2_Poster.png",
    technologies: "Algorithmic Trading • Sub-100ms Latency Blueprint",
    caseStudyUrl: "/html-casestudy/nanoprofits.html"
  },
  {
    id: 5,
    title: "Thedal Universal RAG Chatbot Poster",
    subtitle: "Website-Aware RAG with Voice AI (A2 Poster)",
    image: "/posterimage/05_thedal_A2_Poster.png",
    technologies: "AI System Architecture • LangChain • RAG",
    caseStudyUrl: "/html-casestudy/Thedal.html"
  },
  {
    id: 6,
    title: "US Healthcare Financial Dashboard Poster",
    subtitle: "100K+ Medical Record Analytics (A2 Poster)",
    image: "/posterimage/06_healthcare_A2_Poster.png",
    technologies: "Data Analytics • Financial Insights • Power BI",
    caseStudyUrl: "/html-casestudy/US-Healthcare-Dashboard-Technical-Analysis.html"
  },
  {
    id: 7,
    title: "Event Marketing Professional Poster",
    subtitle: "Exhibition Logistics & ROI Analysis (A2 Poster)",
    image: "/posterimage/07_event_A2_Poster.png",
    technologies: "Event Logistics • Budget • Market Research",
    caseStudyUrl: "/html-casestudy/Event_Marketing_Report.html"
  },
  {
    id: 8,
    title: "Instagram Influencer Marketing Poster",
    subtitle: "Consumer Behavior Research (A2 Poster)",
    image: "/posterimage/08_instagram_A2_Poster.png",
    technologies: "Consumer Research • Statistical Models • Marketing",
    caseStudyUrl: "/html-casestudy/Instagram_Impact_Complete.html"
  },
  {
    id: 9,
    title: "Market Analysis & Business Report Poster",
    subtitle: "Omnichannel Consumer Analytics (A2 Poster)",
    image: "/posterimage/09_market_A2_Poster.png",
    technologies: "Omnichannel Analytics • Business Strategy • Report",
    caseStudyUrl: "/html-casestudy/Market-Analysis-Report-Multicolor.html"
  }
];

const ProjectCard = ({ project, index, onOpenCaseStudy, onOpenPosterModal }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative border border-vintage-gold/25 bg-white/50 backdrop-blur-sm hover:bg-white/70 hover:border-vintage-gold/60 transition-all duration-500 rounded-sm flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md h-full"
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-vintage-gold/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>

      <div>
        {/* Project Screenshot Header */}
        {project.image && (
          <div className="overflow-hidden border-b border-vintage-gold/20 relative group bg-vintage-charcoal/5">
            <div className="absolute inset-0 bg-vintage-burgundy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-52 md:h-60 object-cover object-top opacity-95 group-hover:opacity-100 transform group-hover:scale-105 transition-all duration-700" 
              loading="lazy"
            />
          </div>
        )}

        {/* Card Content Body */}
        <div className="p-6 md:p-8">
          <div className="mb-3">
            <h3 className="text-2xl font-serif text-vintage-charcoal mb-1 leading-snug">
              {project.title}
            </h3>
            <p className="font-sans text-xs tracking-widest uppercase text-vintage-gold font-semibold">{project.subtitle}</p>
          </div>

          {project.description && (
            <p className="font-sans text-sm text-vintage-charcoal/80 leading-relaxed mb-5">
              {project.description}
            </p>
          )}

          {project.technologies && (
            <div className="mb-5 flex flex-wrap gap-1.5 items-center">
              {project.technologies.split('•').map((tech, i) => (
                <span key={i} className="px-2.5 py-1 text-xs font-mono bg-vintage-gold/10 text-vintage-burgundy border border-vintage-gold/20 rounded-sm">
                  {tech.trim()}
                </span>
              ))}
            </div>
          )}

          {project.highlight && (
            <div className="mb-2 inline-flex items-center gap-2 px-3 py-1.5 bg-vintage-burgundy/5 border border-vintage-burgundy/20 rounded-sm text-xs font-medium text-vintage-burgundy">
              <span>❖</span>
              <span>{project.highlight}</span>
            </div>
          )}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 flex flex-wrap items-center justify-between gap-3 mt-auto">
        {project.link && (
          <a 
            href={project.link.startsWith('http') ? project.link : `https://${project.link}`} 
            target="_blank" 
            rel="noreferrer" 
            className="text-xs font-sans uppercase tracking-widest text-vintage-gold hover:text-vintage-burgundy font-semibold transition-colors flex items-center gap-1"
          >
            Visit Site ↗
          </a>
        )}

        {project.posterImage && (
          <button
            onClick={() => onOpenPosterModal({
              title: `${project.title} Poster`,
              subtitle: project.subtitle,
              image: project.posterImage,
              caseStudyUrl: project.caseStudyUrl
            })}
            className="text-xs font-sans uppercase tracking-wider text-vintage-burgundy hover:text-vintage-gold font-semibold transition-colors flex items-center gap-1 cursor-pointer bg-vintage-gold/10 px-2.5 py-1 rounded border border-vintage-gold/30 hover:border-vintage-gold"
          >
            <span>🖼️ View Poster</span>
          </button>
        )}

        {project.caseStudyUrl && (
          <button 
            onClick={() => onOpenCaseStudy(project)}
            className="text-xs font-sans uppercase tracking-widest text-vintage-gold hover:text-vintage-burgundy font-semibold transition-colors flex items-center gap-1 cursor-pointer ml-auto group/btn"
          >
            <span>View Case Study →</span>
          </button>
        )}
      </div>
    </motion.div>
  );
};

const PosterCard = ({ poster, index, onOpenPosterModal, onOpenCaseStudy }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="group relative border border-vintage-gold/30 bg-white/60 backdrop-blur-sm hover:bg-white hover:border-vintage-gold transition-all duration-500 rounded-sm flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl"
    >
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-vintage-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center z-20"></div>

      <div>
        {/* Poster Image Frame Container */}
        <div 
          onClick={() => onOpenPosterModal(poster)}
          className="overflow-hidden border-b border-vintage-gold/20 relative group/img bg-vintage-charcoal/90 cursor-pointer aspect-[3/4] flex items-center justify-center p-2"
        >
          <img 
            src={poster.image} 
            alt={poster.title} 
            className="w-full h-full object-contain opacity-95 group-hover/img:opacity-100 transform group-hover/img:scale-105 transition-all duration-500 drop-shadow-md" 
            loading="lazy"
          />
          <div className="absolute inset-0 bg-vintage-burgundy/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white font-sans text-xs uppercase tracking-widest font-semibold backdrop-blur-[2px]">
            <span className="bg-vintage-burgundy/90 px-4 py-2 rounded border border-vintage-gold/40 shadow-lg flex items-center gap-2 text-vintage-cream">
              <span>🔍</span> Click to View Full Poster
            </span>
          </div>
        </div>

        {/* Card Info Body */}
        <div className="p-5">
          <h3 className="text-lg font-serif text-vintage-charcoal mb-1 leading-snug font-semibold">
            {poster.title}
          </h3>
          <p className="font-sans text-xs tracking-wider uppercase text-vintage-gold font-semibold mb-3">
            {poster.subtitle}
          </p>

          {poster.technologies && (
            <div className="flex flex-wrap gap-1 items-center">
              {poster.technologies.split('•').map((tech, i) => (
                <span key={i} className="px-2 py-0.5 text-[10px] font-mono bg-vintage-gold/10 text-vintage-burgundy border border-vintage-gold/20 rounded-sm">
                  {tech.trim()}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-5 pb-5 pt-3 flex items-center justify-between gap-2 mt-auto border-t border-vintage-gold/15">
        <button 
          onClick={() => onOpenPosterModal(poster)}
          className="text-xs font-sans uppercase tracking-wider text-vintage-burgundy hover:text-vintage-gold font-semibold transition-colors flex items-center gap-1 cursor-pointer"
        >
          <span>🖼️ Full Size</span>
        </button>
        
        {poster.caseStudyUrl && (
          <button 
            onClick={() => onOpenCaseStudy(poster)}
            className="text-xs font-sans uppercase tracking-wider text-vintage-gold hover:text-vintage-burgundy font-semibold transition-colors flex items-center gap-1 cursor-pointer ml-auto"
          >
            <span>Case Study →</span>
          </button>
        )}
      </div>
    </motion.div>
  );
};

const PosterLightboxModal = ({ poster, onClose, onOpenCaseStudy }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!poster) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-5xl h-[92vh] bg-vintage-paper rounded-sm border border-vintage-gold/50 shadow-2xl flex flex-col overflow-hidden"
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-vintage-burgundy text-white flex items-center justify-between border-b border-vintage-gold/30 shrink-0">
          <div>
            <h3 className="font-serif text-lg md:text-xl text-vintage-cream leading-tight font-semibold">
              {poster.title}
            </h3>
            <p className="font-sans text-xs text-vintage-gold tracking-widest uppercase">
              A2 Design Poster Preview
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={poster.image}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 text-xs font-sans uppercase tracking-widest bg-vintage-gold/20 hover:bg-vintage-gold/30 text-vintage-cream border border-vintage-gold/40 rounded-sm transition-colors flex items-center gap-1"
            >
              <span>Original Image ↗</span>
            </a>
            {poster.caseStudyUrl && (
              <button
                onClick={() => {
                  onClose();
                  onOpenCaseStudy(poster);
                }}
                className="px-3 py-1.5 text-xs font-sans uppercase tracking-widest bg-vintage-gold hover:bg-vintage-gold-light text-vintage-burgundy font-semibold rounded-sm transition-colors flex items-center gap-1"
              >
                <span>View Case Study →</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 text-vintage-cream/80 hover:text-vintage-cream hover:bg-white/10 rounded-sm transition-colors cursor-pointer text-xl leading-none"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Modal Body - High Resolution Poster Display */}
        <div className="flex-grow w-full h-full bg-vintage-charcoal/95 p-4 flex items-center justify-center overflow-auto relative">
          <img 
            src={poster.image} 
            alt={poster.title} 
            className="max-h-full max-w-full object-contain rounded border border-vintage-gold/30 shadow-2xl" 
          />
        </div>
      </motion.div>
    </div>
  );
};

const CaseStudyModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/75 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-6xl h-[92vh] bg-vintage-paper rounded-sm border border-vintage-gold/40 shadow-2xl flex flex-col overflow-hidden"
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-vintage-burgundy text-white flex items-center justify-between border-b border-vintage-gold/30 shrink-0">
          <div>
            <h3 className="font-serif text-lg md:text-xl text-vintage-cream leading-tight">
              {project.title}
            </h3>
            <p className="font-sans text-xs text-vintage-gold tracking-widest uppercase">
              Interactive Case Study
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.caseStudyUrl}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 text-xs font-sans uppercase tracking-widest bg-vintage-gold/20 hover:bg-vintage-gold/30 text-vintage-cream border border-vintage-gold/40 rounded-sm transition-colors flex items-center gap-1"
            >
              <span>Open in New Tab ↗</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-vintage-cream/80 hover:text-vintage-cream hover:bg-white/10 rounded-sm transition-colors cursor-pointer text-xl leading-none"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-grow w-full h-full bg-white relative">
          <iframe
            src={project.caseStudyUrl}
            title={`${project.title} Case Study`}
            className="w-full h-full border-none"
          />
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState('projects'); // 'projects' or 'poster'
  const [activeCaseStudyProject, setActiveCaseStudyProject] = useState(null);
  const [activePosterModal, setActivePosterModal] = useState(null);

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16"
      >
        <div className="flex items-center gap-4">
          <h2 className="text-3xl md:text-4xl text-vintage-burgundy font-serif">Selected Works</h2>
          <div className="hidden sm:block w-16 h-[1px] bg-vintage-gold/40"></div>
        </div>

        {/* Filter Navigation Tabs with Poster Button */}
        <div className="flex items-center gap-2 bg-vintage-burgundy/5 p-1.5 border border-vintage-gold/30 rounded-sm self-start md:self-auto shadow-inner">
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-5 py-2 text-xs font-sans uppercase tracking-widest transition-all duration-300 rounded-sm font-bold cursor-pointer ${
              activeTab === 'projects'
                ? 'bg-vintage-burgundy text-vintage-cream shadow-md'
                : 'text-vintage-charcoal/70 hover:text-vintage-burgundy hover:bg-vintage-gold/15'
            }`}
          >
            Projects ({projects.length})
          </button>
          <button
            id="poster-button"
            onClick={() => setActiveTab('poster')}
            className={`px-5 py-2 text-xs font-sans uppercase tracking-widest transition-all duration-300 rounded-sm font-bold cursor-pointer flex items-center gap-2 ${
              activeTab === 'poster'
                ? 'bg-vintage-burgundy text-vintage-cream shadow-md'
                : 'text-vintage-charcoal/70 hover:text-vintage-burgundy hover:bg-vintage-gold/15'
            }`}
          >
            <span>🖼️</span>
            <span>Poster ({posters.length})</span>
          </button>
        </div>
      </motion.div>

      {/* Render Projects View */}
      {activeTab === 'projects' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index} 
              onOpenCaseStudy={(proj) => setActiveCaseStudyProject(proj)}
              onOpenPosterModal={(post) => setActivePosterModal(post)}
            />
          ))}
        </div>
      )}

      {/* Render Posters View */}
      {activeTab === 'poster' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posters.map((poster, index) => (
            <PosterCard 
              key={poster.id} 
              poster={poster} 
              index={index} 
              onOpenPosterModal={(post) => setActivePosterModal(post)}
              onOpenCaseStudy={(post) => setActiveCaseStudyProject(post)}
            />
          ))}
        </div>
      )}

      {/* Case Study Modal */}
      <AnimatePresence>
        {activeCaseStudyProject && (
          <CaseStudyModal 
            project={activeCaseStudyProject} 
            onClose={() => setActiveCaseStudyProject(null)} 
          />
        )}
      </AnimatePresence>

      {/* Poster Lightbox Modal */}
      <AnimatePresence>
        {activePosterModal && (
          <PosterLightboxModal 
            poster={activePosterModal} 
            onClose={() => setActivePosterModal(null)} 
            onOpenCaseStudy={(proj) => setActiveCaseStudyProject(proj)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

