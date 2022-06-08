const { Form } = require('./form.js');
const { Field } = require('./field.js');
const { MultiLinedField } = require('./multiLinedField.js');
const { identity, splitByComma, joinByNewLine } = require("./parsers");
const { validateName, validateDob, isNonEmpty } = require("./validators");

const createForm = () => {
  const nameField = new Field('name', 'Name:', identity, validateName);

  const dobField = new Field('dob', 'DOB:', identity, validateDob);

  const hobbiesField = new Field(
    'hobbies',
    'Hobbies:',
    splitByComma,
    isNonEmpty
  );

  const addressField = new MultiLinedField(
    'address',
    ['enter address line 1', 'enter address line 2'],
    joinByNewLine,
    isNonEmpty
  );

  const fields = [nameField, dobField, hobbiesField, addressField];

  return new Form(fields);
};

module.exports = { createForm };
