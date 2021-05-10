import { makeStyles } from '@material-ui/core/styles';

import { pxToRem } from '../../utils/pxToRem';

const useStyles = makeStyles(theme => ({
    card: {
        '& > *': {
            margin: theme.spacing(3),
        },
        maxWidth: pxToRem(600),
        minWidth: pxToRem(320)
    },
}));

export default useStyles;
