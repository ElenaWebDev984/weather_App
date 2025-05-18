

type WeatherType = {
    temp: number
    description: string
    humidity: string
    icon: string
};


export const Weather = ({temp, description, humidity, icon}: WeatherType) => {
    return (
        <div className='weather'>
            <p>Temperature: {temp}</p>
            <p>Humidity: {humidity} %</p>
            <p>Weather: {description} <img src={icon} alt="img"/></p>
        </div>
    );
};