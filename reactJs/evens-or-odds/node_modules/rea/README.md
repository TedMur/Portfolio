Rea
===

[Rea] [1] is a fancy wrapper over connect.router

  [1]: http://en.wikipedia.org/wiki/Rhea_(mythology)
  
Installing
----------
    npm install rea

Usage
-----
```javascript
// require rea
var Rea = require('rea')

// initialize a rea instance
var rea = Rea()

// rea is a recursive function that returns itself
rea

// simple syntax
('/', function(req, res) {
  res.writeHead(200)
  res.end('Hello, world!')
})
 
// also accepts an object, matching methods to http methods
// useful for RESTful applications
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
  // also accepts an array so you can have middleware
  , put: [
      function(req, res, next) {
        console.log('I am a middleware only for this route and method!')
      }
    , function(req, res) {
        res.writeHead(200)
        res.end('PUT /foo')
      }
    ]
  })

('/bar')
  (function(req, res, next) {
    console.log('I am a middleware only for this route!')
    next()
  })
  (function(req, res) {
    res.end('GET /bar')
  })

() // done with the routes, returns rea.router

// use in our server
require('connect').createServer(rea.router).listen(8080, 'localhost')

```

See the examples for more fancy stuff Rea can do

Have fun!