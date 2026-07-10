import { useCallback, useState } from "react";
import MissedCallsCalculator from "./MissedCallsCalculator";
import ResultsPanel from "./ResultsPanel";

export default function CostCalculatorSection() {
    const [missedCalls, setMissedCalls] = useState(15);
    const [visitValue, setVisitValue] = useState(120);

    const handleValuesChange = useCallback(
        (values: { missedCalls: number; visitValue: number }) => {
            setMissedCalls(values.missedCalls);
            setVisitValue(values.visitValue);
        },
        []
    );

    return (
        <div className="flex justify-center items-center mt-15">
            <div className="w-253 h-116.75 border border-[#5B0AFF] rounded-tl-3xl rounded-tr-3xl border-b-0 flex flex-row">
                <MissedCallsCalculator onValuesChange={handleValuesChange} />
                <ResultsPanel missedCalls={missedCalls} visitValue={visitValue} />
            </div>
        </div>
    );
}