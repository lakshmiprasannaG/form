const assert = require('assert');
const { longerThanFour, onlyAlphabets, validateDob, isNonEmpty } =
  require('./../src/validators.js');

describe('longerThanFour', () => {
  it('should return true when text length is more than four', () => {
    assert.strictEqual(longerThanFour('abcde'), true);
  });

  it('should return false when text length is not more than four', () => {
    assert.strictEqual(longerThanFour('abc'), false);
  });

  it('should return false when text length is four', () => {
    assert.strictEqual(longerThanFour('abcd'), false);
  });
});

describe('onlyAlphabets', () => {
  it('should return true when only alphabets are given', () => {
    assert.strictEqual(onlyAlphabets('abc'), true);
  });

  it('should return false when non-alphabets are given', () => {
    assert.strictEqual(onlyAlphabets('12'), false);
  });

  it('should return false when alphabets with non-alphabets are passed', () => {
    assert.strictEqual(onlyAlphabets('a1b2'), false);
  });
});

describe('validateDob', () => {
  it('should return true when date is in correct format yyyy-mm-dd with digits', () => {
    assert.strictEqual(validateDob('1234-56-78'), true);
  });

  it('should return false when date is in correct format with digits and non-digits', () => {
    assert.strictEqual(validateDob('1234-ab-78'), false);
  });
});

describe('isNonEmpty', () => {
  it('should return true if non-empty list is given', () => {
    assert.strictEqual(isNonEmpty([1]), true);
  });

  it('should return false if empty list is given', () => {
    assert.strictEqual(isNonEmpty([]), false);
  });
});
