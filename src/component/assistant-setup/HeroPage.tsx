import pix1 from "../../assets/assistant-setup/heropage/1 (8).svg"
import pix2 from "../../assets/assistant-setup/heropage/2 (6).svg";
import tag1 from "../../assets/assistant-setup/heropage/Group (3).svg"
import tag2 from "../../assets/assistant-setup/heropage/1 (9).svg"
import tag3 from "../../assets/assistant-setup/heropage/2 (7).svg"
import tag4 from "../../assets/assistant-setup/heropage/3 (6).svg"

const HeroPage = () => {
    return(
        <div 
        data-navbar-theme="white"
        className="bg-cover bg-center bg-no-repeat w-full min-h-screen lg:h-screen flex flex-col justify-center items-center overflow-hidden pt-28 pb-10  xl:mt-14 lg:pt-0 lg:pb-0"
        style={{ backgroundImage: `url('/bg (3).png')` }}
    >


        <div className="lg:flex-row flex-col flex lg:gap-20">

                <div className="lg:block hidden">
                    <img src={pix1}/>
                </div>
                <div className="flex justify-center items-center max-md:px-20 flex-col lg:-mt-20">
                     <div className="flex justify-center items-center"><img src={tag1}/></div>
                    <div className=" font-normal text-[32px] lg:text-[55px] font-cal-sans text-[#171F2A] leading-tight ">
                         <h1>Takes just three steps.</h1>
                         <h1>Go live the same day.</h1>
                    </div>
                    <p className="text-[#171F2A] font-manrope text-[14px] w-90 text-center ">No flow-builders. No prompt engineering. No blank canvas. Pick your specialty template and Sernio already knows your patients' most common questions.</p>
                    <div className="flex flex-row items-center gap-3 py-6">
                        <div><img src={tag2}/></div>
                        <div><img src={tag3}/></div>
                        <div><img src={tag4}/></div>
                    </div>
                </div>
                <div className="lg:block hidden">
                    <img src={pix2}/>
                </div>

        </div>






    </div>
    )
}

export default HeroPage;