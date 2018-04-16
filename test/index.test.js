/* eslint global-require: off */
/* eslint max-len: off */

'use strict'

var errorResponse = require( '../src' )
var tap = require( 'tap' )

tap.test( 'errorResponse for minimum res when NODE_ENV is set to development',
  function ( t ) {
    var err = new Error( 'oops!' )
    var res = require( './fixtures/res-minimum' )
    var actual = errorResponse( err, res, 'development' )

    t.match( actual, '<pre>Error: oops!', 'should contain the error message prefixed with the <pre> tag' )
    t.match( actual, 'test/index.test.js', 'should contain a reference to the test script in the err.stack' )
    t.end()
  }
)

tap.test( 'errorResponse for minimum res when NODE_ENV is not set to development',
  function ( t ) {
    var err = new Error( 'oops!' )
    var res = require( './fixtures/res-minimum' )
    var actual

    actual = errorResponse( err, res, 'test' )

    t.same( actual, 'oops!', 'should be set to the error message' )
    t.end()
  }
)

tap.test( 'errorResponse for res json/application',
  function ( t ) {
    var err = new Error( 'oops!' )
    var res = require( './fixtures/res-json-application' )
    var actual
    var expected = require( './fixtures/message-json-application.js' )

    actual = errorResponse( err, res )

    t.same( actual, expected, 'should be set to the error message as an object' )
    t.end()
  }
)
