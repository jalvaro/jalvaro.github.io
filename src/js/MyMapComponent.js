import React from 'react';
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps"
import DrawingManager from "react-google-maps/lib/components/drawing/DrawingManager";

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <div>
        <GoogleMap
            defaultZoom={13}
            defaultCenter={{lat: 41.860768, lng: -3.388736}}>
            {
                props.markers.map((marker, index) => (
                    <Marker key={index} position={marker.position}/>
                ))
            }

            <DrawingManager
                defaultDrawingMode={window.google.maps.drawing.OverlayType.RECTANGLE}
                defaultOptions={{
                    drawingControl: true,
                    drawingControlOptions: {
                        position: window.google.maps.ControlPosition.TOP_CENTER,
                        drawingModes: [
                            window.google.maps.drawing.OverlayType.RECTANGLE
                        ],
                    }
                }}
            />
        </GoogleMap>
    </div>
));


/*<Rectangle
    bounds={{
        north: 41.960768,
        south: 41.860768,
        east: -3.388736,
        west: -3.888736
    }}
    options={{
        fillColor: `red`,
        fillOpacity: 0.20,
        strokeColor: `red`,
        strokeOpacity: 1,
        strokeWeight: 1,
    }}
/>*/
export default MyMapComponent;