

const API_KEY = process.env.REACT_APP_API_KEY;
const URL_WEB = process.env.REACT_APP_URL;

const makeIconURL = (iconId) => `http://openweathermap.org/img/wn/${iconId}@2x.png`;

const getFormattedWeatherData = async (city, cnt = 14, units = 'metric') => {
  const URL = `${URL_WEB}weather?q=${city}&cnt=${cnt}&appid=${API_KEY}&units=${units}`;

  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);

  const {
    weather,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    sys: { country },
    wind: { speed },
    name,
  } = data;

  const { description, icon } = weather[0];

  // Adjust temperature and wind speed based on units
  const adjustedTemp = units === 'metric' ? temp : (temp * 9) / 5 + 32;
  const adjustedFeelsLike = units === 'metric' ? feels_like : ((feels_like * 9) / 5 + 32);
  const adjustedTempMax = units === 'metric' ? temp_max : (temp_max * 9) / 5 + 32;
  const adjustedTempMin = units === 'metric' ? temp_min : (temp_min * 9) / 5 + 32;
  const adjustedWindSpeed = units === 'metric' ? speed : speed * 2.23694;

  return {
    description,
    iconURL: makeIconURL(icon),
    temp: adjustedTemp,
    feels_like: adjustedFeelsLike,
    temp_max: adjustedTempMax,
    temp_min: adjustedTempMin,
    pressure,
    humidity,
    country,
    speed: adjustedWindSpeed,
    name,
  };
};

export { getFormattedWeatherData };
