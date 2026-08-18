import { useEffect, useRef, useState } from "react";
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
import type { CountryDropdownProps } from "../interface/props";
import { ChevronDown, ChevronUp } from "lucide-react";


const FEATURED_COUNTRY = "United States";


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

const FLAG_IMG_CLASS = "h-7 w-9 shrink-0 rounded-[3px] object-cover";


  
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
export default CountryDropdown;  