// 1-stdin.js
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  if (name) {
    console.log(`Your name is: ${name}`);
    process.exit();
  } else {
    process.stdout.write('Please enter a valid name.\n');
  }
});

process.on('exit', () => {
  console.log('This important software is now closing');
});
