import Icons from "../assets/Icons";
import homepagePicture from "../assets/FourthSection/Chrome.svg"
import homepageMobPicture from "../assets/FourthSection/1 (1).svg"

const FifthSection = () => {
    return (
        <div>
   <div
        data-navbar-theme="dark"
         className="w-full bg-[#0E0D18]   flex flex-col max-md:px-5 md:justify-center">

            <div className="flex flex-col md:items-center md:mt-20 mt-10 ">
                <div className="bg-[#0E0D18] border font-medium border-[#5B0AFF] text-[#FFFFFF] py-1  flex justify-center items-center px-7 max-w-80 rounded-full text-[13px] ">
                    <p>No flow-builder. No prompt engineering</p>
                </div>

                <h1 className="md:text-center font-normal text-white md:text-[45px] text-[30px] md:max-w-240 font-cal-sans">
             
                     <span className="text-[#D3C1F9]"> Built for clinic staff, </span>
                  
                     not developers.
                </h1>

                <p className="text-[#F3EDFF] text-[14px] md:text-center max-w-190 leading-7 md:mt-5 mt-2" data-navbar-theme="dark">Most voice AI platforms hand you a blank canvas and expect you to wire up prompts, intents, and conversation flows yourself. Sernio doesn't. Pick the template built for your specialty, and the intake questions, escalation rules, and conversation logic are already there.</p>

                <div className="flex flex-col md:flex-row md:items-center justify-center md:gap-16 md:mt-20 mt-10" data-navbar-theme="dark">
                    <div className="flex flex-row gap-2 items-center">
                        {Icons.dotIcon}
                        <p className="text-[#FFE91F]">Choose your specialty template</p>
                    </div>

                    <div className="flex flex-row gap-2 items-center">
                        {Icons.dotIcon}
                        <p className="text-[#FFE91F]">Name your assistant and pick a voice</p>
                    </div>

                    <div className="flex flex-row gap-2 items-center">
                        {Icons.dotIcon}
                        <p className="text-[#FFE91F]">Turn on the calls you want it to handle</p>
                    </div>
                </div>

                <div className="mt-10" data-navbar-theme="white">
                <img src={homepagePicture} className="md:block hidden"/>
                <img src={homepageMobPicture} className="md:hidden block"/>
            </div>
            </div>


          

            </div>
        </div>
    )
}

export default FifthSection;