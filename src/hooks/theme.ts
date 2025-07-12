import { createTheme, alpha, getContrastRatio } from '@mui/material/styles';

const darkGreyBase = '#272626';
const darkGreyMain = alpha(darkGreyBase, 0.9);

const yellowBase = '#EBFF08';
const yellowMain = alpha(yellowBase, 0.95);

// @ts-ignore
export const theme = createTheme({
    palette: {
        mode: 'dark',

        primary: {
            main: darkGreyMain,
            light: alpha(darkGreyBase, 0.5),
            dark: alpha(darkGreyBase, 0.95),
            contrastText: getContrastRatio(darkGreyMain, '#fff') > 4.5 ? '#fff' : '#111',
        },
        yellow: {
            main: yellowMain,
            light: alpha(yellowBase, 0.6),
            dark: alpha(yellowBase, 1),
            contrastText: getContrastRatio(yellowMain, '#000') > 4.5 ? '#000' : '#111',
        },
        white: {
            main: '#FFFFFF',
            light: '#FFFFFF',
            dark: '#FFFFFF',
            contrastText: '#FFFFFF',
        }
    },
});

export const themeProviders = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#333333',
            paper: '#333333',
        },

        primary: {
            main: yellowMain,
            light: alpha(yellowBase, 0.6),
            dark: alpha(yellowBase, 1),
            contrastText: getContrastRatio(yellowMain, '#000') > 4.5 ? '#000' : '#111',
        },
        yellow: {
            main: yellowMain,
            light: alpha(yellowBase, 0.6),
            dark: alpha(yellowBase, 1),
            contrastText: getContrastRatio(yellowMain, '#000') > 4.5 ? '#000' : '#111',
        }
    },
});

export const themeAlerts = createTheme({
    palette: {
        mode: 'dark',
        background: {
            paper: '#000000',
        },
        yellow: {
            main: yellowMain,
            light: alpha(yellowBase, 0.6),
            dark: alpha(yellowBase, 1),
            contrastText: getContrastRatio(yellowMain, '#000') > 4.5 ? '#000' : '#111',
        }
    }
});

// @ts-ignore
export const lightTheme = createTheme({
    palette: {
        mode: 'light',

        background: {
            default: '#FFFFFF',
            paper: '#FFFFFF',
        },
        primary: {
            main: darkGreyMain,
            light: alpha(darkGreyBase, 0.5),
            dark: alpha(darkGreyBase, 0.95),
            contrastText: getContrastRatio(darkGreyMain, '#fff') > 4.5 ? '#fff' : '#111',
        },
        yellow: {
            main: yellowMain,
            light: alpha(yellowBase, 0.6),
            dark: alpha(yellowBase, 1),
            contrastText: getContrastRatio(yellowMain, '#000') > 4.5 ? '#000' : '#111',
        },
        white: {
            main: '#FFFFFF',
            light: '#FFFFFF',
            dark: '#FFFFFF',
            contrastText: '#FFFFFF',
        },
        grey: {
            main: '#f2f2f2',
            light: '#f2f2f2',
            dark: '#f2f2f2',
            contrastText: '#f2f2f2',
        }
    },
});
