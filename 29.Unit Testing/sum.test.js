const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
});