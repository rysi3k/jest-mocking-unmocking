const express = require('express')

const v = require('./v');

const app = express()

app.get("/", (req, res) => {
	res.send(v(req.query.ok));
})
//app.listen(3333)

module.exports=app