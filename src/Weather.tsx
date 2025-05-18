

type WeatherType = {
    temp: number
    description: string
    humidity: string
    icon: string
};


export const Weather = ({temp, description, humidity, icon}: WeatherType) => {
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    return (
        <div className='weather'>
            <p>Temperature: {temp} °C</p>
            <p>Humidity: {humidity} %</p>
            <img src={iconUrl} alt={description}/>
            <p>Weather: {description}</p>
        </div>
    );
};