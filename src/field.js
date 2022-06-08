class Field {
  #name;
  #prompt;
  #parser;
  #response;
  #validator;
  constructor(name, prompt, parser, validator = () => true) {
    this.#name = name;
    this.#prompt = prompt;
    this.#parser = parser;
    this.#validator = validator;
    this.#response = null;
  }

  getPrompt() {
    return this.#prompt;
  }

  isValid(response) {
    return this.#validator(response);
  }

  fill(response) {
    if (this.isValid(response)) {
      this.#response = response;
      return true;
    }
    return false;
  }

  isFilled() {
    return this.#response !== null;
  }

  getEntry() {
    return { name: this.#name, response: this.#parser(this.#response) };
  }
}

module.exports = { Field };
