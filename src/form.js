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
    if (currentField.fill(response) && currentField.isFilled()) {
      this.currentIndex++;
    }
  }

  isResponseValid(response) {
    return this.#getCurrentField().isValid(response);
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
    return this.#getCurrentField().getPrompt();
  }

  isFilled() {
    return this.fields.every(field => field.isFilled());
  }
}

module.exports = { Form };
