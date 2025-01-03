import "./styles/App.css";
import WeatherCard from "./components/WeatherCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [currentWeather, setCurrentWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const city = "Sanaa";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const apiKey = "f2341da0aea4121d25d4818a6567dabe"; 
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );

        const data = response.data;
        setCurrentWeather({
          temperature: data.main.temp,
          condition: data.weather[0].description,
          city: data.name,
          time: new Date().toLocaleTimeString(),
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          uvindex: 0, // UV Index not available in the current weather API
          airQuality: "Good", // Placeholder for air quality
        });
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch weather data");
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;


  return (
    <main className="container">
      <WeatherCard 
        temperature={currentWeather.temperature}
        condition={currentWeather.condition}
        city={currentWeather.city}
        time={currentWeather.time}
        humidity={currentWeather.humidity}
        windSpeed={currentWeather.windSpeed}
        uvindex={currentWeather.uvindex}
        airQuality={currentWeather.airQuality}
      />
    </main>
  );
}

export default App;