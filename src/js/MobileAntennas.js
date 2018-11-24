import React from "react";
import MapContainer from "./MapContainer";
import 'whatwg-fetch'


class MobileAntennas extends React.Component {
    state = {
        selectedArea: {
            pointA: {
                lat: 41.838103675076,
                lng: -3.3525553686015
            },
            pointB: {
                lat: 41.844144009778,
                lng: -3.3428779584757
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

const getAntennas = area => {
    // localhost:5000/antennas?lat1=41.838103675076&lng1=-3.3525553686015&lat2=41.844144009778&lng2=-3.3428779584757
    const url = new URL("https://infoantenas.herokuapp.com/antennas");
    const params = {
        lat1: area.pointA.lat,
        lng1: area.pointA.lng,
        lat2: area.pointB.lat,
        lng2: area.pointB.lng,
    };

    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    return fetch(url)
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