import express from 'express'

import renderer from './helpers/renderer';

const app = express();

app.use(express.static('public'))

app.get("/", (_, res) => {
  const html = renderer()
  res.send(html);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
