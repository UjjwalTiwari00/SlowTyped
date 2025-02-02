import Header from "./components/Header"
import InputComponent from "./components/InputComponent"
import UserInput from "./components/UserInput"
import ShownText from './components/ShownText'
const App: React.FC = () => {
  // Empty dependency array ensures this runs only once on mount
  const {word,UseWords}=ShownText(20);

  return (
    <div className="grid grid-rows-[1fr_2fr_1fr] h-screen bg-slate-500 border-2 border-green-400">
      <div> <Header/></div>
      <div><WordsContainer>
        <InputComponent words={word}/>
        <UserInput className="absolute inset-0" words={word}  UserInputWord={''}/>
        </WordsContainer>
     </div>
      <div> <Header/></div>
     

      
    </div>
  )
}

const WordsContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative  top-1/4 left-0  text-3xl max-w-xl leading-relaxed break-all mx-auto">
      {children}
    </div>
  );
};



export default App
