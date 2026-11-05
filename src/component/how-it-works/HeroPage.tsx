
import RainbowTag from "../resuable/RainbowTag";
import ColorTag from "../resuable/ColorTag";

const HeroPage = () => {
    return (
        <div
            data-navbar-theme="white"
            className="bg-cover bg-center bg-no-repeat w-full lg:min-h-screen lg:h-screen flex lg:flex-col md:justify-center items-center  overflow-hidden pt-32 pb-10 xl:mt-14 lg:pt-0 lg:pb-0"
            style={{ backgroundImage: `url('/bg (3).png')` }}
        >
    

           <div className="flex md:justify-center md:items-center max-sm:px-5 flex-col xl:-mt-20 lg:mt-16">
                     <div className="flex md:justify-center md:items-center">
                       <RainbowTag>How it works</RainbowTag>
                        </div>
                    <div className=" font-normal  max-sm:hidden text-[32px] md:text-[50px] md:text-center font-cal-sans text-[#171F2A] leading-tight ">
                         <h1>A patient calls. Sernio answers.</h1>
                         <h1>The right thing happens.</h1>
                    </div>

                    <div className=" font-normal text-[32px] max-sm:block hidden md:text-[50px] md:text-center font-cal-sans text-[#171F2A] leading-tight ">
                         <h1> patient calls. Sernio answers.The right thing happens.</h1>
                      
                    </div>

                    <p className="text-[#171F2A] font-manrope md:mt-5 text-[14px] max-sm:py-5 md:w-120 md:text-center ">From the first ring to the confirmed appointment — here's exactly what Sernio does, and how it does it, every single call.</p>
                    <div className="flex flex-row max-sm:hidden items-center gap-3 py-6">
                    <div>
                            
                            <ColorTag
                                text="Answers in under 1 second"
                                textColor="#008C3E"
                                dotColor="#008C3E"
                                bgColor="#EDFFF5"
                                />
                            
                            </div>
    
                            <div>
                            <ColorTag
                                text="No hold music"
                                textColor="#28007C"
                                dotColor="#28007C"
                                bgColor="#EAE0FF"
                                />
                            </div>

                            <div>
                            <ColorTag
                                text="Works 24 | 7 | 365"
                                textColor="#6B7280"
                                dotColor="#6B7280"
                                bgColor="#F0F0F0"
                                />
                            </div>
    
                            <div>
                            <ColorTag
                                text="HIPAA-ready"
                                textColor="#005D76"
                                dotColor="#005D76"
                                bgColor="#E3F9FF"
                                />
                            </div>

                    </div>

                    <div className="max-sm:flex hidden flex-wrap items-center gap-x-2 gap-y-2 py-1">
                        <ColorTag
                            text="Answers in under 1 second"
                            textColor="#008C3E"
                            dotColor="#008C3E"
                            bgColor="#EDFFF5"
                        />
                        <ColorTag
                            text="No hold music"
                            textColor="#28007C"
                            dotColor="#28007C"
                            bgColor="#EAE0FF"
                        />
                        <ColorTag
                            text="Works 24 | 7 | 365"
                            textColor="#6B7280"
                            dotColor="#6B7280"
                            bgColor="#F0F0F0"
                        />
                        <ColorTag
                            text="HIPAA-ready"
                            textColor="#005D76"
                            dotColor="#005D76"
                            bgColor="#E3F9FF"
                        />
                    </div>
                </div>

        </div>
    );
};

export default HeroPage;