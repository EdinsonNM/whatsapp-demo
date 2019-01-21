export function getUsers() {
  return fetch("https://randomuser.me/api/?results=5&nat=PE")
    .then(response => response.json())
    .then(response => response.results);
}

export function getCountriesCode() {
  return fetch("https://restcountries.eu/rest/v2/all")
    .then(response => response.json())
    .then(countries =>
      countries
        .filter(country => !!country.callingCodes[0])
        .map(country => ({
          name: country.name,
          callingCode: country.callingCodes[0],
          callingCodeStr: `+${country.callingCodes[0]}`
        }))
    );
}
