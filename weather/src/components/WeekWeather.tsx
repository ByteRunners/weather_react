import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faCloud, faCloudRain } from "@fortawesome/free-solid-svg-icons";

interface WeekWeatherProps {
  weekData: { day: string; icon: any; temperature: number }[];
}

const WeekWeather: React.FC<WeekWeatherProps> = ({ weekData }) => {
  return (
    <div className="week-weather">
      {weekData.map((data, index) => (
        <div key={index} className="week-day">
          <div className="week-day-name">{data.day}</div>
          <FontAwesomeIcon icon={data.icon} className="weather-icons" />
          <div className="week-day-temp">{data.temperature}°C</div>
        </div>
      ))}
    </div>
  );
};

export default WeekWeather;