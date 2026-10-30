import type { ReactNode } from "react";
import Tag from "../resuable/Tag";
import oracleImage from "../../assets/appointment-workflow/icon.svg"

/* ---------- Icons ---------- */

const ArrowIcon = () => (
    <svg className="mt-1 h-4 w-4 shrink-0 text-violet-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
);

const CheckIcon = () => (
    <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="33.4296" cy="33.4296" r="33.4296" fill="#1D1B2E"/>
    <circle cx="33.4297" cy="33.4297" r="27.3515" fill="#5B0AFF"/>
    <path d="M21.2734 34.1894L29.6308 41.7871L44.8261 25.832" stroke-width="2" stroke="white"/>
    </svg>
    
);

const UserIcon = () => (
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke="#5B0AFF"/>
<path d="M20.5901 22C20.5901 18.13 16.7402 15 12.0002 15C7.26015 15 3.41016 18.13 3.41016 22" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke="#5B0AFF"/>
</svg>

);

const CalendarIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 2V5" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" stroke="#5B0AFF"/>
    <path d="M16 2V5" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" stroke="#5B0AFF"/>
    <path d="M3.5 9.09009H20.5" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" stroke="#5B0AFF"/>
    <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" stroke="#5B0AFF"/>
    <path d="M15.6937 13.7002H15.7027" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="#5B0AFF"/>
    <path d="M15.6937 16.7002H15.7027" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="#5B0AFF"/>
    <path d="M11.9945 13.7002H12.0035" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="#5B0AFF"/>
    <path d="M11.9945 16.7002H12.0035" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="#5B0AFF"/>
    <path d="M8.29529 13.7002H8.30427" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="#5B0AFF"/>
    <path d="M8.29529 16.7002H8.30427" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="#5B0AFF"/>
    </svg>
    
);

const PhoneIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.2022 17.6898C21.2022 18.0373 21.125 18.3943 20.9609 18.7418C20.7969 19.0892 20.5846 19.4173 20.3047 19.7261C19.8318 20.2473 19.3107 20.6236 18.722 20.8649C18.1429 21.1062 17.5156 21.2316 16.8401 21.2316C15.8557 21.2316 14.8038 21 13.6939 20.5271C12.5841 20.0543 11.4743 19.4173 10.3741 18.6163C9.26425 17.8056 8.21232 16.9081 7.20864 15.9141C6.21461 14.9104 5.3171 13.8585 4.51608 12.7583C3.72472 11.6581 3.08778 10.5579 2.62454 9.4674C2.16131 8.36722 1.92969 7.31529 1.92969 6.31161C1.92969 5.65536 2.0455 5.02806 2.27711 4.44902C2.50873 3.86032 2.87546 3.31988 3.38695 2.83734C4.0046 2.22935 4.68015 1.93018 5.3943 1.93018C5.66452 1.93018 5.93474 1.98808 6.17601 2.10389C6.42693 2.2197 6.6489 2.39341 6.82261 2.64433L9.06158 5.80012C9.23529 6.04139 9.36075 6.26336 9.44761 6.47567C9.53447 6.67834 9.58272 6.881 9.58272 7.06437C9.58272 7.29598 9.51517 7.5276 9.38006 7.74957C9.2546 7.97154 9.07123 8.20315 8.83961 8.43477L8.10616 9.19718C8 9.30334 7.95175 9.4288 7.95175 9.58321C7.95175 9.66041 7.9614 9.72797 7.9807 9.80518C8.00965 9.88238 8.0386 9.94029 8.0579 9.99819C8.23162 10.3167 8.53079 10.7316 8.95542 11.2335C9.38971 11.7353 9.85294 12.2468 10.3548 12.7583C10.8759 13.2698 11.3778 13.7427 11.8892 14.177C12.3911 14.6016 12.8061 14.8911 13.1342 15.0648C13.1824 15.0841 13.2403 15.1131 13.3079 15.142C13.3851 15.171 13.4623 15.1806 13.5492 15.1806C13.7132 15.1806 13.8387 15.1227 13.9449 15.0166L14.6783 14.2928C14.9196 14.0515 15.1512 13.8681 15.3732 13.7523C15.5951 13.6172 15.8171 13.5497 16.0584 13.5497C16.2417 13.5497 16.4347 13.5883 16.6471 13.6751C16.8594 13.762 17.0813 13.8874 17.3226 14.0515L20.517 16.3194C20.7679 16.4931 20.9416 16.6958 21.0478 16.9371C21.1443 17.1783 21.2022 17.4196 21.2022 17.6898Z" stroke-miterlimit="10" stroke="#5B0AFF"/>
<path d="M17.8543 8.68586C17.8543 8.10682 17.4007 7.21895 16.7252 6.49515C16.1075 5.82925 15.2872 5.30811 14.4766 5.30811" stroke-linecap="round" stroke-linejoin="round" stroke="#5B0AFF"/>
<path d="M21.2321 8.68569C21.2321 4.95086 18.2114 1.93018 14.4766 1.93018" stroke-linecap="round" stroke-linejoin="round" stroke="#5B0AFF"/>
</svg>
    
);



