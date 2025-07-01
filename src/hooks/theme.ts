import { createTheme, alpha, getContrastRatio } from '@mui/material/styles';

const violetBase = '#090a0a';
const violetMain = alpha(violetBase, 0.9);

const darkGreyBase = '#272626';
const darkGreyMain = alpha(darkGreyBase, 0.9);

const yellowBase = '#EBFF08';
const yellowMain = alpha(yellowBase, 0.95);

// @ts-ignore
const theme = createTheme({
    palette: {
        mode: 'dark',

        primary: {
            main: violetMain,
            light: alpha(violetBase, 0.5),
            dark: alpha(violetBase, 0.95),
            contrastText: getContrastRatio(violetMain, '#fff') > 4.5 ? '#fff' : '#111',
        },
        darkGrey: {
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

export default theme;
