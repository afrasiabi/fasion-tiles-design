express = require "express"
gettingTiles = require "./gettingTiles"
cors = require 'express-cors'

port = 3000

app = express()
app.use cors {allowedOrigins: ['localhost']}
app.get '/gettingTiles', (req, res) ->
	gettingTiles (result) ->
		res.json(result)

app.listen port, ->
	console.log "server is ready on port #{port}"