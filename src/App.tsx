import {useState} from "react";
import {Weather} from "./Weather.tsx";

function App() {

    const [city, setCity] = useState<string>('');  // TODO [покажи, положи]
    const [error, setError] = useState<null | string>(null);
    const [weather, setWeather] = useState<{
        temp: number,
        humidity: string,
        description: string,
        icon: string,
        minTemp: number,
        maxTemp: number,
    } | null>(null);
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
                        minTemp: json.main.temp_min,
                        maxTemp: json.main.temp_max,
                        icon: json.weather[0].icon,
                        humidity: json.main.humidity,
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
            <h1>Current weather</h1>
            <div className='container'>
                <div className='cityWrapper'>
                    <input type="search" placeholder='Enter your location'
                           onChange={(e) => setCity(e.currentTarget.value)}/>
                    <button onClick={fetchWeather}>Get weather</button>
                </div>
                <>
                    {weather && (<div className='weatherWrapper'>
                        <Weather temp={weather.temp}
                                 humidity={weather.humidity}
                                 description={weather.description}
                                 icon={weather.icon}
                                 maxTemp={weather.maxTemp}
                                 minTemp={weather.minTemp}/>
                    </div>)}
                    {error && <p className='error'>{error}</p>} {/* TODO отображаем ошибку*/}
                </>
            </div>
        </div>
    )
}

export default App