import React, { useState } from 'react';
import MapGL, {LinearInterpolator, WebMercatorViewport} from 'react-map-gl';
import bbox from '@turf/bbox';

import ControlPanel from './ControlPanel';
import MAP_STYLE from './mapStyle/mapStyle';

const MAPBOX_TOKEN ='pk.eyJ1Ijoic29uaHVuZzkyIiwiYSI6ImNrb3ZrbXJrazA3dngyd3B0czhrbzM1a2MifQ.KBqORx02KtDniE0pN_RCvQ'

export default function MapComponent() {
  const [viewport, setViewport] = useState({
    latitude: 9.0065121,
    longitude: 4.1799891,
    zoom: 4,
    bearing: 0,
    pitch: 0
  });

  const onClick = event => {
    const feature = event.features[0];
    if (feature) {
      // calculate the bounding box of the feature
      const [minLng, minLat, maxLng, maxLat] = bbox(feature);
      // construct a viewport instance from the current state
      const vp = new WebMercatorViewport(viewport);
      const {longitude, latitude, zoom} = vp.fitBounds(
        [
          [minLng, minLat],
          [maxLng, maxLat]
        ],
        {
          padding: 40
        }
      );

      setViewport({
        ...viewport,
        longitude,
        latitude,
        zoom,
        transitionInterpolator: new LinearInterpolator({
          around: [event.offsetCenter.x, event.offsetCenter.y]
        }),
        transitionDuration: 1000
      });
    }
  };

  return (
    <>
      <MapGL
        {...viewport}
        width="100vw"
        height="100vh"
        mapStyle={MAP_STYLE}
        interactiveLayerIds={['sf-neighborhoods-fill']}
        onClick={onClick}
        onViewportChange={v => setViewport(v)}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      />
      <ControlPanel />
    </>
  );
}
