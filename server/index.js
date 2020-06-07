require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
var cors = require('cors')
const MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
const uri = process.env.uri;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express()
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(cors())
app.use(express.static(path.join(__dirname, '../client/build')));

const port = 8080

client.connect((err, db) => {
	if (err) console.error("DB error");
	const authen = client.db("tasks").collection("users");
	const todos = client.db("tasks").collection("todos");
	app.get('/', function (req, res) {
		res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
	});

	//Authentication
	app.post('/auth/:type', cors(), function (req, res) {
		if (req.params.type == "login")
			authen.find(req.body).toArray(function (err, results) {
				if (!err && results.length!=0) {
					res.json({ status: 200, _id: results[0]._id, label: results[0].label });
				}
				else
					res.json({ status: 500 });
			});
		else
			authen.find({ name: req.body.name }).toArray(function (err, results) {
				if (!err && results.length == 0) {
					authen.insertOne({name:req.body.name, pass: req.body.pass, label:['personal', 'work', 'casual']}, function (err, ress) {
						console.log(ress, err)
						if (err) res.json({ status: 500 });
						else res.json({ status: 200, _id: ress.ops[0]._id, label: ress.ops[0].label })
					});
				}
				else
					res.json({ status: 500 });
			});
	});

	//Todo
	app.post('/todo/:type', function (req, res) {
		if (req.params.type == 'get') {
			todos.find({ user: req.body.name }).toArray(function (err, results) {
				if (!err) {
					res.json({ status: 200, todos: results });
				}
				else {
					res.json({ status: 500 });
				}
			});
		}
		else if (req.params.type == 'add') {
			todos.insertOne(req.body, function (err, results) {
				if (!err && results.ok == 1) res.json({ status: 500 });
				else
					res.json({ status: 200, todo: results.ops[0] })
			});
		}
		else if (req.params.type == 'edit') {
			todos.updateOne({ _id: ObjectID(req.body._id) }, { $set: { name: req.body.name, desc: req.body.desc, due: req.body.due, status: req.body.status, priority: req.body.priority, label: req.body.label } }, function (err, results) {
				if (err) res.json({ status: 500 });
				else
					res.json({ status: 200 })
			});
		}
		else if (req.params.type == 'delete') {
			todos.deleteOne({ _id: ObjectID(req.body._id) }, function (err, results) {
				if (!err && results.deleteCount != 0) {
					res.json({ status: 200 });
				}
				else
					res.json({ status: 500 });
			});
		}

	});

	//Labels
	app.post('/labels', function (req, res) {
		authen.updateOne({ _id: ObjectID(req.body._id) }, { $set: { label: req.body.labels } }, function (err, results) {
			if (!err && results.modifiedCount==1) res.json({ status: 200 });
			else
				res.json({ status: 500 })
		});
	});
});




app.listen(port, () => console.log(`Example app listening on port ${port}!`))
client.close();