
 Caching module to hold any JS values in RAM for quick access.
 
 Objects are removed after expire time every 2 minutes or while calling get()

### USAGE

#### get
```javascript
 let value = get({key: 'any valid js object key'}); // will return null or value
```

#### set
```javascript
set({
   key: 'any valid js object key',
   value: 'any valid object value',
   ttl: 1000, // time to live in milliseconds 1000 = 1 second
  })
  ```
