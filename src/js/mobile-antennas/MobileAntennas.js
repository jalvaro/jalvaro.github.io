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
        antennas: []
    };

    componentDidMount() {
        getAntennas(this.state.selectedArea)
            .then(antennas => this.setState({antennas: antennas}));
    }

    render() {
        return (
            <div style={{height: "700px"}}>
                <h2>Mobile Antennas</h2>
                <MapContainer antennas={this.state.antennas}/>
            </div>
        );
    }
}

export default MobileAntennas;