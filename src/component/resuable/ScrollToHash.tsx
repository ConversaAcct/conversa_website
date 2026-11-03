import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (!hash) {
            window.scrollTo(0, 0);
            return;
        }

        const id = hash.replace("#", "");
        let attempts = 0;

        // Retry briefly: the target may not be mounted yet right after navigation
        const tryScroll = () => {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
            } else if (attempts < 10) {
                attempts++;
                setTimeout(tryScroll, 50);
            }
        };

        tryScroll();
    }, [pathname, hash]);

    return null;
};

export default ScrollToHash;