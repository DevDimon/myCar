import './App.css';
import BigButton from './components/ui/BigButton';
import Run from './layouts/Run';
import GoBack from './components/ui/GoBack';
import { useState } from 'react';
import Settings from './components/Settings';
import Events from './layouts/Events';

function App() {
    const [mode, setMode] = useState('Меню');

    const handleMode = (currentMode) => {
        setMode(currentMode);
    }

    const handleRun = () => {
        setMode('Поездка');
    }

    return (
        <div className='buttonsContainer'>
            {mode == 'Меню' &&
                <div className='bigButtonContainer'>
                    <BigButton icon='fa-car' title='Поездка' subtitle='Дата, время, погода, скорость' onClick={handleRun} />
                    <BigButton icon='fa-list-check' title='События' subtitle='Заправки, замены деталей, обслуживание' onClick={() => handleMode('События')} />
                    <BigButton icon='fa-cog' title='Настройки' subtitle='Скорость, звук и прочее' onClick={() => handleMode('Настройки')} />
                </div>
            }
            {mode != 'Меню' && <GoBack title={mode} onClick={() => setMode('Меню')} />}
            {mode == 'Поездка' && <Run />}
            {mode == 'Настройки' && <Settings/>}
            {mode == 'События' && <Events/>}
        </div>
    );
}

export default App;