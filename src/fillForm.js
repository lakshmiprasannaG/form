const fs = require('fs');
const { Form } = require('./form.js');
const { Field } = require('./field.js');

const writeFile = records => {
  fs.writeFileSync('./form.json', JSON.stringify(records), 'utf8');
  process.stdin.destroy();
};

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

const createForm = () => {
  const nameField = new Field('name', 'enter your name', identity);
  const dobField = new Field('dob', 'enter your dob', identity);
  const hobbiesField = new Field('hobbies', 'enter your hobbies', splitByComma);

  const fields = [nameField, dobField, hobbiesField];

  return new Form(fields);
}

const main = () => {
  const form = createForm();
  console.log(form.getPrompt());

  process.stdin.setEncoding('utf8');
  process.stdin.on('data', response => {
    registerResponse(form, response, console.log, writeFile);
  });
};

main();

module.exports = { registerResponse };
