import { useEffect, useState } from "react";
import { io } from "socket.io-client";

export default function MyTimer() {
  const [seconds, setSeconds] = useState(5);
  const [timer, setTimer] = useState(30);
  const [timeout, settimeout] = useState(false);

  const socket = io("http://localhost:3002", {
    timeout: 10000,
    transports: ["websocket"],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds - 1);
      setTimer(timer - 1);

      if (seconds <= 1) {
        // change this to an error page / alert n redirect to difficulty page
        socket.emit("matchFail");
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
          <span className="label"> Seconds</span>
        </div>
      )}
    </div>
  );
}
