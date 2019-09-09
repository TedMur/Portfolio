var rea = require('../rea')()

rea

('/', function(req, res) {
  res.writeHead(200)
  res.end('Hello, world!')
})

('/foo')
  ({
    get: function(req, res) {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end([
        '<html><body>'
      , 'GET /foo'
      , '<form method="post" action="">'
      , '<input type="submit">'
      , '</form>'
      , '</html></body>'
      ].join(''))
    }
  , post: function(req, res) {
      res.writeHead(200)
      res.end('POST /foo')
    }
  })

('/bar')
  (function(req, res) {
    res.end('GET /bar')
  })

()

var connect = require('connect')
connect.createServer(
  rea.router
, connect.static(__dirname)
).listen(8080, 'localhost')