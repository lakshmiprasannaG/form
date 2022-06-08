const assert = require('assert');
const { Field } = require('./../src/field.js');

describe('field', () => {
  it('should fill the response', () => {
    const field = new Field('name', 'enter name', x => x);
    const response = 'lucky';
    field.fill(response);

    const expected = { name: 'name', response: 'lucky' };

    assert.deepStrictEqual(field.getEntry(), expected);
  });
});
