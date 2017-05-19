var request = require('request');
var _ = require('underscore');

const __VERSION = '0.0.1';

var opts = opts || {
  _request: {
    url: 'https://api.kenoby.com',
    headers: {}
  }
};

var _setTenant = function (tenant) {
  opts.tenant = tenant;
};

var _setAccess = function (username, password) {
  opts.accessToken = new Buffer(username + ':' + password).toString('base64');
};

var _setHeaders = function () {

  if (!opts.tenant) throw new Error('We need tenant for access kenoby api');
  if (!opts.accessToken) throw new Error('We need your accessToken for access kenoby api');

  opts._request.headers = {
    'x-tenant': opts.tenant,
    'x-version': '3.0.0',
    'content-type': 'json',
    'Authorization': 'Basic ' + opts.accessToken
  }
  console.log(opts);
}

// @todo implement all methods ref.: api.kenoby.com
// @todo implement a crud interface for request


var _getPositions = function () {
  _setHeaders(); // temporary
  return new Promise(function (resolve, reject) {
    request.get(opts._request.url + '/positions', function (error, response, body) {
      console.log(body);
      if (!error && response.statusCode == 200) {
        try {
          const data = JSON.parse(body);
          resolve(data);
        } catch (error) {
          reject(error.getMessage());
        }
      } else {
        reject(error);
      }
    });
  });
}

module.exports = {
  setTenant: _setTenant,
  setAccess: _setAccess,
  getPositions: _getPositions
};
