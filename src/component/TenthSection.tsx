import { useRef, useState, useEffect } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "Will patients know they're talking to an AI?",
    answer:
      "Yes. Every call opens with a clear, plain-language disclosure before Sernio helps with anything.",
  },
  {
    question: "What happens if it's a real emergency?",
    answer:
      "Sernio recognizes emergency language immediately and routes the caller to 911 or your on-call line, no menus, no delay.",
  },
  {
    question: "Does it replace my front desk?",
    answer:
      "No. It catches the calls your team can't get to, so your staff can focus on patients in the room, not patients on hold.",
  },
  {
    question: "Does it work with my EHR?",
    answer:
      "Sernio connects to the EHR and scheduling tools your practice already uses, so bookings and updates sync automatically.",
  },
  {
    question: "Is Sernio HIPAA compliant?",
    answer:
      "Yes. Every call is encrypted end-to-end and handled under a signed BAA, with full audit logs available on request.",
  },
  {
    question: "What if Sernio doesn't know the answer?",
    answer:
      "It says so, takes a message, and hands the caller to your team, instead of guessing.",
  },
];

// Card layout constants (desktop): w-70 = 280px, gap-5 = 20px
const CARD_WIDTH = 280;
const CARD_GAP = 20;
// Visible viewport = 4 full cards + 4 gaps + half of the 5th card
const VISIBLE_WIDTH = CARD_WIDTH * 4 + CARD_GAP * 4 + CARD_WIDTH * 0.5; // 1340
// Fade should begin exactly where the 4th card starts (after 3 full cards + 3 gaps)
const FADE_START_PX = CARD_WIDTH * 3 + CARD_GAP * 3; // 900
const FADE_START_PCT = (FADE_START_PX / VISIBLE_WIDTH) * 100; // ~67%

const TenthSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  };

  useEffect(() => {
    updateScrollState();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scrollByCard = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-faq-card]");
    const cardWidth = card ? card.offsetWidth + 20 : 320;
    el.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full  py-14 md:py-20"  data-navbar-theme="white"  >
      <div className="mx-auto max-w-350 px-5 md:px-10 xl:px-26">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-8 mb-8 md:mb-12">
          <div>
            <span className="inline-block font-manrope rounded-full border border-[#5B0AFF] px-4 py-1.5 text-[13px] text-[#171F2A] mb-4 md:mb-5">
              Questions, answered plainly
            </span>
            <h2 className="text-[26px] md:text-[40px] leading-[1.2] md:leading-[1.15] font-cal-sans font-normal text-[#171F2A] max-w-120">
              Everything your team usually asks first.
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4 max-w-70">
            <p className="text-[14px] leading-normal text-[#6B7280] font-manrope ">
              Sernio connects to the EHR and scheduling tools your practice
              already has open; call data flows in.
            </p>
            {/* Arrows: desktop / tablet only, mobile is a plain vertical stack */}
            <div className="hidden md:flex items-center gap-3">
  <button
    type="button"
    aria-label="Scroll left"
    onClick={() => scrollByCard("left")}
    disabled={!canScrollLeft}
    className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-200 disabled:cursor-default ${
      canScrollLeft
        ? "bg-[#151515] hover:bg-[#2a2a2a]"
        : "border border-[#1A1A1A]/15 "
    }`}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.57 5.92969L3.5 11.9997L9.57 18.0697" stroke={canScrollLeft ? "#FFFEFA" : "#171F2A33"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.4999 12H3.66992" stroke={canScrollLeft ? "#FFFEFA" : "#171F2A33"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </button>
  <button
    type="button"
    aria-label="Scroll right"
    onClick={() => scrollByCard("right")}
    disabled={!canScrollRight}
    className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-200 disabled:cursor-default ${
      canScrollRight
        ? "bg-[#151515] hover:bg-[#2a2a2a]"
        : "border border-[#1A1A1A]/15 hover:bg-[#1A1A1A]/4"
    }`}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.43 5.92969L20.5 11.9997L14.43 18.0697" stroke={canScrollRight ? "#FFFEFA" : "#171F2A33"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.50008 12H20.3301" stroke={canScrollRight ? "#FFFEFA" : "#171F2A33"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </button>
</div>
          </div>
        </div>

        {/* Cards: vertical stack on mobile, horizontal scroll from md up, capped to show 4.5 cards */}
        <div
          ref={scrollRef}
          className="flex flex-col md:flex-row gap-4 md:gap-5 md:w-[min(1340px,100%)] md:overflow-x-auto scroll-smooth md:pb-2 scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          style={
            canScrollRight
              ? {
                  maskImage: `linear-gradient(to right, black 0%, black ${FADE_START_PCT}%, transparent 100%)`,
                  WebkitMaskImage: `linear-gradient(to right, black 0%, black ${FADE_START_PCT}%, transparent 100%)`,
                }
              : undefined
          }
        >
          {FAQS.map((faq, index) => {
            const isFirst = index === 0;
            return (
              <div
                key={faq.question}
                data-faq-card
                className={`group relative font-manrope w-full md:w-70 md:shrink-0 cursor-pointer md:h-85 rounded-[20px] p-6 md:p-7 flex flex-col justify-start md:justify-end  transition-colors duration-300 ease-out ${
                  isFirst
                    ? "bg-[#9C73F3] md:bg-[#F7F7F7] md:hover:bg-[#9C73F3]"
                    : "bg-[#F7F7F7] md:hover:bg-[#9C73F3]"
                }`}
              >
                <h3
                  className={`text-[17px] md:text-[25px] leading-[1.3] font-semibold transition-colors duration-300 ease-out ${
                    isFirst
                      ? "text-white md:text-[#6B7280] md:group-hover:text-white"
                      : "text-[#6B7280] md:group-hover:text-white"
                  }`}
                >
                  {faq.question}
                </h3>

                {/* Answer: always visible on mobile, reveals on hover from md up */}
                <div className="grid grid-rows-[1fr] font-manrope md:grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out md:group-hover:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p
                      className={`pt-3 text-[14px] leading-[1.55] ${
                        isFirst ? "text-[#F3EDFF]" : "text-[#6B7280] md:text-[#F3EDFF]"
                      }`}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TenthSection;