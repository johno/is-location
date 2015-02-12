'use strict'

module.exports = function isLocation(location) {
  return typeof location === 'object' &&
         hasProperties(location) &&
         hasFunctions(location)
}

function hasProperties(location) {
  return [
    'replace', 'assign', 'origin', 'hash', 'search', 'pathname',
    'port', 'hostname', 'host', 'protocol', 'href', 'reload'
  ].every(function(property) {
    return location.hasOwnProperty(property)
  })
}

function hasFunctions(location) {
  return ['replace', 'assign', 'reload'].every(function(fn) {
    return typeof location[fn] === 'function'
  })
}
