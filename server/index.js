const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
var MongoClient = require('mongodb').MongoClient;

const app = express();

app.use(express.static(path.join(__dirname, '../client/build')));

MongoClient.connect('mongodb://localhost:27017/root', function (err, client) {
	if (err) throw err;
	var db = client.db('techzilla');
	db.collection('todo').find().toArray(function (err, result) {
		if (err) throw err;
		console.log(result);
	})
})

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(process.env.PORT || 8080);