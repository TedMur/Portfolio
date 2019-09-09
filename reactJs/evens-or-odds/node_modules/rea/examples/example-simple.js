var rea = require('../rea')()

rea
('/')
  (function(req, res) {
    res.end('Hello, world!')
  })
()

require('connect').createServer(rea.router).listen(8080, 'localhost')