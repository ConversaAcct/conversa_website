import IntegrationLogos from "./IntegrationLogos";


const EightSection = () => {
  return(
  <div>


<div 
    className="bg-cover bg-center bg-no-repeat min-h-120 w-full md:max-w-340 md:mx-auto md:rounded-t-[30px] md:-mt-18 max-md:px-5 "
    style={{ backgroundImage: `url('/bg (6).png')` }}
      data-navbar-theme="white"
> 

        <div className="flex flex-col md:items-center md:py-28 py-12">
                        <div className="border font-medium border-[#5B0AFF] text-[#171F2A] py-1.5 lg:px-6 max-md:w-70  flex justify-center items-center rounded-full text-[13px] ">
                            <p>Works with what you already run</p>
                        </div>

                        <h1 className="md:text-center font-normal text-[#171F2A] md:text-[45px] text-[30px] md:max-w-140 font-cal-sans md:mt-4 md:leading-13">
                            No rip-and-replace.
                        </h1> 

                        <p className="text-[#6B7280] md:w-130 md:text-center font-medium text-[15px] font-manrope mt-5">Sernio connects to the EHR and scheduling tools your practice already has open; call data flows in, appointments flow out.</p>
        
                        <IntegrationLogos />

        
        </div>



</div>




  </div>
  )
}

export default EightSection;