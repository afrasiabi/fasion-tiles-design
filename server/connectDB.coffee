mysql = require 'mysql'
connection = mysql.createConnection({
	host: 'localhost'
	user: 'root'
	password: ''
	database: 'fasionTiles'
})
connection.connect()

module.exports = connection