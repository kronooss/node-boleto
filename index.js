var fs = require('fs')
var path = require('path')

// Load banks
var banks = {}
var banksFolders = fs.readdirSync(path.join(__dirname, '/banks/'))
for (var i = 0; i < banksFolders.length; i++) {
  banks[banksFolders[i]] = require(path.join(__dirname, '/banks/' + banksFolders[i] + '/index.js'))
}

exports.Boleto = require('./lib/boleto')(banks)
exports.EdiParser = require('./lib/edi-parser')(banks)
