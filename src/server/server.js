import fs from 'fs'
import path from 'path'
import handlebars from 'handlebars'

import Hapi from '@hapi/hapi'
import React from 'react'
import ReactDom from 'react-dom/server'

import {setPath} from 'hookrouter'
import App from '../App'

const IMG = /\.(jpg|jpeg|gif|png)(\?v=\d+\.\d+\.\d+)?$/;

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    await server.register(require('@hapi/inert'))

    server.route({
        method: 'GET',
        path: '/main.css',
        handler: (request, h) => h.file(path.join(process.cwd(), 'dist', 'main.css'))
    })

    server.route({
        method: 'GET',
        path: '/main.js',
        handler: (request, h) => h.file(path.join(process.cwd(), 'dist', 'main.js'))
    })

    server.route({
        method: 'GET',
        path: '/{any*}',
        handler: (request, h) => {
            if (IMG.test(request.path)) {
                return h.file(path.join(process.cwd(), 'dist', request.path))
            }
            setPath(request.path)
            const pathIndexHTML = path.join(process.cwd(), 'dist', 'index.html')
            const template = handlebars.compile(fs.readFileSync(pathIndexHTML, 'utf8'))
            const result = ReactDom.renderToString(<App />)
            return template({
                content: result
            })
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();