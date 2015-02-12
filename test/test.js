var assert = require('assert')
var isLocation = require('..')

var location = {
  assign: function() {},
  replace: function() {},
  reload: function() {},
  toString: function() { return 'http://github.com' },
  hash: '',
  host: 'github.com',
  hostname: 'github.com',
  href: 'https://github.com/',
  origin: 'https://github.com',
  pathname: '/',
  port: '',
  protocol: 'https:',
  search: ''
}

describe('is-location', function() {

  it('should return true if it appears to be a location object', function() {
    assert.ok(isLocation(location))
  })

  it('should return fale if it does not appear to be a location object', function() {
    assert.ok(!isLocation({}))
  })
})
