import { Globe, Cable, BrainCircuit, DatabaseZap, TrendingUp, Activity, Link as LinkIcon } from 'lucide-react';

const techItems = [
  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "FastAPI", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
  { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "Redis", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
  { name: "REST APIs", icon: <Globe className="w-5 h-5 text-blue-500" /> },
  { name: "WebSockets", icon: <Cable className="w-5 h-5 text-green-500" /> },
  { name: "LangChain", icon: <LinkIcon className="w-5 h-5 text-gray-700" /> },
  { name: "LLMs", icon: <BrainCircuit className="w-5 h-5 text-purple-500" /> },
  { name: "RAG", icon: <DatabaseZap className="w-5 h-5 text-orange-500" /> },
  { name: "NumPy", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
  { name: "Pandas", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
  { name: "Algorithmic Trading", icon: <TrendingUp className="w-5 h-5 text-teal-500" /> },
  { name: "Quantitative Analysis", icon: <Activity className="w-5 h-5 text-indigo-500" /> },
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg" },
  { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
];

const TechMarquee = () => {
  return (
    <div className="w-full bg-white/40 border-y border-granger-border/40 py-5 overflow-hidden flex items-center shadow-sm">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[...techItems, ...techItems, ...techItems].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-8 text-granger-text hover:text-granger-dark transition-colors duration-300"
          >
            {item.src ? (
              <img src={item.src} alt={item.name} className="w-5 h-5 object-contain" />
            ) : (
              item.icon
            )}
            <span className="font-sans font-bold text-[13px] tracking-wide whitespace-nowrap">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;
