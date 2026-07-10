import { useEffect, useRef, useState } from "react";
import Icons from "../assets/Icons";
import bgImage from "../assets/SecondSection/bg (4).png"
import manImage from "../assets/SecondSection/3.svg"
import chatImage from "../assets/SecondSection/5.svg"

const SecondSection = () => {
    const chatFrameRef = useRef<HTMLDivElement>(null);
    const chatImgRef = useRef<HTMLImageElement>(null);
    const [inView, setInView] = useState(false);
    const [scrollDistance, setScrollDistance] = useState(0);

    useEffect(() => {
        const el = chatFrameRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            { threshold: 0.4 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const frame = chatFrameRef.current;
        const img = chatImgRef.current;
        if (!frame || !img) return;

        const calcDistance = () => {
            const frameHeight = frame.offsetHeight;
            const imgHeight = img.offsetHeight;
            const hidden = imgHeight - frameHeight;
            setScrollDistance(hidden > 0 ? hidden : 0);
        };

        calcDistance();

        if (!img.complete) {
            img.addEventListener("load", calcDistance);
        }

        const resizeObserver = new ResizeObserver(calcDistance);
        resizeObserver.observe(frame);

        return () => {
            img.removeEventListener("load", calcDistance);
            resizeObserver.disconnect();
        };
    }, []);

    return(
        <div
         data-navbar-theme="white"
         className="second-section-grid gap-3 md:gap-5 px-5 md:px-12 lg:px-20 lg:mt-30 font-manrope lg:mb-30 mb-16 ">

            {/* CARD 1 — Maria Santos */}
            <div className="[grid-area:card1] w-full max-w-95 mx-auto md:max-w-none md:mx-0 bg-[#FCFAFF] rounded-[20px] py-5 h-full">

                <div className="flex flex-row justify-between leading-5 px-5 ">
                    <div>
                        <h3 className="text-[#171F2A] font-semibold">Maria Santos</h3>
                        <p className="text-[#6B7280] font-medium text-[14px]">Westbrook Dental Care</p>
                    </div>
                    <div className="mt-1">
                       {Icons.signalIcon}
                    </div>
                 </div>

                 <div className="mt-5  ">
                    <p className="font-medium text-[#6B7280] text-[13px] px-5">Today</p>

                    <div className="mt-3 flex flex-row items-center gap-3 px-5">
                        {Icons.calenderIcon}
                        <div className="text-[#171F2A] font-normal text-[14px] ">
                            <p>Booked — Tomorrow 9:15 AM,</p>
                            <p>Dr. Chris</p>
                        </div>
                    </div>

                    <div className="mt-4 flex flex-row items-center gap-3 px-5">
                        {Icons.callIcon}
                        <div className="text-[#171F2A] font-normal text-[14px] ">
                            <p>Flagged urgent · Added to</p>
                            <p>recall list</p>
                        </div>
                    </div>
                    <div className="border-[0.5px] border-[#E5E7F7] mt-7"></div>

                    <div className="px-5 mt-4 flex flex-row justify-between">
                        <p className="text-[#6B7280] font-normal text-[13px]">Call resolved</p>
                        {Icons.rotateIcon}
                    </div>
                 </div>

            </div>

            {/* CARD 2 — bg image + text */}
            <div className="[grid-area:card2] relative w-full max-w-95 mx-auto md:max-w-none md:mx-0 h-39 md:h-full">
                <img
                    src={bgImage}
                    className="absolute inset-0 w-full h-full object-cover rounded-[20px]"
                />
                <div className="relative h-full flex items-center justify-center px-4 z-10">
                    <p className="text-[#171F2A] text-sm max-md:text-[16px] font-medium ">
                        Sernio is a HIPAA-ready AI voice platform that answers, triages, and books patient phone calls for clinics, practices, and hospitals — live in under a day, no new phone number required.
                    </p>
                </div>
            </div>

            {/* MAN IMAGE */}
            <div className="[grid-area:man] relative w-full max-w-95 mx-auto md:max-w-none md:mx-0 h-113.5 md:h-full overflow-hidden rounded-[20px]">
                <img
                    src={manImage}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>

            {/* CHAT FRAME — facing the man image, clipped/scrolling */}
            <div
                ref={chatFrameRef}
                className="[grid-area:chat] relative overflow-hidden w-full max-w-95 mx-auto md:max-w-none md:mx-0 h-112.5 md:h-full rounded-3xl"
                style={{ "--scroll-distance": `${scrollDistance}px` } as React.CSSProperties}
            >
                <img
                    ref={chatImgRef}
                    src={chatImage}
                    className={`absolute top-0 left-0 w-full ${inView ? "animate-chat-scroll" : ""}`}
                />
            </div>

        <style>{`
            .second-section-grid {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-areas:
                    "card1"
                    "card2"
                    "man"
                    "chat";
            }

            /* TABLET: cards on top row, images facing each other below */
            @media (min-width: 768px) {
                .second-section-grid {
                    grid-template-columns: 1fr 1fr;
                    grid-template-rows: 280px 380px;
                    grid-template-areas:
                        "card1 card2"
                        "man chat";
                }
            }

            /* DESKTOP: original 3-column asymmetric layout */
@media (min-width: 1024px) {
    .second-section-grid {
        grid-template-columns: 1fr 1.8fr 1fr;
        grid-template-rows: minmax(260px, auto) minmax(120px, auto);
        grid-template-areas:
            "card1 man chat"
            "card2 man chat";
        align-items: stretch;
        gap: 12px;
    }
}

            @keyframes chatScroll {
                0%   { transform: translateY(0px); }
                40%  { transform: translateY(calc(-1 * var(--scroll-distance))); }
                60%  { transform: translateY(calc(-1 * var(--scroll-distance))); }
                100% { transform: translateY(0px); }
            }
            .animate-chat-scroll {
                animation: chatScroll 6s ease-in-out infinite;
            }
        `}</style>

        </div>
    )
}

export default SecondSection;