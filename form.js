class Form {
  constructor(fields, records) {
    this.fields = fields;
    this.records = records;
  }

  recordResponse(response, index) {
    const currentField = this.fields[index].name;

    if (currentField === 'hobbies') {
      this.records[currentField] = response.trim().split(',');
    }
    else {
      this.records[currentField] = response.trim();
    }
  }

  getRecords() {
    return this.records;
  }

  getQuestion(index) {
    return this.fields[index].question;
  }

  areQuestionsDone(index) {
    return this.fields.length === index;
  }
}

exports.Form = Form;
