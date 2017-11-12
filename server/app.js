const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bodyParser = require('body-parser');

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017', {useMongoClient: true});

app.use(bodyParser.json());

const heroSchema = new Schema({
    id:  String,
    name: String
});
const Hero = mongoose.model('Hero', heroSchema);
const dominik = new Hero({id: 1, name: 'Dominik'});
// dominik.save((err, dominik) => {
//     if (err) throw err;
//     console.log(`${dominik.name} saved in Database`);
// });

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
app.post('/heroes', (req, res) => {
    console.dir(req.body);
    new Hero({
        id: req.body.id,
        name: req.body.name
    }).save((err, hero) => {
        if (err) throw err;
        console.log(`${hero.name} saved in Database!`);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(`${hero.name} saved in Database!`);
    })
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));