
import ColorTag from "../resuable/ColorTag";
import RainbowTag from "../resuable/RainbowTag";

const HeroPage = () => {
    return (
        <div
            data-navbar-theme="white"
            className="relative isolate w-full  flex flex-col overflow-hidden pt-32  lg:min-h-screen lg:h-screen lg:justify-center lg:items-center lg:pt-0 lg:pb-0 xl:mt-14"
        >
            {/* Mobile background */}
            <div
                className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat lg:hidden"
                style={{ backgroundImage: "url('/bg (3a).png')" }}
            />

            {/* Desktop background */}
            <div
                className="absolute inset-0 -z-10 hidden bg-center bg-no-repeat bg-size-[100%] lg:block"
                style={{ backgroundImage: "url('bg (1).png')" }}
            />

<div className="flex md:justify-center md:items-center max-md:px-5 flex-col xl:-mt-20 lg:mt-16">
                     <div className="flex md:justify-center md:items-center">
                        <RainbowTag>Appointment Workflows</RainbowTag>
                        </div>
                    <div className=" font-normal  max-sm:hidden text-[32px] md:text-[50px] md:text-center font-cal-sans text-[#171F2A] leading-tight ">
                         <h1>From booking to follow-up.</h1>
                         <h1>Fully automated.</h1>
                    </div>

                    <div className=" font-normal text-[32px] max-sm:block hidden md:text-[50px] md:text-center font-cal-sans text-[#171F2A] leading-tight ">
                         <h1>From booking to follow-up. Fully automated.</h1>
                      
                    </div>

                    <p className="text-[#171F2A] font-manrope text-[14px] max-sm:py-5  md:mt-5 w-90 md:text-center ">Sernio doesn't just answer the call — it books the appointment, sends the reminder, and follows up after the visit. Your front desk focuses on the patients in front of them.</p>
                    <div className="grid grid-cols-3 max-[500px]:grid-cols-2  lg:px-0 items-center justify-center gap-3 md:py-6 py-3">
                    <div>
                            
                            <ColorTag
                                text="Books into your EHR"
                                textColor="#008C3E"
                                dotColor="#008C3E"
                                bgColor="#EDFFF5"
                                />
                            
                        </div>
    
                            <div className="max-sm:-ml-5">
                            <ColorTag
                                text="SMS & call reminders"
                                textColor="#28007C"
                                dotColor="#28007C"
                                bgColor="#EAE0FF"
                                />
                            </div>
    
                            <div>
                            <ColorTag
                                text="No-show follow-up"
                                textColor="#005D76"
                                dotColor="#005D76"
                                bgColor="#E3F9FF"
                                />
                            </div>
                    </div>
                </div>

        </div>
    );
};

export default HeroPage;