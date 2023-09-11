const request = require('request');
const fs = require('fs');

if (process.argv.length !== 4) {
  console.error('Usage: node 3-request_store.js <URL> <file path>');
  process.exit(1);
}

const url = process.argv[2];
const filePath = process.argv[3];

request.get(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
  } else if (response.statusCode !== 200) {
    console.error('Error:', `HTTP Status Code: ${response.statusCode}`);
  } else {
    if (body.trim().length === 0) {
      console.log(`Empty response from URL '${url}'.`);
    } else {
      fs.writeFileSync(filePath, body, 'utf-8');
      console.log(`Contents of the URL '${url}' have been saved to '${filePath}'.`);
    }
  }
});
