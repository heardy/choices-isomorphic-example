import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../common/App";

const app = express();

app.get("*", (req, res) => {

    let application = renderToString(<App />);

    let html = `<!doctype html>
    <html class="no-js" lang="">
        <head>
            <meta charset="utf-8">
            <meta http-equiv="x-ua-compatible" content="ie=edge">
            <title>Choices.js isomorphic example</title>
            <meta name="description" content="">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/choices.js/3.0.4/styles/css/base.min.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/choices.js/3.0.4/styles/css/choices.min.css">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/choices.js/3.0.4/choices.min.js"></script>
        </head>
        <body>
            <div id="root">${application}</div>
            <script src="http://localhost:3001/client.js"></script>
        </body>
    </html>`;

    res.send(html);
    
});

export default app;
