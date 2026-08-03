import { useEffect, useRef, useState } from "react";
import { ChevronRight, ChevronDown, ChevronUp, Check, Menu, X } from "lucide-react";
import Icons from "../assets/Icons";

type Challenge =
  | "Missed calls after hours"
  | "Front desk overwhelmed at peak"
  | "Appointment no-shows"
  | "Insurance verification calls"
  | "Patient follow-up calls"
  | "Slow handling of urgent calls";

const CHALLENGES: Challenge[] = [
  "Missed calls after hours",
  "Front desk overwhelmed at peak",
  "Appointment no-shows",
  "Insurance verification calls",
  "Patient follow-up calls",
  "Slow handling of urgent calls",
];

const AVATARS = [
  { id: 1, src: "https://i.pravatar.cc/64?img=12" },
  { id: 2, src: "https://i.pravatar.cc/64?img=13" },
  { id: 3, src: "https://i.pravatar.cc/64?img=14" },
  { id: 4, initials: "E" },
  { id: 5, src: "https://i.pravatar.cc/64?img=15" },
  { id: 6, initials: "W" },
  { id: 7, src: "https://i.pravatar.cc/64?img=16" },
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
];

const SPECIALTY_OPTIONS = [
  "Dental",
  "Dermatology",
  "Pediatrics",
  "Primary Care",
  "Physical Therapy",
];

