import card1 from "../../assets/security-compliance/icon (1).svg"
// Add the remaining icons the same way (adjust file names to match your assets folder)
import card2 from "../../assets/security-compliance/icon (1).svg"
import card3 from "../../assets/security-compliance/check.svg"
import card4 from "../../assets/security-compliance/people.svg"
import card5 from "../../assets/security-compliance/document-text.svg"
import card6 from "../../assets/security-compliance/key-square.svg"

import Tag from "../resuable/Tag"

type Status = "confirmed" | "required" | "progress"

const STATUS_STYLES: Record<Status, string> = {
    confirmed: "bg-[#E3FFF3] text-[#29996A]",
    required: "bg-[#E3FFF3] text-[#29996A]",
    progress: "bg-[#F0F0F0] text-[#6B7280]",
}

const PILLARS: {
    icon: string
    title: string
    description: string
    status: Status
    statusLabel: string
}[] = [
    {
        icon: card1,
        title: "HIPAA-ready architecture",
        description:
            "Encryption, access controls, and audit logging are built into the platform from day one — for every account, at every plan level.",
        status: "confirmed",
        statusLabel: "Confirmed",
    },
    {
        icon: card2,
        title: "BAA signed at onboarding",
        description:
            "We sign a Business Associate Agreement with every covered entity before any patient calls go through Sernio. It's a hard gate, not an optional add-on.",
        status: "required",
        statusLabel: "Required before go-live",
    },
    {
        icon: card3,
        title: "AES-256 encryption",
        description:
            "All data encrypted in transit and at rest, including call recordings, transcripts, and patient records. The same standard used by financial institutions.",
        status: "confirmed",
        statusLabel: "Confirmed",
    },
    {
        icon: card4,
        title: "Role-based access",
        description:
            "Staff only see what their role requires. Front desk, clinical, and admin views are separated, so a receptionist can't access clinical notes, and vice versa.",
        status: "confirmed",
        statusLabel: "Confirmed",
    },
    {
        icon: card5,
        title: "Full audit logs",
        description:
            "Every call, edit, rule change, and data access is logged with a timestamp and user identifier, reviewable by your compliance team at any time.",
        status: "required",
        statusLabel: "Required before go-live",
    },
    {
        icon: card6,
        title: "SOC 2 Type II",
        description:
            "Third-party audit currently in progress. We do not claim SOC 2 certification until it is formally completed. Confirm current status before citing in procurement.",
        status: "progress",
        statusLabel: "In progress — confirm before citing",
    },
]

const SecondSection = () => {
    return (
        <div
            data-navbar-theme="white"
            className="w-full bg-[#FDFBFF] flex flex-col px-5 md:px-6 md:justify-center md:pb-26 pb-10"
        >
            <div className="flex flex-col md:items-center md:mt-20 mt-10">
                <Tag isDark>Security pillars</Tag>

                <h1 className="md:text-center font-normal text-[#171F2A] md:text-[45px] text-[30px] md:max-w-160 font-cal-sans">
                    What's built in, not bolted on.
                </h1>
            </div>

            <div className="w-full max-w-295 mx-auto mt-8 md:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {PILLARS.map((pillar) => (
                    <div
                        key={pillar.title}
                        className="flex flex-col items-start rounded-2xl border border-[#9C73F3] bg-white p-6 md:p-8"
                    >
                        <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-xl bg-[#F3EDFF]">
                            <img
                                src={pillar.icon}
                                alt=""
                                aria-hidden="true"
                                className="h-7 w-7 md:h-8 md:w-8 object-contain"
                            />
                        </div>

                        <h2 className="mt-6 text-[#171F2A] text-[22px] md:text-[24px] leading-tight font-semibold font-manrope">
                            {pillar.title}
                        </h2>

                        <p className="mt-3 text-[#171F2A] text-[16px] font-normal font-manrope md:text-[16px] leading-[1.55]">
                            {pillar.description}
                        </p>

                        <div className="mt-auto pt-6">
                            <span
                                className={`inline-flex items-center font-manrope font-normal rounded-full px-4 py-1.5 text-[14px] md:text-[14px] leading-none ${STATUS_STYLES[pillar.status]}`}
                            >
                                {pillar.statusLabel}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SecondSection