import tag1 from "../../assets/call-handling-rules/Group (8).svg";
import tag2 from "../../assets/call-handling-rules/1 (18).svg";
import tag3 from "../../assets/call-handling-rules/2 (15).svg";
import tag4 from "../../assets/call-handling-rules/3 (12).svg";
import callImage from "../../assets/call-handling-rules/Group (9).svg";
import modalImage from "../../assets/call-handling-rules/Modal.svg"

const HeroPage = () => {
    return (
        <div
            data-navbar-theme="white"
            className="bg-cover bg-center bg-no-repeat w-full min-h-screen lg:h-screen flex flex-col justify-center items-center  overflow-hidden pt-28 pb-10 xl:mt-14 lg:pt-0 lg:pb-0"
            style={{ backgroundImage: `url('/bg (3).png')` }}
        >
            <div className="flex flex-col w-full xl:w-auto  xl:flex-row xl:justify-center xl:items-center xl:-ml-30 xl:gap-20">

                {/* Left Content */}
                <div className="flex flex-col w-full xl:w-auto xl:-mt-20 items-center xl:items-start lg:mt-20 ">

                    <div className="flex items-center justify-center lg:justify-start">
                        <img src={tag1} alt="" />
                    </div>

                    <div className="font-normal text-[32px] md:text-[50px] font-cal-sans text-[#171F2A] leading-tight text-center lg:text-left">
                        <h1>Automated logic that</h1>
                        <h1>never misses a beat.</h1>
                    </div>

                    <p className="text-[#171F2A] font-manrope text-[14px] w-full max-w-125 mx-auto text-center lg:text-left px-5 lg:px-0 py-5 lg:py-0">
                    Set rules once. Sernio handles the edge cases automatically — emergency escalation, spam blocking, VIP routing, after-hours handoff. All measurable, all adjustable.                    </p>

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
                <div className="relative hidden xl:block">
    {/* Main image */}
    <img
        src={callImage}
        alt=""
        className="w-full"
    />

    {/* Modal image positioned over the main image */}
    <img
        src={modalImage}
        alt=""
        className="absolute -right-30   max-[1300px]:top-50 top-40 -translate-y-50"
    />
</div>

            </div>

         
        </div>
    );
};

export default HeroPage;