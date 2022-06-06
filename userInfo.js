const fs = require('fs');

const userName = userInfo => {
  process.stdin.setEncoding('utf8');

  console.log('Please enter your name:');
  process.stdin.on('data', name => {
    userInfo.name = name.trim();
    fs.writeFileSync('userInfo.json', JSON.stringify(userInfo), 'utf8');
    process.exit();
  })
};

const main = () => {
  const userInfo = {};
  userName(userInfo);
};

main();
