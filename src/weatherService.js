//import { DateTime } from 'luxon'

const API_KEY= '21287ce169a6a9290f46e9e5de0ee13b'

//const BASE_URL = 'https://api.openweathermap.org/data/2.5'


const makeIconURL = (iconId) =>`http://openweathermap.org/img/wn/${iconId}@2x.png`

const getFormattedWeatherData = async ( city ,cnt=14, units = 'metric') => {
    //const URL = `https://api.openweathermap.org/data/2.5/weather?id=${city}&cnt=${cnt}&appid={API_KEY}&units=${units}`
    const URL= `https:/api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`

    const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);

    const { 
        weather, 
        main: {temp, feels_like, temp_min, temp_max, pressure, humidity},

        sys: {
            country,
        },
        wind: {speed},
        name,
    } = data

    const { description, icon} = weather[0]

    return {
        description,
        iconURL: makeIconURL(icon),
        temp, 
        feels_like, 
        temp_max, 
        temp_min,
        pressure, 
        humidity,
        country, 
        speed, 
        name
    };
};

export { getFormattedWeatherData };