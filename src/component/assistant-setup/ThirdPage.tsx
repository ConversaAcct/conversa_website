import tag from "../../assets/assistant-setup/secondpage/Group (5).svg"
import card from "../../assets/assistant-setup/secondpage/img (2).svg"
import arrow from "../../assets/assistant-setup/secondpage/Arrow (5).svg"

const ThirdPage = () => {
    return (
        <div className="flex lg:flex-row max-lg:flex-col-reverse lg:justify-between lg:px-24 md:px-20 py-10"  data-navbar-theme="white">

            <div className="max-lg:mt-5 ">
                  <img src={card}/>
            </div>

            <div className="mt-10 max-sm:px-5  ">
                 <div><img src={tag}/></div>
                 <h1 className="font-normal text-[32px] lg:text-[40px] lg:w-110 mt-3 font-cal-sans text-[#171F2A] leading-tight  ">Choose how Sernio sounds to your patients..</h1>
                 <p className="text-[#6B7280] text-[14px]  font-manrope font-medium mt-5 lg:w-110">Give your assistant a name your front desk team will recognize. Then pick a voice — warm and friendly, professional and clear, or calm and reassuring. Patients hear the difference. Three voices ship with every account, and more are coming.</p>

                 <div className="flex flex-col mt-5  space-y-2">

                 <div className="flex flex-row items-start gap-2">
                                <img
                                    src={arrow}
                                    alt="arrow"
                                    className=" shrink-0 mt-1"
                                />
                                <p className="text-[#6B7280] text-[13px] font-manrope font-normal">
                                    Name it anything — "Front Desk Assistant," "Care Coordinator," or your own choice
                                </p>
                 </div>
                 

                 <div className="flex flex-row items-start gap-2">
                                <img
                                    src={arrow}
                                    alt="arrow"
                                    className="shrink-0 mt-1"
                                />
                                <p className="text-[#6B7280] text-[13px] font-manrope font-normal">
                                     Hear each voice before choosing with a sample playback
                                </p>
                 </div>




                 <div className="flex flex-row items-start gap-2">
                                <img
                                    src={arrow}
                                    alt="arrow"
                                    className=" shrink-0 mt-1"
                                />
                                <p className="text-[#6B7280] text-[13px] font-manrope font-normal">
                                    Voice can be changed at any time after setup
                                </p>
                 </div>

                

                  

                 </div>
            </div>
          

        </div>
    )
}

export default ThirdPage;