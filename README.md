# Random
This is a simple wrapper that provides utilities  for dealing with randomness.  This library uses `Math.random` as its random number generator. If you need a deterministic, mathematically correct random number generator, consider [`random-js`](https://www.npmjs.com/package/random-js) instead. Noise uses [`simplex-noise`](https://github.com/jwagner/simplex-noise.js). 

1. `npm install @huth/random`
2. Default export contains all available methods


```js
import random from "@huth/random"
 
random.pick("Rose", "Blanche", "Dorothy", "Sophia") // "Dorothy" 😬
```

## API 
The API includes the following methods for producing usefull random data: 

- `float(min: number, max: number): number` inclusive random float
- `integer(min: number, max: number): number` inclusive random integer
- `boolean(likelihood = .5): boolean` boolean where `likelihood` is a number in the range [0, 1] increasing the chance of `true`
- `pick(...args): any` returns a random element from the arguments provided
- `noise(x, y?, z?): number` simplex noise in the range [0, 1]