var fs = require('fs');

fs.readFile('todos.json', function(err, data) {
    let todos = JSON.parse(data)
    for (let [index, todo] of todos.entries()) {
        console.log(`#${index} ${todo.title}`);
    }
  process.exit(0);
});