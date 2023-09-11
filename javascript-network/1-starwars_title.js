const request = require('request');

if (process.argv.length !== 3) {
  console.error('Usage: node 1-starwars_title.js <movie ID>');
  process.exit(1);
}

const movieId = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
  } else if (response.statusCode !== 200) {
    console.error('Error:', `HTTP Status Code: ${response.statusCode}`);
  } else {
    try {
      const movieData = JSON.parse(body);
      console.log(movieData.title);
    } catch (parseError) {
      console.error('Error:', 'Failed to parse response data');
    }
  }
});
