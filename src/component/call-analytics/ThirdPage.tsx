import card1 from "../../assets/call-analytics/thirdpage/1 (13).svg"
import card2 from "../../assets/call-analytics/thirdpage/2 (10).svg"
import card3 from "../../assets/call-analytics/thirdpage/3 (10).svg"
import card4 from "../../assets/call-analytics/thirdpage/4 (3).svg"

import mobCard1 from "../../assets/call-analytics/thirdpage/1 (21).svg"
import mobCard2 from "../../assets/call-analytics/thirdpage/2 (18).svg"
import mobCard3 from "../../assets/call-analytics/thirdpage/3 (15).svg"
import mobCard4 from "../../assets/call-analytics/thirdpage/4 (6).svg"

const ThirdPage = () => {
    return(
        <div
        data-navbar-theme="dark"
         className="w-full bg-[#0E0D18] max-sm:py-10 flex flex-col max-md:px-5 md:justify-center">

            <div className="flex flex-col md:items-center md:mt-20 ">
            <div className="bg-[#0E0D18] border font-medium border-[#5B0AFF] text-[#FFFFFF] py-1 w-fit flex justify-center items-center px-3 lg:px-4 rounded-full text-[13px]">
                  <p>Performance breakdown</p>
                </div>

                <h1 className="md:text-center font-normal text-white md:text-[45px] text-[30px] md:max-w-160  font-cal-sans">
                    See every dimension of your call performance in one place.
                </h1>

                <p className="text-[#F3EDFF] text-[14px] md:text-center max-w-180 leading-7 md:mt-5 mt-2">Call Performance, Appointments, Transfers, and Quality — each with its own breakdown so you know exactly where calls are going and why.</p>
            </div>

            <div className="md:grid grid-cols-1 hidden md:grid-cols-2 lg:grid-cols-4 gap-6 lg:px-26  py-18 justify-items-center md:justify-items-stretch" data-navbar-theme="white">
                    <img src={card1}/>
                    <img src={card2}/>
                    <img src={card3}/>
                    <img src={card4}/>
            </div>

            <div className=" flex flex-col gap-6 md:hidden justify-center items-center mt-10">

                <img src={mobCard1}/>
                <img src={mobCard2}/>
                <img src={mobCard3}/>
                <img src={mobCard4}/>

            </div>

           

        </div>
    )
}

export default ThirdPage;