function Speed({speed, status}) {
    return (
        <div className="speed">
            <h1>Текущая скорость</h1>
            <div id="speed">{speed} км/ч</div>
            <div id="status">{status}</div>
        </div>
    )
}

export default Speed;