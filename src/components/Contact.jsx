import { motion } from 'framer-motion';
import contactBg from '../../78d20b7b3e769e519578ed4c005c7206.jpg';

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 md:py-32 px-4 md:px-6 flex flex-col justify-center items-center overflow-hidden w-full mt-12 md:mt-24">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src={contactBg} 
          alt="Contact Background" 
          className="w-full h-full object-cover"
        />
      </div>
      {/* Abstract Glowing Orbs for Visual Drama */}
      <div className="absolute top-0 right-1/4 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-granger-primary/10 rounded-full blur-[80px] -translate-y-1/2 pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-1/4 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-white/10 rounded-full blur-[80px] translate-y-1/2 pointer-events-none mix-blend-screen" />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 border border-white/20 mb-8 backdrop-blur-md shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-granger-primary animate-pulse shadow-[0_0_8px_rgba(255,85,0,0.8)]"></span>
            <span className="font-sans text-white uppercase tracking-widest text-[10px] font-bold">Open to Opportunities</span>
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-8xl font-sans font-extrabold text-white mb-6 tracking-[-0.04em] leading-[0.9] drop-shadow-2xl">
            Let's build<br />something together.
          </h2>
          
          <p className="font-sans text-lg md:text-xl text-gray-100 mb-16 tracking-tight font-semibold max-w-2xl drop-shadow-md">
            Whether you have a question, a project in mind, or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-wrap gap-3 md:gap-4 justify-center items-center font-sans text-sm font-bold text-white mb-16">
            <a href="tel:+919677207948" className="flex items-center gap-3 px-6 py-3.5 bg-black/40 hover:bg-black/60 border border-white/20 rounded-full transition-all whitespace-nowrap backdrop-blur-md shadow-xl hover:border-white/40 group">
              <span className="text-granger-primary group-hover:scale-110 transition-transform"><PhoneIcon /></span>
              +91 9677207948
            </a>
            
            <a href="mailto:Sriram1326.io@gmail.com" className="flex items-center gap-3 px-6 py-3.5 bg-black/40 hover:bg-black/60 border border-white/20 rounded-full transition-all whitespace-nowrap backdrop-blur-md shadow-xl hover:border-white/40 group">
              <span className="text-granger-primary group-hover:scale-110 transition-transform"><MailIcon /></span>
              Sriram1326.io@gmail.com
            </a>
            
            <a href="https://www.linkedin.com/in/sriramio" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-6 py-3.5 bg-black/40 hover:bg-black/60 border border-white/20 rounded-full transition-all whitespace-nowrap backdrop-blur-md shadow-xl hover:border-white/40 group">
              <span className="text-granger-primary group-hover:scale-110 transition-transform"><LinkedinIcon /></span>
              linkedin.com/in/sriramio
            </a>
            
            <div className="flex items-center gap-3 px-6 py-3.5 bg-black/40 border border-white/20 rounded-full whitespace-nowrap cursor-default backdrop-blur-md shadow-xl">
              <MapPinIcon />
              Chennai, India
            </div>
          </div>

          <a
            href="mailto:Sriram1326.io@gmail.com"
            className="group relative px-10 py-5 bg-granger-primary hover:bg-granger-primary/90 text-white text-base font-sans font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 flex items-center justify-center gap-4 shadow-xl shadow-granger-primary/20"
          >
            <span className="relative z-10 tracking-widest uppercase">Start a Conversation</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 transition-transform group-hover:translate-x-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </a>
        </motion.div>
    </section>
  );
};

export default Contact;
