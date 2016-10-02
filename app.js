var express = require('express');

var app = express();

app.get('/', function (req, res) {
	res.sendFile(__dirname+'/public/index.html');
});

app.get('/api', function (req, res) {
	console.log('API request.');

	res.send({
		cities: [
			{ name: 'CKSA', value: 'Moscow' },
			{ name: 'Dinamo', value: 'Moscow' },
			{ name: 'Zenit', value: 'Saint-Petersburg' },
			{ name: 'Volgar', value: 'Astrakhan' },
			{ name: 'Chelsea', value: 'London' },
			{ name: 'Sporting', value: 'Lissabon' }
		]
	});
});

app.listen(8082, function (err) {
	console.log('Server has started at 8082 port!');
});