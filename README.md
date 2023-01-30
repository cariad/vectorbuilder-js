# vectorbuilder

**vectorbuilder** is a Node.js package for building and operating on vectors.

## Installation

```console
npm install vectorbuilder
```

## Example

```javascript
import VectorBuilder from 'vectorbuilder';

const vector = new VectorBuilder([7, 9])
  // Translate by 10
  .add(10)
  // Double the length
  .multiply(2)
  // Build to an array of [x, y]
  .build();

console.assert(vector === [34, 38]);
```

## Usage

Pass your initial vector into the `new VectorBuilder()` constructor as an array of two numbers.

Each operation returns a reference to the builder so they can be chained. Call `build()` to get the constructed vector as an array of two numbers.

- `add(n: number)` adds a length to each dimension of the vector.

  ```javascript
  const vector = new VectorBuilder([1, 2])
    // Add 3 to each dimension
    .add(3)
    .build();

  console.assert(vector === [4, 5]);
  ```

- `add(v: [number, number])` adds a vector.

  ```javascript
  const vector = new VectorBuilder([1, 2])
    // Add 3 to the X length and 4 to the Y length
    .add([3, 4])
    .build();

  console.assert(vector === [4, 6]);
  ```

- `multiply(n: number)` multiplies each dimension of the vector by a length.

  ```javascript
  const vector = new VectorBuilder([3, 4])
    // Multiply both lengths by 2
    .multiply(2)
    .build();

  console.assert(vector === [6, 8]);
  ```

- `multiply(v: [number, number])` multiplies by a vector.

  ```javascript
  const vector = new VectorBuilder([3, 4])
    // Multiply the X length by 10 and the Y length by 20
    .multiply([10, 20])
    .build();

  console.assert(vector === [30, 80]);
  ```

## Contributions

Raise bug reports, request features and ask questions at [github.com/cariad/vectorbuilder-js/issues](https://github.com/cariad/vectorbuilder-js/issues).
