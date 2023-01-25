const { fizzBuzz } = require('./fizzBuzz');

describe('fizzbuzz', () => {
  it('returns Fizz for value 3', () => {
    const result = fizzBuzz(3);
    expect(result).toBe('Fizz');
  });
});