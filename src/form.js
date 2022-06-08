class Form {
  constructor(fields) {
    this.fields = fields;
    this.currentIndex = 0;
  }

  #getCurrentField() {
    return this.fields[this.currentIndex];
  }

  fillField(response) {
    const currentField = this.#getCurrentField();
    currentField.fill(response);
    this.currentIndex++;
  }

  getFilledForm() {
    const responses = {};
    this.fields.forEach(field => {
      const entry = field.getEntry();
      responses[entry.name] = entry.response;
    });

    return responses;
  }

  getPrompt() {
    return this.fields[this.currentIndex].getPrompt();
  }

  isFilled() {
    return this.fields.length === this.currentIndex;
  }
}

module.exports = { Form };
