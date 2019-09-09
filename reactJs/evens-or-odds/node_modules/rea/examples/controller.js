module.exports = {
  get: function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end([
      '<html><body>'
    , 'GET /'
    , '<form method="post" action="">'
    , '<input type="submit">'
    , '</form>'
    , '</html></body>'
    ].join(''))
  }
, post: function(req, res) {
    res.writeHead(200)
    res.end('POST /')
  }
}