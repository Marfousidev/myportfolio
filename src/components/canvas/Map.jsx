import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (

    
    <ComposableMap
    projection="geoAzimuthalEqualArea"
    projectionConfig={{
      rotate: [50.0, 5.0, 0],
      center: [0,20],
      scale: 380
    }}

      className="w-full h-full bg-white-100 dark:bg-tertiary flex justify-center items-center "
    >
      
      <Geographies
        geography="https://raw.githubusercontent.com/Marfousidev/myportfolio/gh-pages/features.json"
        fill="#434343"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[-9, 30.0926]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#f2c329",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill= "#f2c329">
          {"Morocco"}
        </text>
      </Annotation>

      <Annotation
        subject={[-80.0908, 38.7129]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#f2c329",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#f2c329">
          {"USA"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
