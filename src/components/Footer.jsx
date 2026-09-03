const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-20 border-t border-granger-border text-center relative mt-24">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-granger-bg px-6 text-granger-primary">
        ✦
      </div>

      <p className="font-sans text-xs md:text-sm text-granger-text uppercase tracking-widest font-bold">
        © {currentYear} S R I R A M &nbsp; M. All Rights Reserved.
      </p>
      <p className="font-sans font-medium text-xs text-granger-text/80 mt-3 tracking-wider">
        Designed with a modern editorial aesthetic.
      </p>
    </footer>
  );
};

export default Footer;
