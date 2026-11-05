import React from "react";
import Tag from "../resuable/Tag";
import logo1 from "../../assets/integrations/first-section/image (7).svg"
import logo2 from "../../assets/integrations/first-section/image (8).svg"
import logo3 from "../../assets/integrations/first-section/image (9).svg"
import calendarImage from "../../assets/integrations/first-section/calendar.svg"
import recordImage from "../../assets/integrations/first-section/document-text.svg"
import bellImage from "../../assets/integrations/first-section/notification-bing.svg"
import sernioLogo from "../../assets/integrations/first-section/icon (4).svg"
import sernioImg from "../../assets/integrations/first-section/Sernio.svg"

const AthenaLogo = () => (
  <div className="flex flex-col items-center leading-none">
  <img src={logo1}/>
  </div>
);

const OracleLogo = () => (
<img src={logo2}/>
);

const ModMedLogo = () => (
<img src={logo3}/>
);


const CalendarIcon = () => (
<img src={calendarImage}/>
);

const RecordIcon = () => (
<img src={recordImage}/>
);

const BellIcon = () => (
<img src={bellImage} />
);


const SernioMark = () => (
  <img src={sernioLogo}/>
);

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

type Item = { label: string; node: React.ReactNode };

const INPUTS: Item[][] = [
  [
    { label: "Athena Health", node: <AthenaLogo /> },

  ],
  [
    { label: "Oracle Health", node: <OracleLogo /> },
 
  ],
  [
    { label: "ModMed", node: <ModMedLogo /> },
 
  ],
];

const OUTPUTS: Item[][] = [
  [
    { label: "Appointment booked", node: <CalendarIcon /> },
  
  ],
  [
    { label: "Record updated", node: <RecordIcon /> },
   
  ],
  [
    { label: "Staff alerted", node: <BellIcon /> },
 
  ],
];

/* ------------------------------------------------------------------ */
/* Tiles                                                               */
/* ------------------------------------------------------------------ */

/* Desktop tile = 64px (h-16 w-16), logo inside scaled to 70%.
   compact (mobile) is unchanged. */
const Tile = ({ item, compact }: { item: Item; compact?: boolean }) => (
  <div
    className={`flex items-center justify-center rounded-2xl border border-[#e3e3ea] bg-white shadow-[0_1px_2px_rgba(20,20,40,0.04)] ${
      compact ? "h-21 w-21" : "h-16 w-16"
    }`}
  >
    <div className={compact ? "scale-[0.8]" : "scale-[0.7]"}>{item.node}</div>
  </div>
);

/* float = label is absolutely placed under the tile, so it doesn't change the
   tile's height (keeps the connector lines aligned to tile centres) */
const Labeled = ({
  item,
  compact,
  float,
}: {
  item: Item;
  compact?: boolean;
  float?: boolean;
}) => (
  <div className={float ? "relative" : "flex flex-col items-center gap-2"}>
    <Tile item={item} compact={compact} />
    <span
      className={`text-center text-[13px] leading-tight text-[#6B7280] font-medium font-manrope md:text-[15px] ${
        float ? "absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap" : ""
      }`}
    >
      {item.label}
    </span>
  </div>
);

/* ------------------------------------------------------------------ */
/* Connectors: dashed brackets with pills + a fan of curves into the   */
/* logo square                                                         */
/* ------------------------------------------------------------------ */

const FAN_OFFSETS = [-64, -32, 0, 32, 64];
/* Desktop fan is shorter: change these to make the curves taller/shorter */
const DESKTOP_FAN_OFFSETS = [-40, -20, 0, 20, 40];

/* Mobile: vertical. Brackets sit under the 3 visible marquee columns
   (centres at 1/6, 1/2, 5/6 of the width). flip = mirrored for the bottom. */
