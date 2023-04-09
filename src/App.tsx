import { useState } from "react";

import { LineLayer } from "@deck.gl/layers/typed";
import DeckGL from "@deck.gl/react/typed";
import { MantineProvider, Group } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import maplibregl from "maplibre-gl";
import { Map } from "react-map-gl";
import "./App.css";

const INITIAL_VIEW_STATE = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
  bearing: 0,
};

const data: { [key: string]: [{ [key: string]: Array<number> }] } = {
  "2023-3-23": [
    {
      sourcePosition: [-122.41669, 37.7853],
      targetPosition: [-122.41669, 37.781],
    },
  ],
  "2023-3-24": [
    {
      sourcePosition: [-122.41669, 37.8],
      targetPosition: [-122.41669, 37.7],
    },
  ],
};

function App() {
  const [date, setDate] = useState<Date | null>(new Date("2023-03-23"));
  console.log(date);
  let month = date?.getMonth();
  if (date?.getMonth() != undefined) {
    month = date.getMonth() + 1;
  }
  const year = date?.getFullYear();
  const day = date?.getDate();
  const dateString = year + "-" + month + "-" + day;

  const layers = [new LineLayer({ id: "line-layer", data: data[dateString] })];
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
        />
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <Group position="center">
            <DatePicker value={date} onChange={setDate} />
          </Group>
        </MantineProvider>
      </DeckGL>
    </div>
  );
}

export default App;
