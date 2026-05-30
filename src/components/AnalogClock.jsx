import { useEffect, useState } from 'react';

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Initial fetch to get Chennai time immediately
    const getChennaiTime = () => {
      const date = new Date();
      return new Date(date.toLocaleString("en-US", {timeZone: "Asia/Kolkata"}));
    };
    
    setTime(getChennaiTime());

    const timerId = setInterval(() => {
      setTime(getChennaiTime());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;

  // Add 90 degrees because CSS rotate starts from the right (3 o'clock)
  const secondDegrees = ((seconds / 60) * 360) + 90; 
  const minuteDegrees = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
  const hourDegrees = ((hours / 12) * 360) + ((minutes/60)*30) + 90;

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full border-[3px] border-vintage-gold shadow-2xl bg-vintage-ivory flex items-center justify-center shadow-[inset_0_2px_10px_rgba(0,0,0,0.1),0_5px_15px_rgba(197,160,89,0.2)]">
        {/* Subtle inner dial circle */}
        <div className="absolute inset-1 border border-vintage-charcoal/10 rounded-full pointer-events-none"></div>
        
        {/* Clock center pivot */}
        <div className="absolute w-2 h-2 bg-vintage-burgundy rounded-full z-20 shadow-md border border-vintage-gold/50"></div>
        
        {/* Hour Hand */}
        <div 
          className="absolute h-[2px] bg-vintage-charcoal rounded-full origin-right z-10 transition-transform duration-75"
          style={{ width: '25%', right: '50%', transform: `rotate(${hourDegrees}deg)` }}
        ></div>
        
        {/* Minute Hand */}
        <div 
          className="absolute h-[1.5px] bg-vintage-charcoal rounded-full origin-right z-10 transition-transform duration-75"
          style={{ width: '35%', right: '50%', transform: `rotate(${minuteDegrees}deg)` }}
        ></div>
        
        {/* Second Hand */}
        <div 
          className="absolute h-[1px] bg-vintage-burgundy rounded-full origin-right z-10 transition-transform duration-[50ms]"
          style={{ width: '40%', right: '50%', transform: `rotate(${secondDegrees}deg)` }}
        ></div>

        {/* Vintage markings (12, 3, 6, 9) */}
        <span className="absolute top-1 text-[7px] md:text-[9px] font-serif font-bold text-vintage-charcoal">XII</span>
        <span className="absolute right-1.5 text-[7px] md:text-[9px] font-serif font-bold text-vintage-charcoal">III</span>
        <span className="absolute bottom-1 text-[7px] md:text-[9px] font-serif font-bold text-vintage-charcoal">VI</span>
        <span className="absolute left-1.5 text-[7px] md:text-[9px] font-serif font-bold text-vintage-charcoal">IX</span>
      </div>
      
      <div className="flex flex-col items-center">
        <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-vintage-gold font-sans font-bold">Chennai</span>
        <span className="text-[8px] md:text-[9px] tracking-[0.2em] text-vintage-charcoal/50 font-serif italic mt-1">Local Time</span>
      </div>
    </div>
  );
};

export default AnalogClock;
