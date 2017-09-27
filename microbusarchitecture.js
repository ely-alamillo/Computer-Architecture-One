const lineReader = require('line-by-line');

const lines = new lineReader('input');
const MAR = [];
let programCounter = 0;

lines.on('error', (err) => {
  console.log('there was an error while reading the file');
});

lines.on('line', (line) => {
  if (programCounter > 1) {
    console.log('Program Counter: ', programCounter);
    const binary = line.split(' ')[0]
    MAR.push(binary)
    const bin2num = parseInt(binary, 2)
    console.log(line);
  } else {
    console.log('initializing....')
  }
  programCounter++
});

lines.on('end', () => {
  console.log('Done reading the file');
  console.log(MAR);
});



// lines.pause()
// setTimeout(() => {
//   if (programCounter != 0) {
//     lines.resume();
//     console.log('Program Counter: ', programCounter);
//     const binary = line.split(' ')[0]
//     const bin2num = parseInt(binary, 2)
//     // if (bin2num === 2) console.log('bin: ', binary, ' line: ', line );
//     console.log(line);
//   } else {
//     console.log('initializing....')
//   }
// }, 500)
