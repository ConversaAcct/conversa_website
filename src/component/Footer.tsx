import Icons from "../assets/Icons";

const Footer = () => {
    return(
        <div 
            className="bg-cover bg-center bg-no-repeat min-h-130 w-full mt-55"
            style={{ backgroundImage: `url('/src/assets/Footer/bg (2).png')` }}
        >
            <div className="max-w-7xl mx-auto px-20 pt-20">

            <div className="flex flex-row items-start gap-12">
                    <div className="flex-1 min-w-90">
                        <div className="-ml-3">
                            {Icons.logo}
                        </div>

                        <p className="text-[#ADA6BB] mt-5">AI that answers, triages, and books patient calls; so your front desk never has to choose between the phone and the patient in front of them.</p>
                        <div className="flex flex-row items-center gap-5 mt-8">
                            {Icons.linkedinIcon}
                            {Icons.xIcon}
                            {Icons.facebookIcon}
                            {Icons.instagramIcon}
                        </div>
                    </div>

                    <div className="flex-1 ">
                        <span className="text-[#9C73F3]">Product</span>

                        <div className="text-[#FFFFFF] flex flex-col mt-4 gap-2 font-light ">
                            <span>Call analytics</span>
                            <span>My assistants</span>
                            <span>Call handling rules</span>
                            <span>Integrations</span>
                            <span>Appointment workflows</span>
                        </div>
                    </div>

                    <div className="flex-1">
                        <span className="text-[#9C73F3]">Specialties</span>

                        <div className="text-[#FFFFFF] flex flex-col mt-4 gap-2 font-light">
                            <span>General practice</span>
                            <span>Dental</span>
                            <span>OB/GYN</span>
                            <span>Mental health</span>
                            <span className="text-[#9C73F3] flex flex-row gap-2 items-center">Show more {Icons.arrowDownIcon}</span>
                        </div>
                    </div>

                    <div className="flex-1">
                        <span className="text-[#9C73F3]">Company</span>

                        <div className="text-[#FFFFFF] flex flex-col mt-4 gap-2 font-light">
                            <span>About</span>
                            <span>Security</span>
                            <span>Request BAA</span>
                        </div>
                    </div>

                    <div className="flex-1">
                        <span className="text-[#9C73F3]">Get in Touch</span>

                        <div className="text-[#FFFFFF] flex flex-col mt-4 gap-2 font-light">
                            <span>Contact us</span>
                            <span>hello@sernioai.com</span>
                        </div>
                    </div>
                </div>

                <div className="mt-30 flex flex-row items-center justify-between w-full flex-wrap ">
  <div className="flex flex-row items-center gap-2 text-[14px] text-white">
    {Icons.copyIcon}
    Sernio AI 2026
  </div>

  <div className="flex flex-row items-center gap-20 text-[#ADA6BB] text-[14px] mr-100">
    <span>Terms of Service</span>
    <span>Privacy Policy</span>
  </div>
</div>

            </div>
        </div>
    )
}

export default Footer;