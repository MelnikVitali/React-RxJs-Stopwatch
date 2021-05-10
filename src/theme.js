import { createMuiTheme } from '@material-ui/core/styles';

import { pxToRem } from './utils/pxToRem';

const theme = createMuiTheme({
    spacing: 6,
    typography: {
        fontFamily: 'Roboto, sans-serif'
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
                    scrollBehavior: 'smooth',
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
        MuiTypography: {
            body1: {
                fontWeight: 650,
                fontSize: pxToRem(18),
                lineHeight: pxToRem(20),
            },
        },
        MuiInputBase: {
            adornedEnd: {
                paddingRight: 0
            }
        },
        MuiOutlinedInput: {
            root: {
                borderRadius: pxToRem(23)
            }
        },
        MuiListItem: {
            root: {
                paddingRight: 0
            }
        },
        MuiIconButton: {
            root: {
                padding: pxToRem(9),
                margin: `${pxToRem(3)} 0`
            }
        },
        MuiListItemIcon: {
            root: {
                minWidth: pxToRem(49)
            }
        },
        MuiSvgIcon: {
            root: {
                fontSize: '1.7rem'
            }
        }
    },
});

export default theme;