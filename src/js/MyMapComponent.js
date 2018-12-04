import React, {Component} from 'react';
import {GoogleMap, InfoWindow, Marker, withGoogleMap, withScriptjs} from "react-google-maps"
import DrawingManager from "react-google-maps/lib/components/drawing/DrawingManager";
import PropTypes from "prop-types";

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <div>
        <GoogleMap
            defaultZoom={13}
            defaultCenter={{lat: 41.860768, lng: -3.388736}}>
            {
                props.markers.map((antenna, index) => (
                    <InfoWindowMap
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

const getDescription = properties => Object.keys(properties)
    .map(x => <div><strong>{x}:</strong> {properties[x]} </div>);

class InfoWindowMap extends Component {
    static propTypes = {
        antenna: PropTypes.array,
        index: PropTypes.object
    };

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }

    handleToggleOpen = () => this.setState({isOpen: !this.state.isOpen});

    render() {
        return (
            <Marker
                key={this.props.index}
                position={this.props.antenna.position}
                onClick={this.handleToggleOpen}
            >
                {
                    this.state.isOpen &&
                    <InfoWindow onCloseClick={this.handleToggleOpen}>
                        <div>{getDescription(this.props.antenna.properties)}</div>
                    </InfoWindow>
                }
            </Marker>
        )
    }
}

export default MyMapComponent;