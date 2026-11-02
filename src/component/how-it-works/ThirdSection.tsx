import Tag from "../resuable/Tag";
import alarmIcon from "../../assets/how-it-works/🚨.svg"

const emergencySteps = [
    { label: "Emergency keyword detected in real time", time: "0.0s" },
    { label: "Script suspended — no further AI conversation", time: "0.1s" },
    { label: "Call transferred to on-call line", time: "0.4s" },
    { label: "Event logged and flagged in dashboard", time: "0.4s" },
];

const ThirdSection = () => {
    return (
        <section
            data-navbar-theme="dark"
            className="w-full overflow-hidden bg-[#0e0d19] py-16 lg:py-28"
        >
            <div className="mx-auto flex max-w-350 flex-col gap-20 lg:gap-36">
                {/* ===== Emergency routing ===== */}
                <div className="grid items-center gap-10 max-lg:px-5 lg:grid-cols-2 lg:gap-24">
                    <div>
                        <Tag>Emergency routing</Tag>
                        <h2 className="font-normal text-[32px] md:text-[50px] font-cal-sans text-white leading-tight">
                            If it sounds like an emergency, Sernio transfers instantly.
                            No menus, no delays, no AI guessing.
                        </h2>

                        <p className="mt-6 max-w-xl text-base leading-relaxed text-[#F3EDFF] lg:text-lg">
                            Emergency detection runs on every single call — not just the ones
                            flagged urgent. 0.4 seconds from keyword detection to transfer. The
                            call is logged and flagged in your dashboard.
                        </p>
                    </div>

                    <div>
                        <div className="rounded-[20px] border border-[#4B3939] bg-[#0E0D18] p-4  md:p-5">
                            {/* Incoming call alert */}
                            <div className="flex flex-col gap-4 rounded-2xl bg-[#3F2125] p-4 sm:flex-row sm:items-center sm:justify-between md:px-5 md:py-6">
                                <div className="flex items-center gap-4">
                                    {/* Emergency icon */}
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#4D2C31] md:size-13">
                                        <img src={alarmIcon} alt="alarm png"/>
                                    </div>

                                    <p className="text-base leading-snug text-white font-manrope font-medium md:text-lg">
                                        &ldquo;I&rsquo;m having chest pains and
                                        <br className="hidden sm:block" /> I can&rsquo;t breathe&hellip;&rdquo;
                                    </p>
                                </div>

                                <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full font-manrope  bg-[#E8623D] px-4 py-2 text-xs font-medium uppercase tracking-wide text-white md:text-sm">
                                    <span className="relative flex size-2">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70" />
                                        <span className="relative inline-flex size-2 rounded-full bg-white" />
                                    </span>
                                    Emergency detected
                                </span>
                            </div>

                            {/* Steps */}
                            <ol className="mt-8 flex flex-col gap-6 px-1 pb-6 md:mt-10 md:gap-7 md:pb-10 font-manrope">
                                {emergencySteps.map((step, index) => (
                                    <li key={step.label} className="flex items-center gap-4">
                                        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#2B9C8C] text-sm font-semibold text-white md:size-10">
                                            {index + 1}
                                        </span>
                                        <span className="flex-1 text-sm text-[#CBBCC4] md:text-base">
                                            {step.label}
                                        </span>
                                        <span className="shrink-0 text-sm tabular-nums text-[#2B9C8C] md:text-base">
                                            {step.time}
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