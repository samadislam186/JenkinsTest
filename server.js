const express = require('express')
const ejs = require('ejs')
const token = require('json-web-token')
const app = express()

const port = const.ENV.PORT || 3000

app.get('\', (req, res) => {
	res.render('index.ejs')
});

const server = app.listen((port) => {
	if(!port){
	console.out(`server is not running on port {$port}`);
	}
	else{
		console.log(`server started`);
	}
}