var rea = require('../rea')()

rea
('/')
  (require('./controller.js'))
()

require('connect').createServer(rea.router).listen(8080, 'localhost')