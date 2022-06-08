const registerResponse = (form, response, logger, cb) => {
  form.fillField(response.trim());

  if (form.isFilled()) {
    cb(form.getFilledForm());
    logger('Thank you');
    return;
  }

  logger(form.getPrompt());
};

module.exports = { registerResponse };
