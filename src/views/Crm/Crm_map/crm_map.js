
import React from 'react'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'

const geoUrl = 'https://raw.githubusercontent.com/deldersveld/topojson/master/continents/south-america.json'

const markers = [
    {
        markerOffset: -15,
        name: 'Buenos Aires',
        coordinates: [-38.3816, -44.6037],
    },
    { markerOffset: -15, name: 'La Paz', coordinates: [-68.1193, -16.4897]},
    { markerOffset: 25, name: 'Brasilia', coordinates: [-47.8825, -15.7942] },
    { markerOffset: 25, name: 'Santiago', coordinates: [-70.6693, -33.4489] },
    { markerOffset: 25, name: 'Bogota', coordinates: [-74.0721, 4.711] },
    { markerOffset: 25, name: 'Quito', coordinates: [-78.4678, -0.1807] },
    { markerOffset: -15, name: 'Georgetown', coordinates: [-58.1551, 6.8013] },
    { markerOffset: -15, name: 'Asuncion', coordinates: [-57.5759, -25.2637] },
    { markerOffset: 25, name: 'Paramaribo', coordinates: [-55.2038, 5.852] },
    { markerOffset: 25, name: 'Montevideo', coordinates: [-56.1645, -34.9011] },
    { markerOffset: -15, name: 'Caracas', coordinates: [-66.9036, 10.4806] },
    { markerOffset: -15, name: 'Lima', coordinates: [-77.0428, -12.0464] },
]

const CrmWorldMap = () => {
    return (
        <ComposableMap
            height={350}
            projectionConfig={{
            scale: 200,
            }}
        >
            <Geographies geography={geoUrl}>
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography
                            fill="#EAEAEC"
                            stroke="#D6D6DA"
                            key={geo.rsmKey}
                            geography={geo}
                        />
                    ))
                }
            </Geographies>
                   {markers.map(({ name, coordinates, markerOffset, color }) => (
                <Marker key={name} coordinates={coordinates} color={color}>
                    <circle r={5} fill="#F00" stroke="#fff" strokeWidth={1} />
                    <text
                        textAnchor="middle"
                        y={markerOffset}
                        style={{ fontFamily: 'system-ui', fill: '#5D5A6D' }}
                    >
                        {name}
                    </text>
                </Marker>
            ))}
        </ComposableMap>
    )
}

export default CrmWorldMap

