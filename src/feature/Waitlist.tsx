import { useEffect, useRef, useState ,type ChangeEvent } from "react";
import { ChevronRight, ChevronDown, ChevronUp, Check, Menu, X } from "lucide-react";
import Icons from "../assets/Icons";
import avatar1 from "../assets/waitlist/image (16).svg"
import avatar2 from "../assets/waitlist/7 (1).svg"
import avatar3 from "../assets/waitlist/2 (5).svg"
import avatar4 from "../assets/waitlist/3 (5).svg"
import avatar5 from "../assets/waitlist/5 (3).svg"
import axios from "axios";
import usaFlag from "../assets/country/Mask group (9).svg";
import australiaFlag from "../assets/country/Mask group (10).svg";
import brazilFlag from "../assets/country/flag (13).svg"
import canadaFlag from "../assets/country/Mask group (11).svg"
import franceFlag from "../assets/country/Mask group (12).svg"
import germanyFlag from "../assets/country/Mask group (13).svg"
import irelandFlag from "../assets/country/flag (14).svg"
import japanFlag from "../assets/country/flag (15).svg"
import netherlandsFlag from "../assets/country/flag (16).svg"
import newZealandFlag from "../assets/country/flag (17).svg"
import saudiArabiaFlag from "../assets/country/flag (18).svg"
import singaporeFlag from "../assets/country/flag (19).svg"
import southAfricaFlag from "../assets/country/Mask group (14).svg"
import switzerlandFlag from "../assets/country/flag (20).svg"
import uaeFlag from "../assets/country/Mask group (15).svg"
import ukFlag from "../assets/country/Mask group (16).svg"



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
  { id: 1, src: avatar1 },
  { id: 2, src: avatar3 },
  { id: 3, src: avatar4 },
  { id: 4, initials: "E", bg: "#5B0AFF" },
  { id: 5, src: avatar5 },
  { id: 6, initials: "W", bg: "#171F2A" },
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
  "1-5 Practitioners",
  "6-15 Practitioners",
  "16-50 Practitioners",
  "51-100 Practitioners",
  "100+ Practitioners"
];

const COUNTRY_OPTIONS = [
  "Australia",
  "Brazil",
  "Canada",
  "France",
  "Germany",
  "Ireland",
  "Japan",
  "Netherlands",
  "New Zealand",
  "Saudi Arabia",
  "Singapore",
  "South Africa",
  "Switzerland",
  "United Arab Emirates",
  "United Kingdom",
  "Other"
];

// The country that's pinned above the "Also available in" divider.
const FEATURED_COUNTRY = "United States";

// Imported SVG flags, keyed by country name.
const FLAGS: Record<string, string> = {
  "United States": usaFlag,
  Australia: australiaFlag,
  Brazil: brazilFlag,
  Canada: canadaFlag,
  France: franceFlag,
  Germany: germanyFlag,
  Ireland: irelandFlag,
  Japan: japanFlag,
  Netherlands: netherlandsFlag,
  "New Zealand": newZealandFlag,
  "Saudi Arabia": saudiArabiaFlag,
  Singapore: singaporeFlag,
  "South Africa": southAfricaFlag,
  Switzerland: switzerlandFlag,
  "United Arab Emirates": uaeFlag,
  "United Kingdom": ukFlag,
};

// Shared sizing/shape for every flag image so the trigger, the pinned
// featured row, and the list rows all line up.
const FLAG_IMG_CLASS = "h-7 w-9 shrink-0 rounded-[3px] object-cover";

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
  name : string;
  onChange: (value: string) => void;
};



