import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
    const getCountdown = () =>  {
        //const year = new Date().getFullYear() + 1;
        //const timeRemaining = new Date(`${year}-1-1`) - new Date();
        const timeRemaining = new Date(`2022-1-1`) - new Date();
        let countdown = {};

        if (timeRemaining > 0) {
            countdown = {
                Days: Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
                Hours: Math.floor((timeRemaining / (1000 * 60 * 60)) % 24),
                Minutes: Math.floor((timeRemaining / 1000 / 60) % 60),
                Seconds: Math.floor((timeRemaining / 1000) % 60),
            };
        }
        return countdown;
    };

    const [countdown, setCountdown] = useState(getCountdown());

    useEffect(() => {
        setTimeout(() => {
            setCountdown(getCountdown());
        }, 1000);
    });

    const data = [];
    Object.entries(countdown).forEach(([unit, value]) => {
        data.push(
            <div key={Math.random().toString(16)} className={"ci-countdown-values"}>
                <strong>{value}</strong> <br />
                {unit}
            </div>
        );
    });

    return (
        <>
            <div className={"ci-header"}>
                <h1 className={"ci-headline"}>New Year Countdown</h1>
            </div>

            <div className={"ci-countdown-container"}>{data}</div>
        </>
    );
};

export default CountdownTimer;