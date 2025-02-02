import { useCallback, useEffect, useRef, useState } from "react"
import {isKeyBoardCodeAllowed} from "../utils/helpers"

const useType = (enabled:boolean) => {
  const [cursor,setCursor]=useState(0);
  const [typed,setTyped]=useState<string>("")
  const totalTyped=useRef(0);


  const keyDownHandler =useCallback(
    ({key,code}:KeyboardEvent)=>{
        if(!enabled || isKeyBoardCodeAllowed(code)){
          return;
        }

        switch(key){
          case "Backspace":
            setTyped((prev)=>prev.slice(0,-1));
            setCursor((cursor)=>cursor-1);
            totalTyped.current-=1;
            break;
          default:
            setTyped((prev)=>prev.concat(key));
            setCursor((cursor)=>cursor+1);
            totalTyped.current+=1;
        }
    },
    [enabled]
  )
  
  const clearTyped=useCallback(()=>{
    setTyped("")
    setCursor(0)
  },[])

  const resetTotalTyped=useCallback(()=>{
      totalTyped.current=0;
  },[])

  useEffect(()=>{
    window.addEventListener("keydown",keyDownHandler)

    return ()=>{
      window.removeEventListener("keydown",keyDownHandler);
    }
  },[keyDownHandler]);

  return {
    typed,
    cursor,
    clearTyped,
    resetTotalTyped,
    totalTyped:totalTyped.current,
  }
}

export default useType;