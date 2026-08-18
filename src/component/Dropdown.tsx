import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { DropdownProps } from "../interface/props";


  
  
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

  export default Dropdown;