const MobileConnector = ({ id, flip }: { id: string; flip?: boolean }) => (
  <svg
    viewBox="0 0 360 110"
    fill="none"
    className={`block w-full ${flip ? "-scale-y-100" : ""}`}
    aria-hidden
  >
    <defs>
      <linearGradient id={id} gradientUnits="userSpaceOnUse" x1="0" y1="60" x2="0" y2="110">
        <stop stopColor="#cfcce6" />
        <stop offset="1" stopColor="#cfcce6" stopOpacity="0.15" />
      </linearGradient>
    </defs>

    <g stroke="#d9d9e3" strokeDasharray="4 4">
      <path d="M60 0V16a12 12 0 0 0 12 12H288a12 12 0 0 0 12-12V0" />
      <path d="M180 0V60" />
      <path d="M0 60H360" opacity="0.6" />
    </g>

    {/* pills sitting on the lines */}
    <g fill="#fff" stroke="#d9d9e3">
      <rect x="84" y="22" width="36" height="12" rx="6" />
      <rect x="240" y="22" width="36" height="12" rx="6" />
      <rect x="162" y="54" width="36" height="12" rx="6" />
    </g>

    {/* fan into the logo square */}
    <g stroke={`url(#${id})`} strokeWidth="1">
      {FAN_OFFSETS.map((o) => (
        <path key={o} d={`M180 60C180 80 ${180 + o * 0.6} 92 ${180 + o} 110`} />
      ))}
    </g>
  </svg>
);

/* Desktop: horizontal. Tiles are 64px high, 96px apart, so the tile
   centres sit at y = 32 / 192 / 352 inside a 384px-high column. */
const DesktopConnector = ({ id, mirror }: { id: string; mirror?: boolean }) => (
  <div className={`relative h-96 flex-1 ${mirror ? "-scale-x-100" : ""}`}>
    {/* tile -> spine brackets (rounded corners) */}
    <div className="absolute left-0 top-8 h-40 w-12 rounded-tr-2xl border-r border-t border-dashed border-[#d9d9e3]" />
    <div className="absolute left-0 top-48 h-40 w-12 rounded-br-2xl border-b border-r border-dashed border-[#d9d9e3]" />

    {/* pills on the spine */}
    <div className="absolute left-10.5 top-24.5 h-7 w-3 rounded-full border border-[#d9d9e3] bg-white" />
    <div className="absolute left-10.5 top-64.5 h-7 w-3 rounded-full border border-[#d9d9e3] bg-white" />

    {/* middle tile -> hub */}
    <div className="absolute left-0 right-30 top-48 border-t border-dashed border-[#d9d9e3]" />

    {/* hub rail + pill */}
    <div className="absolute bottom-10 right-30 top-10 border-l border-dashed border-[#d9d9e3] opacity-70" />
    <div className="absolute right-28.5 top-44.25 h-7.5 w-3 rounded-full border border-[#d9d9e3] bg-white" />

    {/* fan into the logo square */}
    <svg
      viewBox="0 0 120 384"
      fill="none"
      className="absolute right-0 top-0 h-96 w-30"
      aria-hidden
    >
      <defs>
        <linearGradient id={id} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="120" y2="0">
          <stop stopColor="#cfcce6" />
          <stop offset="1" stopColor="#cfcce6" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <g stroke={`url(#${id})`} strokeWidth="1">
        {DESKTOP_FAN_OFFSETS.map((o) => (
          <path key={o} d={`M0 192C42 192 78 ${192 + o} 120 ${192 + o}`} />
        ))}
      </g>
    </svg>
  </div>
);

/* Mobile: auto-scrolling marquee, exactly 3 tiles visible at a time.
   The list is doubled and the track moves -50%, so the loop is seamless. */
const uniq = (rows: Item[][]) =>
  rows.flat().filter((it, i, a) => a.findIndex((x) => x.label === it.label) === i);

