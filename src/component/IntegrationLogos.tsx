import { useEffect, useRef, useState } from "react";

import athenaIcon from "../assets/eightsection/image (10).svg";
import mIcon from "../assets/eightsection/image (11).svg";
import drIcon from "../assets/eightsection/image (12).svg";
import googleIcon from "../assets/eightsection/image (13).svg";
import oracleIcon from "../assets/eightsection/image (14).svg";
import epicIcon from "../assets/eightsection/image (15).svg";
import driveIcon from "../assets/eightsection/image (16).svg";

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

// Desktop card (white background box) size.
const DESKTOP_CARD_PX = 88;

// Every logo inside the box has the same size.
const DESKTOP_LOGO_PX = 40;

// 1 = all cards stay equal in size (no growth at the centre).
const ACTIVE_SCALE = 1;

const MAX_ANGLE_DEG = 62;
const RADIUS = 430;

// Grown with the card size so the label keeps the same gap below the
// centre card as before.
const CARD_BOTTOM_CLEARANCE = 72;

const stageHeight =
  RADIUS *
    (1 - Math.cos((MAX_ANGLE_DEG * Math.PI) / 180)) +
  CARD_BOTTOM_CLEARANCE;

const MD_BREAKPOINT = 768;
const MOBILE_EDGE_GAP = 24;

// Page scroll (in px) needed to move the logos by one card.
const SCROLL_PX_PER_STEP = 360;

// After scrolling stops, wait this long then snap a logo to the centre.
const SETTLE_DELAY_MS = 140;

const TOTAL = cards.length;

// Slots visible on each side of the centre card (3 for 7 cards).
const VISIBLE_SIDE = (TOTAL - 1) / 2;

// Angle between neighbouring cards on the arc.
const ANGLE_STEP = MAX_ANGLE_DEG / VISIBLE_SIDE;

// How fast the arc eases to its target (higher = snappier).
const EASE_SPEED = 0.8;

const DEFAULT_ID = "athena";

const mod = (n: number, m: number) => ((n % m) + m) % m;

