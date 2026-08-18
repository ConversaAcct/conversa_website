import card1 from "../../assets/assistant-setup/fifthpage/1 (10).svg"
import card2 from "../../assets/assistant-setup/fifthpage/2 (8).svg"
import card3 from "../../assets/assistant-setup/fifthpage/3 (7).svg"

const FifthPage = () => {
    return(
        <div
        data-navbar-theme="white"
         className="w-full  flex flex-col max-md:px-5 md:justify-center bg-[#0E0D18] py-20">

            <div className="flex flex-col md:items-center">
                <div className="bg-transparent border font-medium border-[#5B0AFF] text-[#FFFFFF] py-2  flex justify-center items-center w-20 rounded-full text-[13px] ">
                    <p>Voices</p>
                </div>

                <h1 className="md:text-center font-normal text-[#FFFFFF] md:text-[45px] text-[30px] md:max-w-154 font-cal-sans md:mt-4 md:leading-13">
                   Your patients hear a person, not a robot.
                </h1> 

                <p className="text-[#F3EDFF] text-[14px] font-manrope font-medium mt-5 lg:w-150 lg:text-center">Each voice is designed for medical practice conversations — calm, clear, and professional. Not a generic call-centre voice.</p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-3 px-5 md:mb-16 mt-10 lg:mt-20 md:mx-auto">
    <img src={card1} />
    <img src={card2} />
    <img src={card3} className="md:col-span-2 lg:col-span-1 md:justify-self-center" />
</div>
            </div>

        </div>
    )
}

export default FifthPage;