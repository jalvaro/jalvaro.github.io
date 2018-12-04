import React from "react";
import PropTypes from "prop-types";
import {InfoWindow, Marker} from "react-google-maps";

class InfoMarker extends React.Component {
    static propTypes = {
        antenna: PropTypes.object
    };

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }

    handleToggleOpen = () => this.setState({isOpen: !this.state.isOpen});

    getDescription = properties => Object.keys(properties)
        .map(x => <div><strong>{x}:</strong> {properties[x]} </div>);

    render() {
        return (
            <Marker
                position={this.props.antenna.position}
                onClick={this.handleToggleOpen}
            >
                {
                    this.state.isOpen &&
                    <InfoWindow onCloseClick={this.handleToggleOpen}>
                        <div>{this.getDescription(this.props.antenna.properties)}</div>
                    </InfoWindow>
                }
            </Marker>
        )
    }
}

export {InfoMarker};