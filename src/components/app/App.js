import React, { Component } from 'react';
import { Link } from 'react-router'
import './app.scss';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { value: "" };
    }
    onClick(event) {
        event.preventDefault();
        this.setState({value: "Wow"})
    }
    render() {
        return (
            <div className="app">
                <h1 className="app-heading">Hello World {this.state.value}</h1>
                <ul role="nav">
                    <li><Link onClick={this.onClick.bind(this)} to="/about">About</Link></li>
                </ul>
            </div>
        );
    }
}