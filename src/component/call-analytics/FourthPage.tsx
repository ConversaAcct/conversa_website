import card1 from "../../assets/call-analytics/fourthpage/1 (14).svg"
import card2 from "../../assets/call-analytics/fourthpage/1 (15).svg"
import card3 from "../../assets/call-analytics/fourthpage/2 (11).svg"
import card4 from "../../assets/call-analytics/fourthpage/2 (12).svg"

const FourthPage = () => {
    return(
        <div
        data-navbar-theme="white"
         className="w-full bg-[#FDFBFF]   flex flex-col max-md:px-5 md:justify-center md:pb-26 pb-10">

            <div className="flex flex-col md:items-center md:mt-20 mt-10">
            <div className=" border font-medium border-[#5B0AFF] text-[#171F2A] py-1 w-fit flex justify-center items-center px-3 lg:px-4 rounded-full text-[13px]">
                  <p>What you can track</p>
                </div>

                <h1 className="md:text-center font-normal text-[#171F2A] md:text-[45px] text-[30px] md:max-w-160  font-cal-sans">
                Analytics built for the way clinics actually work.
                </h1>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2  lg:mt-14  lg:px-36 px-10 py-5  justify-items-center md:justify-items-stretch" data-navbar-theme="white">
                    <img src={card1} className="lg:ml-2"/>
                    <img src={card2} className="lg:-ml-3"/>
                   
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2   lg:px-36 px-10 justify-items-center md:justify-items-stretch" data-navbar-theme="white">
            <img src={card3}  className="lg:ml-2"/>
            <img src={card4}  className="lg:-ml-3"/>
                   
            </div>

       

           

        </div>
    )
}

export default FourthPage;