import card1 from "../../assets/assistant-setup/fifthpage/1 (10).svg"
import card2 from "../../assets/assistant-setup/fifthpage/2 (8).svg"
import card3 from "../../assets/assistant-setup/fifthpage/3 (7).svg"
import cardMob from "../../assets/assistant-setup/fifthpage/1.svg"
import cardMob2 from "../../assets/assistant-setup/fifthpage/2.svg"
import cardMob3 from "../../assets/assistant-setup/fifthpage/3.svg"
import Tag from "../resuable/Tag"

const FifthPage = () => {
    return (
        <div
            data-navbar-theme="white"
            className="w-full flex flex-col px-5 md:px-0 md:justify-center bg-[#0E0D18] py-20"
        >
            <div className="flex flex-col md:items-center">

                <Tag>Voices</Tag>

                <h1 className="md:text-center font-normal text-[#FFFFFF] md:text-[45px] text-[30px] md:max-w-154 font-cal-sans mt-3 md:mt-4 md:leading-13">
                    Your patients hear a person, not a robot.
                </h1>

                <p className="text-[#F3EDFF] text-[14px] font-manrope font-medium mt-5 lg:w-150 lg:text-center">
                    Each voice is designed for medical practice conversations — calm, clear, and professional. Not a generic call-centre voice.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-3 w-full md:w-auto md:px-5 md:mb-16 mt-10 lg:mt-20 md:mx-auto">
                    {/* Desktop / tablet */}
                    <img src={card1} alt="Voice 1" className="hidden sm:block" />
                    <img src={card2} alt="Voice 2" className="hidden sm:block" />
                    <img
                        src={card3}
                        alt="Voice 3"
                        className="hidden sm:block md:col-span-2 lg:col-span-1 md:justify-self-center"
                    />

                    {/* Mobile */}
                    <img src={cardMob} alt="Voice 1" className="block sm:hidden w-full h-auto" />
                    <img src={cardMob2} alt="Voice 2" className="block sm:hidden w-full h-auto" />
                    <img src={cardMob3} alt="Voice 3" className="block sm:hidden w-full h-auto" />
                </div>
            </div>
        </div>
    )
}

export default FifthPage;