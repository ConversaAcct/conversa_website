import type { FeatureProps } from "../../interface/props";



const Tag = ({ children, isDark = false }: FeatureProps) => (
    <span
        className={`inline-block w-fit font-manrope rounded-full border border-[#5B0AFF] px-5 py-2 text-[12px] lg:px-6 lg:text-base ${
            isDark ? "text-[#171F2A]" : "text-white"
        }`}
    >
        {children}
    </span>
);

export default Tag;