import cityList from './cities.json';

export default function getCitiesOfCountry(countryCode) {
  if (!countryCode) return [];
  const cities = cityList.filter((city) => city.countryCode === countryCode);
  cities.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return null;
  });
  return cities;
}
