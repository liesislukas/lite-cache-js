/*
 * Caching module to hold any JS values in RAM for quick access.
 *
 * Author: Lukas Liesis
 * LinkedIn: https://www.linkedin.com/in/lukas-liesis-05335626
 * Upwork: https://www.upwork.com/freelancers/~012711048556a4a4a1
 *
 * Objects are removed after expire time every 2 minutes or while calling get()
  
 ########## NPM INSTALLL ###########
 npm i lite-cache-js --save
 ###################################
  
 * */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// https://github.com/liesislukas/lite-cache-js

var db = {};

function get(_ref) {
  var key = _ref.key,
    extend_ttl = _ref.extend_ttl;

  if (typeof db[key] !== 'undefined') {
    if (db[key].expire_at < Date.now()) {
      delete db[key];
      return null;
    }
    if (extend_ttl === true) {
      db[key].expire_at = db[key].created_at + db[key].ttl_ms;
    }
    return db[key].value;
  }
  return null;
}

function set(_ref2) {
  var key = _ref2.key,
    value = _ref2.value,
    ttl = _ref2.ttl;

  db[key] = {
    value: value,
    ttl: ttl,
    created_at: Date.now()
  };
}

function remove(_ref3) {
  var key = _ref3.key;

  delete db[key];
  return true;
}

function clear() {
  db = {};
  return true;
}

function clean_up() {
  var now = Date.now();
  Object.keys(db).forEach(function (key) {
    if (db[key].expire_at < now) {
      delete db[key];
    }
  });
}

setInterval(function () {
  clean_up();
}, 120000);

exports.default = {
  get: get,
  set: set,
  remove: remove,
  clear: clear
};
