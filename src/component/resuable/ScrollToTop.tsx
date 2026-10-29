// ScrollToTop.tsx
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useLayoutEffect(() => {
        if (hash) {
            document.querySelector(hash)?.scrollIntoView();
            return;
        }
        window.scrollTo(0, 0);
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;