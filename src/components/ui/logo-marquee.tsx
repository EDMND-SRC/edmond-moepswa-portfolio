import { motion } from 'motion/react';

const logos = [
  {
    name: "Mascom",
    svg: (
      <svg viewBox="0 0 150 40" className="h-6 md:h-8 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="12" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="20" cy="20" r="4" />
        <text x="40" y="28" fontSize="22" fontWeight="600" fontFamily="sans-serif" letterSpacing="-0.5">mascom</text>
      </svg>
    )
  },
  {
    name: "Debswana",
    svg: (
      <svg viewBox="0 0 160 40" className="h-6 md:h-8 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 30 L20 10 L30 30 Z" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M20 10 L20 30" stroke="currentColor" strokeWidth="3" />
        <text x="40" y="28" fontSize="22" fontWeight="600" fontFamily="sans-serif" letterSpacing="1">DEBSWANA</text>
      </svg>
    )
  },
  {
    name: "Letshego",
    svg: (
      <svg viewBox="0 0 150 40" className="h-6 md:h-8 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 10 L25 10 L25 30 L15 30 Z" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M5 20 L15 20" stroke="currentColor" strokeWidth="3" />
        <text x="35" y="28" fontSize="22" fontWeight="600" fontFamily="sans-serif" letterSpacing="-0.5">letshego.</text>
      </svg>
    )
  },
  {
    name: "BTC",
    svg: (
      <svg viewBox="0 0 120 40" className="h-6 md:h-8 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
        <text x="5" y="28" fontSize="24" fontWeight="bold" fontFamily="sans-serif" letterSpacing="2">BTC</text>
        <circle cx="65" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="3" />
      </svg>
    )
  },
  {
    name: "Choppies",
    svg: (
      <svg viewBox="0 0 160 40" className="h-6 md:h-8 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 20 Q 20 5 30 20 T 50 20" fill="none" stroke="currentColor" strokeWidth="3" />
        <text x="60" y="28" fontSize="22" fontWeight="600" fontFamily="sans-serif" letterSpacing="-0.5">choppies</text>
      </svg>
    )
  },
  {
    name: "BancABC",
    svg: (
      <svg viewBox="0 0 150 40" className="h-6 md:h-8 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="10" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" />
        <rect x="10" y="15" width="10" height="10" fill="currentColor" />
        <text x="35" y="28" fontSize="22" fontWeight="600" fontFamily="sans-serif" letterSpacing="-0.5">BancABC</text>
      </svg>
    )
  }
];

export default function LogoMarquee() {
  // Duplicate the logos array to create a seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="w-full overflow-hidden bg-[#0a0a0a] py-8 md:py-10 border-t border-white/10">
      <div className="relative flex w-full flex-col md:flex-row items-center justify-center overflow-hidden max-w-[1800px] mx-auto px-6 md:px-10">
        
        {/* Left Text Section */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0 shrink-0 z-10 bg-[#0a0a0a] pr-8">
          <p className="text-[#a3a3a3] text-sm md:text-base font-medium leading-relaxed">
            Trusted by leading companies<br />
            in Botswana and Worldwide
          </p>
        </div>

        {/* Right Marquee Section */}
        <div className="flex w-full md:w-2/3 overflow-hidden relative">
          {/* Gradient Masks for smooth fade effect on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 hidden md:block" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />
          
          <motion.div
            className="flex w-max items-center gap-16 md:gap-24"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 40,
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center text-[#525252] hover:text-[#a3a3a3] transition-colors duration-300 h-6 md:h-8"
              >
                {logo.svg}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
