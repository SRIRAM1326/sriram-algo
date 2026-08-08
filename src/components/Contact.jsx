import { motion } from 'framer-motion';

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto text-center bg-[#0B1F33] rounded-2xl shadow-2xl border border-vintage-gold/30 py-16 px-6 md:p-24 text-vintage-ivory relative overflow-hidden">
        {/* Decorative inner border */}
        <div className="absolute inset-3 border border-vintage-gold/10 pointer-events-none rounded-xl"></div>
        <div className="absolute inset-4 border border-vintage-gold/5 pointer-events-none rounded-lg"></div>

        {/* Decorative Gold Coins in corners */}
        <div className="absolute top-5 left-5 w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#ffe4a0] via-[#d4b572] to-[#8a6327] shadow-[inset_0_-1px_2px_rgba(0,0,0,0.5),0_2px_4px_rgba(0,0,0,0.4)] border border-[#ffe4a0]/30 pointer-events-none z-10"></div>
        <div className="absolute top-5 right-5 w-3.5 h-3.5 rounded-full bg-gradient-to-bl from-[#ffe4a0] via-[#d4b572] to-[#8a6327] shadow-[inset_0_-1px_2px_rgba(0,0,0,0.5),0_2px_4px_rgba(0,0,0,0.4)] border border-[#ffe4a0]/30 pointer-events-none z-10"></div>
        <div className="absolute bottom-5 left-5 w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-[#ffe4a0] via-[#d4b572] to-[#8a6327] shadow-[inset_0_-1px_2px_rgba(0,0,0,0.5),0_2px_4px_rgba(0,0,0,0.4)] border border-[#ffe4a0]/30 pointer-events-none z-10"></div>
        <div className="absolute bottom-5 right-5 w-3.5 h-3.5 rounded-full bg-gradient-to-tl from-[#ffe4a0] via-[#d4b572] to-[#8a6327] shadow-[inset_0_-1px_2px_rgba(0,0,0,0.5),0_2px_4px_rgba(0,0,0,0.4)] border border-[#ffe4a0]/30 pointer-events-none z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-vintage-gold mb-4 tracking-wide">
            Get In Touch
          </h2>
          <p className="font-montserrat text-sm md:text-base text-vintage-gold/70 mb-16 tracking-widest uppercase">
            Let's Discuss Your Next Venture
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 font-serif text-lg">
            <a href="tel:+919677207948" className="flex flex-col items-center gap-4 hover:text-vintage-gold transition-all duration-300 group hover:-translate-y-2">
              <div className="p-5 rounded-full border border-vintage-gold/30 text-vintage-gold group-hover:bg-vintage-gold group-hover:text-vintage-burgundy transition-all shadow-[0_0_15px_rgba(197,160,89,0.1)]">
                <PhoneIcon />
              </div>
              <span className="tracking-wider font-montserrat text-sm">+91 9677207948</span>
            </a>

            <a href="mailto:Sriram1326.io@gmail.com" className="flex flex-col items-center gap-4 hover:text-vintage-gold transition-all duration-300 group hover:-translate-y-2">
              <div className="p-5 rounded-full border border-vintage-gold/30 text-vintage-gold group-hover:bg-vintage-gold group-hover:text-vintage-burgundy transition-all shadow-[0_0_15px_rgba(197,160,89,0.1)]">
                <MailIcon />
              </div>
              <span className="tracking-wider font-montserrat text-sm">Sriram1326.io@gmail.com</span>
            </a>

            <a href="https://www.linkedin.com/in/sriramio" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-4 hover:text-vintage-gold transition-all duration-300 group hover:-translate-y-2">
              <div className="p-5 rounded-full border border-vintage-gold/30 text-vintage-gold group-hover:bg-vintage-gold group-hover:text-vintage-burgundy transition-all shadow-[0_0_15px_rgba(197,160,89,0.1)]">
                <LinkedinIcon />
              </div>
              <span className="tracking-wider font-montserrat text-sm">linkedin.com/in/sriramio</span>
            </a>

            <div className="flex flex-col items-center gap-4 text-vintage-ivory/80 group">
              <div className="p-5 rounded-full border border-vintage-gold/20 text-vintage-gold/50">
                <MapPinIcon />
              </div>
              <span className="tracking-wider font-montserrat text-sm">Chennai, India</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
