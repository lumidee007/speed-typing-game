import { useState } from "react"

export default function App() {

  const [text, setText] = useState(9)

  const handleChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div>
      <h1>Speed typing game</h1>
      <textarea
      value={text}
      onChange={handleChange}
      />
            <h4>Time remaining: ???</h4>
            <button >
                Start
            </button>
            <h2>Word count : {text}</h2>

    </div>
  )
}