import React from 'react';

import { Box, Typography } from '@material-ui/core';
import TimerIcon from '@material-ui/icons/Timer';

import useStyles from './styles';

const Header = () => {
    const classes = useStyles();

    return (
        <Box component='header' className={classes.header} >
            < TimerIcon color="secondary" className={classes.avatar} />
            <Typography component="h1" variant="h2" className={classes.title} >
                Stopwatch
            </Typography >
        </Box >
    );
};

export default Header;
