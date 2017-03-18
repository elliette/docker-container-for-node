'use strict';
var retry = require('retry');
const express = require('express');
var models = require('./models');
var Sandcastle = models.Sandcastle;
var db = models.db; 
var pg = require('pg')

var operation = retry.operation({retries:3}); 

// Constants
const PORT = 8080;

// App

operation.attempt(function() {
  var client = new pg.Client()
  client.connect(function(e) {
    client.end()
    if(operation.retry(e)) {
      return;
    }
    if(!e) console.log("Hello Postgres!")


    const app = express();
    app.get('/', function (req, res) {
    	console.log(req.url);
    	Sandcastle.create({
       	 	name: 'jems'
     	 })
      .then(() => {
        res.write('Hello Can you see this???')
        res.end();
      })
      .catch(console.error);
    });

    db.sync({force: true})
    .then(() => {
      app.listen(PORT, () => {
        console.log(process.env.DATABASE_URL);
        console.log('Running on http://localhost:3001');
      });
    })

  })
})

