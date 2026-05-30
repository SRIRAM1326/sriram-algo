import { motion } from 'framer-motion';

const certifications = [
  "SQL Basics – HackerRank, 2024",
  "Advanced Excel – Internshala, 2024",
  "Microsoft Co-Pilot – Microsoft/LinkedIn, 2024",
  "Coursera: Intro to Data Analysis with Excel, 2024",
  "Accenture: Data Analytics & Visualization, 2024",
  "Tata Group: Data Visualization, 2025",
  "Deloitte Australia: Data Analytics, 2025",

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

const skills = [
  { category: "Programming Languages", items: "Python" },
  { category: "Python Libraries & Frameworks", items: "Pandas, NumPy, Matplotlib, Flask, FastAPI, WebSockets, ZeroMQ" },
  { category: "Backend & APIs", items: "REST APIs, API Integration, Real-Time Data Processing, Event-Driven Architecture" },
  { category: "AI / LLM Engineering", items: "Large Language Models (LLMs), LangChain, RAG Pipelines, Prompt Engineering, AI Chatbots" },
  { category: "Speech & Audio Processing", items: "Speech-to-Text (STT), Audio Analytics, GroqAI, Deepgram, Voice AI Pipelines" },
  { category: "Data Analytics & Visualization", items: "Power BI, Tableau, Data Analysis, Interactive Dashboards, Data Visualization" },
  { category: "Microsoft Office Suite", items: "Microsoft Excel (Pivot Tables, VLOOKUP), PowerPoint, Word" },
  { category: "Soft Skills", items: "Problem Solving, Effective Communication, Collaboration, Documentation, Requirement Analysis, Report Presentation, Deadline Management" },
];

const EducationSkills = () => {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto border-t border-vintage-gold/10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* Education Column */}
        <motion.div
          id="education"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl text-vintage-burgundy mb-12 flex items-center gap-4">
            <span>Education</span>
            <span className="flex-grow h-[1px] bg-vintage-gold/30"></span>
          </h2>

          <div className="space-y-12">
            {educationList.map((edu, i) => (
              <div key={i} className="relative">
                <h3 className="text-xl font-serif text-vintage-charcoal leading-snug mb-1">{edu.institution}</h3>
                <p className="font-sans text-xs tracking-widest uppercase text-vintage-gold/80 mb-3">{edu.timeline} | {edu.location}</p>
                <p className="font-sans text-sm font-medium text-vintage-charcoal/90 mb-2">{edu.degree}</p>
                <p className="font-sans text-sm text-vintage-charcoal/70 italic">{edu.details}</p>
              </div>
            ))}
          </div>

          <h3 className="text-2xl text-vintage-burgundy mt-16 mb-8 flex items-center gap-4">
            <span>Certifications</span>
            <span className="flex-grow h-[1px] bg-vintage-gold/30"></span>
          </h3>

          <ul className="space-y-4 font-sans text-sm text-vintage-charcoal/80 list-none">
            {certifications.map((cert, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="text-vintage-gold mt-[2px] opacity-70">❖</span>
                <span className="leading-relaxed">{cert}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Skills Column */}
        <motion.div
          id="skills"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl text-vintage-burgundy mb-12 flex items-center gap-4">
            <span className="flex-grow h-[1px] bg-vintage-gold/30 hidden md:block"></span>
            <span>Skills</span>
            <span className="flex-grow h-[1px] bg-vintage-gold/30 md:hidden"></span>
          </h2>

          <div className="space-y-6">
            {skills.map((skill, i) => (
              <div key={i} className="border-b border-vintage-gold/10 pb-4 last:border-0">
                <h4 className="font-serif text-lg text-vintage-charcoal mb-1">{skill.category}</h4>
                <p className="font-sans text-sm text-vintage-charcoal/70 leading-relaxed">
                  {skill.items}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default EducationSkills;
