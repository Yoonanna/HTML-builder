const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;

fs.writeFile(
  path.join(__dirname, 'text.txt'),
  'enter some words:\n',
  (err) => {
    if (err) throw err;
    stdout.write('hello!\n');
  }
);

fs.readFile(
  path.join(__dirname, 'text.txt'),
  'utf-8',
  (err, data) => {
    if (err) throw err;
    stdout.write(data);
  }
);

let readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '>'
});
rl.prompt();
rl.on('line', (input) => {
  input = input.toLowerCase();

  fs.appendFile(
    path.join(__dirname, 'text.txt'),
    input,
    err => {
      if (err) throw err;
      stdout.write(input);
    }
  );
  rl.close();
  
});