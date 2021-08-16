Lite! **Only ~55 lines**.
 
Caching module to hold any JS values in RAM for quick access.
Objects are removed after expire time every 2 minutes or while calling get()

### Install

```
npm i lite-cache-js --save
```

### USAGE

```javascript
const cache = require('lite-cache-js');

cache.set({key, value, ttl_ms});
cache.get({key, new_ttl_ms});
cache.remove({key});
cache.clear();
```

#### get
will return null or value

`new_ttl_ms` - If set cache's expire date will be set by this ttl. In milliseconds.

```javascript
 let value = cache.get({key: 'any valid js object key', new_ttl_ms: 300});
```

#### set
will set/update value in cache. `ttl_ms` - time to live in milliseconds. 1000 = 1 second.

```javascript
cache.set({
   key: 'any valid js object key',
   value: 'any valid object value',
  ttl_ms: 1000,
  })
  ```  

#### remove
will remove single value from cache.

```javascript
cache.remove({key: 'any valid js object key'})
  ```

#### clear
will remove all values from cache

```javascript
cache.clear();
```
