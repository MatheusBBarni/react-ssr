import React from "react";
import { renderToString } from "react-dom/server";

import Home from "../client/components/Home";

export default () => {
  const content = renderToString(<Home />);

  const html = `
    <html>
      <head>
        <title>NemixJS</title>
      </head>
      <body>
        <div id="__NEMIXJS__">
          ${content}
        </div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `

  return html
}