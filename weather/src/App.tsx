import './styles/App.css';
import './components/WeatherCard';
import WeatherCard from './components/WeatherCard';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faBell} from '@fortawesome/free-solid-svg-icons';

function App(){
  const currentWeather = {

    temperature:12,
    condition:'Mostly Cloudy',
    city:'Sanaa, Yemen',
    time: '8:00',
    humidity:12,
    windSpeed:7.7,
    uvindex:5,
    airQuality: 'Unhealthy'

  };

  return (
    <div style={{
      backgroundColor:'rgb(45, 47, 49)',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <div style={{
      backgroundColor:'#000',
      width: '100%',
      height:'60%',
      maxWidth: '1000px',
      padding: '100px',
      borderRadius: '35px',
      boxShadow: '0 4px 10px rgba(0,0,0.3)',
    }}>
      <div style={{
      display:'flex',
      justifyContent:'space-between',
      maxWidth: '1000px',
      alignItems:'center',
      position:'absolute',
      top: '-20px',
      left:'0',
      width:'100%',
      padding:'0 20px'
    }}>
      
    </div>
      <WeatherCard{...currentWeather}/>
    </div>
    </div>
  );
  
}

export default App;
