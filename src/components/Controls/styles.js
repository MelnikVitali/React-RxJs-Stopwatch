import { makeStyles } from '@material-ui/core/styles';

import { pxToRem } from '../../utils/pxToRem';

const useStyles = makeStyles(theme => ({
    controls: {
        '& > *': {
            margin: theme.spacing(2),
        },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    btn: {
        minWidth: pxToRem(80),
        letterSpacing: pxToRem(1.1)
    }
}));

export default useStyles;
