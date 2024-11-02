import { useState, useEffect } from "react";

function TimeComponent() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('setInterval executed');
            
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => {
            console.log("Time to stop now");
            
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div>
            <h1>Time elapsed: {seconds} seconds</h1>
        </div>
    );
}

export default TimeComponent;
