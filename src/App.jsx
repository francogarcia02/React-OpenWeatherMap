import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Form from './components/Form/Form';
import WeatherPanel from './components/WeatherPanel/WeatherPanel'

function App() {
  return (
    <div>
        <Navbar/>
        <Form/>
        <WeatherPanel/>
    </div>
  );
}

export default App;