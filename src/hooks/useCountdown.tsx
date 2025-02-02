import { useCallback, useEffect, useRef, useState } from "react"


const useCountdown = (seconds:number) => {
    
    const [timeLeft,setTimeLeft]=useState(seconds);
    const intervalRef=useRef<number | null>(null);
    const hasTimerEnded=timeLeft<=0;
    const isRunning=intervalRef.current!=null;

    const startCountDown=useCallback(()=>{
        if(!hasTimerEnded && !isRunning){
            intervalRef.current=setInterval(()=>{
                setTimeLeft((prev)=>prev-1);
            },1000);
        }
    },[setTimeLeft,hasTimerEnded,isRunning]);


    const resetCountDown=useCallback(()=>{
        clearInterval(intervalRef.current!);
        intervalRef.current=null;
        setTimeLeft(seconds);
    },[seconds]);


    
    useEffect(()=>{
        if(hasTimerEnded){
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