import { makeStyles } from '@material-ui/core/styles';

import { pxToRem } from '../../utils/pxToRem';

const useStyles = makeStyles(theme => ({
    timer: {
        padding: theme.spacing(4),
        fontSize: pxToRem(60),
        fontWeight: 600,
        textAlign: 'center'
    },
}));

export default useStyles;
