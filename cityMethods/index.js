export const createCityList = (cityDataStrings) => {
  const cityList = cityDataStrings.map((cityString) => {
    const cityValues = cityString?.trim().split(',');

    if (cityValues.length !== 5 || cityValues.some((value) => value === '')) {
      return null;
    }

    return {
      name: cityValues[0],
      population: parseInt(cityValues[1]),
      area: parseInt(cityValues[2]),
      populationDensity: parseInt(cityValues[3]),
      country: cityValues[4],
    };
  });

  return cityList.filter((city) => city !== null);
};

export const getPopulationDensityIndex = (cityDensity, maxDensity) => {
  return Math.round((cityDensity * 100) / maxDensity);
};

export const addPopulationDensityIndex = (cityList, maxDensity) =>
  cityList.map((city) => {
    const value = getPopulationDensityIndex(city.populationDensity, maxDensity);
    return {
      ...city,
      populationDensityIndex: value,
    };
  });

export const sortCities = (cityList) =>
  [...cityList].sort(
    (city1, city2) => city2.populationDensityIndex - city1.populationDensityIndex
  );

export const getCityInfoStrings = (cityList) =>
  cityList.map((city) =>
    [
      city.name.padEnd(18),
      city.population.toString().padStart(10),
      city.area.toString().padStart(8),
      city.populationDensity.toString().padStart(8),
      city.country.padStart(18),
      city.populationDensityIndex.toString().padStart(6),
    ].join('')
  );

export const printCitiesInfo = (cityInfoStrings) =>
  cityInfoStrings.forEach((cityInfo) => console.log(cityInfo));
