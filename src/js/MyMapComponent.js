import React from 'react';
import {GoogleMap, withGoogleMap, withScriptjs} from "react-google-maps"
import DrawingManager from "react-google-maps/lib/components/drawing/DrawingManager";
import {InfoMarker} from "./InfoMarker";

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <div>
        <GoogleMap
            defaultZoom={13}
            defaultCenter={{lat: 41.860768, lng: -3.388736}}>
            {
                props.markers.map((antenna, index) => (
                    <InfoMarker
                        antenna={antenna}
                        index={index}
                    />
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

export default MyMapComponent;