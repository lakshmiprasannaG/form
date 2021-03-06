const fs = require('fs');
const { registerResponse } = require('./formLib.js');
const { createForm } = require('./userDetailsForm.js');

const writeFile = records => {
  fs.writeFileSync('./form.json', JSON.stringify(records), 'utf8');
  process.stdin.destroy();
};

const main = () => {
  const form = createForm();
  console.log(form.getPrompt());

  process.stdin.setEncoding('utf8');
  process.stdin.on('data', response => {
    registerResponse(form, response, console.log, writeFile);
  });
};

main();
