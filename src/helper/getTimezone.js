import cityTimezones from 'city-timezones';

export default cityName => {
  const cityTimezone = cityTimezones.lookupViaCity(cityName);
  if (!cityTimezone.length) {
    return null;
  }

  return cityTimezone.map(({ timezone, country, city }) => ({
    tz: timezone,
    country,
    city,
  }));
};
