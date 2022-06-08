const assert = require('assert');
const { identity, splitByComma, joinByNewLine } = require('../src/parsers.js');

describe('identity', () => {
  it('should return the given input', () => {
    assert.strictEqual(identity('a'), 'a');
  });
});

describe('splitByComma', () => {
  it('should split given string by comma', () => {
    assert.deepStrictEqual(splitByComma('a,b'), ['a', 'b']);
  });
});

describe('joinByNewLine', () => {
  it('should join given list with new line', () => {
    assert.strictEqual(joinByNewLine([1, 2]), '1\n2');
  });
});
