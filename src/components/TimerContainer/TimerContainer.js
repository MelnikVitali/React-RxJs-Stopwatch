import React from 'react';

import { Card } from '@material-ui/core';

import TimerScreen from '../TimerScreen';
import Controls from '../Controls';

import useStyles from './styles';

const TimerContainer = ({timeInSeconds, handleStart, handleReset, handleStop, handleWait, isActive}) => {
    const classes = useStyles();

    return (
        <Card className={classes.card} >
            <TimerScreen timeInSeconds={timeInSeconds} />
            <Controls
                handleStart={handleStart}
                handleReset={handleReset}
                handleStop={handleStop}
                handleWait={handleWait}
                isActive={isActive}
            />
        </Card >
    );
};

export default TimerContainer;
