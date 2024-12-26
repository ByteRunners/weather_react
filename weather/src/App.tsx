import "./styles/App.css";
import "./components/WeatherCard";
import WeatherCard from "./components/WeatherCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell } from "@fortawesome/free-solid-svg-icons";

function App() {
  const currentWeather = {
    temperature: 12,
    condition: "Mostly Cloudy",
    city: "Sanaa, Yemen",
    time: "8:00",
    humidity: 12,
    windSpeed: 7.7,
    uvindex: 5,
    airQuality: "Unhealthy",
  };

  return (
    <main className="container">
      <WeatherCard />
    </main>
  );
}

export default App;
