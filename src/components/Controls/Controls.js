import React from 'react';
import { Box, Button } from '@material-ui/core';

import useStyles from './styles';

const Controls = ({isActive, handleStart, handleStop, handleReset, handleWait}) => {
    const classes = useStyles();

    return (
        <Box component="div" className={classes.controls} >
            {isActive ?
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.btn}
                    onClick={handleStop}
                >
                    Stop
                </Button >
                :
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.btn}
                    onClick={handleStart}
                >
                    Start
                </Button >
            }

            <Button
                variant="contained"
                color="primary"
                className={classes.btn}
                disabled={!isActive}
                onDoubleClick={handleWait}
            >
                Wait
            </Button >
            <Button
                variant="contained"
                color="primary"
                className={classes.btn}
                disabled={!isActive}
                onClick={handleReset}
            >
                Reset
            </Button >
        </Box >
    );
};

export default Controls;
