import { makeStyles } from '@material-ui/core/styles';
import { pxToRem } from './utils/pxToRem';

const useStyles = makeStyles(theme => ({
    header: {
        display: 'flex',
        justifyContent: 'center',
        margin: theme.spacing(4)
    },
    avatar: {
        margin: theme.spacing(1),
        marginLeft: 0,
        fontSize: pxToRem(43)
    },
    title: {
        fontSize: pxToRem(45),
        fontWeight: 800,
        letterSpacing: pxToRem(1),
        color: theme.palette.info.main
    },
    card: {
        '& > *': {
            margin: theme.spacing(3),
        },
        maxWidth: pxToRem(600),
        minWidth: pxToRem(320)
    },
    timer:{
        fontWeight: 600,
        fontSize: pxToRem(60),
        textAlign: 'center',
        padding: theme.spacing(4)
    },
    controls: {
        '& > *': {
            margin: theme.spacing(3),
        },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    btn:{
        letterSpacing: pxToRem(1.3)
    }
}));

export default useStyles;