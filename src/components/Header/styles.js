import { makeStyles } from '@material-ui/core/styles';
import { pxToRem } from '../../utils/pxToRem';

const useStyles = makeStyles(theme => ({
    header: {
        margin: theme.spacing(4),
        display: 'flex',
        justifyContent: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        marginLeft: 0,
        fontSize: pxToRem(43)
    },
    title: {
        fontSize: pxToRem(45),
        color: theme.palette.info.main,
        fontWeight: 800,
        letterSpacing: pxToRem(1)
    },
}));

export default useStyles;
