import useCountdown from "./useCountdown";
import useType from "./useType";
import ShownText from "../components/ShownText";
import { useCallback, useEffect, useState } from "react";
import { countErrors } from "../utils/helpers"

export type State = "start" | "run" | "finish";

const NUMBER_OF_WORDS = 30;
const COUNTDOWN_SECOND = 30;

const useEngine = () => {
    const [state, setState] = useState<State>("start");
    const { timeLeft, startCountDown, resetCountDown } = useCountdown(COUNTDOWN_SECOND);

    const { word, UseWords } = ShownText(NUMBER_OF_WORDS)

    const { cursor, typed, clearTyped, totalTyped, resetTotalTyped } = useType(state !== "finish");

    const [errors, setError] = useState(0);

    const isStarting=state === "start" && cursor > 0

    // this is for to reset the game 
    const restart = useCallback(() => {
        resetCountDown();
        resetTotalTyped();
        setState("start");
        setError(0);
        UseWords();
        clearTyped();
    }, [clearTyped, UseWords, resetCountDown, resetTotalTyped]);

    const sumErrors = useCallback(() => {
        const wordsReached = word.substring(0, Math.min(cursor, word.length));
        setError((prevErrors) => prevErrors + countErrors(typed, wordsReached));
    }, [typed, word, cursor]);

    // jab user kuch bhi type kre to useEffect run ho jaye
    useEffect(() => {
        if (isStarting) {
          setState("run");
          startCountDown();
          console.log("runing state")
        }
      }, [isStarting,  startCountDown]);



    useEffect(() => {
        if (state === "run" && timeLeft <= 0) {
            setState("finish");
            sumErrors();
        }
    }, [timeLeft, state, sumErrors])

    useEffect(() => {
        if (cursor >= word.length) {
            sumErrors();
            UseWords();
            console.log("yaha word update ho rahe hai ")
            clearTyped();
        }
    }, [clearTyped, UseWords, sumErrors]);

    return {
        state, word, typed, errors, restart, timeLeft, totalTyped,cursor
    };

}


export default useEngine;