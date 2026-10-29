import tag1 from "../../assets/appointment-workflow/Group (1).svg";
import tag2 from "../../assets/appointment-workflow/1 (2).svg";
import tag3 from "../../assets/appointment-workflow/2 (2).svg"
import tag4 from "../../assets/appointment-workflow/3 (3).svg"

const HeroPage = () => {
    return (
        <div
            data-navbar-theme="white"
            className="relative isolate w-full  flex flex-col overflow-hidden pt-32  lg:min-h-screen lg:h-screen lg:justify-center lg:items-center lg:pt-0 lg:pb-0 xl:mt-14"
        >
            {/* Mobile background */}
            <div
                className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat lg:hidden"
                style={{ backgroundImage: "url('/bg (3a).png')" }}
            />

            {/* Desktop background */}
            <div
                className="absolute inset-0 -z-10 hidden bg-center bg-no-repeat bg-size-[100%] lg:block"
                style={{ backgroundImage: "url('bg (1).png')" }}
            />

<div className="flex md:justify-center md:items-center max-md:px-5 flex-col xl:-mt-20 lg:mt-16">
                     <div className="flex md:justify-center md:items-center"><img src={tag1}/></div>
                    <div className=" font-normal text-[32px] md:text-[50px] md:text-center font-cal-sans text-[#171F2A] leading-tight ">
                         <h1>From booking to follow-up.</h1>
                         <h1>Fully automated.</h1>
                    </div>
                    <p className="text-[#171F2A] font-manrope text-[14px] max-sm:py-5 w-90 md:text-center ">Sernio doesn't just answer the call — it books the appointment, sends the reminder, and follows up after the visit. Your front desk focuses on the patients in front of them.</p>
                    <div className="flex flex-row items-center gap-3 py-6">
                        <div><img src={tag2}/></div>
                        <div><img src={tag3}/></div>
                        <div><img src={tag4}/></div>
                    </div>
                </div>

        </div>
    );
};

export default HeroPage;