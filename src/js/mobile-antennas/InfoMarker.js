import React, {Component} from "react";
import PropTypes from "prop-types";
import {InfoWindow, Marker} from "react-google-maps";

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
                                    <DescriptionArea key={index} antenna={x} index={index}/>
                                ))
                            }
                        </div>
                    </InfoWindow>
                }
            </Marker>
        )
    }
}

class DescriptionArea extends Component {
    static propTypes = {
        antenna: PropTypes.object,
        index: PropTypes.number
    };

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }

    handleToggleOpen = () => this.setState({isOpen: !this.state.isOpen});

    getDescription = properties => Object.keys(properties)
        .map((description, index) => <div key={index}><strong>{description}:</strong> {properties[descr]} </div>);

    render() {
        return (
            <div>
                <div onClick={this.handleToggleOpen}>
                    <strong>{(this.props.index + 1) + ". " + this.props.antenna.properties["Código"]}</strong>
                </div>
                {this.state.isOpen &&
                <div style={{paddingLeft: "10px"}}>
                    {this.getDescription(this.props.antenna.properties)}
                </div>
                }
            </div>
        )
    }
}

export {InfoMarker};