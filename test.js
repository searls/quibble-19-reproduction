var quibble = require('quibble')
var assert = require('assert')

quibble('./dep', function () { return 'fake' })
var sub = require('./sub')

assert.equal(sub(), 'fake')

quibble.reset()

quibble('./dep', function () { return 'fake2' })
var sub = require('./sub')

assert.equal(sub(), 'fake2')
