const express = require('express');
const app = express();

if (process.env.NODE_ENV == 'development') {
  require('dotenv').config({ path: '.env.dev' });
} else {
  require('dotenv').config({ path: '.env.prod' })
}

const data = process.env.SAMPLE_TEXT;

app.get('/', (req, res) => {
  res.send(data);
});

app.get('/task-list', (req, res) => {
  res.send(data)
});

app.get('/task-list/:id', (req, res) => {
  res.send(req.params.id + data);
});


const PORT = process.env.PORT || '5000';

app.listen(PORT, () => {
  console.log('server listening at 5000')
});