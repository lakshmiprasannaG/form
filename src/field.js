class Field {
  #name;
  #prompt;
  #parser;
  #response;
  constructor(name, prompt, parser) {
    this.#name = name;
    this.#prompt = prompt;
    this.#parser = parser;
    this.#response = null;
  }

  getPrompt() {
    return this.#prompt;
  }

  fill(response) {
    this.#response = response;
  }

  getEntry() {
    return { name: this.#name, response: this.#parser(this.#response) };
  }
}

module.exports = { Field };
