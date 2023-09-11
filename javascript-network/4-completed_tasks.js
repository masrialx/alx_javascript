const request = require('request');

if (process.argv.length !== 3) {
  console.error('Usage: node 4-completed_tasks.js <API URL>');
  process.exit(1);
}

const apiUrl = process.argv[2];

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
  } else if (response.statusCode !== 200) {
    console.error('Error:', `HTTP Status Code: ${response.statusCode}`);
  } else {
    try {
      const todos = JSON.parse(body);
      const completedTasksByUser = {};

      todos.forEach((todo) => {
        if (todo.completed) {
          if (!completedTasksByUser[todo.userId]) {
            completedTasksByUser[todo.userId] = 1;
          } else {
            completedTasksByUser[todo.userId]++;
          }
        }
      });

      console.log(completedTasksByUser);
    } catch (parseError) {
      console.error('Error:', 'Failed to parse response data');
    }
  }
});
