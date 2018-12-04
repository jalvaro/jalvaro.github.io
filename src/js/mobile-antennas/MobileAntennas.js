import React from "react";
import MapContainer from "./MapContainer";
import {getAntennas} from "./InfoAntennasResource";


class MobileAntennas extends React.Component {
    state = {
        selectedArea: {
            pointA: {
                lat: 41.738103675076,
                lng: -3.6525553686015
            },
            pointB: {
                lat: 42.044144009778,
                lng: -3.2428779584757
            }
        },
        markers: []
    };

    componentDidMount() {
        getAntennas(this.state.selectedArea)
            .then(markers => this.setState({markers: markers}));
    }

    render() {
        return (
            <div style={{height: "700px"}}>
                <h2>Mobile Antennas</h2>
                <MapContainer markers={this.state.markers}/>
            </div>
        );
    }
}

export default MobileAntennas;