import "./Event.css"

const types =
    [
        { 'title': 'Заправка', 'icon': 'fas fa-gas-pump' },
        { 'title': 'Ремонт', 'icon': 'fas fa-screwdriver-wrench' },
        { 'title': 'Замена', 'icon': 'fas fa-retweet' }
    ];

function Event({ event }) {
    return (
        <div className="event">
            <div className="event-left">
                
                <div className="event-date">
                    {event.date}
                </div>
                <i className={types[event.type].icon}></i>
            </div>
            <div className="event-right">
                <div className="event-title">
                    {types[event.type].title}
                </div>
                <div className="event-description">
                    {event.description}
                </div>
                <div className="event-info">
                    <div className="event-mileage">{event.mileage} км</div>
                    <div className="event-sum">{event.sum} руб.</div>
                </div>
            </div>
        </div>
    )
}

export default Event;