const FeatureList = ({ items }: { items: string[] }) => (
    <ul className="mt-8 space-y-4">
        {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-base text-[#F3EDFF] font-manrope lg:text-lg">
                <ArrowIcon />
                <span>{item}</span>
            </li>
        ))}
    </ul>
);

const IconBox = ({ children }: { children: ReactNode }) => (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#211f31] lg:h-16 lg:w-16">
        {children}
    </div>
);

/* ---------- Data ---------- */

const bookingFeatures = [
    "Reads your live availability before offering slots",
    "Handles reschedules and cancellations in the same call",
    "Syncs to Epic, ModMed, Athena Health, DrChrono and more",
    "Sends SMS confirmation to patient immediately after booking",
];

const reminderFeatures = [
    "48-hour and same-day reminder cadence, configurable per practice",
    "Patients can confirm or reschedule directly in the reminder call",
    "No-show follow-ups placed automatically within 2 hours",
    "Post-visit check-in calls for procedures requiring recovery monitoring",
];

const details = [
    { icon: <UserIcon />, title: "Maria Shaw", sub: "Patient" },
    { icon: <CalendarIcon />, title: "Thu · 10:00 AM", sub: "Date and time" },
    { icon: <UserIcon />, title: "Dr. Anthony", sub: "Practitioner" },
];

type Reminder = {
    title: string;
    sub: string;
    type: "calendar" | "call";
    status: "sent" | "scheduled";
};

const reminders: Reminder[] = [
    { title: "Reminder — Kenneth Brendan", sub: "Thu 10 AM  |  Cleaning", type: "calendar", status: "sent" },
    { title: "Reminder — Queen Dora", sub: "Thu 11:30 AM  |  Checkup", type: "calendar", status: "sent" },
    { title: "Follow-up — Manny Penn", sub: "Wed 2 PM  |  Missed", type: "call", status: "scheduled" },
    { title: "Post-visit — Flora Kendrick", sub: "Mon 10 AM  |  Root canal", type: "call", status: "scheduled" },
];

/* ---------- Cards ---------- */

const BookingCard = () => (
    <div             data-navbar-theme="dark"
    className="w-full rounded-3xl border border-[#2B2A37] p-3 lg:p-5">
        {/* Confirmed */}
        <div className="flex flex-col items-center rounded-2xl border border-[#232032] bg-[#191726] px-4 py-8 text-center lg:py-9">
                <CheckIcon  />
        
            <h4 className="mt-5 text-xl font-bold font-manrope text-white lg:text-2xl">Appointment confirmed</h4>
            <p className="mt-1 text-sm font-manrope text-[#BEBFCB] lg:text-base">SMS confirmation sent to patient</p>
        </div>

        {/* Details */}
        <div className="mt-3 grid grid-cols-3 gap-2 lg:mt-4 lg:gap-4">
            {details.map((d) => (
                <div key={d.sub} className="rounded-2xl border border-[#232032] bg-[#1a1927] p-3 lg:p-4">
                    <div className="mb-4 lg:mb-5">{d.icon}</div>
                    <p className="text-[13px] font-medium font-manrope leading-tight text-white sm:text-sm lg:text-lg">{d.title}</p>
                    <p className="mt-1 text-[13px] text-[#BEBFCB] font-manrope sm:text-sm lg:text-base">{d.sub}</p>
                </div>
            ))}
        </div>

        {/* EHR sync */}
        <div className="relative mt-3 flex items-center gap-4 rounded-2xl border border-[#232032] bg-[#191726] p-2 pr-4 lg:mt-4 lg:gap-6">
            <div className="flex h-16 w-24 shrink-0 items-center justify-center rounded-xl bg-lg:h-18 lg:w-28">
                {/* Replace with your EHR logo asset */}
                <img src={oracleImage} alt="Oracle Health" className="h-8 w-auto lg:h-10" />
            </div>
            <p className="flex-1 text-base font-medium text-white lg:text-xl">Synced to Oracle health EHR</p>
            <div className="absolute right-4 top-4 flex items-center gap-2 lg:static">
                <span className="h-3 w-3 rounded-full bg-[#27FFA4]" />
                <span className="hidden text-base text-[#27FFA4] lg:inline">Connected</span>
            </div>
        </div>
    </div>
);

