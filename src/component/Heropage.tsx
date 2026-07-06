import Icons from "../assets/Icons";
import FilledButton from "./FilledButton";
import womanPix from "../assets/homepage/hero/img (4).png";
import OutlinedButton from "./OutlinedButton";

const Heropage = () => {
    return(
        <div 
        data-navbar-theme="white"
        className="bg-cover bg-center bg-no-repeat w-full h-screen flex flex-col justify-center items-center overflow-hidden mt-14"
        style={{ backgroundImage: `url('/bg (3).png')` }}
    >
        <div className="w-full max-w-7xl mx-auto px-6 max-[1290px]:px-10 flex lg:flex-row flex-col items-center justify-between gap-30 max-[1290px]:gap-10">
         
                {/* LEFT: text content */}
                <div className="flex flex-col items-start max-w-md shrink-0">
                    <div className="gap-2 text-black font-medium text-[12px] bg-[#F5E8E3] px-4 py-1.5 rounded-full flex justify-center items-center mb-2">
                        {Icons.barsIcon}
                        <p>Voice AI for healthcare teams</p>
                    </div>

                    <h1 className="text-[55px] font-cal-sans  text-[#171F2A] leading-tight mb-2">
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
                <div className="relative w-full  mt-10  min-w-162.5 -mr-13 max-[1290px]:-mr-2 max-[1130px]:min-w-125 shrink-0 basis-125">                 
                    <img 
                        src={womanPix} 
                        className="w-full h-auto object-cover" 
                    />
                </div>

            </div>

            
        </div>
    )
}

export default Heropage;