import React, { useState } from 'react';

import { Subject, interval, timer } from 'rxjs';
import { first, scan, startWith, takeUntil, tap } from 'rxjs/operators';

import { Card, Container } from '@material-ui/core';

import Header from './components/Header';
import TimerScreen from './components/TimerScreen';
import Controls from './components/Controls';

const timerStopSource$ = new Subject();

const App = () => {
    const initialSec = 0;
    const [sec, setSec] = useState(initialSec);
    const [isActive, setIsActive] = useState(false);

    const startTimer = (isReset) => {
        interval(1000)
            .pipe(
                startWith(isReset ? initialSec : sec),
                scan(timeInSeconds => timeInSeconds + 1),
                tap((seconds) => setSec(seconds)),
                takeUntil(timerStopSource$.asObservable()),
            )
            .subscribe();
    };

    const handleStart = () => {
        setIsActive(true);

        startTimer();
    };

    const handleStop = () => {
        timerStopSource$.next(false);

        setIsActive(false);

        setSec(initialSec);
    };

    const handleWait = () => {
        timer(300)
            .pipe(
                first(),
                tap(() => {
                    timerStopSource$.next(false);
                    setIsActive(false);
                })
            )
            .subscribe();
    };

    const handleReset = () => {
        timerStopSource$.next(false);

        startTimer(true);
    };

    return (
        <Container component="main" >
            <Card >
                <Header />
                <TimerScreen timeInSeconds={sec} />
                <Controls
                    handleStart={handleStart}
                    handleReset={handleReset}
                    handleStop={handleStop}
                    handleWait={handleWait}
                    isActive={isActive}
                />
            </Card >
        </Container >
    );
};

export default App;
