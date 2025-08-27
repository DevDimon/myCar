import { useState } from "react";

function Weather() {
    const apiKey = '33aa5dc1c6d67229729f933e56c4b4e5';
    const city = 'Maykop';

    const [temp, setTemp] = useState(0);
    const [iconCode, setIconCode] = useState(0);

    async function getWeather() {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`
            );
            if (!response.ok) throw new Error('Ошибка запроса погоды');
            const data = await response.json();

            setTemp(Math.round(data.main.temp));
            setIconCode(data.weather[0].icon);

        } catch (error) {
            console.error(error);
        }
    }

    getWeather();

    setTimeout(() => {
        getWeather();
    }, 3600000);

    return (
        <div id="weather">
            <div id="temp">{temp}°C</div>
            <div id="icon">
                <img src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`} alt="Иконка погоды" />
            </div>
        </div>
    )
}

export default Weather;