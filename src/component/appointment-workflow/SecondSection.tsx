import stpImage from "../../assets/appointment-workflow/Group (2).svg"
import stpImageMob from "../../assets/appointment-workflow/2 (3).svg"
import Tag from "../resuable/Tag";

const SecondSection = () => {
    return (
        <div
            data-navbar-theme="white"
            className="w-full bg-[#FDFBFF] flex flex-col px-5 md:px-0 md:justify-center md:pb-26 pb-10"
        >
            <div className="flex flex-col md:items-center md:mt-20 mt-10">
            
                <Tag isDark>The full patient journey</Tag>
                

                <h1 className="md:text-center font-normal text-[#171F2A] md:text-[45px] text-[30px] max-sm:hidden md:max-w-170 font-cal-sans">
                Every appointment step handled — from first call to post-visit.
                </h1>

          
            </div>

        
         


            <div className=" md:mt-20 mt-10 md:flex justify-center items-center">
                <img src={stpImage} alt="" className="max-sm:hidden"/>
                <img src={stpImageMob} alt="" className="max-sm:block hidden"/>
            </div>

            
        </div>
    )
}

export default SecondSection;