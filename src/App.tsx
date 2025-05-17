import {useState} from "react";

function App() {

    const [city, setCity] = useState<string>('');  // TODO [покажи, положи]
        const [error, setError] = useState<null | string>(null);
        const [weather, setWeather] = useState<{temp: number, description: string} | null>(null);
    console.log(weather);

    const fetchWeather = () => {
        const apiKey = '6f13654c9cb5013bcd6146847d6a1d99'
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang={lang}`)
            .then(response => response.json())
            .then(json => {
                if (json.cod === '404') {
                    setError('City not found');  // TODO Устанавливаем ошибку, если город не найден
                } else {
                    setWeather({
                        temp: json.main.temp,
                        description: json.weather[0].description,
                    });
                    setError(null);  // TODO Сбрасываем ошибку, если запрос успешен
                }
            })
            .catch(error => {
                console.error('Ошибка: ', error);
                setError('An error occurred');  // TODO Общая ошибка на случай других проблем
            })
    }



    return (
        <div className="App">
            <h1>Weather App</h1>
            <input type="search" onChange={(e) => setCity(e.currentTarget.value)} />
            <button onClick={fetchWeather}>Get weather</button>
            {error && <p style={{color: 'red'}}>{error}</p>}  {/* TODO отображаем ошибку*/}
        </div>
    )
}

export default App