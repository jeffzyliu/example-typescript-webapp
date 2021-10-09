const path = require('path');
const express = require('express');

const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(`${__dirname}/build`));

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, './build/index.html'));
});

app.listen(port, '0.0.0.0', (err) => {
  if (err) console.error(err);
  console.info(`Listening on port ${port}. View in browser: http://0.0.0.0:${port}.`);
});
