const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.createCollection("heroes", (err, res) => {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});