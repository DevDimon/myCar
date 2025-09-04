import './GoBack.css'

function GoBack({title, onClick}) {
    return (
        <div className='goBack'>
            <div className="goBackIcon" onClick = {onClick}>
                <i className="fas fa-arrow-left"></i>
            </div>
            <div className="goBackTitle">
                {title}
            </div>
        </div>
    );
}

export default GoBack;