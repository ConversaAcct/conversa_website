// useNavbarTheme.ts
import { useEffect, useState } from "react";

export const useNavbarTheme = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const sections = document.querySelectorAll("[data-navbar-theme]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const theme = entry.target.getAttribute("data-navbar-theme");
                        setIsDark(theme === "dark");
                    }
                });
            },
            {
                rootMargin: "-1px 0px -95% 0px", 
                threshold: 0,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return isDark;
};