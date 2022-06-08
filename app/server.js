const app = require('express')()

app.get('/', (req, res) => {
	res.send(`<h1>Hello World</h1> here is a web server <br> <a href="sensor/20/value">Click here for sensor values ...</a>`);
})

app.get('/sensor/:sensorid/value', (req, res) => {
	const id = +req.params["sensorid"]
	const newValue= id + Math.random());
	res.json({ "value": newValue });
})

app.post('/sensor/', (req, res) => {
	const newId = Math.floor(Math.random() * Math.floor(1000000));
	res.writeHead(302, { 'Location': `/sensor/${newId}` });
	res.end();
})

app.put('/sensor/:sensorid',
	(req, res) => res.json({ "status": "Ok, angepasst" }))

app.delete('/sensor/:sensorid',
	(req, res) => res.json({ "status": "Sensor gelöscht" }))

app.set('port', (process.env.PORT || 8080))
app.listen(app.get('port'),
	() => console.log("Using port " + app.get('port')))
