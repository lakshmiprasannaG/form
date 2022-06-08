class MultiLinedField {
  #name;
  #prompts;
  #parser;
  #responses;
  #validator;

  constructor(name, prompts, parser, validator = () => true) {
    this.#name = name;
    this.#prompts = prompts;
    this.#parser = parser;
    this.#validator = validator;
    this.#responses = [];
  }

  getPrompt() {
    return this.#prompts[this.#responses.length];
  }

  fill(response) {
    if (this.#validator(response)) {
      this.#responses.push(response);
      return true;
    }
    return false;
  }

  isFilled() {
    return this.#responses.length === this.#prompts.length;
  }

  getEntry() {
    return { name: this.#name, response: this.#parser(this.#responses) };
  }
}

module.exports = { MultiLinedField };
