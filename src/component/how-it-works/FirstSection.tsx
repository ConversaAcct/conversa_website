import type { ReactNode } from "react";
import FeatureList from "../resuable/FeatureList";
import Tag from "../resuable/Tag";
import answerImg from "../../assets/how-it-works/3 (7).svg"
import understandImg from "../../assets/how-it-works/3 (8).svg"
import actImg from "../../assets/how-it-works/3 (9).svg"
import ehrLogo from "../../assets/how-it-works/icon (2).svg"

/* Swap these for your real assets */
const IMAGES = {
    answer: answerImg,
    understand: understandImg,
    act: actImg,
    ehrLogo: ehrLogo,
};

const chatMessages = [
    { from: "patient", text: "Hi, I need to reschedule my cleaning, can I do Thursday morning?" },
    { from: "ai", text: "Of course. Can I get your date of birth to pull up your record?" },
    { from: "patient", text: "Sure, July 4th, 1985." },
    { from: "ai", text: "Got it, Maria. Dr. Anthony has 10 AM and 11:30 AM on Thursday, which works better?" },
];

/* ---------- Icons ---------- */
const PhoneIcon = ({ className = "" }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
    >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);




const CheckIcon = ({ className = "" }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
    >
        <path d="M20 6 9 17l-5-5" />
    </svg>
);

const CurvedArrow = () => (
<svg width="27" height="44" viewBox="0 0 27 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.269531 0.962891C11.6029 4.12956 29.9695 17.5629 14.7695 41.9629" stroke-width="2" stroke="#5A5B64"/>
<path d="M11.7695 30.9629L14.7695 41.9629L25.7695 38.9629" stroke-width="2" stroke="#5A5B64"/>
</svg>

);

/* ---------- Small building blocks ---------- */
const StepTag = ({ number, label }: { number: string; label: string }) => (
    <span className="inline-flex items-center rounded-full border border-[#5B21F5] p-1 pr-4">
        <span className="rounded-full bg-[#5B21F5] px-3 py-1 text-xs font-semibold text-white">
            Step {number}
        </span>
        <span className="ml-3 text-sm text-[#171F2A]">{label}</span>
    </span>
);



type VisualProps = {
    image: string;
    alt: string;
    bubble: string;
    /** which side the photo sits on (desktop) */
    align: "left" | "right";
    controls?: boolean;
    children: ReactNode;
};

const Visual = ({ image, alt, bubble, align, children }: VisualProps) => (
    <div className="relative pb-[24%] lg:pb-[18%] ">
        {/* Photo */}
        <div
            className={`relative aspect-7/8 w-[66%] overflow-hidden rounded-3xl lg:w-[62%] ${
                align === "right" ? "lg:ml-[15%]" : ""
            }`}
        >
            <img src={image} alt={alt} className="size-full object-cover" />
        </div>

        {/* Floating card */}
        <div
            className={`absolute bottom-0 right-0 w-[62%] lg:w-[45%] ${
                align === "left" ? "lg:right-[13%]" : "lg:right-0"
            }`}
        >
            {/* Status bubble + arrow */}
            <div className="absolute -top-11 left-[30%] flex items-start gap-1 lg:-top-18 lg:left-[36%] lg:gap-2">
                <span className="rounded-full bg-white px-3 py-1.5 text-[10px] text-[#29996A] shadow-[0_10px_30px_rgba(15,15,40,0.08)] lg:px-5 lg:py-3 lg:text-sm">
                    {bubble}
                </span>
                <div className="lg:mt-5 mt-3">
                <CurvedArrow />
                </div>
                
            </div>

            <div className="rounded-2xl bg-white p-3 shadow-[0_20px_60px_rgba(15,15,40,0.10)] lg:rounded-3xl lg:p-5">
                {children}
            </div>
        </div>
    </div>
);

