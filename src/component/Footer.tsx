import Icons from "../assets/Icons";

const Footer = () => {
    return(
        <div 
            className="bg-cover bg-center bg-no-repeat min-h-120 w-full"
            style={{ backgroundImage: `url('/bg (2).png')` }}
              data-navbar-theme="dark"
        >
    <div className="max-w-7xl lg:mx-auto px-5 lg:max-[1290px]:px-10 md:pt-20 max-md:py-20 md:py-10 ">
            <div className="flex md:flex-row flex-col  items-start gap-12">
                    <div className="flex-1 md:min-w-85">
                        <div className="-ml-3">
                            {Icons.logoWhite}
                        </div>

                        <p className="text-[#ADA6BB] mt-5 text-[15px] font-light max-[460px]:text-[13px]">AI that answers, triages, and books patient calls; so your front desk never has to choose between the phone and the patient in front of them.</p>
                        <div className="flex flex-row items-center gap-5 mt-8">
                            {Icons.linkedinIcon}
                            {Icons.xIcon}
                            {Icons.facebookIcon}
                            {Icons.instagramIcon}
                        </div>
                    </div>

                  <div className="grid lg:grid-cols-4 md:gap-10 min-[460px]:grid-cols-2 min-[434px]:gap-7 max-[340px]:gap-7  min-[700px]:grid-cols-4 min-[600px]:grid-cols-3 md:grid-cols-3  max-[460px]:gap-10    grid-cols-2  max-[460px]:space-y-2">


                  <div className="flex-1 text-[15px] max-[460px]:text-[13px] ">
                        <span className="text-[#9C73F3]">Product</span>

                        <div className="text-[#FFFFFF] flex flex-col mt-4 gap-2 font-light ">
                            <span>Call analytics</span>
                            <span>My assistants</span>
                            <span>Call handling rules</span>
                            <span>Integrations</span>
                            <span>Appointment workflows</span>
                        </div>
                    </div>

                    <div className="flex-1 text-[15px] max-[460px]:text-[13px]">
                        <span className="text-[#9C73F3]">Specialties</span>

                        <div className="text-[#FFFFFF] flex flex-col mt-4 gap-2 font-light">
                            <span>General practice</span>
                            <span>Dental</span>
                            <span>OB/GYN</span>
                            <span>Mental health</span>
                            <span className="text-[#9C73F3] flex flex-row lg:gap-2 items-center">Show more {Icons.arrowDownIcon}</span>
                        </div>
                    </div>

                    <div className="flex-1 text-[15px] max-[460px]:text-[13px]">
                        <span className="text-[#9C73F3]">Company</span>

                        <div className="text-[#FFFFFF] flex flex-col mt-4 gap-2 font-light">
                            <span>About</span>
                            <span>Security</span>
                            <span>Request BAA</span>
                        </div>
                    </div>

                    <div className="flex-1 text-[15px] max-[460px]:text-[13px]">
                        <span className="text-[#9C73F3]">Get in Touch</span>

                        <div className="text-[#FFFFFF] flex flex-col mt-4 gap-2 font-light">
                            <span>Contact us</span>
                            <span>hello@sernioai.com</span>
                        </div>
                    </div>

                  </div>
                </div>

                <div className="lg:mt-30  mt-10 flex md:flex-row flex-col max-md:gap-10 lg:items-center md:justify-between w-full flex-wrap ">
                    <div className="flex lg:flex-row lg:items-center gap-2 text-[14px] max-[460px]:text-[13px] text-white">
                        {Icons.copyIcon}
                        Sernio AI 2026
                    </div>

                    <div className="flex flex-row lg:items-center gap-10 lg:gap-20 font-light text-[#ADA6BB] max-[460px]:text-[13px] text-[14px] lg:mr-100">
                        <span>Terms of Service</span>
                        <span>Privacy Policy</span>
                    </div>
                    </div>

            </div>
        </div>
    )
}

export default Footer;