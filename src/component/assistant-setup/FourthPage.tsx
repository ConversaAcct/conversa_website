import tag from "../../assets/assistant-setup/secondpage/Group (6).svg"
import card from "../../assets/assistant-setup/secondpage/img (5).png"
import arrow from "../../assets/assistant-setup/secondpage/Arrow (5).svg"

const FourthPage = () => {
    return (
        <div className="flex lg:flex-row flex-col lg:justify-between lg:px-30 md:px-20 py-10 lg:mb-16 mb-10"  data-navbar-theme="white">

            

            <div className="lg:mt-10 max-sm:px-5  ">
                 <div><img src={tag}/></div>
                 <h1 className="font-normal text-[32px] lg:text-[40px] lg:w-110 mt-3 font-cal-sans text-[#171F2A] leading-tight">Toggle on exactly what you need. Nothing else ever runs.</h1>
                 <p className="text-[#6B7280] text-[14px]  font-manrope font-medium mt-5 lg:w-110">Choose which tasks Sernio handles. Start with answering calls, add booking and insurance questions when you're ready, enable emergency routing on day one. Every toggle is reversible — you can adjust any time from your dashboard.</p>

                 <div className="flex flex-col mt-5  space-y-2">

                 <div className="flex flex-row items-start gap-2">
                                <img
                                    src={arrow}
                                    alt="arrow"
                                    className=" shrink-0 mt-1"
                                />
                                <p className="text-[#6B7280] text-[13px] font-manrope font-normal">
                                     Each task is independent — enable them in any order
                                </p>
                 </div>
                 

                 <div className="flex flex-row items-start gap-2">
                                <img
                                    src={arrow}
                                    alt="arrow"
                                    className="shrink-0 mt-1"
                                />
                                <p className="text-[#6B7280] text-[13px] font-manrope font-normal">
                                Emergency routing is always available regardless of other settings
                                </p>
                 </div>




                 <div className="flex flex-row items-start gap-2">
                                <img
                                    src={arrow}
                                    alt="arrow"
                                    className=" shrink-0 mt-1"
                                />
                                <p className="text-[#6B7280] text-[13px] font-manrope font-normal">
                                Changes take effect on the next call — no restart needed
                                </p>
                 </div>

                

                  

                 </div>
            </div>


            <div className="max-lg:mt-5 max-md:px-5 ">
                  <img src={card} className="md:w-150 md:h-110 w-150 h-90"/>
            </div>
          

        </div>
    )
}

export default FourthPage;