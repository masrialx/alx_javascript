const request = require('request');

if (process.argv.length !== 3) {
  console.error('Usage: node 2-starwars_count.js <API URL>');
  process.exit(1);
}

const apiUrl = process.argv[2];
const characterId = 18;

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
  } else if (response.statusCode !== 200) {
    console.error('Error:', `HTTP Status Code: ${response.statusCode}`);
  } else {
    try {
      const filmsData = JSON.parse(body).results;
      const numberOfFilms = filmsData.reduce((count, film) => {
        if (film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)) {
          return count + 1;
        }
        return count;
      }, 0);
      console.log(numberOfFilms);
    } catch (parseError) {
      console.error('Error:', 'Failed to parse response data');
    }
  }
});
