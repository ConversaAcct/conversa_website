import FeatureList from "../resuable/FeatureList";
import Tag from "../resuable/Tag";
import cardImage from "../../assets/security-compliance/Group (6).svg"

const agreementFeatures = [
    "BAA is a mandatory gate in your onboarding, accounts don't go live without it",
    "Covers all patient data that flows through Sernio including call recordings and transcripts",
    "Your practice receives a signed copy by email immediately after onboarding",
    "Enterprise accounts requiring counter-signature from legal are fully supported",
];

const ThirdSection = () => {
    return (
        <section
            data-navbar-theme="dark"
            className="w-full overflow-hidden bg-[#0e0d19]  py-16  lg:py-28"
        >

<div className="mx-auto flex max-w-350 flex-col gap-20 lg:gap-36 "    >
        {/* ===== Booking ===== */}
        <div className="grid items-center gap-10 max-lg:px-5 lg:grid-cols-2 lg:gap-24">
            <div>
                <Tag >Business Associate Agreement</Tag>
                <h2 
             className=" font-normal text-[32px] md:text-[50px] font-cal-sans text-white leading-tight ">
                        A signed BAA before any patient call goes through Sernio.
                </h2>

             

                <p className="mt-6 max-w-xl text-base leading-relaxed text-[#F3EDFF] lg:text-lg">
                Since Sernio hears patient names, symptoms, insurance details, and appointment information on every call, it qualifies as a business associate under HIPAA. We take that seriously.                </p>
                {/* Feature list hidden on mobile, as in the mobile design */}
                <div className="hidden lg:block">
                    <FeatureList items={agreementFeatures} isDark/>
                </div>
            </div>

            <div>
                <img src={cardImage} alt="chrome image"/>
            </div>
        </div></div>


        </section>
    )
}

export default ThirdSection;