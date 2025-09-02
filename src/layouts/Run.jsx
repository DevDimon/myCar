import './Run.css'
import Clock from '../components/Clock'
import Weather from '../components/Weather'
import Speed from '../components/Speed'
import Button from '../components/ui/Button'
import { useEffect, useState } from 'react'
import Settings from '../components/Settings'
import {loadSettingsFromLS} from '../utils'

function Run() {
  const settings = loadSettingsFromLS();
  console.log(settings)

  const GEO_TIMEOUT = settings.GEO_TIMEOUT;
  let wakeLock = null;
  let watchId;

  const [speed, setSpeed] = useState(0);
  const [status, setStatus] = useState('Ожидание данных о местоположении...');
  const [isSound, setIsSound] = useState(settings.IS_SOUND_ENABLED);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const handleIsSound = () => {
    setIsSound(!isSound);
  }

  const requestWakeLock = () => {
    if ('wakeLock' in navigator) {
      try {
        wakeLock = navigator.wakeLock.request('screen');
        setStatus('Блокировка экрана активирована');
      } catch (err) {
        setStatus('Ошибка активации блокировки экрана: ' + err);
      }
    } else {
      setStatus('Wake Lock API не поддерживается');
    }
  }

  const requestFullscreen = () => {
    // if (document.documentElement.requestFullscreen) {
    //   document.documentElement.requestFullscreen();
    // }
    const element = document.documentElement;
    
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { /* Firefox */
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { /* Chrome, Safari */
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { /* IE/Edge */
      element.msRequestFullscreen();
    }
  }

  const handlePosition = (position) => {
    const currentSpeed = position.coords.speed;

    if (currentSpeed !== null) {
      setSpeed(Math.round(currentSpeed * 3.6));
    } else {
      setStatus('Данные о скорости недоступны');
    }
  }

  const handleError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        setStatus('Пользователь отказал в доступе к геолокации.');
        break;
      case error.POSITION_UNAVAILABLE:
        setStatus('Информация о местоположении недоступна.');
        break;
      case error.TIMEOUT:
        setStatus(
          'Истекло время ожидания запроса на определение местоположения.'
        );
        break;
      case error.UNKNOWN_ERROR:
        setStatus('Произошла неизвестная ошибка.');
        break;
    }
  }

  useEffect(() => {
    if ('geolocation' in navigator) {
      watchId = navigator.geolocation.watchPosition(handlePosition, handleError, {
        enableHighAccuracy: true,
        timeout: GEO_TIMEOUT,
        maximumAge: 0,
      })
    };
    requestWakeLock();

    const handleBodyClick = () => {
      requestFullscreen();
    };

    console.log('useEffect')

    document.body.addEventListener('click', handleBodyClick);

    return (() => {
      document.body.removeEventListener('click', handleBodyClick);
    })
  }, []);

  const settingsClose = () => {
    setSettingsOpen(false);
  }

  return (
    <div className='app'>
      <Clock />
      <Weather />
      <Speed speed={speed} status={status} />
      <div className="control">
        <Button icon={isSound ? 'fa-volume-up' : 'fa-volume-mute'} handle={handleIsSound} />
        <Button icon="fa-cog" handle={setSettingsOpen} />
      </div>
      {settingsOpen && <Settings handleClose={settingsClose} />}
    </div>
  )
}

export default Run
