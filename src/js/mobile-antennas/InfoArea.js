import React, {Component} from "react";

class InfoArea extends Component {
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
        .map((description, index) => (
            <div key={index}>
                <strong>{description}:</strong> {properties[description]}
            </div>
        ));

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

export {InfoArea};