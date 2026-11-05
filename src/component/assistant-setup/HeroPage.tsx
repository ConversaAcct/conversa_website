import pix1 from "../../assets/assistant-setup/heropage/1 (8).svg"
import pix2 from "../../assets/assistant-setup/heropage/2 (6).svg";
import RainbowTag from "../resuable/RainbowTag";
import ColorTag from "../resuable/ColorTag";

const HeroPage = () => {
    return(
        <div 
        data-navbar-theme="white"
        className="bg-cover bg-center bg-no-repeat w-full lg:min-h-screen lg:h-screen flex flex-col lg:justify-center lg:items-center overflow-hidden pt-32 pb-10  xl:mt-14 lg:pt-0 lg:pb-0"
        style={{ backgroundImage: `url('/bg (3).png')` }}
    >


        <div className="lg:flex-row flex-col flex lg:gap-20">

                <div className="xl:block hidden">
                    <img src={pix1}/>
                </div>
                <div className="flex md:justify-center md:items-center max-md:px-5 flex-col xl:-mt-20 lg:mt-16">
                     <div className="flex md:justify-center md:items-center">
                        <RainbowTag>Assistant Setup</RainbowTag>
                     
                     </div>
                    <div className=" font-normal text-[32px] md:text-[50px] font-cal-sans text-[#171F2A] leading-tight ">
                         <h1>Takes just three steps.</h1>
                         <h1>Go live the same day.</h1>
                    </div>
                    <p className="text-[#171F2A] font-manrope text-[14px] max-sm:py-5 w-90 md:text-center ">No flow-builders. No prompt engineering. No blank canvas. Pick your specialty template and Sernio already knows your patients' most common questions.</p>
                    <div className="flex flex-row max-sm:hidden  lg:px-0 items-center justify-center gap-3 md:py-6 py-3">
                        <div>
                        <ColorTag
                            text="No code required"
                            textColor="#008C3E"
                            dotColor="#008C3E"
                            bgColor="#EDFFF5"
                            />
                            
                        </div>
                        <div>
                            <ColorTag
                            text="9+ specialty templates"
                            textColor="#28007C"
                            dotColor="#28007C"
                            bgColor="#EAE0FF"
                            />
                            </div>
                        <div>
                        <ColorTag
                            text="Live in under a day"
                            textColor="#005D76"
                            dotColor="#005D76"
                            bgColor="#E3F9FF"
                            />
                            </div>
                    </div>

                    <div className="max-sm:grid grid-cols-2 hidden gap-2 py-3">
    <div className="min-w-0">
        <ColorTag
            text="No code required"
            textColor="#008C3E"
            dotColor="#008C3E"
            bgColor="#EDFFF5"
        />
    </div>
    <div className="min-w-0 max-sm:-ml-9">
        <ColorTag
            text="9+ specialty templates"
            textColor="#28007C"
            dotColor="#28007C"
            bgColor="#EAE0FF"
        />
    </div>
    <div className="min-w-0">
        <ColorTag
            text="Live in under a day"
            textColor="#005D76"
            dotColor="#005D76"
            bgColor="#E3F9FF"
        />
    </div>
</div>
                </div>
                <div className="xl:block hidden">
                    <img src={pix2}/>
                </div>

        </div>






    </div>
    )
}

export default HeroPage;