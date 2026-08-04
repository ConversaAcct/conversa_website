import { useEffect, useRef, useState } from "react";
import { ChevronRight, ChevronDown, ChevronUp, Check, Menu, X } from "lucide-react";
import Icons from "../assets/Icons";
import avatar1 from "../assets/waitlist/image (16).svg"
import avatar2 from "../assets/waitlist/7 (1).svg"
import avatar3 from "../assets/waitlist/2 (5).svg"
import avatar4 from "../assets/waitlist/3 (5).svg"
import avatar5 from "../assets/waitlist/5 (3).svg"



type Challenge =
  | "Missed calls after hours"
  | "Front desk overwhelmed at peak"
  | "Appointment no-shows"
  | "Insurance verification calls"
  | "Patient follow-up calls"
  | "Slow handling of urgent calls"
  | "Prescription refill requests"
  | "Too many calls to book";

const CHALLENGES: Challenge[] = [
  "Missed calls after hours",
  "Front desk overwhelmed at peak",
  "Appointment no-shows",
  "Insurance verification calls",
  "Patient follow-up calls",
  "Slow handling of urgent calls",
  "Prescription refill requests",
  "Too many calls to book"
];

const AVATARS = [
  { id: 1, src: avatar1},
  { id: 2, src: avatar3},
  { id: 3, src: avatar4 },
  { id: 4, initials: "E" , bg : "#5B0AFF"},
  { id: 5, src: avatar5 },
  { id: 6, initials: "W" , bg : "#171F2A"},
  { id: 7, src: avatar2 },
];

const PERKS = [
  {
    title: "Priority onboarding",
    description:
      "First cohort practices get a dedicated setup call and hands-on configuration support.",
  },
  {
    title: "Founding practice pricing",
    description: "Lock in early-access rates before public launch pricing goes live.",
  },
  {
    title: "Direct product input",
    description: "Your call patterns and edge cases help shape what Sernio handles next.",
  },
  {
    title: "BAA signed before go-live",
    description:
      "Full HIPAA compliance review completed before any patient calls go through Sernio.",
  },
];

const ROLE_OPTIONS = [
  "Practice Owner/Physician",
  "Practice Manager",
  "Office Administrator",
  "Clinical Director",
  "IT/Systems Manager",
  "Hospital Administrator",
  "Other"
];

const SPECIALTY_OPTIONS = [
  "General Practice",
  "Dental",
  "Dermatology",
  "Pediatrics",
  "Mental Health",
  "Dermatology",
  "OB/GYN",
  "Orthopedics",
  "Pharmacy",
  "Other/Multi-specialty"
];

const PRACTICE_SIZE_OPTIONS = [
  "Practitioners",
  "1-5 practitioners",
  "6-15 practitioners",
  "16-50 practitioners",
  "51-100 Practitioners",
  "100+ Practitioners"
];

/**
 * Custom dropdown that mirrors the target design: a rounded trigger,
 * and a floating panel where the placeholder sits greyed-out at the
 * top and the active/selected option is highlighted in violet.
 */
type DropdownProps = {
  id: string;
  placeholder: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
};