const RemindersCard = () => (
    <div             data-navbar-theme="dark"
    className="w-full rounded-3xl border border-[#2B2A37] bg-[#0E0D18] p-4 lg:p-8">
        <h4 className="mb-5 text-lg font-medium text-[#BEBFCB] lg:mb-6 lg:text-2xl">Today’s scheduled reminders</h4>

        <div className="space-y-3 lg:space-y-4">
            {reminders.map((r) => (
                <div
                    key={r.title}
                    className="relative flex items-center gap-4 rounded-2xl border border-[#232032] bg-[#191726] p-2 pr-4 lg:gap-6 lg:p-3 lg:pr-6"
                >
                    <IconBox>{r.type === "calendar" ? <CalendarIcon /> : <PhoneIcon />}</IconBox>

                    <div className="min-w-0 flex-1 py-1">
                        <p className="truncate text-base font-medium font-manrope text-white lg:text-xl">{r.title}</p>
                        <p className="mt-1 text-sm text-[#BEBFCB] font-manrope lg:text-base">{r.sub}</p>
                    </div>

                    {/* Desktop: pill badge */}
                    <span
                        className={`hidden rounded-full px-4 py-1.5 text-base lg:inline-block ${
                            r.status === "sent"
                                ? "bg-emerald-500/15 text-emerald-400"
                                : "bg-amber-500/15 text-amber-400"
                        }`}
                    >
                        {r.status === "sent" ? "Sent" : "Scheduled"}
                    </span>

                    {/* Mobile: compact icon */}
                    <span className="absolute right-3 top-2 lg:hidden">
                        {r.status === "sent" ? (
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect opacity="0.1" width="20" height="20" rx="10" fill="#27FFA4" />
                                <path
                                    d="M5 10.2308L8.1336 13.6054C8.33142 13.8185 8.66858 13.8185 8.8664 13.6054L15 7"
                                    stroke="#27FFA4"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        ) : (
                            <span className="mt-2 mr-1 block h-0.5 w-5 rounded bg-amber-400" />
                        )}
                    </span>
                </div>
            ))}
        </div>
    </div>
);

/* ---------- Section ---------- */

const ThirdSection = () => {
    return (
        <section
            data-navbar-theme="dark"
            className="w-full overflow-hidden bg-[#0e0d19] px-5 py-16 sm:px-8 lg:px-[8%] lg:py-28"
        >
            <div className="mx-auto flex max-w-350 flex-col gap-20 lg:gap-36">
                {/* ===== Booking ===== */}
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-24">
                    <div>
                        <Tag>Booking</Tag>
                        <h2 
                     className=" font-normal text-[32px] md:text-[50px] max-sm:hidden font-cal-sans text-white leading-tight ">
                    Books directly into your EHR.
                            <br />
                            No manual re-entry.
                        </h2>

                        <h2 
                     className=" font-normal text-[32px]  hidden max-sm:block  font-cal-sans text-white leading-tight ">
                    Books directly into your EHR.
                            No manual re-entry.
                        </h2>

                        <p className="mt-6 max-w-xl text-base leading-relaxed text-[#F3EDFF] lg:text-lg">
                            When Sernio books an appointment it writes directly to your scheduling system in real
                            time. Your calendar updates, the patient gets a confirmation, and nothing falls through
                            the cracks.
                        </p>
                        {/* Feature list hidden on mobile, as in the mobile design */}
                        <div className="hidden lg:block">
                            <FeatureList items={bookingFeatures} />
                        </div>
                    </div>

                    <BookingCard />
                </div>

                {/* ===== Reminders ===== */}
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-24">
                    <div className="lg:order-2">
                        <Tag>Reminders &amp; follow-ups</Tag>
                        <h2 className="mt-6 text-[32px] font-normal font-cal-sans leading-[1.1] tracking-tight text-white sm:text-4xl lg:mt-7 lg:text-[56px]">
                            Fewer no-shows.
                            <br />
                            More completed care.
                        </h2>
                        <p className="mt-6 max-w-xl text-base leading-relaxed text-[#F3EDFF] font-manrope lg:text-lg">
                            Sernio sends automated appointment reminders by call or SMS — 48 hours before and the
                            morning of. If a patient doesn’t show, Sernio follows up the same day and offers to
                            rebook.
                        </p>
                        <FeatureList items={reminderFeatures} />
                    </div>

                    <div className="lg:order-1">
                        <RemindersCard />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ThirdSection;