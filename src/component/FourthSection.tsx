import card1 from "../assets/FourthSection/1.svg"
import robot from "../assets/FourthSection/Mask group (5).svg"
import phone from "../assets/FourthSection/Mask group (7).svg"

const FourthSection = () => {
    return(
        <div
        data-navbar-theme="white"
         className="w-full mb-20 flex flex-col max-md:px-5 md:justify-center">

            <div className="flex flex-col md:items-center">
                <div className="bg-[#FFFFFF] border font-medium border-[#5B0AFF] text-[#171F2A] py-2  flex justify-center items-center w-30 rounded-full text-[13px] ">
                    <p>How it works</p>
                </div>

                <h1 className="md:text-center font-normal text-[#171F2A] md:text-[45px] text-[30px] md:max-w-130 font-cal-sans md:mt-4 md:leading-13">
                  Answer. Understand. Act. 
                 In that order, every time.
                </h1> 


                <div className="grid md:grid-cols-2 lg:grid-cols-3 md:px-10 max-sm:gap-10 lg:gap-0 md:gap-10 lg:justify-evenly lg:items-center mt-10 md:mx-auto">
                        <div className="hidden lg:block">
                            <img src={card1} />
                        </div>

                        <div className="lg:w-100 lg:h-55 border border-[#9C73F3] rounded-[15px] px-8 py-4 font-manrope lg:hidden block">

                            <img src={phone}/>
                            <h5 className="text-[#171F2A] text-[20px] font-semibold ">Answer</h5>
                            <p className="text-[#171F2A] text-[14px] mt-1">Every call is picked up in under a second, day or night, weekends and holidays included — no hold music, no menu tree.</p>
                            </div>


                        <div className="lg:w-100 lg:h-55 border border-[#9C73F3] rounded-[15px] px-8 py-4 font-manrope">

                            <img src={robot}/>
                            <h5 className="text-[#171F2A] text-[20px] font-semibold ">Understand</h5>
                            <p className="text-[#171F2A] text-[14px] mt-1">Sernio listens for what the caller actually needs: booking, billing, a refill, or something urgent, using your practice's own knowledge base, not a generic script.</p>
                        </div>

                        <div className="lg:w-100 lg:h-55 border border-[#9C73F3] rounded-[15px] px-8 py-4">
                        <img src={robot}/>
                        <h5 className="text-[#171F2A] text-[20px] font-semibold ">Act</h5>
                        <p className="text-[#171F2A] text-[14px] mt-1">It books the visit, updates the patient record, verifies insurance, or routes urgent calls straight to your on-call line, no transcript left for a human to re-type later.</p>
                        </div>
                </div>
            </div>

        </div>
    )
}

export default FourthSection;