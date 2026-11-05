import React from "react";

type RainbowTagProps = {
  children: React.ReactNode;
};


const SparkleIcon = () => (
    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="3" width="2" height="6" rx="1" fill="white"/>
    <rect x="4" width="2" height="12" rx="1" fill="white"/>
    <rect y="3" width="2" height="6" rx="1" fill="white"/>
    </svg>
    
);

const RainbowTag = ({ children }: RainbowTagProps) => {
  return (
    <>
      <style>{`
        @keyframes rainbow-tag-shift {
          0%   { background-position: 0% 50%; }
          100% { background-position: 300% 50%; }
        }
        .rainbow-tag {
          background-image: linear-gradient(
            90deg,
            #ff5fa2,
            #ff9a3c,
            #2fd4a0,
            #3b9bff,
            #8b5cf6,
            #ff5fa2
          );
          background-size: 300% 100%;
          animation: rainbow-tag-shift 6s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .rainbow-tag { animation: none; }
        }
      `}</style>

      <span
        className="rainbow-tag inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-[14px] font-medium leading-none text-white font-manrope"
      >
        <SparkleIcon />
        {children}
      </span>
    </>
  );
};

export default RainbowTag;

