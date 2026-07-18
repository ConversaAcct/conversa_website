import { useState, useEffect } from "react";
import Icons from "../assets/Icons";
import FilledButton from "./FilledButton";
import { useNavbarTheme } from "./useNavbarTheme";

const MobileNavBar = () => {
    const isDark = useNavbarTheme();
    const [isOpen, setIsOpen] = useState(false);

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
                    onClick={() => setIsOpen((prev) => !prev)}
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
                        <span className="cursor-pointer">Product</span>
                        <span className="cursor-pointer">Specialties</span>
                        <span className="cursor-pointer">Integrations</span>
                        <span className="cursor-pointer">FAQs</span>

                        <div className="flex flex-col items-start gap-4 pt-2">
                            <span className="cursor-pointer font-bold">Sign Up</span>
                            <FilledButton
                                textColor={"#F5F3FF"}
                                text={"Book a Demo"}
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