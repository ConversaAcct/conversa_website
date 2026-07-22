import { useEffect, useRef, useState } from "react";
import athenaIcon from "../assets/eightsection/1 (6).svg"
import mIcon from "../assets/eightsection/4 (2).svg"
import drIcon from "../assets/eightsection/5 (2).svg"
import googleIcon from "../assets/eightsection/6 (1).svg"
import oracleIcon from "../assets/eightsection/2 (4).svg"
import epicIcon from "../assets/eightsection/3 (4).svg"
import driveIcon from "../assets/eightsection/7.svg"

import teamMobile from "../assets/integrated/image (7).svg";
import epicMob from "../assets/integrated/image (8).svg";
import oracleMob from "../assets/integrated/image (9).svg";
import athenaMob from "../assets/integrated/image (10).svg";
import mMob from "../assets/integrated/image (11).svg";
import drMob from "../assets/integrated/image (12).svg";
import googleMob from "../assets/integrated/image (13).svg";

type IntegrationCard = {
  id: string;
  icon: string;
  label: string;
  mobIcon?: string;
  size: "sm" | "md" | "lg";
};

const cards: IntegrationCard[] = [
  { id: "chat", icon: driveIcon, mobIcon: teamMobile, label: "Chat / messaging", size: "lg" },
  { id: "epic", icon: epicIcon, mobIcon: epicMob, label: "Epic", size: "md" },
  { id: "oura", icon: oracleIcon, mobIcon: oracleMob, label: "Oracle Health", size: "md" },
  { id: "athena", icon: athenaIcon, mobIcon: athenaMob, label: "Athena Health", size: "sm" },
  { id: "mm", icon: mIcon, mobIcon: mMob, label: "Modernizing Medicine", size: "md" },
  { id: "drchrono", icon: drIcon, mobIcon: drMob, label: "drchrono", size: "md" },
  { id: "gcal", icon: googleIcon, mobIcon: googleMob, label: "Google Calendar", size: "lg" },
];

const sizeMap = {
  sm: "w-16 h-16 md:w-20 md:h-20",
  md: "w-20 h-20 md:w-24 md:h-24",
  lg: "w-24 h-24 md:w-28 md:h-28",
};

const MAX_ANGLE_DEG = 62;
const RADIUS = 430;
const CARD_BOTTOM_CLEARANCE = 72;
const stageHeight =
  RADIUS * (1 - Math.cos((MAX_ANGLE_DEG * Math.PI) / 180)) + CARD_BOTTOM_CLEARANCE;

const MD_BREAKPOINT = 768;

// Small fixed side padding just so the edge cards aren't flush
// against the screen edge. Doesn't need to be huge anymore since
// we no longer force snap-center on the first/last cards.
const MOBILE_EDGE_GAP = 24;

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

  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Scroll to Athena on first mount (mobile only)
  useEffect(() => {
    if (isMdUp) return;
    const el = cardRefs.current["athena"];
    const track = trackRef.current;
    if (el && track) {
      const offset =
        el.offsetLeft - track.clientWidth / 2 + el.clientWidth / 2;
      track.scrollTo({ left: offset, behavior: "auto" });
    }
  }, [isMdUp]);

  // Track which card is most centered while the user scrolls
  useEffect(() => {
    if (isMdUp) return;
    const track = trackRef.current;
    if (!track) return;

    let raf = 0;
    const handleScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const trackRect = track.getBoundingClientRect();
        const trackCenter = trackRect.left + trackRect.width / 2;

        let closestId: string | null = null;
        let closestDist = Infinity;

        for (const card of cards) {
          const el = cardRefs.current[card.id];
          if (!el) continue;
          const rect = el.getBoundingClientRect();
          const cardCenter = rect.left + rect.width / 2;
          const dist = Math.abs(cardCenter - trackCenter);
          if (dist < closestDist) {
            closestDist = dist;
            closestId = card.id;
          }
        }

        if (closestId && closestId !== active) {
          setActive(closestId);
        }
      });
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(raf);
    };
  }, [isMdUp, active]);

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
                className={`${sizeMap[card.size]} absolute shrink-0 transition-transform duration-300 ease-out hover:-translate-y-2`}
              >
                <div className="w-full h-full" style={{ transform: `rotate(${-angle}deg)` }}>
                  <img src={card.icon} />
                </div>
              </button>
            );
          })}
        </div>
      ) : (
        <div
          ref={trackRef}
          className="relative flex flex-row gap-4 overflow-x-auto overflow-y-hidden snap-x snap-proximity scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none"
          style={{ paddingLeft: MOBILE_EDGE_GAP, paddingRight: MOBILE_EDGE_GAP }}
        >
          {cards.map((card, i) => {
            const isFirst = i === 0;
            const isLast = i === cards.length - 1;
            const snapAlign = isFirst ? "snap-start" : isLast ? "snap-end" : "snap-center";

            return (
              <button
                key={card.id}
                ref={(el) => { cardRefs.current[card.id] = el; }}
                type="button"
                onClick={() => setActive(card.id)}
                className={`
                  flex shrink-0 rounded-[22px] bg-white w-25 h-25 border-[#EBEAEE] items-center justify-center border
                  transition-all duration-300 ease-out active:scale-95 ${snapAlign}
             
                `}
              >
                <img src={card.mobIcon} className="rounded-[22px]" />
              </button>
            );
          })}
        </div>
      )}

      <div className="relative flex flex-col items-center text-center mt-6 md:-mt-18">
        <p className="font-cal-sans font-medium text-[#171F2A] text-[20px] md:text-[22px] transition-all duration-300">
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