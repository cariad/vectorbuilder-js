import VectorBuilder from '.';

test('defaults to (0, 0)', () => {
  const vector = new VectorBuilder().build();
  expect(vector).toEqual([0, 0]);
});

test('uses initial numeric vector', () => {
  const vector = new VectorBuilder([7, 9]).build();
  expect(vector).toEqual([7, 9]);
});

test('uses initial VectorBuilder', () => {
  const initial = new VectorBuilder([7, 9]);
  const vector = new VectorBuilder(initial).build();
  expect(vector).toEqual([7, 9]);
});

test('can add number', () => {
  const vector = new VectorBuilder([0, 0]).add(1).build();
  expect(vector).toEqual([1, 1]);
});

test('can add vector', () => {
  const vector = new VectorBuilder([0, 0]).add([1, 2]).build();
  expect(vector).toEqual([1, 2]);
});

test('can add VectorBuilder', () => {
  const other = new VectorBuilder([1, 2]);
  const vector = new VectorBuilder([0, 0]).add(other).build();
  expect(vector).toEqual([1, 2]);
});

test('can multiply by number', () => {
  const vector = new VectorBuilder([3, 3]).multiply(4).build();
  expect(vector).toEqual([12, 12]);
});

test('can multiply by vector', () => {
  const vector = new VectorBuilder([3, 3]).multiply([3, 4]).build();
  expect(vector).toEqual([9, 12]);
});

test('can multiply by VectorBuilder', () => {
  const other = new VectorBuilder([3, 4]);
  const vector = new VectorBuilder([3, 3]).multiply(other).build();
  expect(vector).toEqual([9, 12]);
});

test('agrees with README example', () => {
  const vector = new VectorBuilder([7, 9])
    // Translate by 10
    .add(10)
    // Double the length
    .multiply(2)
    // Build to an array of [x, y]
    .build();

  expect(vector).toEqual([34, 38]);
});

test('agrees with README add(n: number) usage', () => {
  const vector = new VectorBuilder([1, 2])
    // Add 3 to each dimension
    .add(3)
    .build();

  expect(vector).toEqual([4, 5]);
});

test('agrees with README add(v: [number, number]) usage', () => {
  const vector = new VectorBuilder([1, 2])
    // Add 3 to the X length and 4 to the Y length
    .add([3, 4])
    .build();

  expect(vector).toEqual([4, 6]);
});

test('agrees with README add(v: VectorBuilder) usage', () => {
  const vector = new VectorBuilder([0, 0])
    // Add 2 to the X length and 6 to the Y length
    .add(new VectorBuilder([3, 7]).add(-1))
    .build();

  expect(vector).toEqual([2, 6]);
});

test('agrees with README multiply(n: number) usage', () => {
  const vector = new VectorBuilder([3, 4])
    // Multiply both lengths by 2
    .multiply(2)
    .build();

  expect(vector).toEqual([6, 8]);
});

test('agrees with README multiply(v: [number, number]) usage', () => {
  const vector = new VectorBuilder([3, 4])
    // Multiply the X length by 10 and the Y length by 20
    .multiply([10, 20])
    .build();

  expect(vector).toEqual([30, 80]);
});

test('agrees with README multiply(v: VectorBuilder) usage', () => {
  const vector = new VectorBuilder([3, 4])
    // Multiply the X length by 2 and the Y length by 6
    .multiply(new VectorBuilder([3, 7]).add(-1))
    .build();

  expect(vector).toEqual([6, 24]);
});
