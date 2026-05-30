import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl text-vintage-burgundy">Experience</h2>
          <div className="flex-grow h-[1px] bg-vintage-gold/30"></div>
        </div>

        <div className="relative border-l border-vintage-gold/20 pl-8 pb-8">
          <div className="absolute w-3 h-3 bg-vintage-ivory border border-vintage-gold rounded-full -left-[6.5px] top-2"></div>
          
          <div className="mb-2 flex flex-col md:flex-row md:justify-between md:items-baseline gap-2">
            <h3 className="text-2xl font-serif text-vintage-charcoal">Algorithmic Trading Developer</h3>
            <span className="font-sans text-xs tracking-widest uppercase text-vintage-gold font-medium">Dec 2024 – Present</span>
          </div>
          
          <div className="mb-6 flex items-center gap-2 font-sans text-sm text-vintage-charcoal/70">
            <span className="font-semibold text-vintage-charcoal">UVFarms</span>
            <span>•</span>
            <span>Greater Chennai Area | Remote</span>
          </div>
          
          <ul className="space-y-4 font-sans text-vintage-charcoal/80 leading-relaxed list-disc list-outside ml-4">
            <li className="pl-2">Started as a trainee focused on financial markets, derivatives trading, and quantitative strategy development before transitioning into automated trading systems engineering.</li>
            <li className="pl-2">Engineered a low-latency Python trading framework processing real-time WebSocket market data for NIFTY and SENSEX derivatives with sub-100ms execution performance.</li>
            <li className="pl-2">Designed and deployed 6+ algorithmic trading strategies using VWAP, SuperTrend, ATR, CPR, and Parabolic SAR across multi-timeframe execution models.</li>
            <li className="pl-2">Automated live trade execution using Dhan and Flattrade broker APIs, reducing manual intervention by 95% and improving execution reliability.</li>
            <li className="pl-2">Built real-time monitoring systems for P&L tracking, drawdown analysis, and automated risk alerts.</li>
            <li className="pl-2">Developed a structured backtesting and analytics framework for historical validation, performance benchmarking, and strategy optimization.</li>
            <li className="pl-2">Contributed to the development of the official UVFarms website, supporting the company’s digital and product presence.</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
