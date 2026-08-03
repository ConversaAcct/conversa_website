import { Link } from "react-router-dom";
import WomanPicture from "../assets/ninthsection/Image (15).svg"

const NinthSection = () => {
    return(
        <div 
        className="bg-cover bg-center bg-no-repeat rounded-4xl lg:mt-29 mt-10  xl:min-h-90 min-h-90 w-[calc(100%-2rem)] md:w-full  xl:max-w-300 md:max-w-260 mx-auto md:rounded-t-[30px] "
        style={{ backgroundImage: `url('/bg (7).png')` }}
        data-navbar-theme="dark"
      >

           <div className="md:px-20 px-5 flex flex-col md:flex-row  md:justify-between">


                <div className="text-white xl:mt-20 md:mt-10 mt-8">
                    <p className="font-manrope text-[16px] font-medium text-[#F5E8E3] ">Early access</p>
                    <h1 className="font-cal-sans font-normal text-[25px] xl:text-[40px] md:text-[35px]">Built with front desks, for front desks.</h1>
                    <p className="font-manrope font-medium xl:text-[16px] text-[14px] w-full max-w-120">Sernio is in early access with a small group of pilot practices before opening up more broadly. We're prioritizing getting the call-handling details right over getting big fast.</p>
                    <Link to={"/waitlist"} >
                    
                            <button type="submit" style={{color : "#F5F3FF", backgroundColor : "#000000"}} 
                                className="px-8 h-11 max-sm:w-50 rounded-lg text-[13px] cursor-pointer mt-10">
                                Apply for Early Access
                            </button>

                     </Link>
                </div>

                <div className="md:-mt-24 max-sm:mt-10 max-md:justify-center max-md:items-center max-md:flex">

                    <img src={WomanPicture} />

                </div>

           </div>
        </div>
    )
}

export default NinthSection;