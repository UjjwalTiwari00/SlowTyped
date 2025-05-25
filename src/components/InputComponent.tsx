const InputComponent = ({ words,wordLimit }: { words: string,wordLimit:number }) => {
    const minWord=words.trim().split(/\s+/);
    const maxWords=minWord.slice(0, wordLimit).join(" ")
    // const totalWords=minWord.slice(wordLimit, words.length).join(" ")
    console.log({maxWords},maxWords.length)
    return (
        <div className="text-4xl">
              
            {
                words.split('').map((chars, index) => (
                    <span className="text-slate-400 " key={index}>
                        {
                            chars
                        }
                    </span>
                ))
            }
             
        </div>
    )
}

export default InputComponent