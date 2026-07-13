import Icons from "../assets/Icons";
import FilledButton from "./FilledButton";
import MobileNavBar from "./MobileNav";
import { useNavbarTheme } from "./useNavbarTheme";

const NavBar = () => {
    const isDark = useNavbarTheme();

    return (
        <>
        <div className="hidden md:block">
        <div
            className={`relative flex flex-row justify-between items-center py-2 px-2 text-[14px]
                w-full lg:max-w-250 max-w-190 rounded-[10px] my-8 mx-auto overflow-hidden font-manrope
                backdrop-blur-[20px] backdrop-saturate-150 bg-[#E8E8E833] transition-colors duration-300  border border-[#E5E7F7]
                ${isDark
                    ? " text-white"
                    : " text-[#171F2A]"
                }`}
        
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

            <div className="relative z-10 gap-10 flex flex-row font-medium">
                <span className="cursor-pointer">Product</span>
                <span className="cursor-pointer">Specialties</span>
                <span className="cursor-pointer">Integrations</span>
                <span className="cursor-pointer">FAQs</span>
            </div>

            <div className="relative z-10 flex flex-row items-center gap-5">
                <div>
                    <span className="cursor-pointer font-bold">Sign Up</span>
                </div>
                <FilledButton
                    textColor={"#F5F3FF"}
                    text={"Book a Demo"}
                    bgColor={isDark ? "#7B3FFF" : "#5B0AFF"}
                />
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

