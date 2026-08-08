const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-20 border-t border-vintage-gold/20 text-center relative mt-24">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-vintage-ivory px-6 text-vintage-gold">
        ❖
      </div>

      <p className="font-sans text-xs md:text-sm text-vintage-charcoal/60 uppercase tracking-[0.2em]">
        © {currentYear} S R I R A M &nbsp; M. All Rights Reserved.
      </p>
      <p className="font-serif italic text-sm text-vintage-charcoal/50 mt-3">
        Designed with a classic aesthetic.
      </p>
    </footer>
  );
};

export default Footer;
