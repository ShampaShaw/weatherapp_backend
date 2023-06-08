const API_KEY= '94d8a95d52697e9a3f45ce94d5bdb711'

const makeIconURL = (iconId) =>`http://openweathermap.org/img/wn/${iconId}@2x.png`

const getFormattedWeatherData = async ( city , cnt=14, units = 'metric') => {
    const URL = `api.openweathermap.org/data/2.5/forecast/daily?id=${city}&cnt=${cnt}&appid={API_KEY}&units=${units}`
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

export { getFormattedWeatherData };