const Dropdown = ({ id, placeholder, options, value, onChange }: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <button
        id={id}
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`flex w-full items-center justify-between text-[14px] rounded-lg border bg-white px-4 py-2.5 text-left outline-none transition-colors ${
          open
            ? "border-violet-500 focus:border-[#5B0AFF]"
            : "border-[#94A3B8]"
        } ${value ? "text-[#1F2937]" : "text-[#9498B8]"}`}
      >
        <span>{value || placeholder}</span>
        {open ? (
          <ChevronUp className="h-4 w-4 shrink-0 text-[#9498B8]" />
        ) : (
          <ChevronDown className="h-4 w-4 shrink-0 text-[#9498B8]" />
        )}
      </button>

      {open && (
  <div
    role="listbox"
    className="absolute z-10 mt-2 w-full overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl"
  >
    <div className="dropdown-scrollbar max-h-60 overflow-y-auto py-2">
      <div className="px-4 py-2.5 text-[#9498B8]">{placeholder}</div>
      {options.map((option) => {
        const selected = option === value;
        return (
          <button
            key={option}
            type="button"
            role="option"
            aria-selected={selected}
            onClick={() => {
              onChange(option);
              setOpen(false);
            }}
            className={`flex w-full items-center justify-between border-t border-gray-100 px-4 py-2.5 text-left transition-colors first:border-t-0 cursor-pointer text-[14px] ${
              selected
                ? "bg-[#F3EDFF] font-medium text-[#5B0AFF]"
                : "text-[#1F2937] hover:bg-[#F3EDFF] hover:text-[#5B0AFF]"
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  </div>
)}
    </div>
  );
};





const Waitlist = () => {
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [practiceName, setPracticeName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [practiceSize, setPracticeSize] = useState("");
  const [selectedChallenges, setSelectedChallenges] = useState<Challenge[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleChallenge = (challenge: Challenge) => {
    setSelectedChallenges((prev) =>
      prev.includes(challenge)
        ? prev.filter((c) => c !== challenge)
        : [...prev, challenge]
    );
  };

  // Validate email
const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(workEmail);

// Check whether the form is complete
const isFormComplete =
  fullName.trim() !== "" &&
  role.trim() !== "" &&
  isValidEmail &&
  practiceName.trim() !== "" &&
  specialty.trim() !== "" &&
  practiceSize.trim() !== "" &&
  selectedChallenges.length > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    setSubmitted(true);
  
    if (!isFormComplete) return;
  
    console.log({
      fullName,
      role,
      workEmail,
      practiceName,
      specialty,
      practiceSize,
      selectedChallenges,
    });
  };

  

  return (
    
    <div className="min-h-screen bg-white font-manrope max-sm:pb-10">
      {/* Top nav */}
      <header className="fixed flex h-20 items-center justify-between border-b border-gray-200 px-6 sm:px-10 top-0 w-full z-50 bg-white">
        {/* Hamburger — mobile only */}
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="text-black sm:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm font-medium text-[#6B7280] sm:flex ml-14">
          <a href="/" className="flex items-center gap-1 ">
            Home <ChevronRight className="h-4 w-4 text-[#6B7280]" />
          </a>
          <a href="#" className="flex items-center gap-1 ">
            Contact Us <ChevronRight className="h-4 w-4 text-[#6B7280]" />
          </a>
        </nav>

        {/* Logo — always centered, at every breakpoint */}
        <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2">
            {Icons.waitlistLogo}
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-60 sm:hidden">
          {/* Dimmed backdrop over the page content */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Menu panel */}
          <div className="relative bg-white shadow-lg">
            <div className="relative flex h-20 items-center justify-between border-b border-[#E5E7F7] px-6">
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="text-gray-900"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2">
              {Icons.waitlistLogo}
              </div>
            </div>

            <nav className="flex flex-col">
              <a
                href="/"
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#E5E7F7] px-6 py-6 text-lg text-gray-900"
              >
                Home
              </a>
              <a
                href="#"
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#E5E7F7] px-6 py-6 text-lg text-gray-900"
              >
                Contact Us
              </a>
            </nav>
          </div>
        </div>
      )}

      {/* Hides the webkit/firefox scrollbar on the right column's scroll
          container while keeping it scrollable. */}
      {/* <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style> */}

<style>{`
  .hide-scrollbar::-webkit-scrollbar { display: none; }
  .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

  .dropdown-scrollbar::-webkit-scrollbar {
    width: 1px;
  }
  .dropdown-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }
  .dropdown-scrollbar::-webkit-scrollbar-thumb {
    background-color: #F3EDFF;
    border-radius: 9999px;
  }
  .dropdown-scrollbar::-webkit-scrollbar-thumb:hover {
    background-color: #E5D9FF;
  }
  .dropdown-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #EFEFEF transparent;
    
  }
`}</style>

      {/* Content */}

      <div className="mx-auto grid max-w-7xl grid-cols-1 pt-20 lg:h-[calc(100vh-5rem)] lg:grid-cols-2 lg:divide-x lg:divide-gray-200">     
      {/* Left column */}
<div className="hidden px-6 lg:sticky lg:top-0 lg:flex lg:h-[calc(100vh-5rem)] lg:self-start lg:flex-col lg:justify-start lg:pt-14 lg:overflow-hidden">

<span className="text-[#171F2A] text-[12px] rounded-full border border-[#5B0AFF] font-manrope w-29 h-7 items-center flex justify-center  text-sm font-medium">
  Early access
</span>

<h1 className="mt-2 text-[34px] font-cal-sans font-normal leading-tight text-[#171F2A] sm:text-[35px] w-110">
  Be the first practice{" "}
  <span className="text-[#5B0AFF]">Sernio</span> goes live with.
</h1>

<ul className="mt-10 space-y-8">
  {PERKS.map((perk) => (
    <div key={perk.title}>
      <li className="flex gap-3">
        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded bg-[#5B0AFF]">
          <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
        </span>
        <div>
          <p className="font-semibold font-manrope text-[16px] text-[#171F2A]">{perk.title}</p>
        </div>
      </li>
      <p className="mt-1 text-[14px] font-manrope text-[#6B7280] w-120">{perk.description}</p>
    </div>
  ))}
</ul>
</div>
        {/* Right column */}
  
       <div className="hide-scrollbar px-6 sm:px-10 max-sm:mt-5 lg:px-20 lg:overflow-y-auto md:pt-14 lg:pb-14">
          <h2 className="text-3xl font-normal font-cal-sans text-[#171F2A] sm:text-4xl">
            Reserve your spot
          </h2>
          <p className="mt-1 leading-6 max-w-md text-[#6B7280] text-[14px] font-manrope font-normal">
            Takes under 2 minutes. Your answers help us match you to the right
            cohort and configure Sernio for your specialty before day one.
          </p>

          {/* Avatar stack */}
          <div className="mt-6 flex -space-x-1">
            {AVATARS.map((avatar) => (
              <span
                key={avatar.id}
                className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full text-sm font-semibold text-white "
                style={!avatar.src && avatar.bg ? { backgroundColor: avatar.bg } : undefined}
              >
                {avatar.src ? (
                  <img src={avatar.src} alt="" className="h-full w-full object-cover" />
                ) : (
                  avatar.initials
                )}
              </span>
            ))}
         </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm font-semibold font-manrope text-[#1F2937]"
                >
                  Full name<span className="text-[#1F2937]">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Ex. Amara Johnson"
                  className="w-full rounded-lg border border-[#94A3B8] text-[14px] px-4 py-2.5 placeholder-[#9498B8] caret-[#5B0AFF] text-[#1F2937] outline-none  focus:border-[#5B0AFF] "
                />
              </div>

              <div>
                <label
                  htmlFor="role"
                  className="mb-2 block text-sm font-semibold font-manrope text-[#1F2937]"
                >
                  Your role<span className="text-[#1F2937]">*</span>
                </label>
                <Dropdown
                  id="role"
                  placeholder="Select your role"
                  options={ROLE_OPTIONS}
                  value={role}
                  onChange={setRole}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="workEmail"
                className="mb-2 block text-sm font-semibold font-manrope text-[#1F2937]"
              >
                Work email<span className="text-[#1F2937]">*</span>
              </label>

              <input
                id="workEmail"
                type="email"
                required
                value={workEmail}
                onChange={(e) => setWorkEmail(e.target.value)}
                placeholder="Ex. you@yourpractice.com"
                className={`w-full rounded-lg border px-4 py-2.5 text-[14px] outline-none transition-colors
                  ${
                    workEmail.length === 0
                      ? "border-[#94A3B8]"
                      : isValidEmail
                      ? "border-[#5B0AFF]"
                      : "border-red-500"
                  }
                  placeholder-[#9498B8]
                  caret-[#5B0AFF]
                  text-[#1F2937]
                  focus:border-[#5B0AFF]
                `}
              />

              {submitted && workEmail && !isValidEmail && (
                <p className="mt-2 text-sm text-red-500">
                  Please enter a valid work email.
                </p>
              )}

              <p className="mt-2 text-sm text-[#606671] font-manrope">
                Use your practice email — we'll send confirmation and updates here.
              </p>
            </div>

            <div>
              <label
                htmlFor="practiceName"
                className="mb-2 block text-sm font-semibold font-manrope text-[#1F2937]"
              >
                Practice / hospital name<span className="text-[#1F2937]">*</span>
              </label>
              <input
                id="practiceName"
                type="text"
                required
                value={practiceName}
                onChange={(e) => setPracticeName(e.target.value)}
                placeholder="Ex. Westbrook Dental Care"
                className="w-full rounded-lg border border-[#94A3B8] text-[14px] px-4 py-2.5 placeholder-[#9498B8] caret-[#5B0AFF] text-[#1F2937] outline-none  focus:border-[#5B0AFF] "
                />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="specialty"
                  className="mb-2 block text-sm font-semibold font-manrope text-[#1F2937]"
                >
                  Specialty<span className="text-[#1F2937]">*</span>
                </label>
                <Dropdown
                  id="specialty"
                  placeholder="Select specialty"
                  options={SPECIALTY_OPTIONS}
                  value={specialty}
                  onChange={setSpecialty}
                />
              </div>

              <div>
                <label
                  htmlFor="practiceSize"
                  className="mb-2 block text-sm font-semibold font-manrope text-[#1F2937]"
                >
                  Practice size<span className="text-[#1F2937]">*</span>
                </label>
                <Dropdown
                  id="practiceSize"
                  placeholder="Practitioners"
                  options={PRACTICE_SIZE_OPTIONS}
                  value={practiceSize}
                  onChange={setPracticeSize}
                />
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold font-manrope text-[#1F2937]">
                Biggest phone challenge right now
                <span className="text-[#1F2937]">*</span>
              </p>
              <p className="mt-1 font-manrope font-normal text-sm text-[#606671]">Select all that apply.</p>

              <div className="mt-4 flex flex-wrap gap-3">
                {CHALLENGES.map((challenge) => {
                  const selected = selectedChallenges.includes(challenge);
                  return (
                    <button
                      key={challenge}
                      type="button"
                      onClick={() => toggleChallenge(challenge)}
                      aria-pressed={selected}
                      className={`rounded-full cursor-pointer px-4 py-2 text-[13px] font-normal font-manrope transition-colors ${
                        selected
                          ? " bg-[#F3EDFF] text-[#5B0AFF]"
                          : "bg-[#F7F7F8] text-[#606671] hover:border-gray-300"
                      }`}
                    >
                      {challenge}
                    </button>
                  );
                })}
              </div>
            </div>

            <button
                type="submit"
                disabled={!isFormComplete}
                className={`w-full rounded-lg px-6 py-2.5 text-[14px] font-medium text-white transition-all duration-200 focus:outline-none
                  ${
                    isFormComplete
                      ? "bg-[#5B0AFF] hover:bg-[#4D08D9] cursor-pointer"
                      : "bg-[#9B6AFF] opacity-70 cursor-not-allowed"
                  }
                `}
              >
                Reserve my spot
              </button>
          </form>

          <p className="text-[#606671] mt-10 text-sm font-manrope font-normal text-center lg:px-15">No payment. No commitment. We'll reach out personally when your cohort is ready.</p>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;