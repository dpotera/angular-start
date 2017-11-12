const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017', {useMongoClient: true});

const heroSchema = new Schema({
    id:  String,
    name: String
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to mongo with mongoose!');
});

app.get('/', (req, res) => res.send('Hello World! hehe'));

const heroes = require('./data/heroes.json');
app.get('/heroes', (req, res) => res.send(heroes));

app.listen(3000, () => console.log('Example app listening on port 3000!'));