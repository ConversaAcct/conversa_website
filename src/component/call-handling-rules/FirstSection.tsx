import card1 from "../../assets/call-handling-rules/1 (16).svg"
import card2 from "../../assets/call-handling-rules/1 (17).svg"
import card3 from "../../assets/call-handling-rules/2 (13).svg"
import card4 from "../../assets/call-handling-rules/2 (14).svg"
import womanImage from "../../assets/call-handling-rules/3 (11).svg"
import womanImage2 from "../../assets/call-handling-rules/firstSection/3 (2).svg"

import cardMob from "../../assets/call-handling-rules/firstSection/1 (1).svg"
import cardMob2 from "../../assets/call-handling-rules/firstSection/2 (1).svg"
import cardMob3 from "../../assets/call-handling-rules/firstSection/3 (1).svg"
import cardMob4 from "../../assets/call-handling-rules/firstSection/4.svg"

const FirstSection = () => {
    return (
        <div
            data-navbar-theme="white"
            className="w-full bg-[#FDFBFF] flex flex-col px-5 md:px-0 md:justify-center md:pb-26 pb-10"
        >
            <div className="flex flex-col md:items-center md:mt-20 mt-10">
                <div className="border font-medium border-[#5B0AFF] text-[#171F2A] py-1 w-fit flex justify-center items-center px-3 lg:px-4 rounded-full text-[13px]">
                    <p>Rule types</p>
                </div>

                <h1 className="md:text-center font-normal text-[#171F2A] md:text-[45px] text-[30px] md:max-w-160 font-cal-sans">
                    Every edge case, handled automatically.
                </h1>

                <p className="text-[#6B7280] text-[14px] md:text-center max-w-100 leading-7 md:mt-5 mt-2">
                    Four categories of rules cover every situation your practice will encounter — from medical emergencies to robocalls.
                </p>
            </div>

            <div
                className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 lg:mt-14 mt-10 px-0 md:px-10 lg:px-36 justify-items-center md:justify-items-stretch"
                data-navbar-theme="white"
            >
                {/* Card 1 */}
                <img src={card1} alt="" className="hidden sm:block" />
                <img src={cardMob} alt="" className="block sm:hidden w-full h-auto" />

                {/* Card 2 */}
                <img src={card2} alt="" className="hidden sm:block" />
                <img src={cardMob2} alt="" className="block sm:hidden w-full h-auto" />

                {/* Card 3 */}
                <img src={card3} alt="" className="hidden sm:block" />
                <img src={cardMob3} alt="" className="block sm:hidden w-full h-auto" />

                {/* Card 4 */}
                <img src={card4} alt="" className="hidden sm:block" />
                <img src={cardMob4} alt="" className="block sm:hidden w-full h-auto" />
            </div>

            <div className="px-70 mt-10 hidden md:block">
                <div className="border-b border-[#E5E7EB] mt-10 border-0.5"></div>
            </div>

            <div className="md:hidden mt-10 border-t border-dashed border-[#E5E7EB]"></div>


            <div className=" md:mt-20 mt-10 md:flex justify-center items-center">
                <img src={womanImage} alt="" className="max-sm:hidden"/>
                <img src={womanImage2} className="max-sm:block hidden"/>
            </div>
        </div>
    )
}

export default FirstSection;