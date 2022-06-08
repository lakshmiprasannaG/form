const { Form } = require('../src/form.js');
const { Field } = require('../src/field.js');
const { registerResponse } = require('./../src/formLib.js');

const assert = require('assert');

describe('registerResponse', () => {
  it('should give next prompt', () => {
    const nameField = new Field('name', 'enter name', x => x);
    const dobField = new Field('dob', 'enter dob', x => x);

    const fields = [nameField, dobField];
    const form = new Form(fields, {});

    const response = 'lucky';

    let actual = [];
    const logger = text => {
      actual.push(text);
    };

    registerResponse(form, response, logger);
    assert.deepStrictEqual(actual, ['enter dob']);
  });

  it('should give the responses of form', () => {
    const nameField = new Field('name', 'enter name', x => x);
    const fields = [nameField];

    const form = new Form(fields);
    const response = 'lucky';
    const logger = x => x;

    let responses;
    const formResponses = x => {
      responses = x;
    };

    registerResponse(form, response, logger, formResponses);
    assert.deepStrictEqual(responses, { name: 'lucky' });
  });
});
