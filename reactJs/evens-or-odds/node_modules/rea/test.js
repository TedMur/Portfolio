// expresso tests

var connect = require('connect')
  , assert = require('assert')
  , Rea = require('./rea')

module.exports = {
  'test simple': function() {
    var app = connect.createServer(
      Rea()('/', function(req, res){
        res.end('GET /')
      })()
    )

    assert.response(app
    , { url: '/' }
    , { body: 'GET /' })
  }

, 'test function': function() {
    var app = connect.createServer(
      Rea()('/')(function(req, res){
        res.end('GET /')
      })()
    )

    assert.response(app
    , { url: '/' }
    , { body: 'GET /' })
  }

, 'test inline middleware': function() {
    var app = connect.createServer(
      Rea()
      ('/')
        (function(req, res, next) {
          assert.equal(req.url, '/')
          req.foo = true
          next()
        })
        (function(req, res) {
          assert.strictEqual(req.foo, true)
          res.end('GET /')
        })
      ()
    )

    assert.response(app
    , { url: '/' }
    , { body: 'GET /' })
  }
  
, 'test object': function() {
    var app = connect.createServer(
      Rea()('/', {
        get: function(req, res) {
          res.end('GET /')
        }
      , post: function(req, res) {
          res.end('POST /')
        }
      , put: function(req, res) {
          res.end('PUT /')
        }
      })()
    )

    assert.response(app
    , { url: '/' }
    , { body: 'GET /' })
    
    assert.response(app
    , { url: '/', method: 'POST' }
    , { body: 'POST /' })
    
    assert.response(app
    , { url: '/', method: 'PUT' }
    , { body: 'PUT /' })
  }

, 'test object with array middleware': function() {
    var app = connect.createServer(
      Rea()('/', {
        get: [
          function(req, res, next) {
            assert.equal(req.url, '/')
            req.foo = true
            next()
          }        
        , function(req, res) {
            assert.strictEqual(req.foo, true)
            res.end('GET /')
          }
        ]
      , post: [
          function(req, res, next) {
            assert.equal(req.url, '/')
            req.foo = true
            next()
          }        
        , function(req, res) {
            assert.strictEqual(req.foo, true)
            res.end('POST /')
          }
        ]
      })()
    )

    assert.response(app
    , { url: '/' }
    , { body: 'GET /' })
    
    assert.response(app
    , { url: '/', method: 'POST' }
    , { body: 'POST /' })
  }
  
, 'test multiple': function() {
    var app = connect.createServer(
      Rea()
        ('/', function(req, res) {
          res.end('GET /')
        })
        ('/foo')
          (function(req, res) {
            res.end('GET /foo')
          })
        ('/bar')
          (function(req, res, next) { next() })
          (function(req, res) {
            res.end('GET /bar')
          })
      ()
    )

    assert.response(app
    , { url: '/' }
    , { body: 'GET /' })
    
    assert.response(app
    , { url: '/foo' }
    , { body: 'GET /foo' })

    assert.response(app
    , { url: '/bar' }
    , { body: 'GET /bar' })    
  }
  
, 'test order': function() {
    var app = connect.createServer(
      Rea()
      ('/', function(req, res){
        res.end('GET /1')
      })
      ('/', function(req, res){
        res.end('GET /2')
      })
      ()
    )

    assert.response(app
    , { url: '/' }
    , { body: 'GET /1' })
  }
  
, 'test rea.router': function() {
    var rea = Rea()
    
    var app = connect.createServer(
      rea.router
    )
    
    rea('/', function(req, res){
      res.end('GET /')
    })()

    assert.response(app
    , { url: '/' }
    , { body: 'GET /' })
  }  
}

