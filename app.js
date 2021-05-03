const readFile = require('./readFile');

process.stdin.on('data', (data)=> {
  const fileName = data.toString().trim();
  if(fileName === 'q'){
    process.exit();
  }
  else {
    readFile(fileName);
  }
});

