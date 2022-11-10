import {useEffect, useState} from "react";

export const useDevice = () => {
    const [isDesktop, setIsDesktop] = useState<boolean | null>(window.innerWidth >= 1200);

    useEffect(() => {
        const checkIsDesktop = () => window.innerWidth >= 1200 ? setIsDesktop(true) : setIsDesktop(false);
        if (window) {
            window.addEventListener("resize", checkIsDesktop);
        }

        return () => window.removeEventListener("resize", checkIsDesktop)
    }, [setIsDesktop, isDesktop])

    return {isDesktop}
}