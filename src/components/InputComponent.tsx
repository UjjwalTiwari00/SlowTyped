
const InputComponent = ({ words }: { words: string }) => {
    return (
        <div className="absolute">
              
            {
                words.split('').map((chars, index) => (
                    <span className=" border-red-400 " key={index}>
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