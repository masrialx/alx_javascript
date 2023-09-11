const request = require('request');

const apiUrl = process.argv[2]; // Get the API URL from command line argument

if (!apiUrl) {
  console.error('Please provide the API URL as an argument.');
  process.exit(1);
}

// Character ID for Wedge Antilles
const characterId = 18;

// Send a GET request to the Star Wars API
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error('API request failed with status code:', response.statusCode);
    process.exit(1);
  }

  // Parse the JSON response
  const data = JSON.parse(body);

  // Filter the films where Wedge Antilles is present
  const filmsWithWedgeAntilles = data.results.filter((film) =>
    film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)
  );

  // Print the number of films
  console.log(filmsWithWedgeAntilles.length);
});
