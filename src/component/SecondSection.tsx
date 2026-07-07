import Icons from "../assets/Icons";
import bgImage from "../assets/SecondSection/bg (4).png"
import manImage from "../assets/SecondSection/3.svg"
import chatImage from "../assets/SecondSection/4.svg"

const SecondSection = () => {
    return(
        <div
         data-navbar-theme="white"
         className="flex lg:flex-row flex-col lg:justify-center gap-3 px-5 lg:px-20 lg:mt-30 font-manrope mb-30 ">
         <div className="flex flex-col gap-3 ">
            <div className="bg-[#FCFAFF] lg:w-75.5 lg:h-72.5 rounded-[20px] py-5 ">
       
                <div className="flex flex-row justify-between leading-5 px-5 ">
                    <div>
                        <h3 className="text-[#171F2A] font-semibold">Maria Santos</h3>
                        <p className="text-[#6B7280] font-medium text-[14px]">Westbrook Dental Care</p>
                    </div>
                    <div className="mt-1">
                       {Icons.signalIcon}
                    </div>
                 </div>

                 <div className="mt-5  ">
                    <p className="font-medium text-[#6B7280] text-[13px] px-5">Today</p>

                    <div className="mt-3 flex flex-row items-center gap-3 px-5">
                        {Icons.calenderIcon}
                        <div className="text-[#171F2A] font-normal text-[14px] ">
                            <p>Booked — Tomorrow 9:15 AM,</p>
                            <p>Dr. Chris</p>
                        </div>
                    </div>
                    
                    <div className="mt-4 flex flex-row items-center gap-3 px-5">
                        {Icons.callIcon}
                        <div className="text-[#171F2A] font-normal text-[14px] ">
                            <p>Flagged urgent · Added to</p>
                            <p>recall list</p>
                        </div>
                    </div>
                    <div className="border-[0.5px] border-[#E5E7F7] mt-7"></div>

                    <div className="px-5 mt-4 flex flex-row justify-between">
                        <p className="text-[#6B7280] font-normal text-[13px]">Call resolved</p>
                        {Icons.rotateIcon}
                    </div>
                 </div>


            </div>

            <div className="relative lg:w-74.5 lg:h-39">
                <img src={bgImage} className="w-full h-full object-cover rounded-[20px]" />
                <div className="absolute inset-0 flex items-center justify-center px-4 ">
                    <p className="text-[#171F2A] text-sm max-md:text-[16px] font-medium ">
                        Sernio is a HIPAA-ready AI voice platform that answers, triages, and books patient phone calls for clinics, practices, and hospitals — live in under a day, no new phone number required.
                    </p>
                </div>
            </div>

        </div>
   
              


            <div>
            <img src={manImage}  />
            </div>


            <div>
                <img src={chatImage}/>
            </div>

        </div>
    )
}

export default SecondSection;