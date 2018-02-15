import React, { Component } from 'react';
import { Link } from 'react-router'
import './app.scss';

export default class About extends Component {
    render() {
        return (
            <div className="app">
                <h1 className="app-heading">About</h1>
                <ul role="nav">
                    <li><Link to="/">Home</Link></li>
                </ul>
            </div>
        );
    }
}