import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MobileAntennas from "./MobileAntennas";

function Navigation() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/mobileAntennas">Mobile Antennas</Link>
                    </li>
                </ul>

                <hr />

                <Route exact path="/" component={Home} />
                <Route path="/mobileAntennas" component={MobileAntennas} />
            </div>
        </Router>
    );
}

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

export default Navigation;