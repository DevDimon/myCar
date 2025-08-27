import { useState } from "react";

function Clock() {
    const [dots, setDots] = useState(true);

    setTimeout(() => {
        setDots(!dots);
    }, 500);

    const date = new Date();

    const day = date.getDate();

    const months = [
        "января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ];
    const month = months[date.getMonth()];

    const weekdays = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
    const weekday = weekdays[date.getDay()];

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return (
        <div>
            <div id="date">
                <div id="day">{day} {month}</div>
                <div id="weekDay">{weekday}</div>
            </div>
            <div id="time">
                <div id="hour">{hours}</div>
                <div id="dbDots" className={dots ? 'tic' : 'tac'}>:</div>
                <div id="min">{minutes}</div>
            </div>
        </div>
    )
}

export default Clock;