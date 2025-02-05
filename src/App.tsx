import Header from "./components/Header";
import InputComponent from "./components/InputComponent";
import UserInput from "./components/UserInput";
import useEngine from "./hooks/useEngine";
import { VscDebugRestart } from "react-icons/vsc";
const App: React.FC = () => {
  const { state, word, typed, errors, restart, timeLeft, totalTyped } =
    useEngine();

    console.log({word})
  return (
    <div className="h-screen bg-slate-500 border-2 border-green-400">
      <div>
        <Header timeLeft={timeLeft} />
      </div>
     <div>
      {
        timeLeft
      }
     </div>
     <div className="h-3/5 border-2 border-red-600 mx-auto mt-20">
      <WordsContainer>
          
          <UserInput
            className="absolute inset-0"
            words={word}
            UserInputWord={typed}
          />
          <InputComponent words={word} wordLimit={30}/>
        </WordsContainer>

      <div className="border text-center">
        <button>
        <VscDebugRestart size={24} onClick={restart} />
        </button>
      </div>
        
     </div>
      

        <div>
          <FunButtons state={state} errors={errors} totalTyped={totalTyped}/>
        </div>
    </div>
  );
};
type Props = {
  state: string;
  errors: number;
  totalTyped: number;
};
const WordsContainer = ({ children}: { children: React.ReactNode}) => {
  return (
    <div className="border h-[60%] w-[60%] m-10 p-5 mx-auto ">
     <div className="relative  left-0  text-3xl leading-relaxed break-all mx-auto">
      {children}
    </div>
    </div>
   
  );
};




const FunButtons: React.FC<Props> = ({ state, errors, totalTyped }) => {
  return (
    <div className="flex flex-row justify-around">
      <p>State: {state}</p>
      <p>Errors: {errors}</p>
      <p>Total Typed: {totalTyped}</p>
    </div>
  );
};

export default App;
