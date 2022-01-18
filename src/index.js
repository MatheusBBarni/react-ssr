import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'

import Client from './client/client'

const app = express();

app.use(express.static('public'))

app.get("/", (_, res) => {
  const content = renderToString(<Client />);

  const html = `
    <html>
      <head>
      </head>
      <body>
        <div id="__NEMIXJS__">
          ${content}
        </div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `

  res.send(html);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
