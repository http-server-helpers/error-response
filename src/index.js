'use strict'

/**
 * @param {Error} err
 * @param {int} [err.code]
 * @param {int} [err.errorCode]
 * @param {string} err.message
 * @param {string} err.stack
 * @param {int} [err.status]
 * @param {int} [err.statusCode]
 *
 * @param {IncomingMessage} req
 * @param {function} req.get
 *
 * @param {string} [env]
 *
 * @returns {object|string}
 */
function errorResponse( err, req, env ) {
  var content_type = req.get( 'content-type' ) || ''
  var response = err.message

  if ( content_type.indexOf( 'application/json' ) !== -1 ) {
    response = {
      error: {
        code: err.code || null,
        errorCode: err.errorCode || null,
        message: err.message,
        status: err.status || null,
        statusCode: err.statusCode || 500
      }
    }
  } else if ( env === 'development' ) {
    response = '<pre>' + err.stack
  }

  return response
}

module.exports = errorResponse
