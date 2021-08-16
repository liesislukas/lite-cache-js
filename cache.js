// https://github.com/liesislukas/lite-cache-js

let db = {};

function get({ key, new_ttl_ms }) {
  if (typeof db[key] !== "undefined") {
    if (db[key].expire_at < Date.now()) {
      delete db[key];
      return null;
    }
    if (typeof new_ttl_ms === "number") {
      db[key].expire_at = Date.now() + new_ttl_ms;
    }
    return db[key].value;
  }
  return null;
}

function set({ key, value, ttl_ms }) {
  const created_at = Date.now();
  db[key] = {
    value,
    expire_at: created_at + ttl_ms,
    created_at,
  };
}

function remove({ key }) {
  delete db[key];
  return true;
}

function clear() {
  db = {};
  return true;
}

function clean_up() {
  const now = Date.now();
  Object.keys(db).forEach((key) => {
    if (db[key].expire_at < now) {
      delete db[key];
    }
  });
}

setInterval(clean_up, 120000);

module.exports = {
  get,
  set,
  remove,
  clear,
};
