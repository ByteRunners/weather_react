import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faCloud, faCloudRain } from "@fortawesome/free-solid-svg-icons";
import Highlights from "./Highlights";

interface WeekWeatherProps {
  weekData: { day: string; icon: any; temperature: number }[];
}

const WeekWeather: React.FC<WeekWeatherProps> = ({ weekData }) => {
  const currentWeather = {
    uvindex: 5,
    windSpeed: 7.7,
    sunrise: "6:00 AM",
    sunset: "6:00 PM",
    humidity: 12,
    visibility: "10 km",
    airQuality: "Unhealthy",
  };
  return (
    <div className="week-weather">
      {weekData.map((data, index) => (
        <div key={index} className="week-day">
          <div className="week-day-name">{data.day}</div>
          <FontAwesomeIcon icon={data.icon} className="weather-icons" />
          <div className="week-day-temp">{data.temperature}°C</div>
        </div>
      ))}
      <Highlights currentWeather={currentWeather} />
      </div>
  );
};

export default WeekWeather;