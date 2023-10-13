// 2-read_file.js
const fs = require('fs');

function countStudents(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    // Process the data and log the information
    // ...
  } catch (error) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
