import tag1 from "../../assets/how-it-works/Group (7).svg";
import tag2 from "../../assets/how-it-works/1 (5).svg";
import tag3 from "../../assets/how-it-works/2 (5).svg"
import tag4 from "../../assets/how-it-works/4 (2).svg"
import tag5 from "../../assets/how-it-works/3 (5).svg"

const HeroPage = () => {
    return (
        <div
            data-navbar-theme="white"
            className="bg-cover bg-center bg-no-repeat w-full lg:min-h-screen lg:h-screen flex lg:flex-col md:justify-center items-center  overflow-hidden pt-32 pb-10 xl:mt-14 lg:pt-0 lg:pb-0"
            style={{ backgroundImage: `url('/bg (3).png')` }}
        >
    

           <div className="flex md:justify-center md:items-center max-sm:px-5 flex-col xl:-mt-20 lg:mt-16">
                     <div className="flex md:justify-center md:items-center"><img src={tag1}/></div>
                    <div className=" font-normal  max-sm:hidden text-[32px] md:text-[50px] md:text-center font-cal-sans text-[#171F2A] leading-tight ">
                         <h1>A patient calls. Sernio answers.</h1>
                         <h1>The right thing happens.</h1>
                    </div>

                    <div className=" font-normal text-[32px] max-sm:block hidden md:text-[50px] md:text-center font-cal-sans text-[#171F2A] leading-tight ">
                         <h1> patient calls. Sernio answers.The right thing happens.</h1>
                      
                    </div>

                    <p className="text-[#171F2A] font-manrope md:mt-5 text-[14px] max-sm:py-5 md:w-120 md:text-center ">From the first ring to the confirmed appointment — here's exactly what Sernio does, and how it does it, every single call.</p>
                    <div className="flex flex-row max-sm:hidden items-center gap-3 py-6">
                        <div><img src={tag2}/></div>
                        <div><img src={tag3}/></div>
                        <div><img src={tag4}/></div>
                        <div><img src={tag5}/></div>

                    </div>

                    <div className=" grid-cols-2 max-sm:grid hidden items-center gap-3 py-6">
                        <div><img src={tag2}/></div>
                        <div><img src={tag3}/></div>
                        <div><img src={tag4}/></div>
                        <div><img src={tag5}/></div>

                    </div>
                </div>

        </div>
    );
};

export default HeroPage;