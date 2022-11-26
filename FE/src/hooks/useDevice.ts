import {useEffect, useState} from "react";

export const useDevice = () => {
    const [isDesktop, setIsDesktop] = useState<boolean>(false);
    const [isTablet, setIsTablet] = useState<boolean>(false);
    const [isMobileL, setIsMobileL] = useState<boolean>(false);
    const [isMobileM, setIsMobileM] = useState<boolean>(false);
    const [isMobileS, setIsMobileS] = useState<boolean>(false);
    const [deviceWidth, setDeviceWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        setDeviceWidth(window.innerWidth)
    }, [])

    useEffect(() => {
        const checkDeviceWidth = () => {
            if (window.innerWidth <= 320) {
                setIsMobileS(true);
            }

            if (window.innerWidth <= 452) {
                setIsMobileM(true);
            }

            if (window.innerWidth <= 768) {
                setIsMobileL(true);
            }

            if (window.innerWidth <= 1024) {
                setIsTablet(true);
            }

            if (window.innerWidth >= 1200) {
                setIsDesktop(true);
            }
        }
        if (window) {
            window.addEventListener("resize", checkDeviceWidth);
        }

        return () => window.removeEventListener("resize", checkDeviceWidth)
    }, [
        setIsDesktop,
        isDesktop,
        isTablet,
        setIsTablet,
        isMobileL,
        setIsMobileL,
        isMobileM,
        setIsMobileM,
        isMobileS,
        setIsMobileS
    ])

    return {
        deviceWidth,
        isMobileS,
        isMobileM,
        isMobileL,
        isTablet,
        isDesktop
    }
}