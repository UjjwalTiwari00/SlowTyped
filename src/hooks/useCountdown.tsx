import { useCallback, useEffect, useRef, useState } from "react"


const useCountdown = (seconds:number) => {
    
    const [timeLeft,setTimeLeft]=useState<number>(seconds);
    const intervalRef=useRef<number | null>(null);
    const hasTimerEnded=timeLeft<=0;
    const isRunning=intervalRef.current!=null;

    const startCountDown = useCallback(() => {
        if (!hasTimerEnded && !isRunning) {
          intervalRef.current = setInterval(() => {
            setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
          }, 1000);
        }
      }, [setTimeLeft, hasTimerEnded, isRunning]);

      

    const resetCountDown=useCallback(()=>{
        clearInterval(intervalRef.current!);
        intervalRef.current=null;
        setTimeLeft(seconds);
    },[seconds]);


    
    useEffect(()=>{
        if(hasTimerEnded){
          console.log("timer end ho chuka ahi")
            clearInterval(intervalRef.current!);
            intervalRef.current=null;
        }
    },[hasTimerEnded]);

    useEffect(()=>{
        return ()=>clearInterval(intervalRef.current!);
    },[]);


    return {timeLeft,startCountDown,resetCountDown};
}

export default useCountdown