const lineReader = require('line-by-line');

const lines = new lineReader('input');

lines.on('error', (err) => {
  console.log('there was an error while reading the file');
});

lines.on('line', (line) => {
  console.log(line);
});

lines.on('end', () => {
  console.log('Done reading the file');
});
