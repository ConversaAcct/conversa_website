import tag1 from "../../assets/call-analytics/Group (7).svg";
import tag2 from "../../assets/call-analytics/1 (12).svg";
import tag3 from "../../assets/call-analytics/2 (9).svg";
import tag4 from "../../assets/call-analytics/3 (9).svg";
import callImage from "../../assets/call-analytics/Image (17).svg";

const HeroPage = () => {
    return (
        <div
            data-navbar-theme="white"
            className="bg-cover bg-center bg-no-repeat w-full min-h-screen lg:h-screen flex flex-col justify-center items-center px-0 lg:px-20 max-sm:pt-30 overflow-hidden md:pt-28 md:pb-10 xl:mt-14 lg:pt-0 lg:pb-0"
            style={{ backgroundImage: `url('/bg (3).png')` }}
        >
            <div className="flex flex-col w-full xl:w-auto lg:gap-5 xl:flex-row xl:justify-center xl:items-center">

                {/* Left Content */}
                <div className="flex flex-col w-full xl:w-auto lg:mt-30 xl:-mt-20 md:items-center lg:items-start">

                    {/* Tag */}
                    <div className="md:flex md:items-center md:justify-center lg:justify-start px-5 lg:px-0">
                        <img src={tag1} alt="" />
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
                    <div className="grid grid-cols-3 max-[500px]:grid-cols-2 px-5 lg:px-0 items-center justify-center gap-3 md:py-6 py-3">
                        <div>
                            <img src={tag2} alt="" />
                        </div>

                        <div>
                            <img src={tag3} alt="" />
                        </div>

                        <div>
                            <img src={tag4} alt="" />
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div>
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