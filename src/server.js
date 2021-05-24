const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.end('Hello server');
});

app.listen(8080, () => console.log('Server listen on port 8080'));
