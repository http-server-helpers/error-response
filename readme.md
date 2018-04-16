## http-server-helpers-error-response
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![NSP Status][nsp-image]][nsp-url]

an http.Server helper that creates an error response

## table of contents
* [installation](#installation)
* [api](#api)
* [use](#use)
* [notes](#notes)
* [license](#license)

## installation
```bash
npm install http-server-helpers-error-response
```

## api
```javascript
/**
 * @param {Error}  err
 * @param {int}    [err.code]
 * @param {int}    [err.errorCode]
 * @param {string} err.message
 * @param {string} err.stack
 * @param {int}    [err.status]
 * @param {int}    [err.statusCode]
 *
 * @param {IncomingMessage} req
 * @param {function}        req.get
 *
 * @param {string} env
 *
 * @returns {object|string}
 */
function errorResponse( err, req, env )
```

## use
```javascript
var errorResponse = require( 'http-server-helpers-error-response' )
```

## notes
it expects the following:

* `err` to be an instance of `Error`
* `req` to be an instance of `IncomingMessage`
* `req.get` to be a function

it implements the following:

* when `env` is passed as a string, set to `development`, and `content-type` is not `application/json`, it returns the `err.stack` as a string
* when the request `content-type` is `application/json`, it returns an object
    ```javascript
    error: {
      code: err.code || null,
      errorCode: err.errorCode || null,
      message: err.message,
      status: err.status || null,
      statusCode: err.statusCode || 500
    }
    ```
* otherwise, it returns the `err.message` as a string

## license
[MIT License][mit-license]

[coveralls-image]: https://coveralls.io/repos/github/http-server-helpers/error-response/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/http-server-helpers/error-response?branch=master
[mit-license]: https://raw.githubusercontent.com/http-server-helpers/error-response/master/license.txt
[npm-image]: https://img.shields.io/npm/v/http-server-helpers-error-response.svg
[npm-url]: https://www.npmjs.com/package/http-server-helpers-error-response
[nsp-image]: https://nodesecurity.io/orgs/http-server-helpers/projects/f8290e94-42f5-4b46-b279-23061a53f4f9/badge
[nsp-url]: https://nodesecurity.io/orgs/http-server-helpers/projects/f8290e94-42f5-4b46-b279-23061a53f4f9
[travis-image]: https://travis-ci.org/http-server-helpers/error-response.svg?branch=master
[travis-url]: https://travis-ci.org/http-server-helpers/error-response
