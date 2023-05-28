var fs = require('fs');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('您要新增什麼待辦事項？\n', function (answer) {
  fs.writeFile('todos.txt', answer, function (err) {
    console.log(`新增事項：${answer}`);
    process.exit(0);
  });
});