import React from 'react';
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps"

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
        </GoogleMap>
    </div>
));

export default MyMapComponent;