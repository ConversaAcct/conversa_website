import { useEffect, useState } from "react";
import type { NumberFieldProps } from "../interface/props";

function NumberField({ label, value, onChange, step = 1, min = 0 }: NumberFieldProps) {
    const increment = () => onChange(value + step);
    const decrement = () => onChange(Math.max(min, value - step));

    return (
        <div className="flex flex-col gap-3">
            <label className="font-manrope text-[#C2BBD0] text-[14px]">{label}</label>
            <div className="flex items-center justify-between border border-[#2E2A45] rounded-lg px-6 py-2.5 focus-within:border-[#5B0AFF] transition-colors">
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
                       <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.9485 10.5469H7.79512H4.05512C3.41512 10.5469 3.09512 9.77354 3.54845 9.32021L7.00179 5.86688C7.55512 5.31354 8.45512 5.31354 9.00845 5.86688L10.3218 7.18021L12.4618 9.32021C12.9085 9.77354 12.5885 10.5469 11.9485 10.5469Z" fill="#C2BBD0"/>
                        </svg>

                    </button>
                    <button
                        type="button"
                        onClick={decrement}
                        aria-label={`Decrease ${label}`}
                        className="text-[#A3A0B0] hover:text-[#FFFFFF] transition-colors "
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.9485 5.45312H7.79512H4.05512C3.41512 5.45312 3.09512 6.22646 3.54845 6.67979L7.00179 10.1331C7.55512 10.6865 8.45512 10.6865 9.00845 10.1331L10.3218 8.81979L12.4618 6.67979C12.9085 6.22646 12.5885 5.45312 11.9485 5.45312Z" fill="#C2BBD0"/>
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
        <div className="px-5 md:px-10 py-10 rounded-3xl max-w-115">
            <div className="pb-10">
                <h3 className="font-manrope text-[#FFFFFF] text-[25px] leading-tight font-semibold">
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