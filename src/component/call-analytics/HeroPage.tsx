import tag1 from "../../assets/call-analytics/Group (7).svg";
import tag2 from "../../assets/call-analytics/1 (12).svg";
import tag3 from "../../assets/call-analytics/2 (9).svg";
import tag4 from "../../assets/call-analytics/3 (9).svg";
import callImage from "../../assets/call-analytics/Image (17).svg";

const HeroPage = () => {
    return (
        <div
            data-navbar-theme="white"
            className="bg-cover bg-center bg-no-repeat w-full min-h-screen lg:h-screen flex flex-col justify-center items-center lg:px-20 overflow-hidden pt-28 pb-10 xl:mt-14 lg:pt-0 lg:pb-0"
            style={{ backgroundImage: `url('/bg (3).png')` }}
        >
            <div className="flex flex-col w-full lg:w-auto lg:gap-5 lg:flex-row lg:justify-center lg:items-center">

                {/* Left Content */}
                <div className="flex flex-col w-full lg:w-auto lg:-mt-20 items-center lg:items-start">

                    <div className="flex items-center justify-center lg:justify-start">
                        <img src={tag1} alt="" />
                    </div>

                    <div className="font-normal text-[32px] md:text-[50px] font-cal-sans text-[#171F2A] leading-tight text-center lg:text-left">
                        <h1>Every call, tracked.</h1>
                        <h1>Every outcome,</h1>
                        <h1>understood.</h1>
                    </div>

                    <p className="text-[#171F2A] font-manrope text-[14px] w-full max-w-125 mx-auto text-center lg:text-left px-5 lg:px-0 py-5 lg:py-0">
                        A real-time dashboard that shows you exactly what happened on every call — answered, missed, booked, transferred — so your practice runs on data, not guesswork.
                    </p>

                    <div className="flex flex-row items-center justify-center gap-3 py-6">
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
                        className="hidden lg:block"
                    />
                </div>

            </div>

         
        </div>
    );
};

export default HeroPage;