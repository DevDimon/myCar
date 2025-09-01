const settingsKey = 'appSettings';

function loadSettingsFromLS() {
    const settings = localStorage.getItem(settingsKey);
    return settings
        ? JSON.parse(settings)
        : {
            IS_SOUND_ENABLED: true,
            SPEED_LIMIT: 55,
            GEO_TIMEOUT: 5000,
        };
}

function saveSettingsToLS(settings) {
  localStorage.setItem(settingsKey, JSON.stringify(settings));
}

export {loadSettingsFromLS, saveSettingsToLS};