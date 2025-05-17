import {useState} from "react";

function App() {

    const [city, setCity] = useState<string>('');  // TODO [покажи, положи]

    const fetchWeather = () => {
        const apiKey = '6f13654c9cb5013bcd6146847d6a1d99'
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
            .then(response => response.json())
            .then(json => console.log(json))
    }



    return (
        <div className="App">
            <h1>Weather App</h1>
            <input type="search" onChange={(e) => setCity(e.currentTarget.value)} />
            <button onClick={fetchWeather}>Get weather</button>
        </div>
    )
}

export default App