const PRACTICE_SIZE_OPTIONS = [
  "Practitioners",
  "1–5 practitioners",
  "6–20 practitioners",
  "21–50 practitioners",
  "50+ practitioners",
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
        className={`flex w-full items-center justify-between rounded-xl border bg-white px-4 py-3 text-left outline-none transition-colors ${
          open
            ? "border-violet-500 ring-2 ring-violet-500"
            : "border-gray-200 hover:border-gray-300"
        } ${value ? "text-gray-900" : "text-gray-400"}`}
      >
        <span>{value || placeholder}</span>
        {open ? (
          <ChevronUp className="h-5 w-5 shrink-0 text-gray-400" />
        ) : (
          <ChevronDown className="h-5 w-5 shrink-0 text-gray-400" />
        )}
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute z-10 mt-2 w-full overflow-hidden rounded-xl border border-gray-100 bg-white py-2 shadow-xl"
        >
          <div className="px-4 py-2.5 text-gray-400">{placeholder}</div>
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
                className={`flex w-full items-center justify-between border-t border-gray-100 px-4 py-2.5 text-left transition-colors first:border-t-0 ${
                  selected
                    ? "bg-violet-50 font-medium text-violet-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {option}
                {selected && <Check className="h-4 w-4 text-violet-600" />}
              </button>
            );
          })}
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Wire up submission logic here.
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
    <div className="min-h-screen bg-white font-manrope">
      {/* Top nav */}
      <header className="fixed flex h-20 items-center justify-between border-b border-gray-200 px-6 sm:px-10 top-0 w-full z-50 bg-white">
        {/* Hamburger — mobile only */}
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="text-gray-900 sm:hidden"
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
            <div className="relative flex h-20 items-center justify-between border-b border-gray-200 px-6">
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="text-gray-900"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2">
                <span className="inline-block h-7 w-7 rounded-full bg-linear-to-br from-violet-500 to-indigo-600" />
                <span className="text-xl font-bold text-gray-900">Sernio</span>
              </div>
            </div>

            <nav className="flex flex-col">
              <a
                href="/"
                onClick={() => setMenuOpen(false)}
                className="border-b border-gray-100 px-6 py-6 text-lg text-gray-900"
              >
                Home
              </a>
              <a
                href="#"
                onClick={() => setMenuOpen(false)}
                className="border-b border-gray-100 px-6 py-6 text-lg text-gray-900"
              >
                Contact Us
              </a>
            </nav>
          </div>
        </div>
      )}

      {/* Hides the webkit/firefox scrollbar on the right column's scroll
          container while keeping it scrollable. */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Content */}

      <div className="mx-auto grid max-w-7xl grid-cols-1 pt-20 lg:h-[calc(100vh-5rem)] lg:grid-cols-2 lg:divide-x lg:divide-gray-200">     
           {/* Left column */}
     
      <div className="hidden px-6 lg:sticky lg:top-0 lg:flex lg:h-[calc(100vh-5rem)] lg:self-start lg:flex-col lg:justify-center lg:overflow-hidden ">         
        
         <span className="text-[#171F2A] rounded-full border border-[#5B0AFF] w-34.75 h-8.75 items-center flex justify-center px-4 py-1.5 text-sm font-medium ">
            Early access
          </span>

          <h1 className="mt-6 text-[34px] font-cal-sans leading-tight text-[#171F2A] sm:text-[36px] w-110">
            Be the first practice{" "}
            <span className="text-[#5B0AFF]">Sernio</span> goes live with.
          </h1>

          <ul className="mt-10 space-y-8">
            {PERKS.map((perk) => (
                <div>
              <li key={perk.title} className="flex gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#5B0AFF]">
                  <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                </span>
                <div>
                  <p className="font-semibold text-[16px] text-[#171F2A]">{perk.title}</p>
                 
                </div>
              </li>
               <p className="mt-1 text-[14px] text-[#6B7280]">{perk.description}</p>
               </div>
            ))}
          </ul>
        </div>

        {/* Right column */}
  
       <div className="hide-scrollbar px-6 sm:px-10 lg:overflow-y-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Reserve your spot
          </h2>
          <p className="mt-3 max-w-md text-gray-500">
            Takes under 2 minutes. Your answers help us match you to the right
            cohort and configure Sernio for your specialty before day one.
          </p>

          {/* Avatar stack */}
          <div className="mt-6 flex -space-x-3">
            {AVATARS.map((avatar) => (
              <span
                key={avatar.id}
                className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-gray-900 text-sm font-semibold text-white"
              >
                {avatar.src ? (

                  <img
                    src={avatar.src}
                    alt=""
                    className="h-full w-full object-cover"
                  />
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
                  className="mb-2 block text-sm font-semibold text-gray-900"
                >
                  Full name<span className="text-violet-600">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Ex. Amara Johnson"
                  className="w-full rounded-xl border border-violet-400 px-4 py-3 text-gray-900 placeholder-gray-400 outline-none ring-violet-500 focus:border-violet-500 focus:ring-2"
                />
              </div>

              <div>
                <label
                  htmlFor="role"
                  className="mb-2 block text-sm font-semibold text-gray-900"
                >
                  Your role<span className="text-violet-600">*</span>
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
                className="mb-2 block text-sm font-semibold text-gray-900"
              >
                Work email<span className="text-violet-600">*</span>
              </label>
              <input
                id="workEmail"
                type="email"
                required
                value={workEmail}
                onChange={(e) => setWorkEmail(e.target.value)}
                placeholder="Ex. you@yourpractice.com"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-400 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500"
              />
              <p className="mt-2 text-sm text-gray-500">
                Use your practice email — we&apos;ll send confirmation and
                updates here.
              </p>
            </div>

            <div>
              <label
                htmlFor="practiceName"
                className="mb-2 block text-sm font-semibold text-gray-900"
              >
                Practice / hospital name<span className="text-violet-600">*</span>
              </label>
              <input
                id="practiceName"
                type="text"
                required
                value={practiceName}
                onChange={(e) => setPracticeName(e.target.value)}
                placeholder="Ex. Westbrook Dental Care"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-400 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="specialty"
                  className="mb-2 block text-sm font-semibold text-gray-900"
                >
                  Specialty<span className="text-violet-600">*</span>
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
                  className="mb-2 block text-sm font-semibold text-gray-900"
                >
                  Practice size<span className="text-violet-600">*</span>
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
              <p className="text-sm font-semibold text-gray-900">
                Biggest phone challenge right now
                <span className="text-violet-600">*</span>
              </p>
              <p className="mt-1 text-sm text-gray-500">Select all that apply.</p>

              <div className="mt-4 flex flex-wrap gap-3">
                {CHALLENGES.map((challenge) => {
                  const selected = selectedChallenges.includes(challenge);
                  return (
                    <button
                      key={challenge}
                      type="button"
                      onClick={() => toggleChallenge(challenge)}
                      aria-pressed={selected}
                      className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                        selected
                          ? "border-violet-600 bg-violet-50 text-violet-700"
                          : "border-gray-200 bg-gray-50 text-gray-700 hover:border-gray-300"
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
              className="w-full rounded-xl bg-violet-600 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 sm:w-auto"
            >
              Reserve my spot
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;