const Dropdown = ({ id, placeholder, options, value, name, onChange }: DropdownProps) => {
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
        name={name}
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`flex w-full items-center justify-between text-[14px] rounded-lg border bg-white px-4 py-2.5 text-left outline-none transition-colors ${open
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
                  className={`flex w-full items-center justify-between border-t border-gray-100 px-4 py-2.5 text-left transition-colors first:border-t-0 cursor-pointer text-[14px] ${selected
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

/**
 * Country-specific dropdown: pins FEATURED_COUNTRY at the top (highlighted
 * whenever it's selected), then an "Also available in" section label, then
 * the rest of the list with a flag emoji next to each name. "Other" is
 * rendered last, without a flag, matching the reference design.
 */
type CountryDropdownProps = {
  id: string;
  placeholder: string;
  options: string[];
  value: string;
  name: string;
  onChange: (value: string) => void;
};

const CountryDropdown = ({
  id,
  placeholder,
  options,
  value,
  name,
  onChange,
}: CountryDropdownProps) => {
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

  const hasOther = options.includes("Other");
  const restOptions = options.filter(
    (option) => option !== FEATURED_COUNTRY && option !== "Other"
  );

  return (
    <div ref={containerRef} className="relative">
      <button
        id={id}
        type="button"
        name={name}
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`flex w-full h-11 items-center justify-between text-[14px] rounded-lg border bg-white px-4  text-left outline-none transition-colors ${open
          ? "border-violet-500 focus:border-[#5B0AFF]"
          : "border-[#94A3B8]"
          } ${value ? "text-[#1F2937]" : "text-[#9498B8]"}`}
      >
        <span className="flex items-center gap-2">
          {value && FLAGS[value] && (
            <img src={FLAGS[value]} alt="" className={FLAG_IMG_CLASS} />
          )}
          {value || placeholder}
        </span>
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
            {/* Pinned featured country */}
            <button
              type="button"
              role="option"
              aria-selected={value === FEATURED_COUNTRY}
              onClick={() => {
                onChange(FEATURED_COUNTRY);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-[14px] transition-colors cursor-pointer ${value === FEATURED_COUNTRY
                ? "bg-[#F3EDFF] font-medium text-[#5B0AFF]"
                : "text-[#1F2937] hover:bg-[#F3EDFF] hover:text-[#5B0AFF]"
                }`}
            >
              <img
                src={FLAGS[FEATURED_COUNTRY]}
                alt=""
                className={FLAG_IMG_CLASS}
              />
              {FEATURED_COUNTRY}
            </button>

            <div className="border-t border-gray-100 px-4 py-2.5 text-[12px] text-[#9498B8]">
              Also available in
            </div>

            {restOptions.map((option) => {
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
                  className={`flex w-full items-center gap-3 border-t border-gray-100 px-4 py-2.5 text-left transition-colors cursor-pointer text-[14px] ${selected
                    ? "bg-[#F3EDFF] font-medium text-[#5B0AFF]"
                    : "text-[#1F2937] hover:bg-[#F3EDFF] hover:text-[#5B0AFF]"
                    }`}
                >
                  <img src={FLAGS[option]} alt="" className={FLAG_IMG_CLASS} />
                  {option}
                </button>
              );
            })}

            {hasOther && (
              <button
                type="button"
                role="option"
                aria-selected={value === "Other"}
                onClick={() => {
                  onChange("Other");
                  setOpen(false);
                }}
                className={`flex w-full items-center border-t border-gray-100 px-4 py-2.5 text-left transition-colors cursor-pointer text-[14px] ${value === "Other"
                  ? "bg-[#F3EDFF] font-medium text-[#5B0AFF]"
                  : "text-[#1F2937] hover:bg-[#F3EDFF] hover:text-[#5B0AFF]"
                  }`}
              >
                Other
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};



const Waitlist = () => {
 
  const [selectedChallenges, setSelectedChallenges] = useState<Challenge[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [formValues, setFormValues] = useState({
    fullName: "",
    role: "",
    workEmail: "",
    practiceName: "",
    specialty: "",
    country: "",
    practiceSize: "",

  })


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


  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.workEmail);


  const isFormComplete =
 
  formValues.fullName.trim() !== "" &&
  formValues.role.trim() !== "" &&
    isValidEmail &&
  formValues.practiceName.trim() !== "" &&
  formValues.country.trim() !== "" &&
  formValues.specialty.trim() !== "" &&
  formValues.practiceSize.trim() !== "" &&
  selectedChallenges.length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting...");

    setSubmitted(true);

    if (!isFormComplete) return;

    setLoading(true);
    setErrorMessage("");
  
    const payload = {
      name: formValues.fullName,
      role: formValues.role,
      email_address: formValues.workEmail,
      hospital_name: formValues.practiceName,
      country: formValues.country,
      specialty: formValues.specialty,
      number_of_practitioners: formValues.practiceSize,
      challenge: selectedChallenges,
    };

    try {
     await axios.post(
        "https://lowcost-be.onrender.com/v1/api/waitlist",
        payload
      );


  
    
      
      setShowSuccessModal(true);

  
     clearForm()
     

    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setErrorMessage(
          error.response?.data?.error_message ??
          "Something went wrong."
        );
      } else {
        setErrorMessage(
          "Unable to connect to the server. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const handleModalClose = () => {
    setShowSuccessModal(false);
    window.location.href = "/";
  };

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {

    const { name, value } = e.target

    setFormValues( (prevValue) => {
      return {
        ...prevValue,
        [name]: value
      }
    })
  }

  const changeDropdownValue = (name: string, value: string) => {
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const clearForm = () => {
    setFormValues({
      fullName: "",
      role: "",
      workEmail: "",
      practiceName: "",
      specialty: "",
      country: "",
      practiceSize: "",

    });
    setSelectedChallenges([]);
    setSubmitted(false);
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
                  name="fullName"
                  required
                  value={formValues.fullName || ""}
                  onChange={changeValue}
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
                  value={formValues.role || ""}
                  onChange={(value) => changeDropdownValue("role", value)}
                  name="role"
                  
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
                name="workEmail"
                required
                value={formValues.workEmail || ""}
                onChange={changeValue}
                placeholder="Ex. you@yourpractice.com"
                className={`w-full rounded-lg border px-4 py-2.5 text-[14px] outline-none transition-colors
                  ${formValues.workEmail.length === 0
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

              {submitted && formValues.workEmail && !isValidEmail && (
                <p className="mt-2 text-sm text-red-500">
                  Please enter a valid work email.
                </p>
              )}

              <p className="mt-2 text-sm text-[#606671] font-manrope">
                Use your practice email — we'll send confirmation and updates here.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
                  name="practiceName"
                  required
                  value={formValues.practiceName || ""}
                  onChange={changeValue}
                  placeholder="Ex. Westbrook Dental Care"
                  className="w-full rounded-lg border border-[#94A3B8] text-[14px] px-4 py-2.5 placeholder-[#9498B8] caret-[#5B0AFF] text-[#1F2937] outline-none  focus:border-[#5B0AFF] "
                />
              </div>

              <div>
                <label
                  htmlFor="country"
                  className="mb-2 block text-sm font-semibold font-manrope text-[#1F2937]"
                >
                  Country*
                </label>
                <CountryDropdown
                  id="country"
                  placeholder="Select a country"
                  options={COUNTRY_OPTIONS}
                  value={formValues.country || ""}
                  onChange={(value) => changeDropdownValue("country", value)}
                  name="country"
                  
                />
              </div>
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
                  value={formValues.specialty || ""}
                  onChange={(value) => changeDropdownValue("specialty", value)}
                  name="specialty"
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
                  value={formValues.practiceSize || ""}
                  onChange={(value) => changeDropdownValue("practiceSize", value)}
                  name="practiceSize"
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
                      className={`rounded-full cursor-pointer px-4 py-2 text-[13px] font-normal font-manrope transition-colors ${selected
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
              disabled={!isFormComplete || loading}
              className={`w-full rounded-lg px-6 py-2.5 text-[14px] font-medium text-white transition-all duration-200
                ${isFormComplete && !loading
                  ? "bg-[#5B0AFF] hover:bg-[#4D08D9] cursor-pointer"
                  : "bg-[#9B6AFF] opacity-70 cursor-not-allowed"
                }`}
            >
              {loading ? "Reserving..." : "Reserve my spot"}
            </button>

          </form>


          {showSuccessModal && (
                <div className="fixed inset-0 z-100 flex items-center justify-center px-6">
                  <div
                    className="absolute inset-0 bg-black/50"
                    onClick={handleModalClose}
                    aria-hidden="true"
                  />
                  <div className="relative w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-xl">
                    <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F3EDFF]">
                      <Check className="h-7 w-7 text-[#5B0AFF]" strokeWidth={3} />
                    </span>

                    <h3 className="mt-5 font-cal-sans text-xl font-normal text-[#171F2A]">
                      Registration successful
                    </h3>

                    <p className="mt-2 text-sm font-manrope text-[#6B7280]">
                      You're on the waitlist. A confirmation email with your details has
                      been sent to your inbox — we'll reach out when your cohort is ready.
                    </p>

                    <button
                      type="button"
                      onClick={handleModalClose}
                      className="mt-6 w-full rounded-lg bg-[#5B0AFF] px-6 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-[#4D08D9] cursor-pointer"
                    >
                      Back to homepage
                    </button>
                  </div>
                </div>
              )}

            {errorMessage && (
              <p className="mt-2 text-center text-red-500 text-[12px] font-medium">
                {errorMessage}
              </p>
            )}

          <p className="text-[#606671] mt-10 text-sm font-manrope font-normal text-center lg:px-15">No payment. No commitment. We'll reach out personally when your cohort is ready.</p>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;