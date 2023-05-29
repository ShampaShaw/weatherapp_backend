const API_KEY= '21287ce169a6a9290f46e9e5de0ee13b'

const getFormattedWeatherData = async ( city , units = 'metric') => {
    const URL= `https:/api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`

    const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);

    console.log(data);
}

export { getFormattedWeatherData };