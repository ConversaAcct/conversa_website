import { useState } from "react";

// Adjust these paths/filenames to match your assets folder
import epicLogo from "../../assets/integrations/second-section/image.svg";
import modmedLogo from "../../assets/integrations/second-section/image (1).svg";
import athenaLogo from "../../assets/integrations/second-section/image (6).svg";
import oracleLogo from "../../assets/integrations/second-section/image (3).svg";
import drchronoLogo from "../../assets/integrations/second-section/image (4).svg";
import kareoLogo from "../../assets/integrations/second-section/image (5).svg";
import Tag from "../resuable/Tag";

type Status = "Connected" | "Available";

interface Integration {
    name: string;
    logo: string;
    status: Status;
    description: string;
    reads: string;   // data Sernio pulls in (down arrow)
    writes: string;  // data Sernio sends back (up arrow)
}

const integrations: Integration[] = [
    {
        name: "Epic",
        logo: epicLogo,
        status: "Connected",
        description:
            "Real-time scheduling sync, Sernio reads your Epic calendar and books directly into it.",
        reads: "Schedule & availability",
        writes: "Bookings & reschedules",
    },
    {
        name: "ModMed",
        logo: modmedLogo,
        status: "Connected",
        description:
            "Reads ModMed availability and books or reschedules appointments in-call.",
        reads: "Provider schedule",
        writes: "Appointments",
    },
    {
        name: "Athena Health",
        logo: athenaLogo,
        status: "Connected",
        description:
            "Live appointment booking synced to your Athena workflow, with call outcomes logged automatically.",
        reads: "Schedule",
        writes: "Bookings & call logs",
    },
    {
        name: "Oracle Health (Cerner)",
        logo: oracleLogo,
        status: "Connected",
        description:
            "Pulls patient records in real time so Sernio knows who's calling before the conversation starts.",
        reads: "Patient records",
        writes: "Call notes",
    },
    {
        name: "DrChrono",
        logo: drchronoLogo,
        status: "Available",
        description:
            "Auto-synced patient records, appointment status and call history updated after every call.",
        reads: "Patient records",
        writes: "Appointment status",
    },
    {
        name: "Kareo",
        logo: kareoLogo,
        status: "Available",
        description:
            "Seamless appointment booking inside Kareo's scheduling system, no double-entry for your front desk.",
        reads: "Schedule",
        writes: "Bookings",
    },
    {
        name: "Epic",
        logo: epicLogo,
        status: "Connected",
        description:
            "Real-time scheduling sync, Sernio reads your Epic calendar and books directly into it.",
        reads: "Schedule & availability",
        writes: "Bookings & reschedules",
    },
    {
        name: "ModMed",
        logo: modmedLogo,
        status: "Connected",
        description:
            "Reads ModMed availability and books or reschedules appointments in-call.",
        reads: "Provider schedule",
        writes: "Appointments",
    },
    {
        name: "Athena Health",
        logo: athenaLogo,
        status: "Connected",
        description:
            "Live appointment booking synced to your Athena workflow, with call outcomes logged automatically.",
        reads: "Schedule",
        writes: "Bookings & call logs",
    },
    {
        name: "Oracle Health (Cerner)",
        logo: oracleLogo,
        status: "Connected",
        description:
            "Pulls patient records in real time so Sernio knows who's calling before the conversation starts.",
        reads: "Patient records",
        writes: "Call notes",
    },
    {
        name: "DrChrono",
        logo: drchronoLogo,
        status: "Available",
        description:
            "Auto-synced patient records, appointment status and call history updated after every call.",
        reads: "Patient records",
        writes: "Appointment status",
    },
    {
        name: "Kareo",
        logo: kareoLogo,
        status: "Available",
        description:
            "Seamless appointment booking inside Kareo's scheduling system, no double-entry for your front desk.",
        reads: "Schedule",
        writes: "Bookings",
    },
];

const PER_PAGE_DESKTOP = 6;
const INITIAL_MOBILE = 4;

const StatusBadge = ({ status }: { status: Status }) => (
    <span
        className={`shrink-0 rounded-full px-4 py-1.5 text-[13px] md:text-[12.5px]
            ${status === "Connected"
                ? "bg-[#E3FFF3] text-[#29996A]"
                : "bg-[#FFFCE1] text-[#A16109]"}`}
    >
        {status}
    </span>
);

