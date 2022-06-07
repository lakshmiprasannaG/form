const fs = require('fs');
const { Form } = require('./form.js');

const readInput = (form, index) => {
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', response => {
    form.recordResponse(response, index);
    index++;

    if (form.areQuestionsDone(index)) {
      fs.writeFileSync('./form.json',
        JSON.stringify(form.getRecords()),
        'utf8');

      process.exit();
    }

    console.log(form.getQuestion(index));
  })
};

const main = () => {
  const fields = [
    { name: 'name', question: 'Please enter your name' },
    { name: 'dob', question: 'Please enter your dob' },
    { name: 'hobbies', question: 'Please enter your hobbies' }
  ];

  const form = new Form(fields, {});
  console.log(form.getQuestion(0));
  readInput(form, 0);
};

main();
