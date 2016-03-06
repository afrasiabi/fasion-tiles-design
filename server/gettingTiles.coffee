connection = require './connectDB'

gettingTiles = (cb) ->
	connection.query 'SELECT * FROM `tiles`', (err, rows, fields) ->
		if err
			cb {success: false}
			return
		for row in rows
			row.tileSize = 
				height: row.tileHeight
				width: row.tileWidth
			row.source = "http://localhost/project2/assets/pics/#{row.source}"	
			row.tileHeight = undefined
			row.tileWidth = undefined
		cb {success: true, tiles: rows}

module.exports = gettingTiles