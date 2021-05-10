import { createMuiTheme } from '@material-ui/core/styles';

import { pxToRem } from './utils/pxToRem';

const theme = createMuiTheme({
    spacing: 6,
    typography: {
        fontFamily: 'Roboto, sans-serif',
        button: {
            minWidth: pxToRem(80)
        },
    },
    palette: {
        primary: {
            main: '#4791db',
        },
    },
    backgroundColorTimerViewActive: '#fdfdf6',
    overrides: {
        MuiCssBaseline: {
            '@global': {
                'html': {
                    boxSizing: 'border-box',
                    width: '100%',
                    height: '100%'
                },
                'html, body': {
                    outline: 'none',
                },
                body: {
                    margin: '0 auto',
                    backgroundColor: '#eaeff1',
                    fontSize: pxToRem(18),
                    color: '#000000',
                },
                '#root': {
                    width: '100%',
                    display: 'flex',
                    boxSizing: 'border-box',
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                ':focus': {
                    outline: 'none'
                },
                a: {
                    textDecoration: 'none',
                },
            },
        },
        MuiContainer: {
            root: {
                height: '100vh',
                marginTop: pxToRem(-80),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }
        },
        MuiCard: {
            root: {
                '& > *': {
                    margin: pxToRem(18),
                },
                maxWidth: pxToRem(600),
                minWidth: pxToRem(320)
            }
        },
        MuiTypography: {
            body1: {
                fontWeight: 650,
                fontSize: pxToRem(18),
                lineHeight: pxToRem(20),
            },

        },
    },
});

export default theme;