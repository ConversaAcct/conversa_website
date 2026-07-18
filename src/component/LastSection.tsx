

const LastSection = () => {
    return(
        <div 
            className="bg-cover bg-center bg-no-repeat md:min-h-100 w-full  "
            style={{ backgroundImage: `url('/bg (5).png')` }}
             data-navbar-theme="white"
        >

        <div
       
         className="w-full max-sm:py-15  flex flex-col max-md:px-5 md:justify-center max-sm:items-center ">

            <div className="flex flex-col md:items-center md:mt-30 ">
               

                <h1 className="md:text-center font-normal text-[#171F2A] md:text-[40px] text-[29px]  font-cal-sans">

                    Stop losing patients to hold music.
                </h1>

                <p className="text-[#6B7280] text-[18px] md:text-center   mt-2 md:mb-10 mb-5">Most practices are live with Sernio in under a day.</p>

                <div className="flex items-center justify-center">
                <button type="submit" style={{color : "#F5F3FF", backgroundColor : "#000000"}} 
                    className="px-12 h-11 max-sm:w-50 rounded-lg text-[13px] cursor-pointer ">
                    Join the Waitlist
                </button>
                </div>
              

               
              
            </div>

            </div>

        </div>
    )
}

export default LastSection;