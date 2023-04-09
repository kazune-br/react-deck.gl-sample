import { useState } from "react";
import DeckGL from "@deck.gl/react/typed";
import { Map } from "react-map-gl";
import maplibregl from "maplibre-gl";
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
  const [date, setDate] = useState("2023-03-23");
  const layers = [new LineLayer({ id: "line-layer", data })];

  return (
    <div className="App">
      <DeckGL
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
        layers={layers}
      >
        <Map
          style={{ width: "100%", height: "100%" }}
          mapLib={maplibregl}
          mapStyle="https://tile.openstreetmap.jp/styles/osm-bright-ja/style.json"
        ></Map>
        <div className="form-check">
          <input
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
          <div>{date.replace("T", " ")}が選択されました！</div>
        </div>
      </DeckGL>
    </div>
  );
}

export default App;
