import { useEffect, useRef, useState } from "react";
import useScrollPercentage from "./hooks/useScrollPercentage";
import { MapContainer, TileLayer, Marker, Popup, useMap, Polyline  } from 'react-leaflet'

// reset styles
Object.assign(document.body.style, {
  overflow: "hidden",
  margin: "0"
});

const calculateInnerDivProgress = (id, allDivs, percentCurrent) => {

  const divsBefore = allDivs.slice(0, id);

  const currentDiffHeight = allDivs[id];

  const sumDivHeightsBefore = divsBefore.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0.0
  );

  const sumAllDivHeights = allDivs.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0.0
  );

  const start = sumDivHeightsBefore / sumAllDivHeights;
  const end = (sumDivHeightsBefore + currentDiffHeight) / sumAllDivHeights;
  const progress = ((percentCurrent / 100) - start) / (end - start);

  return progress.toFixed(2);

}

const getCurrentCoord = (prev, curr, next, percent, def) => {

  console.log(prev, curr, next, def)

  if(prev === undefined && curr === undefined) {
    return def;
  } if(prev === undefined) {
    return curr;
  } else if(prev === null || next === null) {
    return curr;
  } else if (curr === null) {
    return [prev[0] + (next[0] - prev[0]) * percent, prev[1] + (next[1] - prev[1]) * percent];
  }

}

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

function App() {
  const [scrollRef, scrollPercentage] = useScrollPercentage();

  const [scrollDiv1, setScrollDiv1] = useState(0);
  const [scrollDiv2, setScrollDiv2] = useState(0);
  const [scrollDiv3, setScrollDiv3] = useState(0);
  const [scrollDiv4, setScrollDiv4] = useState(0);
  const [scrollDiv5, setScrollDiv5] = useState(0);
  const [scrollDiv6, setScrollDiv6] = useState(0);

  const div1ref = useRef();
  const div2ref = useRef();
  const div3ref = useRef();
  const div4ref = useRef();
  const div5ref = useRef();
  const div6ref = useRef();

  const defCoord = [51.0769207,13.7025464];
  const [mapCoord, setMapCoord] = useState(defCoord);

  const data = [
    [51.0769207,13.7025464],
    [51.0769207,13.7025464],
    null,
    [51.3419134,12.2535535],
    null,
    [50.8227027,12.8209368]
  ]

  useEffect(() => {
    const heightdiv1ref = div1ref.current.clientHeight;
    const heightdiv2ref = div2ref.current.clientHeight;
    const heightdiv3ref = div3ref.current.clientHeight;
    const heightdiv4ref = div4ref.current.clientHeight;
    const heightdiv5ref = div5ref.current.clientHeight;
    const heightdiv6ref = div6ref.current.clientHeight;

    const allDivs = [heightdiv1ref, heightdiv2ref, heightdiv3ref, heightdiv4ref, heightdiv5ref, heightdiv6ref];

    const scrollDiv1 = calculateInnerDivProgress(0, allDivs, scrollPercentage);
    setScrollDiv1(scrollDiv1);
    const scrollDiv2 = calculateInnerDivProgress(1, allDivs, scrollPercentage);
    setScrollDiv2(scrollDiv2);
    const scrollDiv3 = calculateInnerDivProgress(2, allDivs, scrollPercentage);
    setScrollDiv3(scrollDiv3);
    const scrollDiv4 = calculateInnerDivProgress(3, allDivs, scrollPercentage);
    setScrollDiv4(scrollDiv4);
    const scrollDiv5 = calculateInnerDivProgress(4, allDivs, scrollPercentage);
    setScrollDiv5(scrollDiv5);
    const scrollDiv6 = calculateInnerDivProgress(5, allDivs, scrollPercentage);
    setScrollDiv6(scrollDiv6);

    const allScrollDivValues = [scrollDiv1, scrollDiv2, scrollDiv3, scrollDiv4, scrollDiv5, scrollDiv6];

    const getActiveDivIndex = allScrollDivValues.findIndex(value => value > 0 && value <= 1);

    const currentCoord = getCurrentCoord(data[getActiveDivIndex-1], data[getActiveDivIndex], data[getActiveDivIndex+1], allScrollDivValues[getActiveDivIndex], defCoord)

    console.log(currentCoord);

    setMapCoord(currentCoord);

  }, [scrollPercentage]);

  return (
    <div ref={scrollRef} style={{ height: "100vh", overflowY: "scroll" }}>

      {/* div 1 */}
      <div ref={div1ref} style={{ height: 400, margin: 10, backgroundColor: "gray", textAlign: "center", fontSize: 50 }}>
        Überschrift
        <br />
        {scrollDiv1}
      </div>

      {/* div 2 */}
      <div ref={div2ref} style={{ height: 400, margin: 10, backgroundColor: "lightgray", textAlign: "center", fontSize: 50 }}>
        Start Stadt (Dresden 51.0769207,13.7025464)
        <br />
        {scrollDiv2}
      </div>

      {/* div 3 */}
      <div ref={div3ref} style={{ height: 600, margin: 10, backgroundColor: "gray", textAlign: "center", fontSize: 50 }}>
        Reise 1
        <br />
        {scrollDiv3}
      </div>

      {/* div 4 */}
      <div ref={div4ref} style={{ height: 400, margin: 10, backgroundColor: "lightgray", textAlign: "center", fontSize: 50 }}>
        Zwischen Stadt (Leipzig 51.3419134,12.2535535)
        <br />
        {scrollDiv4}
      </div>

      {/* div 5 */}
      <div ref={div5ref} style={{ height: 600, margin: 10, backgroundColor: "gray", textAlign: "center", fontSize: 50 }}>
        Reise 2
        <br />
        {scrollDiv5}
      </div>

      {/* div 6 */}
      <div ref={div6ref} style={{ height: 400, margin: 10, backgroundColor: "lightgray", textAlign: "center", fontSize: 50 }}>
        Ende Stadt (Chemnitz 50.8227027,12.8209368)
        <br />
        {scrollDiv6}
      </div>

      <h1 style={{ position: "fixed", top: 10, left: 10 }}>
        {`${scrollPercentage}%`}
      </h1>

      <div style={{ position: "fixed", top: "20%", marginTop: -150, left: '100%', marginLeft: -450, borderRadius: "50%", width: 300, height: 300, border: '10px solid black' }}>

        <MapContainer center={mapCoord} zoom={10}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <ChangeView center={mapCoord} zoom={10} /> 
          <Marker position={[51.0769207,13.7025464]}>
            <Popup>
              Dresden
            </Popup>
          </Marker>
          <Marker position={[51.3419134,12.2535535]}>
            <Popup>
              Leipzig
            </Popup>
          </Marker>
          <Marker position={[50.8227027,12.8209368]}>
            <Popup>
              Chemnitz
            </Popup>
          </Marker>
          <Polyline positions={[
            [51.0769207,13.7025464],
            [51.3419134,12.2535535],
            [50.8227027,12.8209368]
          ]} />
        </MapContainer>

      </div>

    </div>
  );
}

export default App;
