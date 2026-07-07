import Icons from "../assets/Icons";
import FilledButton from "./FilledButton";
import womanPix from "../assets/homepage/hero/img (4).png";
import OutlinedButton from "./OutlinedButton";

const Heropage = () => {
    return(
        <div 
        data-navbar-theme="white"
        className="bg-cover bg-center bg-no-repeat w-full min-h-screen lg:h-screen flex flex-col justify-center items-center lg:overflow-hidden pt-24 pb-10 lg:mt-14 lg:pt-0 lg:pb-0"
        style={{ backgroundImage: `url('/bg (3).png')` }}
    >
        <div className="w-full lg:max-w-7xl mx-auto px-5 lg:max-[1290px]:px-10 flex lg:flex-row flex-col items-center justify-between gap-10 lg:gap-30 lg:max-[1290px]:gap-10">

                {/* LEFT: text content */}
                <div className="flex flex-col items-start max-w-md shrink-0">
                    <div className="gap-2 text-black font-medium text-[12px] bg-[#F5E8E3] px-4 py-1.5 rounded-full flex justify-center items-center mb-2">
                        {Icons.barsIcon}
                        <p>Voice AI for healthcare teams</p>
                    </div>

                    <h1 className="text-[32px] lg:text-[55px] font-cal-sans text-[#171F2A] leading-tight mb-2">
                        Every patient call, answered like you would.
                    </h1>

                    <p className="text-[#171F2A] text-[15px] leading-relaxed mb-8 font-manrope">
                        Sernio listens, triages, and books patient calls 24/7 — so your front desk stops drowning in hold music and after-hours voicemails.
                    </p>

                    <div className="flex flex-row items-center gap-4">
                        <FilledButton textColor={"#F5F3FF"} text={"Book a Demo"} bgColor={"#5B0AFF"} />
                        <OutlinedButton textColor={"#5B0AFF"} text={`Hear it answer a call `} bgColor={"#5B0AFF"} icon={Icons.purpleArrowDownIcon}/>
                    </div>
                </div>

                {/* RIGHT: image with floating cards */}
                <div className="relative w-full -mx-5 sm:-mx-8 mt-6 lg:mx-0 lg:w-auto lg:mt-10 lg:min-w-162.5 lg:-mr-13 lg:max-[1290px]:-mr-2 lg:max-[1130px]:min-w-125 lg:shrink-0 lg:basis-125">
                    <img 
                        src={womanPix} 
                        className="w-full h-auto object-cover lg:w-full lg:h-auto lg:object-cover" 
                    />
                </div>

            </div>

        </div>
    )
}

export default Heropage;