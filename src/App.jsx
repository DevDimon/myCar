import './App.css'
import Clock from './components/Clock'
import Weather from './components/Weather'
import Speed from './components/Speed'
import Control from './components/Control'


function App() {

  return (
    <div className='app'>
      <Clock/>
      <Weather/>
      <Speed/>
      <Control/>
    </div>
  )
}

export default App
