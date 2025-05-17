function App() {
    // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

    // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}



    const fetchWeather = () => {
        const city = 'Cambrils'
        const apiKey = '6f13654c9cb5013bcd6146847d6a1d99'
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
            .then(response => response.json())
            .then(json => console.log(json))
    }



    return (
        <div className="App">
            <h1>Weather App</h1>
            <button onClick={fetchWeather}>Get weather</button>
        </div>
    )
}

export default App