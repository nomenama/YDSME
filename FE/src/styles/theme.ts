import {DefaultTheme} from "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            primary: string,
            primary_10: string;
            secondary: string,
            white: string,
            black: string,
            black_90: string,

            positive: string,
            negative: string
        };
        buttons: {
            primary: string,
            secondary: string
        };
        fontSizes: string[];
    }
}

export interface BaseTheme {
    colors: object;
    buttons: object;
    fontSizes: string[];
}

export interface Device {
    mobileS: string;
    mobileM: string;
    mobileL: string;
    tablet: string;
    laptop: string;
    desktop: string;
    desktopL: string;
}

export const theme: DefaultTheme = {
    colors: {
        primary: "#343A40",
        primary_10: "#525252",
        secondary: "#abaaaa",

        white: "#ffffff",
        black: "#000000",
        black_90: "#191919",

        positive: "#be0808",
        negative: "#20be08"
    },
    buttons: {
        primary: "#0863be",
        secondary: "#4e98f5"
    },
    fontSizes: ['1.2rem', '1.4rem', '1.6rem', '1.8rem', '2.4rem', '2.8rem', '3.2rem', '4.0rem', '4.8rem', '6.4rem'],
}

export const device: Device = {
    mobileS: `(max-width: 320px)`,
    mobileM: `(max-width: 452px)`,
    mobileL: `(max-width: 768px)`,
    tablet: `(max-width: 1024px)`,
    laptop: `(max-width: 1200px)`,
    desktop: `(max-width: 1920px)`,
    desktopL: `(min-width: 1920px)`,
}

