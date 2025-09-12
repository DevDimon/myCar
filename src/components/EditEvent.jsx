import './EditEvent.css'
import types from "../types/eventTypes"

function EditEvent() {
    return (
        <div className="edit-event">
            <div className="data-edit-event">
                <label htmlFor="">Дата</label>
                <input type="data" />
            </div>
            <div className="form-edit-event">
                <label htmlFor="form-select">Вид</label>
                <select name="" id="form-select">
                    {types.map(type => {
                        return (<option value={type.title}>{type.title}</option>)
                    })}
                </select>
            </div>
            <div className="description-edit-event">
                <label htmlFor="description-textarea">Описание</label>
                <textarea name="" id="description-textarea"></textarea>
            </div>
            <div className="mileage-edit-event">
                <label htmlFor="">Пробег</label>
                <input type="text" />
            </div>
            <div className="sum-edit-event">
                <label htmlFor="">Сумма</label>
                <input type="text" />
            </div>
        </div>
    );
}

export default EditEvent;