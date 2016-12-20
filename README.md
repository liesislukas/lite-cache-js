
 Caching module to hold any JS values in RAM for quick access.
 
 Objects are removed after expire time every 2 minutes or while calling get()

### USAGE

#### get
will return null or value
```javascript
 let value = get({key: 'any valid js object key'});
```

#### set
will set/update value in cache. `ttl` - time to live in milliseconds. 1000 = 1 second.

```javascript
set({
   key: 'any valid js object key',
   value: 'any valid object value',
   ttl: 1000,
  })
  ```
