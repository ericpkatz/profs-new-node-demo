const fs = require('fs');

const readFile = (fileName)=> {
  fs.readFile(fileName, (err, result)=> {
    if(err){
      console.log('you have an error');
      console.log(err);
    }
    else {
      process.stdout.write(result.toString());
    }
  });
};

module.exports = readFile;

