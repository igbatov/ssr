import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import routes from '../components/app/routes'
import App from "../components/app/App";
import About from "../components/app/About";

ReactDOM.render(
    <Router routes={routes} history={browserHistory} />,
    document.getElementById('app')
);
