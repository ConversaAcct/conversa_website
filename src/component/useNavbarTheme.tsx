// useNavbarTheme.ts
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Vertical middle of the navbar in px (my-8 = 32px + about half the bar height)
const PROBE_Y = 60;

export const useNavbarTheme = () => {
    const { pathname } = useLocation();
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        let frame = 0;

        const update = () => {
            const sections = document.querySelectorAll<HTMLElement>("[data-navbar-theme]");
            let theme: string | undefined;

            sections.forEach((el) => {
                const { top, bottom } = el.getBoundingClientRect();
                if (top <= PROBE_Y && bottom > PROBE_Y) {
                    theme = el.dataset.navbarTheme; // the section under the navbar
                }
            });

            if (theme) setIsDark(theme === "dark");
        };

        const schedule = () => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(update);
        };

        update();
        schedule(); // check again once the new page has painted

        window.addEventListener("scroll", schedule, { passive: true });
        window.addEventListener("resize", schedule);

        // catches layout shifts from images, fonts, lazy content
        const resizeObserver = new ResizeObserver(schedule);
        resizeObserver.observe(document.body);

        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("scroll", schedule);
            window.removeEventListener("resize", schedule);
            resizeObserver.disconnect();
        };
    }, [pathname]); // re-run on every route change

    return isDark;
};