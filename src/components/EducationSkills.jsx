import { motion } from 'framer-motion';

const certifications = [
  "SQL Basics — HackerRank, 2024",
  "Advanced Excel — Internshala, 2024",
  "Microsoft Copilot — Microsoft / LinkedIn, 2024",
  "Introduction to Data Analysis with Excel — Coursera, 2024",
  "Data Analytics & Visualization — Accenture, 2024",
  "Data Visualization — Tata Group, 2025",
  "Data Analytics — Deloitte Australia, 2025"
];

const educationList = [
  {
    institution: "SRM Institute of Science and Technology",
    location: "Chennai, India",
    degree: "Bachelor of Commerce (B.Com), Information Systems Management",
    timeline: "2021 – 2023",
    details: "Relevant Coursework: Principles of Management (NPTEL), SPSS (IBM)"
  },
  {
    institution: "SBOA Matriculation and Higher Secondary School",
    location: "Chennai, Tamil Nadu",
    degree: "Higher Secondary Education",
    timeline: "2020 – 2021",
    details: "Studied Accounting, Economics, Commerce, and Business Mathematics."
  }
];

const skillGroups = [
  {
    title: "AI & Quantitative Engineering",
    icon: "🧠",
    subgroups: [
      { category: "Quantitative & Trading", items: "Algorithmic Trading, Quantitative Analysis, Options Trading, Strategy Development, Backtesting, Real-Time Market Data, Trading APIs" },
      { category: "AI / LLM Engineering", items: "LLMs, RAG Pipelines, LangChain, FAISS, Prompt Engineering, Multi-Model Systems" },
      { category: "Speech & Data", items: "Speech-to-Text (STT), Voice AI, Power BI, Tableau, Interactive Dashboards, Pandas, NumPy" }
    ]
  },
  {
    title: "Software Engineering & Systems",
    icon: "⚙️",
    subgroups: [
      { category: "Programming", items: "Python, JavaScript, TypeScript, SQL" },
      { category: "Backend & APIs", items: "FastAPI, Flask, REST APIs, Event-Driven Architecture, WebSockets, ZeroMQ" },
      { category: "Frontend & DBs", items: "React, Next.js, Tailwind CSS, PostgreSQL, Redis, Docker, Docker Compose" }
    ]
  },
  {
    title: "Tools & Professional Skills",
    icon: "🛠️",
    subgroups: [
      { category: "Development Tools", items: "Git, GitHub, VS Code, Jupyter, Coolify, Antigravity, AI-Assisted Coding" },
      { category: "Professional Skills", items: "Problem Solving, System Design, Technical Documentation, Project Management" }
    ]
  }
];

const EducationSkills = () => {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto border-t border-granger-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

        {/* Education Column */}
        <motion.div
          id="education"
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-5"
        >
          <h2 className="text-2xl md:text-3xl font-sans font-black text-granger-dark uppercase tracking-widest mb-12 flex items-center gap-4">
            <span>Education</span>
          </h2>

          <div className="space-y-10 relative before:absolute before:inset-y-0 before:left-[5px] before:w-[2px] before:bg-gradient-to-b before:from-granger-border before:to-transparent ml-2">
            {educationList.map((edu, i) => (
              <div key={i} className="relative pl-8 md:pl-10">
                <div className="absolute left-0 w-3 h-3 bg-granger-primary rounded-full mt-1.5 -ml-[1px] shadow-[0_0_0_4px_#F4F4F6] z-10"></div>
                <h3 className="text-xl font-sans font-bold text-granger-dark leading-snug mb-1">{edu.institution}</h3>
                <p className="font-sans text-[10px] font-bold tracking-wider uppercase text-granger-primary mb-3">{edu.timeline} | {edu.location}</p>
                <p className="font-sans text-sm font-bold text-granger-text mb-2">{edu.degree}</p>
                <p className="font-sans text-sm font-medium text-gray-500 italic">{edu.details}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl md:text-2xl font-sans font-black text-granger-dark uppercase tracking-widest mt-16 mb-8 flex items-center gap-4">
            <span>Certifications</span>
          </h3>

          <ul className="space-y-4 font-sans text-sm text-granger-text font-medium list-none">
            {certifications.map((cert, i) => (
              <li key={i} className="flex gap-3 items-start p-4 bg-white border border-granger-border rounded-[16px] shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
                <span className="text-granger-primary mt-[2px]">✦</span>
                <span className="leading-relaxed">{cert}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Skills Column */}
        <motion.div
          id="skills"
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <h2 className="text-2xl md:text-3xl font-sans font-black text-granger-dark uppercase tracking-widest mb-12 flex items-center gap-4">
            <span>Core Expertise</span>
          </h2>

          <div className="space-y-6">
            {skillGroups.map((group, i) => (
              <div key={i} className="granger-card p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-granger-border">
                  <span className="text-2xl">{group.icon}</span>
                  <h4 className="font-sans font-extrabold text-xl text-granger-dark tracking-tight">{group.title}</h4>
                </div>
                
                <div className="space-y-6">
                  {group.subgroups.map((sub, idx) => (
                    <div key={idx} className="relative">
                      <h5 className="font-sans text-xs uppercase tracking-widest text-granger-primary font-bold mb-3">{sub.category}</h5>
                      <div className="flex flex-wrap gap-2">
                        {sub.items.split(',').map((item, itemIdx) => (
                          <span key={itemIdx} className="px-4 py-2 bg-granger-bg text-granger-dark text-[11px] font-sans font-bold rounded-full border border-granger-border/50 uppercase tracking-wider shadow-sm hover:border-granger-primary hover:text-granger-primary transition-colors cursor-default">
                            {item.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default EducationSkills;
