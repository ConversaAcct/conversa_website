

import Tag from "../resuable/Tag"
import card1 from "../../assets/how-it-works/1 (6).svg"
import card2 from "../../assets/how-it-works/2 (6).svg"
import card3 from "../../assets/how-it-works/3 (6).svg"



const SecondSection = () => {
    return (
        <div
            data-navbar-theme="white"
            className="w-full bg-[#FDFBFF] flex flex-col px-5 md:px-6 md:justify-center md:pb-26 pb-10"
        >
        <div className="flex flex-col md:items-center md:mt-20 mt-10">
            
            <Tag isDark>Getting started</Tag>

            <h1 className="md:text-center font-normal text-[#171F2A] md:text-[45px] text-[30px] md:max-w-160 font-cal-sans">
            You're live the same day. Three steps, no code.            </h1>

            <p className="text-[#6B7280] text-[14px] md:text-center max-w-130 leading-7  mt-2">
            There's no flow-builder, no prompt engineering, no blank canvas. Pick your specialty template and Sernio arrives knowing the questions your patients actually ask.            </p>
        </div>

            <div className="w-full max-w-295 mx-auto mt-8 md:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              
              <div>
                <img src={card1} alt="card1" className="w-full" />
              </div>

              <div>
                <img src={card2} alt="card2" className="w-full" />
              </div>

              <div>
                <img src={card3} alt="card3" className="w-full" />
              </div>
            </div>
        </div>
    )
}

export default SecondSection