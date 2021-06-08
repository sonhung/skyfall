import React, { useState } from 'react'
import MapGL from 'react-map-gl'
// import ControlPanel from './ControlPanel'

const MAPBOX_TOKEN ='pk.eyJ1Ijoic29uaHVuZzkyIiwiYSI6ImNrb3ZrbXJrazA3dngyd3B0czhrbzM1a2MifQ.KBqORx02KtDniE0pN_RCvQ'

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.729,
    longitude: -122.36,
    zoom: 11,
    bearing: 0,
    pitch: 50
  })

  // const [settings, setSettings] = useState({
  //   dragPan: true,
  //   dragRotate: true,
  //   scrollZoom: true,
  //   touchZoom: true,
  //   touchRotate: true,
  //   keyboard: true,
  //   doubleClickZoom: true,
  //   minZoom: 0,
  //   maxZoom: 20,
  //   minPitch: 0,
  //   maxPitch: 85
  // })

  return (
    <>
      <MapGL
        {...viewport}
        // {...settings}
        width="100vw"
        height="100vh"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={setViewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      />
    </>
  );
}

export default Map
