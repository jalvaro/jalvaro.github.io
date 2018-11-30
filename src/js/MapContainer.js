import React, {Component} from 'react';
import PropTypes from 'prop-types'
import MyMapComponent from "./MyMapComponent";

export default class MapContainer extends Component {
    static propTypes = {
        antennas: PropTypes.array
    };

    render() {
        return (
            <MyMapComponent
                googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAD3PcPQGczmphFRsTbIb0R3RSrSw6SWA4"}
                loadingElement={<div style={{height: `100%`}}/>}
                containerElement={<div style={{height: "100%"}}/>}
                mapElement={<div style={{height: "100%"}}/>}
                markers={this.props.antennas}
            />
        );
    }
}
