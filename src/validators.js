const longerThanFour = text => text.length > 4;

const onlyAlphabets = text => /^[a-zA-Z]*$/.test(text);

const validateName = name => {
  return longerThanFour(name) && onlyAlphabets(name);
};

const validateDob = dob => /\d{4}-\d{2}-\d{2}/.test(dob);

const isNonEmpty = list => list.length !== 0;

module.exports = { longerThanFour, onlyAlphabets, validateName, validateDob, isNonEmpty };
