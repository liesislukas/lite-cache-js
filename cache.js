/*
 * Caching module to hold any JS values in RAM for quick access.
 *
 * Author: Lukas Liesis
 * LinkedIn: https://www.linkedin.com/in/lukas-liesis-05335626
 * Upwork: https://www.upwork.com/freelancers/~012711048556a4a4a1
 *
 *  Objects are removed after expire time every 2 minutes or while calling get()
 *
 * ######## USAGE ##########
 *
 * let value = get({key: 'any valid js object key'}); // will return null or value
 *
 * set({
 *   key: 'any valid js object key',
 *   value: 'any valid object value',
 *   ttl: 1000, // time to live in milliseconds 1000 = 1 second
 *  })
 *
 *
 * */

const db = {};

export function get({key}) {
  if (typeof this.db[key] !== 'undefined') {
    if (this.db[key].expire_at < Date.now()) {
      delete this.db[key];
      return null;
    }
    this.db[key].expire_at = this.db[key].created_at + this.db[key].ttl_ms;
    return this.db[key].value;
  }
  return null;
}
export function set({key, value, ttl}) {
  this.db[key] = {
    value,
    ttl,
    created_at: Date.now(),
  };
}

function clean_up() {
  const now = Date.now();
  Object.keys(this.db).forEach(key => {
    if (this.db[key].expire_at < now) {
      delete this.db[key];
    }
  });
}

setInterval(() => {
  clean_up();
}, 120000);
