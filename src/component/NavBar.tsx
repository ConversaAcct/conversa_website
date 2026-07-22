



import { useEffect, useRef, useState } from "react";
import Icons from "../assets/Icons";
import FilledButton from "./FilledButton";
import MobileNavBar from "./MobileNav";
import { useNavbarTheme } from "./useNavbarTheme";

const ChevronIcon = ({ open }: { open: boolean }) => (
    <svg
        width="10"
        height="10"
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

const MenuColumn = ({ heading, items }: { heading: string; items: MenuItem[] }) => (
    <div className="flex-1 flex flex-col gap-5">
        <span className="text-white text-[15px] font-semibold">{heading}</span>
        <div className="flex flex-col gap-5">
            {items.map((item) => (
                <div
                    key={item.title}
                    className="flex flex-row items-start gap-3.5 cursor-pointer group"
                >
                    <div
                        className="flex items-center justify-center w-9 h-9 rounded-[9px] shrink-0 transition-transform duration-200 group-hover:scale-105"
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

const NavBar = () => {
    const isDark = useNavbarTheme();
    const [productOpen, setProductOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                setProductOpen(false);
            }
        };
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") setProductOpen(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    return (
        <>
            <div className="hidden md:block">
                <div
                    ref={containerRef}
                    className="relative w-full lg:max-w-250 max-w-190 mx-auto my-8"
                >
                    <div
                        className={`relative flex flex-row justify-between items-center py-2 px-2 text-[14px]
                            w-full rounded-[10px] overflow-hidden font-manrope
                            backdrop-blur-[20px] backdrop-saturate-150 bg-[#E8E8E833] transition-colors duration-300 border border-[#E5E7F7]
                            ${isDark ? " text-white" : " text-[#171F2A]"}`}
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

                        <div className="relative z-10">
                            {isDark ? Icons.logoWhite : Icons.logo}
                        </div>

                        <div className="relative z-10 gap-10 flex flex-row font-medium items-center">
                            <button
                                type="button"
                                onClick={() => setProductOpen((prev) => !prev)}
                                aria-expanded={productOpen}
                                className="flex flex-row items-center gap-1.5 cursor-pointer bg-transparent border-none p-0 font-medium text-inherit"
                            >
                                <span>Product</span>
                                <ChevronIcon open={productOpen} />
                            </button>
                            <span className="cursor-pointer">Specialties</span>
                            <span className="cursor-pointer">Integrations</span>
                            <span className="cursor-pointer">FAQs</span>
                        </div>

                        <div className="relative z-10 flex flex-row items-center gap-5">
                            <FilledButton
                                textColor={"#F5F3FF"}
                                text={"Join the Waitlist"}
                                bgColor={isDark ? "#7B3FFF" : "#5B0AFF"}
                            />
                        </div>
                    </div>

                    {/* Product mega-menu — matches navbar width exactly, sits directly beneath it */}
                    <div
                        className={`absolute left-0 right-0 top-[calc(100%+8px)] z-20 origin-top transition-all duration-250 ease-out
                            ${productOpen
                                ? "opacity-100 translate-y-0 scale-y-100 pointer-events-auto"
                                : "opacity-0 -translate-y-2 scale-y-95 pointer-events-none"
                            }`}
                    >
                        <div className="relative rounded-[14px] border border-[#232331] bg-[#0E0D18]  overflow-hidden px-8 py-7">
                            <div
                                className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-[14px]"
                                style={{
                                    background:
                                        "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 100%)",
                                }}
                            />
                            <div className="relative z-10 flex flex-row gap-14">
                                <MenuColumn heading="Features" items={featureItems} />
                                <div className="w-px bg-[#232331] self-stretch" />
                                <MenuColumn heading="Resources" items={resourceItems} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block md:hidden">
                <MobileNavBar />
            </div>
        </>
    );
};

export default NavBar;