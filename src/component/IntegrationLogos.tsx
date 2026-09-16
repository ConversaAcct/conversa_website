import { useEffect, useRef, useState } from "react";

import athenaIcon from "../assets/eightsection/1 (6).svg";
import mIcon from "../assets/eightsection/4 (2).svg";
import drIcon from "../assets/eightsection/5 (2).svg";
import googleIcon from "../assets/eightsection/3 (22).svg";
import oracleIcon from "../assets/eightsection/2 (4).svg";
import epicIcon from "../assets/eightsection/3 (4).svg";
import driveIcon from "../assets/eightsection/2 (27).svg";

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
  desc: string;
  mobIcon?: string;
  size: "sm" | "md" | "lg";
};

const cards: IntegrationCard[] = [
  {
    id: "chat",
    icon: driveIcon,
    mobIcon: teamMobile,
    label: "Microsoft Teams",
    desc: "Instant on-call alerts",
    size: "lg",
  },
  {
    id: "epic",
    icon: epicIcon,
    mobIcon: epicMob,
    label: "Epic",
    desc: "Real-time scheduling, synced",
    size: "md",
  },
  {
    id: "oura",
    icon: oracleIcon,
    mobIcon: oracleMob,
    label: "Oracle Health",
    desc: "Instant patient lookup",
    size: "md",
  },
  {
    id: "athena",
    icon: athenaIcon,
    mobIcon: athenaMob,
    label: "Athena Health",
    desc: "Live appointment booking",
    size: "sm",
  },
  {
    id: "mm",
    icon: mIcon,
    mobIcon: mMob,
    label: "ModMed",
    desc: "Real-time slot sync",
    size: "md",
  },
  {
    id: "drchrono",
    icon: drIcon,
    mobIcon: drMob,
    label: "DrChrono",
    desc: "Auto-synced patient records",
    size: "md",
  },
  {
    id: "gcal",
    icon: googleIcon,
    mobIcon: googleMob,
    label: "Google Calendar",
    desc: "Seamless appointment booking",
    size: "lg",
  },
];

const DESKTOP_CARD_SIZE = "w-16 h-16 md:w-20 md:h-20";
const ACTIVE_SCALE = 1.12;

const MAX_ANGLE_DEG = 62;
const RADIUS = 430;
const CARD_BOTTOM_CLEARANCE = 72;

const stageHeight =
  RADIUS *
    (1 - Math.cos((MAX_ANGLE_DEG * Math.PI) / 180)) +
  CARD_BOTTOM_CLEARANCE;

const MD_BREAKPOINT = 768;
const MOBILE_EDGE_GAP = 24;

const WHEEL_STEP_THRESHOLD = 60;
const WHEEL_STEP_COOLDOWN_MS = 220;

const useIsMdUp = () => {
  const [isMdUp, setIsMdUp] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(
      `(min-width: ${MD_BREAKPOINT}px)`
    );

    const update = () => setIsMdUp(query.matches);

    update();

    query.addEventListener("change", update);

    return () => {
      query.removeEventListener("change", update);
    };
  }, []);

  return isMdUp;
};

