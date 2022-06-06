const fs = require('fs');
const { stdin } = require('process');

const nameContainNumber = name => {
  return /[1-9]/.test(name);
};

const isNameInvalid = name => {
  return name.length < 5 || nameContainNumber(name);
};

const userName = userInfo => {
  process.stdin.setEncoding('utf8');

  console.log('Please enter your name:');
  process.stdin.on('data', name => {
    userInfo.name = name.trim();
    stdin.removeAllListeners('data');

    if (isNameInvalid(name)) {
      console.log('Invalid name');
      userName(userInfo);
    }
    else {
      userDob(userInfo);
    }
  })
};

const userDob = userInfo => {
  process.stdin.setEncoding('utf8');

  console.log('Please enter your dob(yyyy-mm-dd):');
  process.stdin.on('data', dob => {
    userInfo.dob = dob.trim();
    stdin.removeAllListeners('data');
    userHobbies(userInfo);
  })
};

const userHobbies = userInfo => {
  process.stdin.setEncoding('utf8');

  console.log('Please enter your hobbies:');
  process.stdin.on('data', hobbies => {
    userInfo.hobbies = hobbies.trim().split(',');
    fs.writeFileSync('form.json', JSON.stringify(userInfo), 'utf8');
    stdin.removeAllListeners('data');
  })
};

const main = () => {
  const userInfo = {};
  userName(userInfo);
};

main();
