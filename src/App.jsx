import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import WeatherPanel from './components/WeatherPanel/WeatherPanel'

function App() {
  return (
    <div>
        <Navbar/>
        <WeatherPanel/>
    </div>
  );
}

export default App;