/* ---------- Card contents ---------- */
const CallCard = () => (
    <div className="flex flex-col items-center text-center font-manrope ">
        <span>
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="32" fill="#F6F1FF"/>
            <circle cx="32.0214" cy="31.9982" r="29.8808" fill="#E4D4FF"/>
            <circle cx="32.0135" cy="31.9913" r="26.9139" fill="#7C3AED"/>
            <path d="M38.7983 36.6835C38.7983 36.9378 38.7417 37.1992 38.6216 37.4535C38.5016 37.7078 38.3462 37.948 38.1413 38.174C37.7952 38.5555 37.4137 38.831 36.9828 39.0076C36.559 39.1842 36.0998 39.276 35.6053 39.276C34.8848 39.276 34.1148 39.1064 33.3024 38.7603C32.4901 38.4142 31.6777 37.948 30.8724 37.3616C30.0601 36.7683 29.2901 36.1113 28.5554 35.3837C27.8278 34.6491 27.1709 33.8791 26.5846 33.0738C26.0053 32.2685 25.5391 31.4632 25.2 30.6649C24.8609 29.8596 24.6914 29.0897 24.6914 28.355C24.6914 27.8747 24.7762 27.4155 24.9457 26.9917C25.1152 26.5608 25.3837 26.1652 25.7581 25.812C26.2102 25.3669 26.7047 25.1479 27.2274 25.1479C27.4252 25.1479 27.623 25.1903 27.7996 25.2751C27.9832 25.3599 28.1457 25.487 28.2729 25.6707L29.9117 27.9806C30.0389 28.1572 30.1307 28.3197 30.1943 28.4751C30.2579 28.6234 30.2932 28.7718 30.2932 28.906C30.2932 29.0755 30.2437 29.2451 30.1448 29.4076C30.053 29.57 29.9188 29.7396 29.7492 29.9091L29.2124 30.4672C29.1347 30.5449 29.0994 30.6367 29.0994 30.7497C29.0994 30.8062 29.1064 30.8557 29.1205 30.9122C29.1417 30.9687 29.1629 31.0111 29.1771 31.0535C29.3042 31.2866 29.5232 31.5903 29.834 31.9577C30.1519 32.325 30.491 32.6994 30.8583 33.0738C31.2398 33.4482 31.6071 33.7943 31.9815 34.1122C32.3488 34.423 32.6526 34.6349 32.8927 34.7621C32.9281 34.7762 32.9704 34.7974 33.0199 34.8186C33.0764 34.8398 33.1329 34.8468 33.1965 34.8468C33.3166 34.8468 33.4084 34.8045 33.4861 34.7268L34.023 34.197C34.1996 34.0204 34.3691 33.8861 34.5316 33.8014C34.6941 33.7025 34.8565 33.653 35.0331 33.653C35.1673 33.653 35.3086 33.6813 35.464 33.7449C35.6194 33.8084 35.7819 33.9003 35.9585 34.0204L38.2967 35.6804C38.4804 35.8076 38.6075 35.9559 38.6852 36.1325C38.7559 36.3091 38.7983 36.4857 38.7983 36.6835Z" stroke-miterlimit="10" stroke="white"/>
            <path d="M36.3474 30.0928C36.3474 29.6689 36.0154 29.019 35.5209 28.4892C35.0688 28.0018 34.4684 27.6204 33.875 27.6204" stroke-linecap="round" stroke-linejoin="round" stroke="white"/>
            <path d="M38.8198 30.0928C38.8198 27.359 36.6088 25.1479 33.875 25.1479" stroke-linecap="round" stroke-linejoin="round" stroke="white"/>
            </svg>

        </span>
        <p className="mt-3 text-sm font-semibold text-[#1F2937] lg:mt-5 lg:text-xl">John Smith</p>
        <p className="mt-1 text-[10px] text-[#6B7280] font-medium lg:text-base">+1 (555) 123-4567</p>
        <p className="mt-1 text-[10px] text-[#6B7280] lg:mt-2 lg:text-sm">Duration: 00:42</p>
        <button
            type="button"
            className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-md bg-[#CA2044] py-2  text-[10px] font-medium text-white lg:mt-6 lg:gap-2 lg:py-3 lg:text-sm"
        >
            <PhoneIcon className="size-3 lg:size-4" />
            End Call
        </button>
    </div>
);

const ChatCard = () => (
    <div className="flex flex-col gap-2 lg:gap-4 font-manrope">
        {chatMessages.map((msg) => (
            <div
                key={msg.text}
                className={`max-w-[88%]  px-2.5 py-2 text-[9px] leading-snug lg:px-4 lg:py-3 lg:text-xs ${
                    msg.from === "ai"
                        ? "self-end bg-[#171F2A] text-white rounded-xl rounded-br-none"
                        : "self-start bg-[#F5F0FF] text-[#1a1a2e] rounded-xl"
                }`}
            >
                {msg.text}
            </div>
        ))}
    </div>
);

const BookingCard = () => (
    <div className="flex flex-col gap-2 lg:gap-3 font-manrope">
        <div className="flex flex-col items-center rounded-xl border border-[#e6e6ee] px-3 py-4 text-center lg:py-7">
            <span className="flex size-6 items-center justify-center rounded-full bg-[#5B21F5] text-white lg:size-8">
                <CheckIcon className="size-3 lg:size-4" />
            </span>
            <p className="mt-2 text-[14px] font-bold text-[#171F2A] lg:mt-3 lg:text-base">
                Appointment rescheduled
            </p>
            <p className="mt-1 text-[12px] leading-snug text-[#6B7280] lg:text-xs">
                Confirmation sent to patient
                <br />
                via email
            </p>
        </div>

        <div className="flex items-center gap-2 rounded-xl border border-[#e6e6ee] px-3 py-2 lg:gap-3 lg:py-3">
            <img src={IMAGES.ehrLogo} alt="ehr logo"/>
            <span className="text-[12px] font-semibold text-[#171F2A] ">
                Synced to Oracle health EHR
            </span>
        </div>

        <div className="h-3 rounded-md bg-[#F8F8FF] lg:h-5" />
        <div className="h-3 w-3/5 rounded-md bg-[#F8F8FF] lg:h-5" />
    </div>
);

/* ---------- Data ---------- */
type Step = {
    number: string;
    label: string;
    title: string;
    description: string;
    features: string[];
    /** true = text on the left, visual on the right (desktop) */
    reverse: boolean;
    visual: ReactNode;
};

const steps: Step[] = [
    {
        number: "01",
        label: "Answer",
        title: "Every call picked up in under a second.",
        description:
            "The moment a patient calls your practice line, Sernio answers — day or night, weekends and holidays included. No menu trees, no hold music, no “your call is important to us.” Just an immediate, warm, human-sounding response tuned to your specialty.",
        features: [
            "Answers in under 1 second, 24 hours a day",
            "Voice tuned to your specialty — dental greetings sound different from OB/GYN",
            "Existing patients recognised from your directory before the conversation starts",
            "Call recording begins immediately for your audit log",
        ],
        reverse: false,
        visual: (
            <Visual image={IMAGES.answer} alt="Receptionist on a call" bubble="Ringing..." align="left">
                <CallCard />
            </Visual>
        ),
    },
    {
        number: "02",
        label: "Understand",
        title: "Listen, triage, decide — in real time.",
        description:
            "Sernio holds a natural conversation to understand exactly why the patient is calling. It asks the right follow-up questions, identifies urgency, detects emergency signals, and determines the correct next action — all before any human is involved.",
        features: [
            "Natural language — not a phone menu, a real conversation",
            "Emergency keyword detection triggers immediate escalation",
            "Identifies caller intent: appointment, insurance, prescription, or other",
            "Confidence scoring — uncertain calls escalate to a human automatically",
        ],
        reverse: true,
        visual: (
            <Visual image={IMAGES.understand} alt="Agent triaging a call" bubble="Triaging..." align="right">
                <ChatCard />
            </Visual>
        ),
    },
    {
        number: "03",
        label: "Act",
        title: "The right thing happens. Automatically.",
        description:
            "Once Sernio understands the call, it takes the correct action — books the appointment, answers the insurance question, routes the urgent call — and syncs the outcome directly to your EHR. Your front desk sees the result, not the work.",
        features: [
            "Appointments booked directly into your scheduling system",
            "Insurance queries answered from your accepted plans list",
            "Prescription refills flagged and routed to clinical staff",
            "Every outcome logged to your Call Analytics dashboard",
        ],
        reverse: false,
        visual: (
            <Visual
                image={IMAGES.act}
                alt="Calendar on a laptop"
                bubble="Booking..."
                align="left"
                controls={false}
            >
                <BookingCard />
            </Visual>
        ),
    },
];

/* ---------- Section ---------- */
const FirstSection = () => {
    return (
        <section
            data-navbar-theme="light"
            className="w-full overflow-hidden bg-white py-16 lg:py-24"
        >
            <div className="mx-auto max-w-350">
                {/* Intro */}
                <div className="mb-12 max-lg:px-5 lg:mb-24 lg:text-center">
                    <div className="lg:flex lg:justify-center">
                        <Tag isDark>The call lifecycle</Tag>
                    </div>
                    <h2 className="mx-auto mt-4 max-w-3xl font-cal-sans text-[32px] font-normal leading-tight text-[#0e0d19] md:text-[50px]">
                        Three things happen on every call. In this order. Every time.
                    </h2>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#5b5b6b] lg:text-lg">
                        Sernio doesn&rsquo;t improvise. It follows a defined, auditable process,
                        which is exactly what you want when patient data and clinical decisions
                        are involved.
                    </p>
                </div>

                {/* Steps */}
                <div className="relative">
                    {/* Center timeline (desktop only) */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[#e4e4ea] lg:block"
                    >
                        <span className="absolute left-1/2 top-0 h-32 w-0.5 -translate-x-1/2 bg-[#0e0d19]" />
                    </div>

                    <div className="flex flex-col gap-16 max-lg:px-5 lg:gap-32">
                        {steps.map((step) => (
                            <div
                                key={step.number}
                                className="grid items-start gap-8 lg:grid-cols-2 lg:gap-0"
                            >
                                {/* Text */}
                                <div className={step.reverse ? "lg:pr-12" : "lg:pl-10.5"}>
                                    <div className="lg:ml-23.5">
                                        <StepTag number={step.number} label={step.label} />
                                    </div>

                                    <div className="mt-4 flex items-start gap-6">
                                        <div className="hidden size-17.5 shrink-0 items-center justify-center rounded-2xl bg-[#FBFBFB] text-[#8a8a98] lg:flex">
                                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.8719 17.4134C20.8719 17.7554 20.7959 18.1069 20.6344 18.4489C20.4729 18.7909 20.2639 19.1139 19.9884 19.4179C19.5229 19.9309 19.0099 20.3014 18.4304 20.5389C17.8604 20.7764 17.2429 20.8999 16.5779 20.8999C15.6089 20.8999 14.5734 20.6719 13.4809 20.2064C12.3884 19.7409 11.2959 19.1139 10.2129 18.3254C9.12039 17.5274 8.08489 16.6439 7.09689 15.6654C6.11839 14.6774 5.23489 13.6419 4.44639 12.5589C3.66739 11.4759 3.04039 10.3929 2.58439 9.3194C2.12839 8.2364 1.90039 7.2009 1.90039 6.2129C1.90039 5.5669 2.01439 4.9494 2.24239 4.3794C2.47039 3.7999 2.83139 3.2679 3.33489 2.7929C3.94289 2.1944 4.60789 1.8999 5.31089 1.8999C5.57689 1.8999 5.84289 1.9569 6.08039 2.0709C6.32739 2.1849 6.54589 2.3559 6.71689 2.6029L8.92089 5.7094C9.09189 5.9469 9.21539 6.1654 9.30089 6.3744C9.38639 6.5739 9.43389 6.7734 9.43389 6.9539C9.43389 7.1819 9.36739 7.4099 9.23439 7.6284C9.11089 7.8469 8.93039 8.0749 8.70239 8.3029L7.98039 9.0534C7.87589 9.1579 7.82839 9.2814 7.82839 9.4334C7.82839 9.5094 7.83789 9.5759 7.85689 9.6519C7.88539 9.7279 7.91389 9.7849 7.93289 9.8419C8.10389 10.1554 8.39839 10.5639 8.81639 11.0579C9.24389 11.5519 9.69989 12.0554 10.1939 12.5589C10.7069 13.0624 11.2009 13.5279 11.7044 13.9554C12.1984 14.3734 12.6069 14.6584 12.9299 14.8294C12.9774 14.8484 13.0344 14.8769 13.1009 14.9054C13.1769 14.9339 13.2529 14.9434 13.3384 14.9434C13.4999 14.9434 13.6234 14.8864 13.7279 14.7819L14.4499 14.0694C14.6874 13.8319 14.9154 13.6514 15.1339 13.5374C15.3524 13.4044 15.5709 13.3379 15.8084 13.3379C15.9889 13.3379 16.1789 13.3759 16.3879 13.4614C16.5969 13.5469 16.8154 13.6704 17.0529 13.8319L20.1974 16.0644C20.4444 16.2354 20.6154 16.4349 20.7199 16.6724C20.8149 16.9099 20.8719 17.1474 20.8719 17.4134Z" stroke-width="1.5" stroke-miterlimit="10" stroke="#6B7280"/>
                                        </svg>

                                        </div>

                                        <div className="max-w-140">
                                            <h3 className="font-cal-sans text-[28px] font-normal leading-tight text-[#171F2A] md:text-[34px]">
                                                {step.title}
                                            </h3>
                                            <p className="mt-4 text-base leading-relaxed text-[#6B7280] font-manrope lg:text-lg">
                                                {step.description}
                                            </p>
                                            <div className="mt-6">
                                                <FeatureList items={step.features} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Visual */}
                                <div className={step.reverse ? "" : "lg:order-first"}>
                                    {step.visual}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FirstSection;