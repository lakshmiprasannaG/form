const fs = require('fs');
const { Form } = require('./form.js');
const { Field } = require('./field.js');

const identity = text => text;

const splitByComma = text => text.split(',');

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

const main = () => {

  const nameField = new Field('name', 'enter your name', identity);
  const dobField = new Field('dob', 'enter your dob', identity);
  const hobbiesField = new Field('hobbies', 'enter your hobbies', splitByComma);

  const fields = [nameField, dobField, hobbiesField];

  const form = new Form(fields, {});
  console.log(form.getPrompt());

  process.stdin.setEncoding('utf8');
  process.stdin.on('data', response => {
    registerResponse(form, response, console.log, writeFile);
  });
};

main();

module.exports = { registerResponse };