// Wraps a slot into [-TOTAL / 2, TOTAL / 2) so a card that leaves one
// end of the arc re-enters from the other end.
const wrapSlot = (slot: number) =>
  mod(slot + TOTAL / 2, TOTAL) - TOTAL / 2;

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
  const [active, setActive] = useState<string>(DEFAULT_ID);

  const isMdUp = useIsMdUp();

  const activeCard =
    cards.find((card) => card.id === active) ?? cards[3];

  const defaultIndex = cards.findIndex(
    (card) => card.id === DEFAULT_ID
  );

  // Desktop carousel position, in card steps. It is a float while
  // animating and always eases toward targetRef.
  const [offset, setOffset] = useState<number>(defaultIndex);

  const offsetRef = useRef<number>(defaultIndex);

  const targetRef = useRef<number>(defaultIndex);

  const rootRef = useRef<HTMLDivElement>(null);

  const trackRef = useRef<HTMLDivElement>(null);

  const cardRefs = useRef<
    Record<string, HTMLButtonElement | null>
  >({});

  const activeRef = useRef(active);

  const rad = (deg: number) => (deg * Math.PI) / 180;

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    if (isMdUp) return;

    const el = cardRefs.current["athena"];
    const track = trackRef.current;

    if (el && track) {
      const offsetLeft =
        el.offsetLeft -
        track.clientWidth / 2 +
        el.clientWidth / 2;

      track.scrollTo({
        left: offsetLeft,
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

  // Desktop: ease the arc toward its target and keep the label in
  // sync with whichever logo is at the centre.
  useEffect(() => {
    if (!isMdUp) return;

    const startIndex = Math.max(
      0,
      cards.findIndex(
        (card) => card.id === activeRef.current
      )
    );

    offsetRef.current = startIndex;
    targetRef.current = startIndex;
    setOffset(startIndex);

    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      const diff = targetRef.current - offsetRef.current;

      if (Math.abs(diff) > 0.0005) {
        const next =
          Math.abs(diff) < 0.002
            ? targetRef.current
            : offsetRef.current +
              diff * (1 - Math.exp(-dt * EASE_SPEED));

        offsetRef.current = next;
        setOffset(next);

        const centerId =
          cards[mod(Math.round(next), TOTAL)].id;

        if (centerId !== activeRef.current) {
          setActive(centerId);
        }
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
    };
  }, [isMdUp]);

  // Desktop: the page scroll drives the arc while this section is on
  // screen. Scrolling down moves the logos right, scrolling up moves
  // them left, and a logo snaps to the centre once scrolling stops.
  useEffect(() => {
    if (!isMdUp) return;

    const root = rootRef.current;

    if (!root) return;

    let lastY = window.scrollY;
    let settleTimer = 0;

    const handleScroll = () => {
      const y = window.scrollY;
      const dy = y - lastY;

      lastY = y;

      const rect = root.getBoundingClientRect();

      const inView =
        rect.bottom > 0 && rect.top < window.innerHeight;

      if (!inView || dy === 0) return;

      // Scroll down (dy > 0) -> offset decreases -> logos move right.
      // Scroll up (dy < 0) -> offset increases -> logos move left.
      targetRef.current -= dy / SCROLL_PX_PER_STEP;

      window.clearTimeout(settleTimer);

      settleTimer = window.setTimeout(() => {
        targetRef.current = Math.round(targetRef.current);
      }, SETTLE_DELAY_MS);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      window.clearTimeout(settleTimer);
    };
  }, [isMdUp]);

  // Bring a clicked/focused logo to the centre by the shortest way round.
  const goTo = (id: string) => {
    const index = cards.findIndex(
      (card) => card.id === id
    );

    if (index < 0) return;

    const slot = wrapSlot(
      index - Math.round(targetRef.current)
    );

    targetRef.current = Math.round(targetRef.current) + slot;
  };

  const getDesktopPosition = (
    card: IntegrationCard
  ) => {
    const cardIndex = cards.findIndex(
      (item) => item.id === card.id
    );

    // Signed distance from the centre, wrapped so cards loop around.
    const slot = wrapSlot(cardIndex - offset);

    const angle = slot * ANGLE_STEP;

    const x = RADIUS * Math.sin(rad(angle));

    const y = RADIUS * (1 - Math.cos(rad(angle)));

    const distance = Math.abs(slot);

    // Fully visible up to the last slot, then fades out over the
    // final half step before wrapping to the other side.
    const opacity = Math.max(
      0,
      Math.min(1, 1 - (distance - VISIBLE_SIDE) / 0.5)
    );

    // Grows as the card approaches the centre (1 = no growth).
    const scale =
      1 + (ACTIVE_SCALE - 1) * Math.max(0, 1 - distance);

    const zIndex = Math.round(
      10 + Math.max(0, 1 - distance) * 10
    );

    return {
      x,
      y,
      angle,
      opacity,
      scale,
      zIndex,
    };
  };

  return (
    <div
      ref={rootRef}
      className="relative w-full py-10 md:py-14"
    >
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
              opacity,
              scale,
              zIndex,
            } = getDesktopPosition(card);

            return (
              <button
                key={card.id}
                type="button"
                onFocus={() => goTo(card.id)}
                onClick={() => goTo(card.id)}
                style={{
                  left: "50%",
                  top: 0,
                  width: DESKTOP_CARD_PX,
                  height: DESKTOP_CARD_PX,
                  opacity,
                  zIndex,
                  pointerEvents:
                    opacity < 0.3 ? "none" : "auto",
                  willChange: "transform, opacity",
                  transform: `
                    translate(
                      calc(-50% + ${x}px),
                      ${y}px
                    )
                    rotate(${angle}deg)
                    scale(${scale})
                  `,
                }}
                className="
                  absolute
                  shrink-0
                  flex
                  items-center
                  justify-center
                  box-border
                  bg-white
                  border
                  border-[#EBEAEE]
                  rounded-[22px]
                "
              >
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: DESKTOP_LOGO_PX,
                    height: DESKTOP_LOGO_PX,
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