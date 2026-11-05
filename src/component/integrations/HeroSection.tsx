import tag2 from "../../assets/integrations/1 (7).svg";
import tag3 from "../../assets/integrations/2 (7).svg";
import tag4 from "../../assets/integrations/4 (3).svg";
import tag5 from "../../assets/integrations/3 (10).svg";
import logo1 from "../../assets/integrations/1 (8).svg";
import logo2 from "../../assets/integrations/2 (8).svg";
import logo3 from "../../assets/integrations/3 (11).svg";
import logo4 from "../../assets/integrations/4 (4).svg";
import logo5 from "../../assets/integrations/5.svg";
import logo6 from "../../assets/integrations/6.svg";
import RainbowTag from "../resuable/RainbowTag";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

const HeroSection = () => {
    return (
        <div
            data-navbar-theme="white"
            className="bg-cover bg-center bg-no-repeat w-full lg:min-h-screen flex lg:flex-col md:justify-center items-center overflow-hidden pt-32 pb-10 lg:pt-36 lg:pb-16"
            style={{ backgroundImage: `url('/bg (3).png')` }}
        >
            <div className="flex md:justify-center md:items-center max-sm:px-5 flex-col">
                <div className="flex md:justify-center md:items-center">
                    <RainbowTag>Integrations</RainbowTag>
                </div>

                <div className="font-normal text-[32px] md:text-[50px] md:text-center font-cal-sans text-[#171F2A] leading-tight">
                    <h1>Your tools stay.</h1>
                    <h1>Sernio just plugs in.</h1>
                </div>

                <p className="text-[#171F2A] font-manrope md:mt-5 text-[14px] max-sm:py-5 md:w-120 md:text-center">
                    No rip-and-replace. Call data flows in from your EHR and scheduling tools, and real actions flow back out — booked appointments, updated records, alerted staff.
                </p>

                {/* Mobile: auto-scrolling marquee, exactly 3 logos visible at a time */}
                <div className="md:hidden overflow-hidden w-[calc(100vw-2.5rem)] py-6">
                    <div className="flex w-max animate-marquee">
                        {[...logos, ...logos].map((logo, i) => (
                            <div
                                key={i}
                                className="w-[calc((100vw-2.5rem)/3)] flex items-center justify-center px-2 shrink-0"
                            >
                                <img src={logo} alt="" className="max-w-full h-auto object-contain" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop / tablet: static row */}
                <div className="hidden md:flex flex-row items-center lg:gap-10 gap-3 md:py-30">
                    <div><img src={logo1} alt="" /></div>
                    <div><img src={logo2} alt="" /></div>
                    <div><img src={logo3} alt="" /></div>
                    <div><img src={logo4} alt="" /></div>
                    <div><img src={logo5} alt="" /></div>
                    <div><img src={logo6} alt="" /></div>
                </div>

                <div className="flex flex-row max-sm:hidden items-center gap-3">
                    <div><img src={tag2} alt="" /></div>
                    <div><img src={tag3} alt="" /></div>
                    <div><img src={tag4} alt="" /></div>
                    <div><img src={tag5} alt="" /></div>
                </div>

                <div className="grid-cols-2 max-sm:grid hidden items-center gap-3 py-6">
                    <div><img src={tag2} alt="" /></div>
                    <div><img src={tag3} alt="" /></div>
                    <div><img src={tag4} alt="" /></div>
                    <div><img src={tag5} alt="" /></div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;