const API_KEY= '21287ce169a6a9290f46e9e5de0ee13b'

const makeIconURL = (iconId) =>`http://openweathermap.org/img/wn/${iconId}@2x.png`

const getFormattedWeatherData = async ( city , units = 'metric') => {
    const URL= `https:/api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`

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