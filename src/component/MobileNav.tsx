

import { useState, useEffect } from "react";
import Icons from "../assets/Icons";
import FilledButton from "./FilledButton";
import { useNavbarTheme } from "./useNavbarTheme";

const ChevronIcon = ({ open }: { open: boolean }) => (
    <svg
        width="12"
        height="12"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`transition-transform duration-300 ease-out ${open ? "rotate-180" : "rotate-0"}`}
    >
        <path
            d="M1.5 3.5L5 7L8.5 3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);




type MenuItem = {
    icon: React.ReactNode;
    iconBg: string;
    title: string;
    description: string;
};

const featureItems: MenuItem[] = [
    {
        icon: Icons.CallAnalyticsIcon,
        iconBg: "",
        title: "Call Analytics",
        description: "Every call, outcome, and booking in real time",
    },
    {
        icon: Icons.AssistantSetupIcon,
        iconBg: "",
        title: "Assistant Setup",
        description: "Pick a template, go live the same day",
    },
    {
        icon: Icons.CallHandlingIcon,
        iconBg: "",
        title: "Call Handling Rules",
        description: "Emergency routing, spam blocking, VIP logic",
    },
    {
        icon: Icons.AppointmentWorkflowsIcon,
        iconBg: "",
        title: "Appointment Workflows",
        description: "Automated booking, reminders, and follow-ups",
    },
];

const resourceItems: MenuItem[] = [
    {
        icon: Icons.HowItWorksIcon,
        iconBg: "",
        title: "How it works",
        description: "The full call lifecycle, from ring to result",
    },
    {
        icon: Icons.RoiCalculatorIcon,
        iconBg: "",
        title: "ROI Calculator",
        description: "See what missed calls are costing your practice",
    },
    {
        icon: Icons.SecurityComplianceIcon,
        iconBg: "",
        title: "Security & Compliance",
        description: "HIPAA, BAA at onboarding, AES-256 encryption",
    },
];

const MobileMenuSection = ({ heading, items }: { heading: string; items: MenuItem[] }) => (
    <div className="flex flex-col gap-4 ">
        <span className="text-[#8A8FA3] text-[13px]  font-medium">{heading}</span>
        <div className="flex flex-col gap-4">
            {items.map((item) => (
                <div key={item.title} className="flex flex-row items-start gap-3">
                    <div
                        className="flex items-center justify-center w-9 h-9 rounded-[9px] shrink-0"
                        style={{ backgroundColor: item.iconBg }}
                    >
                        {item.icon}
                    </div>
                    <div className="flex flex-col gap-0.5">
                        <span className="text-white text-[14px] font-medium leading-tight">
                            {item.title}
                        </span>
                        <span className="text-[#8A8FA3] text-[12.5px] leading-snug">
                            {item.description}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const MobileNavBar = () => {
    const isDark = useNavbarTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [productOpen, setProductOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        // cleanup in case the component unmounts while menu is open
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen((prev) => {
            const next = !prev;
            // collapse the Product accordion whenever the whole menu closes
            if (!next) setProductOpen(false);
            return next;
        });
    };

    return (
        <div
            className={`relative w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] max-w-250 mx-auto my-8 rounded-[10px] overflow-hidden font-manrope
                backdrop-blur-[20px] backdrop-saturate-150 bg-[#E8E8E833] transition-colors duration-300 border border-[#E5E7F7]
                ${isDark ? "text-white" : "text-[#171F2A]"}`}
        >
            {/* specular sheen — the "glass curve" highlight */}
            <div
                className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-[10px]"
                style={{
                    background: isDark
                        ? "linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 100%)"
                        : "linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 100%)",
                }}
            />

            {/* faint moving-light edge, purely decorative */}
            <div
                className="pointer-events-none absolute -inset-px rounded-[10px] opacity-60"
                style={{
                    mixBlendMode: isDark ? "screen" : "multiply",
                }}
            />

            {/* top row: logo + hamburger/close toggle */}
            <div className="relative z-10 flex flex-row justify-between items-center py-2 px-4 text-[14px]">
                <div> {isDark ? Icons.logoWhite : Icons.logo}</div>

                <button
                    type="button"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    onClick={toggleMenu}
                    className="relative w-8 h-8 flex items-center justify-center cursor-pointer"
                >
                    <span
                        className={`absolute block h-0.5 w-5 rounded-full transition-all duration-300 ease-in-out
                            ${isDark ? "bg-white" : "bg-[#171F2A]"}
                            ${isOpen ? "rotate-45" : "-translate-y-1.5"}`}
                    />
                    <span
                        className={`absolute block h-0.5 w-5 rounded-full transition-all duration-300 ease-in-out
                            ${isDark ? "bg-white" : "bg-[#171F2A]"}
                            ${isOpen ? "opacity-0" : "opacity-100"}`}
                    />
                    <span
                        className={`absolute block h-0.5 w-5 rounded-full transition-all duration-300 ease-in-out
                            ${isDark ? "bg-white" : "bg-[#171F2A]"}
                            ${isOpen ? "-rotate-45" : "translate-y-1.5"}`}
                    />
                </button>
            </div>

            {/* revealed content panel */}
            <div
                className={`relative z-10 grid transition-all duration-300 ease-in-out
                    ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
                <div className="overflow-hidden">
                    <div className="flex flex-col gap-6 px-6 pb-8 pt-2 font-medium">
                        {/* Product — expands in place and pushes the rows below it down */}
                        <div className="flex flex-col">
                            <button
                                type="button"
                                onClick={() => setProductOpen((prev) => !prev)}
                                aria-expanded={productOpen}
                                className="flex flex-row items-center justify-between gap-2 cursor-pointer bg-transparent border-none p-0 font-medium text-inherit w-full"
                            >
                                <span>Product</span>
                                <ChevronIcon open={productOpen} />
                            </button>

                            <div
                                className={`grid transition-all duration-300 ease-in-out
                                    ${productOpen ? "grid-rows-[1fr] opacity-100 mt-5" : "grid-rows-[0fr] opacity-0 mt-0"}`}
                            >
                                <div className="overflow-hidden">
                                    <div className="flex flex-row gap-4 pl-4 bg-[#0E0D18] py-2 rounded-[10px]">
                                        <div className="flex flex-col gap-7 flex-1">
                                            <MobileMenuSection heading="Features" items={featureItems} />
                                            <MobileMenuSection heading="Resources" items={resourceItems} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <span className="cursor-pointer">Specialties</span>
                        <span className="cursor-pointer">Integrations</span>
                        <span className="cursor-pointer">FAQs</span>

                        <div className="flex flex-col items-start gap-4 pt-2">
                            {/* <span className="cursor-pointer font-bold">Sign Up</span> */}
                            <FilledButton
                                textColor={"#F5F3FF"}
                                text={"Join the Waitlist"}
                                bgColor={isDark ? "#7B3FFF" : "#5B0AFF"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNavBar;