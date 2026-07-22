
import { useState } from "react";
import card1 from "../assets/seventhsection/1 (3).svg"
import card2 from "../assets/seventhsection/2 (1).svg"
import card3 from "../assets/seventhsection/3 (2).svg"
import card4 from "../assets/seventhsection/1 (4).svg"
import card5 from "../assets/seventhsection/2 (2).svg"
import greenIcon from "../assets/seventhsection/icon (17).svg"
import manImage from "../assets/seventhsection/image (4).svg"
import mobIcon from "../assets/seventhsection/icon (18).svg"
import mobMan from "../assets/seventhsection/Mask group (8).svg"

import carouselImg1 from "../assets/seventhsection/carousel/1 (5).svg"
import carouselImg2 from "../assets/seventhsection/carousel/2 (3).svg"
import carouselImg3 from "../assets/seventhsection/carousel/3 (3).svg"
import carouselImg4 from "../assets/seventhsection/carousel/4 (1).svg"
import carouselImg5 from "../assets/seventhsection/carousel/5 (1).svg"
import carouselImg6 from "../assets/seventhsection/carousel/6.svg"

const carouselImages = [
    carouselImg1,
    carouselImg2,
    carouselImg3,
    carouselImg4,
    carouselImg5,
    carouselImg6,
];

// duplicated once so the marquee loop is seamless (0% -> -50%)
const trackImages = [...carouselImages, ...carouselImages];

const SeventhSection = () => {
    const [isTouchPaused, setIsTouchPaused] = useState(false);

    // Mobile browsers simulate :hover on tap and only clear it when the
    // user taps elsewhere ("tap out"). To keep the existing hover-to-pause
    // behavior intact for lg/desktop, the :hover rule below is scoped to
    // pointer:fine + hover:hover devices only. Touch devices get a separate
    // press/release-driven pause via the .is-touch-paused class instead.
    const pauseTouch = () => setIsTouchPaused(true);
    const resumeTouch = () => setIsTouchPaused(false);

    return(
        <div
        data-navbar-theme="dark"
         className="w-full md:pb-20  flex flex-col max-md:px-5 md:justify-center  bg-[#0E0D18]">

            {/* local keyframes for the marquee + blur zone */}
            <style>{`
                @keyframes seventh-marquee {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .seventh-carousel-track {
                    animation: seventh-marquee 22s linear infinite;
                }
                @media (hover: hover) and (pointer: fine) {
                    .seventh-carousel-track:hover {
                        animation-play-state: paused;
                    }
                }
                .seventh-carousel-track.is-touch-paused {
                    animation-play-state: paused;
                }
                @media (max-width: 767px) {
                    .seventh-carousel-track {
                        animation-duration: 28s;
                    }
                }
            `}</style>

            <div className="flex flex-col md:items-center md:py-28 py-12">
                <div className="border font-medium border-[#5B0AFF] text-[#FFFFFF] py-1.5 lg:px-6 max-md:w-70  flex justify-center items-center  rounded-full text-[13px] ">
                    <p>No flow-builder. No prompt engineering</p>
                </div>

                <h1 className="md:text-center font-normal text-[#FFFFFF] md:text-[45px] text-[30px] md:max-w-140 font-cal-sans md:mt-4 md:leading-13">

                Sernio already speaks your <span className="text-[#D3C1F9]">specialty's language.</span>
                </h1> 

                <p className="text-[#F3EDFF] font-medium text-[14px] font-manrope mt-5">Pick a template and Sernio arrives knowing the questions your patients actually ask.</p>

                {/* ===== Carousel ===== */}
                <div className="relative overflow-hidden md:mt-10 mt-5 w-full md:w-315 max-w-full mx-auto">

                    {/* sliding track */}
                    <div
                        className={`seventh-carousel-track flex flex-row w-max gap-2 md:gap-5 px-2 md:px-0 ${isTouchPaused ? "is-touch-paused" : ""}`}
                        onTouchStart={pauseTouch}
                        onTouchEnd={resumeTouch}
                        onTouchCancel={resumeTouch}
                    >
                        {trackImages.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                alt=""
                                className="shrink-0 select-none pointer-events-none"
                                draggable={false}
                            />
                        ))}
                    </div>

                    {/* fixed blur/opacity zone sitting on top — mobile: reveals only 1 clear image */}
                  
                </div>
            </div>



            <div className="flex flex-col md:items-center py-12 ">
                <div className="border font-medium border-[#5B0AFF] text-[#FFFFFF] py-1.5 lg:px-6 max-md:w-70  flex justify-center items-center rounded-full text-[13px] ">
                    <p>Built for healthcare, not retrofitted</p>
                </div>

                <h1 className="md:text-center font-normal text-[#FFFFFF] md:text-[45px] text-[30px] md:max-w-160 font-cal-sans md:mt-4 md:leading-13">
                Trust isn't a feature here. It's the foundation.
                </h1> 

                <p className="text-[#F3EDFF] md:w-130 md:text-center font-medium text-[15px] font-manrope mt-5">Every call, transcript, and patient record is handled the way a covered entity needs it to be — by default, not as an add-on.</p>




            </div>



                        <div className=" justify-center items-center   mx-auto">


                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-5 lg:gap-y-5 gap-x-0  md:gap-y-15 lg:mt-20 mt-5">
                        <div >
                            <img src={card1}  />
                        </div>

                    

                        <div >

                            <img src={card2}/>
                           
                        </div>

                        <div >
                        <img src={card3}/>

                        </div>


                        <div >

                            <img src={card4}/>
                           
                        </div>

                        <div >
                        <img src={card5}/>

                        </div>
                           </div>

                            <div className=" py-24 hidden lg:block">
                                <h1 className="text-[#FFFFFF] font-normal  md:text-[40px]   font-cal-sans "> <span className="flex flex-row gap-5">If it sounds like an emergency, <img src={greenIcon}/>  Sernio transfers </span>
                                
                                to your on-call line instantly. No menus, no delays,

                                <span className="flex flex-row gap-5"> <img src={manImage}/> no AI guessing.</span>
                                </h1>
                            </div>


                        </div>


          

         

                


  


                <div className="py-4 pb-20 lg:hidden md:px-20 px-2 mt-2 ">

                    <h2  className="text-[#FFFFFF] font-normal text-[25px] md:text-[40px]  font-cal-sans ">If it sounds like an emergency,<span className="flex flex-row gap-2"><img src={mobIcon}/>Sernio transfers to your</span></h2>
                    <h2 className="text-[#FFFFFF] font-normal text-[25px] md:text-[40px]  font-cal-sans "> 
                    
                  on-call line instantly. No menus, no delays, <span className="flex flex-row gap-2"> <img src={mobMan}/> no AI guessing.</span>
                    </h2>
                </div> 

        </div>
    )
}

export default SeventhSection;