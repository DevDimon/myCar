import React, { useState } from "react";

function Settings() {
    const [speedValue, setSpeedValue] = useState(55)
    const [timeoutValue, setTimeoutValue] = useState(5)
    const [soundValue, setSoundValue] = useState(true)

    const speedHandler = (event) => {
        const speed = Number(event.target.value);
        setSpeedValue(speed);
        event.target.style.setProperty('--value', speed / 100);
    }

    const timeoutHandler = (event) => {
        const timeout = Number(event.target.value);
        setTimeoutValue(timeout);
        event.target.style.setProperty('--value', (timeout - 1) / 9);
    }

    const soundHandler = (event) => {
        const isChecked = event.target.checked;
        setSoundValue(isChecked);
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Настройки</h2>
                <form id="settings-form">
                    <div className="form-group">
                        <label htmlFor="speedLimit">Лимит скорости (0-100 км/ч):</label>
                        <input onChange={speedHandler} type="range" id="speedLimit" name="speedLimit" min="0" max="100" value={speedValue} style={{value: 1}} />
                        <span id="speedLimitValue">{speedValue} км/ч</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="geoTimeout">Таймаут опроса геолокации (1-10 сек):</label>
                        <input onChange={timeoutHandler} type="range" id="geoTimeout" name="geoTimeout" min="1" max="10" value={timeoutValue} />
                        <span id="geoTimeoutValue">{timeoutValue} сек</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="playSound" className="playSound">
                            <input onChange={soundHandler} type="checkbox" id="playSound" name="playSound" checked={soundValue} />
                            <div className="custom-checkbox"></div>
                            <div>Звуковое предупреждение</div>
                        </label>
                    </div>
                    <div className="settings-buttons">
                        <button type="submit" className="button-settings">
                            <i className="fas fa-save"></i>
                        </button>
                        <button type="button" id="closeSettings" className="button-settings">
                            <i className="fas fa-close"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Settings;