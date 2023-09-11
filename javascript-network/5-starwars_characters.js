const request = require('request');

if (process.argv.length !== 3) {
  console.error('Usage: node 5-starwars_characters.js <Movie ID>');
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
      const characters = movieData.characters;

      // Function to fetch and display character names
      function fetchCharacterName(url) {
        request.get(url, (error, response, body) => {
          if (!error && response.statusCode === 200) {
            const characterData = JSON.parse(body);
            console.log(characterData.name);
          }
        });
      }

      // Fetch and display character names one by one
      characters.forEach((characterUrl) => {
        fetchCharacterName(characterUrl);
      });
    } catch (parseError) {
      console.error('Error:', 'Failed to parse response data');
    }
  }
});
