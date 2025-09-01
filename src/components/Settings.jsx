import React, { useEffect, useRef, useState } from "react";
import { loadSettingsFromLS, saveSettingsToLS } from '../utils'


function Settings({ handleClose }) {

    const speedRef = useRef(null);
    const timeoutRef = useRef(null);

    const settings = loadSettingsFromLS();

    const [speedValue, setSpeedValue] = useState(settings.SPEED_LIMIT)
    const [timeoutValue, setTimeoutValue] = useState(settings.GEO_TIMEOUT / 1000)
    const [soundValue, setSoundValue] = useState(settings.IS_SOUND_ENABLED)

    console.log('useEffectSettings')

    useEffect(() => {
        speedRef.current.style.setProperty('--value', settings.SPEED_LIMIT / 100);
        timeoutRef.current.style.setProperty('--value', ((settings.GEO_TIMEOUT / 1000) - 1) / 9);
    }, [])



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


    const saveHandler = () => {
        const appSettings = {
            IS_SOUND_ENABLED: soundValue,
            SPEED_LIMIT: speedValue,
            GEO_TIMEOUT: timeoutValue * 1000,
        };
        saveSettingsToLS(appSettings);
        handleClose();
    }


    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Настройки</h2>
                <div id="settings-form">
                    <div className="form-group">
                        <label htmlFor="speedLimit">Лимит скорости (0-100 км/ч):</label>
                        <input ref={speedRef} onChange={speedHandler} type="range" id="speedLimit" name="speedLimit" min="0" max="100" value={speedValue} />
                        <span id="speedLimitValue">{speedValue} км/ч</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="geoTimeout">Таймаут опроса геолокации (1-10 сек):</label>
                        <input ref={timeoutRef} onChange={timeoutHandler} type="range" id="geoTimeout" name="geoTimeout" min="1" max="10" value={timeoutValue} />
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
                        <button type="button" className="button-settings" onClick={saveHandler}>
                            <i className="fas fa-save"></i>
                        </button>
                        <button type="button" id="closeSettings" className="button-settings" onClick={handleClose}>
                            <i className="fas fa-close"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings;