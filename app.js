const fs = require('fs');

fs.readFile('simple.txt', (err, result)=> {
  if(err){
    console.log('you have an error');
    console.log(err);
  }
  else {
    console.log(result.toString());
  }
});

console.log('starting');
