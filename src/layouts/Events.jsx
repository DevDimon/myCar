import Event from "../components/Event";
import "../components/Event.css"

const data =
    [
        {
            'date': '27.06.2025',
            'type': 0,
            'description': 'описание события на определённую дату',
            'mileage': 100000,
            'sum': 123.28
        },
        {
            'date': '27.08.2025',
            'type': 1,
            'description': 'описание события на определённую дату',
            'mileage': 200000,
            'sum': 423.28
        },
        {
            'date': '30.06.2025',
            'type': 2,
            'description': 'описание события на определённую дату',
            'mileage': 150000,
            'sum': 43.28
        },
         {
            'date': '27.06.2025',
            'type': 0,
            'description': 'описание события на определённую дату',
            'mileage': 100000,
            'sum': 123.28
        },
        {
            'date': '27.08.2025',
            'type': 1,
            'description': 'описание события на определённую дату',
            'mileage': 200000,
            'sum': 423.28
        },
        {
            'date': '30.06.2025',
            'type': 2,
            'description': 'описание события на определённую дату',
            'mileage': 150000,
            'sum': 43.28
        },
         {
            'date': '27.06.2025',
            'type': 0,
            'description': 'описание события на определённую дату',
            'mileage': 100000,
            'sum': 123.28
        },
        {
            'date': '27.08.2025',
            'type': 1,
            'description': 'описание события на определённую дату',
            'mileage': 200000,
            'sum': 423.28
        },
        {
            'date': '30.06.2025',
            'type': 2,
            'description': 'описание события на определённую дату',
            'mileage': 150000,
            'sum': 43.28
        }
    ];


function Events() {
    return (
        <div className="events">
            {data.map((event) => {
                return <Event event = {event} key = {event.date}/>})}
        </div>
    );
}

export default Events;