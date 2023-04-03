import {useState} from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)
    const [date, setDate] = useState("2023-03-23");

    return (
        <div className="App">
            <div className="form-check">
                <input type="date"
                       value={date}
                       onChange={event => setDate(event.target.value)}
                />
                <div>{date.replace("T", " ")}が選択されました！</div>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    )
}

export default App
