import React, { Component } from 'react';
import { Link } from 'react-router'
import './app.scss';

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <h1 className="app-heading">Hello World</h1>
                <ul role="nav">
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        );
    }
}