const express = require('express');
const app = express();
const mongo = require('mongodb');



app.get('/', (req, res) => res.send('Hello World! hehe'));

const heroes = require('./data/heroes.json');
app.get('/heroes', (req, res) => res.send(heroes));

app.listen(3000, () => console.log('Example app listening on port 3000!'));