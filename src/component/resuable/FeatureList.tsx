import type { FeatureListProps } from "../../interface/props";


const ArrowIcon = ({ isDark = false }: { isDark?: boolean }) => (
    <svg
        className={`mt-1 h-4 w-4 shrink-0 ${isDark ? "text-violet-300" : "text-violet-600"}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
);

const FeatureList = ({ items, isDark = false }: FeatureListProps) => (
    <ul className="mt-8 space-y-4">
        {items.map((item) => (
            <li
                key={item}
                className={`flex items-start gap-3 font-manrope text-base lg:text-lg ${
                    isDark ? "text-[#F3EDFF]" : "text-[#6B7280]"
                }`}
            >
                <ArrowIcon isDark={isDark} />
                <span>{item}</span>
            </li>
        ))}
    </ul>
);

export default FeatureList;