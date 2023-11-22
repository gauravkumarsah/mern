const { readFile, writeFile } = require('fs');

console.log('starting tasks...');
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    return;
  }
  const first = result;
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) return;
    const second = result;

    writeFile(
      './content/resultSync.txt',
      `Here is the result ${(first, second)}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('done task');
      }
    );
  });
});

console.log('Starting new task');
