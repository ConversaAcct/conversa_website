

const LastSection = () => {
    return(
        <div 
            className="bg-cover bg-center bg-no-repeat md:min-h-100 w-full  "
            style={{ backgroundImage: `url('/bg (5).png')` }}
             data-navbar-theme="white"
        >

        <div
       
         className="w-full max-sm:py-15  flex flex-col max-md:px-5 md:justify-center ">

            <div className="flex flex-col md:items-center md:mt-30 ">
               

                <h1 className="md:text-center font-normal text-[#171F2A] md:text-[40px] text-[29px]  font-cal-sans">

                    Stop losing patients to hold music.
                </h1>

                <p className="text-[#6B7280] text-[18px] md:text-center   mt-2 md:mb-10 mb-5">Most practices are live with Sernio in under a day.</p>

                <button type="submit" style={{color : "#F5F3FF", backgroundColor : "#000000"}} 
                    className="px-10 h-9 rounded-lg text-[13px] cursor-pointer hidden md:block">
                    Join the Waitlist
                </button>

                <div className="md:hidden flex flex-row gap-6 ">

                <button type="submit" style={{color : "#F5F3FF", backgroundColor : "#000000"}} 
                    className="px-10 h-10 rounded-lg text-[13px] cursor-pointer ">
                    Book a Demo
                </button>


    


                <button type="submit" style={{color : "#000000" , borderColor : "#000000"}} 
                    className="rounded-lg text-[13px] cursor-pointer border border-[#000000] text-[#000000] px-10 py-2.5  flex items-center gap-2 ">
                            See Pricing
                    </button>

                </div>
              
            </div>

            </div>

        </div>
    )
}

export default LastSection;