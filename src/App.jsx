import './App.css'
import Clock from './components/Clock'
import Weather from './components/Weather'
import Speed from './components/Speed'
import Control from './components/Control'
import { useEffect, useState } from 'react'


function App() {

  const GEO_TIMEOUT = 5000;
  let wakeLock = null;
  let watchId;

  const [speed, setSpeed] = useState(0);
  const [status, setStatus] = useState('Ожидание данных о местоположении...');

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
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
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

    document.body.addEventListener('click', requestFullscreen);

    return (() => {
      document.body.removeEventListener('click', requestFullscreen);
    })
});

return (
  <div className='app'>
    <Clock />
    <Weather />
    <Speed speed={speed} status={status} />
    <Control />
  </div>
)
}

export default App
