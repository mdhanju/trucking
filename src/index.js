'use strict';

const allSupportedCountries = require('../data/countries');
const allStates = require('../data/states');
const bussType = require('../data/business');
const equipments = require('../data/equipments');
const license = require('../data/license');

/*
 ** getAllCountries
 ** {array} return array of all supported countries
 */
const getSupportedCountries = function() {
	return allSupportedCountries
};

/*
 ** getStates
 ** {string} params country - required
 ** {array} return array of all supported states for country
 */
const getStates = function(country) {
	country = country && country.toUpperCase();
	if (country === 'US') {
		return allStates.usStates
	} else if (country === 'CA') {
		return allStates.caStates
	} else {
		return 'Country is not supported.'
	}
};

/*
 ** getUSBussType
 ** {string} params country - required
 ** {array} return array of all supported business in US
 */
const getBussType = function(country) {
  country = country && country.toUpperCase();
  if (country === 'US') {
    return bussType.USBussType
  } else if (country === 'CA') {
    return bussType.CABussType
  } else {
    return 'Country is not supported.'
  }
};

module.exports.getSupportedCountries = getSupportedCountries;
module.exports.getStates = getStates;
module.exports.getBussType = getBussType;

module.exports.equipments = equipments;
module.exports.license = license;
