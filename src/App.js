import React, { useState } from 'react';
import { Subject, interval } from 'rxjs';

import { Card, Typography, Button } from '@material-ui/core';
import TimerIcon from '@material-ui/icons/Timer';

import useStyles from './styles';
import { scan, startWith, takeUntil, tap } from 'rxjs/operators';

const timerStopSource$ = new Subject();

const App = () => {
    const classes = useStyles();

    const initialSec = 0;
    const [sec, setSec] = useState(initialSec);
    const [isActive, setIsActive] = useState(false);

    console.log('render');

    const startTimer = (isReset) => {
        interval(1000)
            .pipe(
                startWith(isReset ? initialSec : sec),
                scan(timeInSeconds => timeInSeconds + 1),
                tap((seconds) => setSec(seconds)),
                takeUntil(timerStopSource$.asObservable()),
            )
            .subscribe({
                next: value => console.log(value),
                error: () => {},
                complete: () => {
                    console.log('complete');
                }
            });
    };

    const handleStart = () => {

        console.log('start');

        setIsActive(true);

        startTimer();
    };

    const handleStop = () => {
        console.log('stop');

        timerStopSource$.next(false);

        setIsActive(false);

        setSec(initialSec);
    };

    const handleReset = () => {
        console.log('reset');

        timerStopSource$.next(false);

        startTimer(true);
    };

    return (
        <section >
            <header className={classes.header} >
                < TimerIcon color="secondary" className={classes.avatar} />
                <Typography component="h1" variant="h2" className={classes.title} >
                    Stopwatch
                </Typography >
            </header >
            <Card className={classes.card} >
                <Typography className={classes.timer} >
                    {new Date(sec * 1000).toISOString().substr(11, 8)}
                </Typography >
                <div className={classes.controls} >
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
                        // onClick={handleWait}
                    >
                        Wait
                    </Button >
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.btn}
                        onClick={handleReset}
                    >
                        Reset
                    </Button >
                </div >
            </Card >
        </section >
    );
};

export default App;
