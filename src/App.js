import { useState, useEffect} from "react"

export default function App() {

  const STARTING_TIME = 4
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const calculateWordCount = (txt) => {
    let wordsArr = txt.trim().split(" ")
    return wordsArr.filter(word => word !== "").length


  }

  // Start game
  function startGame() {
    setIsTimeRunning(true)
    setTimeRemaining(STARTING_TIME)
    setText("")
    setWordCount(0)
}
//End game
function endGame() {
    setIsTimeRunning(false)
    setWordCount(calculateWordCount(text))
}



  useEffect(() => {
    if(isTimeRunning && timeRemaining > 0) {
        setTimeout(() => {
            setTimeRemaining(time => time - 1)
        }, 1000)
    } else if(timeRemaining === 0) {
        endGame()
    }
}, [timeRemaining, isTimeRunning])



  return (
    <div>
      <h1>Speed typing game</h1>
      <textarea
      value={text}
      onChange={handleChange}
      disabled={!isTimeRunning}
      />
            <h4>Time remaining: {timeRemaining}</h4>
            <button 
            onClick={startGame}
            disabled={isTimeRunning}
            >
                Start
            </button >
            <h2>Word count : {wordCount}</h2>

    </div>
  )
}