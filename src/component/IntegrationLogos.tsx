import { useEffect, useState } from "react";
import athenaIcon from "../assets/eightsection/1 (6).svg"
import mIcon from "../assets/eightsection/4 (2).svg"
import drIcon from "../assets/eightsection/5 (2).svg"
import googleIcon from "../assets/eightsection/6 (1).svg"
import oracleIcon from "../assets/eightsection/2 (4).svg"
import epicIcon from "../assets/eightsection/3 (4).svg"
import driveIcon from "../assets/eightsection/7.svg"

type IntegrationCard = {
  id: string;
  icon: string;
  label: string;
  size: "sm" | "md" | "lg";
};



const cards: IntegrationCard[] = [
  { id: "chat", icon: driveIcon, label: "Chat / messaging", size: "lg" },
  { id: "epic", icon: epicIcon, label: "Epic", size: "md" },
  { id: "oura", icon: oracleIcon, label: "Oracle Health", size: "md" },
  { id: "athena", icon: athenaIcon, label: "Athena Health", size: "lg" },
  { id: "mm", icon:  mIcon, label: "Modernizing Medicine", size: "md" },
  { id: "drchrono", icon: drIcon, label: "drchrono", size: "md" },
  { id: "gcal", icon: googleIcon, label: "Google Calendar", size: "lg" },
];

const sizeMap = {
  sm: "w-16 h-16 md:w-20 md:h-20",
  md: "w-20 h-20 md:w-24 md:h-24",
  lg: "w-24 h-24 md:w-28 md:h-28",
};

// arc configuration (md+ only)
const MAX_ANGLE_DEG = 62;
const RADIUS = 430;
const CARD_BOTTOM_CLEARANCE = 72;
const stageHeight =
  RADIUS * (1 - Math.cos((MAX_ANGLE_DEG * Math.PI) / 180)) + CARD_BOTTOM_CLEARANCE;

const MD_BREAKPOINT = 768; // px, matches Tailwind's default `md`

const useIsMdUp = () => {
  const [isMdUp, setIsMdUp] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(`(min-width: ${MD_BREAKPOINT}px)`);
    const update = () => setIsMdUp(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return isMdUp;
};

const IntegrationLogos = () => {
  const [active, setActive] = useState<string>("athena");
  const isMdUp = useIsMdUp();
  const activeCard = cards.find((c) => c.id === active) ?? cards[3];

  const centerIndex = (cards.length - 1) / 2;
  const rad = (deg: number) => (deg * Math.PI) / 180;

  return (
    <div className="relative w-full py-10 md:py-14">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ECEAFB 1px, transparent 1px), linear-gradient(to bottom, #ECEAFB 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {isMdUp ? (
        <div className="relative mx-auto" style={{ height: stageHeight, maxWidth: 1000 }}>
          {cards.map((card, i) => {
            const t = (i - centerIndex) / centerIndex;
            const angle = t * MAX_ANGLE_DEG;
            const x = RADIUS * Math.sin(rad(angle));
            const y = RADIUS * (1 - Math.cos(rad(angle)));
            const isActive = card.id === active;

            return (
              <button
                key={card.id}
                type="button"
                onMouseEnter={() => setActive(card.id)}
                onFocus={() => setActive(card.id)}
                onClick={() => setActive(card.id)}
                style={{
                  left: "50%",
                  top: 0,
                  transform: `translate(calc(-50% + ${x}px), ${y}px) rotate(${angle}deg)`,
                }}
                className={`
                  ${sizeMap[card.size]}
                  absolute shrink-0  
                  transition-transform duration-300 ease-out
                  hover:-translate-y-2
                  ${isActive ? "" : ""}
                `}
              >
                <div className="w-full h-full" style={{ transform: `rotate(${-angle}deg)` }}>
                 

                  <img src={card.icon}/>

                </div>
              </button>
            );
          })}
        </div>
      ) : (
        <div className="relative flex flex-wrap items-center justify-center gap-4 px-4">
          {cards.map((card) => {
            const isActive = card.id === active;
            return (
              <button
                key={card.id}
                type="button"
                onClick={() => setActive(card.id)}
                className={`
                  ${sizeMap[card.size]}
                  shrink-0 rounded-[22px] bg-white shadow-[0_10px_30px_-12px_rgba(23,31,42,0.18)]
                  transition-transform duration-300 ease-out
                  active:scale-95
               ${isActive ? "" : ""}
                `}
              >
                {card.icon}
              </button>
            );
          })}
        </div>
      )}

      <div className="relative flex flex-col items-center text-center mt-6 md:-mt-8">
        <p className="font-cal-sans font-medium text-[#171F2A] text-[20px] md:text-[22px]">
          {activeCard.label}
        </p>
        <p className="font-manrope text-[#6B7280] text-[14px] mt-1">
          Lorem ipsum dolor sit amet
        </p>
      </div>
    </div>
  );
};

export default IntegrationLogos;