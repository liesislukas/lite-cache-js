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

// https://github.com/liesislukas/lite-cache-js

let db = {};

function get({key, extend_ttl}) {
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

function set({key, value, ttl}) {
  db[key] = {
    value,
    ttl,
    created_at: Date.now(),
  };
}

function remove({key}) {
  delete db[key];
  return true;
}

function clear() {
  db = {};
  return true;
}

function clean_up() {
  const now = Date.now();
  Object.keys(db).forEach(key => {
    if (db[key].expire_at < now) {
      delete db[key];
    }
  });
}

setInterval(() => {
  clean_up();
}, 120000);

export default {
  get,
  set,
  remove,
  clear,
};
