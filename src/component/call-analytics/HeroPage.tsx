import callImage from "../../assets/call-analytics/Chrome (1).svg";
import ColorTag from "../resuable/ColorTag";
import RainbowTag from "../resuable/RainbowTag";

const HeroPage = () => {
    return (
        <div
            data-navbar-theme="white"
            className="bg-cover bg-center bg-no-repeat w-full lg:min-h-screen lg:h-screen flex flex-col lg:justify-center lg:items-center overflow-hidden pt-32 pb-10  xl:mt-14 lg:pt-0 lg:pb-0"
            style={{ backgroundImage: `url('/bg (3).png')` }}
        >
            <div className="flex flex-col w-full xl:w-auto lg:gap-5 lg:flex-row lg:justify-center lg:items-center">

                {/* Left Content */}
                <div className="flex flex-col w-full xl:w-auto lg:mt-30 xl:-mt-20 md:items-center lg:items-start">

                    {/* Tag */}
                    <div className="md:flex md:items-center md:justify-center lg:justify-start px-5 lg:px-0">
                        <RainbowTag>Call Analytics</RainbowTag>
                    </div>
                    

                    {/* Heading */}
                    <div className="font-normal text-[32px] md:text-[50px] font-cal-sans text-[#171F2A] leading-tight md:text-center lg:text-left px-5 lg:px-0">
                        <h1>Every call, tracked.</h1>
                        <h1>Every outcome,</h1>
                        <h1>understood.</h1>
                    </div>

                    {/* Description */}
                    <p className="text-[#171F2A] font-manrope text-[14px] w-full max-w-125 md:mx-auto lg:mx-0 md:text-center lg:text-left px-5 lg:px-0 py-5 lg:py-0">
                        A real-time dashboard that shows you exactly what happened on every call — answered, missed, booked, transferred — so your practice runs on data, not guesswork.
                    </p>

                    {/* Tags */}
                    <div className="grid grid-cols-3 max-[500px]:grid-cols-2 px-5 lg:px-0 items-center justify-center md:gap-x-3 md:gap-y-3 gap-x-2 gap-y-2 md:py-6 py-3">
                        <div>
                        <ColorTag
                            text="Updates in real time"
                            textColor="#008C3E"
                            dotColor="#008C3E"
                            bgColor="#EDFFF5"
                            />
                        </div>

                        <div className="max-sm:-ml-4">
                        <ColorTag
                            text="14-day call history"
                            textColor="#28007C"
                            dotColor="#28007C"
                            bgColor="#EAE0FF"
                            />
                        </div>

                        <div>
                        <ColorTag
                            text="Exportable reports"
                            textColor="#005D76"
                            dotColor="#005D76"
                            bgColor="#E3F9FF"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="max-sm:px-5 max-lg:flex max-lg:justify-center max-lg:items-center">
                    <img
                        src={callImage}
                        alt=""
                    />
                </div>

            </div>
        </div>
    );
};

export default HeroPage;