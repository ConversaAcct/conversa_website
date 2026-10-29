import type { ReactNode } from "react";

/* ---------- Icons ---------- */

const ArrowIcon = () => (
    <svg className="mt-1 h-4 w-4 shrink-0 text-violet-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
);

const CheckIcon = ({ className = "" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
);

const UserIcon = () => (
    <svg className="h-5 w-5 text-violet-600 lg:h-6 lg:w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
);

const CalendarIcon = ({ className = "h-5 w-5 lg:h-6 lg:w-6" }: { className?: string }) => (
    <svg className={`${className} text-violet-600`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="16" rx="3" />
        <path d="M8 3v4M16 3v4M3 10h18" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 17.5h.01M12 17.5h.01M16 17.5h.01" />
    </svg>
);

const PhoneIcon = () => (
    <svg className="h-6 w-6 text-violet-600 lg:h-7 lg:w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
        <path d="M15 3a6 6 0 0 1 6 6M15 6.5a2.5 2.5 0 0 1 2.5 2.5" />
    </svg>
);

/* ---------- Small building blocks ---------- */

const Tag = ({ children }: { children: ReactNode }) => (
    <span className="inline-block rounded-full border border-[#5B0AFF] px-5 py-2 text-sm text-white lg:px-6 lg:text-base">
        {children}
    </span>
);

const FeatureList = ({ items }: { items: string[] }) => (
    <ul className="mt-8 space-y-4">
        {items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-base text-white/90 lg:text-lg">
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
    <div className="w-full rounded-3xl border border-white/15 p-3 lg:p-5">
        {/* Confirmed */}
        <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-[#1a1927] px-4 py-8 text-center lg:py-9">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-700 shadow-[0_0_0_6px_rgba(109,40,217,0.18)] lg:h-16 lg:w-16">
                <CheckIcon className="h-7 w-7 text-white" />
            </div>
            <h4 className="mt-5 text-xl font-semibold text-white lg:text-2xl">Appointment confirmed</h4>
            <p className="mt-1 text-sm text-white/60 lg:text-base">SMS confirmation sent to patient</p>
        </div>

        {/* Details */}
        <div className="mt-3 grid grid-cols-3 gap-2 lg:mt-4 lg:gap-4">
            {details.map((d) => (
                <div key={d.sub} className="rounded-2xl border border-white/10 bg-[#1a1927] p-3 lg:p-4">
                    <div className="mb-4 lg:mb-5">{d.icon}</div>
                    <p className="text-[13px] font-medium leading-tight text-white sm:text-sm lg:text-lg">{d.title}</p>
                    <p className="mt-1 text-[13px] text-white/55 sm:text-sm lg:text-base">{d.sub}</p>
                </div>
            ))}
        </div>

        {/* EHR sync */}
        <div className="relative mt-3 flex items-center gap-4 rounded-2xl border border-white/10 bg-[#1a1927] p-2 pr-4 lg:mt-4 lg:gap-6">
            <div className="flex h-16 w-24 shrink-0 items-center justify-center rounded-xl bg-[#211f31] lg:h-18 lg:w-28">
                {/* Replace with your EHR logo asset */}
                <img src="/oracle-health.svg" alt="Oracle Health" className="h-8 w-auto lg:h-10" />
            </div>
            <p className="flex-1 text-base font-medium text-white lg:text-xl">Synced to Oracle health EHR</p>
            <div className="absolute right-4 top-4 flex items-center gap-2 lg:static">
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                <span className="hidden text-base text-emerald-400 lg:inline">Connected</span>
            </div>
        </div>
    </div>
);

const RemindersCard = () => (
    <div className="w-full rounded-3xl border border-white/15 p-4 lg:p-8">
        <h4 className="mb-5 text-lg font-medium text-white/70 lg:mb-6 lg:text-2xl">Today’s scheduled reminders</h4>

        <div className="space-y-3 lg:space-y-4">
            {reminders.map((r) => (
                <div
                    key={r.title}
                    className="relative flex items-center gap-4 rounded-2xl border border-white/10 bg-[#1a1927] p-2 pr-4 lg:gap-6 lg:p-3 lg:pr-6"
                >
                    <IconBox>{r.type === "calendar" ? <CalendarIcon /> : <PhoneIcon />}</IconBox>

                    <div className="min-w-0 flex-1 py-1">
                        <p className="truncate text-base font-medium text-white lg:text-xl">{r.title}</p>
                        <p className="mt-1 text-sm text-white/55 lg:text-base">{r.sub}</p>
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
                            <CheckIcon className="h-6 w-6 text-emerald-400" />
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
            data-navbar-theme="white"
            className="w-full overflow-hidden bg-[#0e0d19] px-5 py-16 sm:px-8 lg:px-[8%] lg:py-28"
        >
            <div className="mx-auto flex max-w-350 flex-col gap-20 lg:gap-36">
                {/* ===== Booking ===== */}
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-24">
                    <div>
                        <Tag>Booking</Tag>
                        <h2 className="mt-6 text-[32px] font-semibold leading-[1.1] tracking-tight text-white sm:text-4xl lg:mt-7 lg:text-[56px]">
                            Books directly into your EHR.
                            <br />
                            No manual re-entry.
                        </h2>
                        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 lg:text-lg">
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
                        <h2 className="mt-6 text-[32px] font-semibold leading-[1.1] tracking-tight text-white sm:text-4xl lg:mt-7 lg:text-[56px]">
                            Fewer no-shows.
                            <br />
                            More completed care.
                        </h2>
                        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 lg:text-lg">
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