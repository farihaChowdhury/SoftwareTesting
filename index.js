const http = require('http');
const { handleRequest } = require('./routes');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const server = http.createServer(handleRequest);

server.on('error', (err) => {
  console.error(err);
  server.close();
});

server.on('close', () => console.log('Server closed.'));

server.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = process.env.DBURL;

// Database Name
const dbName = 'users';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function (err) {
  assert.equal(null, err);
  console.log('Connected successfully to server');

  const db = client.db(dbName);

  client.close();
});

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://zebaramzan:ZE_2652126922_ba@cluster0.pvlywum.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
