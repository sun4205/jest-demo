const isDivisibleByThree = require('./isDivisibleByThree');

it('Returns true for numbers divisible by 3', () => {
  expect(isDivisibleByThree(0)).toEqual(true);
  expect(isDivisibleByThree(3)).toEqual(true);
  expect(isDivisibleByThree(-3)).toEqual(true);
  expect(isDivisibleByThree(303)).toEqual(true);
  expect(isDivisibleByThree(999)).toEqual(true);
});

it('Returns false for numbers not divisible by 3', () => {
  expect(isDivisibleByThree(1)).toEqual(false);
  expect(isDivisibleByThree(2)).toEqual(false);
  expect(isDivisibleByThree(4)).toEqual(false);
  expect(isDivisibleByThree(-1)).toEqual(false);
  expect(isDivisibleByThree(-2)).toEqual(false);
  expect(isDivisibleByThree(301)).toEqual(false);
  expect(isDivisibleByThree(1000)).toEqual(false);
});
