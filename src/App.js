import { useState, useEffect} from "react"

export default function App() {

  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(5)
  const [isTimeRunning, setIsTimeRunning] = useState(false)

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const wordCount = (txt) => {
    let wordsArr = txt.trim().split(" ")
    return wordsArr.filter(word => word !== "").length
  }

  useEffect(() => {
    if(isTimeRunning && timeRemaining > 0) {
        setTimeout(() => {
            setTimeRemaining(time => time - 1)
        }, 1000)
    } else if(timeRemaining === 0) {
        setIsTimeRunning(false)
    }
}, [timeRemaining, isTimeRunning])



  return (
    <div>
      <h1>Speed typing game</h1>
      <textarea
      value={text}
      onChange={handleChange}
      />
            <h4>Time remaining: {timeRemaining}</h4>
            <button onClick={() => setIsTimeRunning(true)}>
                Start
            </button >
            <h2>Word count : {text}</h2>

    </div>
  )
}