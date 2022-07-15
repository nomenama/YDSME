export interface BaseTheme {
    colors: object;
    buttons: object;
    breakpoints: string[];
    fontSizes: string[];
}

export const theme: BaseTheme = {
    colors: {
        primary: "#525252",
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
    breakpoints: ['31.25em', '43.75em', '46.875em'],
    fontSizes: ['1.2rem', '1.4rem', '1.6rem', '1.8rem', '2.4rem', '2.8rem', '3.2rem', '4.0rem', '4.8rem', '6.4rem']
}

