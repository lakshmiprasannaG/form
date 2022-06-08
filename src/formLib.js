const { Form } = require('./form.js');
const { Field } = require('./field.js');

const registerResponse = (form, response, logger, cb) => {
  form.fillField(response.trim());

  if (form.isFilled()) {
    cb(form.getFilledForm());
    logger('Thank you');
    return;
  }

  logger(form.getPrompt());
};

const identity = text => text;
const splitByComma = text => text.split(',');

const longerThanFour = text => text.length > 4;
const onlyAlphabets = text => /^[a-zA-Z]*$/.test(text);

const validateName = name => {
  return longerThanFour(name) && onlyAlphabets(name);
};

const validateDob = dob => /\d{4}-\d{2}-\d{2}/.test(dob);

const isNonEmpty = list => list.length !== 0;

const createForm = () => {
  const nameField = new Field('name', 'enter your name', identity, validateName);
  const dobField = new Field('dob', 'enter your dob', identity, validateDob);
  const hobbiesField = new Field(
    'hobbies',
    'enter your hobbies',
    splitByComma,
    isNonEmpty
  );

  const fields = [nameField, dobField, hobbiesField];

  return new Form(fields);
};

module.exports = { createForm, registerResponse };
