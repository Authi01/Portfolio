import React, { useState, useEffect } from 'react';

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const options = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const timeString = time.toLocaleTimeString('en-GB', options);

    const clockStyle = {
        backgroundColor: '#1a1a1a',
        color: 'white',
        padding: '20px',
        borderRadius: '10px',
        textAlign: 'center',
        fontSize: '2rem',
        margin:'0px'
    };

    return (
        <div style={clockStyle}>
            <h2 >Time zone</h2>
            <p>{timeString} IST</p>
        </div>
    );
};

export default Clock;
