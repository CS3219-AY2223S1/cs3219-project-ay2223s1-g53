import { useEffect, useState } from "react";

export default function MyTimer() {
  const [seconds, setSeconds] = useState(30);
  const [timer, setTimer] = useState(30);
  const [timeout, settimeout] = useState(false);

  useEffect(() => {
    console.log(seconds);
    const interval = setInterval(() => {
      setSeconds(seconds - 1);
      setTimer(timer - 1);

      if (seconds <= 0) {
        // change this to an error page / alert n redirect to difficulty page
        window.location.replace("/difficulty");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div>
      {timeout ? (
        <div>
          <h1>Error!</h1>
        </div>
      ) : (
        <div>
          <span className="time">{seconds}</span>
          <span className="label">Seconds</span>
        </div>
      )}
    </div>
  );
}
