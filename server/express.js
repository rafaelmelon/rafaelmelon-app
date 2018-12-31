const express = require('express');
const path = require('path');
const app = express();
const portNumber = process.env.PORT || 8080;
const sourceDir = 'dist';

app.use(express.static(sourceDir));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(portNumber, () => {
  console.log(`Express web server started: http://localhost:${portNumber}`);
  console.log(`Serving content from /${sourceDir}/`);
});
