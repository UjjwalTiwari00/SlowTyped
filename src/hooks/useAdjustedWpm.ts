
const useAdjustedWpm = (totalChar:number,
        incorrectChars:number,
        timeINSecond:number) => {

    if (timeINSecond === 0) return 0;

    const WordsTyped = totalChar / 5;
    const timeInMin = timeINSecond / 60;


    const rawWPM = WordsTyped / timeInMin;
    const accuracy = ((totalChar - incorrectChars) / totalChar) * 100;
    const adjustedWPM = rawWPM * (accuracy / 100);
   const Wpm=Number(adjustedWPM.toFixed(2))

    return Wpm;
}

export default useAdjustedWpm;