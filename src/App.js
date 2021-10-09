import { useState } from "react"

export default function App() {

  const [text, setText] = useState(9)

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const wordCount = (text) => {
    const wordsArr = text.trim().split(" ")
    return wordsArr.filter(word => word !== "").length
  }

  return (
    <div>
      <h1>Speed typing game</h1>
      <textarea
      value={text}
      onChange={handleChange}
      />
            <h4>Time remaining: ???</h4>
            <button onClick={() => console.log(wordCount(text))}>
                Start
            </button >
            <h2>Word count : {text}</h2>

    </div>
  )
}