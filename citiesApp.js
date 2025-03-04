import { findArrayMax, rawDataToStrings } from './utils/index.js';
import {
  createCityList,
  getPopulationDensityIndex,
  addPopulationDensityIndex,
  sortCities,
  getCityInfoStrings,
  printCitiesInfo,
} from './cityMethods/index.js';

const data = `city,population,area,density,country
  Shanghai,24256800,6340,3826,China
  Delhi,16787941,1484,11313,India
  Lagos,16060303,1171,13712,Nigeria
  Istanbul,14160467,5461,2593,Turkey
  Tokyo,13513734,2191,6168,Japan
  Sao Paulo,12038175,1521,7914,Brazil
  Mexico City,8874724,1486,5974,Mexico
  London,8673713,1572,5431,United Kingdom
  New York City,8537673,784,10892,United States
  Bangkok,8280925,1569,5279,Thailand`;

export const citiesApp = (data) => {
  if (!data) {
    console.log('No Data.');
    return;
  }

  let cityList = [];

  const cityDataStrings = rawDataToStrings(data);

  cityList = createCityList(cityDataStrings);

  const cityPopulationDensityArr = cityList.map((city) => city.populationDensity);
  const maxPopulationsDensity = findArrayMax(cityPopulationDensityArr);

  cityList = addPopulationDensityIndex(cityList, maxPopulationsDensity);

  cityList = sortCities(cityList);

  const cityInfoStrings = getCityInfoStrings(cityList);

  printCitiesInfo(cityInfoStrings);
};

citiesApp(data);
