import type { ResultsPanelProps } from "../interface/props";

const WEEKS_PER_MONTH = 52 / 12;

function formatCurrency(value: number) {
    return `$${Math.round(value).toLocaleString("en-US")}`;
}

export default function ResultsPanel({ missedCalls, visitValue }: ResultsPanelProps) {
    const weeklyRevenue = missedCalls * visitValue;
    const monthlyRevenue = weeklyRevenue * WEEKS_PER_MONTH;
    const yearlyRevenue = weeklyRevenue * 52;

    return (
        <div className="md:relative flex-1 bg-[#1A182C] w-full md:rounded-tr-3xl lg:px-20 px-5 py-10 flex flex-col justify-center overflow-hidden">
          

            <p className="font-manrope text-[#C2BBD0] text-[15px] leading-snug">
                Estimated revenue at risk,
                <br />
                per month
            </p>

            <p className="font-manrope text-[#FFFFFF] text-[55px] font-bold leading-none pt-6 pb-6 tabular-nums">
                {formatCurrency(monthlyRevenue)}
            </p>

            <p className="font-manrope text-[#C2BBD0] text-[15px] leading-snug">
                That's roughly {formatCurrency(yearlyRevenue)} a year
                <br />
                sitting on hold.
            </p>
        </div>
    );
}