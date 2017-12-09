const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bodyParser = require('body-parser');

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017', {useMongoClient: true});

app.use(bodyParser.json());
app.use(cors());

const heroSchema = new Schema({
    _id:  String,
    id:  String,
    name: String
});
const Hero = mongoose.model('Hero', heroSchema);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to mongo with mongoose!');
});

app.get('/', (req, res) => res.send('Hello World!'));

// const heroes = require('./data/heroes.json');
app.get('/heroes', (req, res) => {
    Hero.find((err, heroes) => {
        if (err) throw err;
        res.send(heroes);
        console.log(heroes);
    });
});

// const heroes = require('./data/heroes.json');
app.get('/heroes/:id', (req, res) => {
    Hero.findOne({_id: req.params.id}, (err, heroes) => {
        if (err) responseError(err, res);
        else {
            res.send(heroes);
            console.log(heroes);
        }
    });
});

app.post('/heroes', (req, res) => {
    console.dir(req.body);
    new Hero({
        _id: req.body.id,
        id: req.body.id,
        name: req.body.name
    }).save((err, hero) => {
        if (err) responseError(err, res);
        else {
            console.log(`${hero.name} saved in Database!`);
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(`${hero.name} saved in Database!`);
        }
    })
});

app.delete('/heroes/:id', (req, res) => {
    Hero.remove({_id: req.params.id.toString()}, (err) => {
        if (err) responseError(err, res);
        else {
            console.log(`Hero id:${req.params.id} deleted from Database!`);
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(`Hero id:${req.params.id} deleted from Database!`);
        }
    })
});

function responseError(err, res) {
    console.log(err.message);
    res.writeHead(400, {'Content-Type': 'text/html'});
    res.end(err.message);
}
