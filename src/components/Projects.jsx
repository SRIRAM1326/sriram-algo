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
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: "easeOut" }}
      className="group relative h-full rounded-[40px]"
    >
      {/* iOS Glassmorphic Card Container */}
      <div className="bg-white/70 backdrop-blur-3xl rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-white/80 flex flex-col overflow-hidden h-full relative group-hover:shadow-[0_30px_70px_rgba(0,0,0,0.1)] transition-all duration-500 group-hover:-translate-y-1">
        
        {/* Inner Highlight for depth */}
        <div className="absolute inset-0 rounded-[40px] pointer-events-none shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] z-30"></div>

        {/* Top Visual */}
        <div className="relative h-48 md:h-56 w-full shrink-0 overflow-hidden z-10 bg-gray-100/50">
          {project.image ? (
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-300" 
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-black/5"></div>
          )}

          {/* Floating Glassmorphic Chips (iOS Style) */}
          {project.technologies && (
            <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-2 z-20">
              {project.technologies.split('•').slice(0, 3).map((tech, i) => (
                <span key={i} className="px-3 py-1.5 bg-white/60 backdrop-blur-md border border-white/80 text-gray-800 text-[9px] font-bold uppercase tracking-widest rounded-full shadow-sm">
                  {tech.trim()}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Card Content Body */}
        <div className="px-6 md:px-8 pb-8 flex flex-col flex-grow z-20 relative bg-gradient-to-b from-white/80 to-white/30 pt-4 -mt-2">
          <div className="mb-3">
            <p className="font-sans text-[10px] tracking-widest uppercase text-granger-primary font-bold mb-2">
              {project.subtitle}
            </p>
            <h3 className="text-xl md:text-2xl font-sans font-bold text-gray-900 mb-2 tracking-tight leading-[1.2]">
              {project.title}
            </h3>
          </div>

          {project.description && (
            <p className="font-sans text-xs md:text-sm text-gray-600 font-medium leading-[1.6] mb-6">
              {project.description}
            </p>
          )}

          {/* Action Buttons (iOS Style) */}
          <div className="mt-auto pt-2 flex flex-wrap items-center gap-2.5">
            {project.caseStudyUrl && (
              <button 
                onClick={() => onOpenCaseStudy(project)}
                className="px-5 py-2.5 bg-[#0B0C0E] hover:bg-black text-white text-[10px] font-sans font-bold uppercase tracking-widest rounded-full transition-all shadow-md active:scale-95 flex items-center gap-2 group/btn"
              >
                <span>Case Study</span>
                <span className="text-sm transition-transform group-hover/btn:translate-x-1">→</span>
              </button>
            )}

            {project.posterImage && (
              <button
                onClick={() => onOpenPosterModal({
                  title: `${project.title} Poster`,
                  subtitle: project.subtitle,
                  image: project.posterImage,
                  caseStudyUrl: project.caseStudyUrl
                })}
                className="px-5 py-2.5 bg-black/5 hover:bg-black/10 text-gray-900 text-[10px] font-sans font-bold uppercase tracking-widest rounded-full transition-all flex items-center gap-2 backdrop-blur-md active:scale-95"
              >
                <span>Poster</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const PosterCard = ({ poster, index, onOpenPosterModal, onOpenCaseStudy }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
      className="group relative bg-white border border-granger-border hover:border-granger-border transition-all duration-500 rounded-[32px] flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl p-2"
    >
      <div>
        {/* Poster Image Frame Container */}
        <div 
          onClick={() => onOpenPosterModal(poster)}
          className="overflow-hidden rounded-[24px] relative group/img bg-granger-bg cursor-pointer aspect-[3/4] flex items-center justify-center p-2"
        >
          <img 
            src={poster.image} 
            alt={poster.title} 
            className="w-full h-full object-contain opacity-95 group-hover/img:opacity-100 transform group-hover/img:scale-105 transition-all duration-500 drop-shadow-md" 
            loading="lazy"
          />
          <div className="absolute inset-0 bg-granger-dark/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white font-sans text-xs uppercase tracking-widest font-bold backdrop-blur-[2px]">
            <span className="bg-granger-dark px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
              <span>🔍</span> Click to View
            </span>
          </div>
        </div>

        {/* Card Info Body */}
        <div className="p-6">
          <h3 className="text-lg font-sans font-bold text-granger-dark mb-1 leading-snug tracking-tight">
            {poster.title}
          </h3>
          <p className="font-sans text-xs tracking-wider uppercase text-granger-primary font-bold mb-4">
            {poster.subtitle}
          </p>

          {poster.technologies && (
            <div className="flex flex-wrap gap-2 items-center">
              {poster.technologies.split('•').map((tech, i) => (
                <span key={i} className="px-3 py-1 text-[9px] font-sans font-bold bg-granger-bg text-granger-dark border border-granger-border rounded-full uppercase tracking-wider">
                  {tech.trim()}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-6 pb-6 pt-3 flex items-center justify-between gap-2 mt-auto border-t border-granger-border">
        <button 
          onClick={() => onOpenPosterModal(poster)}
          className="text-xs font-sans uppercase tracking-wider text-granger-text hover:text-granger-primary font-bold transition-colors flex items-center gap-1 cursor-pointer"
        >
          <span>🖼️ Full Size</span>
        </button>
        
        {poster.caseStudyUrl && (
          <button 
            onClick={() => onOpenCaseStudy(poster)}
            className="text-xs font-sans uppercase tracking-wider text-granger-primary hover:text-granger-dark font-bold transition-colors flex items-center gap-1 cursor-pointer ml-auto"
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-5xl h-[92vh] bg-granger-card rounded-[32px] shadow-2xl flex flex-col overflow-hidden"
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-white flex items-center justify-between border-b border-granger-border shrink-0">
          <div>
            <h3 className="font-sans text-lg md:text-xl text-granger-dark leading-tight font-bold tracking-tight">
              {poster.title}
            </h3>
            <p className="font-sans text-[10px] text-granger-primary tracking-widest uppercase font-bold">
              A2 Design Poster Preview
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={poster.image}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 text-[10px] font-sans uppercase tracking-widest bg-granger-bg hover:bg-granger-light/30 text-granger-dark font-bold rounded-full transition-colors flex items-center gap-1"
            >
              <span>Original ↗</span>
            </a>
            {poster.caseStudyUrl && (
              <button
                onClick={() => {
                  onClose();
                  onOpenCaseStudy(poster);
                }}
                className="px-4 py-2 text-[10px] font-sans uppercase tracking-widest bg-granger-primary hover:bg-granger-primary/90 text-white font-bold rounded-full transition-colors flex items-center gap-1"
              >
                <span>Case Study →</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center bg-granger-bg hover:bg-granger-border text-granger-dark rounded-full transition-colors cursor-pointer text-sm font-bold"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Modal Body - High Resolution Poster Display */}
        <div className="flex-grow w-full h-full bg-granger-bg/50 p-4 flex items-center justify-center overflow-auto relative">
          <img 
            src={poster.image} 
            alt={poster.title} 
            className="max-h-full max-w-full object-contain rounded-xl shadow-lg" 
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/60 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-6xl h-[92vh] bg-white rounded-[32px] shadow-2xl flex flex-col overflow-hidden"
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-white flex items-center justify-between border-b border-granger-border shrink-0">
          <div>
            <h3 className="font-sans text-lg md:text-xl text-granger-dark leading-tight font-bold tracking-tight">
              {project.title}
            </h3>
            <p className="font-sans text-[10px] text-granger-primary tracking-widest uppercase font-bold">
              Interactive Case Study
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.caseStudyUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 text-[10px] font-sans uppercase tracking-widest bg-granger-bg hover:bg-granger-light/30 text-granger-dark font-bold rounded-full transition-colors flex items-center gap-1"
            >
              <span>Open in New Tab ↗</span>
            </a>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center bg-granger-bg hover:bg-granger-border text-granger-dark rounded-full transition-colors cursor-pointer text-sm font-bold"
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
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16"
      >
        <div className="flex items-center gap-4">
          <h2 className="text-2xl md:text-3xl text-granger-dark font-sans font-black uppercase tracking-widest">Selected Works</h2>
          <div className="hidden sm:block w-16 h-[2px] bg-granger-light rounded-full"></div>
        </div>

        {/* Filter Navigation Tabs with Poster Button */}
        <div className="flex items-center gap-2 bg-white p-1 border border-granger-border rounded-full self-start md:self-auto shadow-sm">
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-5 py-2.5 text-xs font-sans uppercase tracking-widest transition-all duration-300 rounded-full font-bold cursor-pointer ${
              activeTab === 'projects'
                ? 'bg-granger-dark text-white shadow-md'
                : 'text-granger-text hover:text-granger-dark hover:bg-granger-bg'
            }`}
          >
            Projects ({projects.length})
          </button>
          <button
            id="poster-button"
            onClick={() => setActiveTab('poster')}
            className={`px-5 py-2.5 text-xs font-sans uppercase tracking-widest transition-all duration-300 rounded-full font-bold cursor-pointer flex items-center gap-2 ${
              activeTab === 'poster'
                ? 'bg-granger-dark text-white shadow-md'
                : 'text-granger-text hover:text-granger-dark hover:bg-granger-bg'
            }`}
          >
            <span>🖼️</span>
            <span>Poster ({posters.length})</span>
          </button>
        </div>
      </motion.div>

      {/* Render Projects View */}
      {activeTab === 'projects' && (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          {projects.map((project, index) => {
            // Asymmetric layout: 0th spans 3, 1st spans 2, 2nd spans 2, 3rd spans 3...
            const isLarge = index % 4 === 0 || index % 4 === 3;
            return (
              <div key={project.title} className={`col-span-1 ${isLarge ? 'lg:col-span-3' : 'lg:col-span-2'}`}>
                <ProjectCard 
                  project={project} 
                  index={index} 
                  onOpenCaseStudy={(proj) => setActiveCaseStudyProject(proj)}
                  onOpenPosterModal={(post) => setActivePosterModal(post)}
                />
              </div>
            );
          })}
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

