# Random
This is a simple wrapper that provides utilities  for dealing with randomness.  This library generally uses `Math.random` as its random number generator.  

1. `npm install @huth/random`

Default export contains all available methods:

```js
import random from "@huth/random"
 
random.pick("Rose", "Blanche", "Dorothy", "Sophia") // "Dorothy" 
```

## API 
The API includes the following methods for producing usefull random data: 

- `float(min: number, max: number): number` inclusive random float
- `integer(min: number, max: number): number` inclusive random integer
- `boolean(likelihood = .5): boolean` boolean where `likelihood` is a number in the range [0, 1] increasing the chance of `true`
- `pick<T>(...args: T[]): T` returns a random element from the arguments provided
- `id(): string` generates an id via `crypto.getRandomValues()`
