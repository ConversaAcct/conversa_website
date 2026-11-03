const LastSection = () => {
    return(
        <div 
            className="bg-cover bg-center bg-no-repeat md:min-h-100 w-full  "
            style={{ backgroundImage: `url('/bg (5).png')` }}
             data-navbar-theme="white"
        >

        <div
       
         className="w-full max-sm:py-15  flex flex-col max-md:px-5 md:justify-center max-sm:items-center ">

            <div className="flex flex-col md:items-center md:mt-20 ">
               
            <p className="text-[#171F2A] font-medium text-[16px] md:text-center ">Don't see yours?</p>

                <h1 className="md:text-center font-normal text-[#171F2A] md:text-[40px] text-[29px]  font-cal-sans">
                Request an integration.
                                </h1>

                <p className="text-[#6B7280] text-[16px] md:text-center md:w-140  mt-2 md:mb-10 mb-5">If your EHR or scheduling tool isn't on this list, tell us. We prioritize based on what practices on our waitlist actually need, your request directly shapes what we build next.</p>

                <div className="flex md:items-center md:justify-center">

                    <a
                        href="mailto:hello@sernioai.com?subject=Integration%20Request&body=Hi%20Sernio%20team%2C%0A%0AI%27d%20like%20to%20request%20an%20integration%20for%3A%0A%0A"
                        style={{ color: "#F5F3FF", backgroundColor: "#000000" }}
                        className="px-12 h-11 max-sm:w-50 rounded-lg text-[13px] cursor-pointer inline-flex items-center justify-center"
                    >
                        Send Us a Mail
                    </a>

                </div>

            </div>

            </div>

        </div>
    )
}

export default LastSection;