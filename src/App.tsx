import { useState } from "react";
import DeckGL from "@deck.gl/react/typed";
import { LineLayer } from "@deck.gl/layers/typed";
import "./App.css";

const INITIAL_VIEW_STATE = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
  bearing: 0,
};

const data = [
  {
    sourcePosition: [-122.41669, 37.7853],
    targetPosition: [-122.41669, 37.781],
  },
];

function App() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState("2023-03-23");
  const layers = [new LineLayer({ id: "line-layer", data })];

  return (
    <div className="App">
      <div className="form-check">
        <input
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
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
      <DeckGL
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
        layers={layers}
      />
    </div>
  );
}

export default App;
