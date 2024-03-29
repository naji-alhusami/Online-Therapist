import countryList from './countries.json';

function getAllCountries() {
  return countryList;
}

function getCountryByCode(isoCode) {
  return countryList.find((country) => country.isoCode === isoCode);
}

export { getAllCountries, getCountryByCode };