const IntegrationLogos = () => {
  const [active, setActive] = useState<string>("athena");

  const isMdUp = useIsMdUp();

  const activeCard =
    cards.find((card) => card.id === active) ?? cards[3];

  const trackRef = useRef<HTMLDivElement>(null);

  const cardRefs = useRef<
    Record<string, HTMLButtonElement | null>
  >({});

  const stageRef = useRef<HTMLDivElement>(null);

  const activeRef = useRef(active);

  const wheelAccumRef = useRef(0);

  const lastStepAtRef = useRef(0);

  const rad = (deg: number) => (deg * Math.PI) / 180;

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    if (isMdUp) return;

    const el = cardRefs.current["athena"];
    const track = trackRef.current;

    if (el && track) {
      const offset =
        el.offsetLeft -
        track.clientWidth / 2 +
        el.clientWidth / 2;

      track.scrollTo({
        left: offset,
        behavior: "auto",
      });
    }
  }, [isMdUp]);

  useEffect(() => {
    if (isMdUp) return;

    const track = trackRef.current;

    if (!track) return;

    let raf = 0;

    const handleScroll = () => {
      cancelAnimationFrame(raf);

      raf = requestAnimationFrame(() => {
        const trackRect = track.getBoundingClientRect();

        const trackCenter =
          trackRect.left + trackRect.width / 2;

        let closestId: string | null = null;
        let closestDist = Infinity;

        for (const card of cards) {
          const el = cardRefs.current[card.id];

          if (!el) continue;

          const rect = el.getBoundingClientRect();

          const cardCenter =
            rect.left + rect.width / 2;

          const dist = Math.abs(
            cardCenter - trackCenter
          );

          if (dist < closestDist) {
            closestDist = dist;
            closestId = card.id;
          }
        }

        if (
          closestId &&
          closestId !== activeRef.current
        ) {
          setActive(closestId);
        }
      });
    };

    track.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      track.removeEventListener(
        "scroll",
        handleScroll
      );

      cancelAnimationFrame(raf);
    };
  }, [isMdUp]);

  useEffect(() => {
    if (!isMdUp) return;

    const stage = stageRef.current;

    if (!stage) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      const delta =
        Math.abs(e.deltaY) >= Math.abs(e.deltaX)
          ? e.deltaY
          : e.deltaX;

      wheelAccumRef.current += delta;

      const now = performance.now();

      const cooledDown =
        now - lastStepAtRef.current >
        WHEEL_STEP_COOLDOWN_MS;

      if (
        Math.abs(wheelAccumRef.current) >=
          WHEEL_STEP_THRESHOLD &&
        cooledDown
      ) {
        const direction =
          wheelAccumRef.current > 0 ? 1 : -1;

        const currentIndex = cards.findIndex(
          (card) => card.id === activeRef.current
        );

        const nextIndex = Math.min(
          cards.length - 1,
          Math.max(
            0,
            currentIndex + direction
          )
        );

        if (nextIndex !== currentIndex) {
          setActive(cards[nextIndex].id);
        }

        wheelAccumRef.current = 0;
        lastStepAtRef.current = now;
      }
    };

    stage.addEventListener(
      "wheel",
      handleWheel,
      {
        passive: false,
      }
    );

    return () => {
      stage.removeEventListener(
        "wheel",
        handleWheel
      );
    };
  }, [isMdUp]);

  const getDesktopPosition = (
    card: IntegrationCard
  ) => {
    const activeIndex = cards.findIndex(
      (item) => item.id === active
    );

    const cardIndex = cards.findIndex(
      (item) => item.id === card.id
    );

    const relativeIndex =
      cardIndex - activeIndex;

    const angleStep =
      (MAX_ANGLE_DEG * 2) /
      (cards.length - 1);

    const angle =
      relativeIndex * angleStep;

    const clampedAngle = Math.max(
      -MAX_ANGLE_DEG,
      Math.min(MAX_ANGLE_DEG, angle)
    );

    const x =
      RADIUS *
      Math.sin(rad(clampedAngle));

    const y =
      RADIUS *
      (1 - Math.cos(rad(clampedAngle)));

    return {
      x,
      y,
      angle: clampedAngle,
    };
  };

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
        <div
          ref={stageRef}
          className="relative mx-auto"
          style={{
            height: stageHeight,
            maxWidth: 1000,
          }}
        >
          {cards.map((card) => {
            const {
              x,
              y,
              angle,
            } = getDesktopPosition(card);

            const isActive = card.id === active;

            const isEdge =
              Math.abs(angle) === MAX_ANGLE_DEG;

            return (
              <button
                key={card.id}
                type="button"
                onFocus={() =>
                  setActive(card.id)
                }
                onClick={() =>
                  setActive(card.id)
                }
                style={{
                  left: "50%",
                  top: 0,
                  transform: `
                    translate(
                      calc(-50% + ${x}px),
                      ${y}px
                    )
                    rotate(${angle}deg)
                    scale(${isActive ? ACTIVE_SCALE : 1})
                  `,
                }}
                className={`
                  ${DESKTOP_CARD_SIZE}
                  absolute
                  shrink-0
                  transition-all
                  duration-500
                  ease-out
                  ${
                    isActive
                      ? "z-20 opacity-100"
                      : "z-10"
                  }
                  ${
                    isEdge && !isActive
                      ? "opacity-60"
                      : ""
                  }
                `}
              >
                <div
                  className="w-full h-full transition-transform duration-500 ease-out"
                  style={{
                    transform: `rotate(${-angle}deg)`,
                  }}
                >
                  <img
                    src={card.icon}
                    alt={card.label}
                    className="w-full h-full object-contain"
                  />
                </div>
              </button>
            );
          })}
        </div>
      ) : (
        <div
          ref={trackRef}
          className="
            relative
            flex
            flex-row
            gap-4
            overflow-x-auto
            overflow-y-hidden
            snap-x
            snap-proximity
            scroll-smooth
            [&::-webkit-scrollbar]:hidden
            [-ms-overflow-style:none]
            scrollbar-none
          "
          style={{
            paddingLeft: MOBILE_EDGE_GAP,
            paddingRight: MOBILE_EDGE_GAP,
          }}
        >
          {cards.map((card, i) => {
            const isFirst = i === 0;
            const isLast =
              i === cards.length - 1;

            const snapAlign = isFirst
              ? "snap-start"
              : isLast
              ? "snap-end"
              : "snap-center";

            return (
              <button
                key={card.id}
                ref={(el) => {
                  cardRefs.current[card.id] =
                    el;
                }}
                type="button"
                onClick={() =>
                  setActive(card.id)
                }
                className={`
                  flex
                  shrink-0
                  rounded-[22px]
                  bg-white
                  w-25
                  h-25
                  border-[#EBEAEE]
                  items-center
                  justify-center
                  border
                  transition-all
                  duration-300
                  ease-out
                  active:scale-95
                  ${snapAlign}
                `}
              >
                <img
                  src={card.mobIcon}
                  alt={card.label}
                  className="rounded-[22px]"
                />
              </button>
            );
          })}
        </div>
      )}

      <div
        className="
          relative
          flex
          flex-col
          items-center
          text-center
          mt-6
          md:-mt-18
        "
      >
        <p
          className="
            font-cal-sans
            font-medium
            text-[#171F2A]
            text-[20px]
            md:text-[22px]
            transition-all
            duration-300
          "
        >
          {activeCard.label}
        </p>

        <p
          className="
            font-manrope
            text-[#6B7280]
            text-[14px]
            mt-1
          "
        >
          {activeCard.desc}
        </p>
      </div>
    </div>
  );
};

export default IntegrationLogos;