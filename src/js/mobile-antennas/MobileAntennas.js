import React from "react";
import MapContainer from "./MapContainer";
import {getAntennas} from "./InfoAntennasResource";


class MobileAntennas extends React.Component {
    state = {
        selectedArea: {
            SWPoint: {
                lat: 41.738103675076,
                lng: -3.6525553686015
            },
            NEPoint: {
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

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.selectedArea !== prevState.selectedArea) {
            getAntennas(this.state.selectedArea)
                .then(markers => this.setState({markers: markers}));
        }
    }

    handler(SWPoint, NEPoint) {
        this.setState({
            selectedArea: {
                SWPoint: SWPoint,
                NEPoint: NEPoint
            }
        })
    }

    render() {
        return (
            <div style={{height: "700px"}}>
                <h2>Mobile Antennas</h2>
                <MapContainer
                    markers={this.state.markers}
                    updateArea={this.handler.bind(this)}
                />
            </div>
        );
    }
}

export default MobileAntennas;