import card1 from "../assets/SixthSection/1 (2).svg"
import robot from "../assets/SixthSection/2.svg"
import phone from "../assets/SixthSection/3 (1).svg"


const SixthSection = () => {
    return(
        <div
        data-navbar-theme="white"
         className="w-full md:pb-20  flex flex-col max-md:px-5 md:justify-center  bg-[#FDFBFF]">

            <div className="flex flex-col md:items-center md:py-28 py-12">
                <div className="border font-medium border-[#5B0AFF] text-[#171F2A] py-2  flex justify-center items-center w-30 rounded-full text-[13px] ">
                    <p>Inside Sernio</p>
                </div>

                <h1 className="md:text-center font-normal text-[#171F2A] md:text-[45px] text-[30px] md:max-w-140 font-cal-sans md:mt-4 md:leading-13">
                The same product running the demo above.
                </h1> 

                <p className="text-[#6B7280] font-medium text-[16px] font-manrope mt-5">No mockups. This is the actual dashboard your front desk team will use.</p>


                <div className="grid grid-cols-1 lg:grid-cols-3 md:px-10 gap-5 md:gap-15 lg:gap-5   md:justify-evenly md:items-center mt-5 md:mx-auto">
                        <div className="lg:w-100 lg:h-53">
                            <img src={card1} />
                        </div>

                    

                        <div className="lg:w-100 lg:h-70 lg:mt-16">

                            <img src={robot}/>
                           
                        </div>

                        <div className="lg:w-100 lg:h-53">
                        <img src={phone}/>

                        </div>
                </div>
            </div>

        </div>
    )
}

export default SixthSection;