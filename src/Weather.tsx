

type WeatherType = {
    temp: number
    description: string
    humidity: string
    icon: string
    minTemp: number
    maxTemp: number
};


export const Weather = ({temp, description, humidity, icon, minTemp, maxTemp}: WeatherType) => {
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    return (
        <div className='weather'>
            <p>Temperature: {temp} °C</p>
            <p>Humidity: {humidity} %</p>
            <div className='tempWrapper'>
                <p>{maxTemp} °C</p>
                <p>{minTemp} °C</p>
            </div>
            <div className='tempWrapper'>
                <img src={iconUrl} alt={description}/>
                <p>{description}</p>
            </div>
        </div>
    );
};