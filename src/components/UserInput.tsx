import Caret from "./Caret "


const UserInput =({words,UserInputWord,className=''}:{words:string,UserInputWord:string,className?:string}) => {
  // console.log(words,"this is words ")
  console.log(UserInputWord)
    const typedWords=UserInputWord.split('')
    console.log(typedWords)
  return (
    <div className="">
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
        const isCorrect=actual===expected;
        const isWhiteSpace=expected===" ";

        return(
            <span className={`
                ${!isCorrect && !isWhiteSpace ? 'bg-red-300' : ''} 
                ${isCorrect && isWhiteSpace ? 'bg-green-600' : ''}
                ${!isCorrect && isWhiteSpace ? 'bg-red-300' : ''}
              `}>
                {
                  expected
                }
              </span>
        )
}

export default UserInput


