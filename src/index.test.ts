import VectorBuilder from '.';

test('can add number', () => {
  const vector = new VectorBuilder([0, 0]).add(1).build();
  expect(vector).toEqual([1, 1]);
});

test('can add vector', () => {
  const vector = new VectorBuilder([0, 0]).add([1, 2]).build();
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
