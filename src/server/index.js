import React from 'react';
import ReactDOMServer from 'react-dom/server';
import templateFn from './template';
import routes from '../components/app/routes'
import { match, RouterContext } from 'react-router'

export default (req, res) => {
    match({ routes: routes, location: req.url }, (err, redirect, props) => {
        // `RouterContext` is what the `Router` renders. `Router` keeps these
        // `props` in its state as it listens to `browserHistory`. But on the
        // server our app is stateless, so we need to use `match` to
        // get these props before rendering.
        const html = ReactDOMServer.renderToString(
            <RouterContext {...props} />
        );
        const template = templateFn(html);
        res.send(template);
    })

};