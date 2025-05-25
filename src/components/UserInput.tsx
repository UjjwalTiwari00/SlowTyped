import Caret from "./Caret "
import cn from "classnames";


const UserInput =({words,UserInputWord}:{words:string,UserInputWord:string}) => {
  // console.log(words,"this is words ")
  console.log(UserInputWord)
    const typedWords=UserInputWord.split('')
    console.log(typedWords)
  return (
    <div className="absolute text-4xl" >
        {
            typedWords.map((chars,index)=>(
                <CharCheck actual={chars} expected={words[index]} key={index}/>
            ))
        }
    <Caret/>
    </div>
  )
}


const CharCheck=({actual,expected}:{actual:string,expected:string})=>{
        const isCorrect=(actual===expected);
        const isWhiteSpace=(expected===" ");

        return(
          <span
          className={cn({
            "text-red-400": !isCorrect && !isWhiteSpace,
            "text-white": isCorrect && !isWhiteSpace,
            "bg-red-400": !isCorrect && isWhiteSpace,
          })}
        >
          {expected}
        </span>
        )
}

export default UserInput


