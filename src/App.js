import { useState, useEffect, useRef} from "react"

export default function App() {

  const STARTING_TIME = 10
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const textBoxRef = useRef(null)

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
    textBoxRef.current.disabled = false
    textBoxRef.current.focus()
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
      ref={textBoxRef}
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