const identity = text => text;
const splitByComma = text => text.split(',');
const joinByNewLine = list => list.join('\n');

module.exports = { identity, splitByComma, joinByNewLine };
