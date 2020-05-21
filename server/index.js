// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// var MongoClient = require('mongodb').MongoClient;

// const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
// // app.use(bodyParser.json());
// // app.use(express.static(path.join(__dirname, '../client/build')));

// // MongoClient.connect('mongodb://localhost:27017/root', function (err, client) {
// // 	if (err) throw err;
// // 	var db = client.db('techzilla');
// // 	db.collection('todo').find().toArray(function (err, result) {
// // 		if (err) throw err;
// // 		console.log(result);
// // 	})
// // })
// app.post('/login', function (request, response) {
// 	console.log(request.body);
// 	response.send("Hello there!!");
// });
// // app.get('/', function (req, res) {
// // 	res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
// // });

// app.listen(process.env.PORT || 8080);

const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
var cors = require('cors')

var app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
app.use(express.static(path.join(__dirname, '../client/build')));

const port = 8080

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.post('/login', cors(), function (req, res) {
    console.log(req.body)
    res.json({ status:200, id:123 })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))