/* 
 * Rea
 * by stagas
 *
 * MIT licenced
 */

var router = require('connect/lib/middleware/router')

// modified version of creationix/stack
function Stack() {
  var handle = function(req, res, next) { next() }
  ;[].slice.call(arguments).reverse().forEach(function(layer) {
    var child = handle
    handle = function (req, res, next) {
      layer(req, res, function () {
        child(req, res, next)
      })
    }
  })
  return handle
}

module.exports = function Rea() {
  var rea = function() {
    if (!arguments.length) {
      var stack = []
      rea.routes.forEach(function(route) {
        route.handlers.forEach(function(handle) {
          stack.push(router(function(app) {
            for (var method in handle) {
              if (Array.isArray(handle[method]))
                app[method].apply(this, [route.route].concat(handle[method]))
              else
                app[method](route.route, handle[method])
            }
          }))
        })
      })
      rea.handle = Stack.apply(this, stack)
      return rea.router
    }
    var route = null, handlers = []
    for (var i = 0, len = arguments.length; i < len; i++) {
      switch (typeof arguments[i]) {
        case 'string':
          route = arguments[i]
          break
        case 'function':
          handlers.push({ all: arguments[i] })
          break
        case 'object':
          if (arguments[i] instanceof RegExp) {
            route = arguments[i]
          } else {
            handlers.push(arguments[i])
          }
          break
        default:
          //
          break
      }
    }
    if (route === null) {
      var last = rea.routes.length - 1
      rea.routes[last].handlers = rea.routes[last].handlers.concat(handlers)
    } else {
      rea.routes.push({ route: route, handlers: handlers })
    }
    return rea
  }
  rea.routes = []
  rea.handle = function(req, res, next) { next() }
  rea.router = function(req, res, next) {
    return rea.handle(req, res, next)
  }
  return rea
}