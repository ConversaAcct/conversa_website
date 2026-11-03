import Tag from "../resuable/Tag";
import ilusstrationImg from "../../assets/integrations/illustration.svg"
import illustrationImg3 from "../../assets/integrations/illustration (1).svg"
import ilusstrationImg2 from "../../assets/integrations/Illustration2.svg"


const steps = [
    {
        title: "Authorise access",
        description:
            "You authenticate once through your EHR's own login — Sernio never stores your EHR credentials.",
    },
    {
        title: "Sernio reads your schedule",
        description:
            "Available slots, provider names, and practice hours are pulled in real time on every call.",
    },
    {
        title: "Appointments write back",
        description:
            "When Sernio books or reschedules, it writes directly to your EHR, no manual step required.",
    },
    {
        title: "Full audit trail",
        description:
            "Every read and write is logged and timestamped for your compliance team.",
    },
];

/* ---------- small building blocks ---------- */


const Cursor = () => (
    <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.70703 17.8213L0.707031 0.821289L15.707 6.82129C9.30703 9.62129 5.70703 15.3213 4.70703 17.8213Z" fill="#5B0AFF" stroke="white"/>
    </svg>
    
);





/* ---------- illustrations ---------- */

const AuthoriseIllustration = () => (
    <div className="flex flex-col items-center justify-center h-full">
       <img src={ilusstrationImg}/>
    </div>
);

const ReadScheduleIllustration = () => (
    <div className="relative h-full w-full overflow-hidden">
       <img src={ilusstrationImg2}/>

        {/* Sernio pill + cursor */}
        <div className="absolute right-[2%] bottom-[8%] flex items-end">
        
            <div  className="-mr-2 mb-8 -rotate-6">
            <Cursor  />
            </div>
            <span className="rounded-full bg-[#5B0AFF] mt-20  px-4 py-2 text-white text-[14px] font-medium">
                Sernio
            </span>
        </div>
    </div>
);

const WriteBackIllustration = () => (
    <div className="flex items-center justify-center h-full">
    
    <img src={illustrationImg3}/>
    </div>
);

const AuditIllustration = () => (
    <div className="flex flex-col justify-center gap-3 h-full">
        <div className="h-10 rounded-lg border border-[#2D2B3D] bg-[#201E33]" />

        <div className="relative flex flex-row items-center gap-2.5 rounded-lg border border-[#2C2A3C] bg-[#201E33] px-3 py-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1B1A29] text-[#3573ED] text-[15px]">
                K
            </span>
            <span className="text-white text-[14px]">Kenneth</span>
            <span className="h-2.5 flex-1 rounded-full bg-[#1B1A29]" />
            <span className="rounded-full bg-[#FFFCE1] px-2.5 py-0.5 text-[11px] font-medium text-[#A16207]">
                Config
            </span>
            <span className="flex flex-col gap-0.5">
                <i className="block h-0.75 w-0.75 rounded-full bg-[#64748B]" />
                <i className="block h-0.75 w-0.75 rounded-full bg-[#64748B]" />
                <i className="block h-0.75 w-0.75 rounded-full bg-[#64748B]" />
            </span>
            <div className="absolute right-4 -bottom-4">
            <Cursor  />
            </div>
        </div>

        <div className="h-10 rounded-lg border border-[#2D2B3D] bg-[#201E33]" />
    </div>
);

const illustrations = [
    <AuthoriseIllustration />,
    <ReadScheduleIllustration />,
    <WriteBackIllustration />,
    <AuditIllustration />,
];

/* ---------- section ---------- */

const ThirdSection = () => {
    return (
        <div
            data-navbar-theme="dark"
            className="w-full bg-[#0E0D18] py-16 md:py-24 px-5 md:px-8 font-manrope"
        >
            {/* header */}
            <div className="flex flex-col md:items-center">
            
                <Tag> How the connection works</Tag>

                <h2 className="mt-5 text-white font-cal-sans font-normal text-[30px] md:text-[48px] md:text-center leading-tight max-md:max-w-75">
                    Connected in minutes, not days.
                </h2>

                <p className="mt-3 md:mt-5 text-[#F3EDFF] text-[14px] md:text-[16px] md:text-center leading-7 max-w-190">
                    Sernio connects through secure OAuth and read/write API access. No data
                    leaves your EHR without your permission, and every transaction is logged in
                    your audit trail.
                </p>
            </div>

            <div className="mx-auto mt-10 md:mt-16 w-full max-w-350">
                {/* desktop step bar — numbers sit above each card's centre */}
                <div
                    className="hidden lg:grid grid-cols-4 gap-5 bg-cover bg-center bg-no-repeat w-full rounded-[10px]  py-2 "
                    style={{
                       
                        backgroundImage:
                        `url('/long.png')`,
                      
                    }}
                >
                    {steps.map((_, i) => (
                        <div key={i} className="flex justify-center">
                            <span
                                className={`flex h-8 w-8 items-center justify-center rounded-md text-[14px] font-medium text-white
                                    ${i === 0
                                        ? "bg-[#9C73F3] "
                                        : "bg-[#5A5271] border  border-[#6E6585]"}`}
                            >
                                {i + 1}
                            </span>
                        </div>
                    ))}
                </div>

                {/* cards */}
                <div className="lg:mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {steps.map((step, i) => (
                        <div
                            key={step.title}
                            className="flex flex-col rounded-2xl border border-[#2D2B3D] bg-[#141321] p-6 lg:p-5"
                        >
                            {/* mobile-only label */}
                            <span className="lg:hidden text-[#9C73F3] text-[15px]">
                                Step {i + 1}
                            </span>

                            <h3 className="text-white text-[20px] lg:text-[18px] font-semibold leading-tight mt-1 lg:mt-0">
                                {step.title}
                            </h3>

                            <p className="mt-2 text-[#F3EDFF] text-[14px] lg:text-[13.5px] leading-6">
                                {step.description}
                            </p>

                            <div className="mt-6 h-44 w-full">{illustrations[i]}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ThirdSection;