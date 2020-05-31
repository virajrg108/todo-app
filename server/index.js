require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
var cors = require('cors')
const MongoClient = require('mongodb').MongoClient;
const uri = process.env.uri;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express()
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());
app.use(cors())
app.use(express.static(path.join(__dirname, '../client/build')));

const port = 8080

client.connect((err, db) => {
	if (err) console.error("DB error");
	const authen = client.db("tasks").collection("users");
	app.get('/', function (req, res) {
		res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
	});

	//Authentication
	app.post('/auth/:type', cors(), function (req, res) {
		console.log(req.params.type, req.body);
		if (req.params.type == "login")
			authen.find(req.body).toArray(function (err, results) {
				if (!err)
					res.json({ status: 200, id: results[0]._id });
				else
					res.json({ status: 500 });
			});
		else
			authen.find({name:req.body.name}).toArray(function (err, results) {
				if (!err && results.length == 0) {
					authen.insertOne(req.body, function (err, ress) {
						if (err) res.json({ status: 500 });
						res.json({status: 200, _id: ress.ops[0]._id})
						console.log(ress.ops[0]._id);
					});
				}
				else
					res.json({ status: 500 });
			});
	});

	//Todo
});




app.listen(port, () => console.log(`Example app listening on port ${port}!`))
client.close();