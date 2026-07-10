import { useEffect, useState } from "react";
import type { NumberFieldProps } from "../interface/props";

function NumberField({ label, value, onChange, step = 1, min = 0 }: NumberFieldProps) {
    const increment = () => onChange(value + step);
    const decrement = () => onChange(Math.max(min, value - step));

    return (
        <div className="flex flex-col gap-3">
            <label className="font-manrope text-[#C2BBD0] text-[15px]">{label}</label>
            <div className="flex items-center justify-between border border-[#2E2A45] rounded-xl px-6 py-3 focus-within:border-[#5B0AFF] transition-colors">
                <input
                    type="number"
                    value={value}
                    min={min}
                    onChange={(e) => onChange(Number(e.target.value))}
                    className="font-manrope text-[#FFFFFF] text-[20px] bg-transparent outline-none w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <div className="flex flex-col shrink-0">
                    <button
                        type="button"
                        onClick={increment}
                        aria-label={`Increase ${label}`}
                        className="text-[#A3A0B0] hover:text-[#FFFFFF] transition-colors"
                    >
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                            <path d="M1 6L6 1L11 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button
                        type="button"
                        onClick={decrement}
                        aria-label={`Decrease ${label}`}
                        className="text-[#A3A0B0] hover:text-[#FFFFFF] transition-colors mt-1"
                    >
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                            <path d="M1 2L6 7L11 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

interface MissedCallsCalculatorProps {
    onValuesChange?: (values: { missedCalls: number; visitValue: number }) => void;
}

export default function MissedCallsCalculator({ onValuesChange }: MissedCallsCalculatorProps = {}) {
    const [missedCalls, setMissedCalls] = useState(15);
    const [visitValue, setVisitValue] = useState(120);

    useEffect(() => {
        onValuesChange?.({ missedCalls, visitValue });
    }, [missedCalls, visitValue, onValuesChange]);

    return (
        <div className="px-5 md:px-10 py-10 rounded-3xl max-w-130">
            <div className="pb-10">
                <h3 className="font-manrope text-[#FFFFFF] text-[28px] leading-tight font-semibold">
                    See what missed calls might be costing you
                </h3>
            </div>

            <div className="flex flex-col gap-8 ">
                <NumberField
                    label="Missed or unanswered calls per week"
                    value={missedCalls}
                    onChange={setMissedCalls}
                />
                <NumberField
                    label="Average value of a booked visit"
                    value={visitValue}
                    onChange={setVisitValue}
                    step={10}
                />
            </div>

            <p className="font-manrope text-[#C2BBD0] text-[14px] leading-relaxed pt-5">
                Illustrative estimate based on the numbers you enter — actual impact varies by practice.
            </p>
        </div>
    );
}