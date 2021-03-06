import React from 'react';

import { Typography } from '@material-ui/core';

import useStyles from './styles';

const TimerScreen = ({timeInSeconds}) => {
    const classes = useStyles();

    return (
            <Typography className={classes.timer} >
                {new Date(timeInSeconds * 1000).toISOString().substr(11, 8)}
            </Typography >
    );
};

export default TimerScreen;
