import FeatureList from "../resuable/FeatureList";
import Tag from "../resuable/Tag";
import houseImage from "../../assets/how-it-works/🏛️.svg"

const agreementFeatures = [
    "BAA is a mandatory gate in your onboarding, accounts don't go live without it",
    "Covers all patient data that flows through Sernio including call recordings and transcripts",
    "Your practice receives a signed copy by email immediately after onboarding",
    "Enterprise accounts requiring counter-signature from legal are fully supported",
];

const baaSteps = [
    "Practice completes onboarding and agrees to BAA",
    "Sernio countersigns and timestamps the agreement",
    "Signed copy emailed to practice immediately",
    "Account activated, patient calls can now flow through Sernio",
    "Agreement stored and retrievable for compliance audits",
];

const ThirdSection = () => {
    return (
        <section
            data-navbar-theme="dark"
            className="w-full overflow-hidden bg-[#0e0d19] py-16 lg:py-28"
        >
            <div className="mx-auto flex max-w-350 flex-col gap-20 lg:gap-36">
                {/* ===== Business Associate Agreement ===== */}
                <div className="grid items-center gap-10 max-lg:px-5 lg:grid-cols-2 lg:gap-24">
                    <div>
                        <Tag>Business Associate Agreement</Tag>
                        <h2 className="font-normal text-[32px] md:text-[50px] font-cal-sans text-white leading-tight">
                            A signed BAA before any patient call goes through Sernio.
                        </h2>

                        <p className="mt-6 max-w-xl text-base leading-relaxed text-[#F3EDFF] lg:text-lg">
                            Since Sernio hears patient names, symptoms, insurance details, and
                            appointment information on every call, it qualifies as a business
                            associate under HIPAA. We take that seriously.
                        </p>

                        {/* Feature list hidden on mobile, as in the mobile design */}
                        <div className="hidden lg:block">
                            <FeatureList items={agreementFeatures} isDark />
                        </div>
                    </div>

                    <div>
                        <div className="rounded-[20px] border border-[#393B4B] bg-[#161823] p-4 md:rounded-[20px] md:p-5 font-manrope">
                            {/* Agreement header */}
                            <div className="flex flex-col gap-4 rounded-2xl bg-[#13271F] p-4 sm:flex-row sm:items-start sm:justify-between md:px-5 md:py-6">
                                <div className="flex items-start gap-4">
                                    {/* Shield icon */}
                                    <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#204134] ">
                                       <img src={houseImage} alt="house"/>
                                    </div>

                                    <div>
                                        <p className="text-base font-medium leading-snug text-white md:text-[16px]">
                                            HIPAA Business Associate Agreement
                                        </p>
                                        <p className="mt-1 max-w-65 text-[12px] leading-snug text-[#BCCBC3] md:text-base">
                                            Signed at account activation &middot; Required for all
                                            accounts
                                        </p>
                                    </div>
                                </div>

                                <span className="inline-flex w-fit shrink-0 items-center rounded-full bg-[#204134] px-4 py-2 text-xs font-medium text-[#29996A] md:text-sm">
                                    Required
                                </span>
                            </div>

                            {/* Steps */}
                            <ol className="mt-8 flex flex-col gap-6 px-1 pb-6 md:mt-10 md:gap-7 md:pb-10">
                                {baaSteps.map((step, index) => (
                                    <li key={step} className="flex items-center gap-4">
                                        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#13271F] text-sm font-semibold text-white md:size-10">
                                            {index + 1}
                                        </span>
                                        <span className="flex-1 text-sm text-[#BCCBC5] md:text-base">
                                            {step}
                                        </span>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ThirdSection;