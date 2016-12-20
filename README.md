Lite! **Only ~55 lines**.
 
Caching module to hold any JS values in RAM for quick access.
Objects are removed after expire time every 2 minutes or while calling get()

### Install

```
npm i lite-cache-js --save
```

### USAGE

```
import cache from 'lite-cache-js';

cache.set({key, value, ttl});
cache.get({key, extend_ttl});
cache.remove({key});
cache.clear();
```

#### get
will return null or value

`extend_ttl` - boolean. If === true cache's expire date will be extended by it's ttl

```javascript
 let value = cache.get({key: 'any valid js object key', extend_ttl: true});
```

#### set
will set/update value in cache. `ttl` - time to live in milliseconds. 1000 = 1 second.

```javascript
cache.set({
   key: 'any valid js object key',
   value: 'any valid object value',
   ttl: 1000,
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
