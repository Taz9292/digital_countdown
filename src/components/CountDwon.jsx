import React, { useEffect, useState } from 'react'

export default function CountDwon() {

    const targetDate = new Date("Nov 11, 2029 08:21:00").getTime();
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <div className="main">
                <div className="heading">
                    <div className="heading-text1">We are coming soon</div>
                    <div className="heading-text1" id="date-end">
                        Nov 11, 2029 08:21:00 AM
                    </div>
                    <div className="timer">
                        {Object.entries(timeLeft).map(([label, value]) => (
                            <div className="timer-sec" key={label}>
                                <input type="text" readOnly value={value} />
                                <br />
                                <label htmlFor={label}>{label.charAt(0).toUpperCase() + label.slice(1)}</label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
