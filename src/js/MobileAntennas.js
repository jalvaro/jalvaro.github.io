import React from "react";
import MapContainer from "./MapContainer";
import 'whatwg-fetch'


const url = "https://infoantenas.herokuapp.com/antennas";

class MobileAntennas extends React.Component {
    state = {
        selectedArea: {
            pointA: {
                lat: -3.3525553686015,
                lng: 41.838103675076
            },
            pointB: {
                lat: -3.3428779584757,
                lng: 41.844144009778
            }
        },
        antennas: []
    };

    componentDidMount() {
        getAntennas()
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

const getAntennas = () => {
    return window.fetch(url)
        .then(response => response.json())
        .then(mapToAntennas);
};

const mapToAntennas = response => response.features.map(x => ({
    position: {
        lat: x.geometry.coordinates[1],
        lng: x.geometry.coordinates[0]
    }
}));

export default MobileAntennas;