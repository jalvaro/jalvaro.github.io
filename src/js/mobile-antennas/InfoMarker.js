import React, {Component} from "react";
import PropTypes from "prop-types";
import {InfoWindow, Marker} from "react-google-maps";
import {InfoArea} from "./InfoArea";

class InfoMarker extends Component {
    static propTypes = {
        marker: PropTypes.object
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
                position={this.props.marker.position}
                onClick={this.handleToggleOpen}
            >
                {
                    this.state.isOpen &&
                    <InfoWindow onCloseClick={this.handleToggleOpen}>
                        <div>
                            {
                                this.props.marker.antennas.map((x, index) => (
                                    <InfoArea key={index} antenna={x} index={index}/>
                                ))
                            }
                        </div>
                    </InfoWindow>
                }
            </Marker>
        )
    }
}

export {InfoMarker};