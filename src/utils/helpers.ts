export const isKeyBoardCodeAllowed=(code:string)=>{
    return (
        code.startsWith("key") || code.startsWith("Digit") || code === "Backspace" || code === "Space"
    )
}