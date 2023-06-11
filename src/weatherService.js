import { DateTime } from 'luxon'

const API_KEY= '21287ce169a6a9290f46e9e5de0ee13b'

const BASE_URL = 'https://api.openweathermap.org/data/2.5'

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType)

    url.search = new URLSearchParams({...searchParams, appid: API_KEY});

    return fetch(url)
    .then((res) => res.json())

}

const formatCurrentWeather = (data) => {
    const {

        coord: {lat, lon},
        weather, 
        main: {temp, feels_like, temp_min, temp_max, pressure, humidity},

        sys: {
            country,
            sunset,
            sunrise
        },
        wind: {speed},
        name,
        dt,
        visibility,
    } = data

    const { main: details , icon} = weather[0]

    return {
        lat,
        lon,
        temp, 
        feels_like, 
        temp_max, 
        temp_min,
        pressure, 
        humidity,
        country, 
        sunset, 
        sunrise, 
        speed, 
        name,
        dt,
        details,
        icon,
        visibility,
    }
}

const formatForecastWeather = (data) => {
    let { timezone, daily, hourly} = data;
    daily = daily?.slice(1, 24).map()
}

const getFormattedWeatherData = async (searchParams) => {

    const getFormattedCurrentWeatherData = await getWeatherData("weather", searchParams)
    .then(formatCurrentWeather)

    const { lat, lon} = formatCurrentWeather

    const formattedForecastWeather = await getWeatherData('onecall',{
        lat, lon , exclude: 'current, minutely, alerts', units: searchParams.units,
    })
    .then(formatForecastWeather)

    return{...formatCurrentWeather, ...formattedForecastWeather};

}

const formatToLocalTime = (
    secs,
    zone,
    format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`;


export default getFormattedWeatherData

export { formatToLocalTime, iconUrlFromCode};

/*const makeIconURL = (iconId) =>`http://openweathermap.org/img/wn/${iconId}@2x.png`

const getFormattedWeatherData = async ( city ,cnt=14, units = 'metric') => {
    const URL = `api.openweathermap.org/data/2.5/weather?id=${city}&cnt=${cnt}&appid={API_KEY}&units=${units}`
    //const URL= `https:/api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`

    const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);

    const { 
        weather, 
        main: {temp, feels_like, temp_min, temp_max, pressure, humidity},

        sys: {
            country,
            sunset,
            sunrise
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
        sunset, 
        sunrise, 
        speed, 
        name
    }
}

export { getFormattedWeatherData }; */