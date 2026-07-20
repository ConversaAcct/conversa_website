import { useEffect, useRef, useState } from "react";

export type BrandItem = {
    icon: React.ReactNode;
    label?: string;
    description?: string;
};

type ScrollRevealBrandsProps = {
    /** defaults to a generic 7-item placeholder set — pass your real logos to override */
    items?: BrandItem[];
    /** which item sits at the raised center of the arc (defaults to the middle item) */
    centerIndex?: number;
};

const PlaceholderBadge = ({ label, bg, color }: { label: string; bg: string; color: string }) => (
    <div
        className="flex items-center justify-center w-9 h-9 rounded-full font-manrope font-bold text-[13px]"
        style={{ backgroundColor: bg, color }}
    >
        {label}
    </div>
);

const defaultItems: BrandItem[] = [
    { icon: <PlaceholderBadge label="T" bg="#EDE9FE" color="#7B3FFF" /> },
    { icon: <PlaceholderBadge label="Ep" bg="#FDE8E8" color="#C81E4A" /> },
    { icon: <PlaceholderBadge label="O" bg="#FEE2E2" color="#EF4444" /> },
    {
        icon: <PlaceholderBadge label="Ah" bg="#EAF7EE" color="#2F9E52" />,
        label: "Athena Health",
        description: "Lorem ipsum dolor sit amet",
    },
    { icon: <PlaceholderBadge label="M" bg="#EDE9FE" color="#6D28D9" /> },
    { icon: <PlaceholderBadge label="dr" bg="#E7F5EC" color="#2E7D42" /> },
    { icon: <PlaceholderBadge label="31" bg="#E8EEFB" color="#3B67D6" /> },
];

/**
 * Pins for one viewport height while the user scrolls through it, and reveals
 * each brand card in order (left → right) as scroll progress advances.
 * Scrolling back up un-reveals them in reverse (right → left), because the
 * whole thing is driven directly off scroll position — there's no separate
 * "state machine", so it's naturally reversible and never gets out of sync
 * with the scrollbar.
 */
const ScrollRevealBrands = ({ items = defaultItems, centerIndex }: ScrollRevealBrandsProps) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);
    const rafRef = useRef<number | null>(null);

    const mid = centerIndex ?? Math.floor(items.length / 2);

    useEffect(() => {
        const handleScroll = () => {
            if (rafRef.current !== null) return;
            rafRef.current = requestAnimationFrame(() => {
                rafRef.current = null;
                const section = sectionRef.current;
                if (!section) return;

                const rect = section.getBoundingClientRect();
                const viewportH = window.innerHeight;
                // total scrollable distance the section travels while pinned
                const scrollable = rect.height - viewportH;
                if (scrollable <= 0) {
                    setProgress(rect.top <= 0 ? 1 : 0);
                    return;
                }
                const raw = (0 - rect.top) / scrollable;
                setProgress(Math.min(1, Math.max(0, raw)));
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    const total = items.length;
    // how far each card sits below the arc's peak, and how much it tilts —
    // symmetric around the center item, mirroring the reference layout
    const arcRadius = 90;
    const maxTilt = 14;

    const centerCard = items[mid];
    const centerRevealAt = mid / Math.max(total - 1, 1);
    const centerVisible = progress >= centerRevealAt - 0.02;

    return (
        <div ref={sectionRef} className="relative" style={{ height: `${100 + total * 60}vh` }}>
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden bg-[#F7F6FC]">
                <div className="flex flex-row items-end gap-5 md:gap-7">
                    {items.map((item, index) => {
                        const angle = ((index - mid) / Math.max(mid, total - 1 - mid)) * maxTilt;
                        const dropY = arcRadius * (1 - Math.cos((angle * Math.PI) / 180));

                        // sequential reveal threshold for this card, left → right
                        const threshold = total > 1 ? index / (total - 1) : 0;
                        const window_ = 1 / total;
                        const localProgress = Math.min(
                            1,
                            Math.max(0, (progress - threshold + window_) / window_)
                        );

                        const enterY = (1 - localProgress) * 50;
                        const opacity = localProgress;
                        const scale = 0.85 + localProgress * 0.15;

                        return (
                            <div
                                key={index}
                                className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white shadow-[0_10px_30px_rgba(30,20,60,0.08)]"
                                style={{
                                    transform: `translateY(${dropY + enterY}px) rotate(${angle}deg) scale(${scale})`,
                                    opacity,
                                    transition: "opacity 0.15s linear",
                                }}
                            >
                                <div style={{ transform: `rotate(${-angle}deg)` }}>{item.icon}</div>
                            </div>
                        );
                    })}
                </div>

                {(centerCard?.label || centerCard?.description) && (
                    <div
                        className="mt-10 text-center transition-opacity duration-300"
                        style={{ opacity: centerVisible ? 1 : 0 }}
                    >
                        {centerCard?.label && (
                            <p className="text-[#171F2A] text-lg font-semibold font-manrope">
                                {centerCard.label}
                            </p>
                        )}
                        {centerCard?.description && (
                            <p className="text-[#9AA0AE] text-sm mt-1 font-manrope">
                                {centerCard.description}
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ScrollRevealBrands;