const Marquee = ({ items }: { items: Item[]; }) => {
 
  return (
    <div className="w-full overflow-hidden py-1">
      <div
        className={` flex w-max `}
     
      >
        {items.map((it, i) => (
          <div
            key={i}
            className="flex w-[calc(min(100vw-3rem,420px)/3)] shrink-0 justify-center px-1.5"
          >
            <Labeled item={it} compact />
          </div>
        ))}
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Sky-cloud logo square                                               */
/* Coloured clouds drift in from the top right, cross the square       */
/* diagonally and leave at the bottom left, each at its own pace.      */
/* ------------------------------------------------------------------ */

const CLOUDS = [
  { color: "#FF1493", top: "-6%", w: "78%", h: "40%", dur: 12, delay: 0, shape: 1, blur: 14 },
  { color: "#ffd56b", top: "18%", w: "70%", h: "30%", dur: 15, delay: -5, shape: 2, blur: 16 },
  { color: "#7B6BFF", top: "40%", w: "82%", h: "46%", dur: 13, delay: -8, shape: 3, blur: 13 },
  { color: "#6bb8ff", top: "58%", w: "72%", h: "34%", dur: 16, delay: -3, shape: 2, blur: 15 },
  { color: "#FFE88F", top: "28%", w: "88%", h: "48%", dur: 18, delay: -11, shape: 3, blur: 14 },
  { color: "#ff7fb8", top: "70%", w: "66%", h: "32%", dur: 14, delay: -7, shape: 1, blur: 16 },
];

const Orb = ({ size, logoClass = "" }: { size: string; logoClass?: string }) => (
  <div className={`relative ${size} shrink-0`}>
    {/* soft haze around the square */}
    <div className="sernio-breathe absolute inset-[-22%]">
      <div className="absolute inset-0 rounded-full shadow-[inset_0_0_45px_10px_rgba(150,130,255,0.10)]" />
    </div>

    {/* the rounded square = the "sky" */}
    <div className="absolute inset-0 overflow-hidden rounded-[26%] bg-linear-to-br from-[#7b6cf6] via-[#8576f7] to-[#6b84f5]">
      {CLOUDS.map((c, i) => (
        <div
          key={i}
          className={`sernio-cloud sernio-cloud-${c.shape}`}
          style={
            {
              "--c": c.color,
              "--d": `${c.dur}s`,
              "--delay": `${c.delay}s`,
              "--b": `${c.blur}px`,
              top: c.top,
              width: c.w,
              height: c.h,
            } as React.CSSProperties
          }
        />
      ))}
      {/* light sheen so the clouds stay soft and the logo stays readable */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08),transparent_65%)]" />
    </div>

    {/* logo */}
    <div className={`absolute inset-0 flex flex-col items-center justify-center gap-1 ${logoClass}`}>
      <SernioMark  />
      <img src={sernioImg}/>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

const FirstSection = () => {
  return (
    <section className="w-full bg-white px-6 py-16 font-sans text-[#171a2b] md:px-12 md:py-24" data-navbar-theme="white"
    >
      <style>{`
        /* ---- clouds drifting in from the top right ---- */
        .sernio-cloud {
          position: absolute;
          left: 40%;
          opacity: 0;
          filter: blur(var(--b, 9px));
          background:
            radial-gradient(ellipse 36% 52% at 22% 66%, var(--c) 55%, transparent 100%),
            radial-gradient(ellipse 34% 68% at 46% 40%, var(--c) 55%, transparent 100%),
            radial-gradient(ellipse 36% 54% at 72% 62%, var(--c) 55%, transparent 100%),
            radial-gradient(ellipse 48% 38% at 50% 80%, var(--c) 50%, transparent 100%);
          animation: sernio-drift var(--d) linear infinite;
          animation-delay: var(--delay);
          will-change: transform, opacity;
        }
        /* different cloud shapes so they don't all look the same
           (shape 1 = the base look above) */
        .sernio-cloud-2 {
          background:
            radial-gradient(ellipse 50% 40% at 30% 55%, var(--c) 55%, transparent 100%),
            radial-gradient(ellipse 30% 55% at 60% 35%, var(--c) 55%, transparent 100%),
            radial-gradient(ellipse 40% 36% at 82% 60%, var(--c) 50%, transparent 100%);
        }
        .sernio-cloud-3 {
          background:
            radial-gradient(ellipse 28% 50% at 18% 60%, var(--c) 55%, transparent 100%),
            radial-gradient(ellipse 32% 70% at 38% 38%, var(--c) 55%, transparent 100%),
            radial-gradient(ellipse 30% 60% at 58% 50%, var(--c) 55%, transparent 100%),
            radial-gradient(ellipse 34% 48% at 80% 66%, var(--c) 55%, transparent 100%),
            radial-gradient(ellipse 60% 30% at 50% 82%, var(--c) 50%, transparent 100%);
        }
        @keyframes sernio-drift {
          0%   { transform: translate(150%, -90%) scale(.9);  opacity: 0; }
          12%  { opacity: .9; }
          50%  { transform: translate(-50%, 20%)  scale(1.08); }
          88%  { opacity: .9; }
          100% { transform: translate(-250%, 130%) scale(.95); opacity: 0; }
        }

        @keyframes sernio-breathe {
          0%,100% { transform: scale(.96); opacity: .7; }
          50%     { transform: scale(1.06); opacity: 1; }
        }
        .sernio-breathe { animation: sernio-breathe 7s ease-in-out infinite; }

        @keyframes sernio-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .sernio-marquee { animation: sernio-marquee 27s linear infinite; }
        .sernio-marquee-rev { animation-direction: reverse; }

        @media (prefers-reduced-motion: reduce) {
          .sernio-cloud, .sernio-breathe, .sernio-marquee { animation: none; }
          .sernio-cloud { opacity: .6; }
        }
      `}</style>

      {/* ---------- header ---------- */}
      <div className="mx-auto flex max-w-275 flex-col items-start md:items-center md:text-center">
        <Tag isDark> How Sernio connects</Tag>
        <h2 className="mt-6 max-w-190 max-sm:hidden text-[34px] font-normal font-cal-sans text-[#171F2A] leading-[1.1] tracking-tight md:mt-8 md:text-[50px]">
          One connection. Everything 
          <br/>
          stays in sync.
        </h2>

        <h2 className="mt-6 hidden max-sm:block max-w-190 text-[34px] font-normal font-cal-sans text-[#171F2A] leading-[1.1] tracking-tight md:mt-8 md:text-[50px]">
          One connection. Everything 
          
          stays in sync.
        </h2>
        <p className="mt-5 max-w-160 text-[15px] leading-[1.75] text-[#6B7280] font-manrope font-medium md:mt-6 md:text-[17px] md:leading-[1.9]">
          Sernio doesn’t replace your EHR or scheduling tool, it reads from it and
          writes back to it, in real time, on every single call.
        </p>
      </div>

      {/* ================= DESKTOP ================= */}
      {/* max-w-265 (1060px) = outer width, used by the "What flows" text row.
          The logo diagram sits in its own narrower box (max-w-190 = 760px):
          smaller box = side tiles closer to the middle logo. */}
      <div className="mx-auto mt-16 hidden max-w-265 lg:block">
        <div className="mx-auto max-w-190">
          <div className="grid grid-cols-[auto_1fr_auto] items-center">
            {/* left tiles */}
            <div className="flex flex-col gap-24">
              {INPUTS.map((items) => (
                <Labeled key={items[0].label} item={items[0]} float />
              ))}
            </div>

            {/* connectors + logo square */}
            <div className="flex items-center justify-center">
              <DesktopConnector id="fan-left" />
              <Orb size="h-[140px] w-[140px]" logoClass="scale-55" />
              <DesktopConnector id="fan-right" mirror />
            </div>

            {/* right tiles */}
            <div className="flex flex-col gap-24">
              {OUTPUTS.map((items) => (
                <Labeled key={items[0].label} item={items[0]} float />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-28 flex items-start justify-between gap-10 lg:-mx-8 xl:-mx-24">
          <div className="max-w-96">
            <h3 className="text-[30px] font-bold tracking-tight">What flows in</h3>
            <p className="mt-2 text-[18px] leading-[1.8] text-[#6b6b7b]">
              Patient records, schedules, provider availability, read in real time,
              never duplicated.
            </p>
          </div>
          <div className="max-w-96 text-right">
            <h3 className="text-[30px] font-bold tracking-tight">What flows out</h3>
            <p className="mt-2 text-[18px] leading-[1.8] text-[#6b6b7b]">
              Bookings, reminders, and staff alerts, written back automatically, no
              manual entry.
            </p>
          </div>
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="mx-auto mt-10 max-w-105 lg:hidden">
        <h3 className="text-[26px] font-normal tracking-tight font-cal-sans text-[#171F2A]">What flows in</h3>
        <p className="mt-1 text-[14px] leading-[1.6] text-[#6B7280] font-medium font-manrope">
          Patient records, schedules, provider availability, read in real time,
          never duplicated.
        </p>

        {/* top logos: auto-scrolling marquee, 3 visible at a time */}
        <div className="mt-10">
          <Marquee items={uniq(INPUTS)} />
        </div>

        {/* connector in */}
        <MobileConnector id="fan-top" />

        <div className="flex justify-center">
          <Orb size="h-[140px] w-[140px]" logoClass="scale-60" />
        </div>

        {/* connector out */}
        <MobileConnector id="fan-bottom" flip />

        <Marquee items={uniq(OUTPUTS)}  />

        <h3 className="mt-12 text-[26px] font-normal tracking-tight font-cal-sans text-[#171F2A]">What flows out</h3>
        <p className="mt-1 text-[14px] leading-[1.6] text-[#6B7280] font-medium font-manrope">
          Bookings, reminders, and staff alerts, written back automatically, no
          manual entry.
        </p>
      </div>
    </section>
  );
};

export default FirstSection;