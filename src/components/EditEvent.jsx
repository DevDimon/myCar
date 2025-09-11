import './EditEvent.css'

function EditEvent() {
    return (
        <div className="edit-event">
            <div className="data-edit-event">
                <label htmlFor="">Дата</label>
                <input type="data" />
            </div>
            <div className="form-edit-event">
                <label htmlFor="">Вид</label>
                <select name="" id=""></select>
            </div>
            <div className="description-edit-event">
                <label htmlFor="">Описание</label>
                <textarea name="" id=""></textarea>
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