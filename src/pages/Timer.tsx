import { useState, useEffect } from "react";


export default function Timer() {

 
  const [time, setTime] = useState<number>(10);

  useEffect(() => {

    if (time === 0 ) return;

    const timeout = setTimeout(() => {
      setTime(prev => prev - 1);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    }
  }, [time]);


  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "10vw"
      }}
    >
      {time}
    </div>
  );
}