const IntegrationCard = ({ item }: { item: Integration }) => (
    <div className="flex flex-col rounded-3xl border border-[#9C73F3] bg-[#FFFFFF] p-6 md:p-7">
        <div className="flex flex-row items-start justify-between">
            <div className="flex h-14 w-14 md:h-12 md:w-12 items-center justify-center rounded-lg border border-[#DBD8E2] bg-white overflow-hidden">
                <img src={item.logo} alt={item.name} className="h-full w-full object-contain p-1.5" />
            </div>
            <StatusBadge status={item.status} />
        </div>

        <h3 className="mt-5 md:mt-4 text-[#171F2A] font-semibold text-[22px] md:text-[24px] leading-tight">
            {item.name}
        </h3>

        <p className="mt-2 text-[#171F2A] text-[16px] md:text-[15px] leading-7 md:leading-6 md:max-w-[88%]">
            {item.description}
        </p>

        <div className="mt-5 flex flex-row flex-wrap gap-3">
            <span className="rounded-full bg-[#EAE0FF] px-4 py-2 text-[14px] md:text-[13px] text-[#28007C]">
                ↓ {item.reads}
            </span>
            <span className="rounded-full bg-[#E3F9FF] px-4 py-2 text-[14px] md:text-[13px] text-[#005D76]">
                ↑ {item.writes}
            </span>
        </div>
    </div>
);

const SecondSection = () => {
    const [page, setPage] = useState(0);
    const [showAll, setShowAll] = useState(false);

    const totalPages = Math.ceil(integrations.length / PER_PAGE_DESKTOP);
    const desktopItems = integrations.slice(
        page * PER_PAGE_DESKTOP,
        page * PER_PAGE_DESKTOP + PER_PAGE_DESKTOP
    );
    const mobileItems = showAll ? integrations : integrations.slice(0, INITIAL_MOBILE);
    const canExpandMobile = integrations.length > INITIAL_MOBILE;

    return (
        <div
            data-navbar-theme="white"
            className="w-full bg-[#FDFBFF] py-14 md:py-24 px-5 md:px-8 font-manrope"
        >
            <div className="mx-auto w-full max-w-300">
                {/* header */}
                <div className="flex flex-col items-start">
                  
                    <Tag isDark>The full list</Tag>

                    <h2 className="mt-5 text-[#171F2A] font-cal-sans font-normal text-[28px] md:text-[48px] leading-tight">
                        Every connection, one place.
                    </h2>

                    <p className="mt-3 md:mt-5 text-[#6B7280] text-[16px] leading-7 md:leading-8 max-w-120 md:max-w-150">
                        All connected, at their own status. Green means live today. The rest are on
                        the way, request one if yours isn't listed yet.
                    </p>
                </div>

                {/* desktop: paged grid + vertical page indicator */}
                <div className="hidden md:flex flex-row items-end gap-8 mt-12">
                    <div className="grid grid-cols-2 gap-5 flex-1">
                        {desktopItems.map((item) => (
                            <IntegrationCard key={item.name} item={item} />
                        ))}
                    </div>

                    {totalPages > 1 && (
                        <div className="flex flex-col gap-3 pb-1 shrink-0" role="tablist" aria-label="Integration pages">
                            {Array.from({ length: totalPages }).map((_, i) => (
                                <button
                                    key={i}
                                    type="button"
                                    role="tab"
                                    aria-selected={page === i}
                                    aria-label={`Page ${i + 1}`}
                                    onClick={() => setPage(i)}
                                    className="group py-1 cursor-pointer bg-transparent border-none"
                                >
                                    <span
                                        className={`block h-1 w-8.25 rounded-full transition-colors duration-200
                                            ${page === i
                                                ? "bg-[#171F2A]"
                                                : "bg-[#DBD8E2] group-hover:bg-[#A9A4B8]"}`}
                                    />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* mobile: stacked cards + See All / Show less */}
                <div className="md:hidden mt-8 flex flex-col gap-5">
                    {mobileItems.map((item) => (
                        <IntegrationCard key={item.name} item={item} />
                    ))}

                    {canExpandMobile && (
                        <button
                            type="button"
                            onClick={() => setShowAll((prev) => !prev)}
                            aria-expanded={showAll}
                            className="mt-3 w-fit text-left text-[#5B0AFF] text-[14px] font-medium underline underline-offset-4 cursor-pointer bg-transparent border-none p-0"
                        >
                            {showAll ? "Show less" : "See All"}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SecondSection;